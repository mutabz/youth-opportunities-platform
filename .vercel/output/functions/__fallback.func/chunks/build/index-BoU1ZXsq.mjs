import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { t as truncate, f as formatDate } from './utils-C8zi-Gnd.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { u as useDeviceType } from './useDeviceType-BcjKgtk3.mjs';
import { _ as _export_sfc, m as useUserStore } from './server.mjs';
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
    const opportunities = ref([]);
    const user = computed(() => userStore.user);
    ref({});
    const applications = ref([]);
    const savedOpportunities = ref([]);
    const userApplications = computed(() => applications.value);
    const recentApplications = computed(() => {
      return applications.value.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 6);
    });
    const recommendedOpportunities = computed(() => {
      return opportunities.value.filter((o) => o.status === "Open").slice(0, 6);
    });
    const acceptedCount = computed(
      () => applications.value.filter((a) => a.status === "accepted").length
    );
    computed(
      () => applications.value.filter((a) => a.status === "under_review").length
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-dashboard" }, _attrs))} data-v-f5684048><header class="app-header d-flex justify-content-between align-items-center" data-v-f5684048><div class="d-flex" data-v-f5684048><button class="btn me-3" data-v-f5684048>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-f5684048>User Dashboard</h3></div>`);
      if (unref(device) === "desktop") {
        _push(`<div class="d-flex gap-2" data-v-f5684048>`);
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
        _push(`<button class="btn btn-secondary" data-v-f5684048> Refresh </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="row mt-4" data-v-f5684048>`);
      if (unref(device) === "desktop") {
        _push(`<aside class="${ssrRenderClass({ "col-lg-3": unref(device) === "desktop", "sidebar": unref(device) === "desktop", "sticky-top": unref(device) === "desktop" })}" data-v-f5684048><div class="card shadow-sm mb-3" data-v-f5684048><div class="card-body text-center" data-v-f5684048>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "fa6-solid:user",
          size: "40"
        }, null, _parent));
        _push(`<h6 class="mt-2" data-v-f5684048>My Account</h6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/profile",
          class: "btn btn-outline-primary btn-sm w-100 mb-2"
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
        _push(`<button class="btn btn-outline-danger w-100" data-v-f5684048> Logout </button></div></div><div class="card shadow-sm mb-3" data-v-f5684048><div class="card-body" data-v-f5684048><h6 class="fw-bold" data-v-f5684048>Quick Links</h6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/opportunities",
          class: ""
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
          to: "/user/dashboard/applications",
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` My Applications `);
            } else {
              return [
                createTextVNode(" My Applications ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/saved",
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Saved Opportunities `);
            } else {
              return [
                createTextVNode(" Saved Opportunities ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></aside>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="${ssrRenderClass([{ "col-lg-6": unref(device) === "desktop", "sticky-top": unref(device) === "desktop" }, "transparent"])}" data-v-f5684048><section class="row g-3 p-3" data-v-f5684048><div class="col-md-6" data-v-f5684048><div class="card shadow-lg border-0 rounded-4" data-v-f5684048><div class="card-header" data-v-f5684048><h6 class="fw-bold text-danger" data-v-f5684048>Applications</h6></div><div class="card-body d-flex justify-content-between" data-v-f5684048><h3 class="text-success" data-v-f5684048>${ssrInterpolate(userApplications.value.length)}</h3><div class="text-muted" data-v-f5684048>in all</div><h3 class="text-success" data-v-f5684048>${ssrInterpolate(opportunities.value.length)}</h3><div class="text-muted" data-v-f5684048>opportunities</div></div><div class="card-footer" data-v-f5684048>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard/applications" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View and manage all applications`);
          } else {
            return [
              createTextVNode("View and manage all applications")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-6" data-v-f5684048><div class="card shadow-lg border-0 rounded-4" data-v-f5684048><div class="card-header" data-v-f5684048><h6 class="fw-bold text-danger" data-v-f5684048>Accepted Applications</h6></div><div class="card-body d-flex justify-content-between" data-v-f5684048><h3 class="text-success" data-v-f5684048>${ssrInterpolate(acceptedCount.value)}</h3><div class="text-muted" data-v-f5684048>in all</div><h3 class="text-success" data-v-f5684048>${ssrInterpolate(userApplications.value.length)}</h3><div class="text-muted" data-v-f5684048>applications</div></div><div class="card-footer" data-v-f5684048>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard/applications" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View and manage all applications`);
          } else {
            return [
              createTextVNode("View and manage all applications")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-6" data-v-f5684048><div class="card shadow-lg border-0 rounded-4" data-v-f5684048><div class="card-header" data-v-f5684048><h6 class="fw-bold text-danger" data-v-f5684048>Available Opportunities For you</h6></div><div class="card-body d-flex justify-content-between" data-v-f5684048><h3 class="text-success" data-v-f5684048>${ssrInterpolate(opportunities.value.length)}</h3><div class="text-muted" data-v-f5684048>in all</div><h3 class="text-success" data-v-f5684048>${ssrInterpolate(opportunities.value.length)}</h3><div class="text-muted" data-v-f5684048>opportunities</div></div><div class="card-footer" data-v-f5684048>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard/opportunities" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View and apply to any opportunity`);
          } else {
            return [
              createTextVNode("View and apply to any opportunity")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-6" data-v-f5684048><div class="card shadow-lg border-0 rounded-4" data-v-f5684048><div class="card-header" data-v-f5684048><h6 class="fw-bold text-danger" data-v-f5684048>Saved Opportunities</h6></div><div class="card-body d-flex justify-content-between" data-v-f5684048><h3 class="text-success" data-v-f5684048>${ssrInterpolate(savedOpportunities.value.length)}</h3><div class="text-muted" data-v-f5684048>in all</div><h3 class="text-success" data-v-f5684048>${ssrInterpolate(opportunities.value.length)}</h3><div class="text-muted" data-v-f5684048>opportunities</div></div><div class="card-footer" data-v-f5684048>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/dashboard/saved" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View and manage all saved Opportunities`);
          } else {
            return [
              createTextVNode("View and manage all saved Opportunities")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="p-4" data-v-f5684048>`);
      if (unref(device) !== "desktop") {
        _push(`<div class="card shadow-sm mb-3" data-v-f5684048><div class="card-header" data-v-f5684048><h6 class="fw-bold" data-v-f5684048>Quick Links</h6></div><div class="card-body d-flex flex-wrap justify-content-between" data-v-f5684048>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/opportunities",
          class: "w-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "fa6-solid:briefcase",
                class: "me-3"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-f5684048${_scopeId}>Opportunities</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "fa6-solid:briefcase",
                  class: "me-3"
                }),
                createVNode("span", null, "Opportunities")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/resources",
          class: "w-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "fa6-solid:book",
                class: "me-3"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-f5684048${_scopeId}>Resources</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "fa6-solid:book",
                  class: "me-3"
                }),
                createVNode("span", null, "Resources")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/applications",
          class: "w-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "fa6-solid:list",
                class: "me-3"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-f5684048${_scopeId}>Applications</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "fa6-solid:list",
                  class: "me-3"
                }),
                createVNode("span", null, "Applications")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-flex justify-content-between card p-3 align-items-center mb-2" data-v-f5684048><h5 data-v-f5684048>Recommended Opportunities</h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user/dashboard/opportunities",
        class: "btn btn-sm btn-outline-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All `);
          } else {
            return [
              createTextVNode(" View All ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid-2" data-v-f5684048><!--[-->`);
      ssrRenderList(recommendedOpportunities.value, (opp) => {
        _push(`<div class="card shadow-lg h-100 rounded-4" data-v-f5684048><div class="card-header" data-v-f5684048>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/opportunities/" + opp.category + "-data/" + opp.id,
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
        _push(`</div><div class="card-body" data-v-f5684048><div class="small text-muted" data-v-f5684048>${ssrInterpolate(("truncate" in _ctx ? _ctx.truncate : unref(truncate))(opp.description[0] || "", 100))}</div><div class="d-flex align-items-center justify-content-between mt-3 mb-0" data-v-f5684048><div class="bg-primary badge" data-v-f5684048>${ssrInterpolate(opp.category || "Opportunity")}</div><div class="text-danger small" data-v-f5684048><strong class="me-3" data-v-f5684048>Deadline: </strong>${ssrInterpolate(opp.details.application.deadline)}</div></div></div><div class="card-footer" data-v-f5684048><span class="deadline" data-v-f5684048>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:location-pin" }, null, _parent));
        _push(` ${ssrInterpolate(("truncate" in _ctx ? _ctx.truncate : unref(truncate))(opp.host_country, 10))}, ${ssrInterpolate(("truncate" in _ctx ? _ctx.truncate : unref(truncate))(opp.location.city, 10))}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/opportunities/" + opp.category + "-data/" + opp.id,
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
      if (!recommendedOpportunities.value.length) {
        _push(`<div class="card shadow-lg border rounded-4 mt-2" data-v-f5684048><div class="card-body text-center" data-v-f5684048> No opportunities available </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-flex mt-4 mb-2 justify-content-between card p-3 align-items-center mb-2" data-v-f5684048><h5 data-v-f5684048>Recent Applications</h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/applications",
        class: "btn btn-sm btn-outline-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All `);
          } else {
            return [
              createTextVNode(" View All ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><section class="grid-3" data-v-f5684048><!--[-->`);
      ssrRenderList(recentApplications.value, (app) => {
        _push(`<div data-v-f5684048><div class="card shadow-lg h-100 rounded-4" data-v-f5684048><div class="card-header" data-v-f5684048>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/opportunities/" + app.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="small" data-v-f5684048${_scopeId}>${ssrInterpolate(app.full_name)}</div>`);
            } else {
              return [
                createVNode("div", { class: "small" }, toDisplayString(app.full_name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="card-body" data-v-f5684048><div class="d-flex justify-content-between" data-v-f5684048><div class="small" data-v-f5684048>${ssrInterpolate(app.email)}</div><div class="small" data-v-f5684048><span class="badge bg-success" data-v-f5684048>${ssrInterpolate(app.status)}</span></div></div><div class="d-flex justify-content-between" data-v-f5684048><div class="small text-muted" data-v-f5684048>${ssrInterpolate(unref(formatDate)(app.submitted_at))}</div><div class="small text-muted" data-v-f5684048>${ssrInterpolate(unref(formatDate)(app.submitted_at))}</div></div></div></div></div>`);
      });
      _push(`<!--]--></section>`);
      if (!recentApplications.value.length) {
        _push(`<div class="card shadow-lg border rounded-4 mt-2" data-v-f5684048><div class="card-body text-center" data-v-f5684048> No Applications available </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></section><aside class="${ssrRenderClass([{ "col-lg-3": unref(device) === "desktop", "sidebar": unref(device) === "desktop", "sticky-top": unref(device) === "desktop" }, "p-4"])}" data-v-f5684048><div class="card shadow-sm mb-3" data-v-f5684048><div class="card-body" data-v-f5684048><h6 class="fw-bold" data-v-f5684048>Saved Opportunities</h6><p class="text-muted small" data-v-f5684048> You have ${ssrInterpolate(savedOpportunities.value.length)} saved opportunities. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user/dashboard/saved",
        class: "btn btn-sm btn-outline-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Saved `);
          } else {
            return [
              createTextVNode(" View Saved ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card shadow-sm mb-3" data-v-f5684048><div class="card-body" data-v-f5684048><h6 class="fw-bold" data-v-f5684048>Upcoming Deadlines</h6><ul class="small" data-v-f5684048><!--[-->`);
      ssrRenderList(recommendedOpportunities.value.slice(0, 3), (opp) => {
        _push(`<li data-v-f5684048>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/opportunities/" + opp.category + "-data/" + opp.id
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
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="card shadow-sm" data-v-f5684048><div class="card-body" data-v-f5684048><h6 class="fw-bold" data-v-f5684048>Tips</h6><p class="small text-muted" data-v-f5684048> Complete your profile to increase your chance of being selected. </p></div></div></aside></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5684048"]]);

export { index as default };
//# sourceMappingURL=index-BoU1ZXsq.mjs.map
