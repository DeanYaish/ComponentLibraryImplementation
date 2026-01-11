<template>
  <i :class="['n-icon', iconClass, colorClass]" :style="{ fontSize: size }" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  icon: string; // e.g., "pi pi-check" or "fas fa-home"
  size?: string; // e.g., "1.5rem"
  color?: 'primary' | 'secondary' | 'accent' | 'white';
}>();

const iconClass = computed(() => props.icon);

const colorClass = computed(() => {
  switch (props.color) {
    case 'primary': return 'text-primary-500 drop-shadow-[0_0_5px_#00F0FF]';
    case 'secondary': return 'text-secondary-500 drop-shadow-[0_0_5px_#FF003C]';
    case 'accent': return 'text-accent-500 drop-shadow-[0_0_5px_#B026FF]';
    default: return 'text-surface-0';
  }
});
</script>

<style scoped>
.n-icon {
  @apply transition-colors duration-300;
}
</style>
