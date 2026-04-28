import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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
    const sessions = ref([]);
    const formatDate = (d) => {
      return new Date(d).toLocaleString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-mentor-sessions" }, _attrs))}><header class="app-header d-flex justify-content-between align-items-center"><div class="d-flex"><button class="btn me-3">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3>Mentor Sessions</h3></div><button class="btn btn-secondary"> Refresh </button></header><table class="table table-hover table-bordered mt-4"><thead class="table-dark"><tr><th>Mentor</th><th>User</th><th>Date</th><th>Duration</th><th>Status</th><th>Meeting</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(sessions.value, (session) => {
        var _a, _b;
        _push(`<tr><td>${ssrInterpolate((_a = session.mentor) == null ? void 0 : _a.full_name)}</td><td>${ssrInterpolate((_b = session.user) == null ? void 0 : _b.email)}</td><td>${ssrInterpolate(formatDate(session.session_date))}</td><td>${ssrInterpolate(session.duration_minutes)} min</td><td><span class="${ssrRenderClass([{
          "bg-warning": session.status === "pending",
          "bg-success": session.status === "confirmed",
          "bg-secondary": session.status === "completed",
          "bg-danger": session.status === "cancelled"
        }, "badge"])}">${ssrInterpolate(session.status)}</span></td><td>`);
        if (session.meeting_link) {
          _push(`<a${ssrRenderAttr("href", session.meeting_link)} target="_blank" class="btn btn-sm btn-outline-primary"> Join </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/mentors/sessions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-GjtCX_3Q.mjs.map
