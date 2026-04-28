import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _export_sfc, k as useRoute } from './server.mjs';
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
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    const route = useRoute();
    ref({
      page_url: "",
      referrer: ""
    });
    const trackPage = async () => {
      return;
    };
    watch(
      () => route.fullPath,
      () => {
        trackPage();
      },
      { immediate: true }
      // also runs on first load
    );
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-wrapper" }, _attrs))} data-v-494c6296><header class="auth-header" data-v-494c6296><div class="container" data-v-494c6296><h4 class="logo" data-v-494c6296>Opportunities Portal</h4></div></header><main class="auth-main" data-v-494c6296>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="auth-footer" data-v-494c6296><small data-v-494c6296>\xA9 ${ssrInterpolate(unref(year))} Opportunities Portal</small></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-494c6296"]]);

export { auth as default };
//# sourceMappingURL=auth-BJeSI0gt.mjs.map
