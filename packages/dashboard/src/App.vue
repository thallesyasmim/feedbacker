<template>
  <modal-factory />
  <router-view />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGetCurrentUser } from '@/main/factories/composables/useGetCurrentUserFactory'
import ModalFactory from '@/components/ModalFactory/index.vue'
import { IUser } from '@/domain/entities/User'
import { setCurrentUser } from './store/user'

const router = useRouter()
const route = useRoute()
const { handleGetCurrentUser } = useGetCurrentUser()

watch(
  () => route.path,
  async () => {
    if (route.meta.hasAuth) {
      const token = window.localStorage.getItem('token')
      if (!token) {
        router.push({ name: 'Home' })
      }

      const user: IUser = await handleGetCurrentUser()
      setCurrentUser(user)
    }
  }
)
</script>
