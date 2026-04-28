import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _sfc_main$1 } from './UserForm-DrxaoWb_.mjs';
import { _ as _sfc_main$2 } from './UsersAnalytic-DnD3nU7i.mjs';
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
    const users = ref([]);
    const loading = ref(false);
    const searchQuery = ref("");
    const roleFilter = ref("");
    const verifiedFilter = ref("");
    const showCreateForm = ref(false);
    const editingUser = ref(null);
    const deleteId = ref(null);
    const fetchUsers = async (force = false) => {
      loading.value = true;
      await dataStore.fetchData("users", force);
      users.value = dataStore.items.users.filter((u) => u.role.toLowerCase() == "admin") || [];
      loading.value = false;
    };
    const filteredUsers = computed(() => {
      return users.value.filter((u) => {
        var _a, _b;
        const matchesSearch = ((_a = u.full_name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_b = u.email) == null ? void 0 : _b.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchesRole = roleFilter.value ? u.role === roleFilter.value : true;
        const matchesVerified = verifiedFilter.value !== "" ? String(u.is_verified) === verifiedFilter.value : true;
        return matchesSearch && matchesRole && matchesVerified;
      });
    });
    const closeForm = () => {
      showCreateForm.value = false;
      editingUser.value = null;
    };
    const onFormSaved = async () => {
      await fetchUsers(true);
      closeForm();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-users" }, _attrs))} data-v-61bc12d5><header class="app-header d-flex justify-content-between align-items-center" data-v-61bc12d5><button class="btn me-3" data-v-61bc12d5>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-61bc12d5>Admin User Management</h3><button class="btn btn-primary" data-v-61bc12d5> + New User </button></header><div class="row mt-4" data-v-61bc12d5><aside class="col-lg-3 sidebar sticky-top" data-v-61bc12d5><div class="filters mt-3 gap-2 align-items-center" data-v-61bc12d5><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="form-control w-100 mt-2" placeholder="Search name or email..." data-v-61bc12d5><select class="form-select w-100 mt-2" data-v-61bc12d5><option value="" data-v-61bc12d5${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "") : ssrLooseEqual(roleFilter.value, "")) ? " selected" : ""}>All Roles</option><option value="user" data-v-61bc12d5${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "user") : ssrLooseEqual(roleFilter.value, "user")) ? " selected" : ""}>User</option><option value="admin" data-v-61bc12d5${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "admin") : ssrLooseEqual(roleFilter.value, "admin")) ? " selected" : ""}>Admin</option><option value="partner" data-v-61bc12d5${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "partner") : ssrLooseEqual(roleFilter.value, "partner")) ? " selected" : ""}>Partner</option></select><select class="form-select w-100 mt-2" data-v-61bc12d5><option value="" data-v-61bc12d5${ssrIncludeBooleanAttr(Array.isArray(verifiedFilter.value) ? ssrLooseContain(verifiedFilter.value, "") : ssrLooseEqual(verifiedFilter.value, "")) ? " selected" : ""}>All Verification</option><option value="true" data-v-61bc12d5${ssrIncludeBooleanAttr(Array.isArray(verifiedFilter.value) ? ssrLooseContain(verifiedFilter.value, "true") : ssrLooseEqual(verifiedFilter.value, "true")) ? " selected" : ""}>Verified</option><option value="false" data-v-61bc12d5${ssrIncludeBooleanAttr(Array.isArray(verifiedFilter.value) ? ssrLooseContain(verifiedFilter.value, "false") : ssrLooseEqual(verifiedFilter.value, "false")) ? " selected" : ""}>Not Verified</option></select></div><div class="card shadow-sm mb-3" data-v-61bc12d5><div class="card-body" data-v-61bc12d5><h6 class="fw-bold" data-v-61bc12d5>Quick Links</h6>`);
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
            _push2(`<span data-v-61bc12d5${_scopeId}>Dashboard</span>`);
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
            _push2(`<span data-v-61bc12d5${_scopeId}>Admin Users</span>`);
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
            _push2(`<span data-v-61bc12d5${_scopeId}>Users</span>`);
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
            _push2(`<span data-v-61bc12d5${_scopeId}>Applications</span>`);
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
      _push(`</div></div></aside><section class="col-lg-6 sidebar transparent sticky-top" data-v-61bc12d5><div class="d-flex justify-content-between text-dark" data-v-61bc12d5><div class="text-wrap" data-v-61bc12d5>`);
      if (searchQuery.value) {
        _push(`<strong data-v-61bc12d5>Search Results for: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-61bc12d5>${ssrInterpolate(searchQuery.value)}</span></div><div class="" data-v-61bc12d5>`);
      if (roleFilter.value) {
        _push(`<strong data-v-61bc12d5>Role: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-61bc12d5>${ssrInterpolate(roleFilter.value)}</span></div><div class="" data-v-61bc12d5>`);
      if (verifiedFilter.value) {
        _push(`<strong data-v-61bc12d5>Verified: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-61bc12d5>${ssrInterpolate(verifiedFilter.value)}</span></div></div><section class="mt-3" data-v-61bc12d5><table class="table table-hover table-bordered" data-v-61bc12d5><thead class="table-dark" data-v-61bc12d5><tr data-v-61bc12d5><th data-v-61bc12d5>Full Name</th><th data-v-61bc12d5>Email</th><th data-v-61bc12d5>Verified</th><th data-v-61bc12d5>Actions</th></tr></thead><tbody data-v-61bc12d5><!--[-->`);
      ssrRenderList(filteredUsers.value, (user) => {
        _push(`<tr data-v-61bc12d5><td data-v-61bc12d5>${ssrInterpolate(user.full_name)}</td><td data-v-61bc12d5>${ssrInterpolate(user.email)}</td><td data-v-61bc12d5>`);
        if (user.is_verified) {
          _push(`<span class="badge bg-success" data-v-61bc12d5>Verified</span>`);
        } else {
          _push(`<span class="badge bg-warning text-dark" data-v-61bc12d5>Not Verified</span>`);
        }
        _push(`</td><td data-v-61bc12d5><button class="btn btn-act text-warning me-2" data-v-61bc12d5>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:pencil" }, null, _parent));
        _push(`</button><button class="btn btn-act text-danger" data-v-61bc12d5>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:trash" }, null, _parent));
        _push(`</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredUsers.value.length) {
        _push(`<tr data-v-61bc12d5><td colspan="8" class="text-center" data-v-61bc12d5> No users found </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section>`);
      if (showCreateForm.value || editingUser.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-61bc12d5><div class="modal-dialog modal-lg" data-v-61bc12d5><div class="modal-content" data-v-61bc12d5><div class="modal-header" data-v-61bc12d5><h5 class="modal-title" data-v-61bc12d5>${ssrInterpolate(editingUser.value ? "Edit User" : "Create User")}</h5><button type="button" class="btn-close" data-v-61bc12d5></button></div><div class="modal-body" data-v-61bc12d5>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          initialForm: editingUser.value || null,
          onSaved: onFormSaved,
          onCancel: closeForm
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (deleteId.value) {
        _push(`<div class="modal fade show d-flex justify-content-between align-items-center" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-61bc12d5><div class="modal-dialog" data-v-61bc12d5><div class="modal-content" data-v-61bc12d5><div class="modal-header" data-v-61bc12d5><h5 class="modal-title" data-v-61bc12d5> Confirm Deletion </h5><button class="btn-close" data-v-61bc12d5></button></div><div class="modal-body" data-v-61bc12d5> Are you sure you want to delete this user? </div><div class="modal-footer" data-v-61bc12d5><button class="btn btn-secondary" data-v-61bc12d5> Cancel </button><button class="btn btn-danger" data-v-61bc12d5> Delete </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><aside class="col-lg-3 sidebar sticky-top" data-v-61bc12d5><div class="card shadow-sm mb-3" data-v-61bc12d5><div class="card-body" data-v-61bc12d5>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div></aside></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/users/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61bc12d5"]]);

export { index as default };
//# sourceMappingURL=index-CvSadTXY.mjs.map
