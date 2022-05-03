<template>
  <h1>Modal Login</h1>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

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
</script>
