import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, k as useRoute } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
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
  __name: "kk",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useDataStore();
    const application = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-application-review" }, _attrs))} data-v-cecb3670><header class="app-header d-flex justify-content-between align-items-center" data-v-cecb3670><h3 data-v-cecb3670>Application Review</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/mod/applications",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back `);
          } else {
            return [
              createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
      if (application.value) {
        _push(`<section class="mt-4" data-v-cecb3670><div class="row" data-v-cecb3670><div class="col-md-7" data-v-cecb3670><div class="card mb-3" data-v-cecb3670><div class="card-header" data-v-cecb3670><strong data-v-cecb3670>Applicant Information</strong></div><div class="card-body" data-v-cecb3670><p data-v-cecb3670><strong data-v-cecb3670>Name:</strong> ${ssrInterpolate(application.value.full_name)}</p><p data-v-cecb3670><strong data-v-cecb3670>Email:</strong> ${ssrInterpolate(application.value.email)}</p><p data-v-cecb3670><strong data-v-cecb3670>Phone:</strong> ${ssrInterpolate(application.value.phone_number)}</p><p data-v-cecb3670><strong data-v-cecb3670>Country:</strong> ${ssrInterpolate(application.value.country)}</p><p data-v-cecb3670><strong data-v-cecb3670>City:</strong> ${ssrInterpolate(application.value.city)}</p><p data-v-cecb3670><strong data-v-cecb3670>Address:</strong> ${ssrInterpolate(application.value.address)}</p></div></div><div class="card mb-3" data-v-cecb3670><div class="card-header" data-v-cecb3670><strong data-v-cecb3670>Education</strong></div><div class="card-body" data-v-cecb3670><p data-v-cecb3670><strong data-v-cecb3670>Education Level:</strong> ${ssrInterpolate(application.value.education_level)}</p><p data-v-cecb3670><strong data-v-cecb3670>Institution:</strong> ${ssrInterpolate(application.value.institution)}</p></div></div><div class="card mb-3" data-v-cecb3670><div class="card-header" data-v-cecb3670><strong data-v-cecb3670>Motivation Statement</strong></div><div class="card-body" data-v-cecb3670>${ssrInterpolate(application.value.motivation_statement)}</div></div><div class="card mb-3" data-v-cecb3670><div class="card-header" data-v-cecb3670><strong data-v-cecb3670>Cover Letter</strong></div><div class="card-body" data-v-cecb3670>${ssrInterpolate(application.value.cover_letter)}</div></div></div><div class="col-md-5" data-v-cecb3670><div class="card mb-3" data-v-cecb3670><div class="card-header" data-v-cecb3670><strong data-v-cecb3670>Application Status</strong></div><div class="card-body" data-v-cecb3670><select class="form-select" data-v-cecb3670><option value="pending" data-v-cecb3670${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "pending") : ssrLooseEqual(application.value.status, "pending")) ? " selected" : ""}>Pending</option><option value="under_review" data-v-cecb3670${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "under_review") : ssrLooseEqual(application.value.status, "under_review")) ? " selected" : ""}>Under Review</option><option value="shortlisted" data-v-cecb3670${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "shortlisted") : ssrLooseEqual(application.value.status, "shortlisted")) ? " selected" : ""}>Shortlisted</option><option value="accepted" data-v-cecb3670${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "accepted") : ssrLooseEqual(application.value.status, "accepted")) ? " selected" : ""}>Accepted</option><option value="rejected" data-v-cecb3670${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "rejected") : ssrLooseEqual(application.value.status, "rejected")) ? " selected" : ""}>Rejected</option><option value="withdrawn" data-v-cecb3670${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "withdrawn") : ssrLooseEqual(application.value.status, "withdrawn")) ? " selected" : ""}>Withdrawn</option></select></div></div><div class="card mb-3" data-v-cecb3670><div class="card-header" data-v-cecb3670><strong data-v-cecb3670>Score</strong></div><div class="card-body" data-v-cecb3670><input${ssrRenderAttr("value", application.value.score)} type="number" class="form-control" placeholder="Score (0-100)" data-v-cecb3670></div></div><div class="card mb-3" data-v-cecb3670><div class="card-header" data-v-cecb3670><strong data-v-cecb3670>Interview</strong></div><div class="card-body" data-v-cecb3670><label data-v-cecb3670>Schedule Interview</label><input${ssrRenderAttr("value", application.value.interview_scheduled)} type="datetime-local" class="form-control mb-2" data-v-cecb3670><label data-v-cecb3670>Interview Result</label><select class="form-select" data-v-cecb3670><option value="pending" data-v-cecb3670${ssrIncludeBooleanAttr(Array.isArray(application.value.interview_result) ? ssrLooseContain(application.value.interview_result, "pending") : ssrLooseEqual(application.value.interview_result, "pending")) ? " selected" : ""}>Pending</option><option value="pass" data-v-cecb3670${ssrIncludeBooleanAttr(Array.isArray(application.value.interview_result) ? ssrLooseContain(application.value.interview_result, "pass") : ssrLooseEqual(application.value.interview_result, "pass")) ? " selected" : ""}>Pass</option><option value="fail" data-v-cecb3670${ssrIncludeBooleanAttr(Array.isArray(application.value.interview_result) ? ssrLooseContain(application.value.interview_result, "fail") : ssrLooseEqual(application.value.interview_result, "fail")) ? " selected" : ""}>Fail</option></select></div></div><div class="card mb-3" data-v-cecb3670><div class="card-header" data-v-cecb3670><strong data-v-cecb3670>Documents</strong></div><div class="card-body" data-v-cecb3670>`);
        if (application.value.resume_cv) {
          _push(`<a${ssrRenderAttr("href", application.value.resume_cv)} target="_blank" class="btn btn-outline-primary w-100 mb-2" data-v-cecb3670> View CV </a>`);
        } else {
          _push(`<!---->`);
        }
        if (application.value.transcript) {
          _push(`<a${ssrRenderAttr("href", application.value.transcript)} target="_blank" class="btn btn-outline-secondary w-100 mb-2" data-v-cecb3670> View Transcript </a>`);
        } else {
          _push(`<!---->`);
        }
        if (application.value.portfolio_link) {
          _push(`<a${ssrRenderAttr("href", application.value.portfolio_link)} target="_blank" class="btn btn-outline-dark w-100" data-v-cecb3670> Portfolio </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="card mb-3" data-v-cecb3670><div class="card-header" data-v-cecb3670><strong data-v-cecb3670>Reviewer Notes</strong></div><div class="card-body" data-v-cecb3670><textarea rows="4" class="form-control" data-v-cecb3670>${ssrInterpolate(application.value.review_comments)}</textarea></div></div><button class="btn btn-success w-100" data-v-cecb3670> Save Review </button></div></div></section>`);
      } else {
        _push(`<div class="text-center mt-5" data-v-cecb3670> Loading application... </div>`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/mod/applications/kk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kk = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cecb3670"]]);

export { kk as default };
//# sourceMappingURL=kk-DJROHZV5.mjs.map
