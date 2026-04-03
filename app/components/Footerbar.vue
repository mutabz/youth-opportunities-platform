<template>
    <footer>
        <div class="footer-cols">
            <div class="footer-col">
                <a href="#" class="logo" style="color: white;">YouthLink</a>
                <p style="margin-top: 1rem; color: #94a3b8; font-size: 0.9rem;">Bridging the gap between talent and opportunity. We believe that your location shouldn't limit your potential.</p>
            </div>
            <div class="footer-col">
                <h4>Platform</h4>
                <ul>
                  <li class="d-flex align-items-center">
                      <Icon name="fa6-solid:house" /> <!-- Home icon -->
                      <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                  </li>
                  <li class="d-flex align-items-center">
                      <Icon name="fa6-solid:magnifying-glass" /> <!-- Explore / Search -->
                      <NuxtLink class="nav-link" to="/opportunities">Explore</NuxtLink>
                  </li>
                  <!--
                  <li class="d-flex align-items-center">
                      <Icon name="fa6-solid:chalkboard" />
                      <NuxtLink class="nav-link" to="/mentors">Mentors</NuxtLink>
                  </li>
                  -->
                  <li class="d-flex align-items-center">
                      <Icon name="fa6-solid:book-open" /> <!-- Resources / Knowledge -->
                      <NuxtLink class="nav-link" to="/resources">Resources</NuxtLink>
                  </li>
                  <li class="d-flex align-items-center">
                      <Icon name="fa6-solid:building" /> <!-- Resources / Knowledge -->
                      <NuxtLink class="nav-link" to="/organizations">Organizations</NuxtLink>
                  </li>
                  <li class="d-flex align-items-center">
                      <Icon name="fa6-solid:handshake" /> <!-- Partners / Collaboration -->
                      <NuxtLink class="nav-link" to="/for-partners">For Partners</NuxtLink>
                  </li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Support</h4>
                <ul>
                    <li class="d-flex align-items-center">
                        <NuxtLink to="/support">
                            <Icon name="fa6-solid:circle-question" class="me-2"/> <!-- Help icon -->
                            <span>Help Center</span>
                        </NuxtLink>
                    </li>
                    <li class="d-flex align-items-center">
                        <NuxtLink to="/support/safety-guidelines">
                            <Icon name="fa6-solid:shield" class="me-2"/> <!-- Safety icon -->
                            <span>Safety Guidelines</span>
                        </NuxtLink>
                    </li>
                    <li class="d-flex align-items-center">
                        <NuxtLink to="/support/contact-us">
                            <Icon name="fa6-solid:envelope" class="me-2"/> <!-- Contact icon -->
                            <span>Contact Us</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Legal</h4>
                <ul>
                    <li class="d-flex align-items-center">                        
                        <NuxtLink to="/legal">
                            <Icon name="fa6-solid:lock" class="me-2"/> <!-- Privacy icon -->
                            <span>Privacy Policy</span>
                        </NuxtLink>
                    </li>
                    <li class="d-flex align-items-center">
                        <NuxtLink to="/legal/terms-and-conditions">
                            <Icon name="fa6-solid:file-contract" class="me-2"/> <!-- Terms icon -->
                            <span>Terms of Use</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div style="border-top: 1px solid #1e293b; padding-top: 2rem; text-align: center; font-size: 0.8rem; color: #64748b;">
            &copy; 2026 YouthLink Platform. All rights reserved.
        </div>
    </footer>
</template>
<!--
<script setup>
import { useGroupedOpportunities } from '~/composables/useGroupedOpportunities'

const { groups } = useGroupedOpportunities()
</script>

<template>
  <div class="opportunity-sidebar">
    <div v-for="(items, category) in groups" :key="category" class="category">
      <h3>{{ category }}</h3>
      <ul>
        <li v-for="item in items" :key="item.path">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
-->