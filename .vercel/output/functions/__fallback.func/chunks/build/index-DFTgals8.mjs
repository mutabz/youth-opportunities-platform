import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { t as truncate, f as formatDate } from './utils-C8zi-Gnd.mjs';
import { u as useDeviceType } from './useDeviceType-BcjKgtk3.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { device } = useDeviceType();
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
    computed(() => {
      var _a;
      if (!searchQuery.value) return [];
      return (_a = items.value) == null ? void 0 : _a.filter(
        (res) => {
          var _a2, _b;
          return ((_a2 = res.content[0]) == null ? void 0 : _a2.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_b = res.title) == null ? void 0 : _b.toLowerCase().includes(searchQuery.value.toLowerCase()));
        }
      ).slice(0, 5);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UserInsights = resolveComponent("UserInsights");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-dashboard container-fluid" }, _attrs))} data-v-c1a686f7><header class="app-header d-flex justify-content-between align-items-center" data-v-c1a686f7><div class="d-flex" data-v-c1a686f7><button class="btn me-3" data-v-c1a686f7>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-left" }, null, _parent));
      _push(`</button><h3 data-v-c1a686f7>Resources</h3></div>`);
      if (unref(device) === "desktop") {
        _push(`<div class="d-flex gap-2" data-v-c1a686f7>`);
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
        _push(`<button class="btn btn-secondary" data-v-c1a686f7> Refresh </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="row mt-2" data-v-c1a686f7><aside class="${ssrRenderClass([{ "sticky-top": unref(device) === "desktop", "sidebar": unref(device) === "desktop" }, "col-lg-3"])}" data-v-c1a686f7><div class="" data-v-c1a686f7><h3 class="fw-bold text-muted text-center text-uppercase" data-v-c1a686f7>Filter By Categories</h3><hr class="text-muted" data-v-c1a686f7><div class="card shadow-sm" data-v-c1a686f7><div class="card-body" data-v-c1a686f7><div class="input-group" data-v-c1a686f7><input type="text" class="form-control" placeholder="Search Resources..."${ssrRenderAttr("value", searchQuery.value)} data-v-c1a686f7></div></div></div></div><div class="tabs" data-v-c1a686f7><div class="${ssrRenderClass([{ "active": ActiveCategory.value === "" }, "tab text-muted"])}" data-v-c1a686f7>All</div><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(`<div class="${ssrRenderClass([{ "active": ActiveCategory.value === cat }, "tab text-muted text-capitalize"])}" data-v-c1a686f7>${ssrInterpolate(cat)}</div>`);
      });
      _push(`<!--]--></div></aside><section class="col-lg-9" data-v-c1a686f7><div class="" data-v-c1a686f7><h3 class="fw-bold text-muted text-center text-uppercase" data-v-c1a686f7>Resources Lists</h3><hr class="text-muted" data-v-c1a686f7></div>`);
      if (filteredItems.value.length) {
        _push(`<div class="grid-3" data-v-c1a686f7><!--[-->`);
        ssrRenderList(filteredItems.value, (item) => {
          _push(`<div class="mb-0" data-v-c1a686f7><div class="card rounded-5 h-100" data-v-c1a686f7><div class="card-header" data-v-c1a686f7><div class="resource-icon ms-3 mt-2" data-v-c1a686f7>`);
          if (item.type.toLowerCase() === "tutorial") {
            _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:file-lines" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.type.toLowerCase() === "video") {
            _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:video" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.type.toLowerCase() === "template") {
            _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:list" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.type.toLowerCase() === "guide") {
            _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:file-lines" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><h5 class="fw-bold text-capitalize text-danger" data-v-c1a686f7>${ssrInterpolate(unref(truncate)(item.title.toLowerCase(), 25))}</h5></div><div class="card-body" data-v-c1a686f7><p class="text-capitalize small text-muted" data-v-c1a686f7>${ssrInterpolate(unref(truncate)(item.content.toLowerCase(), 100))}.</p><div class="d-flex justify-content-between align-items-center" data-v-c1a686f7><div class="text-warning small" data-v-c1a686f7><strong data-v-c1a686f7>Publish Date: </strong>${ssrInterpolate(unref(formatDate)(item.created_at))}</div><div class="badge bg-primary" data-v-c1a686f7>${ssrInterpolate(item.type)}</div></div></div><div class="card-footer text-center" data-v-c1a686f7><div class="ms-3" data-v-c1a686f7>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/user/dashboard/resources/" + item.type + "/" + item.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.type.toLowerCase() === "template") {
                  _push2(`<span class="btn btn-success rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}" data-v-c1a686f7${_scopeId}>Download template</span>`);
                } else if (item.type.toLowerCase() === "guide") {
                  _push2(`<span class="btn btn-success rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}" data-v-c1a686f7${_scopeId}>Read Content</span>`);
                } else if (item.type.toLowerCase() === "video") {
                  _push2(`<span class="btn btn-success rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}" data-v-c1a686f7${_scopeId}>Watch video</span>`);
                } else if (item.type.toLowerCase() === "tutorial") {
                  _push2(`<span class="btn btn-success rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}" data-v-c1a686f7${_scopeId}>Watch tutorial</span>`);
                } else {
                  _push2(`<span class="btn btn-outline-success rounded-4" style="${ssrRenderStyle({ "font-size": "0.75rem" })}" data-v-c1a686f7${_scopeId}>View Details</span>`);
                }
              } else {
                return [
                  item.type.toLowerCase() === "template" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "btn btn-success rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "Download template")) : item.type.toLowerCase() === "guide" ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "btn btn-success rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "Read Content")) : item.type.toLowerCase() === "video" ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: "btn btn-success rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "Watch video")) : item.type.toLowerCase() === "tutorial" ? (openBlock(), createBlock("span", {
                    key: 3,
                    class: "btn btn-success rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "Watch tutorial")) : (openBlock(), createBlock("span", {
                    key: 4,
                    class: "btn btn-outline-success rounded-4",
                    style: { "font-size": "0.75rem" }
                  }, "View Details"))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center text-muted" data-v-c1a686f7> No Resources found </div>`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_component_UserInsights, null, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/dashboard/resources/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1a686f7"]]);

export { index as default };
//# sourceMappingURL=index-DFTgals8.mjs.map
