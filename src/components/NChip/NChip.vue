<template>
  <Chip
    :label="label"
    :icon="icon"
    :removable="removable"
    class="n-chip"
    :class="[`n-chip--${variant}`]"
    @remove="$emit('remove', $event)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import Chip from 'primevue/chip';

defineProps<{
  label?: string;
  icon?: string;
  removable?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}>();

defineEmits<{
  (e: 'remove', event: Event): void;
}>();
</script>

<style scoped>
.n-chip {
  @apply transition-all duration-300 font-mono text-sm;
}

.n-chip--primary {
  @apply bg-primary-900/50 border border-primary-500 text-primary-300;
}

.n-chip--secondary {
  @apply bg-surface-700 border border-surface-500 text-surface-200;
}

.n-chip--outline {
  @apply bg-transparent border border-primary-500 text-primary-400 hover:bg-primary-900/30;
}

:deep(.p-chip-remove-icon) {
  @apply text-inherit hover:text-white transition-colors cursor-pointer;
}
</style>
