<script setup>
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeaderSection.vue'
import ServiceSection from '../sections/home/ServiceSection.vue'

</script>

<template>
  <PageHeader v-if="$route.meta.judul" :judul="$route.meta.judul" :breadcrumb="$route.meta.breadcrumb" />

  <div class="container py-4">
    <ServiceSection />
  </div>

</template>