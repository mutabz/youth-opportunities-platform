import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useDataStore();
    const searchQuery = ref("");
    const items = ref([]);
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
    const searchResults = computed(() => {
      var _a;
      if (!searchQuery.value) return [];
      if (!items.value) return [];
      return (_a = items.value) == null ? void 0 : _a.filter(
        (opp) => {
          var _a2, _b;
          return ((_a2 = opp.description[0]) == null ? void 0 : _a2.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_b = opp.title) == null ? void 0 : _b.toLowerCase().includes(searchQuery.value.toLowerCase()));
        }
      ).slice(0, 5);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-46848f3d><header class="hero" data-v-46848f3d><div class="hero-text" data-v-46848f3d><h1 data-v-46848f3d>Find the <span data-v-46848f3d>Opportunity</span> that changes everything.</h1><p data-v-46848f3d>We connect ambitious young people with world-class scholarships, internships, and fully-funded conferences.</p><div class="search-bar" data-v-46848f3d><input type="text" placeholder="Try &#39;Full Stack Internship&#39; or &#39;UN Volunteer&#39;..."${ssrRenderAttr("value", unref(searchQuery))} data-v-46848f3d><button class="btn btn-primary rounded-4" data-v-46848f3d>Search</button></div>`);
      if (searchResults.value.length) {
        _push(`<div class="card shadow0lg mt-0 mb-4" data-v-46848f3d>`);
        if (searchResults.value.length) {
          _push(`<div class="card-footer p-0" data-v-46848f3d><div class="w-100" data-v-46848f3d><!--[-->`);
          ssrRenderList(searchResults.value, (opp) => {
            _push(`<div data-v-46848f3d>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/opportunities/" + opp.category + "-data/" + opp.id,
              class: "d-flex justify-content-between align-items-center p-2 border-bottom text-decoration-none text-dark search-item"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<strong class="col-lg-6 text-start" data-v-46848f3d${_scopeId}>${ssrInterpolate(truncate(opp.title, 60))}</strong><span class="text-muted text-blue col-lg-2 text-end" data-v-46848f3d${_scopeId}>${ssrInterpolate(opp.category || "Opportunity")}</span><span class="text-muted text-blue col-lg-2 text-end" data-v-46848f3d${_scopeId}>${ssrInterpolate(opp.opportunity_type || "Opportunity")}</span>`);
                } else {
                  return [
                    createVNode("strong", { class: "col-lg-6 text-start" }, toDisplayString(truncate(opp.title, 60)), 1),
                    createVNode("span", { class: "text-muted text-blue col-lg-2 text-end" }, toDisplayString(opp.category || "Opportunity"), 1),
                    createVNode("span", { class: "text-muted text-blue col-lg-2 text-end" }, toDisplayString(opp.opportunity_type || "Opportunity"), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--><div class="text-center p-2" data-v-46848f3d><button class="btn btn-sm btn-outline-primary" data-v-46848f3d> View all results </button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p style="${ssrRenderStyle({ "font-size": "0.8rem" })}" data-v-46848f3d>Trending: Google STEP, Rhodes Scholarship, Hult Prize</p></div></header><section class="tabs" data-v-46848f3d><div class="tab" data-v-46848f3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/scholarships",
        class: "unset"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Scholarships`);
          } else {
            return [
              createTextVNode("Scholarships")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tab" data-v-46848f3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/internships",
        class: "all-unset"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Internships`);
          } else {
            return [
              createTextVNode("Internships")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tab" data-v-46848f3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/competitions",
        class: "all-unset"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Competitions`);
          } else {
            return [
              createTextVNode("Competitions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tab" data-v-46848f3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/grants",
        class: "all-unset"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Grants &amp; Funding`);
          } else {
            return [
              createTextVNode("Grants & Funding")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tab" data-v-46848f3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/fellowships",
        class: "all-unset"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fellowships`);
          } else {
            return [
              createTextVNode("Fellowships")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tab" data-v-46848f3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/jobs",
        class: "all-unset"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Job In Rwanda`);
          } else {
            return [
              createTextVNode("Job In Rwanda")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="p-2" style="${ssrRenderStyle({ "background": "#f1f5f9" })}" data-v-46848f3d><div class="section-title" data-v-46848f3d><h2 data-v-46848f3d>Recommended for You</h2><p data-v-46848f3d>Based on the latest deadlines and high success rates.</p></div><div class="opp-grid" data-v-46848f3d><!--[-->`);
      ssrRenderList(unref(items), (opp) => {
        _push(`<div class="card shadow-lg h-100 rounded-4" data-v-46848f3d><div class="card-header" data-v-46848f3d>`);
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
        _push(`</div><div class="card-body" data-v-46848f3d><div data-v-46848f3d>${ssrInterpolate(truncate(opp.description[0] || "", 100))}</div><div class="d-flex align-items-center justify-content-between mt-3 mb-0" data-v-46848f3d><div class="bg-primary badge" data-v-46848f3d>${ssrInterpolate(opp.category || "Opportunity")}</div><div class="text-danger" data-v-46848f3d><strong class="me-3" data-v-46848f3d>Deadline: </strong>${ssrInterpolate(opp.details.application.deadline)}</div></div></div><div class="card-footer" data-v-46848f3d><span class="deadline" data-v-46848f3d>`);
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
      _push(`<!--]--></div><div class="centered mt-3" data-v-46848f3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn btn-primary btn-lg",
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
      _push(`</div></section><section class="p-2" data-v-46848f3d><div class="opportunity-mega-menu" data-v-46848f3d><!--[-->`);
      ssrRenderList(unref(groups), (routes, category) => {
        _push(`<div class="menu-group" data-v-46848f3d><h5 class="menu-title" data-v-46848f3d>${ssrInterpolate(category)}</h5><ul class="menu-list" data-v-46848f3d><!--[-->`);
        ssrRenderList(routes.slice(0, 10), (route) => {
          _push(`<li data-v-46848f3d>`);
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
      _push(`<!--]--></div></section><section class="stats" data-v-46848f3d><div class="stat-item" data-v-46848f3d><h3 data-v-46848f3d>50k+</h3><p data-v-46848f3d>Active Users</p></div><div class="stat-item" data-v-46848f3d><h3 data-v-46848f3d>$2.5M</h3><p data-v-46848f3d>Grant Funding Found</p></div><div class="stat-item" data-v-46848f3d><h3 data-v-46848f3d>120+</h3><p data-v-46848f3d>Countries Reached</p></div><div class="stat-item" data-v-46848f3d><h3 data-v-46848f3d>1,200</h3><p data-v-46848f3d>Daily Listings</p></div></section><section class="section-padding" data-v-46848f3d><div class="section-title" data-v-46848f3d><h2 data-v-46848f3d>Browse by Category</h2><p data-v-46848f3d>What are you looking for today?</p></div><div class="category-grid" data-v-46848f3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/scholarships",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-46848f3d${_scopeId}><span class="icon" data-v-46848f3d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:graduation-cap" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-46848f3d${_scopeId}>Scholarships</h4>`);
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
        to: "/opportunities/grants",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-46848f3d${_scopeId}><span class="icon" data-v-46848f3d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:hand-holding-dollar" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-46848f3d${_scopeId}>Grants &amp; Funding</h4>`);
          } else {
            return [
              createVNode("span", { class: "cat-icon" }, [
                createVNode("span", { class: "icon" }, [
                  createVNode(_component_Icon, { name: "fa6-solid:hand-holding-dollar" })
                ])
              ]),
              createVNode("h4", null, "Grants & Funding")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/internships",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-46848f3d${_scopeId}><span class="icon" data-v-46848f3d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:briefcase" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-46848f3d${_scopeId}>Internships</h4>`);
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
        to: "/opportunities/competitions",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-46848f3d${_scopeId}><span class="icon" data-v-46848f3d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:users" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-46848f3d${_scopeId}>Competitions</h4>`);
          } else {
            return [
              createVNode("span", { class: "cat-icon" }, [
                createVNode("span", { class: "icon" }, [
                  createVNode(_component_Icon, { name: "fa6-solid:users" })
                ])
              ]),
              createVNode("h4", null, "Competitions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/fellowships",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-46848f3d${_scopeId}><span class="icon" data-v-46848f3d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:award" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-46848f3d${_scopeId}>Fellowships</h4>`);
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/opportunities/jobs",
        class: "cat-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="cat-icon" data-v-46848f3d${_scopeId}><span class="icon" data-v-46848f3d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:briefcase" }, null, _parent2, _scopeId));
            _push2(`</span></span><h4 data-v-46848f3d${_scopeId}>Job In Rwanda</h4>`);
          } else {
            return [
              createVNode("span", { class: "cat-icon" }, [
                createVNode("span", { class: "icon" }, [
                  createVNode(_component_Icon, { name: "fa6-solid:briefcase" })
                ])
              ]),
              createVNode("h4", null, "Job In Rwanda")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46848f3d"]]);

export { index as default };
//# sourceMappingURL=index-3gu-LB_U.mjs.map
