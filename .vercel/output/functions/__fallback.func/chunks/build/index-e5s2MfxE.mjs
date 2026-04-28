import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { O as OpportunityDisplay } from './OpportunityDisplay-7x-eoCBj.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    const opportunities = ref([]);
    const applications = ref([]);
    ref([]);
    const opportunityCategories = ref([]);
    const selectedAppId = ref("");
    const showOppModal = ref(false);
    const recentOpportunities = computed(() => {
      return opportunities.value.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5);
    });
    const recentApplications = computed(() => {
      return applications.value.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5);
    });
    const openOpportunities = computed(
      () => opportunities.value.filter((o) => o.status === "Open").length
    );
    const statusBadge = (status) => {
      switch (status) {
        case "accepted":
          return "bg-success";
        case "rejected":
          return "bg-danger";
        case "shortlisted":
          return "bg-primary";
        case "under_review":
          return "bg-warning text-dark";
        case "withdrawn":
          return "bg-secondary";
        default:
          return "bg-dark";
      }
    };
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString();
    };
    const closeForm = () => {
      selectedAppId.value = "";
      showOppModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-dashboard" }, _attrs))} data-v-356398c6><header class="app-header d-flex justify-content-between align-items-center" data-v-356398c6><div class="d-flex" data-v-356398c6><button class="btn me-3" data-v-356398c6>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-356398c6>Partner&#39;s Dashboard</h3></div><div class="d-flex gap-2" data-v-356398c6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/prt/opportunities",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Opportunities `);
          } else {
            return [
              createTextVNode(" Manage Opportunities ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="btn btn-secondary" data-v-356398c6> Refresh </button></div></header><section class="row mt-4 g-3" data-v-356398c6><div class="col-md-3" data-v-356398c6><div class="card shadow-lg border-0" data-v-356398c6><div class="card-body" data-v-356398c6><h6 data-v-356398c6>Total Opportunities</h6><h3 data-v-356398c6>${ssrInterpolate(opportunities.value.length)}</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/prt/opportunities",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Opportunities `);
          } else {
            return [
              createTextVNode(" Manage Opportunities ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-356398c6><div class="card shadow-lg border-0" data-v-356398c6><div class="card-body" data-v-356398c6><h6 data-v-356398c6>Opportunity Categories</h6><h3 data-v-356398c6>${ssrInterpolate(opportunityCategories.value.length)}</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/prt/opportunities/categories",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Opportunities Categories `);
          } else {
            return [
              createTextVNode(" Manage Opportunities Categories ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-356398c6><div class="card shadow-lg border-0" data-v-356398c6><div class="card-body" data-v-356398c6><h6 data-v-356398c6>Open Opportunities</h6><h3 data-v-356398c6>${ssrInterpolate(openOpportunities.value)}</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/prt/opportunities",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Opportunities `);
          } else {
            return [
              createTextVNode(" Manage Opportunities ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-356398c6><div class="card shadow-lg border-0" data-v-356398c6><div class="card-body" data-v-356398c6><h6 class="text-muted" data-v-356398c6>Applications</h6><h3 data-v-356398c6>${ssrInterpolate(applications.value.length)}</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/prt/applications",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Applications `);
          } else {
            return [
              createTextVNode(" View Applications ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="mt-4" data-v-356398c6><div class="d-flex justify-content-between align-items-center mb-2" data-v-356398c6><h5 data-v-356398c6>Recent Opportunities</h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/prt/opportunities",
        class: "btn btn-sm btn-outline-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All `);
          } else {
            return [
              createTextVNode(" View All ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><table class="table table-hover table-bordered" data-v-356398c6><thead class="table-dark" data-v-356398c6><tr data-v-356398c6><th data-v-356398c6>Title</th><th data-v-356398c6>Type</th><th data-v-356398c6>Status</th><th data-v-356398c6>Organization</th><th data-v-356398c6>Location</th></tr></thead><tbody data-v-356398c6><!--[-->`);
      ssrRenderList(recentOpportunities.value, (opp) => {
        var _a, _b;
        _push(`<tr data-v-356398c6><td data-v-356398c6>${ssrInterpolate(opp.title)}</td><td data-v-356398c6>${ssrInterpolate(opp.opportunity_type)}</td><td data-v-356398c6><span class="${ssrRenderClass([{ "bg-success": opp.status === "Open", "bg-secondary": opp.status === "Closed", "bg-warning text-dark": opp.status === "Upcoming" }, "badge"])}" data-v-356398c6>${ssrInterpolate(opp.status)}</span></td><td data-v-356398c6>${ssrInterpolate(((_a = opp.provider) == null ? void 0 : _a.organization_name) || "N/A")}</td><td data-v-356398c6>${ssrInterpolate(opp.host_country)}, ${ssrInterpolate(((_b = opp.location) == null ? void 0 : _b.city) || "N/A")}</td></tr>`);
      });
      _push(`<!--]-->`);
      if (!recentOpportunities.value.length) {
        _push(`<tr data-v-356398c6><td colspan="5" class="text-center" data-v-356398c6> No opportunities yet </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section><section class="mt-4" data-v-356398c6><table class="table table-hover table-bordered" data-v-356398c6><thead class="table-dark" data-v-356398c6><tr data-v-356398c6><th data-v-356398c6>Applicant</th><th data-v-356398c6>Email</th><th data-v-356398c6>Opportunity</th><th data-v-356398c6>Country</th><th data-v-356398c6>Status</th><th data-v-356398c6>Submitted</th></tr></thead><tbody data-v-356398c6><!--[-->`);
      ssrRenderList(recentApplications.value, (app) => {
        _push(`<tr data-v-356398c6><td data-v-356398c6>${ssrInterpolate(app.full_name)}</td><td data-v-356398c6>${ssrInterpolate(app.email)}</td><td class="pointer" data-v-356398c6>View Opportunity </td><td data-v-356398c6>${ssrInterpolate(app.country)}</td><td data-v-356398c6><span class="${ssrRenderClass([statusBadge(app.status), "badge"])}" data-v-356398c6>${ssrInterpolate(app.status)}</span></td><td data-v-356398c6>${ssrInterpolate(formatDate(app.submitted_at))}</td></tr>`);
      });
      _push(`<!--]-->`);
      if (!recentApplications.value.length) {
        _push(`<tr data-v-356398c6><td colspan="8" class="text-center" data-v-356398c6> No applications found </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section>`);
      if (showOppModal.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-356398c6><div class="modal-dialog" data-v-356398c6><div class="modal-content" data-v-356398c6><div class="modal-header" data-v-356398c6><h3 class="fw-bold text-uppercase mx-5 modal-title" data-v-356398c6>Applied Opportunity</h3><button type="button" class="btn-close" data-v-356398c6></button></div><div class="modal-body" data-v-356398c6>`);
        _push(ssrRenderComponent(unref(OpportunityDisplay), {
          initialForm: selectedAppId.value,
          onCancel: closeForm
        }, null, _parent));
        _push(`</div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/prt/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-356398c6"]]);

export { index as default };
//# sourceMappingURL=index-e5s2MfxE.mjs.map
