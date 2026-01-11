<template>
  <div class="n-select-wrapper">
    <label v-if="label" class="n-select-label">{{ label }}</label>
    <Select
      v-model="model"
      :options="options"
      :optionLabel="optionLabel"
      :optionValue="optionValue"
      :placeholder="placeholder"
      class="n-select"
      :class="{ 'p-invalid': error }"
      v-bind="$attrs"
    />
    <small v-if="error" class="n-select-error">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import Select from 'primevue/select';

const model = defineModel<any>();

defineProps<{
  label?: string;
  options: any[];
  optionLabel?: string;
  optionValue?: string;
  placeholder?: string;
  error?: string;
}>();
</script>

<style scoped>
.n-select-wrapper {
  @apply flex flex-col gap-1;
}

.n-select-label {
  @apply text-primary-500 font-mono text-sm;
}

.n-select {
  @apply bg-surface-800 border-surface-600 text-surface-50 transition-all duration-300 w-full;
  @apply hover:border-primary-400;
}

:deep(.p-select-label) {
  @apply text-surface-50;
}

:deep(.p-select-dropdown) {
  @apply text-surface-400;
}

:deep(.p-select-overlay) {
  @apply bg-surface-800 border border-surface-600 shadow-[0_0_15px_#00F0FF];
}

:deep(.p-select-option) {
  @apply text-surface-200 hover:bg-surface-700 hover:text-primary-400 focus:bg-surface-700 focus:text-primary-400;
}

:deep(.p-select-option.p-focus) {
  @apply bg-surface-700 text-primary-400;
}

:deep(.p-select-option.p-select-option-selected) {
  @apply bg-primary-900 text-primary-300;
}

.p-invalid {
  @apply border-secondary-500;
}

.n-select-error {
  @apply text-secondary-500 text-xs;
}
</style>
