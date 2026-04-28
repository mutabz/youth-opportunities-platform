import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './images-B9na2Clh.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _export_sfc, f as useRouter } from './server.mjs';
import { u as useGroupedOpportunities } from './useGroupedOpportunities-DRzc9OIf.mjs';
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
import 'perfect-debounce';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './internships-CK2Y52Ka.mjs';
import './grants-9_MDG5Dl.mjs';
import './jobs-BmqpPP1y.mjs';
import './scholarships-CJvkA768.mjs';

const model = "opportunities";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const dataStore = useDataStore();
    const items = computed(() => dataStore.items[model]);
    computed(() => dataStore.loading[model]);
    computed(() => dataStore.error[model]);
    const truncate = (text, length) => {
      if (!text) return "";
      return text.length > length ? text.slice(0, length) + "..." : text;
    };
    const { groups } = useGroupedOpportunities();
    computed(() => {
      const { groups: groups2 } = useGroupedOpportunities();
      console.log(groups2);
    });
    function formatName(path) {
      return path.split("/").pop().replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-4e1957b6><header class="hero" data-v-4e1957b6><div class="hero-text" data-v-4e1957b6><h1 data-v-4e1957b6>Find the <span data-v-4e1957b6>Opportunity</span> that changes everything.</h1><p data-v-4e1957b6>We connect ambitious young people with world-class scholarships, internships, and fully-funded conferences.</p><div class="search-bar" data-v-4e1957b6><input type="text" placeholder="Try &#39;Full Stack Internship&#39; or &#39;UN Volunteer&#39;..." data-v-4e1957b6><button class="btn btn-primary rounded-4" data-v-4e1957b6>Search</button></div><p style="${ssrRenderStyle({ "font-size": "0.8rem" })}" data-v-4e1957b6>Trending: Google STEP, Rhodes Scholarship, Hult Prize</p></div></header><section class="tabs" data-v-4e1957b6><div class="tab active" data-v-4e1957b6>All</div><div class="tab" data-v-4e1957b6>CV Templates</div><div class="tab" data-v-4e1957b6>Scholarship Guides</div><div class="tab" data-v-4e1957b6>Interview Prep</div><div class="tab" data-v-4e1957b6>Startup Toolkit</div></section><section class="stats" data-v-4e1957b6><div class="stat-item" data-v-4e1957b6><h3 data-v-4e1957b6>50k+</h3><p data-v-4e1957b6>Active Users</p></div><div class="stat-item" data-v-4e1957b6><h3 data-v-4e1957b6>$2.5M</h3><p data-v-4e1957b6>Grant Funding Found</p></div><div class="stat-item" data-v-4e1957b6><h3 data-v-4e1957b6>120+</h3><p data-v-4e1957b6>Countries Reached</p></div><div class="stat-item" data-v-4e1957b6><h3 data-v-4e1957b6>1,200</h3><p data-v-4e1957b6>Daily Listings</p></div></section><section class="section-padding" data-v-4e1957b6><div class="opportunity-mega-menu" data-v-4e1957b6><!--[-->`);
      ssrRenderList(unref(groups), (routes, category) => {
        _push(`<div class="menu-group" data-v-4e1957b6><h5 class="menu-title" data-v-4e1957b6>${ssrInterpolate(category)}</h5><ul class="menu-list" data-v-4e1957b6><!--[-->`);
        ssrRenderList(routes.slice(0, 10), (route) => {
          _push(`<li data-v-4e1957b6>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: route.path,
            class: "menu-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(formatName(route.path))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(formatName(route.path)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></section><section class="section-padding" data-v-4e1957b6><div class="section-title" data-v-4e1957b6><h2 data-v-4e1957b6>Browse by Category</h2><p data-v-4e1957b6>What are you looking for today?</p></div><div class="category-grid" data-v-4e1957b6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/scholarships",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-4e1957b6${_scopeId}><span class="icon" data-v-4e1957b6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:graduation-cap" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-4e1957b6${_scopeId}>Scholarships</h4>`);
          } else {
            return [
              createVNode("span", { class: "cat-icon" }, [
                createVNode("span", { class: "icon" }, [
                  createVNode(_component_Icon, { name: "fa6-solid:graduation-cap" })
                ])
              ]),
              createVNode("h4", null, "Scholarships")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/scholarships",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-4e1957b6${_scopeId}><span class="icon" data-v-4e1957b6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:briefcase" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-4e1957b6${_scopeId}>Internships</h4>`);
          } else {
            return [
              createVNode("span", { class: "cat-icon" }, [
                createVNode("span", { class: "icon" }, [
                  createVNode(_component_Icon, { name: "fa6-solid:briefcase" })
                ])
              ]),
              createVNode("h4", null, "Internships")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/scholarships",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-4e1957b6${_scopeId}><span class="icon" data-v-4e1957b6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:users" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-4e1957b6${_scopeId}>Conferences</h4>`);
          } else {
            return [
              createVNode("span", { class: "cat-icon" }, [
                createVNode("span", { class: "icon" }, [
                  createVNode(_component_Icon, { name: "fa6-solid:users" })
                ])
              ]),
              createVNode("h4", null, "Conferences")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/scholarships",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-4e1957b6${_scopeId}><span class="icon" data-v-4e1957b6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:hand-holding-dollar" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-4e1957b6${_scopeId}>Grants</h4>`);
          } else {
            return [
              createVNode("span", { class: "cat-icon" }, [
                createVNode("span", { class: "icon" }, [
                  createVNode(_component_Icon, { name: "fa6-solid:hand-holding-dollar" })
                ])
              ]),
              createVNode("h4", null, "Grants")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/scholarships",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-4e1957b6${_scopeId}><span class="icon" data-v-4e1957b6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:award" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-4e1957b6${_scopeId}>Fellowships</h4>`);
          } else {
            return [
              createVNode("span", { class: "cat-icon" }, [
                createVNode("span", { class: "icon" }, [
                  createVNode(_component_Icon, { name: "fa6-solid:award" })
                ])
              ]),
              createVNode("h4", null, "Fellowships")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="section-padding" style="${ssrRenderStyle({ "background": "#f1f5f9" })}" data-v-4e1957b6><div class="section-title" data-v-4e1957b6><h2 data-v-4e1957b6>Recommended for You</h2><p data-v-4e1957b6>Based on the latest deadlines and high success rates.</p></div><div class="opp-grid" data-v-4e1957b6><!--[-->`);
      ssrRenderList(items.value, (opp) => {
        _push(`<div class="card" data-v-4e1957b6><div class="card-img" data-v-4e1957b6><span class="card-badge" data-v-4e1957b6>${ssrInterpolate(opp.category || "Opportunity")}</span><img${ssrRenderAttr("src", _imports_0)} data-v-4e1957b6></div><div class="card-content" data-v-4e1957b6><h3 class="label" data-v-4e1957b6>${ssrInterpolate(opp.title)}</h3><p data-v-4e1957b6>${ssrInterpolate(truncate(opp.description[0] || "", 100))}</p><div class="card-footer" data-v-4e1957b6><span class="deadline" data-v-4e1957b6>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:location-pin" }, null, _parent));
        _push(` ${ssrInterpolate(truncate(opp.host_country, 10))}, ${ssrInterpolate(truncate(opp.location.city, 10))}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/opportunities/" + opp.id,
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
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><div class="centered mt-3" data-v-4e1957b6>`);
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
      _push(`</div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e1957b6"]]);

export { index as default };
//# sourceMappingURL=index-1_1q8WbW.mjs.map
