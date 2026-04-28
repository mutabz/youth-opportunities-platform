import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { computed, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _export_sfc, m as useUserStore } from './server.mjs';
import { g as getInitials } from './utils-C8zi-Gnd.mjs';
import { u as useDeviceType } from './useDeviceType-BcjKgtk3.mjs';
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
    useDataStore();
    const userStore = useUserStore();
    const user = computed(() => userStore.user);
    const editUser = ref({});
    const loading = ref(false);
    ref(null);
    const contacts = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-dashboard container-fluid" }, _attrs))} data-v-5247ec62><header class="app-header d-flex justify-content-between align-items-center" data-v-5247ec62><div class="d-flex" data-v-5247ec62><button class="btn me-3" data-v-5247ec62>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-left" }, null, _parent));
      _push(`</button><h3 data-v-5247ec62>Edit My Profile</h3></div>`);
      if (unref(device) === "desktop") {
        _push(`<div class="d-flex gap-2" data-v-5247ec62>`);
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
        _push(`<button class="btn btn-secondary" data-v-5247ec62> Refresh </button><button class="btn btn-primary" data-v-5247ec62>`);
        if (loading.value) {
          _push(`<span class="spinner-border spinner-border-sm" data-v-5247ec62></span>`);
        } else {
          _push(`<span data-v-5247ec62>Save</span>`);
        }
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="row mt-2" data-v-5247ec62>`);
      if (unref(device) === "desktop") {
        _push(`<aside class="${ssrRenderClass([{ "sidebar": unref(device) === "desktop", "sticky-top": unref(device) === "desktop" }, "col-lg-3"])}" data-v-5247ec62><div class="card shadow-sm text-center mb-3" data-v-5247ec62><div class="card-body" data-v-5247ec62><div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style="${ssrRenderStyle({ "width": "80px", "height": "80px", "font-size": "24px" })}" data-v-5247ec62>${ssrInterpolate(unref(getInitials)((_a = user.value) == null ? void 0 : _a.full_name))}</div><h5 class="fw-bold" data-v-5247ec62>${ssrInterpolate((_b = user.value) == null ? void 0 : _b.full_name)}</h5><p class="text-muted" data-v-5247ec62>${ssrInterpolate((_c = user.value) == null ? void 0 : _c.email)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-primary btn-sm w-100 mb-2",
          to: "/user/dashboard/profile"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Back to Profile `);
            } else {
              return [
                createTextVNode(" Back to Profile ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-outline-primary btn-sm w-100",
          to: "/user/dashboard/profile/job-seeker"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Job Seeker Profile `);
            } else {
              return [
                createTextVNode(" Job Seeker Profile ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></aside>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="col-lg-6" data-v-5247ec62><div class="card shadow-sm mb-3 text-center" data-v-5247ec62><div class="card-body" data-v-5247ec62><div class="avatar-circle mb-2" data-v-5247ec62>${ssrInterpolate(unref(getInitials)(editUser.value.full_name))}</div><h5 data-v-5247ec62>${ssrInterpolate(editUser.value.full_name)}</h5><small class="text-muted" data-v-5247ec62>${ssrInterpolate(editUser.value.email)}</small></div></div><div class="card shadow-sm mb-3" data-v-5247ec62><div class="card-header fw-bold" data-v-5247ec62>Basic Information</div><div class="card-body" data-v-5247ec62><div class="mb-3" data-v-5247ec62><label class="form-label" data-v-5247ec62>Full Name</label><input type="text" class="form-control"${ssrRenderAttr("value", editUser.value.full_name)} data-v-5247ec62></div><div class="mb-3" data-v-5247ec62><label class="form-label" data-v-5247ec62>Email</label><input type="email" class="form-control"${ssrRenderAttr("value", editUser.value.email)} disabled data-v-5247ec62><small class="text-muted" data-v-5247ec62> Contact support to change email `);
      if (contacts.value.email) {
        _push(`<a${ssrRenderAttr("href", "mailto:" + contacts.value.email)} data-v-5247ec62>here</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</small></div></div></div><div class="card shadow-sm mb-3" data-v-5247ec62><div class="card-header fw-bold" data-v-5247ec62>Contact Information</div><div class="card-body" data-v-5247ec62><div class="mb-3" data-v-5247ec62><label class="form-label" data-v-5247ec62>Phone Number</label><input type="tel" class="form-control"${ssrRenderAttr("value", editUser.value.phone_number)} data-v-5247ec62></div><div class="mb-3" data-v-5247ec62><label class="form-label" data-v-5247ec62>Location</label><input type="text" class="form-control"${ssrRenderAttr("value", editUser.value.location)} data-v-5247ec62></div></div></div><div class="card shadow-sm mb-3" data-v-5247ec62><div class="card-header fw-bold" data-v-5247ec62>Personal Details</div><div class="card-body" data-v-5247ec62><div class="row" data-v-5247ec62><div class="col-md-6 mb-3" data-v-5247ec62><label class="form-label" data-v-5247ec62>Gender</label><select class="form-select" data-v-5247ec62><option disabled value="" data-v-5247ec62${ssrIncludeBooleanAttr(Array.isArray(editUser.value.gender) ? ssrLooseContain(editUser.value.gender, "") : ssrLooseEqual(editUser.value.gender, "")) ? " selected" : ""}>Select</option><option data-v-5247ec62${ssrIncludeBooleanAttr(Array.isArray(editUser.value.gender) ? ssrLooseContain(editUser.value.gender, null) : ssrLooseEqual(editUser.value.gender, null)) ? " selected" : ""}>Male</option><option data-v-5247ec62${ssrIncludeBooleanAttr(Array.isArray(editUser.value.gender) ? ssrLooseContain(editUser.value.gender, null) : ssrLooseEqual(editUser.value.gender, null)) ? " selected" : ""}>Female</option><option data-v-5247ec62${ssrIncludeBooleanAttr(Array.isArray(editUser.value.gender) ? ssrLooseContain(editUser.value.gender, null) : ssrLooseEqual(editUser.value.gender, null)) ? " selected" : ""}>Other</option></select></div><div class="col-md-6 mb-3" data-v-5247ec62><label class="form-label" data-v-5247ec62>Education</label><select class="form-select" data-v-5247ec62><option disabled value="" data-v-5247ec62${ssrIncludeBooleanAttr(Array.isArray(editUser.value.education_level) ? ssrLooseContain(editUser.value.education_level, "") : ssrLooseEqual(editUser.value.education_level, "")) ? " selected" : ""}>Select</option><option data-v-5247ec62${ssrIncludeBooleanAttr(Array.isArray(editUser.value.education_level) ? ssrLooseContain(editUser.value.education_level, null) : ssrLooseEqual(editUser.value.education_level, null)) ? " selected" : ""}>High School</option><option data-v-5247ec62${ssrIncludeBooleanAttr(Array.isArray(editUser.value.education_level) ? ssrLooseContain(editUser.value.education_level, null) : ssrLooseEqual(editUser.value.education_level, null)) ? " selected" : ""}>Bachelor&#39;s</option><option data-v-5247ec62${ssrIncludeBooleanAttr(Array.isArray(editUser.value.education_level) ? ssrLooseContain(editUser.value.education_level, null) : ssrLooseEqual(editUser.value.education_level, null)) ? " selected" : ""}>Master&#39;s</option><option data-v-5247ec62${ssrIncludeBooleanAttr(Array.isArray(editUser.value.education_level) ? ssrLooseContain(editUser.value.education_level, null) : ssrLooseEqual(editUser.value.education_level, null)) ? " selected" : ""}>PhD</option></select></div></div><div class="mb-3" data-v-5247ec62><label class="form-label" data-v-5247ec62>Bio</label><textarea rows="4" class="form-control" data-v-5247ec62>${ssrInterpolate(editUser.value.bio)}</textarea></div></div></div><div class="card shadow-sm mb-3" data-v-5247ec62><div class="card-header fw-bold" data-v-5247ec62>Resume</div><div class="card-body" data-v-5247ec62><label class="form-label" data-v-5247ec62>Upload Resume (PDF)</label><input type="file" class="form-control" accept=".pdf" data-v-5247ec62></div></div><div class="mt-3 mb-5" data-v-5247ec62><button class="btn btn-primary w-100 btn-lg"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-5247ec62>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm" data-v-5247ec62></span>`);
      } else {
        _push(`<span data-v-5247ec62>Save Profile</span>`);
      }
      _push(`</button></div></section><section class="${ssrRenderClass([{ "sidebar": unref(device) === "desktop", "sticky-top": unref(device) === "desktop" }, "col-lg-3"])}" data-v-5247ec62><div class="card shadow-sm" data-v-5247ec62><div class="card-body" data-v-5247ec62><h6 class="fw-bold mb-3" data-v-5247ec62>Quick Actions</h6>`);
      if (user.value.role.toLowerCase() === "partner") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/prt",
          class: "btn btn-outline-primary w-100 mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Partner Dashboard `);
            } else {
              return [
                createTextVNode(" Partner Dashboard ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (user.value.role.toLowerCase() === "admin") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod",
          class: "btn btn-outline-primary w-100 mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Admin Dashboard `);
            } else {
              return [
                createTextVNode(" Admin Dashboard ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user/dashboard",
        class: "btn btn-outline-primary w-100 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` User Dashboard `);
          } else {
            return [
              createTextVNode(" User Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="btn btn-outline-danger w-100" data-v-5247ec62> Logout </button></div></div></section></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/dashboard/profile/edit/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5247ec62"]]);

export { index as default };
//# sourceMappingURL=index-BOAOxG14.mjs.map
