import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
    ref(false);
    ref(false);
    const form = ref({
      id: null,
      title: "",
      type: "",
      content: "",
      file_path: "",
      data: []
    });
    computed(() => {
      return resources.value.filter(
        (r) => {
          var _a;
          return (_a = r.title) == null ? void 0 : _a.toLowerCase().includes(search.value.toLowerCase());
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-resources" }, _attrs))} data-v-751a676b><header class="app-header d-flex justify-content-between align-items-center" data-v-751a676b><div class="d-flex" data-v-751a676b><button class="btn me-3" data-v-751a676b>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-751a676b>Resources Admin</h3></div><div class="d-flex" data-v-751a676b><button class="btn btn-primary" data-v-751a676b> + New Resource </button><button class="btn btn-secondary" data-v-751a676b> Refresh </button></div></header><div class="row mt-4 g-3" data-v-751a676b><aside class="col-lg-3 sidebar sticky-top" data-v-751a676b><div class="filters mt-3" data-v-751a676b><input${ssrRenderAttr("value", _ctx.searchQuery)} type="text" class="form-control mt-2" placeholder="Search resources..." data-v-751a676b><select class="form-select mt-2" data-v-751a676b><option value="" data-v-751a676b${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "") : ssrLooseEqual(_ctx.typeFilter, "")) ? " selected" : ""}>All Types</option><option value="guide" data-v-751a676b${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "guide") : ssrLooseEqual(_ctx.typeFilter, "guide")) ? " selected" : ""}>Guide</option><option value="document" data-v-751a676b${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "document") : ssrLooseEqual(_ctx.typeFilter, "document")) ? " selected" : ""}>Document</option><option value="video" data-v-751a676b${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "video") : ssrLooseEqual(_ctx.typeFilter, "video")) ? " selected" : ""}>Video</option><option value="tutorial" data-v-751a676b${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "tutorial") : ssrLooseEqual(_ctx.typeFilter, "tutorial")) ? " selected" : ""}>Tutorial</option></select></div><div class="card shadow-sm mt-3" data-v-751a676b><div class="card-body" data-v-751a676b><h6 class="fw-bold" data-v-751a676b>Quick Links</h6>`);
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
            _push2(`<span data-v-751a676b${_scopeId}>Dashboard</span>`);
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
      _push(`</div></div></aside><section class="col-lg-6 sidebar sticky-top" data-v-751a676b><div class="fade show d-block" data-v-751a676b><div class="modal-content" data-v-751a676b><div class="modal-header" data-v-751a676b><h5 class="modal-title" data-v-751a676b>${ssrInterpolate(_ctx.editingResource ? "Edit Resource" : "Create Resource")}</h5><button class="btn-close" data-v-751a676b></button></div><div class="modal-body text-dark" data-v-751a676b><div class="mb-3" data-v-751a676b><label class="form-label" data-v-751a676b>Title</label><input${ssrRenderAttr("value", form.value.title)} class="form-control" data-v-751a676b></div><div class="mb-3" data-v-751a676b><label class="form-label" data-v-751a676b>Type</label><select class="form-select mt-2" data-v-751a676b><option value="guide" data-v-751a676b${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, "guide") : ssrLooseEqual(form.value.type, "guide")) ? " selected" : ""}>Guide</option><option value="document" data-v-751a676b${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, "document") : ssrLooseEqual(form.value.type, "document")) ? " selected" : ""}>Document</option><option value="video" data-v-751a676b${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, "video") : ssrLooseEqual(form.value.type, "video")) ? " selected" : ""}>Video</option><option value="tutorial" data-v-751a676b${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, "tutorial") : ssrLooseEqual(form.value.type, "tutorial")) ? " selected" : ""}>Tutorial</option></select></div><div class="mb-3" data-v-751a676b><label class="form-label" data-v-751a676b>Content</label><textarea class="form-control" data-v-751a676b>${ssrInterpolate(form.value.content)}</textarea></div><div class="mb-3" data-v-751a676b><label class="form-label" data-v-751a676b>File path</label><input type="url"${ssrRenderAttr("value", form.value.file_path)} class="form-control" placeholder="Enter file link here" data-v-751a676b></div><section class="mb-4" data-v-751a676b><div class="card shadow-sm p-3 rounded border-dark" data-v-751a676b><h6 class="fw-bold mb-3 text-dark" data-v-751a676b>Data Paragraphs</h6><!--[-->`);
      ssrRenderList(form.value.data, (d, i) => {
        _push(`<div class="input-group mb-2" data-v-751a676b><textarea class="form-control" placeholder="New Paragraphs" data-v-751a676b>${ssrInterpolate(form.value.data[i])}</textarea><button class="btn btn-danger" data-v-751a676b>\u2715</button></div>`);
      });
      _push(`<!--]--><button class="btn btn-outline-dark btn-sm" data-v-751a676b>+ Add Paragraphs</button></div></section></div><div class="modal-footer justify-content-center" data-v-751a676b><button class="btn btn-primary" data-v-751a676b> Save </button></div></div></div></section><aside class="col-lg-3 sidebar sticky-top" data-v-751a676b><div class="card shadow-sm mb-3" data-v-751a676b><div class="card-body" data-v-751a676b><h6 class="fw-bold text-uppercase text-center" data-v-751a676b> Resources by Type </h6>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></aside></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/resources/create/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-751a676b"]]);

export { index as default };
//# sourceMappingURL=index-DboLAkQP.mjs.map
