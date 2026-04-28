import { mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';

const _sfc_main$1 = {
  __name: "ApplicationAnalytic",
  __ssrInlineRender: true,
  props: {
    applications: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><h6 class="fw-bold text-uppercase text-center">Application by Status</h6><canvas id="statusChart" height="200"></canvas></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/analytics/ApplicationAnalytic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "OpportunitiesAnalytic",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    ref([]);
    ref([]);
    ref([]);
    ref({});
    ref({});
    ref({});
    ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section><h6 class="fw-bold text-uppercase text-center mb-4">Opportunities by Categories</h6><canvas id="oppCateChart" height="200"></canvas></section><hr><section class="mt-3"><h6 class="fw-bold text-uppercase text-center mb-4">Opportunities by Types</h6><canvas id="oppTypeChart" height="200"></canvas></section><hr><section class="mt-3"><h6 class="fw-bold text-uppercase text-center mb-4">Opportunities by Status</h6><canvas id="oppStatusChart" height="200"></canvas></section><section class="mt-3"><h6 class="fw-bold text-uppercase text-center mb-4">Opportunities Upload Activity</h6><canvas id="oppMonthlyChart" height="200"></canvas></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/analytics/OpportunitiesAnalytic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=OpportunitiesAnalytic-BUkv_jcB.mjs.map
