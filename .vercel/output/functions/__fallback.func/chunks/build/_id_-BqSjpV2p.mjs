import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { computed, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { k as useRoute, m as useUserStore, u as useHead } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container my-4" }, _attrs))}><header class="d-flex align-items-center mb-4 bg-info p-3 text-white rounded-4"><button class="btn btn-light me-3"> Back `);
      _push(ssrRenderComponent(_component_Icon, {
        class: "ms-3",
        name: "fa6-solid:arrow-right"
      }, null, _parent));
      _push(`</button><h1 class="h4 m-0">${ssrInterpolate(item.value.title)}</h1></header><div class="row g-4"><div class=""><div class="resource-card"><div class="resource-icon"><i class="fa-solid fa-file-lines"></i></div><h3>${ssrInterpolate(item.value.title)}</h3><p>${ssrInterpolate(item.value.content)}.</p>`);
      if (item.value.type) {
        _push(`<div>`);
        if (item.value.type.toLowerCase() === "video" || "tutorial") {
          _push(`<iframe class="mt-3 mb-4" style="${ssrRenderStyle({ "width": "100%", "height": "400px!important" })}"${ssrRenderAttr("src", item.value.file_path)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(item.value.data, (par, index) => {
        _push(`<div class="mt-3">${ssrInterpolate(par)}</div>`);
      });
      _push(`<!--]--></div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/[type]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BqSjpV2p.mjs.map
