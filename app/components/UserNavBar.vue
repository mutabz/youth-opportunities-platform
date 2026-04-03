<template>
<nav>
    <div class="adm-nav-lg">
          <NuxtLink class="logo mr-5" to="/">YouthLink</NuxtLink>
          
        <ul class="adm-nav-links">
            <li><NuxtLink class="nav-link" to="/">Back to Home</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/user/dashboard">Dashboard</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/user/dashboard/opportunities">Opportunities</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/user/dashboard/applications">Applications</NuxtLink></li>  
            <li><NuxtLink class="nav-link" to="/user/dashboard/resources">Resources</NuxtLink></li>            
            <li><NuxtLink class="nav-link" to="/user/dashboard/profile">Profile</NuxtLink></li>
        </ul>
        <div class="">
          <NuxtLink to="/user/dashboard/profile" class="nav-profile">
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
                    <NuxtLink class="m-2" to="/join-free/LoginPage" v-if="!user">
                        <Icon name="fa6-solid:right-to-bracket" />
                    </NuxtLink>
                    <NuxtLink class="m-2" to="/user/dashboard/profile" v-if="user">
                        <Icon name="fa6-solid:user" />
                    </NuxtLink>
                </div>
                <div class="">
                    <NuxtLink class="me-2" to="/">
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
                <NuxtLink class="nav-link" to="/user/dashboard">
                    <Icon name="fa6-solid:house" /> Dashboard
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/user/dashboard/opportunities">
                    <Icon name="fa6-solid:link" /> Opportunities
                </NuxtLink>
            </div>
            <li name="nav-s-item">
                <NuxtLink to="/user/dashboard/applications">
                    <Icon name="fa6-solid:chalkboard" /> Applications
                </NuxtLink>
            </li>
            <div name="nav-s-item">
                <NuxtLink to="/user/dashboard/profile">
                    <Icon name="fa6-solid:lock" /> Profile
                </NuxtLink>
            </div>
            <div name="nav-s-item">
                <NuxtLink to="/user/dashboard/resources">
                    <Icon name="fa6-solid:list" /> Resources
                </NuxtLink>
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

<style scoped>


/* ================= NAVIGATION ================= */

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
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
    color: var(--primary);
}
</style>