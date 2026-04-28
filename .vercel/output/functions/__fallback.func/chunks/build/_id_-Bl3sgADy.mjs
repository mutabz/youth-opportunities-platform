import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, k as useRoute } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { g as getInitials } from './utils-C8zi-Gnd.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    const route = useRoute();
    const user = ref({});
    ref(false);
    ref(false);
    ref(null);
    route.params.id;
    const deleteId = ref(null);
    const jobSeeker = ref({});
    const organizations = ref([]);
    const communities = ref([]);
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString();
    };
    const jsonSections = [
      { key: "education", label: "Education" },
      { key: "experience", label: "Experience" },
      { key: "trainings", label: "Trainings" },
      { key: "languages", label: "Languages" },
      { key: "projects", label: "Projects" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><header class="app-header d-flex justify-content-between align-items-center" data-v-33654b23><div class="d-flex" data-v-33654b23><button class="btn me-3" data-v-33654b23>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-left" }, null, _parent));
      _push(`</button><h3 data-v-33654b23>User Management</h3></div><div class="d-flex gap-2" data-v-33654b23><button class="btn btn-primary" data-v-33654b23> Edit User </button><button class="btn btn-danger" data-v-33654b23> Delete </button><button class="btn btn-secondary" data-v-33654b23> Refresh </button></div></header><div class="row mt-2" data-v-33654b23><aside class="col-lg-3 sidebar sticky-top" data-v-33654b23><div class="card shadow-sm mb-3 text-center" data-v-33654b23><div class="card-body" data-v-33654b23><div class="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center mx-auto mb-3" style="${ssrRenderStyle({ "width": "80px", "height": "80px", "font-size": "24px" })}" data-v-33654b23>${ssrInterpolate(unref(getInitials)((_a = user.value) == null ? void 0 : _a.full_name))}</div><h5 data-v-33654b23>${ssrInterpolate((_b = user.value) == null ? void 0 : _b.full_name)}</h5><p class="text-muted" data-v-33654b23>${ssrInterpolate((_c = user.value) == null ? void 0 : _c.email)}</p><span class="badge bg-primary" data-v-33654b23>${ssrInterpolate((_d = user.value) == null ? void 0 : _d.role)}</span><hr data-v-33654b23><div class="small text-start" data-v-33654b23><p data-v-33654b23><strong data-v-33654b23>ID:</strong> ${ssrInterpolate((_e = user.value) == null ? void 0 : _e.id)}</p><p data-v-33654b23><strong data-v-33654b23>Joined:</strong> ${ssrInterpolate(formatDate((_f = user.value) == null ? void 0 : _f.created_at))}</p></div></div></div><div class="card shadow-sm" data-v-33654b23><div class="card-body" data-v-33654b23><h6 class="fw-bold" data-v-33654b23>Admin Actions</h6><button class="btn btn-outline-primary w-100 mb-2" data-v-33654b23>Edit User</button><button class="btn btn-outline-danger w-100 mb-2" data-v-33654b23>Delete User</button><button class="btn btn-outline-warning w-100" data-v-33654b23>Suspend User</button></div></div><div class="card shadow-sm mb-3" data-v-33654b23><div class="card-body" data-v-33654b23><h6 class="fw-bold" data-v-33654b23>Quick Links</h6>`);
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
            _push2(`<span data-v-33654b23${_scopeId}>Dashboard</span>`);
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
        to: "/adm/mod/users/admin",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:users",
              class: "me-3"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-33654b23${_scopeId}>Admin Users</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:users",
                class: "me-3"
              }),
              createVNode("span", null, "Admin Users")
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
            _push2(`<span data-v-33654b23${_scopeId}>Users</span>`);
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
            _push2(`<span data-v-33654b23${_scopeId}>Applications</span>`);
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
      _push(`</div></div></aside><section class="col-lg-6 sidebar transparent sticky-top" data-v-33654b23><div class="card shadow-sm mb-3" data-v-33654b23><div class="card-header fw-bold" data-v-33654b23>Job Seeker Profile</div>`);
      if (jobSeeker.value) {
        _push(`<div class="card-body" data-v-33654b23><div class="mb-2" data-v-33654b23><strong data-v-33654b23>National ID:</strong> ${ssrInterpolate(jobSeeker.value.national_id)}</div><div class="mb-2" data-v-33654b23><strong data-v-33654b23>Phone:</strong> ${ssrInterpolate(jobSeeker.value.phone)}</div><div class="mb-2" data-v-33654b23><strong data-v-33654b23>Province:</strong> ${ssrInterpolate(jobSeeker.value.province)}</div><div class="mb-2" data-v-33654b23><strong data-v-33654b23>District:</strong> ${ssrInterpolate(jobSeeker.value.district)}</div><div class="mb-3" data-v-33654b23><strong data-v-33654b23>Summary</strong><p data-v-33654b23>${ssrInterpolate(jobSeeker.value.summary)}</p></div><div data-v-33654b23><strong data-v-33654b23>Skills</strong><div class="mt-1" data-v-33654b23><!--[-->`);
        ssrRenderList(jobSeeker.value.skills, (skill) => {
          _push(`<span class="badge bg-primary me-1" data-v-33654b23>${ssrInterpolate(skill)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--[-->`);
      ssrRenderList(jsonSections, (section) => {
        var _a2, _b2;
        _push(`<div class="card shadow-sm mb-3" data-v-33654b23><div class="card-header fw-bold" data-v-33654b23>${ssrInterpolate(section.label)}</div><div class="card-body" data-v-33654b23>`);
        if ((_b2 = (_a2 = jobSeeker.value) == null ? void 0 : _a2[section.key]) == null ? void 0 : _b2.length) {
          _push(`<div data-v-33654b23><!--[-->`);
          ssrRenderList(jobSeeker.value[section.key], (item, index) => {
            _push(`<div class="card mb-2" data-v-33654b23><div class="card-body" data-v-33654b23><h6 class="fw-bold" data-v-33654b23>${ssrInterpolate(item.title)}</h6><p class="text-muted" data-v-33654b23>${ssrInterpolate(item.content)}</p></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="text-muted" data-v-33654b23> No data </div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
      if (deleteId.value) {
        _push(`<div class="modal fade show d-flex justify-content-between align-items-center" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-33654b23><div class="modal-dialog" data-v-33654b23><div class="modal-content" data-v-33654b23><div class="modal-header" data-v-33654b23><h5 class="modal-title" data-v-33654b23> Confirm Deletion </h5><button class="btn-close" data-v-33654b23></button></div><div class="modal-body" data-v-33654b23> Are you sure you want to delete this user? </div><div class="modal-footer" data-v-33654b23><button class="btn btn-secondary" data-v-33654b23>Cancel</button><button class="btn btn-danger" data-v-33654b23> Delete </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="col-lg-3 sidebar sticky-top" data-v-33654b23><div class="card shadow-sm mb-3" data-v-33654b23><div class="card-body" data-v-33654b23><h6 class="fw-bold" data-v-33654b23>User Activity</h6><div class="small" data-v-33654b23><p data-v-33654b23><strong data-v-33654b23>Applications:</strong> ${ssrInterpolate(((_g = user.value) == null ? void 0 : _g.applications_count) || 0)}</p><p data-v-33654b23><strong data-v-33654b23>Saved Opportunities:</strong> ${ssrInterpolate(((_h = user.value) == null ? void 0 : _h.saved_count) || 0)}</p><p data-v-33654b23><strong data-v-33654b23>Communities:</strong> ${ssrInterpolate(communities.value.length)}</p></div></div></div><div class="card shadow-sm" data-v-33654b23><div class="card-body" data-v-33654b23><h6 class="fw-bold" data-v-33654b23>Organizations</h6>`);
      if (!organizations.value.length) {
        _push(`<div class="text-muted" data-v-33654b23> No organizations </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(organizations.value.slice(0, 5), (org) => {
        _push(`<div class="mb-2" data-v-33654b23><strong data-v-33654b23>${ssrInterpolate(org.name)}</strong><small class="text-muted d-block" data-v-33654b23>${ssrInterpolate(org.category)}</small></div>`);
      });
      _push(`<!--]--></div></div></section></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/users/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33654b23"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Bl3sgADy.mjs.map
