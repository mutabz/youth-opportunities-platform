import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { g as getInitials } from './utils-C8zi-Gnd.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, f as useRouter, m as useUserStore } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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
    useRouter();
    useDataStore();
    const userStore = useUserStore();
    const loading = ref(false);
    const user = computed(() => userStore.user);
    computed(() => user.value.Job_profile || {});
    const form = ref({
      user_id: user.value.user_id,
      full_name: "",
      national_id: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
      marital_status: "",
      province: "",
      district: "",
      sector: "",
      cell: "",
      village: "",
      disability: "",
      profile_photo: "",
      summary: "",
      job_preferences: {},
      skills: [],
      education: [],
      experience: [],
      trainings: [],
      languages: [],
      projects: [],
      documents: {
        cv_url: "",
        certificate_urls: []
      }
    });
    const jsonSections = [
      { key: "education", label: "Education" },
      { key: "experience", label: "Experience" },
      { key: "trainings", label: "Trainings" },
      { key: "languages", label: "Languages" },
      { key: "projects", label: "Projects" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-dashboard container-fluid" }, _attrs))} data-v-fc373e2f><header class="app-header d-flex justify-content-between align-items-center" data-v-fc373e2f><div class="d-flex" data-v-fc373e2f><button class="btn me-3" data-v-fc373e2f>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-left" }, null, _parent));
      _push(`</button><h3 data-v-fc373e2f>Edit Job Seeker Profile</h3></div>`);
      if (unref(device) === "desktop") {
        _push(`<div class="d-flex gap-2" data-v-fc373e2f>`);
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
        _push(`<button class="btn btn-secondary" data-v-fc373e2f> Refresh </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="row mt-2" data-v-fc373e2f><aside class="${ssrRenderClass([{ "sidebar": unref(device) === "desktop", "sticky-top": unref(device) === "desktop" }, "col-lg-3"])}" data-v-fc373e2f><div class="card shadow-sm text-center mb-3" data-v-fc373e2f><div class="card-body" data-v-fc373e2f><div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style="${ssrRenderStyle({ "width": "80px", "height": "80px", "font-size": "24px" })}" data-v-fc373e2f>${ssrInterpolate(("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a = user.value) == null ? void 0 : _a.full_name))}</div><h5 class="fw-bold" data-v-fc373e2f>${ssrInterpolate((_b = user.value) == null ? void 0 : _b.full_name)}</h5><p class="text-muted" data-v-fc373e2f>${ssrInterpolate((_c = user.value) == null ? void 0 : _c.email)}</p>`);
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
      _push(`</div></div></aside><section class="col-lg-6" data-v-fc373e2f><div class="card shadow-sm mb-3" data-v-fc373e2f><div class="card-header fw-bold" data-v-fc373e2f>Personal Information</div><div class="card-body" data-v-fc373e2f><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Full Name</label><input class="form-control"${ssrRenderAttr("value", form.value.full_name)} data-v-fc373e2f></div><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>National ID</label><input class="form-control" maxlength="16"${ssrRenderAttr("value", form.value.national_id)} data-v-fc373e2f></div><div class="row" data-v-fc373e2f><div class="col-md-6 mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Date of Birth</label><input type="date" class="form-control"${ssrRenderAttr("value", form.value.dob)} data-v-fc373e2f></div><div class="col-md-6 mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Gender</label><select class="form-select" data-v-fc373e2f><option value="" data-v-fc373e2f${ssrIncludeBooleanAttr(Array.isArray(form.value.gender) ? ssrLooseContain(form.value.gender, "") : ssrLooseEqual(form.value.gender, "")) ? " selected" : ""}>Select</option><option data-v-fc373e2f${ssrIncludeBooleanAttr(Array.isArray(form.value.gender) ? ssrLooseContain(form.value.gender, null) : ssrLooseEqual(form.value.gender, null)) ? " selected" : ""}>Male</option><option data-v-fc373e2f${ssrIncludeBooleanAttr(Array.isArray(form.value.gender) ? ssrLooseContain(form.value.gender, null) : ssrLooseEqual(form.value.gender, null)) ? " selected" : ""}>Female</option><option data-v-fc373e2f${ssrIncludeBooleanAttr(Array.isArray(form.value.gender) ? ssrLooseContain(form.value.gender, null) : ssrLooseEqual(form.value.gender, null)) ? " selected" : ""}>Other</option></select></div></div><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Phone</label><input class="form-control"${ssrRenderAttr("value", form.value.phone)} data-v-fc373e2f></div><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Marital Status</label><select class="form-select" data-v-fc373e2f><option value="" data-v-fc373e2f${ssrIncludeBooleanAttr(Array.isArray(form.value.marital_status) ? ssrLooseContain(form.value.marital_status, "") : ssrLooseEqual(form.value.marital_status, "")) ? " selected" : ""}>Select</option><option data-v-fc373e2f${ssrIncludeBooleanAttr(Array.isArray(form.value.marital_status) ? ssrLooseContain(form.value.marital_status, null) : ssrLooseEqual(form.value.marital_status, null)) ? " selected" : ""}>Single</option><option data-v-fc373e2f${ssrIncludeBooleanAttr(Array.isArray(form.value.marital_status) ? ssrLooseContain(form.value.marital_status, null) : ssrLooseEqual(form.value.marital_status, null)) ? " selected" : ""}>Married</option><option data-v-fc373e2f${ssrIncludeBooleanAttr(Array.isArray(form.value.marital_status) ? ssrLooseContain(form.value.marital_status, null) : ssrLooseEqual(form.value.marital_status, null)) ? " selected" : ""}>Divorced</option></select></div><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Disability</label><input class="form-control"${ssrRenderAttr("value", form.value.disability)} data-v-fc373e2f></div></div></div><div class="card shadow-sm mb-3" data-v-fc373e2f><div class="card-header fw-bold" data-v-fc373e2f>Location</div><div class="card-body" data-v-fc373e2f><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Province</label><input class="form-control"${ssrRenderAttr("value", form.value.province)} data-v-fc373e2f></div><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>District</label><input class="form-control"${ssrRenderAttr("value", form.value.district)} data-v-fc373e2f></div><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Sector</label><input class="form-control"${ssrRenderAttr("value", form.value.sector)} data-v-fc373e2f></div><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Cell</label><input class="form-control"${ssrRenderAttr("value", form.value.cell)} data-v-fc373e2f></div><div class="mb-3" data-v-fc373e2f><label class="form-label" data-v-fc373e2f>Village</label><input class="form-control"${ssrRenderAttr("value", form.value.village)} data-v-fc373e2f></div></div></div><div class="card shadow-sm mb-3" data-v-fc373e2f><div class="card-header fw-bold" data-v-fc373e2f>Professional Summary</div><div class="card-body" data-v-fc373e2f><textarea class="form-control" rows="4" data-v-fc373e2f>${ssrInterpolate(form.value.summary)}</textarea></div></div><div class="card shadow-sm mb-3" data-v-fc373e2f><div class="card-header fw-bold" data-v-fc373e2f>Skills</div><div class="card-body" data-v-fc373e2f><!--[-->`);
      ssrRenderList(form.value.skills, (skill, i) => {
        _push(`<div class="d-flex mb-2" data-v-fc373e2f><input class="form-control me-2"${ssrRenderAttr("value", form.value.skills[i])} placeholder="Skill" data-v-fc373e2f><button class="btn btn-danger btn-sm" data-v-fc373e2f>\u2715</button></div>`);
      });
      _push(`<!--]--><button class="btn btn-outline-primary btn-sm" data-v-fc373e2f>+ Add Skill</button></div></div><!--[-->`);
      ssrRenderList(jsonSections, (section) => {
        _push(`<div class="card shadow-sm mb-3" data-v-fc373e2f><div class="card-header fw-bold" data-v-fc373e2f>${ssrInterpolate(section.label)}</div><div class="card-body" data-v-fc373e2f><!--[-->`);
        ssrRenderList(form.value[section.key], (item, i) => {
          _push(`<div class="mb-3" data-v-fc373e2f><input class="form-control mb-1"${ssrRenderAttr("value", item.title)} placeholder="Title" data-v-fc373e2f><textarea class="form-control" rows="3" placeholder="Description" data-v-fc373e2f>${ssrInterpolate(item.content)}</textarea><button class="btn btn-danger btn-sm mt-1" data-v-fc373e2f>Remove</button></div>`);
        });
        _push(`<!--]--><button class="btn btn-outline-primary btn-sm" data-v-fc373e2f> + Add ${ssrInterpolate(section.label)}</button></div></div>`);
      });
      _push(`<!--]--><div class="card shadow-sm mb-3" data-v-fc373e2f><div class="card-header fw-bold" data-v-fc373e2f>Job Preferences</div><div class="card-body" data-v-fc373e2f><input class="form-control mb-2"${ssrRenderAttr("value", form.value.job_preferences.title)} placeholder="Preferred Job Title" data-v-fc373e2f><input class="form-control mb-2"${ssrRenderAttr("value", form.value.job_preferences.location)} placeholder="Preferred Location" data-v-fc373e2f><input class="form-control"${ssrRenderAttr("value", form.value.job_preferences.type)} placeholder="Job Type" data-v-fc373e2f></div></div><div class="card shadow-sm mb-3" data-v-fc373e2f><div class="card-header fw-bold" data-v-fc373e2f>Documents</div><div class="card-body" data-v-fc373e2f><input class="form-control mb-2"${ssrRenderAttr("value", form.value.documents.cv_url)} placeholder="CV URL" data-v-fc373e2f><!--[-->`);
      ssrRenderList(form.value.documents.certificate_urls, (url, i) => {
        _push(`<div class="d-flex mb-2" data-v-fc373e2f><input class="form-control me-2"${ssrRenderAttr("value", form.value.documents.certificate_urls[i])} placeholder="Certificate URL" data-v-fc373e2f><button class="btn btn-danger btn-sm" data-v-fc373e2f>\u2715</button></div>`);
      });
      _push(`<!--]--><button class="btn btn-outline-primary btn-sm" data-v-fc373e2f>+ Add Certificate</button></div></div><div class="mt-3 mb-5" data-v-fc373e2f><button class="btn btn-primary w-100 btn-lg"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-fc373e2f>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm" data-v-fc373e2f></span>`);
      } else {
        _push(`<span data-v-fc373e2f>Save Profile</span>`);
      }
      _push(`</button></div></section><section class="col-lg-3 sidebar sticky-top" data-v-fc373e2f><div class="card shadow-sm" data-v-fc373e2f><div class="card-body" data-v-fc373e2f><h6 class="fw-bold mb-3" data-v-fc373e2f>Quick Actions</h6>`);
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
      _push(`<button class="btn btn-outline-danger w-100" data-v-fc373e2f> Logout </button></div></div></section></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/dashboard/profile/job-seeker/update/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc373e2f"]]);

export { index as default };
//# sourceMappingURL=index-CBMfVNbu.mjs.map
