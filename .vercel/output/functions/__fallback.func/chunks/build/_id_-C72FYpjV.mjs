import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, unref, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, k as useRoute, f as useRouter, m as useUserStore } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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
  __name: "ApplicationFormUser",
  __ssrInlineRender: true,
  props: {
    opportunityId: {
      type: String,
      required: true
    }
  },
  emits: ["saved"],
  setup(__props, { emit: __emit }) {
    const userStore = useUserStore();
    const user = userStore.user;
    const props = __props;
    const loading = ref(false);
    useDataStore();
    const form = reactive({
      opportunity_id: props.opportunityId,
      user_id: user.id,
      full_name: "",
      email: "",
      phone_number: "",
      date_of_birth: "",
      address: "",
      country: "",
      city: "",
      education_level: "",
      institution: "",
      resume_cv: "",
      cover_letter: "",
      motivation_statement: "",
      portfolio_link: "",
      other_documents: {}
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><h5>Personal Information</h5><div class="row"><div class="col-md-6 mb-3"><label class="form-label">Full Name</label><input${ssrRenderAttr("value", form.full_name)} type="text" class="form-control" required></div><div class="col-md-6 mb-3"><label class="form-label">Email</label><input${ssrRenderAttr("value", form.email)} type="email" class="form-control" required></div><div class="col-md-6 mb-3"><label class="form-label">Phone Number</label><input${ssrRenderAttr("value", form.phone_number)} type="text" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">Date of Birth</label><input${ssrRenderAttr("value", form.date_of_birth)} type="date" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">Country</label><input${ssrRenderAttr("value", form.country)} type="text" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">City</label><input${ssrRenderAttr("value", form.city)} type="text" class="form-control"></div><div class="col-md-12 mb-3"><label class="form-label">Address</label><input${ssrRenderAttr("value", form.address)} type="text" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">Education Level</label><input${ssrRenderAttr("value", form.education_level)} type="text" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">Institution</label><input${ssrRenderAttr("value", form.institution)} type="text" class="form-control"></div></div><h5>Documents</h5><div class="mb-3"><label class="form-label">Resume / CV URL</label><input${ssrRenderAttr("value", form.resume_cv)} type="text" class="form-control"></div><div class="mb-3"><label class="form-label">Cover Letter</label><textarea class="form-control" rows="3">${ssrInterpolate(form.cover_letter)}</textarea></div><div class="mb-3"><label class="form-label">Motivation Statement</label><textarea class="form-control" rows="3">${ssrInterpolate(form.motivation_statement)}</textarea></div><div class="mb-3"><label class="form-label">Portfolio Link</label><input${ssrRenderAttr("value", form.portfolio_link)} type="text" class="form-control"></div><div class="d-flex justify-content-end gap-2 mt-3"><button type="submit" class="btn btn-primary">`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm me-2"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Submit Application</button></div></form>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ApplicationFormUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const ApplicationForm = _sfc_main$1;
    useRoute();
    const router = useRouter();
    useDataStore();
    const opportunity = ref(null);
    const loading = ref(true);
    const onApplicationSaved = () => {
      alert("Your application has been submitted successfully!");
      router.push("/opportunities");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "application-page container py-0" }, _attrs))} data-v-352676ae><header class="app-header d-flex justify-content-between align-items-center" data-v-352676ae><div class="d-flex align-items-center" data-v-352676ae><button class="btn me-3" data-v-352676ae>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-right" }, null, _parent));
      _push(`</button><h3 class="fw-bold text-uppercase mx-2" data-v-352676ae>Apply for Opportunity</h3></div><div class="d-flex" data-v-352676ae>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user/dashboard",
        class: "btn btn-primary",
        onClick: ($event) => _ctx.showCreateForm = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`User Dashboard`);
          } else {
            return [
              createTextVNode("User Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="" data-v-352676ae${_scopeId}></span>Home Page`);
          } else {
            return [
              createVNode("span", { class: "" }),
              createTextVNode("Home Page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><hr data-v-352676ae>`);
      if (loading.value) {
        _push(`<div class="text-center my-5" data-v-352676ae><span class="spinner-border spinner-border-sm me-2" data-v-352676ae></span>Loading opportunity... </div>`);
      } else if (!opportunity.value) {
        _push(`<div data-v-352676ae><p class="text-danger" data-v-352676ae>Opportunity not found!</p></div>`);
      } else {
        _push(`<div class="row g-3" data-v-352676ae><div class="col-lg-5" data-v-352676ae><div class="card" data-v-352676ae><div class="card-header" data-v-352676ae><h5 class="card-title fw-bold" data-v-352676ae>${ssrInterpolate(opportunity.value.title)}</h5></div><div class="card-body" data-v-352676ae><p class="card-text" data-v-352676ae><strong data-v-352676ae>Type:</strong> ${ssrInterpolate(opportunity.value.opportunity_type)}</p><p class="card-text" data-v-352676ae><strong data-v-352676ae>Status:</strong> ${ssrInterpolate(opportunity.value.status)}</p><p class="card-text" data-v-352676ae><strong data-v-352676ae>Organization:</strong> ${ssrInterpolate(opportunity.value.provider.organization_name || "N/A")}</p><p class="card-text" data-v-352676ae><strong data-v-352676ae>Location:</strong> ${ssrInterpolate(opportunity.value.host_country)}, ${ssrInterpolate(opportunity.value.location.city || "N/A")}</p>`);
        if (opportunity.value.description) {
          _push(`<p class="card-text" data-v-352676ae><strong data-v-352676ae>Description:</strong> <!--[-->`);
          ssrRenderList(opportunity.value.description, (p) => {
            _push(`<div class="mt-3" data-v-352676ae>${ssrInterpolate(p || "No description available.")}</div>`);
          });
          _push(`<!--]--></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="col-lg-7" data-v-352676ae><div class="card p-3" data-v-352676ae>`);
        _push(ssrRenderComponent(unref(ApplicationForm), {
          opportunityId: opportunity.value.id,
          onSaved: onApplicationSaved
        }, null, _parent));
        _push(`</div></div></div>`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/opportunities/apply/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-352676ae"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-C72FYpjV.mjs.map
