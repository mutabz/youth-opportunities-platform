<template>
<nav>
    <div class="adm-nav-lg">
          <NuxtLink class="logo mr-5" to="/">YouthLink</NuxtLink>
          
        <ul class="adm-nav-links d-flex flex-wrap gap-2">
            <li><NuxtLink class="nav-link btn-outline-primary btn btn-sm  p-2" to="/adm/mod">Dashboard</NuxtLink></li>
            <li><NuxtLink class="nav-link btn-outline-primary btn btn-sm  p-2" to="/adm/mod/opportunities">Opportunities</NuxtLink></li>
            <li><NuxtLink class="nav-link btn-outline-primary btn btn-sm  p-2" to="/adm/mod/applications">Applications</NuxtLink></li>
            <li><NuxtLink class="nav-link btn-outline-primary btn btn-sm  p-2" to="/adm/mod/users">Users</NuxtLink></li>
            <li><NuxtLink class="nav-link btn-outline-primary btn btn-sm  p-2" to="/adm/mod/partners">Partners</NuxtLink></li>
            <li><NuxtLink class="nav-link btn-outline-primary btn btn-sm  p-2" to="/adm/mod/resources">Resources</NuxtLink></li>
            <li><NuxtLink class="nav-link btn-outline-primary btn btn-sm  p-2" to="/adm/mod/organizations">Organizations</NuxtLink></li>
            <li><NuxtLink class="nav-link btn-outline-primary btn btn-sm  p-2" to="/adm/mod/mentors">Mentors</NuxtLink></li>
            <li><NuxtLink class="nav-link btn-outline-primary btn btn-sm  p-2" to="/user/dashboard">User Dashboard</NuxtLink></li>
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
            <div class="menu-holder" id='toggle-btn'>
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

    <div class="bottom-nav-sm"> 
        <div class="auth-sect">       
            <div class="menu-holder">
                <div class="menu">
                    <span class="long"></span>
                    <span class="short"></span>
                </div>
            </div> 
            <div class="holder d-flex">
                <Icon name="fa6-solid:plus" /> Membership
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
<!--
    <div class="n-sidebar" id="sidebar">
        
        <ul class="n-adm-nav-links">
            <li name="nav-s-item">
                <NuxtLink to="/">
                    <Icon name="fa6-solid:house" /> Home Page
                </NuxtLink>
            </li>
            <li name="nav-s-item">
                <NuxtLink to="explore.html">
                    <Icon name="fa6-solid:link btn-outline-primary btn btn-sm  p-2" /> Explore Page
                </NuxtLink>
            </li>
            <li name="nav-s-item">
                <NuxtLink to="mentors.html">
                    <Icon name="fa6-solid:chalkboard" /> Mentors Page
                </NuxtLink>
            </li>
            <li name="nav-s-item">
                <NuxtLink to="resources.html">
                    <Icon name="fa6-solid:list" /> Resources Page
                </NuxtLink>
            </li>
            <li name="nav-s-item">
                <NuxtLink to="for_partners.html">
                    <Icon name="fa6-solid:lock" /> For Partners Page
                </NuxtLink>
            </li>
            <li name="nav-s-item">
                <NuxtLink to="register.html" class="btn btn-filled">Join Free</NuxtLink>
            </li>
            <li name="nav-s-item">
                <NuxtLink to="login.html" class="btn btn-outline">Log In</NuxtLink>
            </li>
        </ul>
    </div>
-->
</nav>
</template>

<script setup>
import { getInitials } from '~/composables/utils'

const userStore = useUserStore()

const user = computed(() => userStore.user)
</script>

<style scoped>


/* ================= NAVIGATION ================= */
.adm-nav-lg {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    max-height: 4rem;
    min-height: 4rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-bottom: 0.1rem solid rgba(0, 0, 0, .20);
    z-index: 10000;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.215);
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: varbtn-outline-primary);
    text-decoration: none;
    letter-spacing: -1px;
}

.adm-nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    white-space: nowrap;
}

.adm-nav-links a {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 600;
    font-size: 0.95rem;
    transition: color 0.3s;
}

.adm-nav-links a:hover {
    color: varbtn-outline-primary);
}
</style>