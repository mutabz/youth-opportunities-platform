import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { t as truncate } from './utils-C8zi-Gnd.mjs';
import { ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      {
        id: 1,
        title: "Youth Leadership Program",
        description: "A 6-month leadership training for youth aged 18-25.",
        type: "Training",
        location: "Kigali, Rwanda"
      },
      {
        id: 2,
        title: "Startup Internship",
        description: "Internship at a tech startup in Kigali.",
        type: "Internship",
        location: "Kigali, Rwanda"
      },
      {
        id: 3,
        title: "Volunteer Opportunity",
        description: "Community volunteer work in education.",
        type: "Volunteer",
        location: "Ruhango, Rwanda"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<!--[--><section class="gen-hero"></section><section class=""><div class="main-content"><div class="p-4">`);
      if (_ctx.loading) {
        _push(`<div class="text-blue-500">Loading...</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.error) {
        _push(`<div class="text-red-500">${ssrInterpolate(_ctx.error)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.filteredItems && _ctx.filteredItems.length) {
        _push(`<div class="opp-grid"><!--[-->`);
        ssrRenderList(_ctx.items, (opp) => {
          _push(`<div class="card shadow-lg h-100 rounded-4"><div class="card-header">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/opportunities/" + opp.category + "-data/" + opp.id,
            class: "text-blue fw-bold"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(opp.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(opp.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="card-body"><div>${ssrInterpolate(("truncate" in _ctx ? _ctx.truncate : unref(truncate))(opp.description[0] || "", 100))}</div><div class="d-flex align-items-center justify-content-between mt-3 mb-0"><div class="bg-primary badge">${ssrInterpolate(opp.category || "Opportunity")}</div><div class="text-danger"><strong class="me-3">Deadline: </strong>${ssrInterpolate(opp.details.application.deadline)}</div></div></div><div class="card-footer"><span class="deadline">`);
          _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:location-pin" }, null, _parent));
          _push(` ${ssrInterpolate(("truncate" in _ctx ? _ctx.truncate : unref(truncate))(opp.host_country, 10))}, ${ssrInterpolate(("truncate" in _ctx ? _ctx.truncate : unref(truncate))(opp.location.city, 10))}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/opportunities/" + opp.category + "-data/" + opp.id,
            class: "btn btn-outline-primary rounded-4",
            style: { "font-size": "0.8rem", "padding": "0.4rem 1rem" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`View Details`);
              } else {
                return [
                  createTextVNode("View Details")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (!_ctx.loading && !_ctx.error) {
        _push(`<div>No opportunities found.</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/opportunities/study-abroad/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DPQJb0B2.mjs.map
