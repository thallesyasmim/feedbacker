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
        <ErrorsMessage :errors="emailErrors" />
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
        <ErrorsMessage :errors="passwordErrors" />
      </label>

      <button
        :disabled="disabledSubmitButton"
        :class="{
          'opacity-50': disabledSubmitButton,
          'cursor-not-allowed': disabledSubmitButton,
        }"
        class="px-12 py-2 mt-10 text-xl font-bold text-white rounded-full bg-brand-main focus:outline transition-all duration-150"
        type="submit"
      >
        <Icon v-if="state.isLoading" name="loading" class="animate-spin" />
        <span v-else>Entrar</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useModal, useLogin } from '@/composables/index'
import { useToast } from 'vue-toastification'
import { useVuelidate } from '@vuelidate/core'
import { EmitterSingleton } from '@/utils/helpers/emitter'
import { ErrorMessage } from '@/types/index'
import ErrorsMessage from '@/components/ErrorsMessage/index.vue'
import Icon from '@/components/Icon/index.vue'
import { AuthUseCaseFactory } from '@/domain/usecases/authUseCase'

const router = useRouter()
const toast = useToast()
const modal = useModal(new EmitterSingleton().getInstance())
const { handleLogin, validationRules } = useLogin(
  AuthUseCaseFactory.getInstance()
)
const state = reactive({
  isLoading: false,
  email: '',
  password: '',
})

const v$ = useVuelidate(validationRules, state)

const emailErrors = computed(
  () =>
    v$.value.email.$errors.map(({ $uid, $message }) => ({
      id: $uid,
      message: $message,
    })) as ErrorMessage[]
)
const passwordErrors = computed(
  () =>
    v$.value.password.$errors.map(({ $uid, $message }) => ({
      id: $uid,
      message: $message,
    })) as ErrorMessage[]
)
const disabledSubmitButton = computed(
  () => state.isLoading || !state.email || !state.password
)

async function handleSubmit() {
  try {
    toast.clear()
    state.isLoading = true
    const token = await handleLogin(state.email, state.password)

    if (!token) {
      toast.error('E-mail ou senha inválidos.')
      return
    }

    window.localStorage.setItem('token', token)
    router.push({ name: 'Feedbacks' })
    modal.close()
  } catch (error) {
    toast.error('Ocorreu um erro interno, tente novamente mais tarde.')
    console.error(error)
  } finally {
    state.isLoading = false
  }
}

function handleCloseModal() {
  modal.close()
}
</script>
