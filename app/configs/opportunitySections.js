
export const detailSections = [
  { type:["scholarship"], key: 'study_destination', label: 'Study Destination', input_placeholder: 'Enter destination' },
  { type:["scholarship"], key: 'study_levels', label: 'Levels of Study', input_placeholder: 'Enter level(Undergraduate, Masters, phd)' },
  { type:["scholarship"], key: 'fields_of_study', label: 'Fields of Study', input_placeholder: 'Enter field' },
  { type:["job","internship","scholarship","competition","training"], key: 'benefits', label: 'Benefits', input_placeholder: 'Enter benefit' },
  { type:["job","internship","scholarship","competition","training"], key: 'documents_required', label: 'Documents Required', input_placeholder: 'Enter document' },
  { type:["job","internship"], key: 'duties_and_responsibilities', label: 'Duties & Responsibilities', input_placeholder: 'Enter duty' },
  { type:["job","internship"], key: 'skills_and_competencies', label: 'Skills & Competencies', input_placeholder: 'Enter skill' },
  { type:["training"], key: 'topics_covered', label: 'Topics Covered', input_placeholder: 'Enter topic' },
  { type:["competition"], key: 'prizes', label: 'Prizes', input_placeholder: 'Enter prize' },
  { type:["job","internship","scholarship","competition","training"], key: 'requirements', label: 'Requirements', input_placeholder: 'Enter requirement' },
]

export const otherDynamicSections = [

  /* ================= JOB & INTERNSHIP ================= */

  { 
    type: ["job","internship"],
    key: 'job_location',
    label: 'Job Location',
    fields: [
      { type: "text", key: "city", label: "City", input_placeholder: "City" },
      { type: "text", key: "sector", label: "Sector", input_placeholder: "Sector" },
      { type: "select", key: "work_mode", label: "Work Mode", options: ["Onsite","Remote","Hybrid"] },
      { type: "boolean", key: "travel_required", label: "Travel Required" },
      { type: "text", key: "travel_scope", label: "Travel Scope", input_placeholder: "Local / Regional / International" }
    ] 
  },

  { 
    type: ["job"],
    key: 'employment_details',
    label: 'Employment Details',
    fields: [
      { type: "text", key: "position", label: "Position" },
      { type: "select", key: "contract_type", label: "Contract Type", options: ["Permanent","Contract","Temporary"] },
      { type: "text", key: "duration", label: "Duration" },
      { type: "select", key: "employment_type", label: "Employment Type", options: ["Full-time","Part-time"] }
    ] 
  },

  /* ================= ELIGIBILITY (ALL TYPES) ================= */

  { 
    type: ["job","internship","scholarship","competition","funding","training"],
    key: 'eligibility',
    label: 'Eligibility Criteria',
    fields: [
      { type: "text", key: "eligible_nationalities", label: "Eligible Nationalities" },
      { type: "number", key: "age_limit", label: "Age Limit" },
      { type: "dict", key: "education_requirements", label: "Education Requirements", subfields: [
        { key: "minimum", label: "Minimum Education" }
      ]},
      { type: "text", key: "experience_required", label: "Experience Required" },
      { type: "list", key: "sector_knowledge", label: "Sector Knowledge" }
    ] 
  },

  { 
    type: ["job","internship","scholarship","competition","funding","training"],
    key: 'application',
    label: 'Application Process',
    fields: [
      { type: "text", key: "application_fee", label: "Application Fee" },
      { type: "text", key: "application_mode", label: "Application Mode" },
      { type: "text", key: "application_link", label: "Application Link"},
      { type: "date", key: "deadline", label: "Deadline" },
      { type: "list", key: "procedure", label: "Procedures", input_placeholder: "Step"}
    ] 
  },

  /* ================= INTERNSHIP ================= */

  { 
    type: ["internship"],
    key: 'internship_details',
    label: 'Internship Details',
    fields: [
      { type: "text", key: "duration", label: "Duration" },
      { type: "date", key: "start_date", label: "Start Date" },
      { type: "dict", key: "stipend", label: "Stipend", subfields: [
        { type: "boolean", key: "paid", label: "Paid" },
        { type: "text", key: "amount", label: "Amount" }
      ]}
    ] 
  },

  /* ================= SCHOLARSHIP ================= */

  {
    type: ["job","internship","scholarship","competition","funding","training"],
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
    key: 'funding_details',
    label: 'Funding Details',
    fields: [
      { type: "select", key: "funding_type", label: "Funding Type", options: ["Grant","Seed","Loan","Equity"] },
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
      { type: "select", key: "format", label: "Format", options: ["Online","Physical","Hybrid"] },
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
      { type: "select", key: "mode", label: "Mode", options: ["Online","Physical","Hybrid"] }
    ]
  },

  {
    type: ["training"],
    key: "training_details",
    label: "Training Details",
    fields: [
      { type: "text", key: "duration", label: "Duration" },
      { type: "select", key: "training_type", label: "Training Type", options: ["Short Course","Bootcamp","Workshop"] },
      { type: "boolean", key: "certification", label: "Certification Provided" }
    ]
  }

]
