import { _ as _export_sfc, k as useRoute, s as __nuxt_component_0, m as useUserStore } from './server.mjs';
import { ref, watch, computed, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DcvE_fL2.mjs';
import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { g as getInitials } from './utils-C8zi-Gnd.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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

const _sfc_main$1 = {
  __name: "PartnerNavBar",
  __ssrInlineRender: true,
  setup(__props) {
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
        to: "/adm/prt"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dashboard`);
          } else {
            return [
              createTextVNode("Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/adm/prt/opportunities"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Opportunities`);
          } else {
            return [
              createTextVNode("Opportunities")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/adm/prt/applications"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Applications`);
          } else {
            return [
              createTextVNode("Applications")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/dashboard"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Profile`);
          } else {
            return [
              createTextVNode("Profile")
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
      _push(`</div></div><div class="nav-sm"><div class="auth-sect"><div class="menu-holder" id="toggle-btn"><div class="menu"><span class="long"></span><span class="short"></span></div></div><div class="holder d-flex">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:plus" }, null, _parent));
      _push(`Membership </div></div><div class="auth-sect"><div class="holder">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:bell" }, null, _parent));
      _push(`</div><div class="holder d-flex"><div class="">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:user-plus" }, null, _parent));
      _push(`</div><div class="">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:envelope" }, null, _parent));
      _push(`</div></div></div></div><div class="bottom-nav-sm"><div class="auth-sect"><div class="menu-holder"><div class="menu"><span class="long"></span><span class="short"></span></div></div><div class="holder d-flex">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:plus" }, null, _parent));
      _push(`Membership </div></div><div class="auth-sect"><div class="holder">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:bell" }, null, _parent));
      _push(`</div><div class="holder d-flex"><div class="">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:user-plus" }, null, _parent));
      _push(`</div><div class="">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:envelope" }, null, _parent));
      _push(`</div></div></div></div><div class="n-sidebar" id="sidebar"><ul class="n-nav-links"><li name="nav-s-item">`);
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
      _push(`</li><li name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "explore.html" }, {
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
      _push(`</li><li name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mentors.html" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:chalkboard" }, null, _parent2, _scopeId));
            _push2(` Mentors Page `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:chalkboard" }),
              createTextVNode(" Mentors Page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "resources.html" }, {
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
      _push(`</li><li name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "for_partners.html" }, {
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
      _push(`</li><li name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "register.html",
        class: "btn btn-filled"
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
      _push(`</li><li name="nav-s-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "login.html",
        class: "btn btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log In`);
          } else {
            return [
              createTextVNode("Log In")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PartnerNavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "partner",
  __ssrInlineRender: true,
  setup(__props) {
    useDataStore();
    const route = useRoute();
    ref({
      page_url: "",
      referrer: ""
    });
    const trackPage = async () => {
      return;
    };
    watch(
      () => route.fullPath,
      () => {
        trackPage();
      },
      { immediate: true }
      // also runs on first load
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="main-section" data-v-66846b75>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/partner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66846b75"]]);

export { partner as default };
//# sourceMappingURL=partner-BaxmHCcc.mjs.map
