<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-regular text-brand-darkgray">Filtros</h1>

    <ul class="flex flex-col mt-3 list-none">
      <li
        v-for="filter in state.filters"
        :key="filter.label"
        :class="{
          'bg-gray-200 bg-opacity-50': filter.active,
        }"
        @click="() => handleSelect(filter?.type)"
        class="flex items-center justify-between px-4 py-1 rounded cursor-pointer"
      >
        <div class="flex items-center">
          <span
            :class="filter.color.bg"
            class="inline-block w-2 h-2 mr-2 rounded-full"
          />
          {{ filter.label }}
        </div>
        <span
          :class="filter.active ? filter.color.text : 'text-brand-graydark'"
          class="font-bold"
        >
          {{ filter.amount }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { useFeedbacks } from '@/main/factories/composables/useFeedbacksFactory'
import { useStore } from '@/composables/useStore'
import { StoreModules } from '@/types'
import { LABELS } from '@/domain/entities/Feedback'

type Summary = {
  all: number
  issue: number
  idea: number
  other: number
}

interface IColor {
  all: {
    text: string
    bg: string
  }
  issue: {
    text: string
    bg: string
  }

  idea: {
    text: string
    bg: string
  }

  other: {
    text: string
    bg: string
  }
}

interface IFilter {
  label: string
  color: IColor
  amount: number
  active: boolean
  type: string
}

interface IState {
  hasError: boolean
  filters: IFilter[]
}

function formatFeedbackSummary(summary: Summary) {
  const summaryProperties: string[] = Object.keys(summary)
  return summaryProperties.map((property) => {
    const currentFilter: IFilter = {
      label: LABELS[property].label as string,
      color: LABELS[property].color as IColor,
      amount: summary[property] as number,
      active: false,
      type: property,
    }

    if (property.includes('all')) {
      currentFilter.active = true
    }

    return currentFilter
  })
}

export default {
  async setup(_, { emit }) {
    const Global = useStore(StoreModules.GLOBAL)
    const { handleFeedbacksSummary } = useFeedbacks()

    const state = reactive<IState>({
      hasError: false,
      filters: [],
    })

    try {
      const data = await handleFeedbacksSummary()
      state.filters = formatFeedbackSummary(data)
    } catch (error) {
      state.hasError = !!error
      state.filters = formatFeedbackSummary({
        all: 0,
        issue: 0,
        idea: 0,
        other: 0,
      })
    }
    function handleSelect(type: string) {
      if (Global?.isLoading) {
        return
      }

      state.filters = state.filters.map((filter) =>
        filter.type === type
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )

      emit('select', type)
    }

    return {
      state,
      handleSelect,
    }
  },
}
</script>
