import { _ as __nuxt_component_0 } from './nuxt-link-DcvE_fL2.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useDeviceType } from './useDeviceType-BcjKgtk3.mjs';
import { u as useAuth } from './useAuth-Byn3I6j5.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "LoginEnquiry",
  __ssrInlineRender: true,
  setup(__props) {
    const { device } = useDeviceType();
    const { loadingLogin, loadingRegister } = useAuth();
    const activeForm = ref("user-login");
    const showPassword = ref(false);
    const loginForm = ref({
      email: "",
      password: ""
    });
    const registerForm = ref({
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    });
    const partnerForm = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))} data-v-2935e806>`);
      if (unref(device) === "desktop") {
        _push(`<div class="left-panel" data-v-2935e806><div class="brand-logo" data-v-2935e806><div class="logo-placeholder" data-v-2935e806>YOP</div></div><h1 class="hero-text" data-v-2935e806> Welcome to<br data-v-2935e806> YOUTH OPPORTUNITIES<br data-v-2935e806> PLAFORM<br data-v-2935e806><br data-v-2935e806><span class="text-blue" data-v-2935e806>Access Thousands of Opportunities</span></h1><div class="image-collage-placeholder" data-v-2935e806><div class="header" data-v-2935e806><h5 class="text-blue fw-bold text-center" data-v-2935e806>Join us Discover Opportunities That Shape Your Future</h5></div><div class="content" data-v-2935e806><p class="mt-2 mb-2" data-v-2935e806>The Youth Opportunities Platform (YOP) connects young people with life-changing opportunities including scholarships, internships, jobs, training programs, and events from around the world.</p><p class="mt-2 mb-2" data-v-2935e806>Our mission is to empower youth by making access to opportunities simple, transparent, and accessible in one place.</p><p class="mt-2 mb-2" data-v-2935e806>Join thousands of students, graduates, and innovators who use YOP to find opportunities that match their ambitions.</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="right-panel" data-v-2935e806><div class="" data-v-2935e806><h6 class="text-blue fw-bold text-center" data-v-2935e806>Want to browse more opportunities: (Funding &amp; Grants, Internships, Jobs, Scholarships) You&#39;re in right place to be....</h6><div class="right-panel" data-v-2935e806><h6 class="text-blue fw-bold text-center mb-5" data-v-2935e806>Login Or Register to get started</h6><div class="r" data-v-2935e806>`);
      if (unref(activeForm) === "user-login") {
        _push(`<form data-v-2935e806><h2 data-v-2935e806>Login to YOP</h2><h2 class="mb-5" data-v-2935e806>Login as normal user<strong data-v-2935e806> or </strong> <span class="text-blue" data-v-2935e806> Login As admin or partner</span></h2><div class="form-floating mb-3" data-v-2935e806><input type="email" class="form-control" id="loginEmail"${ssrRenderAttr("value", unref(loginForm).email)} placeholder="name@example.com" required data-v-2935e806><label for="loginEmail" data-v-2935e806>Email address</label></div><div class="form-floating mb-3 position-relative" data-v-2935e806><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="form-control" id="loginPassword"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(loginForm).password, null)} placeholder="Password" required data-v-2935e806><label for="loginPassword" data-v-2935e806>Password</label><button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" data-v-2935e806> \u{1F441} </button></div><button type="submit" class="btn-primary" data-v-2935e806>`);
        if (unref(loadingLogin)) {
          _push(`<span data-v-2935e806>Loading...</span>`);
        } else {
          _push(`<span data-v-2935e806>Login</span>`);
        }
        _push(`</button><a href="#" class="forgot-password" data-v-2935e806> Forgot password? </a><div class="divider" data-v-2935e806></div><button type="button" class="btn-secondary" data-v-2935e806> Create new account </button><button class="btn text-center mt-3 text-blue" data-v-2935e806> Create new partner&#39;s account? </button></form>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeForm) === "admin-login") {
        _push(`<form data-v-2935e806><h2 data-v-2935e806>Admin Login <strong data-v-2935e806> or </strong> <span class="text-blue" data-v-2935e806> Login As Normal User</span></h2><div class="form-floating mb-3" data-v-2935e806><input type="email" class="form-control"${ssrRenderAttr("value", unref(loginForm).email)} placeholder="Email" required data-v-2935e806><label data-v-2935e806>Email</label></div><div class="form-floating mb-3 position-relative" data-v-2935e806><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="form-control"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(loginForm).password, null)} placeholder="Password" required data-v-2935e806><button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" data-v-2935e806>\u{1F441}</button><label data-v-2935e806>Password</label></div><button type="submit" class="btn-primary" data-v-2935e806>`);
        if (unref(loadingLogin)) {
          _push(`<span data-v-2935e806>Loading...</span>`);
        } else {
          _push(`<span data-v-2935e806>Login</span>`);
        }
        _push(`</button><a href="#" class="forgot-password" data-v-2935e806> Forgot password? </a><div class="divider" data-v-2935e806></div><button type="button" class="btn-secondary" data-v-2935e806> Create new account </button><button type="button" class="btn text-center mt-3 text-blue" data-v-2935e806> Create new partner&#39;s account? </button></form>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeForm) === "user-reg") {
        _push(`<form data-v-2935e806><h2 data-v-2935e806>Create Account</h2><div class="form-floating mb-3" data-v-2935e806><input type="text" class="form-control" id="regFullName"${ssrRenderAttr("value", unref(registerForm).full_name)} placeholder="Full name" required data-v-2935e806><label for="regFullName" data-v-2935e806>Full name</label></div><div class="form-floating mb-3" data-v-2935e806><input type="email" class="form-control" id="regEmail"${ssrRenderAttr("value", unref(registerForm).email)} placeholder="Email address" required data-v-2935e806><label for="regEmail" data-v-2935e806>Email address</label></div><div class="form-floating mb-3 position-relative" data-v-2935e806><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="form-control" id="regPassword"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(registerForm).password, null)} placeholder="Password" required data-v-2935e806><label for="regPassword" data-v-2935e806>Password</label><button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" data-v-2935e806> \u{1F441} </button></div><div class="form-floating mb-3 position-relative" data-v-2935e806><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="form-control" id="regConfirmPassword"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(registerForm).confirm_password, null)} placeholder="Confirm password" required data-v-2935e806><label for="regConfirmPassword" data-v-2935e806>Confirm password</label><button type="button" class="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2" data-v-2935e806> \u{1F441} </button></div><button type="submit" class="btn-primary w-100" data-v-2935e806>`);
        if (unref(loadingRegister)) {
          _push(`<span data-v-2935e806>Registering...</span>`);
        } else {
          _push(`<span data-v-2935e806>Register</span>`);
        }
        _push(`</button><div class="divider" data-v-2935e806></div><button type="button" class="btn-secondary w-100" data-v-2935e806> Back to Login </button></form>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeForm) === "partner-reg") {
        _push(`<form data-v-2935e806><h2 data-v-2935e806>Partner Registration</h2><div class="form-floating mb-3" data-v-2935e806><input type="text" class="form-control"${ssrRenderAttr("value", unref(partnerForm).organization)} placeholder="Organization Name" required data-v-2935e806><label data-v-2935e806>Organization Name</label></div><div class="form-floating mb-3" data-v-2935e806><input type="text" class="form-control"${ssrRenderAttr("value", unref(partnerForm).representative)} placeholder="Representative Name" required data-v-2935e806><label data-v-2935e806>Representative Name</label></div><div class="form-floating mb-3" data-v-2935e806><input type="email" class="form-control"${ssrRenderAttr("value", unref(partnerForm).email)} placeholder="Email" required data-v-2935e806><label data-v-2935e806>Email</label></div><div class="form-floating mb-3" data-v-2935e806><input type="text" class="form-control"${ssrRenderAttr("value", unref(partnerForm).phone)} placeholder="Phone Number" required data-v-2935e806><label data-v-2935e806>Phone Number</label></div><div class="form-floating mb-3" data-v-2935e806><textarea class="form-control" rows="4" placeholder="Opportunity Description" required data-v-2935e806>${ssrInterpolate(unref(partnerForm).opportunity_description)}</textarea><label data-v-2935e806>Opportunity Description</label></div><button type="submit" class="btn-primary w-100" data-v-2935e806>Submit Partner Application</button><div class="divider" data-v-2935e806></div><button type="button" class="btn-secondary w-100" data-v-2935e806> Back to Login </button></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="footer-logo" data-v-2935e806>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "meta-placeholder"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Go to Home page`);
          } else {
            return [
              createTextVNode("Go to Home page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginEnquiry.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoginEnquiry = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2935e806"]]);
const detailSections = [
  { type: ["scholarship"], key: "study_destination", label: "Study Destination", input_placeholder: "Enter destination" },
  { type: ["scholarship"], key: "study_levels", label: "Levels of Study", input_placeholder: "Enter level(Undergraduate, Masters, phd)" },
  { type: ["scholarship"], key: "fields_of_study", label: "Fields of Study", input_placeholder: "Enter field" },
  { type: ["job", "internship", "scholarship", "competition", "training"], key: "benefits", label: "Benefits", input_placeholder: "Enter benefit" },
  { type: ["job", "internship", "scholarship", "competition", "training"], key: "documents_required", label: "Documents Required", input_placeholder: "Enter document" },
  { type: ["job", "internship"], key: "duties_and_responsibilities", label: "Duties & Responsibilities", input_placeholder: "Enter duty" },
  { type: ["job", "internship"], key: "skills_and_competencies", label: "Skills & Competencies", input_placeholder: "Enter skill" },
  { type: ["training"], key: "topics_covered", label: "Topics Covered", input_placeholder: "Enter topic" },
  { type: ["competition"], key: "prizes", label: "Prizes", input_placeholder: "Enter prize" },
  { type: ["job", "internship", "scholarship", "competition", "training"], key: "requirements", label: "Requirements", input_placeholder: "Enter requirement" }
];
const otherDynamicSections = [
  /* ================= JOB & INTERNSHIP ================= */
  {
    type: ["job", "internship"],
    key: "job_location",
    label: "Job Location",
    fields: [
      { type: "text", key: "city", label: "City", input_placeholder: "City" },
      { type: "text", key: "sector", label: "Sector", input_placeholder: "Sector" },
      { type: "select", key: "work_mode", label: "Work Mode", options: ["Onsite", "Remote", "Hybrid"] },
      { type: "boolean", key: "travel_required", label: "Travel Required" },
      { type: "text", key: "travel_scope", label: "Travel Scope", input_placeholder: "Local / Regional / International" }
    ]
  },
  {
    type: ["job"],
    key: "employment_details",
    label: "Employment Details",
    fields: [
      { type: "text", key: "position", label: "Position" },
      { type: "select", key: "contract_type", label: "Contract Type", options: ["Permanent", "Contract", "Temporary"] },
      { type: "text", key: "duration", label: "Duration" },
      { type: "select", key: "employment_type", label: "Employment Type", options: ["Full-time", "Part-time"] }
    ]
  },
  /* ================= ELIGIBILITY (ALL TYPES) ================= */
  {
    type: ["job", "internship", "scholarship", "competition", "funding", "training"],
    key: "eligibility",
    label: "Eligibility Criteria",
    fields: [
      { type: "text", key: "eligible_nationalities", label: "Eligible Nationalities" },
      { type: "number", key: "age_limit", label: "Age Limit" },
      { type: "dict", key: "education_requirements", label: "Education Requirements", subfields: [
        { key: "minimum", label: "Minimum Education" }
      ] },
      { type: "text", key: "experience_required", label: "Experience Required" },
      { type: "list", key: "sector_knowledge", label: "Sector Knowledge" }
    ]
  },
  {
    type: ["job", "internship", "scholarship", "competition", "funding", "training"],
    key: "application",
    label: "Application Process",
    fields: [
      { type: "text", key: "application_fee", label: "Application Fee" },
      { type: "text", key: "application_mode", label: "Application Mode" },
      { type: "text", key: "application_link", label: "Application Link" },
      { type: "date", key: "deadline", label: "Deadline" },
      { type: "list", key: "procedure", label: "Procedures", input_placeholder: "Step" }
    ]
  },
  /* ================= INTERNSHIP ================= */
  {
    type: ["internship"],
    key: "internship_details",
    label: "Internship Details",
    fields: [
      { type: "text", key: "duration", label: "Duration" },
      { type: "date", key: "start_date", label: "Start Date" },
      { type: "dict", key: "stipend", label: "Stipend", subfields: [
        { type: "boolean", key: "paid", label: "Paid" },
        { type: "text", key: "amount", label: "Amount" }
      ] }
    ]
  },
  /* ================= SCHOLARSHIP ================= */
  {
    type: ["job", "internship", "scholarship", "competition", "funding", "training"],
    key: "selection",
    label: "Selection & Notification",
    fields: [
      { type: "list", key: "selection_criteria", label: "Selection Criteria" },
      { type: "list", key: "selection_process", label: "Selection Process" },
      { type: "list", key: "notification_method", label: "Notification Method" },
      { type: "list", key: "target_group", label: "Target Group" }
    ]
  },
  /* ================= FUNDING / GRANT ================= */
  {
    type: ["funding"],
    key: "funding_details",
    label: "Funding Details",
    fields: [
      { type: "select", key: "funding_type", label: "Funding Type", options: ["Grant", "Seed", "Loan", "Equity"] },
      { type: "text", key: "amount", label: "Amount" },
      { type: "text", key: "disbursement_method", label: "Disbursement Method" }
    ]
  },
  /* ================= COMPETITION ================= */
  {
    type: ["competition"],
    key: "competition_details",
    label: "Competition Details",
    fields: [
      { type: "select", key: "format", label: "Format", options: ["Online", "Physical", "Hybrid"] },
      { type: "boolean", key: "team_allowed", label: "Team Participation Allowed" }
    ]
  },
  /* ================= TRAINING ================= */
  {
    type: ["training"],
    key: "training_location",
    label: "Training Location",
    fields: [
      { type: "text", key: "city", label: "City" },
      { type: "select", key: "mode", label: "Mode", options: ["Online", "Physical", "Hybrid"] }
    ]
  },
  {
    type: ["training"],
    key: "training_details",
    label: "Training Details",
    fields: [
      { type: "text", key: "duration", label: "Duration" },
      { type: "select", key: "training_type", label: "Training Type", options: ["Short Course", "Bootcamp", "Workshop"] },
      { type: "boolean", key: "certification", label: "Certification Provided" }
    ]
  }
];

export { LoginEnquiry as L, detailSections as d, otherDynamicSections as o };
//# sourceMappingURL=opportunitySections-DfZt5Gda.mjs.map
