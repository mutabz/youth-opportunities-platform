import { _ as _export_sfc, k as useRoute, s as __nuxt_component_0, m as useUserStore } from './server.mjs';
import { ref, watch, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "AdminNavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const user = computed(() => userStore.user);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(_attrs)} data-v-eb6c0a3c><div class="adm-nav-lg" data-v-eb6c0a3c>`);
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
      _push(`<ul class="adm-nav-links d-flex flex-wrap gap-2" data-v-eb6c0a3c><li data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link btn-outline-primary btn btn-sm p-2",
        to: "/adm/mod"
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
      _push(`</li><li data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link btn-outline-primary btn btn-sm p-2",
        to: "/adm/mod/opportunities"
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
      _push(`</li><li data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link btn-outline-primary btn btn-sm p-2",
        to: "/adm/mod/applications"
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
      _push(`</li><li data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link btn-outline-primary btn btn-sm p-2",
        to: "/adm/mod/users"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Users`);
          } else {
            return [
              createTextVNode("Users")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link btn-outline-primary btn btn-sm p-2",
        to: "/adm/mod/partners"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Partners`);
          } else {
            return [
              createTextVNode("Partners")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link btn-outline-primary btn btn-sm p-2",
        to: "/adm/mod/resources"
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
      _push(`</li><li data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link btn-outline-primary btn btn-sm p-2",
        to: "/adm/mod/organizations"
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
      _push(`</li><li data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link btn-outline-primary btn btn-sm p-2",
        to: "/adm/mod/mentors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mentors`);
          } else {
            return [
              createTextVNode("Mentors")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link btn-outline-primary btn btn-sm p-2",
        to: "/user/dashboard"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`User Dashboard`);
          } else {
            return [
              createTextVNode("User Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="" data-v-eb6c0a3c>`);
      if (!unref(user)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-primary btn-lg rounded-5",
          to: "/join-free"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="px-3" data-v-eb6c0a3c${_scopeId}>Join Free `);
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
              _push2(`<div class="bg-primary img" data-v-eb6c0a3c${_scopeId}>${ssrInterpolate(unref(getInitials)(unref(user).full_name))}</div>`);
            } else {
              return [
                createVNode("div", { class: "bg-primary img" }, toDisplayString(unref(getInitials)(unref(user).full_name)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div><div class="nav-sm" data-v-eb6c0a3c><div class="auth-sect" data-v-eb6c0a3c><div class="menu-holder" id="toggle-btn" data-v-eb6c0a3c><div class="menu" data-v-eb6c0a3c><span class="long" data-v-eb6c0a3c></span><span class="short" data-v-eb6c0a3c></span></div></div><div class="holder d-flex" data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:plus" }, null, _parent));
      _push(`Membership </div></div><div class="auth-sect" data-v-eb6c0a3c><div class="holder" data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:bell" }, null, _parent));
      _push(`</div><div class="holder d-flex" data-v-eb6c0a3c><div class="" data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:user-plus" }, null, _parent));
      _push(`</div><div class="" data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:envelope" }, null, _parent));
      _push(`</div></div></div></div><div class="bottom-nav-sm" data-v-eb6c0a3c><div class="auth-sect" data-v-eb6c0a3c><div class="menu-holder" data-v-eb6c0a3c><div class="menu" data-v-eb6c0a3c><span class="long" data-v-eb6c0a3c></span><span class="short" data-v-eb6c0a3c></span></div></div><div class="holder d-flex" data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:plus" }, null, _parent));
      _push(` Membership </div></div><div class="auth-sect" data-v-eb6c0a3c><div class="holder" data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:bell" }, null, _parent));
      _push(`</div><div class="holder d-flex" data-v-eb6c0a3c><div class="" data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:user-plus" }, null, _parent));
      _push(`</div><div class="" data-v-eb6c0a3c>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:envelope" }, null, _parent));
      _push(`</div></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminNavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdminNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-eb6c0a3c"]]);
const model = "opportunities";
const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const dataStore = useDataStore();
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
    computed(() => dataStore.items[model]);
    computed(() => dataStore.loading[model]);
    computed(() => dataStore.error[model]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "data-section" }, _attrs))} data-v-6aa24d0a>`);
      _push(ssrRenderComponent(AdminNavBar, null, null, _parent));
      _push(`<div class="main-section" data-v-6aa24d0a>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6aa24d0a"]]);

export { admin as default };
//# sourceMappingURL=admin-Cf4waEY9.mjs.map
