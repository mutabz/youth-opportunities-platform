import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { d as detailSections, o as otherDynamicSections, L as LoginEnquiry } from './opportunitySections-DfZt5Gda.mjs';
import { k as useRoute, m as useUserStore, o as useSeoMeta, u as useHead } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { c as generateStructuredData, b as generateMetaDescription, a as generateMetaTitle } from './utils-C8zi-Gnd.mjs';
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
import './useAuth-Byn3I6j5.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { device } = useDeviceType();
    useRoute();
    useDataStore();
    const userStore = useUserStore();
    const user = computed(() => userStore.user);
    const opportunity = ref({});
    const category = ref("");
    const showLoginEnquiry = ref(false);
    const location = ref({});
    const provider = computed(() => opportunity.value.provider || {});
    const details = computed(() => opportunity.value.details || {});
    const type = computed(() => category.value);
    const filteredDetailSections = computed(
      () => type.value ? detailSections.filter((s) => {
        var _a;
        return (_a = s.type) == null ? void 0 : _a.includes(type.value);
      }) : []
    );
    const filteredDynamicSections = computed(
      () => type.value ? otherDynamicSections.filter((s) => {
        var _a;
        return (_a = s.type) == null ? void 0 : _a.includes(type.value);
      }) : []
    );
    watch(opportunity, (newOpp) => {
      var _a;
      if (!newOpp || !newOpp.title) return;
      useSeoMeta({
        title: generateMetaTitle(newOpp),
        description: generateMetaDescription(newOpp),
        meta: [
          { name: "keywords", content: ((_a = newOpp.details.slugs) == null ? void 0 : _a.join(", ")) || "" }
        ],
        script: [
          {
            type: "application/ld+json",
            children: JSON.stringify(generateStructuredData(newOpp))
          }
        ]
      });
    }, { immediate: true });
    useHead(() => {
      var _a, _b, _c;
      if (!((_a = opportunity.value) == null ? void 0 : _a.title)) return {};
      return {
        title: opportunity.value.title,
        meta: [
          {
            name: "description",
            content: ((_b = opportunity.value.description) == null ? void 0 : _b[0]) || generateMetaDescription(opportunity.value)
          },
          {
            name: "keywords",
            content: ((_c = opportunity.value.tags) == null ? void 0 : _c.join(", ")) || ""
          }
        ],
        script: [
          {
            type: "application/ld+json",
            children: JSON.stringify(generateStructuredData({
              ...opportunity.value,
              location: location.value
            }))
          }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-dashboard p-3" }, _attrs))}><header class="d-flex align-items-center mb-4 bg-info p-3 text-white rounded-4"><button class="btn">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "",
        name: "fa6-solid:arrow-left"
      }, null, _parent));
      _push(`</button><h1 class="h4 m-0">${ssrInterpolate(opportunity.value.title)}</h1></header><div class="row g-4"><div class="col-12"><div class="card shadow-sm border-primary"><div class="card-header bg-primary text-white"><h5 class="card-title mb-0">Description</h5></div><div class="card-body"><!--[-->`);
      ssrRenderList(opportunity.value.description, (desc, i) => {
        _push(`<p class="mb-2">${ssrInterpolate(desc)}</p>`);
      });
      _push(`<!--]--><span class="badge bg-primary me-2">${ssrInterpolate(opportunity.value.opportunity_type)}</span><span class="badge bg-success">${ssrInterpolate(opportunity.value.status)}</span></div></div></div><div class="col-12"><div class="card shadow-sm border-info"><div class="card-header bg-info text-white"><h5 class="card-title mb-0">Provider</h5></div><div class="card-body d-flex justify-content-between"><div class=""><p><strong>Name:</strong> ${ssrInterpolate(provider.value.organization_name || "N/A")}</p><p><strong>Type:</strong> ${ssrInterpolate(provider.value.organization_type || "N/A")}</p></div><div class="">`);
      if (provider.value.organization_logo) {
        _push(`<img${ssrRenderAttr("src", provider.value.organization_logo)} class="img-fluid rounded mt-2" style="${ssrRenderStyle({ "max-height": "80px" })}">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><!--[-->`);
      ssrRenderList(filteredDetailSections.value, (section) => {
        var _a2, _b, _c;
        _push(`<div class="col-12">`);
        if (section && ((_b = (_a2 = details.value) == null ? void 0 : _a2[section.key]) == null ? void 0 : _b.length)) {
          _push(`<div class="card shadow-sm border-warning"><div class="card-header bg-warning text-dark"><h5 class="card-title mb-0">${ssrInterpolate(section.label)}</h5></div><div class="card-body"><ul class="list-group list-group-flush"><!--[-->`);
          ssrRenderList((_c = details.value) == null ? void 0 : _c[section.key], (item, i) => {
            _push(`<li class="list-group-item">${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(filteredDynamicSections.value, (section) => {
        var _a2;
        _push(`<div class="col-12">`);
        if (section && ((_a2 = details.value) == null ? void 0 : _a2[section.key])) {
          _push(`<div class="card shadow-sm border-success"><div class="card-header bg-success text-white"><h5 class="card-title mb-0">${ssrInterpolate(section.label)}</h5></div><div class="card-body row g-3"><!--[-->`);
          ssrRenderList(section.fields || [], (field) => {
            var _a3, _b, _c, _d, _e, _f;
            _push(`<div class="col-12 col-md-6"><strong>${ssrInterpolate(field.label)}:</strong>`);
            if (field.type === "boolean") {
              _push(`<div>${ssrInterpolate(((_b = (_a3 = details.value) == null ? void 0 : _a3[section.key]) == null ? void 0 : _b[field.key]) ? "Yes" : "No")}</div>`);
            } else if (field.type === "list") {
              _push(`<ul class="list-group list-group-flush"><!--[-->`);
              ssrRenderList(((_d = (_c = details.value) == null ? void 0 : _c[section.key]) == null ? void 0 : _d[field.key]) || [], (item, i) => {
                _push(`<li class="list-group-item">${ssrInterpolate(item)}</li>`);
              });
              _push(`<!--]--></ul>`);
            } else if (field.type === "dict") {
              _push(`<div class="ms-2"><!--[-->`);
              ssrRenderList(field.subfields || [], (sub) => {
                var _a4, _b2, _c2;
                _push(`<div>${ssrInterpolate(sub.label)}: ${ssrInterpolate((_c2 = (_b2 = (_a4 = details.value) == null ? void 0 : _a4[section.key]) == null ? void 0 : _b2[field.key]) == null ? void 0 : _c2[sub.key])}</div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<div>${ssrInterpolate((_f = (_e = details.value) == null ? void 0 : _e[section.key]) == null ? void 0 : _f[field.key])}</div>`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if ((_a = details.value.application) == null ? void 0 : _a.application_link) {
        _push(`<div class="col-12">`);
        if (unref(device) === "desktop") {
          _push(`<div class="d-flex justify-content-center">`);
          if (details.value.application.application_link) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              href: details.value.application.application_link,
              target: "_blank",
              class: "btn btn-primary rounded-4 w-50 btn-lg mt-2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Apply for this ${ssrInterpolate(type.value)}`);
                } else {
                  return [
                    createTextVNode(" Apply for this " + toDisplayString(type.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/opportunities/apply/" + opportunity.value.id,
            class: "btn btn-success rounded-4 w-50 btn-lg mt-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Need Help For Application `);
              } else {
                return [
                  createTextVNode(" Need Help For Application ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(device) !== "desktop") {
          _push(`<div class="">`);
          if (!user.value) {
            _push(`<button class="btn btn-primary rounded-4 w-100 btn-lg"> Apply for this ${ssrInterpolate(type.value)}</button>`);
          } else {
            _push(`<div class="">`);
            if (details.value.application.application_link) {
              _push(`<a${ssrRenderAttr("href", details.value.application.application_link)} target="_blank" class="btn btn-primary rounded-4 w-100 btn-lg mt-2"> Apply for this ${ssrInterpolate(type.value)}</a>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/opportunities/apply/" + opportunity.value.id,
            class: "btn btn-success rounded-4 w-100 btn-lg mt-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Need Help For Application `);
              } else {
                return [
                  createTextVNode(" Need Help For Application ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (showLoginEnquiry.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Login To Continue</h5><button type="button" class="btn-close"></button></div><div class="modal-body">`);
        _push(ssrRenderComponent(LoginEnquiry, {
          onCancel: ($event) => showLoginEnquiry.value = false
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/dashboard/opportunities/[type]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-W81xdps-.mjs.map
