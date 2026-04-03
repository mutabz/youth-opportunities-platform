<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { useHead } from '#app'
import scholarships from '~/data/scholarships.json'

// Get current slug from URL
const route = useRoute()
const slug = route.params.slug

// Find the current scholarship post
const post = computed(() => {
  return scholarships.find(s => s.slug === slug) || {
    title: 'Scholarship Opportunities',
    description: 'Find scholarships, internships, jobs, and fellowships worldwide.',
    slug: 'default'
  }
})

// Base URL of your site
const BASE_URL = 'https://youthplatform.co.rw'

// Dynamic SEO head
useHead({
  title: post.value.title,
  meta: [
    { name: 'description', content: post.value.description },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${BASE_URL}/opportunities/scholarships/${post.value.slug}` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value.title },
    { name: 'twitter:description', content: post.value.description }
  ],
  link: [
    { rel: 'canonical', href: `${BASE_URL}/opportunities/scholarships/${post.value.slug}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": post.value.title,
        "description": post.value.description,
        "url": `${BASE_URL}/opportunities/scholarships/${post.value.slug}`,
        "provider": {
          "@type": "Organization",
          "name": "YOP Rwanda",
          "sameAs": BASE_URL
        }
      })
    }
  ]
})
</script>

<template>
  <div class="scholarship-page">
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <!-- Add more content dynamically if needed -->
  </div>
</template>