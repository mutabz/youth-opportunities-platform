import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, reactive, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './UsersAnalytic-DnD3nU7i.mjs';
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

const _sfc_main$1 = {
  __name: "PartnerForm",
  __ssrInlineRender: true,
  props: {
    initialForm: { type: Object, default: null }
  },
  emits: ["saved", "cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useDataStore();
    const form = reactive({
      name: "",
      logo_url: "",
      website_url: "",
      description: "",
      priority: 0,
      visible: true
    });
    const loading = ref(false);
    const isEdit = computed(() => !!props.initialForm);
    watch(
      () => props.initialForm,
      (val) => {
        if (val) Object.assign(form, val);
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "partner-form" }, _attrs))} data-v-9dd023a8><div class="mb-3" data-v-9dd023a8><label class="form-label" data-v-9dd023a8>Partner Name</label><input${ssrRenderAttr("value", form.name)} type="text" class="form-control" required data-v-9dd023a8></div><div class="mb-3" data-v-9dd023a8><label class="form-label" data-v-9dd023a8>Logo URL</label><input${ssrRenderAttr("value", form.logo_url)} type="text" class="form-control" placeholder="https://example.com/logo.png" data-v-9dd023a8>`);
      if (form.logo_url) {
        _push(`<div class="mt-2" data-v-9dd023a8><img${ssrRenderAttr("src", form.logo_url)} alt="Logo Preview" class="img-thumbnail" style="${ssrRenderStyle({ "max-height": "100px" })}" data-v-9dd023a8></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-3" data-v-9dd023a8><label class="form-label" data-v-9dd023a8>Website URL</label><input${ssrRenderAttr("value", form.website_url)} type="text" class="form-control" placeholder="https://partner.com" data-v-9dd023a8></div><div class="mb-3" data-v-9dd023a8><label class="form-label" data-v-9dd023a8>Description</label><textarea class="form-control" rows="3" data-v-9dd023a8>${ssrInterpolate(form.description)}</textarea></div><div class="mb-3" data-v-9dd023a8><label class="form-label" data-v-9dd023a8>Priority</label><input${ssrRenderAttr("value", form.priority)} type="number" class="form-control" min="0" data-v-9dd023a8></div><div class="form-check mb-3" data-v-9dd023a8><input${ssrIncludeBooleanAttr(Array.isArray(form.visible) ? ssrLooseContain(form.visible, null) : form.visible) ? " checked" : ""} type="checkbox" class="form-check-input" id="visibleToggle" data-v-9dd023a8><label class="form-check-label" for="visibleToggle" data-v-9dd023a8>Visible</label></div><div class="d-flex justify-content-end gap-2" data-v-9dd023a8><button type="button" class="btn btn-secondary" data-v-9dd023a8>Cancel</button><button type="submit" class="btn btn-primary" data-v-9dd023a8>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm me-2" data-v-9dd023a8></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isEdit.value ? "Update" : "Create")}</button></div></form>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PartnerForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PartnerForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9dd023a8"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const dataStore = useDataStore();
    const partners = ref([]);
    const searchQuery = ref("");
    const showCreateForm = ref(false);
    const editingPartner = ref(null);
    const deleteId = ref(null);
    const fetchPartners = async (force = false) => {
      await dataStore.fetchData("partners", force);
      partners.value = dataStore.items.partners || [];
    };
    const filteredPartners = computed(() => {
      return partners.value.filter(
        (p) => p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const closeForm = () => {
      showCreateForm.value = false;
      editingPartner.value = null;
    };
    const onFormSaved = async () => {
      await fetchPartners(true);
      closeForm();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-partners" }, _attrs))} data-v-2edf84f1><header class="app-header d-flex justify-content-between align-items-center" data-v-2edf84f1><div class="d-flex" data-v-2edf84f1><button class="btn me-3" data-v-2edf84f1>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 data-v-2edf84f1>Partners Admin</h3></div><div class="d-flex" data-v-2edf84f1><button class="btn btn-primary" data-v-2edf84f1>+ New Partner</button><button class="btn btn-secondary" data-v-2edf84f1>Refresh</button></div></header><div class="row mt-4" data-v-2edf84f1><aside class="col-lg-3 sidebar sticky-top" data-v-2edf84f1><div class="filters mt-3 gap-2 align-items-center" data-v-2edf84f1><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="form-control w-100" placeholder="Search partner..." data-v-2edf84f1></div><div class="card shadow-sm mb-3" data-v-2edf84f1><div class="card-body" data-v-2edf84f1><h6 class="fw-bold" data-v-2edf84f1>Quick Links</h6>`);
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
            _push2(`<span data-v-2edf84f1${_scopeId}>Dashboard</span>`);
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
        to: "/adm/mod/users/admin",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:users",
              class: "me-3"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-2edf84f1${_scopeId}>Admin Users</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa6-solid:users",
                class: "me-3"
              }),
              createVNode("span", null, "Admin Users")
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
            _push2(`<span data-v-2edf84f1${_scopeId}>Users</span>`);
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
            _push2(`<span data-v-2edf84f1${_scopeId}>Applications</span>`);
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
      _push(`</div></div></aside><section class="col-lg-6 sidebar transparent sticky-top" data-v-2edf84f1><div class="d-flex justify-content-between text-dark" data-v-2edf84f1><div class="text-wrap" data-v-2edf84f1>`);
      if (searchQuery.value) {
        _push(`<strong data-v-2edf84f1>Search Results for: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-2edf84f1>${ssrInterpolate(searchQuery.value)}</span></div><div class="" data-v-2edf84f1>`);
      if (_ctx.roleFilter) {
        _push(`<strong data-v-2edf84f1>Role: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-2edf84f1>${ssrInterpolate(_ctx.roleFilter)}</span></div><div class="" data-v-2edf84f1>`);
      if (_ctx.verifiedFilter) {
        _push(`<strong data-v-2edf84f1>Verified: </strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-2edf84f1>${ssrInterpolate(_ctx.verifiedFilter)}</span></div></div><section class="mt-3" data-v-2edf84f1><table class="table table-hover table-bordered" data-v-2edf84f1><thead class="table-dark" data-v-2edf84f1><tr data-v-2edf84f1><th data-v-2edf84f1>Logo</th><th data-v-2edf84f1>Name</th><th data-v-2edf84f1>Website</th><th data-v-2edf84f1>Visible</th><th data-v-2edf84f1>Actions</th></tr></thead><tbody data-v-2edf84f1><!--[-->`);
      ssrRenderList(filteredPartners.value, (partner) => {
        _push(`<tr data-v-2edf84f1><td data-v-2edf84f1>`);
        if (partner.logo_url) {
          _push(`<img${ssrRenderAttr("src", partner.logo_url)} style="${ssrRenderStyle({ "height": "40px" })}" data-v-2edf84f1>`);
        } else {
          _push(`<span data-v-2edf84f1>N/A</span>`);
        }
        _push(`</td><td data-v-2edf84f1>${ssrInterpolate(partner.name)}</td><td data-v-2edf84f1><a${ssrRenderAttr("href", partner.website_url)} target="_blank" data-v-2edf84f1>${ssrInterpolate(partner.website_url)}</a></td><td data-v-2edf84f1><span class="${ssrRenderClass([partner.visible ? "bg-success" : "bg-secondary", "badge"])}" data-v-2edf84f1>${ssrInterpolate(partner.visible ? "Visible" : "Hidden")}</span></td><td data-v-2edf84f1><button class="btn btn-act text-warning me-2" data-v-2edf84f1>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:pencil" }, null, _parent));
        _push(`</button><button class="btn btn-act text-danger" data-v-2edf84f1>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:trash" }, null, _parent));
        _push(`</button></td></tr>`);
      });
      _push(`<!--]-->`);
      if (!filteredPartners.value.length) {
        _push(`<tr data-v-2edf84f1><td colspan="6" class="text-center" data-v-2edf84f1> No partners found </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></section>`);
      if (showCreateForm.value || editingPartner.value) {
        _push(`<div class="modal fade show d-block" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-2edf84f1><div class="modal-dialog modal-lg" data-v-2edf84f1><div class="modal-content" data-v-2edf84f1><div class="modal-header" data-v-2edf84f1><h5 class="modal-title" data-v-2edf84f1>${ssrInterpolate(editingPartner.value ? "Edit Partner" : "Create Partner")}</h5><button class="btn-close" data-v-2edf84f1></button></div><div class="modal-body" data-v-2edf84f1>`);
        _push(ssrRenderComponent(PartnerForm, {
          initialForm: editingPartner.value || null,
          onSaved: onFormSaved,
          onCancel: closeForm
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (deleteId.value) {
        _push(`<div class="modal fade show d-flex justify-content-between align-items-center" style="${ssrRenderStyle({ "background": "rgba(0,0,0,0.5)" })}" data-v-2edf84f1><div class="modal-dialog" data-v-2edf84f1><div class="modal-content" data-v-2edf84f1><div class="modal-header" data-v-2edf84f1><h5 class="modal-title" data-v-2edf84f1>Confirm Delete</h5><button class="btn-close" data-v-2edf84f1></button></div><div class="modal-body" data-v-2edf84f1> Are you sure you want to delete this partner? </div><div class="modal-footer" data-v-2edf84f1><button class="btn btn-secondary" data-v-2edf84f1>Cancel</button><button class="btn btn-danger" data-v-2edf84f1>Delete</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><aside class="col-lg-3 sidebar sticky-top" data-v-2edf84f1><div class="card shadow-sm mb-3" data-v-2edf84f1><div class="card-body" data-v-2edf84f1>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div></aside></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/partners/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2edf84f1"]]);

export { index as default };
//# sourceMappingURL=index-DmNL27US.mjs.map
