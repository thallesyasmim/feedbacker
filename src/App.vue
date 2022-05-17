<template>
  <modal-factory />
  <router-view />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGetCurrentUser } from '@/composables'
import { GetCurrentUserUseCaseFactory } from '@/domain/usecases/getCurrentUserUseCase'
import ModalFactory from '@/components/ModalFactory/index.vue'
import { IUser } from './types'
import { setCurrentUser } from './store/user'

const router = useRouter()
const route = useRoute()
const { handleGetCurrentUser } = useGetCurrentUser(
  GetCurrentUserUseCaseFactory.getInstance()
)

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
