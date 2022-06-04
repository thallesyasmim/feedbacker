<template>
  <span
    :class="`bg-${typeComputed.bg}`"
    class="p-2 text-xs font-black text-white uppercase rounded-full"
  >
    {{ typeComputed.label }}
  </span>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

interface IProps {
  type: string
}

const props = defineProps<IProps>()

const typeComputed = computed(() => {
  switch (props.type.toLowerCase()) {
    case 'issue':
      return {
        label: 'problema',
        bg: 'brand-danger',
      }
    case 'idea':
      return {
        label: 'ideia',
        bg: 'brand-warning',
      }
    default:
      return {
        label: 'outros',
        bg: 'brand-graydark',
      }
  }
})
</script>
