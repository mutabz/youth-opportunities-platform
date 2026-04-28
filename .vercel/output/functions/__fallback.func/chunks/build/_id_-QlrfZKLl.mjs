import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _sfc_main$1 } from './ResourcesAnalytics-DrCA8xme.mjs';
import { _ as _export_sfc, k as useRoute } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useDataStore();
    ref({});
    ref("");
    ref(false);
    ref(false);
    const form = ref({ data: [] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-resources" }, _attrs))} data-v-abe7593e><header class="app-header d-flex justify-content-between align-items-center" data-v-abe7593e><div class="d-flex" data-v-abe7593e><button class="btn me-3" data-v-abe7593e>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-abe7593e>Resources Admin</h3></div><div class="d-flex" data-v-abe7593e><button class="btn btn-primary" data-v-abe7593e> + New Resource </button><button class="btn btn-secondary" data-v-abe7593e> Refresh </button></div></header><div class="row mt-4 g-3" data-v-abe7593e><aside class="col-lg-3 sidebar sticky-top" data-v-abe7593e><div class="filters mt-3" data-v-abe7593e><input${ssrRenderAttr("value", _ctx.searchQuery)} type="text" class="form-control mt-2" placeholder="Search resources..." data-v-abe7593e><select class="form-select mt-2" data-v-abe7593e><option value="" data-v-abe7593e${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "") : ssrLooseEqual(_ctx.typeFilter, "")) ? " selected" : ""}>All Types</option><option value="guide" data-v-abe7593e${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "guide") : ssrLooseEqual(_ctx.typeFilter, "guide")) ? " selected" : ""}>Guide</option><option value="document" data-v-abe7593e${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "document") : ssrLooseEqual(_ctx.typeFilter, "document")) ? " selected" : ""}>Document</option><option value="video" data-v-abe7593e${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "video") : ssrLooseEqual(_ctx.typeFilter, "video")) ? " selected" : ""}>Video</option><option value="tutorial" data-v-abe7593e${ssrIncludeBooleanAttr(Array.isArray(_ctx.typeFilter) ? ssrLooseContain(_ctx.typeFilter, "tutorial") : ssrLooseEqual(_ctx.typeFilter, "tutorial")) ? " selected" : ""}>Tutorial</option></select></div><div class="card shadow-sm mt-3" data-v-abe7593e><div class="card-body" data-v-abe7593e><h6 class="fw-bold" data-v-abe7593e>Quick Links</h6>`);
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
            _push2(`<span data-v-abe7593e${_scopeId}>Dashboard</span>`);
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
      _push(`</div></div></aside><section class="col-lg-6 sidebar sticky-top" data-v-abe7593e><div class="fade show d-block" data-v-abe7593e><div class="modal-content" data-v-abe7593e><div class="modal-header" data-v-abe7593e><h5 class="modal-title" data-v-abe7593e>${ssrInterpolate(_ctx.editingResource ? "Edit Resource" : "Create Resource")}</h5><button class="btn-close" data-v-abe7593e></button></div><div class="modal-body text-dark" data-v-abe7593e><div class="mb-3" data-v-abe7593e><label class="form-label" data-v-abe7593e>Title</label><input${ssrRenderAttr("value", form.value.title)} class="form-control" data-v-abe7593e></div><div class="mb-3" data-v-abe7593e><label class="form-label" data-v-abe7593e>Type</label><input${ssrRenderAttr("value", form.value.type)} class="form-control" data-v-abe7593e></div><div class="mb-3" data-v-abe7593e><label class="form-label" data-v-abe7593e>Content</label><textarea class="form-control" data-v-abe7593e>${ssrInterpolate(form.value.content)}</textarea></div><div class="mb-3" data-v-abe7593e><label class="form-label" data-v-abe7593e>File path</label><input type="url"${ssrRenderAttr("value", form.value.file_path)} class="form-control" placeholder="Enter file link here" data-v-abe7593e></div><section class="mb-4" data-v-abe7593e><div class="card shadow-sm p-3 rounded border-dark" data-v-abe7593e><h6 class="fw-bold mb-3 text-dark" data-v-abe7593e>Data Paragraphs</h6><!--[-->`);
      ssrRenderList(form.value.data, (d, i) => {
        _push(`<div class="input-group mb-2" data-v-abe7593e><textarea class="form-control" placeholder="New Paragraphs" data-v-abe7593e>${ssrInterpolate(form.value.data[i])}</textarea><button class="btn btn-danger" data-v-abe7593e>\u2715</button></div>`);
      });
      _push(`<!--]--><button class="btn btn-outline-dark btn-sm" data-v-abe7593e>+ Add Paragraphs</button></div></section></div><div class="modal-footer justify-content-center" data-v-abe7593e><button class="btn btn-primary" data-v-abe7593e> Save </button></div></div></div></section><aside class="col-lg-3 sidebar sticky-top" data-v-abe7593e><div class="card shadow-sm mb-3" data-v-abe7593e><div class="card-body" data-v-abe7593e><h6 class="fw-bold text-uppercase text-center" data-v-abe7593e> Resources by Type </h6>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></aside></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/resources/update/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abe7593e"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-QlrfZKLl.mjs.map
