import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "OpportunityDisplay",
  __ssrInlineRender: true,
  props: { initialForm: Object },
  emits: ["saved", "cancel"],
  setup(__props, { emit: __emit }) {
    useDataStore();
    const opportunity = ref(null);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "application-page container pb-4" }, _attrs))} data-v-bc1d139c>`);
      if (loading.value) {
        _push(`<div class="text-center my-5" data-v-bc1d139c><span class="spinner-border spinner-border-sm me-2" data-v-bc1d139c></span>Loading opportunity... </div>`);
      } else if (!opportunity.value) {
        _push(`<div data-v-bc1d139c><p class="text-danger" data-v-bc1d139c>Opportunity not found!</p></div>`);
      } else {
        _push(`<div data-v-bc1d139c><div class="card shadow-none border-0 mb-4" data-v-bc1d139c><div class="card-body" data-v-bc1d139c><h5 class="card-title" data-v-bc1d139c>${ssrInterpolate(opportunity.value.title)}</h5><p class="card-text" data-v-bc1d139c><strong data-v-bc1d139c>Type:</strong> ${ssrInterpolate(opportunity.value.opportunity_type)}</p><p class="card-text" data-v-bc1d139c><strong data-v-bc1d139c>Status:</strong> ${ssrInterpolate(opportunity.value.status)}</p><p class="card-text" data-v-bc1d139c><strong data-v-bc1d139c>Organization:</strong> ${ssrInterpolate(opportunity.value.provider.organization_name || "N/A")}</p><p class="card-text" data-v-bc1d139c><strong data-v-bc1d139c>Location:</strong> ${ssrInterpolate(opportunity.value.host_country)}, ${ssrInterpolate(opportunity.value.location.city || "N/A")}</p>`);
        if (opportunity.value.description) {
          _push(`<p class="card-text" data-v-bc1d139c><strong data-v-bc1d139c>Description:</strong> <!--[-->`);
          ssrRenderList(opportunity.value.description, (p) => {
            _push(`<div class="mt-3" data-v-bc1d139c>${ssrInterpolate(p || "No description available.")}</div>`);
          });
          _push(`<!--]--></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="card-footer" data-v-bc1d139c><a${ssrRenderAttr("href", opportunity.value.details.application.application_link)} target="_blank" class="btn btn-primary btn-lg rounded-5 w-100" data-v-bc1d139c>Apply Now</a></div></div></div>`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OpportunityDisplay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OpportunityDisplay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc1d139c"]]);

export { OpportunityDisplay as O };
//# sourceMappingURL=OpportunityDisplay-7x-eoCBj.mjs.map
