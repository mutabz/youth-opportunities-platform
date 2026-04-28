import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { t as truncate } from './utils-C8zi-Gnd.mjs';
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
    const searchQuery = ref("");
    const ActiveCategory = ref("");
    useDataStore();
    const userStore = useUserStore();
    const loading = ref(false);
    const DeletingId = ref("");
    computed(() => userStore.user);
    const items = ref([]);
    const categories = ref([]);
    computed(() => {
      if (!items.value) return [];
      return items.value.filter((opp) => {
        var _a, _b, _c;
        const matchesSearch = ((_a = opp.title) == null ? void 0 : _a.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_c = (_b = opp.description) == null ? void 0 : _b[0]) == null ? void 0 : _c.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchesCategory = !ActiveCategory.value || opp.category === ActiveCategory.value;
        return matchesSearch && matchesCategory;
      });
    });
    computed(() => {
      var _a;
      if (!searchQuery.value) return [];
      return (_a = items.value) == null ? void 0 : _a.filter(
        (opp) => {
          var _a2, _b;
          return ((_a2 = opp.description[0]) == null ? void 0 : _a2.toLowerCase().includes(searchQuery.value.toLowerCase())) || ((_b = opp.title) == null ? void 0 : _b.toLowerCase().includes(searchQuery.value.toLowerCase()));
        }
      ).slice(0, 5);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UserInsights = resolveComponent("UserInsights");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-dashboard container-fluid" }, _attrs))} data-v-0d437731><header class="app-header d-flex justify-content-between align-items-center" data-v-0d437731><div class="d-flex" data-v-0d437731><button class="btn me-3" data-v-0d437731>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-left" }, null, _parent));
      _push(`</button><h3 data-v-0d437731>Saved Opportunities</h3></div>`);
      if (unref(device) === "desktop") {
        _push(`<div class="d-flex gap-2" data-v-0d437731>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/resources",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse Resources `);
            } else {
              return [
                createTextVNode(" Browse Resources ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/dashboard/opportunities",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse opportunities `);
            } else {
              return [
                createTextVNode(" Browse opportunities ")
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
        _push(`<button class="btn btn-secondary" data-v-0d437731> Refresh </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="row mt-2" data-v-0d437731><aside class="col-lg-3 sidebar sticky-top" data-v-0d437731><div class="" data-v-0d437731><h3 class="fw-bold text-muted text-center text-uppercase" data-v-0d437731>Filter By Categories</h3><hr class="text-muted" data-v-0d437731><div class="card shadow-sm" data-v-0d437731><div class="card-body" data-v-0d437731><div class="input-group" data-v-0d437731><input type="text" class="form-control" placeholder="Search opportunities..."${ssrRenderAttr("value", searchQuery.value)} data-v-0d437731></div></div></div></div><div class="tabs" data-v-0d437731><div class="${ssrRenderClass([{ "active": ActiveCategory.value === "" }, "tab text-muted"])}" data-v-0d437731>All</div><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(`<div class="${ssrRenderClass([{ "active": ActiveCategory.value === cat.name }, "tab text-muted"])}" data-v-0d437731>${ssrInterpolate(cat.key)}</div>`);
      });
      _push(`<!--]--></div></aside><section class="col-lg-9" data-v-0d437731><div class="" data-v-0d437731><h3 class="fw-bold text-muted text-center text-uppercase" data-v-0d437731>Opportunities Lists</h3><hr class="text-muted" data-v-0d437731></div>`);
      if (items.value.length) {
        _push(`<div class="grid-2" data-v-0d437731><!--[-->`);
        ssrRenderList(items.value, (opp) => {
          _push(`<div class="card shadow-sm mb-3" data-v-0d437731><div class="card-header fw-bold" data-v-0d437731>${ssrInterpolate(opp.title)} ${ssrInterpolate(opp.opp_saved_at)}</div><div class="card-body" data-v-0d437731><p class="text-muted" data-v-0d437731>${ssrInterpolate(unref(truncate)(opp.description[0], 200))}</p><div class="d-flex justify-content-between small text-muted" data-v-0d437731><span data-v-0d437731><strong data-v-0d437731>Location:</strong> ${ssrInterpolate(opp.host_country)}</span><span data-v-0d437731><strong data-v-0d437731>Deadline:</strong> ${ssrInterpolate(opp.details.application.deadline)}</span></div></div><div class="card-footer" data-v-0d437731>`);
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
          _push(`<button class="btn btn-outline-danger rounded-4" style="${ssrRenderStyle({ "font-size": "0.8rem", "padding": "0.4rem 1rem" })}" data-v-0d437731>`);
          if (loading.value && opp.opp_saved_at === DeletingId.value) {
            _push(`<span data-v-0d437731>Deleting....</span>`);
          } else {
            _push(`<span data-v-0d437731>Delete ${ssrInterpolate(opp.category)}</span>`);
          }
          _push(`</button></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center text-muted" data-v-0d437731> No opportunities found </div>`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_component_UserInsights, null, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/dashboard/saved/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d437731"]]);

export { index as default };
//# sourceMappingURL=index-ZCtEEQ4T.mjs.map
