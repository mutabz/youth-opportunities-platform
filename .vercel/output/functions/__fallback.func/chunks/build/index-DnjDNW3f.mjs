import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { O as OpportunityDisplay } from './OpportunityDisplay-7x-eoCBj.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './OpportunitiesAnalytic-BUkv_jcB.mjs';
import { _ as _sfc_main$1 } from './UsersAnalytic-DnD3nU7i.mjs';
import { u as useDeviceType } from './useDeviceType-BcjKgtk3.mjs';
import { _ as _export_sfc } from './server.mjs';
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
    const opportunities = ref([]);
    const users = ref([]);
    const partners = ref([]);
    const applications = ref([]);
    const resources = ref([]);
    const opportunityTypes = ref([]);
    const opportunityCategories = ref([]);
    const selectedAppId = ref("");
    const showOppModal = ref(false);
    const recentOpportunities = computed(() => {
      return opportunities.value.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 6);
    });
    const recentApplications = computed(() => {
      return applications.value.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 6);
    });
    computed(() => {
      return applications.value.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 6).forEach((app) => {
        let opp = opportunities.value.find((o) => o.id === app.opportuniy_id);
        app["opp"] = opp;
        applications.push(app);
      });
    });
    computed(
      () => opportunities.value.filter((o) => o.status === "Open").length
    );
    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString();
    };
    const closeForm = () => {
      selectedAppId.value = "";
      showOppModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-dashboard" }, _attrs))} data-v-eedd3608><header class="app-header d-flex justify-content-between align-items-center" data-v-eedd3608><div class="d-flex" data-v-eedd3608><button class="btn me-3" data-v-eedd3608>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-eedd3608>Admin Dashboard</h3></div>`);
      if (unref(device) === "desktop") {
        _push(`<div class="d-flex gap-2" data-v-eedd3608>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/analytics/access",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Analytics `);
            } else {
              return [
                createTextVNode(" Analytics ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/users",
          class: "btn btn-secondary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Manage Users `);
            } else {
              return [
                createTextVNode(" Manage Users ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="btn btn-secondary" data-v-eedd3608> Refresh </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><section class="row mt-4 g-3" data-v-eedd3608><div class="col-md-3" data-v-eedd3608><div class="card shadow-lg border-0 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608><h6 class="fw-bold text-danger" data-v-eedd3608>Total Opportunities</h6></div><div class="card-body d-flex justify-content-between" data-v-eedd3608><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(opportunities.value.length)}</h3><div class="text-muted" data-v-eedd3608>in all</div><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(opportunities.value.length)}</h3><div class="text-muted" data-v-eedd3608>opportunities</div></div><div class="card-footer" data-v-eedd3608>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/opportunities",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Opportunities `);
          } else {
            return [
              createTextVNode(" Manage Opportunities ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-eedd3608><div class="card shadow-lg border-0 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608><h6 class="fw-bold text-danger" data-v-eedd3608>Opportunity Categories</h6></div><div class="card-body d-flex justify-content-between" data-v-eedd3608><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(opportunityCategories.value.length)}</h3><div class="text-muted" data-v-eedd3608>of all</div><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(opportunities.value.length)}</h3><div class="text-muted" data-v-eedd3608>opportunities</div></div><div class="card-footer" data-v-eedd3608>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/opportunities/categories",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Opportunities Categories `);
          } else {
            return [
              createTextVNode(" Manage Opportunities Categories ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-eedd3608><div class="card shadow-lg border-0 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608><h6 class="fw-bold text-danger" data-v-eedd3608>Resources</h6></div><div class="card-body d-flex justify-content-between" data-v-eedd3608><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(resources.value.length)}</h3><div class="text-muted" data-v-eedd3608>of all</div><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(resources.value.length)}</h3><div class="text-muted" data-v-eedd3608>resources</div></div><div class="card-footer" data-v-eedd3608>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/resources",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Resources `);
          } else {
            return [
              createTextVNode(" Manage Resources ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-eedd3608><div class="card shadow-lg border-0 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608><h6 class="fw-bold text-danger" data-v-eedd3608>Total Users</h6></div><div class="card-body d-flex justify-content-between" data-v-eedd3608><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(users.value.length)}</h3><div class="text-muted" data-v-eedd3608>of all</div><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(users.value.length)}</h3><div class="text-muted" data-v-eedd3608>users</div></div><div class="card-footer" data-v-eedd3608>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/users",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Users `);
          } else {
            return [
              createTextVNode(" Manage Users ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-eedd3608><div class="card shadow-lg border-0 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608><h6 class="fw-bold text-danger" data-v-eedd3608>Opportunity Types</h6></div><div class="card-body d-flex justify-content-between" data-v-eedd3608><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(opportunityTypes.value.length)}</h3><div class="text-muted" data-v-eedd3608>of all</div><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(opportunities.value.length)}</h3><div class="text-muted" data-v-eedd3608>opportunities</div></div><div class="card-footer" data-v-eedd3608>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/opportunities/types",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Opportunities types `);
          } else {
            return [
              createTextVNode(" Manage Opportunities types ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-eedd3608><div class="card shadow-lg border-0 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608><h6 class="fw-bold text-danger" data-v-eedd3608>Admin Users</h6></div><div class="card-body d-flex justify-content-between" data-v-eedd3608><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(users.value.filter((u) => u.role.toLowerCase() == "admin").length)}</h3><div class="text-muted" data-v-eedd3608>in all</div><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(users.value.length)}</h3><div class="text-muted" data-v-eedd3608>users</div></div><div class="card-footer" data-v-eedd3608>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/users/admin",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Admin Users `);
          } else {
            return [
              createTextVNode(" Manage Admin Users ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-eedd3608><div class="card shadow-lg border-0 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608><h6 class="fw-bold text-danger" data-v-eedd3608>Partners</h6></div><div class="card-body d-flex justify-content-between" data-v-eedd3608><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(partners.value.length)}</h3><div class="text-muted" data-v-eedd3608>in all</div><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(partners.value.length)}</h3><div class="text-muted" data-v-eedd3608>partners</div></div><div class="card-footer" data-v-eedd3608>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/partners",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Partners `);
          } else {
            return [
              createTextVNode(" Manage Partners ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-3" data-v-eedd3608><div class="card shadow-lg border-0 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608><h6 class="fw-bold text-danger" data-v-eedd3608>Applications</h6></div><div class="card-body d-flex justify-content-between" data-v-eedd3608><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(applications.value.length)}</h3><div class="text-muted" data-v-eedd3608>in all</div><h3 class="text-success" data-v-eedd3608>${ssrInterpolate(opportunities.value.length)}</h3><div class="text-muted" data-v-eedd3608>opportunities</div></div><div class="card-footer" data-v-eedd3608>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/applications",
        class: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Applications `);
          } else {
            return [
              createTextVNode(" View Applications ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
      if (showOppModal.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-eedd3608><div class="modal-dialog" data-v-eedd3608><div class="modal-content" data-v-eedd3608><div class="modal-header" data-v-eedd3608><h3 class="fw-bold text-uppercase mx-5 modal-title" data-v-eedd3608>Applied Opportunity</h3><button type="button" class="btn-close" data-v-eedd3608></button></div><div class="modal-body" data-v-eedd3608>`);
        _push(ssrRenderComponent(unref(OpportunityDisplay), {
          initialForm: selectedAppId.value,
          onCancel: closeForm
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(device) === "desktop") {
        _push(`<div class="row mt-4" data-v-eedd3608>`);
        if (unref(device) === "desktop") {
          _push(`<aside class="col-lg-3 sidebar sticky-top" data-v-eedd3608><div class="card shadow-sm mb-3" data-v-eedd3608><div class="card-body" data-v-eedd3608><h6 class="fw-bold" data-v-eedd3608>Quick Links</h6>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/adm/mod/opportunities",
            class: "w-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "fa6-solid:briefcase",
                  class: "me-3"
                }, null, _parent2, _scopeId));
                _push2(`<span data-v-eedd3608${_scopeId}>Opportunities</span>`);
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
            to: "/adm/mod/resources",
            class: "w-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "fa6-solid:briefcase",
                  class: "me-3"
                }, null, _parent2, _scopeId));
                _push2(`<span data-v-eedd3608${_scopeId}>Resources</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "fa6-solid:briefcase",
                    class: "me-3"
                  }),
                  createVNode("span", null, "Resources")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/adm/mod/users",
            class: "w-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "fa6-solid:users",
                  class: "me-3"
                }, null, _parent2, _scopeId));
                _push2(`<span data-v-eedd3608${_scopeId}>Users</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "fa6-solid:users",
                    class: "me-3"
                  }),
                  createVNode("span", null, "Users")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/adm/mod/applications",
            class: "w-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "fa6-solid:list",
                  class: "me-3"
                }, null, _parent2, _scopeId));
                _push2(`<span data-v-eedd3608${_scopeId}>Applications</span>`);
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
          _push(`</div></div><div class="card shadow-sm mb-3" data-v-eedd3608><div class="card-body" data-v-eedd3608>`);
          _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
          _push(`</div></div></aside>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(device) === "desktop") {
          _push(`<section class="col-lg-6 transparent sidebar sticky-top" data-v-eedd3608><section class="mt-4" data-v-eedd3608><div class="d-flex justify-content-between card p-3 align-items-center mb-2" data-v-eedd3608><h5 data-v-eedd3608>Recent Opportunities</h5>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/adm/mod/opportunities",
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
          _push(`</div><table class="table table-hover table-bordered" data-v-eedd3608><thead class="table-dark" data-v-eedd3608><tr data-v-eedd3608><th data-v-eedd3608>Title</th><th data-v-eedd3608>Type</th><th data-v-eedd3608>Status</th><th data-v-eedd3608>Organization</th><th data-v-eedd3608>Location</th></tr></thead><tbody data-v-eedd3608><!--[-->`);
          ssrRenderList(recentOpportunities.value, (opp) => {
            var _a, _b;
            _push(`<tr data-v-eedd3608><td class="small" data-v-eedd3608>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/adm/mod/opportunities/" + opp.id
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
            _push(`</td><td class="small" data-v-eedd3608>${ssrInterpolate(opp.opportunity_type)}</td><td class="small" data-v-eedd3608><span class="${ssrRenderClass([{ "bg-success": opp.status === "Open", "bg-secondary": opp.status === "Closed", "bg-warning text-dark": opp.status === "Upcoming" }, "badge"])}" data-v-eedd3608>${ssrInterpolate(opp.status)}</span></td><td class="small text-muted" data-v-eedd3608>${ssrInterpolate(((_a = opp.provider) == null ? void 0 : _a.organization_name) || "N/A")}</td><td class="small text-muted" data-v-eedd3608>${ssrInterpolate(opp.host_country)}, ${ssrInterpolate(((_b = opp.location) == null ? void 0 : _b.city) || "N/A")}</td></tr>`);
          });
          _push(`<!--]-->`);
          if (!recentOpportunities.value.length) {
            _push(`<tr data-v-eedd3608><td colspan="5" class="text-center" data-v-eedd3608> No opportunities yet </td></tr>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</tbody></table></section><section class="mt-4" data-v-eedd3608><div class="d-flex justify-content-between card p-3 align-items-center mb-2" data-v-eedd3608><h5 data-v-eedd3608>Recent Applications</h5>`);
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
          _push(`</div><table class="table table-hover table-bordered" data-v-eedd3608><thead class="table-dark" data-v-eedd3608><tr data-v-eedd3608><th data-v-eedd3608>Applicant</th><th data-v-eedd3608>Email</th><th data-v-eedd3608>Opportunity</th><th data-v-eedd3608>Submitted</th></tr></thead><tbody data-v-eedd3608><!--[-->`);
          ssrRenderList(recentApplications.value, (app) => {
            _push(`<tr data-v-eedd3608><td data-v-eedd3608>${ssrInterpolate(app.full_name)}</td><td data-v-eedd3608>${ssrInterpolate(app.email)}</td><td class="pointer text-primary" data-v-eedd3608>View Opportunity </td><td data-v-eedd3608>${ssrInterpolate(formatDate(app.submitted_at))}</td></tr>`);
          });
          _push(`<!--]-->`);
          if (!recentApplications.value.length) {
            _push(`<tr data-v-eedd3608><td colspan="8" class="text-center" data-v-eedd3608> No applications found </td></tr>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</tbody></table></section></section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(device) === "desktop") {
          _push(`<aside class="col-lg-3 sidebar sticky-top" data-v-eedd3608><div class="card shadow-sm mb-3" data-v-eedd3608><div class="card-body" data-v-eedd3608>`);
          _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
          _push(`</div></div><div class="card shadow-sm mb-3" data-v-eedd3608><div class="card-body" data-v-eedd3608>`);
          _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          _push(`</div></div></aside>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(device) !== "desktop") {
        _push(`<section class="" data-v-eedd3608><div class="card shadow-sm mb-3" data-v-eedd3608><div class="card-header" data-v-eedd3608><h6 class="fw-bold" data-v-eedd3608>Quick Links</h6></div><div class="card-body d-flex justify-content-between" data-v-eedd3608>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/opportunities",
          class: "w-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "fa6-solid:briefcase",
                class: "me-3"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-eedd3608${_scopeId}>Opportunities</span>`);
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
          to: "/adm/mod/resources",
          class: "w-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "fa6-solid:briefcase",
                class: "me-3"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-eedd3608${_scopeId}>Resources</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "fa6-solid:briefcase",
                  class: "me-3"
                }),
                createVNode("span", null, "Resources")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/users",
          class: "w-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "fa6-solid:users",
                class: "me-3"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-eedd3608${_scopeId}>Users</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "fa6-solid:users",
                  class: "me-3"
                }),
                createVNode("span", null, "Users")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/applications",
          class: "w-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "fa6-solid:list",
                class: "me-3"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-eedd3608${_scopeId}>Applications</span>`);
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
        _push(`</div></div><div class="d-flex justify-content-between card p-3 align-items-center mb-2" data-v-eedd3608><h5 data-v-eedd3608>Recent Opportunities</h5>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/opportunities",
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
        _push(`</div><section class="grid-3" data-v-eedd3608><!--[-->`);
        ssrRenderList(recentOpportunities.value, (opp) => {
          var _a, _b;
          _push(`<div data-v-eedd3608><div class="card shadow-lg h-100 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/adm/mod/opportunities/" + opp.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="small" data-v-eedd3608${_scopeId}>${ssrInterpolate(opp.title)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "small" }, toDisplayString(opp.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="card-body" data-v-eedd3608><div class="d-flex justify-content-between" data-v-eedd3608><div class="small" data-v-eedd3608>${ssrInterpolate(opp.opportunity_type)}</div><div class="small" data-v-eedd3608><span class="${ssrRenderClass([{ "bg-success": opp.status === "Open", "bg-secondary": opp.status === "Closed", "bg-warning text-dark": opp.status === "Upcoming" }, "badge"])}" data-v-eedd3608>${ssrInterpolate(opp.status)}</span></div></div><div class="d-flex justify-content-between" data-v-eedd3608><div class="small text-muted" data-v-eedd3608>${ssrInterpolate(((_a = opp.provider) == null ? void 0 : _a.organization_name) || "N/A")}</div><div class="small text-muted" data-v-eedd3608>${ssrInterpolate(opp.host_country)}, ${ssrInterpolate(((_b = opp.location) == null ? void 0 : _b.city) || "N/A")}</div></div></div></div></div>`);
        });
        _push(`<!--]--></section><div class="d-flex mt-4 mb-2 justify-content-between card p-3 align-items-center mb-2" data-v-eedd3608><h5 data-v-eedd3608>Recent Applications</h5>`);
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
        _push(`</div><section class="grid-3" data-v-eedd3608><!--[-->`);
        ssrRenderList(recentApplications.value, (app) => {
          _push(`<div data-v-eedd3608><div class="card shadow-lg h-100 rounded-4" data-v-eedd3608><div class="card-header" data-v-eedd3608>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/adm/mod/opportunities/" + app.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="small" data-v-eedd3608${_scopeId}>${ssrInterpolate(app.full_name)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "small" }, toDisplayString(app.full_name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="card-body" data-v-eedd3608><div class="d-flex justify-content-between" data-v-eedd3608><div class="small" data-v-eedd3608>${ssrInterpolate(app.email)}</div><div class="small" data-v-eedd3608><span class="badge bg-success" data-v-eedd3608>${ssrInterpolate(app.status)}</span></div></div><div class="d-flex justify-content-between" data-v-eedd3608><div class="small text-muted" data-v-eedd3608>${ssrInterpolate(formatDate(app.submitted_at))}</div><div class="small text-muted" data-v-eedd3608>${ssrInterpolate(formatDate(app.submitted_at))}</div></div></div></div></div>`);
        });
        _push(`<!--]--></section></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eedd3608"]]);

export { index as default };
//# sourceMappingURL=index-DnjDNW3f.mjs.map
