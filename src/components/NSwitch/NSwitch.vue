<template>
  <div class="n-switch-wrapper">
    <ToggleSwitch
      v-model="model"
      :inputId="inputId"
      class="n-switch"
      v-bind="$attrs"
    />
    <label v-if="label" :for="inputId" class="n-switch-label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import ToggleSwitch from 'primevue/toggleswitch';
import { computed } from 'vue';

const model = defineModel<boolean>();

const props = defineProps<{
  label?: string;
  id?: string;
}>();

const inputId = computed(() => props.id || `n-switch-${Math.random().toString(36).substr(2, 9)}`);
</script>

<style scoped>
.n-switch-wrapper {
  @apply flex items-center gap-2;
}

.n-switch-label {
  @apply text-surface-200 cursor-pointer select-none hover:text-primary-400 transition-colors;
}

:deep(.p-toggleswitch-slider) {
  @apply bg-surface-800 border border-surface-600;
}

:deep(.p-toggleswitch-checked .p-toggleswitch-slider) {
  @apply bg-primary-500 border-primary-500 shadow-[0_0_10px_#00F0FF];
}

:deep(.p-toggleswitch-checked .p-toggleswitch-slider:before) {
  @apply bg-black;
}
</style>
