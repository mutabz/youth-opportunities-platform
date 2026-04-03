<template>
  <section class="gen-hero">
      <h1>Explore Opportunities</h1>
      <p>Find scholarships, internships, fellowships and grants from around the world.</p>
  </section>

  <section class="explore-container">

    <!-- SIDEBAR -->
    <aside class="sidebar d-lg-none">
          <h3>Filters</h3>

          <div class="filter-group">
              <label>Category</label>
              <select>
                  <option>All</option>
                  <option>Scholarships</option>
                  <option>Internships</option>
                  <option>Grants</option>
                  <option>Fellowships</option>
              </select>
          </div>

          <div class="filter-group">
              <label>Funding Type</label>
              <select>
                  <option>Any</option>
                  <option>Fully Funded</option>
                  <option>Partially Funded</option>
                  <option>Self Funded</option>
              </select>
          </div>

          <div class="filter-group">
              <label>Location</label>
              <select>
                  <option>Global</option>
                  <option>Europe</option>
                  <option>Africa</option>
                  <option>USA</option>
              </select>
          </div>
    </aside>

    <!-- MAIN -->
    <div class="main-content">
      <div class="top-bar grid-2">
        <div class="explore-search-bar">
          <input type="text" placeholder="Search opportunities...">
          <button class="btn btn-primary ">Search</button>
        </div>

        <select style="padding:0.8rem;border-radius:8px;border:1px solid #e2e8f0;">
          <option>Sort by Latest</option>
          <option>Deadline</option>
          <option>Popularity</option>
        </select>
      </div>

      <div class="container mx-auto p-4">
        <!-- Loading -->
        <div v-if="loading" class="text-blue-500">Loading...</div>
        <!-- Error -->
        <div v-if="error" class="text-red-500">{{ error }}</div>

        <div v-if="items && items.length" class="opp-grid">
            <div class="card" v-for="opp in items" key="opp.id">
              <div class="card-img">
                <span class="card-badge">{{ opp.category  || 'Opportunity' }}</span>
                <img src="/assets/images/images.png"/>
              </div>
              <div class="card-content">
                <h3 class="label">{{ opp.title }}</h3>
                <p>{{ truncate(opp.description[0] || '', 100) }}</p>
                <div class="card-footer">
                  <span class="deadline"><Icon name="fa6-solid:location-pin"/> {{ truncate(opp.host_country, 10) }}, {{ truncate(opp.location.city, 10) }}</span>
                  <NuxtLink :to="'/opportunities/' + opp.id" class="btn btn-outline-primary rounded-4" style="font-size: 0.8rem; padding: 0.4rem 1rem;">View Details</NuxtLink>
                </div>
              </div>
            </div>
        </div>

        <!-- Empty state -->
        <div v-else-if="!loading && !error">No opportunities found.</div>
      </div>

      <div class="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  </section>




</template>

<script setup>
// Fetch data on component mount
onMounted(async () => {
  await dataStore.fetchData(model)
})

</script>