<template>
  <div
    :style="{
      width: computedWidth,
      height,
    }"
    class="opacity-75 content-loader"
  >
    <span :style="{ animationDuration }" class="content-loader" />
    <slot />
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  props: {
    minWidth: {
      type: Number,
      default: 80,
    },
    animationDuration: {
      type: String,
      default: '1.6s',
    },
    height: {
      type: String,
      default: '1rem',
    },
    width: {
      type: String,
      default: '1rem',
    },
  },
  setup(props: any) {
    const computedWidth = computed(
      () =>
        props.width ??
        `${Math.floor(
          Math.random() * (props.width - props.minWidth) + props.minWidth
        )}`
    )

    return {
      computedWidth,
    }
  },
}
</script>

<style lang="postcss" scoped>
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.content-loader {
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  background: #f6f7f8;
}

.content-loader--fx {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
  background-position: 0 0;
  background-size: 1000 100;
  animation: shimmer infinite alternate ease-in-out;
}
</style>
