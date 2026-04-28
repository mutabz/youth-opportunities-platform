import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { computed, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRouter$1, m as useUserStore } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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
    useRouter$1();
    const userStore = useUserStore();
    useDataStore();
    const user = computed(() => userStore.user);
    const jobSeeker = computed(() => {
      var _a, _b;
      return (_b = (_a = user.value) == null ? void 0 : _a.Job_profile) != null ? _b : null;
    });
    const organizations = ref([]);
    const communities = ref([]);
    ref({});
    const jsonSections = [
      { key: "education", label: "Education" },
      { key: "experience", label: "Experience" },
      { key: "trainings", label: "Trainings" },
      { key: "languages", label: "Languages" },
      { key: "projects", label: "Projects" }
    ];
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-dashboard container-fluid" }, _attrs))} data-v-8cedab2f><header class="app-header d-flex justify-content-between align-items-center" data-v-8cedab2f><div class="d-flex" data-v-8cedab2f><button class="btn me-3" data-v-8cedab2f>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-8cedab2f>My Profile</h3></div>`);
      if (unref(device) === "desktop") {
        _push(`<div class="d-flex gap-2" data-v-8cedab2f>`);
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
        _push(`<button class="btn btn-secondary" data-v-8cedab2f> Refresh </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="row mt-2" data-v-8cedab2f><aside class="${ssrRenderClass([{ "sidebar": unref(device) === "desktop", "sticky-top": unref(device) === "desktop" }, "col-lg-3"])}" data-v-8cedab2f><div class="card shadow-sm text-center mb-1" data-v-8cedab2f><div class="card-body" data-v-8cedab2f><div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style="${ssrRenderStyle({ "width": "80px", "height": "80px", "font-size": "24px" })}" data-v-8cedab2f>${ssrInterpolate(unref(getInitials)((_a = user.value) == null ? void 0 : _a.full_name))}</div><h5 class="fw-bold" data-v-8cedab2f>${ssrInterpolate((_b = user.value) == null ? void 0 : _b.full_name)}</h5><p class="text-muted" data-v-8cedab2f>${ssrInterpolate((_c = user.value) == null ? void 0 : _c.email)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn btn-secondary text-white btn-sm w-100 mb-2",
        to: "/user/dashboard/profile/edit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Edit Profile `);
          } else {
            return [
              createTextVNode(" Edit Profile ")
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
      _push(`</div></div>`);
      if (unref(device) !== "desktop") {
        _push(`<div class="card shadow-sm mb-3" data-v-8cedab2f><div class="card-body" data-v-8cedab2f><h6 class="fw-bold mb-3" data-v-8cedab2f>Quick Actions</h6>`);
        if (user.value.role === "partner") {
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
        if (user.value.role === "admin") {
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
        _push(`<button class="btn btn-outline-danger w-100" data-v-8cedab2f> Logout </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(device) === "desktop") {
        _push(`<div class="card shadow-sm mb-3" data-v-8cedab2f><div class="card-body" data-v-8cedab2f><h6 class="fw-bold" data-v-8cedab2f>Communities</h6>`);
        if (!communities.value.length) {
          _push(`<div class="text-muted" data-v-8cedab2f> No communities </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(communities.value.slice(0, 5), (community) => {
          _push(`<div class="mb-2" data-v-8cedab2f><strong data-v-8cedab2f>${ssrInterpolate(community.name)}</strong><small class="text-muted d-block" data-v-8cedab2f>${ssrInterpolate(community.members_count)} members </small></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</aside><section class="col-lg-6" data-v-8cedab2f><div class="card shadow-sm mb-3" data-v-8cedab2f><div class="card-header fw-bold" data-v-8cedab2f>Job Seeker Profile</div>`);
      if (jobSeeker.value) {
        _push(`<div class="card-body" data-v-8cedab2f><div class="mb-2" data-v-8cedab2f><strong data-v-8cedab2f>National ID:</strong> ${ssrInterpolate(jobSeeker.value.national_id)}</div><div class="mb-2" data-v-8cedab2f><strong data-v-8cedab2f>Phone:</strong> ${ssrInterpolate(jobSeeker.value.phone)}</div><div class="mb-2" data-v-8cedab2f><strong data-v-8cedab2f>Province:</strong> ${ssrInterpolate(jobSeeker.value.province)}</div><div class="mb-2" data-v-8cedab2f><strong data-v-8cedab2f>District:</strong> ${ssrInterpolate(jobSeeker.value.district)}</div><div class="mb-3" data-v-8cedab2f><strong data-v-8cedab2f>Summary</strong><p data-v-8cedab2f>${ssrInterpolate(jobSeeker.value.summary)}</p></div><div data-v-8cedab2f><strong data-v-8cedab2f>Skills</strong><div class="mt-1" data-v-8cedab2f><!--[-->`);
        ssrRenderList(jobSeeker.value.skills, (skill) => {
          _push(`<span class="badge bg-primary me-1" data-v-8cedab2f>${ssrInterpolate(skill)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--[-->`);
      ssrRenderList(jsonSections, (section) => {
        var _a2, _b2;
        _push(`<div class="card shadow-sm mb-3" data-v-8cedab2f><div class="card-header fw-bold" data-v-8cedab2f>${ssrInterpolate(section.label)}</div><div class="card-body" data-v-8cedab2f>`);
        if ((_b2 = (_a2 = jobSeeker.value) == null ? void 0 : _a2[section.key]) == null ? void 0 : _b2.length) {
          _push(`<div data-v-8cedab2f><!--[-->`);
          ssrRenderList(jobSeeker.value[section.key], (item, index2) => {
            _push(`<div class="card mb-2" data-v-8cedab2f><div class="card-body" data-v-8cedab2f><h6 class="fw-bold" data-v-8cedab2f>${ssrInterpolate(item.title)}</h6><p class="text-muted" data-v-8cedab2f>${ssrInterpolate(item.content)}</p></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="text-muted" data-v-8cedab2f> No data </div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></section><section class="${ssrRenderClass([{ "sidebar": unref(device) === "desktop", "sticky-top": unref(device) === "desktop" }, "col-lg-3 mb-5"])}" data-v-8cedab2f>`);
      if (unref(device) === "desktop") {
        _push(`<div class="card shadow-sm mb-3" data-v-8cedab2f><div class="card-body" data-v-8cedab2f><h6 class="fw-bold mb-3" data-v-8cedab2f>Quick Actions</h6>`);
        if (user.value.role === "partner") {
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
        if (user.value.role === "admin") {
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
        _push(`<button class="btn btn-outline-danger w-100" data-v-8cedab2f> Logout </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_d = user.value) == null ? void 0 : _d.stats) {
        _push(`<div class="card shadow-sm mb-3" data-v-8cedab2f><div class="card-body" data-v-8cedab2f><h6 class="fw-bold mb-3" data-v-8cedab2f>Statistics</h6><!--[-->`);
        ssrRenderList(user.value.stats, (stat) => {
          _push(`<div class="d-flex justify-content-between small mb-1" data-v-8cedab2f><span data-v-8cedab2f>${ssrInterpolate(stat.name)}</span><strong data-v-8cedab2f>${ssrInterpolate(stat.value)}</strong></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="card shadow-sm" data-v-8cedab2f><div class="card-body" data-v-8cedab2f><h6 class="fw-bold" data-v-8cedab2f>Organizations</h6>`);
      if (!organizations.value.length) {
        _push(`<div class="text-muted" data-v-8cedab2f> No organizations </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(organizations.value.slice(0, 5), (org) => {
        _push(`<div class="mb-2" data-v-8cedab2f><strong data-v-8cedab2f>${ssrInterpolate(org.name)}</strong><small class="text-muted d-block" data-v-8cedab2f>${ssrInterpolate(org.category)}</small></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(device) !== "desktop") {
        _push(`<div class="card shadow-sm mb-3" data-v-8cedab2f><div class="card-body" data-v-8cedab2f><h6 class="fw-bold" data-v-8cedab2f>Communities</h6>`);
        if (!communities.value.length) {
          _push(`<div class="text-muted" data-v-8cedab2f> No communities </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(communities.value.slice(0, 5), (community) => {
          _push(`<div class="mb-2" data-v-8cedab2f><strong data-v-8cedab2f>${ssrInterpolate(community.name)}</strong><small class="text-muted d-block" data-v-8cedab2f>${ssrInterpolate(community.members_count)} members </small></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/dashboard/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8cedab2f"]]);

export { index as default };
//# sourceMappingURL=index-CHnWS-j1.mjs.map
