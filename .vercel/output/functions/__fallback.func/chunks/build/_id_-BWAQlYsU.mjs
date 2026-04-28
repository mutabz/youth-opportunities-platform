import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { computed, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, k as useRoute, m as useUserStore, u as useHead } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { u as useDeviceType } from './useDeviceType-BcjKgtk3.mjs';
import 'perfect-debounce';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { device } = useDeviceType();
    useRoute();
    useDataStore();
    const userStore = useUserStore();
    computed(() => userStore.user);
    const item = ref({});
    ref("");
    ref("");
    useHead(() => {
      var _a;
      if (!((_a = item.value) == null ? void 0 : _a.title)) return {};
      return {
        title: item.value.title,
        meta: [
          {
            name: "content",
            content: item.value.content
          },
          {
            name: "keywords",
            content: item.value.title
          }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-dashboard container my-4" }, _attrs))} data-v-787e454f><header class="app-header d-flex justify-content-between align-items-center mb-4" data-v-787e454f><div class="d-flex" data-v-787e454f><button class="btn me-3" data-v-787e454f>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-left" }, null, _parent));
      _push(`</button><h3 data-v-787e454f>${ssrInterpolate(item.value.title)}</h3></div>`);
      if (unref(device) === "desktop") {
        _push(`<div class="d-flex gap-2" data-v-787e454f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/opportunities",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse Opportunities `);
            } else {
              return [
                createTextVNode(" Browse Opportunities ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/profile",
          class: "btn btn-secondary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` My Profile `);
            } else {
              return [
                createTextVNode(" My Profile ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="btn btn-secondary" data-v-787e454f> Refresh </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="row g-4" data-v-787e454f><div class="" data-v-787e454f><h3 class="text-capitalize" data-v-787e454f>${ssrInterpolate(item.value.title.toLowerCase())}</h3><p class="text-capitalize" data-v-787e454f>${ssrInterpolate(item.value.content.toLowerCase())}.</p>`);
      if (item.value.type) {
        _push(`<div data-v-787e454f>`);
        if (item.value.type.toLowerCase() === "video" || "tutorial") {
          _push(`<iframe class="mt-3 mb-4" style="${ssrRenderStyle({ "width": "100%", "height": "400px!important" })}"${ssrRenderAttr("src", item.value.file_path)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-v-787e454f></iframe>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(item.value.data, (par, index) => {
        _push(`<div class="mt-3 text-capitalize" data-v-787e454f>${ssrInterpolate(par.toLowerCase())}</div>`);
      });
      _push(`<!--]--></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/dashboard/resources/[type]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-787e454f"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BWAQlYsU.mjs.map
