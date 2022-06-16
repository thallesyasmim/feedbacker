<template>
  <div v-for="{ id, message } of errors" :key="id">
    <span class="block font-medium text-brand-danger">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ErrorMessage } from '../../types'

interface IProps {
  errors: ErrorMessage[]
}

defineProps<IProps>()
</script>
