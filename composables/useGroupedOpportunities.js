import competitions from '~/data/competitions.json'
import internships from '~/data/internships.json'
import fellowships from '~/data/fellowships.json'
import grants from '~/data/grants.json'
import jobs from '~/data/jobs.json'
import scholarships from '~/data/scholarships.json'
import studyAbroad from '~/data/study-abroad.json'
import { computed } from 'vue'

export function useGroupedOpportunities() {
  const groups = computed(() => ({
    Scholarships: scholarships.map(s => ({ name: s.title, path: `/opportunities/scholarships/${s.slug}`, description: s.description })),
    Internships: internships.map(i => ({ name: i.title, path: `/opportunities/internships/${i.slug}`, description: i.description })),
    Fellowships: fellowships.map(f => ({ name: f.title, path: `/opportunities/fellowships/${f.slug}`, description: f.description })),
    Grants: grants.map(g => ({ name: g.title, path: `/opportunities/grants/${g.slug}`, description: g.description })),
    Jobs: jobs.map(j => ({ name: j.title, path: `/opportunities/jobs/${j.slug}`, description: j.description })),
    "Study Abroad": studyAbroad.map(sa => ({ name: sa.title, path: `/opportunities/study-abroad/${sa.slug}`, description: sa.description }))
  }))

  return { groups }
}