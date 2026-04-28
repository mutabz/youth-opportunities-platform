import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _sfc_main$1 } from './ApplicationFormAdmin-B27CTyaX.mjs';
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
    const dataStore = useDataStore();
    const showCreateForm = ref(false);
    const applications = ref([]);
    const searchQuery = ref("");
    const statusFilter = ref("");
    const deleteId = ref(null);
    const editingApplication = ref(null);
    const fetchApplications = async (force = false) => {
      await dataStore.fetchData("applications", force);
      applications.value = dataStore.items.applications || [];
    };
    const filteredApplications = computed(() => {
      return applications.value.filter((app) => {
        var _a, _b;
        const matchesSearch = ((_a = app.full_name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_b = app.email) == null ? void 0 : _b.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchesStatus = statusFilter.value ? app.status === statusFilter.value : true;
        return matchesSearch && matchesStatus;
      });
    });
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
    const closeForm = () => {
      showCreateForm.value = false;
      editingApplication.value = null;
    };
    const onFormSaved = async () => {
      await fetchApplications(true);
      closeForm();
    };
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-applications" }, _attrs))} data-v-e03b9b34><header class="app-header d-flex justify-content-between align-items-center" data-v-e03b9b34><div class="d-flex" data-v-e03b9b34><button class="btn me-3" data-v-e03b9b34>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-e03b9b34>Applications Admin</h3></div><div class="d-flex" data-v-e03b9b34><button class="btn btn-primary" data-v-e03b9b34>+ New Application</button><button class="btn btn-secondary" data-v-e03b9b34>Refresh</button></div></header>`);
      if (showCreateForm.value || editingApplication.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-e03b9b34><div class="modal-dialog" data-v-e03b9b34><div class="modal-content" data-v-e03b9b34><div class="modal-header" data-v-e03b9b34><h5 class="modal-title" data-v-e03b9b34>${ssrInterpolate(_ctx.editingCategory ? "Edit Category" : "Create Category")}</h5><button type="button" class="btn-close" data-v-e03b9b34></button></div><div class="modal-body" data-v-e03b9b34>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          initialForm: editingApplication.value || null,
          onSaved: onFormSaved,
          onCancel: closeForm
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="filters mt-3 d-flex gap-2" data-v-e03b9b34><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="form-control" placeholder="Search applicant..." data-v-e03b9b34><select class="form-select" data-v-e03b9b34><option value="" data-v-e03b9b34${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "") : ssrLooseEqual(statusFilter.value, "")) ? " selected" : ""}>All Status</option><option value="pending" data-v-e03b9b34${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "pending") : ssrLooseEqual(statusFilter.value, "pending")) ? " selected" : ""}>Pending</option><option value="under_review" data-v-e03b9b34${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "under_review") : ssrLooseEqual(statusFilter.value, "under_review")) ? " selected" : ""}>Under Review</option><option value="shortlisted" data-v-e03b9b34${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "shortlisted") : ssrLooseEqual(statusFilter.value, "shortlisted")) ? " selected" : ""}>Shortlisted</option><option value="accepted" data-v-e03b9b34${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "accepted") : ssrLooseEqual(statusFilter.value, "accepted")) ? " selected" : ""}>Accepted</option><option value="rejected" data-v-e03b9b34${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "rejected") : ssrLooseEqual(statusFilter.value, "rejected")) ? " selected" : ""}>Rejected</option><option value="withdrawn" data-v-e03b9b34${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "withdrawn") : ssrLooseEqual(statusFilter.value, "withdrawn")) ? " selected" : ""}>Withdrawn</option></select></section><section class="mt-3" data-v-e03b9b34><table class="table table-hover table-bordered" data-v-e03b9b34><thead class="table-dark" data-v-e03b9b34><tr data-v-e03b9b34><th data-v-e03b9b34>Applicant</th><th data-v-e03b9b34>Email</th><th data-v-e03b9b34>Opportunity</th><th data-v-e03b9b34>Country</th><th data-v-e03b9b34>Status</th><th data-v-e03b9b34>Score</th><th data-v-e03b9b34>Submitted</th><th data-v-e03b9b34>Actions</th></tr></thead><tbody data-v-e03b9b34><!--[-->`);
      ssrRenderList(filteredApplications.value, (app) => {
        var _a;
        _push(`<tr data-v-e03b9b34><td data-v-e03b9b34>${ssrInterpolate(app.full_name)}</td><td data-v-e03b9b34>${ssrInterpolate(app.email)}</td><td data-v-e03b9b34>${ssrInterpolate(((_a = app.opportunity) == null ? void 0 : _a.title) || "N/A")}</td><td data-v-e03b9b34>${ssrInterpolate(app.country)}</td><td data-v-e03b9b34><span class="${ssrRenderClass([statusBadge(app.status), "badge"])}" data-v-e03b9b34>${ssrInterpolate(app.status)}</span></td><td data-v-e03b9b34>${ssrInterpolate(app.score || "-")}</td><td data-v-e03b9b34>${ssrInterpolate(formatDate(app.submitted_at))}</td><td data-v-e03b9b34>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/prt/applications/" + app.id,
          class: "btn btn-sm btn-warning me-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View `);
            } else {
              return [
                createTextVNode(" View ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button class="btn btn-sm btn-danger" data-v-e03b9b34> Delete </button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredApplications.value.length) {
        _push(`<tr data-v-e03b9b34><td colspan="8" class="text-center" data-v-e03b9b34> No applications found </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section>`);
      if (deleteId.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-e03b9b34><div class="modal-dialog" data-v-e03b9b34><div class="modal-content" data-v-e03b9b34><div class="modal-header" data-v-e03b9b34><h5 class="modal-title" data-v-e03b9b34>Confirm Delete</h5><button class="btn-close" data-v-e03b9b34></button></div><div class="modal-body" data-v-e03b9b34> Are you sure you want to delete this application? </div><div class="modal-footer" data-v-e03b9b34><button class="btn btn-secondary" data-v-e03b9b34> Cancel </button><button class="btn btn-danger" data-v-e03b9b34> Delete </button></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/prt/applications/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e03b9b34"]]);

export { index as default };
//# sourceMappingURL=index-CStzMIk4.mjs.map
