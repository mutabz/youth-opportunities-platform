import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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
    const searchQuery = ref("");
    const ActiveCategory = ref("");
    useDataStore();
    const items = ref([]);
    const categories = ref([]);
    const truncate = (text, length) => {
      if (!text) return "";
      return text.length > length ? text.slice(0, length) + "..." : text;
    };
    const filteredItems = computed(() => {
      if (!items.value) return [];
      return items.value.filter((opp) => {
        var _a, _b, _c;
        const matchesSearch = ((_a = opp.title) == null ? void 0 : _a.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_c = (_b = opp.description) == null ? void 0 : _b[0]) == null ? void 0 : _c.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchesCategory = !ActiveCategory.value.toLowerCase() || opp.category.toLowerCase() === ActiveCategory.value.toLowerCase();
        return matchesSearch && matchesCategory;
      });
    });
    const searchResults = computed(() => {
      var _a;
      if (!searchQuery.value) return [];
      return (_a = items.value) == null ? void 0 : _a.filter(
        (opp) => {
          var _a2, _b;
          return ((_a2 = opp.description[0]) == null ? void 0 : _a2.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_b = opp.title) == null ? void 0 : _b.toLowerCase().includes(searchQuery.value.toLowerCase()));
        }
      ).slice(0, 5);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="gen-hero" data-v-c49fc16b><h1 data-v-c49fc16b>Explore Opportunities</h1><p data-v-c49fc16b>Find scholarships, internships, fellowships and grants from around the world.</p><div class="card shadow-sm mb-4" data-v-c49fc16b><div class="card-body d-flex align-items-center gap-2" data-v-c49fc16b>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:magnifying-glass",
        class: "text-muted"
      }, null, _parent));
      _push(`<input type="text" class="form-control" placeholder="Search For scholarships..."${ssrRenderAttr("value", searchQuery.value)} data-v-c49fc16b></div>`);
      if (searchResults.value.length) {
        _push(`<div class="card-footer p-0" data-v-c49fc16b><div class="w-100" data-v-c49fc16b><!--[-->`);
        ssrRenderList(searchResults.value, (opp) => {
          _push(`<div data-v-c49fc16b>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/opportunities/" + opp.category + "-data/" + opp.id,
            class: "d-flex justify-content-between align-items-center p-2 border-bottom text-decoration-none text-dark search-item"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<strong data-v-c49fc16b${_scopeId}>${ssrInterpolate(truncate(opp.title, 60))}</strong><span class="text-muted text-blue" data-v-c49fc16b${_scopeId}>${ssrInterpolate(opp.category || "Opportunity")}</span><span class="text-muted text-blue" data-v-c49fc16b${_scopeId}>${ssrInterpolate(opp.opportunity_type || "Opportunity")}</span>`);
              } else {
                return [
                  createVNode("strong", null, toDisplayString(truncate(opp.title, 60)), 1),
                  createVNode("span", { class: "text-muted text-blue" }, toDisplayString(opp.category || "Opportunity"), 1),
                  createVNode("span", { class: "text-muted text-blue" }, toDisplayString(opp.opportunity_type || "Opportunity"), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--><div class="text-center p-2" data-v-c49fc16b><button class="btn btn-sm btn-outline-primary" data-v-c49fc16b> View all results </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="" data-v-c49fc16b><div class="main-content" data-v-c49fc16b><section class="tabs" data-v-c49fc16b><div class="${ssrRenderClass([{ "active": ActiveCategory.value === "" }, "tab"])}" data-v-c49fc16b>All</div><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(`<div class="${ssrRenderClass([{ "active": ActiveCategory.value === cat.name }, "tab"])}" data-v-c49fc16b>${ssrInterpolate(cat.name)}</div>`);
      });
      _push(`<!--]--></section><div class="p-4" data-v-c49fc16b>`);
      if (_ctx.loading) {
        _push(`<div class="text-blue-500" data-v-c49fc16b>Loading...</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.error) {
        _push(`<div class="text-red-500" data-v-c49fc16b>${ssrInterpolate(_ctx.error)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (filteredItems.value && filteredItems.value.length) {
        _push(`<div class="opp-grid" data-v-c49fc16b><!--[-->`);
        ssrRenderList(items.value, (opp) => {
          _push(`<div class="card shadow-lg h-100 rounded-4" data-v-c49fc16b><div class="card-header" data-v-c49fc16b>`);
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
          _push(`</div><div class="card-body" data-v-c49fc16b><div data-v-c49fc16b>${ssrInterpolate(truncate(opp.description[0] || "", 100))}</div><div class="d-flex align-items-center justify-content-between mt-3 mb-0" data-v-c49fc16b><div class="bg-primary badge" data-v-c49fc16b>${ssrInterpolate(opp.category || "Opportunity")}</div><div class="text-danger" data-v-c49fc16b><strong class="me-3" data-v-c49fc16b>Deadline: </strong>${ssrInterpolate(opp.details.application.deadline)}</div></div></div><div class="card-footer" data-v-c49fc16b><span class="deadline" data-v-c49fc16b>`);
          _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:location-pin" }, null, _parent));
          _push(` ${ssrInterpolate(truncate(opp.host_country, 10))}, ${ssrInterpolate(truncate(opp.location.city, 10))}</span>`);
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
        _push(`<div data-v-c49fc16b>No opportunities found.</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="p-4" style="${ssrRenderStyle({ "background": "#f1f5f9" })}" data-v-c49fc16b><div class="section-title" data-v-c49fc16b><h2 data-v-c49fc16b>Recommended for You</h2><p data-v-c49fc16b>Based on the latest deadlines and high success rates.</p></div><div class="opp-grid" data-v-c49fc16b><!--[-->`);
      ssrRenderList(items.value, (opp) => {
        _push(`<div class="card shadow-lg h-100 rounded-4" data-v-c49fc16b><div class="card-header" data-v-c49fc16b>`);
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
        _push(`</div><div class="card-body" data-v-c49fc16b><div data-v-c49fc16b>${ssrInterpolate(truncate(opp.description[0] || "", 100))}</div><div class="d-flex align-items-center justify-content-between mt-3 mb-0" data-v-c49fc16b><div class="bg-primary badge" data-v-c49fc16b>${ssrInterpolate(opp.category || "Opportunity")}</div><div class="text-danger text-end" data-v-c49fc16b><strong class="me-3" data-v-c49fc16b>Deadline: </strong>${ssrInterpolate(opp.details.application.deadline)}</div></div></div><div class="card-footer" data-v-c49fc16b><span class="deadline" data-v-c49fc16b>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:location-pin" }, null, _parent));
        _push(` ${ssrInterpolate(truncate(opp.host_country, 10))}, ${ssrInterpolate(truncate(opp.location.city, 10))}</span>`);
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
      _push(`<!--]--></div><div class="centered mt-3" data-v-c49fc16b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn btn-filled btn-lg",
        to: "/opportunities"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Browse More `);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Browse More "),
              createVNode(_component_Icon, { name: "fa6-solid:arrow-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/opportunities/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c49fc16b"]]);

export { index as default };
//# sourceMappingURL=index-zBe4POmY.mjs.map
