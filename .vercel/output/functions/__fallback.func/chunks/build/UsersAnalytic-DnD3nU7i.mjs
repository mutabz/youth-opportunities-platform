import { ref, useSSRContext } from 'vue';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';

const _sfc_main = {
  __name: "UsersAnalytic",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    ref([]);
    ref({});
    ref({});
    ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section><h6 class="fw-bold text-uppercase text-center">Users by Role</h6><canvas id="usersChartByRole" height="200"></canvas></section><section><h6 class="fw-bold text-uppercase text-center">Users by Verification</h6><canvas id="usersChartByVerification" height="200"></canvas></section><section class="mt-3"><h6 class="fw-bold text-uppercase text-center mb-4">Users Upload Activity</h6><canvas id="userMonthlyChart" height="200"></canvas></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/analytics/UsersAnalytic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UsersAnalytic-DnD3nU7i.mjs.map
