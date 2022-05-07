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
          v-model="state.email"
          type="email"
          name="email"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="jane.doe@gmail.com"
          @blur="v$.email.$touch"
        />
        <div
          class="input-errors"
          v-for="{ id, message } of emailErrors"
          :key="id"
        >
          <span class="block font-medium text-brand-danger">{{ message }}</span>
        </div>
      </label>

      <label for="password" class="block mt-9">
        <span class="text-lg font-medium text-black">Senha</span>
        <input
          v-model="state.password"
          type="password"
          name="password"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="****"
          @blur="v$.password.$touch"
        />
        <div
          class="input-errors"
          v-for="{ id, message } of passwordErrors"
          :key="id"
        >
          <span class="block font-medium text-brand-danger">{{ message }}</span>
        </div>
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
import { reactive, computed } from 'vue'
import { useModal, useLogin } from '@/composables/index'
import { useVuelidate } from '@vuelidate/core'
import { EmitterSingleton } from '@/utils/helpers/emitter'

const modal = useModal(new EmitterSingleton().getInstance())
const { handleSubmit, validationRules } = useLogin()
const state = reactive({
  hasErrors: false,
  isLoading: false,
  email: '',
  password: '',
})

const v$ = useVuelidate(validationRules, state)

const emailErrors = computed(() =>
  v$.value.email.$errors.map(({ $uid, $message }) => ({
    id: $uid,
    message: $message,
  }))
)
const passwordErrors = computed(() =>
  v$.value.password.$errors.map(({ $uid, $message }) => ({
    id: $uid,
    message: $message,
  }))
)

function handleCloseModal() {
  modal.close()
}
</script>
