import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { t as truncate } from './utils-C8zi-Gnd.mjs';
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
    useDataStore();
    const reviews = ref([]);
    const formatDate = (d) => {
      return new Date(d).toLocaleDateString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-mentor-reviews" }, _attrs))}><header class="app-header d-flex justify-content-between align-items-center"><div class="d-flex"><button class="btn me-3">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3>Mentor Reviews</h3></div><div class="d-flex"><button class="btn btn-secondary"> Refresh </button></div></header><table class="table table-hover table-bordered mt-4"><thead class="table-dark"><tr><th>Mentor</th><th>User</th><th>Rating</th><th>Comment</th><th>Date</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(reviews.value, (rev) => {
        var _a, _b;
        _push(`<tr><td>${ssrInterpolate((_a = rev.mentor) == null ? void 0 : _a.full_name)}</td><td>${ssrInterpolate((_b = rev.user) == null ? void 0 : _b.email)}</td><td>${ssrInterpolate(rev.rating)} \u2B50</td><td class="small text-muted">${ssrInterpolate(unref(truncate)(rev.comment, 80))}</td><td>${ssrInterpolate(formatDate(rev.created_at))}</td><td><button class="btn btn-act text-danger">`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:trash" }, null, _parent));
        _push(`</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/mentors/reviews/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-T-PRe9yK.mjs.map
