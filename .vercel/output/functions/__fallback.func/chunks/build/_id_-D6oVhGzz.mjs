import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { f as formatDate } from './utils-C8zi-Gnd.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useDataStore();
    const application = ref(null);
    const rubric = ref({
      "Education": { value: 0, weight: 30 },
      "Experience": { value: 0, weight: 30 },
      "Skills": { value: 0, weight: 20 },
      "Motivation": { value: 0, weight: 20 }
    });
    const totalScore = computed(() => {
      let total = 0;
      for (const key in rubric.value) {
        total += rubric.value[key].value * rubric.value[key].weight / 100;
      }
      return total.toFixed(2);
    });
    const timeline = ref([]);
    const aiRanking = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "admin-application-dashboard" }, _attrs))} data-v-ecbfde6e><header class="app-header d-flex justify-content-between align-items-center" data-v-ecbfde6e><h3 data-v-ecbfde6e>Application Dashboard</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/adm/prt/applications",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back to Applications`);
          } else {
            return [
              createTextVNode("Back to Applications")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
      if (application.value) {
        _push(`<section class="mt-4" data-v-ecbfde6e><div class="row" data-v-ecbfde6e><div class="col-lg-6" data-v-ecbfde6e><div class="card mb-3" data-v-ecbfde6e><div class="card-header" data-v-ecbfde6e><strong data-v-ecbfde6e>Applicant Information</strong></div><div class="card-body" data-v-ecbfde6e><p data-v-ecbfde6e><strong data-v-ecbfde6e>Name:</strong> ${ssrInterpolate(application.value.full_name)}</p><p data-v-ecbfde6e><strong data-v-ecbfde6e>Email:</strong> ${ssrInterpolate(application.value.email)}</p><p data-v-ecbfde6e><strong data-v-ecbfde6e>Phone:</strong> ${ssrInterpolate(application.value.phone_number)}</p><p data-v-ecbfde6e><strong data-v-ecbfde6e>Country/City:</strong> ${ssrInterpolate(application.value.country)}, ${ssrInterpolate(application.value.city)}</p><p data-v-ecbfde6e><strong data-v-ecbfde6e>Address:</strong> ${ssrInterpolate(application.value.address)}</p><p data-v-ecbfde6e><strong data-v-ecbfde6e>Education:</strong> ${ssrInterpolate(application.value.education_level)} - ${ssrInterpolate(application.value.institution)}</p></div></div><div class="card mb-3" data-v-ecbfde6e><div class="card-header" data-v-ecbfde6e><strong data-v-ecbfde6e>Documents</strong></div><div class="card-body" data-v-ecbfde6e>`);
        if (application.value.resume_cv) {
          _push(`<div data-v-ecbfde6e><strong data-v-ecbfde6e>Resume/CV</strong><iframe${ssrRenderAttr("src", application.value.resume_cv)} class="w-100" style="${ssrRenderStyle({ "height": "400px" })}" data-v-ecbfde6e></iframe></div>`);
        } else {
          _push(`<!---->`);
        }
        if (application.value.transcript) {
          _push(`<div class="mt-3" data-v-ecbfde6e><strong data-v-ecbfde6e>Transcript</strong><iframe${ssrRenderAttr("src", application.value.transcript)} class="w-100" style="${ssrRenderStyle({ "height": "300px" })}" data-v-ecbfde6e></iframe></div>`);
        } else {
          _push(`<!---->`);
        }
        if (application.value.portfolio_link) {
          _push(`<div class="mt-3" data-v-ecbfde6e><strong data-v-ecbfde6e>Portfolio:</strong><a${ssrRenderAttr("href", application.value.portfolio_link)} target="_blank" data-v-ecbfde6e>${ssrInterpolate(application.value.portfolio_link)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="col-lg-6" data-v-ecbfde6e><div class="card mb-3" data-v-ecbfde6e><div class="card-header" data-v-ecbfde6e><strong data-v-ecbfde6e>Application Status</strong></div><div class="card-body" data-v-ecbfde6e><select class="form-select mb-2" data-v-ecbfde6e><option value="pending" data-v-ecbfde6e${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "pending") : ssrLooseEqual(application.value.status, "pending")) ? " selected" : ""}>Pending</option><option value="under_review" data-v-ecbfde6e${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "under_review") : ssrLooseEqual(application.value.status, "under_review")) ? " selected" : ""}>Under Review</option><option value="shortlisted" data-v-ecbfde6e${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "shortlisted") : ssrLooseEqual(application.value.status, "shortlisted")) ? " selected" : ""}>Shortlisted</option><option value="accepted" data-v-ecbfde6e${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "accepted") : ssrLooseEqual(application.value.status, "accepted")) ? " selected" : ""}>Accepted</option><option value="rejected" data-v-ecbfde6e${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "rejected") : ssrLooseEqual(application.value.status, "rejected")) ? " selected" : ""}>Rejected</option><option value="withdrawn" data-v-ecbfde6e${ssrIncludeBooleanAttr(Array.isArray(application.value.status) ? ssrLooseContain(application.value.status, "withdrawn") : ssrLooseEqual(application.value.status, "withdrawn")) ? " selected" : ""}>Withdrawn</option></select><div class="d-flex gap-2" data-v-ecbfde6e><button class="btn btn-success" data-v-ecbfde6e>Bulk Shortlist</button><button class="btn btn-danger" data-v-ecbfde6e>Bulk Reject</button><button class="btn btn-warning" data-v-ecbfde6e>Withdraw</button></div></div></div><div class="card mb-3" data-v-ecbfde6e><div class="card-header" data-v-ecbfde6e><strong data-v-ecbfde6e>Application Scoring Rubric</strong></div><div class="card-body" data-v-ecbfde6e><!--[-->`);
        ssrRenderList(rubric.value, (score, key) => {
          _push(`<div class="mb-2" data-v-ecbfde6e><label data-v-ecbfde6e>${ssrInterpolate(key)} (Weight: ${ssrInterpolate(score.weight)}%)</label><input type="number"${ssrRenderAttr("value", score.value)} class="form-control" min="0" max="100" data-v-ecbfde6e></div>`);
        });
        _push(`<!--]--><div class="mt-2" data-v-ecbfde6e><strong data-v-ecbfde6e>Total Score:</strong> ${ssrInterpolate(totalScore.value)}</div></div></div><div class="card mb-3" data-v-ecbfde6e><div class="card-header" data-v-ecbfde6e><strong data-v-ecbfde6e>Interview</strong></div><div class="card-body" data-v-ecbfde6e><label data-v-ecbfde6e>Schedule Interview</label><input type="datetime-local"${ssrRenderAttr("value", application.value.interview_scheduled)} class="form-control mb-2" data-v-ecbfde6e><label data-v-ecbfde6e>Interview Result</label><select class="form-select" data-v-ecbfde6e><option value="pending" data-v-ecbfde6e${ssrIncludeBooleanAttr(Array.isArray(application.value.interview_result) ? ssrLooseContain(application.value.interview_result, "pending") : ssrLooseEqual(application.value.interview_result, "pending")) ? " selected" : ""}>Pending</option><option value="pass" data-v-ecbfde6e${ssrIncludeBooleanAttr(Array.isArray(application.value.interview_result) ? ssrLooseContain(application.value.interview_result, "pass") : ssrLooseEqual(application.value.interview_result, "pass")) ? " selected" : ""}>Pass</option><option value="fail" data-v-ecbfde6e${ssrIncludeBooleanAttr(Array.isArray(application.value.interview_result) ? ssrLooseContain(application.value.interview_result, "fail") : ssrLooseEqual(application.value.interview_result, "fail")) ? " selected" : ""}>Fail</option></select></div></div><div class="card mb-3" data-v-ecbfde6e><div class="card-header" data-v-ecbfde6e><strong data-v-ecbfde6e>Reviewer Notes</strong></div><div class="card-body" data-v-ecbfde6e><textarea class="form-control" rows="4" data-v-ecbfde6e>${ssrInterpolate(application.value.review_comments)}</textarea></div></div><div class="card mb-3" data-v-ecbfde6e><div class="card-header" data-v-ecbfde6e><strong data-v-ecbfde6e>AI Applicant Ranking</strong></div><div class="card-body" data-v-ecbfde6e>`);
        if (aiRanking.value !== null) {
          _push(`<p data-v-ecbfde6e>Ranking Score: ${ssrInterpolate(aiRanking.value)}</p>`);
        } else {
          _push(`<p class="text-muted" data-v-ecbfde6e>AI ranking not calculated</p>`);
        }
        _push(`</div></div><div class="card mb-3" data-v-ecbfde6e><div class="card-header" data-v-ecbfde6e><strong data-v-ecbfde6e>Application Timeline</strong></div><div class="card-body" data-v-ecbfde6e><ul class="timeline list-unstyled" data-v-ecbfde6e><!--[-->`);
        ssrRenderList(timeline.value, (event) => {
          _push(`<li data-v-ecbfde6e><strong data-v-ecbfde6e>${ssrInterpolate(event.status)}:</strong> ${ssrInterpolate(event.time | ("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate)))} <br data-v-ecbfde6e><em data-v-ecbfde6e>${ssrInterpolate(event.note)}</em></li>`);
        });
        _push(`<!--]--></ul></div></div><button class="btn btn-primary w-100" data-v-ecbfde6e>Save Review</button></div></div></section>`);
      } else {
        _push(`<div class="text-center mt-5" data-v-ecbfde6e> Loading application... </div>`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/dashboard/applications/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ecbfde6e"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-D6oVhGzz.mjs.map
