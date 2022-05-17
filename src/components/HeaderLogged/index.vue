<template>
  <div class="flex items-center justify-between w-4/5 max-w-6xl.py-10">
    <div class="w-28 lg:w-36">
      <img
        class="w-full"
        src="../../assets/images/logo_white.png"
        alt="Feedbacker Logo"
      />
    </div>

    <div class="flex">
      <ul class="flex list-none">
        <li
          v-for="{ name, routeName } in navigationItems"
          :key="name"
          @click="$router.push({ name: routeName })"
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
        >
          {{ name }}
        </li>

        <li
          class="px-6 py-2 mr-2 font-bold bg-white text-brand-main rounded-full cursor-pointer focus:outline-none"
        >
          {{ logoutLabel }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/composables/useStore'
import { StoreModules, IStoreUserModule } from '@/types'

const store = useStore(StoreModules.USER) as IStoreUserModule
const navigationItems = [
  {
    name: 'Credenciais',
    routeName: 'Credentials',
  },
  {
    name: 'Feedbacks',
    routeName: 'Feedbacks',
  },
]

const logoutLabel = computed(() =>
  store.currentUser?.name ? `${store.currentUser.name} (Sair)` : 'Sair'
)
</script>
