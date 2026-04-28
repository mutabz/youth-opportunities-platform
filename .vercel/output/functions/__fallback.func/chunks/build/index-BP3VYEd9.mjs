import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _sfc_main$1 } from './ApplicationFormAdmin-B27CTyaX.mjs';
import { _ as _sfc_main$1$1 } from './OpportunitiesAnalytic-BUkv_jcB.mjs';
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-applications" }, _attrs))} data-v-ba2834f3><header class="app-header d-flex justify-content-between align-items-center" data-v-ba2834f3><div class="d-flex" data-v-ba2834f3><button class="btn me-3" data-v-ba2834f3>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-ba2834f3>Applications Admin</h3></div><div class="d-flex" data-v-ba2834f3><button class="btn btn-primary" data-v-ba2834f3>+ New Application</button><button class="btn btn-secondary" data-v-ba2834f3>Refresh</button></div></header>`);
      if (showCreateForm.value || editingApplication.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-ba2834f3><div class="modal-dialog" data-v-ba2834f3><div class="modal-content" data-v-ba2834f3><div class="modal-header" data-v-ba2834f3><h5 class="modal-title" data-v-ba2834f3>${ssrInterpolate(_ctx.editingCategory ? "Edit Category" : "Create Category")}</h5><button type="button" class="btn-close" data-v-ba2834f3></button></div><div class="modal-body" data-v-ba2834f3>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          initialForm: editingApplication.value || null,
          onSaved: onFormSaved,
          onCancel: closeForm
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row mt-4" data-v-ba2834f3><aside class="col-lg-3 sidebar sticky-top" data-v-ba2834f3><div class="filters mt-3 gap-2 align-items-center" data-v-ba2834f3><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="form-control w-100 mb-3" placeholder="Search applicant..." data-v-ba2834f3><select class="form-select w-100" data-v-ba2834f3><option value="" data-v-ba2834f3${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "") : ssrLooseEqual(statusFilter.value, "")) ? " selected" : ""}>All Status</option><option value="pending" data-v-ba2834f3${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "pending") : ssrLooseEqual(statusFilter.value, "pending")) ? " selected" : ""}>Pending</option><option value="under_review" data-v-ba2834f3${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "under_review") : ssrLooseEqual(statusFilter.value, "under_review")) ? " selected" : ""}>Under Review</option><option value="shortlisted" data-v-ba2834f3${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "shortlisted") : ssrLooseEqual(statusFilter.value, "shortlisted")) ? " selected" : ""}>Shortlisted</option><option value="accepted" data-v-ba2834f3${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "accepted") : ssrLooseEqual(statusFilter.value, "accepted")) ? " selected" : ""}>Accepted</option><option value="rejected" data-v-ba2834f3${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "rejected") : ssrLooseEqual(statusFilter.value, "rejected")) ? " selected" : ""}>Rejected</option><option value="withdrawn" data-v-ba2834f3${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "withdrawn") : ssrLooseEqual(statusFilter.value, "withdrawn")) ? " selected" : ""}>Withdrawn</option></select></div><div class="card shadow-sm mb-3" data-v-ba2834f3><div class="card-body" data-v-ba2834f3><h6 class="fw-bold" data-v-ba2834f3>Quick Links</h6>`);
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
            _push2(`<span data-v-ba2834f3${_scopeId}>Dashboard</span>`);
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
            _push2(`<span data-v-ba2834f3${_scopeId}>Opportunities</span>`);
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
            _push2(`<span data-v-ba2834f3${_scopeId}>Users</span>`);
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
            _push2(`<span data-v-ba2834f3${_scopeId}>Applications</span>`);
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
      _push(`</div></div></aside><section class="col-lg-6 sidebar transparent sticky-top" data-v-ba2834f3><div class="d-flex justify-content-between" data-v-ba2834f3><div class="text-wrap" data-v-ba2834f3>`);
      if (searchQuery.value) {
        _push(`<strong data-v-ba2834f3>Search Results for: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-ba2834f3>${ssrInterpolate(searchQuery.value)}</span></div><div class="" data-v-ba2834f3>`);
      if (statusFilter.value) {
        _push(`<strong data-v-ba2834f3>Status: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-ba2834f3>${ssrInterpolate(statusFilter.value)}</span></div></div><section class="mt-3" data-v-ba2834f3><table class="table table-hover table-bordered" data-v-ba2834f3><thead class="table-dark" data-v-ba2834f3><tr data-v-ba2834f3><th data-v-ba2834f3>Applicant</th><th data-v-ba2834f3>Email</th><th data-v-ba2834f3>Status</th><th data-v-ba2834f3>Submitted</th><th data-v-ba2834f3>Actions</th></tr></thead><tbody data-v-ba2834f3><!--[-->`);
      ssrRenderList(filteredApplications.value, (app) => {
        _push(`<tr data-v-ba2834f3><td data-v-ba2834f3>${ssrInterpolate(app.full_name)}</td><td data-v-ba2834f3>${ssrInterpolate(app.email)}</td><td data-v-ba2834f3><span class="${ssrRenderClass([statusBadge(app.status), "badge"])}" data-v-ba2834f3>${ssrInterpolate(app.status)}</span></td><td data-v-ba2834f3>${ssrInterpolate(formatDate(app.submitted_at))}</td><td data-v-ba2834f3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/applications/" + app.id,
          class: "btn btn-act text-primary me-2"
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
        _push(`<button class="btn btn-act text-danger" data-v-ba2834f3>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:trash" }, null, _parent));
        _push(`</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredApplications.value.length) {
        _push(`<tr data-v-ba2834f3><td colspan="8" class="text-center" data-v-ba2834f3> No applications found </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section>`);
      if (deleteId.value) {
        _push(`<div class="modal fade show d-flex justify-content-between align-items-center" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-ba2834f3><div class="modal-dialog" data-v-ba2834f3><div class="modal-content" data-v-ba2834f3><div class="modal-header" data-v-ba2834f3><h5 class="modal-title" data-v-ba2834f3>Confirm Delete</h5><button class="btn-close" data-v-ba2834f3></button></div><div class="modal-body" data-v-ba2834f3> Are you sure you want to delete this application? </div><div class="modal-footer" data-v-ba2834f3><button class="btn btn-secondary" data-v-ba2834f3> Cancel </button><button class="btn btn-danger" data-v-ba2834f3> Delete </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><aside class="col-lg-3 sidebar sticky-top" data-v-ba2834f3><div class="card shadow-sm mb-3" data-v-ba2834f3><div class="card-body" data-v-ba2834f3>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(`</div></div></aside></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/applications/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ba2834f3"]]);

export { index as default };
//# sourceMappingURL=index-BP3VYEd9.mjs.map
