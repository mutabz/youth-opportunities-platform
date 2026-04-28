import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { ref, reactive, useSSRContext } from 'vue';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';

const _sfc_main = {
  __name: "OpportunityCategoryForm",
  __ssrInlineRender: true,
  props: {
    initialForm: Object
  },
  emits: ["saved", "cancel"],
  setup(__props, { emit: __emit }) {
    var _a, _b;
    const props = __props;
    useDataStore();
    const loading = ref(false);
    const form = reactive({
      key: ((_a = props.initialForm) == null ? void 0 : _a.key) || "",
      name: ((_b = props.initialForm) == null ? void 0 : _b.name) || ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="mb-3"><label class="form-label">Key</label><input${ssrRenderAttr("value", form.key)} type="text" class="form-control" required></div><div class="mb-3"><label class="form-label">Name</label><input${ssrRenderAttr("value", form.name)} type="text" class="form-control" required></div><div class="d-flex justify-content-end gap-2"><button type="button" class="btn btn-secondary">Cancel</button><button type="submit" class="btn btn-primary">`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm me-2"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Save</button></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OpportunityCategoryForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=OpportunityCategoryForm-GvmyXSov.mjs.map
