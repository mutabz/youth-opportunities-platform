import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { O as OpportunityForm } from './OpportunityForm-BOKMIYtZ.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'perfect-debounce';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@iconify/utils';
import 'node:module';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './internships-CK2Y52Ka.mjs';
import './grants-9_MDG5Dl.mjs';
import './jobs-BmqpPP1y.mjs';
import './scholarships-CJvkA768.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const dataStore = useDataStore();
    const opportunities = ref([]);
    const loading = ref(false);
    const searchQuery = ref("");
    const statusFilter = ref("");
    const typeFilter = ref("");
    const showCreateForm = ref(false);
    const editingOpportunity = ref(null);
    const deleteId = ref(null);
    const opportunityTypes = ref([]);
    const fetchOpportunities = async (force = false) => {
      loading.value = true;
      await dataStore.fetchData("opportunities", force);
      await dataStore.fetchData("opp_type", force);
      opportunities.value = dataStore.items.opportunities || [];
      opportunityTypes.value = dataStore.items.opp_type || [];
      loading.value = false;
    };
    const filteredOpportunities = computed(() => {
      return opportunities.value.filter((o) => {
        var _a;
        const matchesSearch = o.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || ((_a = o.opportunity_type) == null ? void 0 : _a.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchesStatus = statusFilter.value ? o.status === statusFilter.value : true;
        const matchesType = typeFilter.value ? o.opportunity_type === typeFilter.value : true;
        return matchesSearch && matchesStatus && matchesType;
      });
    });
    const closeForm = () => {
      showCreateForm.value = false;
      editingOpportunity.value = null;
    };
    const onFormSaved = async () => {
      await fetchOpportunities(true);
      closeForm();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-opportunities" }, _attrs))} data-v-816fb455><header class="app-header d-flex justify-content-between align-items-center" data-v-816fb455><div class="d-flex" data-v-816fb455><button class="btn me-3" data-v-816fb455>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-816fb455>Opportunities Management</h3></div><button class="btn btn-primary" data-v-816fb455>+ New Opportunity</button></header><section class="filters mt-3 d-flex gap-2 align-items-center" data-v-816fb455><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="form-control" placeholder="Search by title or type..." data-v-816fb455><select class="form-select" data-v-816fb455><option value="" data-v-816fb455${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "") : ssrLooseEqual(statusFilter.value, "")) ? " selected" : ""}>All Status</option><option value="Open" data-v-816fb455${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "Open") : ssrLooseEqual(statusFilter.value, "Open")) ? " selected" : ""}>Open</option><option value="Closed" data-v-816fb455${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "Closed") : ssrLooseEqual(statusFilter.value, "Closed")) ? " selected" : ""}>Closed</option><option value="Upcoming" data-v-816fb455${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "Upcoming") : ssrLooseEqual(statusFilter.value, "Upcoming")) ? " selected" : ""}>Upcoming</option></select><select class="form-select" data-v-816fb455><option value="" data-v-816fb455${ssrIncludeBooleanAttr(Array.isArray(typeFilter.value) ? ssrLooseContain(typeFilter.value, "") : ssrLooseEqual(typeFilter.value, "")) ? " selected" : ""}>All Types</option><!--[-->`);
      ssrRenderList(opportunityTypes.value, (t) => {
        _push(`<option${ssrRenderAttr("value", t.name)} data-v-816fb455${ssrIncludeBooleanAttr(Array.isArray(typeFilter.value) ? ssrLooseContain(typeFilter.value, t.name) : ssrLooseEqual(typeFilter.value, t.name)) ? " selected" : ""}>${ssrInterpolate(t.name)}</option>`);
      });
      _push(`<!--]--></select><button class="btn btn-secondary" data-v-816fb455><span class="" data-v-816fb455></span>Refresh</button></section><section class="mt-3" data-v-816fb455><table class="table table-hover table-bordered" data-v-816fb455><thead class="table-dark" data-v-816fb455><tr data-v-816fb455><th data-v-816fb455>Title</th><th data-v-816fb455>Type</th><th data-v-816fb455>Status</th><th data-v-816fb455>Organization</th><th data-v-816fb455>Location</th><th data-v-816fb455>Actions</th></tr></thead><tbody data-v-816fb455><!--[-->`);
      ssrRenderList(filteredOpportunities.value, (opp) => {
        _push(`<tr data-v-816fb455><td data-v-816fb455>${ssrInterpolate(opp.title)}</td><td data-v-816fb455>${ssrInterpolate(opp.opportunity_type)}</td><td data-v-816fb455>${ssrInterpolate(opp.status)}</td><td data-v-816fb455>${ssrInterpolate(opp.provider.organization_name || "N/A")}</td><td data-v-816fb455>${ssrInterpolate(opp.host_country)}, ${ssrInterpolate(opp.location.city || "N/A")}</td><td data-v-816fb455>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/prt/opportunities/" + opp.id,
          class: "btn btn-sm btn-warning me-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Edit`);
            } else {
              return [
                createTextVNode("Edit")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button class="btn btn-sm btn-danger" data-v-816fb455>Delete</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredOpportunities.value.length) {
        _push(`<tr data-v-816fb455><td colspan="6" class="text-center" data-v-816fb455>No opportunities found.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section>`);
      if (showCreateForm.value || editingOpportunity.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-816fb455><div class="modal-dialog modal-xl" data-v-816fb455><div class="modal-content" data-v-816fb455><div class="modal-header" data-v-816fb455><h5 class="modal-title" data-v-816fb455>${ssrInterpolate(editingOpportunity.value ? "Edit Opportunity" : "Create Opportunity")}</h5><button type="button" class="btn-close" data-v-816fb455></button></div><div class="modal-body" data-v-816fb455>`);
        _push(ssrRenderComponent(OpportunityForm, {
          initialForm: editingOpportunity.value || null,
          onSaved: onFormSaved,
          onCancel: closeForm
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (deleteId.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-816fb455><div class="modal-dialog" data-v-816fb455><div class="modal-content" data-v-816fb455><div class="modal-header" data-v-816fb455><h5 class="modal-title" data-v-816fb455>Confirm Deletion</h5><button type="button" class="btn-close" data-v-816fb455></button></div><div class="modal-body" data-v-816fb455> Are you sure you want to delete this opportunity? </div><div class="modal-footer" data-v-816fb455><button class="btn btn-secondary" data-v-816fb455>Cancel</button><button class="btn btn-danger" data-v-816fb455>Delete</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/prt/opportunities/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-816fb455"]]);

export { index as default };
//# sourceMappingURL=index-CWaXG3wB.mjs.map
