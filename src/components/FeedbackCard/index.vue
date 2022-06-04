<template>
  <div
    class="flex flex-col px-8 py-6 rounded cursor-pointer bg-brand-gray"
    @click="handleToggle"
  >
    <div class="flex items-center justify-between w-full mb-8">
      <badge :type="feedback.type" />

      <span class="font-regular text-brand-graydark">
        {{ getDiffTimeBetweenCurrentDate(feedback.createdAt) }}
      </span>
    </div>

    <div class="text-lg font-medium text-gray-800">
      {{ feedback.text }}
    </div>

    <div
      :class="{
        animate__fadeOutUp: state.isClosing,
      }"
      class="flex mt-8 animate__animated animate__fadeInUp animate__faster"
      v-if="state.isOpen"
    >
      <div class="flex flex-col w-1/2">
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">
            Página
          </span>
          <span class="font-medium text-gray-700">{{ feedback.page }}</span>
        </div>

        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">
            Dispositivo
          </span>
          <span class="font-medium text-gray-700">{{ feedback.device }}</span>
        </div>
      </div>

      <div class="flex flex-col w-1/2">
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">
            Usuário
          </span>
          <span class="font-medium text-gray-700">
            {{ feedback.fingerprint }}
          </span>
        </div>
      </div>

      <div class="flex justify-end mt-8" v-if="!state.isOpen">
        <icon name="chevron-down" size="24" :color="brandColors.graydark" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue'
import Badge from './Badge'
import Icon from '../Icon'
import { getDiffTimeBetweenCurrentDate, wait } from '@/utils'
import palette from '@/assets/palette'
import { Feedback } from '@/domain/entities/Feedback'

interface IProps {
  isOpened: boolean
  feedback: Feedback
}

const props = defineProps<IProps>()

const state = reactive({
  isOpen: !!props.isOpened,
  isClosing: !props.isOpened,
})

async function handleToggle() {
  state.isClosing = true

  await wait(250)
  state.isOpen = !state.isOpen
  state.isClosing = false
}
</script>
