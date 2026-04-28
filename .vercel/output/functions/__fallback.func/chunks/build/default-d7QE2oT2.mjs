import { _ as _export_sfc, k as useRoute, s as __nuxt_component_0, m as useUserStore } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, watch, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { g as getInitials } from './utils-C8zi-Gnd.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { u as useDeviceType } from './useDeviceType-BcjKgtk3.mjs';
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

const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const showSidebar = ref(false);
    const userStore = useUserStore();
    const user = computed(() => userStore.user);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(_attrs)}><div class="nav-lg">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "logo mr-5",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`YouthLink`);
          } else {
            return [
              createTextVNode("YouthLink")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="nav-links"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/opportunities"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Explore`);
          } else {
            return [
              createTextVNode("Explore")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/resources"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Resources`);
          } else {
            return [
              createTextVNode("Resources")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/for-partners"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`For Partners`);
          } else {
            return [
              createTextVNode("For Partners")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="">`);
      if (!unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-primary btn-lg rounded-5",
          to: "/join-free"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="px-3"${_scopeId}>Join Free `);
              _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              return [
                createVNode("span", { class: "px-3" }, [
                  createTextVNode("Join Free "),
                  createVNode(_component_Icon, { name: "fa6-solid:arrow-right" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard",
          class: "nav-profile"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-primary img"${_scopeId}>${ssrInterpolate(unref(getInitials)(unref(user).full_name))}</div>`);
            } else {
              return [
                createVNode("div", { class: "bg-primary img" }, toDisplayString(unref(getInitials)(unref(user).full_name)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div><div class="nav-sm"><div class="auth-sect"><div class="menu-holder" id="toggle-btn"><div class="menu"><span class="long"></span><span class="short"></span></div></div></div><div class="auth-sect"><div class="holder">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:gauge" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:gauge" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="holder d-flex"><div class="">`);
      if (!unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/join-free/LoginPage" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:right-to-bracket" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "fa6-solid:right-to-bracket" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard/profile" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:user" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "fa6-solid:user" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:house" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:house" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="${ssrRenderClass([{ "open": showSidebar.value }, "n-sidebar"])}"><div class="d-flex justify-content-between align-items-center nav-head"><div class="fw-bold text-uppercase">Browse here</div><div class="menu-holder" id="toggle-btn"><div class="menu"> X </div></div></div><hr><div class="n-nav-links"><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:house" }, null, _parent2, _scopeId));
            _push2(` Home Page `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:house" }),
              createTextVNode(" Home Page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/opportunities" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:link" }, null, _parent2, _scopeId));
            _push2(` Explore Page `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:link" }),
              createTextVNode(" Explore Page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/resources" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:list" }, null, _parent2, _scopeId));
            _push2(` Resources Page `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:list" }),
              createTextVNode(" Resources Page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/for-partners" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:lock" }, null, _parent2, _scopeId));
            _push2(` For Partners Page `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:lock" }),
              createTextVNode(" For Partners Page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/opportunities" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:list" }, null, _parent2, _scopeId));
            _push2(` Resources Page `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:list" }),
              createTextVNode(" Resources Page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/opportunities/scholarships" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:graduation-cap" }, null, _parent2, _scopeId));
            _push2(` Scholarships `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:graduation-cap" }),
              createTextVNode(" Scholarships ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/opportunities/grants" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:hand-holding-dollar" }, null, _parent2, _scopeId));
            _push2(` Grants &amp; Funding `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:hand-holding-dollar" }),
              createTextVNode(" Grants & Funding ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/opportunities/internships" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:briefcase" }, null, _parent2, _scopeId));
            _push2(` Internships `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:briefcase" }),
              createTextVNode(" Internships ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/opportunities/competitions" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:users" }, null, _parent2, _scopeId));
            _push2(` Competitions `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:users" }),
              createTextVNode(" Competitions ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/opportunities/fellowships" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:award" }, null, _parent2, _scopeId));
            _push2(` Fellowships `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:award" }),
              createTextVNode(" Fellowships ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/opportunities/jobs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:briefcase" }, null, _parent2, _scopeId));
            _push2(` Job In Rwanda `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:briefcase" }),
              createTextVNode(" Job In Rwanda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/join-free",
        class: "btn btn-outline-primary rounded-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Join Free`);
          } else {
            return [
              createTextVNode("Join Free")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-cols"><div class="footer-col"><a href="#" class="logo" style="${ssrRenderStyle({ "color": "white" })}">YouthLink</a><p style="${ssrRenderStyle({ "margin-top": "1rem", "color": "#94a3b8", "font-size": "0.9rem" })}">Bridging the gap between talent and opportunity. We believe that your location shouldn&#39;t limit your potential.</p></div><div class="footer-col"><h4>Platform</h4><ul><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:house" }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:magnifying-glass" }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/opportunities"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Explore`);
      } else {
        return [
          createTextVNode("Explore")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:book-open" }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/resources"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Resources`);
      } else {
        return [
          createTextVNode("Resources")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:building" }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/organizations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Organizations`);
      } else {
        return [
          createTextVNode("Organizations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:handshake" }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/for-partners"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`For Partners`);
      } else {
        return [
          createTextVNode("For Partners")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="footer-col"><h4>Support</h4><ul><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/support" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "fa6-solid:circle-question",
          class: "me-2"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Help Center</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "fa6-solid:circle-question",
            class: "me-2"
          }),
          createVNode("span", null, "Help Center")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/support/safety-guidelines" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "fa6-solid:shield",
          class: "me-2"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Safety Guidelines</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "fa6-solid:shield",
            class: "me-2"
          }),
          createVNode("span", null, "Safety Guidelines")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/support/contact-us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "fa6-solid:envelope",
          class: "me-2"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Contact Us</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "fa6-solid:envelope",
            class: "me-2"
          }),
          createVNode("span", null, "Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="footer-col"><h4>Legal</h4><ul><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/legal" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "fa6-solid:lock",
          class: "me-2"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Privacy Policy</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "fa6-solid:lock",
            class: "me-2"
          }),
          createVNode("span", null, "Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/legal/terms-and-conditions" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "fa6-solid:file-contract",
          class: "me-2"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Terms of Use</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "fa6-solid:file-contract",
            class: "me-2"
          }),
          createVNode("span", null, "Terms of Use")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div style="${ssrRenderStyle({ "border-top": "1px solid #1e293b", "padding-top": "2rem", "text-align": "center", "font-size": "0.8rem", "color": "#64748b" })}"> \xA9 2026 YouthLink Platform. All rights reserved. </div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footerbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footerbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { device } = useDeviceType();
    useDataStore();
    const route = useRoute();
    ref({});
    const form = ref({});
    const searchQuery = ref("");
    const statusFilter = ref("");
    const typeFilter = ref("");
    ref("");
    const items = ref([]);
    const trackPage = async () => {
      return;
    };
    const filteredOpportunities = computed(() => {
      return (items.value || []).filter((o) => {
        var _a, _b;
        const search = searchQuery.value.toLowerCase();
        const matchesSearch = ((_a = o.title) == null ? void 0 : _a.toLowerCase().includes(search)) || ((_b = o.opportunity_type) == null ? void 0 : _b.toLowerCase().includes(search));
        const matchesStatus = statusFilter.value ? o.status === statusFilter.value : true;
        const matchesType = typeFilter.value ? o.opportunity_type === typeFilter.value : true;
        return matchesSearch && matchesStatus && matchesType;
      });
    });
    watch(
      () => route.fullPath,
      () => {
        trackPage();
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, { class: "" }, null, _parent));
      _push(`<div class="row g-3 mt-5" data-v-c1a4e9da><div class="${ssrRenderClass({ "col-md-8": unref(device) === "desktop" })}" data-v-c1a4e9da><div class="" data-v-c1a4e9da>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`<section class="newsletter mt-5" data-v-c1a4e9da><h2 data-v-c1a4e9da>Don&#39;t miss the next big thing.</h2><p style="${ssrRenderStyle({ "margin-bottom": "2rem", "opacity": "0.9" })}" data-v-c1a4e9da>Get curated weekly opportunities straight to your inbox.</p><form data-v-c1a4e9da><div class="search-bar" data-v-c1a4e9da><input type="email"${ssrRenderAttr("value", form.value.email)} placeholder="Enter your email address" data-v-c1a4e9da><button class="btn btn-secondary px-2 py-2" style="${ssrRenderStyle({ "background": "var(--text-main)" })}" data-v-c1a4e9da>Subscribe Now</button></div></form></section></div></div>`);
      if (unref(device) === "desktop") {
        _push(`<section class="col-lg-4 sidebar sticky-top" data-v-c1a4e9da><aside class="search-box" data-v-c1a4e9da><div class="search-header" data-v-c1a4e9da><h3 data-v-c1a4e9da>Search</h3></div><div class="filters mt-3 mb-3 d-flex gap-2 align-items-center" data-v-c1a4e9da><select class="form-select small" data-v-c1a4e9da><option value="" data-v-c1a4e9da${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "") : ssrLooseEqual(statusFilter.value, "")) ? " selected" : ""}>All Status</option><option value="Open" data-v-c1a4e9da${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "Open") : ssrLooseEqual(statusFilter.value, "Open")) ? " selected" : ""}>Open</option><option value="Closed" data-v-c1a4e9da${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "Closed") : ssrLooseEqual(statusFilter.value, "Closed")) ? " selected" : ""}>Closed</option><option value="Upcoming" data-v-c1a4e9da${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "Upcoming") : ssrLooseEqual(statusFilter.value, "Upcoming")) ? " selected" : ""}>Upcoming</option></select><select class="form-select" data-v-c1a4e9da><option value="" data-v-c1a4e9da${ssrIncludeBooleanAttr(Array.isArray(typeFilter.value) ? ssrLooseContain(typeFilter.value, "") : ssrLooseEqual(typeFilter.value, "")) ? " selected" : ""}>All Types</option><!--[-->`);
        ssrRenderList(_ctx.opportunityTypes, (t) => {
          _push(`<option${ssrRenderAttr("value", t.name)} data-v-c1a4e9da${ssrIncludeBooleanAttr(Array.isArray(typeFilter.value) ? ssrLooseContain(typeFilter.value, t.name) : ssrLooseEqual(typeFilter.value, t.name)) ? " selected" : ""}>${ssrInterpolate(t.name)}</option>`);
        });
        _push(`<!--]--></select><button class="btn btn-secondary" data-v-c1a4e9da><span class="" data-v-c1a4e9da></span>Refresh</button></div><div class="search-input-wrapper" data-v-c1a4e9da><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search opportunities..." data-v-c1a4e9da></div><div class="search-results" data-v-c1a4e9da><!--[-->`);
        ssrRenderList(filteredOpportunities.value, (item) => {
          _push(`<div class="result-item" data-v-c1a4e9da><h4 data-v-c1a4e9da>${ssrInterpolate(item.title)}</h4><p data-v-c1a4e9da>${ssrInterpolate(item.description[0])}</p><div class="" data-v-c1a4e9da>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/opportunities/" + item.category + "-data/" + item.id,
            class: "btn btn-outline-primary rounded-4",
            style: { "font-size": "0.8rem", "padding": "0.4rem 1rem" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`View Details for this ${ssrInterpolate(item.category)}`);
              } else {
                return [
                  createTextVNode("View Details for this " + toDisplayString(item.category), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></aside></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(Footerbar, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1a4e9da"]]);

export { _default as default };
//# sourceMappingURL=default-d7QE2oT2.mjs.map
