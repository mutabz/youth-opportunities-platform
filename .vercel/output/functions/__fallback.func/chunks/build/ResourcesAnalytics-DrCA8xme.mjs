import { ref, useSSRContext } from 'vue';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';

const _sfc_main = {
  __name: "ResourcesAnalytics",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    ref([]);
    ref({});
    ref({});
    ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section><h6 class="fw-bold text-uppercase text-center mb-4"> Resources by Type </h6><canvas id="resTypeChart" height="200"></canvas></section><hr><section class="mt-3"><h6 class="fw-bold text-uppercase text-center mb-4"> File vs Text Resources </h6><canvas id="resContentChart" height="200"></canvas></section><hr><section class="mt-3"><h6 class="fw-bold text-uppercase text-center mb-4"> Resources Upload Activity </h6><canvas id="resMonthlyChart" height="200"></canvas></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/analytics/ResourcesAnalytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ResourcesAnalytics-DrCA8xme.mjs.map
