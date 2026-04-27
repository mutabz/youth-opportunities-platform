<template>
<nav>
    <div class="nav-lg">
          <NuxtLink class="logo mr-5" to="/">YouthLink</NuxtLink>
          
        <ul class="nav-links">
            <li><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/opportunities">Explore</NuxtLink></li>
            <!--
            <li><NuxtLink class="nav-link" to="/mentors">Mentors</NuxtLink></li>-->
            <li><NuxtLink class="nav-link" to="/resources">Resources</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/for-partners">For Partners</NuxtLink></li>
        </ul>
        <div class="">
          <NuxtLink v-if="!user" class="btn btn-primary btn-lg rounded-5" to="/join-free"><span class="px-3">Join Free <Icon name="fa6-solid:arrow-right" /> </span></NuxtLink>

          <NuxtLink to="/user/dashboard" class="nav-profile" v-else>
            <div class="bg-primary img">{{ getInitials(user.full_name) }}</div>
          </NuxtLink>
        </div>
    </div>

    <div class="nav-sm"> 
        <div class="auth-sect">       
            <div class="menu-holder" id='toggle-btn' @click="showSidebar = !showSidebar">
                <div class="menu">
                    <span class="long"></span>
                    <span class="short"></span>
                </div>
            </div> <!--
            <div class="holder d-flex">
                <Icon name="fa6-solid:plus" />Membership
            </div> -->
        </div>
        
        <div class="auth-sect"> 
            <div class="holder">
                <NuxtLink to="/user/dashboard">
                    <Icon name="fa6-solid:gauge" />
                </NuxtLink>
            </div>
            <div class="holder d-flex">
                <div class="">
                    <NuxtLink to="/join-free/LoginPage" v-if="!user">
                        <Icon name="fa6-solid:right-to-bracket" />
                    </NuxtLink>
                    <NuxtLink to="/user/dashboard/profile" v-if="user">
                        <Icon name="fa6-solid:user" />
                    </NuxtLink>
                </div>
                <div class="">
                    <NuxtLink to="/">
                        <Icon name="fa6-solid:house" />
                    </NuxtLink>
                </div>
            </div>
        </div>     
    </div>

    <!--
    <div class="bottom-nav-sm"> 
        <div class="auth-sect">       
            <div class="menu-holder">
                <div class="menu">
                    <span class="long"></span>
                    <span class="short"></span>
                </div>
            </div> 
            <div class="holder d-flex">
                <Icon name="fa6-solid:plus" />Membership
            </div> 
        </div>
        <div class="auth-sect"> 
            <div class="holder">
                <Icon name="fa6-solid:bell" />
            </div>
            <div class="holder d-flex">
                <div class="">
                    <Icon name="fa6-solid:user-plus" />
                </div>
                <div class="">
                    <Icon name="fa6-solid:envelope" />
                </div>
            </div>
        </div>     
    </div>
    -->

    <div class="n-sidebar" :class="{ 'open': showSidebar }">

        <div class="d-flex justify-content-between align-items-center nav-head">
            <div class="fw-bold text-uppercase">Browse here</div>
            <div class="menu-holder" id='toggle-btn' @click="showSidebar = !showSidebar">
                <div class="menu">
                    X
                </div>
            </div> 
        </div>
        <hr>
            
        <div class="n-nav-links">
            <div name="nav-s-item">
                <NuxtLink to="/">
                    <Icon name="fa6-solid:house" /> Home Page
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/opportunities">
                    <Icon name="fa6-solid:link" /> Explore Page
                </NuxtLink>
            </div>
            <!--
            <li name="nav-s-item">
                <NuxtLink to="/mentors">
                    <Icon name="fa6-solid:chalkboard" /> Mentors Page
                </NuxtLink>
            </li>
            -->
            <div name="nav-s-item">
                <NuxtLink to="/resources">
                    <Icon name="fa6-solid:list" /> Resources Page
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/for-partners">
                    <Icon name="fa6-solid:lock" /> For Partners Page
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/opportunities">
                    <Icon name="fa6-solid:list" /> Resources Page
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/opportunities/scholarships">
                    <Icon name="fa6-solid:graduation-cap" /> Scholarships
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/opportunities/grants">
                    <Icon name="fa6-solid:hand-holding-dollar" /> Grants & Funding
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/opportunities/internships">
                    <Icon name="fa6-solid:briefcase" /> Internships
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/opportunities/competitions">
                    <Icon name="fa6-solid:users" /> Competitions
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/opportunities/fellowships">
                    <Icon name="fa6-solid:award" /> Fellowships
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/opportunities/jobs">
                    <Icon name="fa6-solid:briefcase" /> Job In Rwanda
                </NuxtLink>
            </div>

            <div name="nav-s-item">
                <NuxtLink to="/join-free" class="btn btn-outline-primary rounded-5">Join Free</NuxtLink>
            </div>
        </div>
    </div>
</nav>
</template>

<script setup>
import { getInitials } from '~/composables/utils'
import { ref } from 'vue'

const showSidebar = ref(false)
const userStore = useUserStore()

const user = computed(() => userStore.user)
</script>