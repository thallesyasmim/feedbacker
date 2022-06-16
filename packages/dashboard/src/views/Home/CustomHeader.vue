<template>
  <header>
    <div class="header-group">
      <section class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img
            class="w-full"
            src="../../assets/images/logo_white.png"
            alt="Feedbacker Logo"
          />
        </div>

        <div class="flex">
          <button
            class="px-6 py-2 font-bold bg-transparent rounded-full text-white"
            @click="handleEmitCreateAccount"
          >
            Criar uma conta
          </button>

          <button
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-main"
            @click="handleEmitLogin"
          >
            Entrar
          </button>
        </div>
      </section>

      <section class="flex flex-col mt-32">
        <h1 class="text-4xl font-black text-white">
          Tenha um feedback. <br class="hidden lg:inline-block" />
          E faça seus clientes mais felizes
        </h1>
        <p class="mt-1 text-lg font-medium text-white">
          Receba ideias, reclamações e feedbacks com um
          <br class="hidden lg:inline-block" />
          simples widget na página.
        </p>
        <div class="mt-10">
          <button
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-main"
            @click="handleEmitCreateAccount"
          >
            Crie uma conta grátis
          </button>
        </div>
      </section>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

interface IEmits {
  (e: 'login'): void
  (e: 'create-account'): void
}

const emit = defineEmits<IEmits>()

function handleEmitLogin() {
  emit('login')
}

function handleEmitCreateAccount() {
  emit('create-account')
}
</script>

<style scoped lang="postcss">
header {
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url('../../assets/images/balloons.png');
    background-size: 628px;
    background-position: 115% 100%;
    background-repeat: no-repeat;
  }
}
</style>
