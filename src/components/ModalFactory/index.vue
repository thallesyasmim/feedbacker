<template>
  <teleport to="body">
    <div
    v-if="state.isActive"
    class="fixed top-0 left-0 z-50 items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div class="fixed mx-10">
        <div class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster">
          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is="state.component" />
          </div>
        </div>
      </div>
    </div>
  </teleport>

</template>

<script setup lang="ts">
import { reactive, Component } from 'vue'

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

interface IState {
  isActive: boolean
  component: Component
  width: string
}

const state = reactive<IState>({
  isActive: false,
  component: {},
  width: DEFAULT_WIDTH
})
</script>
