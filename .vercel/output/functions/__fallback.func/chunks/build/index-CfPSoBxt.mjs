import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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
import 'perfect-debounce';
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
    const organizations = ref([]);
    const searchQuery = ref("");
    const showForm = ref(false);
    const editingOrg = ref(null);
    const fetchOrganizations = async (force = false) => {
      await dataStore.fetchData("organizations", force);
      organizations.value = dataStore.items.organizations || [];
    };
    const filteredOrganizations = computed(() => {
      return organizations.value.filter((org) => {
        var _a, _b;
        return ((_a = org.name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_b = org.category) == null ? void 0 : _b.toLowerCase().includes(searchQuery.value.toLowerCase()));
      });
    });
    const closeForm = () => {
      showForm.value = false;
      editingOrg.value = null;
    };
    const onFormSaved = () => {
      fetchOrganizations(true);
      closeForm();
    };
    const formatDate = (dateStr) => {
      const d = new Date(dateStr);
      return d.toLocaleDateString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_OrganizationForm = resolveComponent("OrganizationForm");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-organizations" }, _attrs))} data-v-3b9101f7><header class="app-header d-flex justify-content-between align-items-center mb-3" data-v-3b9101f7><h3 data-v-3b9101f7>Organizations</h3><div class="d-flex gap-2" data-v-3b9101f7><input${ssrRenderAttr("value", searchQuery.value)} class="form-control" placeholder="Search organizations" data-v-3b9101f7><button class="btn btn-primary" data-v-3b9101f7>+ Add Organization</button><button class="btn btn-secondary" data-v-3b9101f7>Refresh</button></div></header><div class="row mt-4" data-v-3b9101f7><section class="col-12" data-v-3b9101f7><table class="table table-hover table-bordered" data-v-3b9101f7><thead class="table-dark" data-v-3b9101f7><tr data-v-3b9101f7><th data-v-3b9101f7>Name</th><th data-v-3b9101f7>Category</th><th data-v-3b9101f7>Focus</th><th data-v-3b9101f7>Contact</th><th data-v-3b9101f7>Active</th><th data-v-3b9101f7>Verified</th><th data-v-3b9101f7>Created At</th><th data-v-3b9101f7>Actions</th></tr></thead><tbody data-v-3b9101f7><!--[-->`);
      ssrRenderList(filteredOrganizations.value, (org) => {
        var _a, _b, _c;
        _push(`<tr data-v-3b9101f7><td data-v-3b9101f7>${ssrInterpolate(org.name)}</td><td data-v-3b9101f7>${ssrInterpolate(org.category)}</td><td class="text-truncate" style="${ssrRenderStyle({ "max-width": "200px" })}" data-v-3b9101f7>${ssrInterpolate(org.focus)}</td><td data-v-3b9101f7><div data-v-3b9101f7>${ssrInterpolate((_a = org.contact) == null ? void 0 : _a.email)}</div><div data-v-3b9101f7>${ssrInterpolate((_b = org.contact) == null ? void 0 : _b.phone)}</div><div class="text-muted" data-v-3b9101f7>${ssrInterpolate((_c = org.contact) == null ? void 0 : _c.address)}</div></td><td data-v-3b9101f7><span class="${ssrRenderClass(org.is_active ? "badge bg-success" : "badge bg-secondary")}" data-v-3b9101f7>${ssrInterpolate(org.is_active ? "Yes" : "No")}</span></td><td data-v-3b9101f7><span class="${ssrRenderClass(org.is_verified ? "badge bg-primary" : "badge bg-warning")}" data-v-3b9101f7>${ssrInterpolate(org.is_verified ? "Yes" : "No")}</span></td><td data-v-3b9101f7>${ssrInterpolate(formatDate(org.created_at))}</td><td data-v-3b9101f7>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/organizations/" + org.id,
          class: "btn btn-sm btn-outline-primary me-1"
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
        _push(`<button class="btn btn-sm btn-outline-danger" data-v-3b9101f7>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:trash" }, null, _parent));
        _push(`</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredOrganizations.value.length) {
        _push(`<tr data-v-3b9101f7><td colspan="8" class="text-center text-muted" data-v-3b9101f7>No organizations found</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section></div>`);
      if (showForm.value || editingOrg.value) {
        _push(ssrRenderComponent(_component_OrganizationForm, {
          initialForm: editingOrg.value || null,
          onSaved: onFormSaved,
          onCancel: closeForm
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/organizations/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b9101f7"]]);

export { index as default };
//# sourceMappingURL=index-CfPSoBxt.mjs.map
