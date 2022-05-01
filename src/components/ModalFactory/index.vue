<template>
  <teleport to="body">
    <div
      v-if="state.isActive"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="handleModalToggle({ status: false })"
    >
      <div
        class="fixed mx-10"
        :class="DEFAULT_WIDTH"
        @click.stop
      >
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
import { reactive, onMounted, onBeforeUnmount, Component } from 'vue'
import { useModal, DEFAULT_WIDTH } from '@/composables/useModal'
import { EmitterSingleton } from '@/utils/helpers/emitter'
import type { ModalTogglePayload } from '@/types/events'

interface IState {
  isActive: boolean
  component?: Component
  width: string
  props?: any
}

const modal = useModal(new EmitterSingleton().getInstance())
const state = reactive<IState>({
  isActive: false,
  component: {},
  width: DEFAULT_WIDTH
})

onMounted(() => {
  modal.listen(handleModalToggle)
})

onBeforeUnmount(() => {
  modal.off(handleModalToggle)
})

function handleModalToggle (payloads: ModalTogglePayload[] | ModalTogglePayload) {
  let payload = payloads

  if (Array.isArray(payload)) {
    payload = payload.shift() as ModalTogglePayload
  }
  state.isActive = payload.status
  if (!payload.status) {
    state.component = {}
    state.props = {}
    state.width = DEFAULT_WIDTH
    return
  }
  state.component = payload.component
  state.props = payload.props
  state.width = payload.width ?? DEFAULT_WIDTH
}
</script>
