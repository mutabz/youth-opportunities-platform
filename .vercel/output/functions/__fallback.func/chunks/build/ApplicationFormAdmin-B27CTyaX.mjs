import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { reactive, watch, useSSRContext } from 'vue';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';

const _sfc_main = {
  __name: "ApplicationFormAdmin",
  __ssrInlineRender: true,
  props: {
    initialForm: Object
  },
  emits: ["saved", "cancel"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
    const props = __props;
    useDataStore();
    const form = reactive({
      full_name: ((_a = props.initialForm) == null ? void 0 : _a.full_name) || "",
      email: ((_b = props.initialForm) == null ? void 0 : _b.email) || "",
      phone_number: ((_c = props.initialForm) == null ? void 0 : _c.phone_number) || "",
      date_of_birth: ((_d = props.initialForm) == null ? void 0 : _d.date_of_birth) || "",
      address: ((_e = props.initialForm) == null ? void 0 : _e.address) || "",
      country: ((_f = props.initialForm) == null ? void 0 : _f.country) || "",
      city: ((_g = props.initialForm) == null ? void 0 : _g.city) || "",
      education_level: ((_h = props.initialForm) == null ? void 0 : _h.education_level) || "",
      institution: ((_i = props.initialForm) == null ? void 0 : _i.institution) || "",
      resume_cv: ((_j = props.initialForm) == null ? void 0 : _j.resume_cv) || "",
      transcript: ((_k = props.initialForm) == null ? void 0 : _k.transcript) || "",
      cover_letter: ((_l = props.initialForm) == null ? void 0 : _l.cover_letter) || "",
      motivation_statement: ((_m = props.initialForm) == null ? void 0 : _m.motivation_statement) || "",
      portfolio_link: ((_n = props.initialForm) == null ? void 0 : _n.portfolio_link) || "",
      other_documents: ((_o = props.initialForm) == null ? void 0 : _o.other_documents) ? JSON.stringify(props.initialForm.other_documents, null, 2) : "{}",
      status: ((_p = props.initialForm) == null ? void 0 : _p.status) || "pending",
      score: ((_q = props.initialForm) == null ? void 0 : _q.score) || 0,
      interview_scheduled: ((_r = props.initialForm) == null ? void 0 : _r.interview_scheduled) || "",
      interview_result: ((_s = props.initialForm) == null ? void 0 : _s.interview_result) || "pending",
      notes: ((_t = props.initialForm) == null ? void 0 : _t.notes) || "",
      review_comments: ((_u = props.initialForm) == null ? void 0 : _u.review_comments) || ""
    });
    watch(() => form.other_documents, (val) => {
      try {
        JSON.parse(val);
      } catch {
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><h5>Applicant Info</h5><div class="row"><div class="col-md-6 mb-3"><label class="form-label">Full Name</label><input${ssrRenderAttr("value", form.full_name)} type="text" class="form-control" required></div><div class="col-md-6 mb-3"><label class="form-label">Email</label><input${ssrRenderAttr("value", form.email)} type="email" class="form-control" required></div><div class="col-md-6 mb-3"><label class="form-label">Phone Number</label><input${ssrRenderAttr("value", form.phone_number)} type="text" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">Date of Birth</label><input${ssrRenderAttr("value", form.date_of_birth)} type="date" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">Country</label><input${ssrRenderAttr("value", form.country)} type="text" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">City</label><input${ssrRenderAttr("value", form.city)} type="text" class="form-control"></div><div class="col-md-12 mb-3"><label class="form-label">Address</label><input${ssrRenderAttr("value", form.address)} type="text" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">Education Level</label><input${ssrRenderAttr("value", form.education_level)} type="text" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">Institution</label><input${ssrRenderAttr("value", form.institution)} type="text" class="form-control"></div></div><h5>Documents</h5><div class="mb-3"><label class="form-label">Resume/CV (URL or file path)</label><input${ssrRenderAttr("value", form.resume_cv)} type="text" class="form-control"></div><div class="mb-3"><label class="form-label">Transcript (URL or file path)</label><input${ssrRenderAttr("value", form.transcript)} type="text" class="form-control"></div><div class="mb-3"><label class="form-label">Cover Letter</label><textarea class="form-control" rows="3">${ssrInterpolate(form.cover_letter)}</textarea></div><div class="mb-3"><label class="form-label">Motivation Statement</label><textarea class="form-control" rows="3">${ssrInterpolate(form.motivation_statement)}</textarea></div><div class="mb-3"><label class="form-label">Portfolio Link</label><input${ssrRenderAttr("value", form.portfolio_link)} type="text" class="form-control"></div><div class="mb-3"><label class="form-label">Other Documents (JSON)</label><textarea class="form-control" rows="2">${ssrInterpolate(form.other_documents)}</textarea><small class="text-muted">Example: {&quot;certificates&quot;:[&quot;cert1.pdf&quot;,&quot;cert2.pdf&quot;]}</small></div><h5>Application Details</h5><div class="row"><div class="col-md-6 mb-3"><label class="form-label">Status</label><select class="form-select"><option value="pending"${ssrIncludeBooleanAttr(Array.isArray(form.status) ? ssrLooseContain(form.status, "pending") : ssrLooseEqual(form.status, "pending")) ? " selected" : ""}>Pending</option><option value="under_review"${ssrIncludeBooleanAttr(Array.isArray(form.status) ? ssrLooseContain(form.status, "under_review") : ssrLooseEqual(form.status, "under_review")) ? " selected" : ""}>Under Review</option><option value="shortlisted"${ssrIncludeBooleanAttr(Array.isArray(form.status) ? ssrLooseContain(form.status, "shortlisted") : ssrLooseEqual(form.status, "shortlisted")) ? " selected" : ""}>Shortlisted</option><option value="accepted"${ssrIncludeBooleanAttr(Array.isArray(form.status) ? ssrLooseContain(form.status, "accepted") : ssrLooseEqual(form.status, "accepted")) ? " selected" : ""}>Accepted</option><option value="rejected"${ssrIncludeBooleanAttr(Array.isArray(form.status) ? ssrLooseContain(form.status, "rejected") : ssrLooseEqual(form.status, "rejected")) ? " selected" : ""}>Rejected</option><option value="withdrawn"${ssrIncludeBooleanAttr(Array.isArray(form.status) ? ssrLooseContain(form.status, "withdrawn") : ssrLooseEqual(form.status, "withdrawn")) ? " selected" : ""}>Withdrawn</option></select></div><div class="col-md-6 mb-3"><label class="form-label">Score</label><input${ssrRenderAttr("value", form.score)} type="number" class="form-control" min="0" max="100"></div><div class="col-md-6 mb-3"><label class="form-label">Interview Scheduled</label><input${ssrRenderAttr("value", form.interview_scheduled)} type="datetime-local" class="form-control"></div><div class="col-md-6 mb-3"><label class="form-label">Interview Result</label><select class="form-select"><option value="pending"${ssrIncludeBooleanAttr(Array.isArray(form.interview_result) ? ssrLooseContain(form.interview_result, "pending") : ssrLooseEqual(form.interview_result, "pending")) ? " selected" : ""}>Pending</option><option value="pass"${ssrIncludeBooleanAttr(Array.isArray(form.interview_result) ? ssrLooseContain(form.interview_result, "pass") : ssrLooseEqual(form.interview_result, "pass")) ? " selected" : ""}>Pass</option><option value="fail"${ssrIncludeBooleanAttr(Array.isArray(form.interview_result) ? ssrLooseContain(form.interview_result, "fail") : ssrLooseEqual(form.interview_result, "fail")) ? " selected" : ""}>Fail</option></select></div><div class="col-md-12 mb-3"><label class="form-label">Notes</label><textarea class="form-control" rows="2">${ssrInterpolate(form.notes)}</textarea></div><div class="col-md-12 mb-3"><label class="form-label">Review Comments</label><textarea class="form-control" rows="2">${ssrInterpolate(form.review_comments)}</textarea></div></div><div class="d-flex justify-content-end gap-2 mt-3"><button type="button" class="btn btn-secondary">Cancel</button><button type="submit" class="btn btn-primary">Save Application</button></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ApplicationFormAdmin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ApplicationFormAdmin-B27CTyaX.mjs.map
