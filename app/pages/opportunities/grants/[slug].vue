<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { useHead } from '#app'
import grants from '~/data/grants.json'

// Get current slug from URL
const route = useRoute()
const slug = route.params.slug

// Find the current scholarship post
const post = computed(() => {
  return internships.find(s => s.slug === slug) || {
    title: 'Scholarship Opportunities',
    description: 'Find internships, internships, jobs, and fellowships worldwide.',
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
    { property: 'og:url', content: `${BASE_URL}/opportunities/internships/${post.value.slug}` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value.title },
    { name: 'twitter:description', content: post.value.description }
  ],
  link: [
    { rel: 'canonical', href: `${BASE_URL}/opportunities/internships/${post.value.slug}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": post.value.title,
        "description": post.value.description,
        "url": `${BASE_URL}/opportunities/internships/${post.value.slug}`,
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
  <div class="article-wrapper">
    <article class="article-container">

      <header class="article-header">
        <h1 class="article-title">
          {{ post.title }}
        </h1>
      </header>

      <section class="article-content">
        <p
          v-for="(paragraph, i) in post.description"
          :key="i"
          class="article-paragraph"
        >
          {{ paragraph }}
        </p>
      </section>
    </article>
  </div>

      <section class="container">


        <div class="opp-grid">
          <div class="card" v-for="opp in opportunities" key="opp.id">
            <div class="card-content">
            </div>
          </div>
        </div>
      </section>
</template>

<style scoped>

.article-wrapper{
  background:#f7f9fc;
  min-height:100vh;
  padding:1rem;
  display:flex;
  justify-content:center;
}

.article-container{
  max-width:900px;
  width:100%;
  background:white;
  padding:50px 60px;
  border-radius:14px;
  box-shadow:0 10px 35px rgba(0,0,0,0.05);
}

.article-header{
  margin-bottom:35px;
  border-bottom:1px solid #eee;
  padding-bottom:20px;
}

.article-title{
  font-size:38px;
  font-weight:800;
  line-height:1.2;
  color:#111827;
}

.article-content{
  display:flex;
  flex-direction:column;
  gap:0rem;
}

.article-paragraph{
  font-size:18px;
  line-height:1.2;
  color:#374151;
}

.article-paragraph:first-letter{
  font-size:26px;
  font-weight:600;
  color:#111827;
}

@media (max-width:768px){

.article-container{
  padding:30px 25px;
}

.article-title{
  font-size:28px;
}

.article-paragraph{
  font-size:16px;
}

}

</style>