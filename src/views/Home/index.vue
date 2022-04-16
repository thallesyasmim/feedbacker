<template>
  <custom-header />
  <contact />
  <footer class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker &copy; {{ currentYear }}</p>
  </footer>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'

const router = useRouter()
const currentYear = computed(() => new Date().getFullYear())

onMounted(() => {
  const token = localStorage.getItem('token')

  if (token) {
    router.push({
      name: 'Feedbacks'
    })
  }
})
</script>
