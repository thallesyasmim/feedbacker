<template>
  <modal-factory />
  <router-view />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ModalFactory from '@/components/ModalFactory/index.vue'

const router = useRouter()
const route = useRoute()

watch(
  () => route.path,
  () => {
    if (route.meta.hasAuth) {
      const token = window.localStorage.getItem('token')
      if (!token) {
        router.push({ name: 'Home' })
      }
    }
  }
)
</script>
