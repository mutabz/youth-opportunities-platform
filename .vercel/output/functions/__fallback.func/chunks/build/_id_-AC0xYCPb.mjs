import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, f as useRouter, k as useRoute } from './server.mjs';
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
    useRouter();
    const route = useRoute();
    useDataStore();
    const loading = ref(false);
    const preview = ref(false);
    const activeType = ref("");
    const opportunity = ref({});
    route.params.id;
    const opportunityCategories = ref([]);
    const opportunityTypes = ref([]);
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
    const form = ref({
      // Common fields
      title: "",
      description: [],
      category: activeType.value,
      // Default category
      opportunity_type: "",
      status: "Open",
      provider: {},
      host_country: "",
      location: {},
      // general location
      tags: [],
      // Type-specific details
      details: opportunity.value.details
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "item" }, _attrs))} data-v-6fb7e3be><header class="app-header" data-v-6fb7e3be><div class="header-icon-left" data-v-6fb7e3be><i class="fas fa-arrow-left" data-v-6fb7e3be></i></div><span class="header-title" data-v-6fb7e3be>Create <span class="text-capitalize" data-v-6fb7e3be>${ssrInterpolate(_ctx.type)}</span> Opportunity</span></header><section class="mx-2 mt-3" data-v-6fb7e3be><div class="item-card glow-animated" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><div class="sub-title mb-2" data-v-6fb7e3be>Select Type Of Opportunity</div><section class="filters" data-v-6fb7e3be><!--[-->`);
      ssrRenderList(opportunityCategories.value, (cat) => {
        _push(`<div class="${ssrRenderClass([{ active: activeType.value === cat.key }, "filter-chip item-card glow-animated"])}" data-v-6fb7e3be>${ssrInterpolate(cat.name)}</div>`);
      });
      _push(`<!--]--></section></div></div><div class="item-card glow-animated" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Basic Information</h6><div data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Title *</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-heading me-2" data-v-6fb7e3be></i><input class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.title)} placeholder="Title *" data-v-6fb7e3be></div></div><div class="mt-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Description *</div><!--[-->`);
      ssrRenderList(form.value.description, (tag, i) => {
        _push(`<div class="d-flex mb-2 align-items-center" data-v-6fb7e3be><div class="me-3 semi-content" data-v-6fb7e3be>${ssrInterpolate(i)}</div><div class="d-flex align-items-start" data-v-6fb7e3be><i class="fas fa-align-left me-2 mt-2" data-v-6fb7e3be></i><textarea class="android-input semi-content mb-2 w-100" rows="5" cols="100" placeholder="Description *" data-v-6fb7e3be>${ssrInterpolate(form.value.description[i])}</textarea><button class="btn btn-danger btn-sm" data-v-6fb7e3be>\u2715</button></div></div>`);
      });
      _push(`<!--]--><button class="btn btn-outline-primary btn-sm" data-v-6fb7e3be>+ Add description paragraph</button><div class="" data-v-6fb7e3be><span class="semi-content" data-v-6fb7e3be> Contact support for help `);
      if (_ctx.contacts) {
        _push(`<a${ssrRenderAttr("href", "mailto:" + _ctx.contacts.email)} data-v-6fb7e3be>Here</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></div></div></div></div><div class="item-card glow-animated shadow-sm" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><div data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Status *</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-toggle-on me-2" data-v-6fb7e3be></i><select class="android-input semi-content mb-2" data-v-6fb7e3be><option value="Open" data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.status) ? ssrLooseContain(form.value.status, "Open") : ssrLooseEqual(form.value.status, "Open")) ? " selected" : ""}>Open</option><option value="Closed" data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.status) ? ssrLooseContain(form.value.status, "Closed") : ssrLooseEqual(form.value.status, "Closed")) ? " selected" : ""}>Closed</option><option value="Upcoming" data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.status) ? ssrLooseContain(form.value.status, "Upcoming") : ssrLooseEqual(form.value.status, "Upcoming")) ? " selected" : ""}>Upcoming</option></select></div></div><div class="mt-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Select Opportunity Type *</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-layer-group me-2" data-v-6fb7e3be></i><select class="android-input semi-content mb-2" data-v-6fb7e3be><option disabled value="" data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.opportunity_type) ? ssrLooseContain(form.value.opportunity_type, "") : ssrLooseEqual(form.value.opportunity_type, "")) ? " selected" : ""}>Select Opportunity Type</option><!--[-->`);
      ssrRenderList(opportunityTypes.value, (t) => {
        _push(`<option${ssrRenderAttr("value", t.name)} data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.opportunity_type) ? ssrLooseContain(form.value.opportunity_type, t.name) : ssrLooseEqual(form.value.opportunity_type, t.name)) ? " selected" : ""}>${ssrInterpolate(t.name)}</option>`);
      });
      _push(`<!--]--></select></div></div></div></div><div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Organization</h6><div data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Organization Name</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-building me-2" data-v-6fb7e3be></i><input class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.provider.organization_name)} placeholder="Organization Name" data-v-6fb7e3be></div></div><div class="mt-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Organization Type</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-sitemap me-2" data-v-6fb7e3be></i><input class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.provider.organization_type)} placeholder="Organization Type" data-v-6fb7e3be></div></div></div></div><div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><div data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Founded Year</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-calendar-alt me-2" data-v-6fb7e3be></i>`);
      if (form.value.details.provider) {
        _push(`<input type="number" min="1800" max="2100" maxlength="4" class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.details.provider.founded_year)} placeholder="Founded Year" data-v-6fb7e3be>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Headquarters</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-map-marker-alt me-2" data-v-6fb7e3be></i>`);
      if (form.value.details.provider) {
        _push(`<input class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.details.provider.headquarters)} placeholder="Headquarters" data-v-6fb7e3be>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><div data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Group Affiliation</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-users me-2" data-v-6fb7e3be></i>`);
      if (form.value.details.provider) {
        _push(`<input class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.details.provider.group_affiliation)} placeholder="Group Affiliation" data-v-6fb7e3be>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Organization Logo URL</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-image me-2" data-v-6fb7e3be></i><input class="android-input semi-content"${ssrRenderAttr("value", form.value.provider.organization_logo)} placeholder="Organization Logo URL" data-v-6fb7e3be></div></div></div></div><div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Location &amp; Work Mode</h6><div data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Host Country</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-globe-africa me-2" data-v-6fb7e3be></i><input class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.host_country)} placeholder="Host Country" data-v-6fb7e3be></div></div><div class="mt-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>City</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-city me-2" data-v-6fb7e3be></i><input class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.location.city)} placeholder="City" data-v-6fb7e3be></div></div></div></div><div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><div data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Mode (In-person / Online / Hybrid)</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-laptop-house me-2" data-v-6fb7e3be></i><select class="android-input semi-content mb-2" data-v-6fb7e3be><option data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.location.mode) ? ssrLooseContain(form.value.location.mode, null) : ssrLooseEqual(form.value.location.mode, null)) ? " selected" : ""}>In-person</option><option data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.location.mode) ? ssrLooseContain(form.value.location.mode, null) : ssrLooseEqual(form.value.location.mode, null)) ? " selected" : ""}>Online</option><option data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.location.mode) ? ssrLooseContain(form.value.location.mode, null) : ssrLooseEqual(form.value.location.mode, null)) ? " selected" : ""}>Hybrid</option></select></div></div>`);
      if (form.value.location.mode !== "Online") {
        _push(`<div class="mt-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Sector</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-industry me-2" data-v-6fb7e3be></i>`);
        if (form.value.location) {
          _push(`<input class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.location.sector)} placeholder="Sector" data-v-6fb7e3be>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><div data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Work / Study Mode</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-briefcase me-2" data-v-6fb7e3be></i>`);
      if (form.value.location) {
        _push(`<select class="android-input semi-content mb-2" data-v-6fb7e3be><option data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.location.work_mode) ? ssrLooseContain(form.value.location.work_mode, null) : ssrLooseEqual(form.value.location.work_mode, null)) ? " selected" : ""}>Onsite</option><option data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.location.work_mode) ? ssrLooseContain(form.value.location.work_mode, null) : ssrLooseEqual(form.value.location.work_mode, null)) ? " selected" : ""}>Remote</option><option data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.location.work_mode) ? ssrLooseContain(form.value.location.work_mode, null) : ssrLooseEqual(form.value.location.work_mode, null)) ? " selected" : ""}>Hybrid</option></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Travel Required</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-plane me-2" data-v-6fb7e3be></i><div class="form-check mb-2" data-v-6fb7e3be><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.location.travel_required) ? ssrLooseContain(form.value.location.travel_required, null) : form.value.location.travel_required) ? " checked" : ""} data-v-6fb7e3be><label class="form-check-label" data-v-6fb7e3be>Yes, travel is required</label></div></div></div>`);
      if (form.value.location.travel_required) {
        _push(`<div class="mt-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>Travel Scope</div><div class="d-flex align-items-center" data-v-6fb7e3be><i class="fas fa-route me-2" data-v-6fb7e3be></i><input class="android-input semi-content mb-2"${ssrRenderAttr("value", form.value.location.travel_scope)} placeholder="Local / Regional / International" data-v-6fb7e3be></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--[-->`);
      ssrRenderList(otherDynamicSections, (section) => {
        _push(`<div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be>`);
        if (section.type.includes(activeType.value)) {
          _push(`<div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>${ssrInterpolate(section.label)}</h6><!--[-->`);
          ssrRenderList(section.fields, (field) => {
            _push(`<div class="mb-3" data-v-6fb7e3be><div class="content" data-v-6fb7e3be>${ssrInterpolate(field.label)}</div>`);
            if (field.type === "text") {
              _push(`<input class="android-input semi-content"${ssrRenderAttr("value", form.value.details[section.key][field.key])}${ssrRenderAttr("placeholder", field.input_placeholder || field.label)} data-v-6fb7e3be>`);
            } else if (field.type === "number") {
              _push(`<input type="number" class="android-input semi-content"${ssrRenderAttr("value", form.value.details[section.key][field.key])}${ssrRenderAttr("placeholder", field.label)} data-v-6fb7e3be>`);
            } else if (field.type === "date") {
              _push(`<input type="date" class="android-input semi-content"${ssrRenderAttr("value", form.value.details[section.key][field.key])} data-v-6fb7e3be>`);
            } else if (field.type === "boolean") {
              _push(`<div class="form-check semi-content" data-v-6fb7e3be><input type="checkbox" class="form-check-input semi-content"${ssrIncludeBooleanAttr(Array.isArray(form.value.details[section.key][field.key]) ? ssrLooseContain(form.value.details[section.key][field.key], null) : form.value.details[section.key][field.key]) ? " checked" : ""} data-v-6fb7e3be><label class="form-check-label" data-v-6fb7e3be>${ssrInterpolate(field.label)}</label></div>`);
            } else if (field.type === "select") {
              _push(`<select class="android-input semi-content" data-v-6fb7e3be><option disabled value="" data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.details[section.key][field.key]) ? ssrLooseContain(form.value.details[section.key][field.key], "") : ssrLooseEqual(form.value.details[section.key][field.key], "")) ? " selected" : ""}>Select ${ssrInterpolate(field.label)}</option><!--[-->`);
              ssrRenderList(field.options, (opt) => {
                _push(`<option${ssrRenderAttr("value", opt)} data-v-6fb7e3be${ssrIncludeBooleanAttr(Array.isArray(form.value.details[section.key][field.key]) ? ssrLooseContain(form.value.details[section.key][field.key], opt) : ssrLooseEqual(form.value.details[section.key][field.key], opt)) ? " selected" : ""}>${ssrInterpolate(opt)}</option>`);
              });
              _push(`<!--]--></select>`);
            } else if (field.type === "list") {
              _push(`<div data-v-6fb7e3be><!--[-->`);
              ssrRenderList(form.value.details[section.key][field.key], (item, i) => {
                _push(`<div class="d-flex mb-2 align-items-center" data-v-6fb7e3be><div class="me-3 semi-content" data-v-6fb7e3be>${ssrInterpolate(i)}</div><input class="android-input semi-content me-2"${ssrRenderAttr("value", form.value.details[section.key][field.key][i])}${ssrRenderAttr("placeholder", field.input_placeholder || field.label)} data-v-6fb7e3be><button class="btn btn-danger btn-sm" data-v-6fb7e3be> \u2715 </button></div>`);
              });
              _push(`<!--]--><button class="btn btn-outline-primary btn-sm" data-v-6fb7e3be> + Add ${ssrInterpolate(field.label)}</button></div>`);
            } else if (field.type === "dict") {
              _push(`<div class="border rounded p-2" data-v-6fb7e3be><!--[-->`);
              ssrRenderList(field.subfields, (sub) => {
                _push(`<div class="mt-2" data-v-6fb7e3be>`);
                if (sub.type !== "boolean") {
                  _push(`<input class="android-input semi-content"${ssrRenderAttr("value", form.value.details[section.key][field.key][sub.key])}${ssrRenderAttr("placeholder", sub.label)} data-v-6fb7e3be>`);
                } else {
                  _push(`<div class="form-check" data-v-6fb7e3be><input type="checkbox" class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(form.value.details[section.key][field.key][sub.key]) ? ssrLooseContain(form.value.details[section.key][field.key][sub.key], null) : form.value.details[section.key][field.key][sub.key]) ? " checked" : ""} data-v-6fb7e3be><label class="form-check-label" data-v-6fb7e3be>${ssrInterpolate(sub.label)}</label></div>`);
                }
                _push(`</div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(detailSections, (section) => {
        _push(`<div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be>`);
        if (section.type.includes(activeType.value)) {
          _push(`<div class="card-body" data-v-6fb7e3be><h6 class="fw-bold sub-title" data-v-6fb7e3be>${ssrInterpolate(section.label)}</h6><!--[-->`);
          ssrRenderList(form.value.details[section.key], (item, i) => {
            _push(`<div class="d-flex mb-2 align-items-center" data-v-6fb7e3be><div class="me-3 semi-content" data-v-6fb7e3be>${ssrInterpolate(i)}</div><input class="android-input semi-content me-2"${ssrRenderAttr("value", form.value.details[section.key][i])}${ssrRenderAttr("placeholder", section.input_placeholder || "")} data-v-6fb7e3be><button class="btn btn-danger btn-sm" data-v-6fb7e3be>\u2715</button></div>`);
          });
          _push(`<!--]--><button class="btn btn-outline-primary btn-sm" data-v-6fb7e3be> + Add ${ssrInterpolate(section.label)}</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold subtitle" data-v-6fb7e3be>Tags</h6><!--[-->`);
      ssrRenderList(form.value.tags, (tag, i) => {
        _push(`<div class="d-flex mb-2 align-items-center" data-v-6fb7e3be><div class="me-3 semi-content" data-v-6fb7e3be>${ssrInterpolate(i)}</div><input class="android-input semi-content me-2"${ssrRenderAttr("value", form.value.tags[i])} placeholder="Tag" data-v-6fb7e3be><button class="btn btn-danger btn-sm" data-v-6fb7e3be>\u2715</button></div>`);
      });
      _push(`<!--]--><button class="btn btn-outline-primary btn-sm" data-v-6fb7e3be>+ Add Tag</button></div></div><div data-v-6fb7e3be>`);
      if (preview.value) {
        _push(`<section class="floating-item" data-v-6fb7e3be><div class="item-card glow-animated card shadow-lg floating-item-overlay rounded-4" data-v-6fb7e3be><div class="floating-item-overlay-content" data-v-6fb7e3be><div class="card-header bg-forest" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Basic Information</h6><div class="sub-title text-white" data-v-6fb7e3be><strong data-v-6fb7e3be>Title:</strong>${ssrInterpolate(form.value.title)}</div><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Description:</strong></div><!--[-->`);
        ssrRenderList(form.value.description, (desc) => {
          _push(`<div class="sub-content" data-v-6fb7e3be><div class="mt-3" data-v-6fb7e3be>${ssrInterpolate(desc)}</div></div>`);
        });
        _push(`<!--]--><div class="badge bg-primary mt-2" data-v-6fb7e3be>${ssrInterpolate(form.value.opportunity_type)}</div><div class="badge bg-primary mt-2 ms-2" data-v-6fb7e3be><strong data-v-6fb7e3be>Status</strong>: ${ssrInterpolate(form.value.status)}</div><div class="" data-v-6fb7e3be>`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "btn btn-ocean me-3",
          onClick: form.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Continue editing Opportunity`);
            } else {
              return [
                createTextVNode("Continue editing Opportunity")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="card-body" data-v-6fb7e3be><div class="item-card glow-animated mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Organization</h6><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Name:</strong> ${ssrInterpolate(form.value.provider.organization_name || "N/A")}</div><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Type:</strong> ${ssrInterpolate(form.value.provider.organization_type || "N/A")}</div>`);
        if (form.value.provider.organization_logo) {
          _push(`<img${ssrRenderAttr("src", form.value.provider.organization_logo)} class="img-fluid rounded mt-2" style="${ssrRenderStyle({ "max-height": "80px" })}" data-v-6fb7e3be>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="item-card glow-animated mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Location</h6><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Country:</strong> ${ssrInterpolate(form.value.host_country)}</div><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>City:</strong> ${ssrInterpolate(form.value.location.city || "N/A")}</div><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Mode:</strong> ${ssrInterpolate(form.value.location.mode || "N/A")}</div></div></div>`);
        if (form.value.details.eligibility) {
          _push(`<div class="item-card glow-animated mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Eligibility</h6><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Nationalities:</strong> ${ssrInterpolate(form.value.details.eligibility.eligible_nationalities)}</div><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Age Limit:</strong> ${ssrInterpolate(form.value.details.eligibility.age_limit)}</div><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Education:</strong> ${ssrInterpolate(form.value.details.eligibility.education_requirements.minimum)}</div>`);
          if (form.value.details.eligibility.sector_knowledge.length) {
            _push(`<div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Sector Knowledge:</strong><ul data-v-6fb7e3be><!--[-->`);
            ssrRenderList(form.value.details.eligibility.sector_knowledge, (s, i) => {
              _push(`<li class="content" data-v-6fb7e3be>${ssrInterpolate(s)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_a = form.value.details.benefits) == null ? void 0 : _a.length) {
          _push(`<div class="item-card glow-animated mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Benefits</h6><ul data-v-6fb7e3be><!--[-->`);
          ssrRenderList(form.value.details.benefits, (b, i) => {
            _push(`<li class="content" data-v-6fb7e3be>${ssrInterpolate(b)}</li>`);
          });
          _push(`<!--]--></ul></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = form.value.details.requirements) == null ? void 0 : _b.length) {
          _push(`<div class="item-card glow-animated mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Requirements</h6><ul data-v-6fb7e3be><!--[-->`);
          ssrRenderList(form.value.details.requirements, (r, i) => {
            _push(`<li class="content" data-v-6fb7e3be>${ssrInterpolate(r)}</li>`);
          });
          _push(`<!--]--></ul></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (form.value.details.application) {
          _push(`<div class="item-card glow-animated mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Application</h6><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Mode:</strong> ${ssrInterpolate(form.value.details.application.application_mode)}</div><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Fee:</strong> ${ssrInterpolate(form.value.details.application.application_fee)}</div><div class="content" data-v-6fb7e3be><strong data-v-6fb7e3be>Deadline:</strong> ${ssrInterpolate(form.value.details.application.deadline)}</div>`);
          if (form.value.details.application.application_link) {
            _push(`<a${ssrRenderAttr("href", form.value.details.application.application_link)} target="_blank" class="btn btn-ocean mt-2" data-v-6fb7e3be> Apply Now </a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = form.value.tags) == null ? void 0 : _c.length) {
          _push(`<div class="item-card glow-animated mt-3" data-v-6fb7e3be><div class="card-body" data-v-6fb7e3be><h6 class="fw-bold title" data-v-6fb7e3be>Tags</h6><!--[-->`);
          ssrRenderList(form.value.tags, (t, i) => {
            _push(`<span class="custom-badge bg-forest content me-2" data-v-6fb7e3be>${ssrInterpolate(t)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="card-footer" data-v-6fb7e3be><div class="" data-v-6fb7e3be><button class="btn btn-ocean" data-v-6fb7e3be>Cancel</button></div></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="item-card glow-animated shadow-sm mt-3" data-v-6fb7e3be><div class="card-body d-flex justify-content-between align-items-center" data-v-6fb7e3be><button class="btn btn-primary me-3"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-6fb7e3be>`);
      if (loading.value) {
        _push(`<span class="spinner-border spinner-border-sm" data-v-6fb7e3be></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Save <span class="text-capitalize" data-v-6fb7e3be>${ssrInterpolate(_ctx.type)}</span></button><button class="btn btn-primary"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-6fb7e3be> Preview <span class="text-capitalize" data-v-6fb7e3be>${ssrInterpolate(_ctx.type)}</span></button></div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/adm/prt/opportunities/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6fb7e3be"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-AC0xYCPb.mjs.map
