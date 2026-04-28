import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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
    const searchQuery = ref("");
    const ActiveCategory = ref("");
    const categories = ref([]);
    useDataStore();
    const items = ref([]);
    const filteredItems = computed(() => {
      if (!items.value) return [];
      return items.value.filter((res) => {
        var _a, _b;
        const matchesSearch = ((_a = res.title) == null ? void 0 : _a.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_b = res.content) == null ? void 0 : _b.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchesCategory = !ActiveCategory.value || res.type.toLowerCase() === ActiveCategory.value.toLowerCase();
        return matchesSearch && matchesCategory;
      });
    });
    const searchResults = computed(() => {
      if (!searchQuery.value) return [];
      return items.value.filter((res) => {
        var _a, _b;
        return ((_a = res.content) == null ? void 0 : _a.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_b = res.title) == null ? void 0 : _b.toLowerCase().includes(searchQuery.value.toLowerCase()));
      }).slice(0, 5);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="gen-hero"><h1>Career &amp; Scholarship Resources</h1><p>Guides, templates, toolkits, and insider tips to help you succeed.</p><div class="card shadow-sm mb-4"><div class="card-body d-flex align-items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:magnifying-glass",
        class: "text-muted"
      }, null, _parent));
      _push(`<input type="text" class="form-control" placeholder="Search For scholarships..."${ssrRenderAttr("value", searchQuery.value)}></div>`);
      if (searchResults.value.length) {
        _push(`<div class="card-footer p-0"><div class="w-100"><!--[-->`);
        ssrRenderList(searchResults.value, (res) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/resources/" + res.type + "/" + res.id,
            class: "d-flex justify-content-between align-items-center p-2 border-bottom text-decoration-none text-dark search-item"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<strong${_scopeId}>${ssrInterpolate(unref(truncate)(res.title, 60))}</strong><span class="text-muted text-blue"${_scopeId}>${ssrInterpolate(res.type || "Resource")}</span>`);
              } else {
                return [
                  createVNode("strong", null, toDisplayString(unref(truncate)(res.title, 60)), 1),
                  createVNode("span", { class: "text-muted text-blue" }, toDisplayString(res.type || "Resource"), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class=""><div class="tabs"><div class="${ssrRenderClass([{ "active": ActiveCategory.value === "" }, "tab text-muted"])}">All</div><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(`<div class="${ssrRenderClass([{ "active": ActiveCategory.value === cat }, "tab text-muted text-capitalize"])}">${ssrInterpolate(cat)}</div>`);
      });
      _push(`<!--]--></div></section>`);
      if (filteredItems.value.length) {
        _push(`<section class="grid-2 mx-2"><!--[-->`);
        ssrRenderList(filteredItems.value, (item) => {
          _push(`<div class=""><div class="resource-card"><div class="resource-icon"><i class="fa-solid fa-file-lines"></i></div><h3>${ssrInterpolate(item.title)}</h3><p>${ssrInterpolate(item.content)}.</p><div class="resource-footer"><div class=""><span class="type">${ssrInterpolate(item.type)}</span></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/resources/" + item.type + "/" + item.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.type.toLowerCase() === "template") {
                  _push2(`<span class="btn btn-outline-primary rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}"${_scopeId}>Download template</span>`);
                } else if (item.type.toLowerCase() === "guide") {
                  _push2(`<span class="btn btn-outline-primary rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}"${_scopeId}>Read Content</span>`);
                } else if (item.type.toLowerCase() === "video") {
                  _push2(`<span class="btn btn-outline-primary rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}"${_scopeId}>Watch video</span>`);
                } else if (item.type.toLowerCase() === "tutorial") {
                  _push2(`<span class="btn btn-outline-primary rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}"${_scopeId}>Watch tutorial</span>`);
                } else {
                  _push2(`<span class="btn btn-outline-primary rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}"${_scopeId}>View Details</span>`);
                }
              } else {
                return [
                  item.type.toLowerCase() === "template" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "btn btn-outline-primary rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "Download template")) : item.type.toLowerCase() === "guide" ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "btn btn-outline-primary rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "Read Content")) : item.type.toLowerCase() === "video" ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: "btn btn-outline-primary rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "Watch video")) : item.type.toLowerCase() === "tutorial" ? (openBlock(), createBlock("span", {
                    key: 3,
                    class: "btn btn-outline-primary rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "Watch tutorial")) : (openBlock(), createBlock("span", {
                    key: 4,
                    class: "btn btn-outline-primary rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "View Details"))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/organizations/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Blbtt8sZ.mjs.map
