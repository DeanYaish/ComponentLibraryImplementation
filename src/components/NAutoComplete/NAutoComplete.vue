<template>
  <div class="n-autocomplete-wrapper">
    <label v-if="label" class="n-autocomplete-label">{{ label }}</label>
    <AutoComplete
      v-model="model"
      :suggestions="suggestions"
      @complete="$emit('complete', $event)"
      :optionLabel="optionLabel"
      :placeholder="placeholder"
      class="n-autocomplete"
      :class="{ 'p-invalid': error }"
      inputClass="n-autocomplete-input"
      panelClass="n-autocomplete-panel"
      v-bind="$attrs"
    />
    <small v-if="error" class="n-autocomplete-error">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import AutoComplete from 'primevue/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primevue/autocomplete';

const model = defineModel<any>();

defineProps<{
  label?: string;
  suggestions: any[];
  optionLabel?: string;
  placeholder?: string;
  error?: string;
}>();

defineEmits<{
  (e: 'complete', event: AutoCompleteCompleteEvent): void;
}>();
</script>

<style scoped>
.n-autocomplete-wrapper {
  @apply flex flex-col gap-1;
}

.n-autocomplete-label {
  @apply text-primary-500 font-mono text-sm;
}

.n-autocomplete {
  @apply w-full;
}

:deep(.n-autocomplete-input) {
  @apply bg-surface-800 border-surface-600 text-surface-50 w-full transition-all duration-300;
  @apply focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:shadow-[0_0_10px_#00F0FF];
}

:deep(.n-autocomplete-panel) {
  @apply bg-surface-800 border border-surface-600 shadow-[0_0_15px_#00F0FF];
}

:deep(.p-autocomplete-option) {
  @apply text-surface-200 hover:bg-surface-700 hover:text-primary-400;
}

:deep(.p-autocomplete-option.p-focus) {
  @apply bg-surface-700 text-primary-400;
}

.p-invalid :deep(.n-autocomplete-input) {
  @apply border-secondary-500 focus:border-secondary-500 focus:ring-secondary-500 focus:shadow-[0_0_10px_#FF003C];
}

.n-autocomplete-error {
  @apply text-secondary-500 text-xs;
}
</style>
