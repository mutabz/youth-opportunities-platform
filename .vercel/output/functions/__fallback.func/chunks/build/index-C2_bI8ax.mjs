import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './server.mjs';
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
  props: {
    applications: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container mt-4" }, _attrs))}><header class="d-flex justify-content-between align-items-center mb-3"><h3>Application Analytics</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod",
        class: "btn btn-outline-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back `);
          } else {
            return [
              createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><section class="row g-3 mb-4"><div class="col-md-3"><div class="card p-3 text-center"><h6>Pending</h6><h3>${ssrInterpolate(_ctx.pendingCount)}</h3></div></div><div class="col-md-3"><div class="card p-3 text-center"><h6>Shortlisted</h6><h3>${ssrInterpolate(_ctx.shortlistedCount)}</h3></div></div><div class="col-md-3"><div class="card p-3 text-center"><h6>Accepted</h6><h3>${ssrInterpolate(_ctx.acceptedCount)}</h3></div></div><div class="col-md-3"><div class="card p-3 text-center"><h6>Rejected</h6><h3>${ssrInterpolate(_ctx.rejectedCount)}</h3></div></div></section><section class="card p-4"><h5 class="mb-3">Applications by Status</h5><canvas id="statusChart" height="200"></canvas></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/analytics/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C2_bI8ax.mjs.map
