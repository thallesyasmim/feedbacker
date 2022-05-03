<template>
  <div class="flex justify-between items-center gap-12">
    <h1 class="text-4xl font-black text-black">Entre em sua conta</h1>
    <button
      class="text-4xl text-gray-600 focus:outline-none"
      @click="handleCloseModal"
    >
      &times;
    </button>
  </div>

  <div class="mt-12">
    <form @submit.prevent="handleSubmit">
      <label for="email" class="block">
        <span class="text-lg font-medium text-black">E-mail</span>
        <input
          v-model="state.email.value"
          type="email"
          name="email"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="jane.doe@gmail.com"
        />
        <span
          v-if="!!state.email.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ state.email.errorMessage }}
        </span>
      </label>

      <label for="password" class="block mt-9">
        <span class="text-lg font-medium text-black">Senha</span>
        <input
          v-model="state.password.value"
          type="password"
          name="password"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="****"
        />
        <span
          v-if="!!state.password.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ state.password.errorMessage }}
        </span>
      </label>

      <button
        :disabled="state.isLoading"
        :class="{
          'opacity-50': state.isLoading,
        }"
        class="px-12 py-2 mt-10 text-xl font-bold text-white rounded-full bg-brand-main focus:outline transition-all duration-150"
        type="submit"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useModal } from '@/composables/useModal'
import { EmitterSingleton } from '@/utils/helpers/emitter'

const modal = useModal(new EmitterSingleton().getInstance())
const state = reactive({
  hasErrors: false,
  isLoading: false,
  email: {
    value: '',
    errorMessage: '',
  },
  password: {
    value: '',
    errorMessage: '',
  },
})

function handleCloseModal() {
  modal.close()
}

function handleSubmit() {
  return ''
}
</script>
