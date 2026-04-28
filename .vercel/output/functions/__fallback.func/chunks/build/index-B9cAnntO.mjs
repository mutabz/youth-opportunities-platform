import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _sfc_main$1 } from './OpportunityTypeForm-CAS_lwh7.mjs';
import './server.mjs';
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
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const dataStore = useDataStore();
    const types = ref([]);
    const showCreateForm = ref(false);
    const editingType = ref(null);
    const searchQuery = ref("");
    const fetchTypes = async (force = false) => {
      await dataStore.fetchData("opp_type", force);
      types.value = dataStore.items.opp_type || [];
    };
    const filteredTypes = computed(() => {
      return types.value.filter((t) => t.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });
    const closeForm = () => {
      showCreateForm.value = false;
      editingType.value = null;
    };
    const onFormSaved = async () => {
      await fetchTypes(true);
      closeForm();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-opportunity-type" }, _attrs))}><header class="app-header d-flex justify-content-between align-items-center"><div class="d-flex"><button class="btn me-3">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3>Opportunity Types</h3></div><button class="btn btn-primary">+ New Type</button></header><section class="filters mt-3 d-flex gap-2 align-items-center"><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="form-control" placeholder="Search by name..."><button class="btn btn-secondary">Refresh</button></section><section class="mt-3"><table class="table table-hover table-bordered"><thead class="table-dark"><tr><th>Name</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredTypes.value, (t) => {
        _push(`<tr><td>${ssrInterpolate(t.name)}</td><td><button class="btn btn-sm btn-warning me-2">Edit</button><button class="btn btn-sm btn-danger">Delete</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredTypes.value.length) {
        _push(`<tr><td colspan="2" class="text-center">No types found.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section>`);
      if (showCreateForm.value || editingType.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">${ssrInterpolate(editingType.value ? "Edit Type" : "Create Type")}</h5><button type="button" class="btn-close"></button></div><div class="modal-body">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          initialForm: editingType.value || null,
          onSaved: onFormSaved,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/prt/opportunities/types/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B9cAnntO.mjs.map
