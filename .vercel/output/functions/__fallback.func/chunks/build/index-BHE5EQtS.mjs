import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _sfc_main$1 } from './OpportunityCategoryForm-GvmyXSov.mjs';
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
    const categories = ref([]);
    const showCreateForm = ref(false);
    const editingCategory = ref(null);
    const searchQuery = ref("");
    const fetchCategories = async (force = false) => {
      await dataStore.fetchData("opp_category", force);
      categories.value = dataStore.items.opp_category || [];
    };
    const filteredCategories = computed(() => {
      return categories.value.filter(
        (c) => c.key.toLowerCase().includes(searchQuery.value.toLowerCase()) || c.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const closeForm = () => {
      showCreateForm.value = false;
      editingCategory.value = null;
    };
    const onFormSaved = async () => {
      await fetchCategories(true);
      closeForm();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-opportunity-category" }, _attrs))}><header class="app-header d-flex justify-content-between align-items-center"><div class="d-flex"><button class="btn me-3">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3>Opportunity Categories</h3></div><button class="btn btn-primary">+ New Category</button></header><section class="filters mt-3 d-flex gap-2 align-items-center"><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="form-control" placeholder="Search by name or key..."><button class="btn btn-secondary">Refresh</button></section><section class="mt-3"><table class="table table-hover table-bordered"><thead class="table-dark"><tr><th>Key</th><th>Name</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredCategories.value, (cat) => {
        _push(`<tr><td>${ssrInterpolate(cat.key)}</td><td>${ssrInterpolate(cat.name)}</td><td><button class="btn btn-sm btn-warning me-2">Edit</button><button class="btn btn-sm btn-danger">Delete</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredCategories.value.length) {
        _push(`<tr><td colspan="3" class="text-center">No categories found.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section>`);
      if (showCreateForm.value || editingCategory.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">${ssrInterpolate(editingCategory.value ? "Edit Category" : "Create Category")}</h5><button type="button" class="btn-close"></button></div><div class="modal-body">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          initialForm: editingCategory.value || null,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/prt/opportunities/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BHE5EQtS.mjs.map
