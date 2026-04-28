import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _sfc_main$1 } from './UserForm-DrxaoWb_.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "user",
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
      users.value = dataStore.items.users || [];
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
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-users" }, _attrs))} data-v-4096b336><header class="app-header d-flex justify-content-between align-items-center" data-v-4096b336><h3 data-v-4096b336>User Management</h3><button class="btn btn-primary" data-v-4096b336> + New User </button></header><section class="filters mt-3 d-flex gap-2 align-items-center" data-v-4096b336><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="form-control" placeholder="Search name or email..." data-v-4096b336><select class="form-select" data-v-4096b336><option value="" data-v-4096b336${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "") : ssrLooseEqual(roleFilter.value, "")) ? " selected" : ""}>All Roles</option><option value="user" data-v-4096b336${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "user") : ssrLooseEqual(roleFilter.value, "user")) ? " selected" : ""}>User</option><option value="admin" data-v-4096b336${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "admin") : ssrLooseEqual(roleFilter.value, "admin")) ? " selected" : ""}>Admin</option><option value="partner" data-v-4096b336${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "partner") : ssrLooseEqual(roleFilter.value, "partner")) ? " selected" : ""}>Partner</option></select><select class="form-select" data-v-4096b336><option value="" data-v-4096b336${ssrIncludeBooleanAttr(Array.isArray(verifiedFilter.value) ? ssrLooseContain(verifiedFilter.value, "") : ssrLooseEqual(verifiedFilter.value, "")) ? " selected" : ""}>All Verification</option><option value="true" data-v-4096b336${ssrIncludeBooleanAttr(Array.isArray(verifiedFilter.value) ? ssrLooseContain(verifiedFilter.value, "true") : ssrLooseEqual(verifiedFilter.value, "true")) ? " selected" : ""}>Verified</option><option value="false" data-v-4096b336${ssrIncludeBooleanAttr(Array.isArray(verifiedFilter.value) ? ssrLooseContain(verifiedFilter.value, "false") : ssrLooseEqual(verifiedFilter.value, "false")) ? " selected" : ""}>Not Verified</option></select><button class="btn btn-secondary" data-v-4096b336> Refresh </button></section><section class="mt-3" data-v-4096b336><table class="table table-hover table-bordered" data-v-4096b336><thead class="table-dark" data-v-4096b336><tr data-v-4096b336><th data-v-4096b336>Full Name</th><th data-v-4096b336>Email</th><th data-v-4096b336>Phone</th><th data-v-4096b336>Role</th><th data-v-4096b336>Location</th><th data-v-4096b336>Verified</th><th data-v-4096b336>Created</th><th data-v-4096b336>Actions</th></tr></thead><tbody data-v-4096b336><!--[-->`);
      ssrRenderList(filteredUsers.value, (user2) => {
        _push(`<tr data-v-4096b336><td data-v-4096b336>${ssrInterpolate(user2.full_name)}</td><td data-v-4096b336>${ssrInterpolate(user2.email)}</td><td data-v-4096b336>${ssrInterpolate(user2.phone_number || "N/A")}</td><td data-v-4096b336><span class="badge bg-primary" data-v-4096b336>${ssrInterpolate(user2.role)}</span></td><td data-v-4096b336>${ssrInterpolate(user2.location || "N/A")}</td><td data-v-4096b336>`);
        if (user2.is_verified) {
          _push(`<span class="badge bg-success" data-v-4096b336> Verified </span>`);
        } else {
          _push(`<span class="badge bg-warning text-dark" data-v-4096b336> Not Verified </span>`);
        }
        _push(`</td><td data-v-4096b336>${ssrInterpolate(formatDate(user2.created_at))}</td><td data-v-4096b336><button class="btn btn-sm btn-warning me-2" data-v-4096b336> Edit </button><button class="btn btn-sm btn-danger" data-v-4096b336> Delete </button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredUsers.value.length) {
        _push(`<tr data-v-4096b336><td colspan="8" class="text-center" data-v-4096b336> No users found </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section>`);
      if (showCreateForm.value || editingUser.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-4096b336><div class="modal-dialog modal-lg" data-v-4096b336><div class="modal-content" data-v-4096b336><div class="modal-header" data-v-4096b336><h5 class="modal-title" data-v-4096b336>${ssrInterpolate(editingUser.value ? "Edit User" : "Create User")}</h5><button type="button" class="btn-close" data-v-4096b336></button></div><div class="modal-body" data-v-4096b336>`);
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
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-4096b336><div class="modal-dialog" data-v-4096b336><div class="modal-content" data-v-4096b336><div class="modal-header" data-v-4096b336><h5 class="modal-title" data-v-4096b336> Confirm Deletion </h5><button class="btn-close" data-v-4096b336></button></div><div class="modal-body" data-v-4096b336> Are you sure you want to delete this user? </div><div class="modal-footer" data-v-4096b336><button class="btn btn-secondary" data-v-4096b336> Cancel </button><button class="btn btn-danger" data-v-4096b336> Delete </button></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4096b336"]]);

export { user as default };
//# sourceMappingURL=user-DZQD-wtL.mjs.map
