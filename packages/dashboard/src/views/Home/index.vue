<template>
  <custom-header @login="handleLogin" @create-account="handleCreateAccount" />
  <contact />
  <footer class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">
      feedbacker &copy; {{ currentYear }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useModal } from '@/main/factories/composables/useModalFactory'
import Contact from './Contact.vue'
import CustomHeader from './CustomHeader.vue'

const router = useRouter()
const modal = useModal()
const currentYear = computed(() => new Date().getFullYear())

onMounted(() => {
  const token = localStorage.getItem('token')

  if (token) {
    router.push({
      name: 'Feedbacks',
    })
  }
})

function handleLogin() {
  modal.open({
    component: 'ModalLogin',
  })
}

function handleCreateAccount() {
  modal.open({
    component: 'ModalCreateAccount',
  })
}
</script>
