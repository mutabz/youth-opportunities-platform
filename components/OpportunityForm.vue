
<template>
  <main class="container pb-4">

    <!-- HEADER -->
    <header class="d-flex align-items-center p-3 rounded shadow-sm bg-primary text-white">
      <button class="btn text-white me-3" @click="$router.back()">
        <Icon name="fa6-solid:arrow-left"/>
      </button>
      <h4 class="m-0">Create <span class="text-warning">{{ activeType }}</span> Opportunity</h4>
    </header>

    <!-- CATEGORY FILTER -->
    <section class="mb-4">
      <div class="card shadow-sm p-3 bg-light rounded">
        <h6 class="fw-bold mb-3">Select Type Of Opportunity</h6>
        <div class="d-flex flex-wrap gap-2">
          <button
            v-for="cat in opportunityCategories"
            :key="cat.id"
            @click="activateCategory(cat)"
            class="btn"
            :class="activeType === cat.key ? 'btn-warning text-dark' : 'btn-outline-primary'"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>
    </section>

    <section class="rowxx g-3">
      <!-- BASIC INFO -->
      <div class="col-md-12">
        <div class="card shadow-sm p-3 rounded border-primary">
          <h6 class="fw-bold mb-3 text-primary">Basic Information</h6>

          <!-- TITLE -->
          <div class="mb-3">
          </div>

          <div>
            <label class="form-label fw-bold">Title *</label>
            <div class="d-flex align-items-center">
              <Icon name="fa6-solid:heading"/>
              <input type="text" v-model="form.title" class="form-control" placeholder="Enter title" />
            </div>
          </div>

          <!-- DESCRIPTION -->
          <div class="mb-3">
            <label class="form-label fw-bold">Description *</label>
            <div v-for="(desc, i) in form.description" :key="i" class="d-flex mb-2 align-items-center">
              <div class="me-3">{{ i }}</div>
              <Icon name="fa6-solid:align-left"/>
                <div class="d-flex w-100  align-items-center justify-space-between">
                  <textarea v-model="form.description[i]" class="form-control" rows="3" placeholder="Enter description"></textarea>
                  <button class="btn btn-danger h-20" @click="form.description.splice(i, 1)">✕</button>
                </div> 
              </div>            
            </div>
            <button class="btn btn-outline-primary btn-sm" @click="form.description.push('')">+ Add paragraph</button>
        </div>
      </div>

      <!-- STATUS & OPPORTUNITY TYPE -->
      <div class="col-md-12">
        <div class="card shadow-sm p-3 rounded border-success">
          <h6 class="fw-bold mb-3 text-success">Status & Type</h6>

          <div class="">
            <div class="mb-3">
              <label class="form-label fw-bold">Status *</label>
              <select class="form-select" v-model="form.status">
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Upcoming">Upcoming</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Opportunity Type *</label>
              <select class="form-select" v-model="form.opportunity_type">
                <option disabled value="">Select type</option>
                <option v-for="t in opportunityTypes" :key="t.id" :value="t.name">{{ t.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="rowxx g-3 mt-3 mb-3">
      <!-- ORGANIZATION -->
      <div class="col-md-12">
        <div class="card shadow-sm p-3 rounded border-info">
          <h6 class="fw-bold mb-3 text-info">Organization</h6>

          <div class="mb-3">
            <label class="form-label">Organization Name</label>
            <input v-model="form.provider.organization_name" class="form-control" placeholder="Organization Name" />
          </div>

          <div class="mb-3">
            <label class="form-label">Organization Type</label>
            <input v-model="form.provider.organization_type" class="form-control" placeholder="Organization Type" />
          </div>

          <div class="mb-3">
            <label class="form-label">Organization Logo URL</label>
            <input v-model="form.provider.organization_logo" class="form-control" placeholder="Logo URL" />
          </div>
        </div>
      </div>

      <!-- LOCATION -->
      <div class="col-md-12">
        <div class="card shadow-sm p-3 rounded border-warning">
          <h6 class="fw-bold mb-3 text-warning">Location & Work Mode</h6>

          <div class="">
            <div class="mt-5 mb-3">
              <label class="form-label">Country</label>
              <input v-model="form.host_country" class="form-control" placeholder="Country" />
            </div>
            <div class="mb-3">
              <label class="form-label">City</label>
              <input v-model="form.location.city" class="form-control" placeholder="City" />
            </div>
            <div class="mb-3">
              <label class="form-label">Mode</label>
              <select v-model="form.location.mode" class="form-select">
                <option>In-person</option>
                <option>Online</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="rowxx g-3">
      <!-- MODE & SECTOR -->
      <div class="col-md-12">
        <div class="card shadow-sm mt-3 border-secondary">
          <div class="card-body">

            <!-- MODE -->
            <div class="mb-3">
              <label class="form-label fw-semibold">
                <i class="fas fa-laptop-house me-2 text-primary"></i>
                Mode (In-person / Online / Hybrid)
              </label>

              <select v-model="form.location.mode" class="form-select">
                <option>In-person</option>
                <option>Online</option>
                <option>Hybrid</option>
              </select>
            </div>

            <!-- SECTOR -->
            <div v-if="form.location.mode !== 'Online'">
              <label class="form-label fw-semibold">
                <i class="fas fa-industry me-2 text-primary"></i>
                Sector
              </label>

              <input
                class="form-control"
                v-model="form.location.sector"
                placeholder="Technology, Finance, Education..."
              />
            </div>

          </div>
        </div>
      </div>


      <!-- WORK & TRAVEL -->
      <div class="col-md-12">
        <div class="card shadow-sm mt-3 border-secondary">
          <div class="card-body">

            <!-- WORK MODE -->
            <div class="mb-3">
              <label class="form-label fw-semibold">
                <i class="fas fa-briefcase me-2 text-success"></i>
                Work / Study Mode
              </label>

              <select
                v-model="form.location.work_mode"
                class="form-select"
              >
                <option>Onsite</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>

            <!-- TRAVEL REQUIRED -->
            <div class="mb-3">
              <label class="form-label fw-semibold">
                <i class="fas fa-plane me-2 text-warning"></i>
                Travel Required
              </label>

              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="form.location.travel_required"
                />
                <label class="form-check-label">
                  Yes, travel is required
                </label>
              </div>
            </div>

            <!-- TRAVEL SCOPE -->
            <div v-if="form.location.travel_required">
              <label class="form-label fw-semibold">
                <i class="fas fa-route me-2 text-danger"></i>
                Travel Scope
              </label>

              <input
                class="form-control"
                v-model="form.location.travel_scope"
                placeholder="Local / Regional / International"
              />
            </div>

          </div>
        </div>
      </div>
    </section>



  <!-- OTHER DYNAMIC SECTIONS -->

  <div class="rowxx g-3">
    <div v-for="section in otherDynamicSections.filter(s => s.type.includes(activeType))" :key="section.key" class="col-md-12 mt-5">
      <div class="">
        <div class="card">  
          <div class="card-body">

            <h6 class="fw-bold text-info mb-3">
              {{ section.label }}
            </h6>

            <div v-for="field in section.fields" :key="field.key" class="mb-3" >

              <label class="form-label fw-semibold">
                {{ field.label }}
              </label>

              <!-- TEXT -->
              <input v-if="field.type === 'text'" class="form-control" v-model="form.details[section.key][field.key]" :placeholder="field.input_placeholder || field.label" />

              <!-- NUMBER -->
              <input v-else-if="field.type === 'number'" type="number" class="form-control" v-model="form.details[section.key][field.key]" />

              <!-- DATE -->
              <input v-else-if="field.type === 'date'" type="date" class="form-control" v-model="form.details[section.key][field.key]" />

              <!-- BOOLEAN -->
              <div v-else-if="field.type === 'boolean'" class="form-check">
                <input type="checkbox" class="form-check-input" v-model="form.details[section.key][field.key]" />
                <label class="form-check-label">
                  {{ field.label }}
                </label>
              </div>

              <!-- SELECT -->
              <select
                v-else-if="field.type === 'select'"
                class="form-select"
                v-model="form.details[section.key][field.key]"
              >
                <option disabled value="">
                  Select {{ field.label }}
                </option>

                <option
                  v-for="opt in field.options"
                  :key="opt"
                  :value="opt"
                >
                  {{ opt }}
                </option>
              </select>

              <!-- LIST -->
              <div v-else-if="field.type === 'list'">

                <div
                  v-for="(item,i) in form.details[section.key][field.key]"
                  :key="i"
                  class="input-group mb-2"
                >
                  <input
                    class="form-control"
                    v-model="form.details[section.key][field.key][i]"
                    :placeholder="field.input_placeholder || field.label"
                  />

                  <button
                    class="btn btn-danger"
                    @click="form.details[section.key][field.key].splice(i,1)"
                  >
                    ✕
                  </button>
                </div>

                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="form.details[section.key][field.key].push('')"
                >
                  + Add {{ field.label }}
                </button>

              </div>

              <!-- DICT -->
              <div v-else-if="field.type === 'dict'" class="border rounded p-3 bg-light">

                <div v-for="sub in field.subfields" :key="sub.key" class="mb-2" >

                  <label class="form-label small">
                    {{ sub.label }}
                  </label>

                  <input v-if="sub.type !== 'boolean'" class="form-control" v-model="form.details[section.key][field.key][sub.key]"/>

                  <div v-else class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="form.details[section.key][field.key][sub.key]" />
                    <label class="form-check-label">
                      {{ sub.label }}
                    </label>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>


  <!-- DETAIL LIST SECTIONS -->
  <div v-for="section in detailSections.filter(s => s.type.includes(activeType))" :key="section.key" class="col-md-12 mt-5">
    <div class="card shadow-sm border-secondary">
      <div class="card-body">

        <h6 class="fw-bold text-secondary mb-3">
          {{ section.label }}
        </h6>

        <div
          v-for="(item,i) in form.details[section.key]"
          :key="i"
          class="input-group mb-2"
        >

          <input
            class="form-control"
            v-model="form.details[section.key][i]"
            :placeholder="section.input_placeholder"
          />

          <button
            class="btn btn-danger"
            @click="form.details[section.key].splice(i,1)"
          >
            ✕
          </button>

        </div>

        <button
          class="btn btn-outline-primary btn-sm"
          @click="form.details[section.key].push('')"
        >
          + Add {{ section.label }}
        </button>

      </div>
    </div>
  </div>

  </div>

    <!-- SLUGS -->
    <section class="mb-4">
      <div class="card shadow-sm p-3 rounded border-dark">
        <div class="">
        </div>
        <h6 class="fw-bold mb-3 text-dark">Select Slugs</h6>

        <div class="">
          <div  v-for="slug_type in slugsLists.filter(s_l => s_l.type.includes(activeType))" :key="slug_type.type" class="grid-2 mb-0" >
            <div v-for="slug in slug_type.key" :key="slug.slug" class="card">
              <div class="px-1 py-1">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :value="slug.slug" v-model="form.details.slugs" :id="slug.slug" />
                  <label class="form-check-label" :for="slug.slug" >
                    {{ slug.title }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- TAGS -->
    <section class="mb-4">
      <div class="card shadow-sm p-3 rounded border-dark">
        <h6 class="fw-bold mb-3 text-dark">Tags</h6>
        <div v-for="(tag, i) in form.tags" :key="i" class="input-group mb-2">
          <input v-model="form.tags[i]" class="form-control" placeholder="Tag" />
          <button class="btn btn-danger" @click="form.tags.splice(i, 1)">✕</button>
        </div>
        <button class="btn btn-outline-dark btn-sm" @click="form.tags.push('')">+ Add Tag</button>
      </div>
    </section>

    <!-- SUBMIT BUTTONS -->
    <div class="d-flex justify-content-end gap-2 mb-5">
      <button class="btn btn-primary" :disabled="loading" @click="submit">
        <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
        Save {{ type }}
      </button>
      <button class="btn btn-outline-primary" @click="appendPreview">Preview {{ type }}</button>
    </div>

  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useDataStore } from '@/stores/dataStore'
import competitions from '@/data/competitions.json'
import internships from '@/data/internships.json'
import fellowships from '@/data/fellowships.json'
import grants from '@/data/grants.json'
import jobs from '@/data/jobs.json'
import scholarships from '@/data/scholarships.json'
import studyAbroad from '@/data/study-abroad.json'

const slugsLists = [
  { type:["competition"], key: competitions },
  { type:["internship"], key: internships },
  { type:["fellowships"], key: fellowships },
  { type:["grants"], key: grants },
  { type:["job"], key: jobs },
  { type:["training"], key: jobs },
  { type:["scholarship"], key: scholarships }
]

const router = useRouter()
const dataStore = useDataStore()
const loading = ref(false)
const preview = ref(false)
const activeType = ref('')


const opportunityCategories = ref([])
const opportunityTypes = ref([])

const fetchRequirements = async (force = false) => {
  loading.value = true
  await dataStore.fetchData('opportunities', force)
  await dataStore.fetchData('opp_category', force)
  await dataStore.fetchData('opp_type', force)

  opportunityCategories.value = dataStore.items.opp_category || []
  opportunityTypes.value = dataStore.items.opp_type || []
  loading.value = false
}


const detailSections = [
  { type:["scholarship"], key: 'study_destination', label: 'Study Destination', input_placeholder: 'Enter destination' },
  { type:["scholarship"], key: 'study_levels', label: 'Levels of Study', input_placeholder: 'Enter level(Undergraduate, Masters, phd)' },
  { type:["scholarship"], key: 'fields_of_study', label: 'Fields of Study', input_placeholder: 'Enter field' },
  { type:["job","internship","scholarship","competition","funding","training"], key: 'benefits', label: 'Benefits', input_placeholder: 'Enter benefit' },
  { type:["job","internship","scholarship","competition","funding","training"], key: 'documents_required', label: 'Documents Required', input_placeholder: 'Enter document' },
  { type:["job","internship"], key: 'duties_and_responsibilities', label: 'Duties & Responsibilities', input_placeholder: 'Enter duty' },
  { type:["job","internship"], key: 'skills_and_competencies', label: 'Skills & Competencies', input_placeholder: 'Enter skill' },
  { type:["training"], key: 'topics_covered', label: 'Topics Covered', input_placeholder: 'Enter topic' },
  { type:["competition"], key: 'prizes', label: 'Prizes', input_placeholder: 'Enter prize' },
  { type:["job","internship","scholarship","competition","funding","training"], key: 'requirements', label: 'Requirements', input_placeholder: 'Enter requirement' },
]

const otherDynamicSections = [

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

// Unified form for all opportunity types
const form = ref({
  // Common fields
  title: '',
  description: [],
  category: activeType.value, // Default category
  opportunity_type: '',
  status: 'Open',
  provider: {
    organization_name: '',
    organization_type: '',
    organization_logo: '',
  },

  host_country: '',
  location: {}, // general location
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
      founded_year: '',
      headquarters: '',
      group_affiliation: ''
    },
    job_location: {
      city: '',
      sector: '',
      work_mode: 'Onsite',
      travel_required: false,
      travel_scope: ''
    },
    employment_details: {
      position: '',
      contract_type: '',
      duration: '',
      employment_type: ''
    },

    eligibility: {
      eligible_nationalities: '',
      age_limit: '',
      education_requirements: { minimum: '' },
      experience_required: '',
      sector_knowledge: []
    },

    internship_details: {
      duration: '',
      start_date: '',
      stipend: { paid: false, amount: '' }
    },


    // Grant
    funding_details: {
      funding_type: '',
      amount: '',
      disbursement_method: ''
    },

    // Competition
    competition_details: { 
      format: '',
      team_allowed: true 
    },
    
    // Training
    training_location: { city: '', mode: '' },
    training_details: {
      duration: '',
      training_type: '',
      certification: true
    },
  }
})

const activateCategory = (data)=>{
  activeType.value = data.key
  form.value.category = data.name
}

// Submit handler
const submit = async () => {
  loading.value = true
  try {
    await dataStore.createItem('opportunities', form.value)
    fetchRequirements(true)
    form.value = {}

    loading.value = false
    router.push('')
  } catch (e) {
    alert('Failed to save opportunity')
    console.error(e)    
    loading.value = false
  } finally {    
    loading.value = false
  }
}

const appendPreview = ()=>{  
  preview.value = true
  document.getElementById("json").textContent =
  JSON.stringify(form, null, 2);
}

onMounted(fetchRequirements)
</script>

<style scoped>
.tab {
  display: flex;
  flex-direction: rowxx;
  overflow: auto;


  width: 100%;
  height: auto;
  gap: 10px;
}

.tab-item {
  padding: 10px;
  cursor: pointer;
  background-color: #ddd;
  margin-right: 1px solid #fff;
  border-radius: 10px;
}

.tab .active {
  background-color: rgba(0, 190, 250, .40);
}




</style>