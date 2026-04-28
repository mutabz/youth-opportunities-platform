import { _ as _export_sfc, k as useRoute, s as __nuxt_component_0, m as useUserStore } from './server.mjs';
import { ref, watch, mergeProps, unref, computed, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DcvE_fL2.mjs';
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

const _sfc_main$1 = {
  __name: "UserNavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const showSidebar = ref(false);
    const userStore = useUserStore();
    const user2 = computed(() => userStore.user);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(_attrs)} data-v-c2a21ce3><div class="adm-nav-lg" data-v-c2a21ce3>`);
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
      _push(`<ul class="adm-nav-links" data-v-c2a21ce3><li data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back to Home`);
          } else {
            return [
              createTextVNode("Back to Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/dashboard"
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
      _push(`</li><li data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/dashboard/opportunities"
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
      _push(`</li><li data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/dashboard/applications"
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
      _push(`</li><li data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/dashboard/resources"
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
      _push(`</li><li data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/dashboard/profile"
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
      _push(`</li></ul><div class="" data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user/dashboard/profile",
        class: "nav-profile"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary img" data-v-c2a21ce3${_scopeId}>${ssrInterpolate(unref(getInitials)(unref(user2).full_name))}</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary img" }, toDisplayString(unref(getInitials)(unref(user2).full_name)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="nav-sm" data-v-c2a21ce3><div class="auth-sect" data-v-c2a21ce3><div class="menu-holder" id="toggle-btn" data-v-c2a21ce3><div class="menu" data-v-c2a21ce3><span class="long" data-v-c2a21ce3></span><span class="short" data-v-c2a21ce3></span></div></div></div><div class="auth-sect" data-v-c2a21ce3><div class="holder" data-v-c2a21ce3>`);
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
      _push(`</div><div class="holder d-flex" data-v-c2a21ce3><div class="" data-v-c2a21ce3>`);
      if (!unref(user2)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "m-2",
          to: "/join-free/LoginPage"
        }, {
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
      if (unref(user2)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "m-2",
          to: "/user/dashboard/profile"
        }, {
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
      _push(`</div><div class="" data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "me-2",
        to: "/"
      }, {
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
      _push(`</div></div></div></div><div class="${ssrRenderClass([{ "open": showSidebar.value }, "n-sidebar"])}" data-v-c2a21ce3><div class="d-flex justify-content-between align-items-center nav-head" data-v-c2a21ce3><div class="fw-bold text-uppercase" data-v-c2a21ce3>Browse here</div><div class="menu-holder" id="toggle-btn" data-v-c2a21ce3><div class="menu" data-v-c2a21ce3> X </div></div></div><hr data-v-c2a21ce3><div class="n-nav-links" data-v-c2a21ce3><div name="nav-s-item" data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/dashboard"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:house" }, null, _parent2, _scopeId));
            _push2(` Dashboard `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:house" }),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item" data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard/opportunities" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:link" }, null, _parent2, _scopeId));
            _push2(` Opportunities `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:link" }),
              createTextVNode(" Opportunities ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><li name="nav-s-item" data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard/applications" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:chalkboard" }, null, _parent2, _scopeId));
            _push2(` Applications `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:chalkboard" }),
              createTextVNode(" Applications ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><div name="nav-s-item" data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard/profile" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:lock" }, null, _parent2, _scopeId));
            _push2(` Profile `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:lock" }),
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div name="nav-s-item" data-v-c2a21ce3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard/resources" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:list" }, null, _parent2, _scopeId));
            _push2(` Resources `);
          } else {
            return [
              createVNode(_component_Icon, { name: "fa6-solid:list" }),
              createTextVNode(" Resources ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserNavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UserNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c2a21ce3"]]);
const _sfc_main = {
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    const { device } = useDeviceType();
    useDataStore();
    const route = useRoute();
    ref({});
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
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["data-section", { "data-section": unref(device) === "desktop", "data-section-mobile": unref(device) === "mobile" }]
      }, _attrs))} data-v-7a820c57>`);
      _push(ssrRenderComponent(UserNavBar, null, null, _parent));
      _push(`<div class="${ssrRenderClass({ "main-section": unref(device) === "desktop" })}" data-v-7a820c57>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a820c57"]]);

export { user as default };
//# sourceMappingURL=user-B7N6xgLF.mjs.map
