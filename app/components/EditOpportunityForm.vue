<template>
  <main class="item">
    <!-- HEADER -->
    <header class="app-header">
      <div class="header-icon-left" @click="$router.back()">
        <i class="fas fa-arrow-left"></i>
      </div>
      <span class="header-title">Create <span class="text-capitalize">{{ type }}</span> Opportunity</span>
    </header>

    <section class="mx-2 mt-3">
      <div class="item-card glow-animated">
        <div class="card-body">
          <div class="sub-title mb-2">Select Type Of Opportunity</div>
          <!-- ================= FILTER CHIPS ================= -->
          <section class="filters">
            <div class="filter-chip item-card glow-animated" v-for="cat in opportunityCategories" :key="cat.id" :class="{ active: activeType === cat.key }" @click="activateCategory(cat)">
              {{ cat.name }}
            </div>
          </section>
        </div>
      </div>

      <!-- BASIC INFO -->
      <div class="item-card glow-animated">
        <div class="card-body">
          <h6 class="fw-bold title">Basic Information</h6>

          <!-- TITLE -->
          <div>
            <div class="content">Title *</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-heading me-2"></i>
              <input class="android-input semi-content mb-2" v-model="form.title" placeholder="Title *"/>
            </div>
          </div>

          <!-- DESCRIPTION -->
          <div class="mt-3">
            <div class="content">Description *</div>

            <div v-for="(tag,i) in form.description" :key="i" class="d-flex mb-2 align-items-center">
              <div class="me-3 semi-content">{{ i }}</div>
              <div class="d-flex align-items-start">
                <i class="fas fa-align-left me-2 mt-2"></i>
                <textarea class="android-input semi-content mb-2 w-100" rows="5" cols="100" v-model="form.description[i]" placeholder="Description *"></textarea>
                <button class="btn btn-danger btn-sm" @click="form.description.splice(i,1)">✕</button>
              </div>            
            </div>
            <button class="btn btn-outline-primary btn-sm" @click="form.description.push('')">+ Add description paragraph</button>
            <div class="">
              <span class="semi-content">
                Contact support for help
                <a v-if="contacts" :href="'mailto:' + contacts.email">Here</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- STATUS & TYPE -->
      <div class="item-card glow-animated shadow-sm">
        <div class="card-body">

          <!-- STATUS -->
          <div>
            <div class="content">Status *</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-toggle-on me-2"></i>
              <select class="android-input semi-content mb-2" v-model="form.status">
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Upcoming">Upcoming</option>
              </select>
            </div>
          </div>

          <!-- OPPORTUNITY TYPE -->
          <div class="mt-3">
            <div class="content">Select Opportunity Type *</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-layer-group me-2"></i>
              <select class="android-input semi-content mb-2" v-model="form.opportunity_type">
                <option disabled value="">Select Opportunity Type</option>
                <option
                  v-for="t in opportunityTypes"
                  :key="t.id"
                  :value="t.name"
                >
                  {{ t.name }}
                </option>
              </select>
            </div>
          </div>

        </div>
      </div>


      <!-- ORGANIZATION -->
      <div class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body">
          <h6 class="fw-bold title">Organization</h6>

          <!-- ORGANIZATION NAME -->
          <div>
            <div class="content">Organization Name</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-building me-2"></i>
              <input
                class="android-input semi-content mb-2"
                v-model="form.provider.organization_name"
                placeholder="Organization Name"
              />
            </div>
          </div>

          <!-- ORGANIZATION TYPE -->
          <div class="mt-3">
            <div class="content">Organization Type</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-sitemap me-2"></i>
              <input
                class="android-input semi-content mb-2"
                v-model="form.provider.organization_type"
                placeholder="Organization Type"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- EXTRA ORGANIZATION INFO -->
      <div class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body">

          <!-- FOUNDED YEAR -->
          <div>
            <div class="content">Founded Year</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-calendar-alt me-2"></i>
              <input type="number" min="1800" max="2100" maxlength="4" 
                class="android-input semi-content mb-2"
                v-if="form.details.provider"
                v-model="form.details.provider.founded_year"
                placeholder="Founded Year"
              />

            </div>
          </div>

          <!-- HEADQUARTERS -->
          <div class="mt-3">
            <div class="content">Headquarters</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-map-marker-alt me-2"></i>
              <input
                class="android-input semi-content mb-2"
                v-if="form.details.provider"
                v-model="form.details.provider.headquarters"
                placeholder="Headquarters"
              />
            </div>
          </div>

        </div>
      </div>

      <!-- AFFILIATION & LOGO -->
      <div class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body">

          <!-- GROUP AFFILIATION -->
          <div>
            <div class="content">Group Affiliation</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-users me-2"></i>
              <input class="android-input semi-content mb-2" v-if="form.details.provider" v-model="form.details.provider.group_affiliation"  placeholder="Group Affiliation"/>
            </div>
          </div>

          <!-- ORGANIZATION LOGO -->
          <div class="mt-3">
            <div class="content">Organization Logo URL</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-image me-2"></i>
              <input
                class="android-input semi-content"
                v-model="form.provider.organization_logo"
                placeholder="Organization Logo URL"
              />
            </div>
          </div>

        </div>
      </div>


      <!-- LOCATION -->
      <div class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body">
          <h6 class="fw-bold title">Location & Work Mode</h6>

          <!-- HOST COUNTRY -->
          <div>
            <div class="content">Host Country</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-globe-africa me-2"></i>
              <input
                class="android-input semi-content mb-2"
                v-model="form.host_country"
                placeholder="Host Country"
              />
            </div>
          </div>

          <!-- CITY -->
          <div class="mt-3">
            <div class="content">City</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-city me-2"></i>
              <input
                class="android-input semi-content mb-2"
                v-model="form.location.city"
                placeholder="City"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- MODE & SECTOR -->
      <div class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body">

          <!-- MODE -->
          <div>
            <div class="content">Mode (In-person / Online / Hybrid)</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-laptop-house me-2"></i>
              <select v-model="form.location.mode" class="android-input semi-content mb-2">
                <option>In-person</option>
                <option>Online</option>
                <option>Hybrid</option>
              </select>

            </div>
          </div>

          <!-- SECTOR -->
          <div class="mt-3" v-if="form.location.mode !== 'Online'">
            <div class="content">Sector</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-industry me-2"></i>
              <input
                v-if="form.location"
                class="android-input semi-content mb-2"
                v-model="form.location.sector"
                placeholder="Sector"
              />
            </div>
          </div>

        </div>
      </div>

      <!-- WORK & TRAVEL -->
      <div class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body">

          <!-- WORK MODE -->
          <div>
            <div class="content">Work / Study Mode</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-briefcase me-2"></i>
              <select
                v-if="form.location"
                class="android-input semi-content mb-2"
                v-model="form.location.work_mode"
              >
                <option>Onsite</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>

          <!-- TRAVEL REQUIRED -->
          <div class="mt-3">
            <div class="content">Travel Required</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-plane me-2"></i>
              <div class="form-check mb-2">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="form.location.travel_required"
                />
                <label class="form-check-label">Yes, travel is required</label>
              </div>
            </div>
          </div>

          <!-- TRAVEL SCOPE -->
          <div class="mt-3" v-if="form.location.travel_required">
            <div class="content">Travel Scope</div>
            <div class="d-flex align-items-center">
              <i class="fas fa-route me-2"></i>
              <input
                class="android-input semi-content mb-2"
                v-model="form.location.travel_scope"
                placeholder="Local / Regional / International"
              />
            </div>
          </div>

        </div>
      </div>

      <!-- OTHER DYNAMIC SECTIONS -->
      <div v-for="section in otherDynamicSections" :key="section.key" class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body" v-if="section.type.includes(activeType)">
          <h6 class="fw-bold title">{{ section.label }}</h6>

          <!-- LOOP THROUGH FIELDS -->
          <div v-for="field in section.fields" :key="field.key" class="mb-3">

            <!-- TEXT -->
            <div class="content">{{ field.label }}</div>
            <input v-if="field.type === 'text'" class="android-input semi-content" v-model="form.details[section.key][field.key]" :placeholder="field.input_placeholder || field.label"/>

            <!-- NUMBER -->
            <input v-else-if="field.type === 'number'" type="number" class="android-input semi-content" v-model="form.details[section.key][field.key]" :placeholder="field.label"/>

            <!-- DATE -->
            <input v-else-if="field.type === 'date'" type="date" class="android-input semi-content" v-model="form.details[section.key][field.key]"/>

            <!-- BOOLEAN -->
            <div v-else-if="field.type === 'boolean'" class="form-check semi-content">
              <input type="checkbox" class="form-check-input semi-content" v-model="form.details[section.key][field.key]"/>
              <label class="form-check-label ">{{ field.label }}</label>
            </div>

            <!-- SELECT -->
            <select v-else-if="field.type === 'select'" class="android-input semi-content" v-model="form.details[section.key][field.key]">
              <option disabled value="">Select {{ field.label }}</option>
              <option v-for="opt in field.options" :key="opt" :value="opt">
                {{ opt }}
              </option>
            </select>

            <!-- LIST (same behavior as detailSections) -->
            <div v-else-if="field.type === 'list'">

              <div v-for="(item, i) in form.details[section.key][field.key]" :key="i" class="d-flex mb-2 align-items-center">
                <div class="me-3 semi-content">{{ i }}</div>
                <input class="android-input semi-content me-2" v-model="form.details[section.key][field.key][i]" :placeholder="field.input_placeholder || field.label" />
                <button class="btn btn-danger btn-sm" @click="form.details[section.key][field.key].splice(i, 1)">
                  ✕
                </button>
              </div>

              <button class="btn btn-outline-primary btn-sm" @click="form.details[section.key][field.key].push('')">
                + Add {{ field.label }}
              </button>
            </div>

            <!-- DICT -->
            <div v-else-if="field.type === 'dict'" class="border rounded p-2">

              <div v-for="sub in field.subfields" :key="sub.key" class="mt-2">
                <input v-if="sub.type !== 'boolean'" class="android-input semi-content" v-model="form.details[section.key][field.key][sub.key]" :placeholder="sub.label"/>

                <div v-else class="form-check">
                  <input type="checkbox" class="form-check-input" v-model="form.details[section.key][field.key][sub.key]"/>
                  <label class="form-check-label">{{ sub.label }}</label>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- DYNAMIC DETAILS SECTIONS -->
      <div v-for="section in detailSections" :key="section.key" class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body" v-if="section.type.includes(activeType)">
          <h6 class="fw-bold sub-title">{{ section.label }}</h6>
          <div v-for="(item, i) in form.details[section.key]" :key="i" class="d-flex mb-2 align-items-center">
            <div class="me-3 semi-content">{{ i }}</div>  
            <input class="android-input semi-content me-2" v-model="form.details[section.key][i]" :placeholder="section.input_placeholder || ''" />
            <button class="btn btn-danger btn-sm" @click="form.details[section.key].splice(i,1)">✕</button>
          </div>
          <button class="btn btn-outline-primary btn-sm" @click="form.details[section.key].push('')">
            + Add {{ section.label }}
          </button>
        </div>
      </div>

      <!-- TAGS -->
      <div class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body">
          <h6 class="fw-bold subtitle">Tags</h6>
          <div v-for="(tag,i) in form.tags" :key="i" class="d-flex mb-2 align-items-center">
            <div class="me-3 semi-content">{{ i }}</div>
            <input class="android-input semi-content me-2" v-model="form.tags[i]" placeholder="Tag" />
            <button class="btn btn-danger btn-sm" @click="form.tags.splice(i,1)">✕</button>
          </div>
          <button class="btn btn-outline-primary btn-sm" @click="form.tags.push('')">+ Add Tag</button>
        </div>
      </div>

      <div>
    <section class="floating-item" v-if="preview">
      <div class="item-card glow-animated card shadow-lg floating-item-overlay rounded-4">
        <div class="floating-item-overlay-content">
          <div class="card-header bg-forest">
            <!-- BASIC INFO -->
                <h6 class="fw-bold title">Basic Information</h6>

                <div class="sub-title text-white "><strong>Title:</strong>{{ form.title }}</div>
                <div class="content"><strong>Description:</strong></div>
                <div class="sub-content" v-for="desc in form.description">
                  <div class="mt-3">
                    {{ desc }}
                  </div>
                </div>

                <div class="badge bg-primary mt-2">{{ form.opportunity_type }}</div>
                <div class="badge bg-primary mt-2 ms-2"><strong>Status</strong>:  {{ form.status }}</div>
                <div class=""><router-link class="btn btn-ocean me-3" @click="form">Continue editing Opportunity</router-link></div>
          </div>

          <div class="card-body">

            <!-- ORGANIZATION -->
            <div class="item-card glow-animated mt-3">
              <div class="card-body">
                <h6 class="fw-bold title">Organization</h6>

                <div class="content"><strong>Name:</strong> {{ form.provider.organization_name || 'N/A' }}</div>
                <div class="content"><strong>Type:</strong> {{ form.provider.organization_type || 'N/A' }}</div>

                <img
                  v-if="form.provider.organization_logo"
                  :src="form.provider.organization_logo"
                  class="img-fluid rounded mt-2"
                  style="max-height:80px"
                />
              </div>
            </div>

            <!-- LOCATION -->
            <div class="item-card glow-animated mt-3">
              <div class="card-body">
                <h6 class="fw-bold title">Location</h6>

                <div class="content"><strong>Country:</strong> {{ form.host_country }}</div>
                <div class="content"><strong>City:</strong> {{ form.location.city || 'N/A' }}</div>
                <div class="content"><strong>Mode:</strong> {{ form.location.mode || 'N/A' }}</div>
              </div>
            </div>

            <!-- ELIGIBILITY -->
            <div class="item-card glow-animated mt-3" v-if="form.details.eligibility">
              <div class="card-body">
                <h6 class="fw-bold title">Eligibility</h6>

                <div class="content"><strong>Nationalities:</strong> {{ form.details.eligibility.eligible_nationalities }}</div>
                <div class="content"><strong>Age Limit:</strong> {{ form.details.eligibility.age_limit }}</div>
                <div class="content"><strong>Education:</strong> {{ form.details.eligibility.education_requirements.minimum }}</div>

                <div v-if="form.details.eligibility.sector_knowledge.length" class="content">
                  <strong>Sector Knowledge:</strong>
                  <ul>
                    <li v-for="(s,i) in form.details.eligibility.sector_knowledge" class="content" :key="i">{{ s }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- BENEFITS -->
            <div class="item-card glow-animated mt-3" v-if="form.details.benefits?.length">
              <div class="card-body">
                <h6 class="fw-bold title">Benefits</h6>
                <ul>
                  <li v-for="(b,i) in form.details.benefits" class="content" :key="i">{{ b }}</li>
                </ul>
              </div>
            </div>

            <!-- REQUIREMENTS -->
            <div class="item-card glow-animated mt-3" v-if="form.details.requirements?.length">
              <div class="card-body">
                <h6 class="fw-bold title">Requirements</h6>
                <ul>
                  <li v-for="(r,i) in form.details.requirements" class="content" :key="i">{{ r }}</li>
                </ul>
              </div>
            </div>

            <!-- APPLICATION -->
            <div class="item-card glow-animated mt-3" v-if="form.details.application">
              <div class="card-body">
                <h6 class="fw-bold title">Application</h6>

                <div class="content"><strong>Mode:</strong> {{ form.details.application.application_mode }}</div>
                <div class="content"><strong>Fee:</strong> {{ form.details.application.application_fee }}</div>
                <div class="content"><strong>Deadline:</strong> {{ form.details.application.deadline }}</div>

                <a
                  v-if="form.details.application.application_link"
                  :href="form.details.application.application_link"
                  target="_blank"
                  class="btn btn-ocean mt-2"
                >
                  Apply Now
                </a>
              </div>
            </div>

            <!-- TAGS -->
            <div class="item-card glow-animated mt-3" v-if="form.tags?.length">
              <div class="card-body">
                <h6 class="fw-bold title">Tags</h6>
                <span class="custom-badge bg-forest content me-2" v-for="(t,i) in form.tags" :key="i">
                  {{ t }}
                </span>
              </div>
            </div>

          </div>
          <div class="card-footer">
            <div class="">
              <button class="btn btn-ocean" @click="preview = false">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>

      <!-- SUBMIT -->
      <div class="item-card glow-animated shadow-sm mt-3">
        <div class="card-body d-flex justify-content-between align-items-center">
          <button class="btn btn-primary me-3" :disabled="loading" @click="submit">
            <span v-if="loading" class="spinner-border spinner-border-sm"></span>
            Save <span class="text-capitalize">{{ type }}</span>
          </button>
          <button class="btn btn-primary" :disabled="loading" @click="appendPreview">
            Preview <span class="text-capitalize">{{ type }}</span>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useDataStore } from '@/stores/dataStore'

const router = useRouter()
const route = useRoute()
const dataStore = useDataStore()
const loading = ref(false)
const preview = ref(false)
const activeType = ref('')
const opportunity = ref({})


const opportunity_id =  route.params.id
const opportunityCategories = ref([])
const opportunityTypes = ref([])

const fetchRequirements = async (force = false) => {
  loading.value = true
  await dataStore.fetchData('opp_category', force)
  await dataStore.fetchData('opp_type', force)
  await dataStore.fetchData('admin_opportunities', true)

  opportunity.value = dataStore.items.admin_opportunities.filter((c) =>  c.id === opportunity_id)[0] || {}

  opportunityCategories.value = dataStore.items.opp_category || []
  opportunityTypes.value = dataStore.items.opp_type || []
  loading.value = false
}


const detailSections = [
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
  provider: {},

  host_country: '',
  location: {}, // general location
  tags: [],

  // Type-specific details
  details: opportunity.value.details,
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
    router.push('/opportunities')
  } catch (e) {
    alert('Failed to save opportunity')
    console.error(e)
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
  flex-direction: row;
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