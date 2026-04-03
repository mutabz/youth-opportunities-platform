<template>
<nav>
    <div class="nav-lg">
          <NuxtLink class="logo mr-5" to="/">YouthLink</NuxtLink>
          
        <ul class="nav-links">
            <li><NuxtLink class="nav-link" to="/adm/prt">Dashboard</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/adm/prt/opportunities">Opportunities</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/adm/prt/applications">Applications</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/user/dashboard">Profile</NuxtLink></li>
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

    <div class="n-sidebar" id="sidebar">
        
        <ul class="n-nav-links">
            <li name="nav-s-item">
                <NuxtLink to="/">
                    <Icon name="fa6-solid:house" /> Home Page
                </NuxtLink>
            </li>
            <li name="nav-s-item">
                <NuxtLink to="explore.html">
                    <Icon name="fa6-solid:link" /> Explore Page
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
</nav>
</template>

<script setup>
import { getInitials } from '~/composables/utils'

const userStore = useUserStore()

const user = computed(() => userStore.user)
</script>