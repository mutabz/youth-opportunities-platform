import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { O as OpportunityForm } from './OpportunityForm-BOKMIYtZ.mjs';
import { a as _sfc_main$1 } from './OpportunitiesAnalytic-BUkv_jcB.mjs';
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-opportunities" }, _attrs))} data-v-2e208a71><header class="app-header d-flex justify-content-between align-items-center" data-v-2e208a71><div class="d-flex" data-v-2e208a71><button class="btn me-3" data-v-2e208a71>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-2e208a71>Opportunities Admin</h3></div><div class="d-flex" data-v-2e208a71><button class="btn btn-primary" data-v-2e208a71>+ New Opportunity</button><button class="btn btn-secondary" data-v-2e208a71><span class="" data-v-2e208a71></span>Refresh</button></div></header><div class="row mt-4" data-v-2e208a71><aside class="col-lg-3 sidebar sticky-top" data-v-2e208a71><div class="filters mt-3 gap-2 align-items-center" data-v-2e208a71><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="form-control w-100 mt-2" placeholder="Search by title or type..." data-v-2e208a71><select class="form-select w-100 mt-2" data-v-2e208a71><option value="" data-v-2e208a71${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "") : ssrLooseEqual(statusFilter.value, "")) ? " selected" : ""}>All Status</option><option value="Open" data-v-2e208a71${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "Open") : ssrLooseEqual(statusFilter.value, "Open")) ? " selected" : ""}>Open</option><option value="Closed" data-v-2e208a71${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "Closed") : ssrLooseEqual(statusFilter.value, "Closed")) ? " selected" : ""}>Closed</option><option value="Upcoming" data-v-2e208a71${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "Upcoming") : ssrLooseEqual(statusFilter.value, "Upcoming")) ? " selected" : ""}>Upcoming</option></select><select class="form-select w-100 mt-2" data-v-2e208a71><option value="" data-v-2e208a71${ssrIncludeBooleanAttr(Array.isArray(typeFilter.value) ? ssrLooseContain(typeFilter.value, "") : ssrLooseEqual(typeFilter.value, "")) ? " selected" : ""}>All Types</option><!--[-->`);
      ssrRenderList(opportunityTypes.value, (t) => {
        _push(`<option${ssrRenderAttr("value", t.name)} data-v-2e208a71${ssrIncludeBooleanAttr(Array.isArray(typeFilter.value) ? ssrLooseContain(typeFilter.value, t.name) : ssrLooseEqual(typeFilter.value, t.name)) ? " selected" : ""}>${ssrInterpolate(t.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="card shadow-sm mb-3" data-v-2e208a71><div class="card-body" data-v-2e208a71><h6 class="fw-bold" data-v-2e208a71>Quick Links</h6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:briefcase",
              class: "me-3"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-2e208a71${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:briefcase",
                class: "me-3"
              }),
              createVNode("span", null, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/opportunities",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:briefcase",
              class: "me-3"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-2e208a71${_scopeId}>Opportunities</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:briefcase",
                class: "me-3"
              }),
              createVNode("span", null, "Opportunities")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/users",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:users",
              class: "me-3"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-2e208a71${_scopeId}>Users</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:users",
                class: "me-3"
              }),
              createVNode("span", null, "Users")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/applications",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:list",
              class: "me-3"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-2e208a71${_scopeId}>Applications</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:list",
                class: "me-3"
              }),
              createVNode("span", null, "Applications")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></aside><section class="col-lg-6 sidebar transparent sticky-top" data-v-2e208a71><div class="d-flex" data-v-2e208a71><div class="text-wrap" data-v-2e208a71>`);
      if (searchQuery.value) {
        _push(`<strong data-v-2e208a71>Search Results for: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-2e208a71>${ssrInterpolate(searchQuery.value)}</span></div><div class="" data-v-2e208a71>`);
      if (statusFilter.value) {
        _push(`<strong data-v-2e208a71>Status: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-2e208a71>${ssrInterpolate(statusFilter.value)}</span></div><div class="" data-v-2e208a71>`);
      if (typeFilter.value) {
        _push(`<strong data-v-2e208a71>Type: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-2e208a71>${ssrInterpolate(typeFilter.value)}</span></div></div>`);
      if (!showCreateForm.value) {
        _push(`<div class="mt-3" data-v-2e208a71><table class="table table-hover table-bordered" data-v-2e208a71><thead class="table-dark" data-v-2e208a71><tr data-v-2e208a71><th data-v-2e208a71>Title</th><th data-v-2e208a71>Category</th><th data-v-2e208a71>Status</th><th data-v-2e208a71>Organization</th><th data-v-2e208a71>Actions</th></tr></thead><tbody data-v-2e208a71><!--[-->`);
        ssrRenderList(filteredOpportunities.value, (opp) => {
          _push(`<tr data-v-2e208a71><td class="small" data-v-2e208a71>${ssrInterpolate(opp.title)}</td><td class="small text-muted" data-v-2e208a71>${ssrInterpolate(opp.category)}</td><td class="small text-muted" data-v-2e208a71>${ssrInterpolate(opp.status)}</td><td class="small text-muted" data-v-2e208a71>${ssrInterpolate(opp.provider.organization_name || "N/A")}</td><td class="align-items-center" data-v-2e208a71>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/adm/mod/opportunities/" + opp.id,
            class: "btn btn-act text-primary me-1"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:pencil" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "fa6-solid:pencil" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<button class="btn btn-act text-danger" data-v-2e208a71>`);
          _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:trash" }, null, _parent));
          _push(`</button></td></tr>`);
        });
        _push(`<!--]-->`);
        if (!filteredOpportunities.value.length) {
          _push(`<tr data-v-2e208a71><td colspan="6" class="text-center" data-v-2e208a71>No opportunities found.</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showCreateForm.value || editingOpportunity.value) {
        _push(`<div class="fade show d-block" data-v-2e208a71><div class="" data-v-2e208a71><div class="modal-content" data-v-2e208a71><div class="modal-header" data-v-2e208a71><h5 class="modal-title" data-v-2e208a71>${ssrInterpolate(editingOpportunity.value ? "Edit Opportunity" : "Create Opportunity")}</h5><button type="button" class="btn-close" data-v-2e208a71></button></div><div class="modal-body" data-v-2e208a71>`);
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
        _push(`<div class="modal fade show d-flex justify-content-between align-items-center" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-2e208a71><div class="modal-dialog" data-v-2e208a71><div class="modal-content" data-v-2e208a71><div class="modal-header" data-v-2e208a71><h5 class="modal-title" data-v-2e208a71>Confirm Deletion</h5><button type="button" class="btn-close" data-v-2e208a71></button></div><div class="modal-body" data-v-2e208a71> Are you sure you want to delete this opportunity? </div><div class="modal-footer" data-v-2e208a71><button class="btn btn-secondary" data-v-2e208a71>Cancel</button><button class="btn btn-danger" data-v-2e208a71>Delete</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><aside class="col-lg-3 sidebar sticky-top" data-v-2e208a71><div class="card shadow-sm mb-3" data-v-2e208a71><div class="card-body" data-v-2e208a71><h6 class="fw-bold text-uppercase text-center" data-v-2e208a71>Opportunities by Category</h6>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</div></div></aside></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/opportunities/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e208a71"]]);

export { index as default };
//# sourceMappingURL=index-D-9pe_2m.mjs.map
