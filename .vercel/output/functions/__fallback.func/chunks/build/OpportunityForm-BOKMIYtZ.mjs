import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, f as useRouter } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { i as internships } from './internships-CK2Y52Ka.mjs';
import { f as fellowships, g as grants } from './grants-9_MDG5Dl.mjs';
import { j as jobs } from './jobs-BmqpPP1y.mjs';
import { s as scholarships } from './scholarships-CJvkA768.mjs';

const competitions = [
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index",
    title: "Index",
    description: "Read more about Index."
  },
  {
    slug: "index-copy",
    title: "Index (Copy)",
    description: "Read more about Index (Copy)."
  }
];
const _sfc_main = {
  __name: "OpportunityForm",
  __ssrInlineRender: true,
  setup(__props) {
    const slugsLists = [
      { type: ["competition"], key: competitions },
      { type: ["internship"], key: internships },
      { type: ["fellowships"], key: fellowships },
      { type: ["grants"], key: grants },
      { type: ["job"], key: jobs },
      { type: ["training"], key: jobs },
      { type: ["scholarship"], key: scholarships }
    ];
    useRouter();
    useDataStore();
    const loading = ref(false);
    ref(false);
    const activeType = ref("");
    const opportunityCategories = ref([]);
    const opportunityTypes = ref([]);
    const detailSections = [
      { type: ["scholarship"], key: "study_destination", label: "Study Destination", input_placeholder: "Enter destination" },
      { type: ["scholarship"], key: "study_levels", label: "Levels of Study", input_placeholder: "Enter level(Undergraduate, Masters, phd)" },
      { type: ["scholarship"], key: "fields_of_study", label: "Fields of Study", input_placeholder: "Enter field" },
      { type: ["job", "internship", "scholarship", "competition", "funding", "training"], key: "benefits", label: "Benefits", input_placeholder: "Enter benefit" },
      { type: ["job", "internship", "scholarship", "competition", "funding", "training"], key: "documents_required", label: "Documents Required", input_placeholder: "Enter document" },
      { type: ["job", "internship"], key: "duties_and_responsibilities", label: "Duties & Responsibilities", input_placeholder: "Enter duty" },
      { type: ["job", "internship"], key: "skills_and_competencies", label: "Skills & Competencies", input_placeholder: "Enter skill" },
      { type: ["training"], key: "topics_covered", label: "Topics Covered", input_placeholder: "Enter topic" },
      { type: ["competition"], key: "prizes", label: "Prizes", input_placeholder: "Enter prize" },
      { type: ["job", "internship", "scholarship", "competition", "funding", "training"], key: "requirements", label: "Requirements", input_placeholder: "Enter requirement" }
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
    const form = ref({
      // Common fields
      title: "",
      description: [],
      category: activeType.value,
      // Default category
      opportunity_type: "",
      status: "Open",
      provider: {
        organization_name: "",
        organization_type: "",
        organization_logo: ""
      },
      host_country: "",
      location: {},
      // general location
      tags: [],
      // Type-specific details
      details: {
        slugs: [],
        // Scholarship
        study_destination: [],
        study_levels: [],
        fields_of_study: [],
        benefits: [],
        requirements: [],
        documents_required: [],
        skills_and_competencies: [],
        duties_and_responsibilities: [],
        prizes: [],
        topics_covered: [],
        application: {
          application_fee: "",
          application_mode: "",
          application_link: "",
          deadline: "",
          procedure: []
        },
        selection: {
          selection_criteria: [],
          selection_process: [],
          notification_method: [],
          target_group: []
        },
        // Job
        provider: {
          founded_year: "",
          headquarters: "",
          group_affiliation: ""
        },
        job_location: {
          city: "",
          sector: "",
          work_mode: "Onsite",
          travel_required: false,
          travel_scope: ""
        },
        employment_details: {
          position: "",
          contract_type: "",
          duration: "",
          employment_type: ""
        },
        eligibility: {
          eligible_nationalities: "",
          age_limit: "",
          education_requirements: { minimum: "" },
          experience_required: "",
          sector_knowledge: []
        },
        internship_details: {
          duration: "",
          start_date: "",
          stipend: { paid: false, amount: "" }
        },
        // Grant
        funding_details: {
          funding_type: "",
          amount: "",
          disbursement_method: ""
        },
        // Competition
        competition_details: {
          format: "",
          team_allowed: true
        },
        // Training
        training_location: { city: "", mode: "" },
        training_details: {
          duration: "",
          training_type: "",
          certification: true
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container pb-4" }, _attrs))} data-v-b350b310><header class="d-flex align-items-center p-3 rounded shadow-sm bg-primary text-white" data-v-b350b310><button class="btn text-white me-3" data-v-b350b310>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:arrow-left" }, null, _parent));
      _push(`</button><h4 class="m-0" data-v-b350b310>Create <span class="text-warning" data-v-b350b310>${ssrInterpolate(activeType.value)}</span> Opportunity</h4></header><section class="mb-4" data-v-b350b310><div class="card shadow-sm p-3 bg-light rounded" data-v-b350b310><h6 class="fw-bold mb-3" data-v-b350b310>Select Type Of Opportunity</h6><div class="d-flex flex-wrap gap-2" data-v-b350b310><!--[-->`);
      ssrRenderList(opportunityCategories.value, (cat) => {
        _push(`<button class="${ssrRenderClass([activeType.value === cat.key ? "btn-warning text-dark" : "btn-outline-primary", "btn"])}" data-v-b350b310>${ssrInterpolate(cat.name)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="rowxx g-3" data-v-b350b310><div class="col-md-12" data-v-b350b310><div class="card shadow-sm p-3 rounded border-primary" data-v-b350b310><h6 class="fw-bold mb-3 text-primary" data-v-b350b310>Basic Information</h6><div class="mb-3" data-v-b350b310></div><div data-v-b350b310><label class="form-label fw-bold" data-v-b350b310>Title *</label><div class="d-flex align-items-center" data-v-b350b310>`);
      _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:heading" }, null, _parent));
      _push(`<input type="text"${ssrRenderAttr("value", form.value.title)} class="form-control" placeholder="Enter title" data-v-b350b310></div></div><div class="mb-3" data-v-b350b310><label class="form-label fw-bold" data-v-b350b310>Description *</label><!--[-->`);
      ssrRenderList(form.value.description, (desc, i) => {
        _push(`<div class="d-flex mb-2 align-items-center" data-v-b350b310><div class="me-3" data-v-b350b310>${ssrInterpolate(i)}</div>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fa6-solid:align-left" }, null, _parent));
        _push(`<div class="d-flex w-100 align-items-center justify-space-between" data-v-b350b310><textarea class="form-control" rows="3" placeholder="Enter description" data-v-b350b310>${ssrInterpolate(form.value.description[i])}</textarea><button class="btn btn-danger h-20" data-v-b350b310>\u2715</button></div></div>`);
      });
      _push(`<!--]--></div><button class="btn btn-outline-primary btn-sm" data-v-b350b310>+ Add paragraph</button></div></div><div class="col-md-12" data-v-b350b310><div class="card shadow-sm p-3 rounded border-success" data-v-b350b310><h6 class="fw-bold mb-3 text-success" data-v-b350b310>Status &amp; Type</h6><div class="" data-v-b350b310><div class="mb-3" data-v-b350b310><label class="form-label fw-bold" data-v-b350b310>Status *</label><select class="form-select" data-v-b350b310><option value="Open" data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.status) ? ssrLooseContain(form.value.status, "Open") : ssrLooseEqual(form.value.status, "Open")) ? " selected" : ""}>Open</option><option value="Closed" data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.status) ? ssrLooseContain(form.value.status, "Closed") : ssrLooseEqual(form.value.status, "Closed")) ? " selected" : ""}>Closed</option><option value="Upcoming" data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.status) ? ssrLooseContain(form.value.status, "Upcoming") : ssrLooseEqual(form.value.status, "Upcoming")) ? " selected" : ""}>Upcoming</option></select></div><div class="mb-3" data-v-b350b310><label class="form-label fw-bold" data-v-b350b310>Opportunity Type *</label><select class="form-select" data-v-b350b310><option disabled value="" data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.opportunity_type) ? ssrLooseContain(form.value.opportunity_type, "") : ssrLooseEqual(form.value.opportunity_type, "")) ? " selected" : ""}>Select type</option><!--[-->`);
      ssrRenderList(opportunityTypes.value, (t) => {
        _push(`<option${ssrRenderAttr("value", t.name)} data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.opportunity_type) ? ssrLooseContain(form.value.opportunity_type, t.name) : ssrLooseEqual(form.value.opportunity_type, t.name)) ? " selected" : ""}>${ssrInterpolate(t.name)}</option>`);
      });
      _push(`<!--]--></select></div></div></div></div></section><section class="rowxx g-3 mt-3 mb-3" data-v-b350b310><div class="col-md-12" data-v-b350b310><div class="card shadow-sm p-3 rounded border-info" data-v-b350b310><h6 class="fw-bold mb-3 text-info" data-v-b350b310>Organization</h6><div class="mb-3" data-v-b350b310><label class="form-label" data-v-b350b310>Organization Name</label><input${ssrRenderAttr("value", form.value.provider.organization_name)} class="form-control" placeholder="Organization Name" data-v-b350b310></div><div class="mb-3" data-v-b350b310><label class="form-label" data-v-b350b310>Organization Type</label><input${ssrRenderAttr("value", form.value.provider.organization_type)} class="form-control" placeholder="Organization Type" data-v-b350b310></div><div class="mb-3" data-v-b350b310><label class="form-label" data-v-b350b310>Organization Logo URL</label><input${ssrRenderAttr("value", form.value.provider.organization_logo)} class="form-control" placeholder="Logo URL" data-v-b350b310></div></div></div><div class="col-md-12" data-v-b350b310><div class="card shadow-sm p-3 rounded border-warning" data-v-b350b310><h6 class="fw-bold mb-3 text-warning" data-v-b350b310>Location &amp; Work Mode</h6><div class="" data-v-b350b310><div class="mt-5 mb-3" data-v-b350b310><label class="form-label" data-v-b350b310>Country</label><input${ssrRenderAttr("value", form.value.host_country)} class="form-control" placeholder="Country" data-v-b350b310></div><div class="mb-3" data-v-b350b310><label class="form-label" data-v-b350b310>City</label><input${ssrRenderAttr("value", form.value.location.city)} class="form-control" placeholder="City" data-v-b350b310></div><div class="mb-3" data-v-b350b310><label class="form-label" data-v-b350b310>Mode</label><select class="form-select" data-v-b350b310><option data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.location.mode) ? ssrLooseContain(form.value.location.mode, null) : ssrLooseEqual(form.value.location.mode, null)) ? " selected" : ""}>In-person</option><option data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.location.mode) ? ssrLooseContain(form.value.location.mode, null) : ssrLooseEqual(form.value.location.mode, null)) ? " selected" : ""}>Online</option><option data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.location.mode) ? ssrLooseContain(form.value.location.mode, null) : ssrLooseEqual(form.value.location.mode, null)) ? " selected" : ""}>Hybrid</option></select></div></div></div></div></section><section class="rowxx g-3" data-v-b350b310><div class="col-md-12" data-v-b350b310><div class="card shadow-sm mt-3 border-secondary" data-v-b350b310><div class="card-body" data-v-b350b310><div class="mb-3" data-v-b350b310><label class="form-label fw-semibold" data-v-b350b310><i class="fas fa-laptop-house me-2 text-primary" data-v-b350b310></i> Mode (In-person / Online / Hybrid) </label><select class="form-select" data-v-b350b310><option data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.location.mode) ? ssrLooseContain(form.value.location.mode, null) : ssrLooseEqual(form.value.location.mode, null)) ? " selected" : ""}>In-person</option><option data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.location.mode) ? ssrLooseContain(form.value.location.mode, null) : ssrLooseEqual(form.value.location.mode, null)) ? " selected" : ""}>Online</option><option data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.location.mode) ? ssrLooseContain(form.value.location.mode, null) : ssrLooseEqual(form.value.location.mode, null)) ? " selected" : ""}>Hybrid</option></select></div>`);
      if (form.value.location.mode !== "Online") {
        _push(`<div data-v-b350b310><label class="form-label fw-semibold" data-v-b350b310><i class="fas fa-industry me-2 text-primary" data-v-b350b310></i> Sector </label><input class="form-control"${ssrRenderAttr("value", form.value.location.sector)} placeholder="Technology, Finance, Education..." data-v-b350b310></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-md-12" data-v-b350b310><div class="card shadow-sm mt-3 border-secondary" data-v-b350b310><div class="card-body" data-v-b350b310><div class="mb-3" data-v-b350b310><label class="form-label fw-semibold" data-v-b350b310><i class="fas fa-briefcase me-2 text-success" data-v-b350b310></i> Work / Study Mode </label><select class="form-select" data-v-b350b310><option data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.location.work_mode) ? ssrLooseContain(form.value.location.work_mode, null) : ssrLooseEqual(form.value.location.work_mode, null)) ? " selected" : ""}>Onsite</option><option data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.location.work_mode) ? ssrLooseContain(form.value.location.work_mode, null) : ssrLooseEqual(form.value.location.work_mode, null)) ? " selected" : ""}>Remote</option><option data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.location.work_mode) ? ssrLooseContain(form.value.location.work_mode, null) : ssrLooseEqual(form.value.location.work_mode, null)) ? " selected" : ""}>Hybrid</option></select></div><div class="mb-3" data-v-b350b310><label class="form-label fw-semibold" data-v-b350b310><i class="fas fa-plane me-2 text-warning" data-v-b350b310></i> Travel Required </label><div class="form-check" data-v-b350b310><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.location.travel_required) ? ssrLooseContain(form.value.location.travel_required, null) : form.value.location.travel_required) ? " checked" : ""} data-v-b350b310><label class="form-check-label" data-v-b350b310> Yes, travel is required </label></div></div>`);
      if (form.value.location.travel_required) {
        _push(`<div data-v-b350b310><label class="form-label fw-semibold" data-v-b350b310><i class="fas fa-route me-2 text-danger" data-v-b350b310></i> Travel Scope </label><input class="form-control"${ssrRenderAttr("value", form.value.location.travel_scope)} placeholder="Local / Regional / International" data-v-b350b310></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><div class="rowxx g-3" data-v-b350b310><!--[-->`);
      ssrRenderList(otherDynamicSections.filter((s) => s.type.includes(activeType.value)), (section) => {
        _push(`<div class="col-md-12 mt-5" data-v-b350b310><div class="" data-v-b350b310><div class="card" data-v-b350b310><div class="card-body" data-v-b350b310><h6 class="fw-bold text-info mb-3" data-v-b350b310>${ssrInterpolate(section.label)}</h6><!--[-->`);
        ssrRenderList(section.fields, (field) => {
          _push(`<div class="mb-3" data-v-b350b310><label class="form-label fw-semibold" data-v-b350b310>${ssrInterpolate(field.label)}</label>`);
          if (field.type === "text") {
            _push(`<input class="form-control"${ssrRenderAttr("value", form.value.details[section.key][field.key])}${ssrRenderAttr("placeholder", field.input_placeholder || field.label)} data-v-b350b310>`);
          } else if (field.type === "number") {
            _push(`<input type="number" class="form-control"${ssrRenderAttr("value", form.value.details[section.key][field.key])} data-v-b350b310>`);
          } else if (field.type === "date") {
            _push(`<input type="date" class="form-control"${ssrRenderAttr("value", form.value.details[section.key][field.key])} data-v-b350b310>`);
          } else if (field.type === "boolean") {
            _push(`<div class="form-check" data-v-b350b310><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.details[section.key][field.key]) ? ssrLooseContain(form.value.details[section.key][field.key], null) : form.value.details[section.key][field.key]) ? " checked" : ""} data-v-b350b310><label class="form-check-label" data-v-b350b310>${ssrInterpolate(field.label)}</label></div>`);
          } else if (field.type === "select") {
            _push(`<select class="form-select" data-v-b350b310><option disabled value="" data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.details[section.key][field.key]) ? ssrLooseContain(form.value.details[section.key][field.key], "") : ssrLooseEqual(form.value.details[section.key][field.key], "")) ? " selected" : ""}> Select ${ssrInterpolate(field.label)}</option><!--[-->`);
            ssrRenderList(field.options, (opt) => {
              _push(`<option${ssrRenderAttr("value", opt)} data-v-b350b310${ssrIncludeBooleanAttr(Array.isArray(form.value.details[section.key][field.key]) ? ssrLooseContain(form.value.details[section.key][field.key], opt) : ssrLooseEqual(form.value.details[section.key][field.key], opt)) ? " selected" : ""}>${ssrInterpolate(opt)}</option>`);
            });
            _push(`<!--]--></select>`);
          } else if (field.type === "list") {
            _push(`<div data-v-b350b310><!--[-->`);
            ssrRenderList(form.value.details[section.key][field.key], (item, i) => {
              _push(`<div class="input-group mb-2" data-v-b350b310><input class="form-control"${ssrRenderAttr("value", form.value.details[section.key][field.key][i])}${ssrRenderAttr("placeholder", field.input_placeholder || field.label)} data-v-b350b310><button class="btn btn-danger" data-v-b350b310> \u2715 </button></div>`);
            });
            _push(`<!--]--><button class="btn btn-outline-primary btn-sm" data-v-b350b310> + Add ${ssrInterpolate(field.label)}</button></div>`);
          } else if (field.type === "dict") {
            _push(`<div class="border rounded p-3 bg-light" data-v-b350b310><!--[-->`);
            ssrRenderList(field.subfields, (sub) => {
              _push(`<div class="mb-2" data-v-b350b310><label class="form-label small" data-v-b350b310>${ssrInterpolate(sub.label)}</label>`);
              if (sub.type !== "boolean") {
                _push(`<input class="form-control"${ssrRenderAttr("value", form.value.details[section.key][field.key][sub.key])} data-v-b350b310>`);
              } else {
                _push(`<div class="form-check" data-v-b350b310><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.details[section.key][field.key][sub.key]) ? ssrLooseContain(form.value.details[section.key][field.key][sub.key], null) : form.value.details[section.key][field.key][sub.key]) ? " checked" : ""} data-v-b350b310><label class="form-check-label" data-v-b350b310>${ssrInterpolate(sub.label)}</label></div>`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(detailSections.filter((s) => s.type.includes(activeType.value)), (section) => {
        _push(`<div class="col-md-12 mt-5" data-v-b350b310><div class="card shadow-sm border-secondary" data-v-b350b310><div class="card-body" data-v-b350b310><h6 class="fw-bold text-secondary mb-3" data-v-b350b310>${ssrInterpolate(section.label)}</h6><!--[-->`);
        ssrRenderList(form.value.details[section.key], (item, i) => {
          _push(`<div class="input-group mb-2" data-v-b350b310><input class="form-control"${ssrRenderAttr("value", form.value.details[section.key][i])}${ssrRenderAttr("placeholder", section.input_placeholder)} data-v-b350b310><button class="btn btn-danger" data-v-b350b310> \u2715 </button></div>`);
        });
        _push(`<!--]--><button class="btn btn-outline-primary btn-sm" data-v-b350b310> + Add ${ssrInterpolate(section.label)}</button></div></div></div>`);
      });
      _push(`<!--]--></div><section class="mb-4" data-v-b350b310><div class="card shadow-sm p-3 rounded border-dark" data-v-b350b310><div class="" data-v-b350b310></div><h6 class="fw-bold mb-3 text-dark" data-v-b350b310>Select Slugs</h6><div class="" data-v-b350b310><!--[-->`);
      ssrRenderList(slugsLists.filter((s_l) => s_l.type.includes(activeType.value)), (slug_type) => {
        _push(`<div class="grid-2 mb-0" data-v-b350b310><!--[-->`);
        ssrRenderList(slug_type.key, (slug) => {
          _push(`<div class="card" data-v-b350b310><div class="px-1 py-1" data-v-b350b310><div class="form-check" data-v-b350b310><input class="form-check-input" type="checkbox"${ssrRenderAttr("value", slug.slug)}${ssrIncludeBooleanAttr(Array.isArray(form.value.details.slugs) ? ssrLooseContain(form.value.details.slugs, slug.slug) : form.value.details.slugs) ? " checked" : ""}${ssrRenderAttr("id", slug.slug)} data-v-b350b310><label class="form-check-label"${ssrRenderAttr("for", slug.slug)} data-v-b350b310>${ssrInterpolate(slug.title)}</label></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></section><section class="mb-4" data-v-b350b310><div class="card shadow-sm p-3 rounded border-dark" data-v-b350b310><h6 class="fw-bold mb-3 text-dark" data-v-b350b310>Tags</h6><!--[-->`);
      ssrRenderList(form.value.tags, (tag, i) => {
        _push(`<div class="input-group mb-2" data-v-b350b310><input${ssrRenderAttr("value", form.value.tags[i])} class="form-control" placeholder="Tag" data-v-b350b310><button class="btn btn-danger" data-v-b350b310>\u2715</button></div>`);
      });
      _push(`<!--]--><button class="btn btn-outline-dark btn-sm" data-v-b350b310>+ Add Tag</button></div></section><div class="d-flex justify-content-end gap-2 mb-5" data-v-b350b310><button class="btn btn-primary"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-b350b310>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm me-2" data-v-b350b310></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Save ${ssrInterpolate(_ctx.type)}</button><button class="btn btn-outline-primary" data-v-b350b310>Preview ${ssrInterpolate(_ctx.type)}</button></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OpportunityForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OpportunityForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b350b310"]]);

export { OpportunityForm as O };
//# sourceMappingURL=OpportunityForm-BOKMIYtZ.mjs.map
