import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _sfc_main$1 } from './ResourcesAnalytics-DrCA8xme.mjs';
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
    useDataStore();
    const resources = ref([]);
    const search = ref("");
    const deleteId = ref("");
    ref(false);
    ref(false);
    ref({
      id: null,
      title: "",
      type: "",
      content: "",
      file: null
    });
    const filteredResources = computed(() => {
      return resources.value.filter(
        (r) => {
          var _a;
          return (_a = r.title) == null ? void 0 : _a.toLowerCase().includes(search.value.toLowerCase());
        }
      );
    });
    const truncate = (text, n) => {
      if (!text) return "";
      return text.length > n ? text.slice(0, n) + "..." : text;
    };
    const formatDate = (d) => {
      return new Date(d).toLocaleDateString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-resources" }, _attrs))} data-v-2cd9b5ad><header class="app-header d-flex justify-content-between align-items-center" data-v-2cd9b5ad><div class="d-flex" data-v-2cd9b5ad><button class="btn me-3" data-v-2cd9b5ad>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-2cd9b5ad>Resources Admin</h3></div><div class="d-flex" data-v-2cd9b5ad>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/resources/create",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + New Resource `);
          } else {
            return [
              createTextVNode(" + New Resource ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="btn btn-secondary" data-v-2cd9b5ad> Refresh </button></div></header><div class="row mt-4" data-v-2cd9b5ad><aside class="col-lg-3 sidebar sticky-top" data-v-2cd9b5ad><div class="filters mt-3" data-v-2cd9b5ad><input${ssrRenderAttr("value", _ctx.searchQuery)} type="text" class="form-control mt-2" placeholder="Search resources..." data-v-2cd9b5ad><select class="form-select mt-2" data-v-2cd9b5ad><option value="" data-v-2cd9b5ad${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "") : ssrLooseEqual(_ctx.typeFilter, "")) ? " selected" : ""}>All Types</option><option value="guide" data-v-2cd9b5ad${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "guide") : ssrLooseEqual(_ctx.typeFilter, "guide")) ? " selected" : ""}>Guide</option><option value="document" data-v-2cd9b5ad${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "document") : ssrLooseEqual(_ctx.typeFilter, "document")) ? " selected" : ""}>Document</option><option value="video" data-v-2cd9b5ad${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "video") : ssrLooseEqual(_ctx.typeFilter, "video")) ? " selected" : ""}>Video</option><option value="tutorial" data-v-2cd9b5ad${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "tutorial") : ssrLooseEqual(_ctx.typeFilter, "tutorial")) ? " selected" : ""}>Tutorial</option></select></div><div class="card shadow-sm mt-3" data-v-2cd9b5ad><div class="card-body" data-v-2cd9b5ad><h6 class="fw-bold" data-v-2cd9b5ad>Quick Links</h6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:briefcase",
              class: "me-3"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-2cd9b5ad${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:briefcase",
                class: "me-3"
              }),
              createVNode("span", null, "Dashboard")
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
              name: "fa6-solid:book",
              class: "me-2"
            }, null, _parent2, _scopeId));
            _push2(` Resources `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:book",
                class: "me-2"
              }),
              createTextVNode(" Resources ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/opportunities",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:briefcase",
              class: "me-2"
            }, null, _parent2, _scopeId));
            _push2(` Opportunities `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:briefcase",
                class: "me-2"
              }),
              createTextVNode(" Opportunities ")
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
              class: "me-2"
            }, null, _parent2, _scopeId));
            _push2(` Users `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:users",
                class: "me-2"
              }),
              createTextVNode(" Users ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></aside><section class="col-lg-6 sidebar transparent sticky-top" data-v-2cd9b5ad><div class="d-flex mb-2" data-v-2cd9b5ad><div data-v-2cd9b5ad>`);
      if (_ctx.searchQuery) {
        _push(`<strong data-v-2cd9b5ad>Search:</strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(_ctx.searchQuery)}</div><div class="ms-3" data-v-2cd9b5ad>`);
      if (_ctx.typeFilter) {
        _push(`<strong data-v-2cd9b5ad>Type:</strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(_ctx.typeFilter)}</div></div><div class="" data-v-2cd9b5ad><table class="table table-hover table-bordered" data-v-2cd9b5ad><thead class="table-dark" data-v-2cd9b5ad><tr data-v-2cd9b5ad><th data-v-2cd9b5ad>Title</th><th data-v-2cd9b5ad>Type</th><th data-v-2cd9b5ad>Content</th><th data-v-2cd9b5ad>File</th><th data-v-2cd9b5ad>Date</th><th data-v-2cd9b5ad>Actions</th></tr></thead><tbody data-v-2cd9b5ad><!--[-->`);
      ssrRenderList(filteredResources.value, (res) => {
        _push(`<tr data-v-2cd9b5ad><td class="small" data-v-2cd9b5ad>${ssrInterpolate(res.title)}</td><td class="small" data-v-2cd9b5ad><span class="badge bg-primary" data-v-2cd9b5ad>${ssrInterpolate(res.type)}</span></td><td class="small text-muted" data-v-2cd9b5ad>${ssrInterpolate(truncate(res.content, 80))}</td><td data-v-2cd9b5ad>`);
        if (res.file_path) {
          _push(`<a${ssrRenderAttr("href", res.file_path)} target="_blank" class="btn btn-sm btn-outline-primary" data-v-2cd9b5ad> View </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="small text-muted" data-v-2cd9b5ad>${ssrInterpolate(formatDate(res.created_at))}</td><td data-v-2cd9b5ad>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/adm/mod/resources/update/" + res.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:pencil" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "fa6-solid:pencil" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-danger",
          onClick: ($event) => deleteId.value = res.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "fa6-solid:trash" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "fa6-solid:trash" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredResources.value.length) {
        _push(`<tr data-v-2cd9b5ad><td colspan="6" class="text-center" data-v-2cd9b5ad> No resources found </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div>`);
      if (deleteId.value) {
        _push(`<div class="modal fade show d-flex justify-content-center align-items-center" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-2cd9b5ad><div class="modal-dialog" data-v-2cd9b5ad><div class="modal-content" data-v-2cd9b5ad><div class="modal-header" data-v-2cd9b5ad><h5 class="modal-title" data-v-2cd9b5ad>Confirm Delete</h5><button class="btn-close" data-v-2cd9b5ad></button></div><div class="modal-body" data-v-2cd9b5ad> Are you sure you want to delete this resource? </div><div class="modal-footer" data-v-2cd9b5ad><button class="btn btn-secondary" data-v-2cd9b5ad> Cancel </button><button class="btn btn-danger" data-v-2cd9b5ad> Delete </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><aside class="col-lg-3 sidebar sticky-top" data-v-2cd9b5ad><div class="card shadow-sm mb-3" data-v-2cd9b5ad><div class="card-body" data-v-2cd9b5ad><h6 class="fw-bold text-uppercase text-center" data-v-2cd9b5ad> Resources by Type </h6>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></aside></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/resources/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2cd9b5ad"]]);

export { index as default };
//# sourceMappingURL=index-B4_xHBti.mjs.map
