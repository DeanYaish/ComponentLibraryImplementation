<template>
  <div class="n-datepicker-wrapper">
    <label v-if="label" class="n-datepicker-label">{{ label }}</label>
    <DatePicker
      v-model="model"
      :placeholder="placeholder"
      :dateFormat="dateFormat"
      :showIcon="true"
      class="n-datepicker"
      :class="{ 'p-invalid': error }"
      panelClass="n-datepicker-panel"
      v-bind="$attrs"
    />
    <small v-if="error" class="n-datepicker-error">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker';

const model = defineModel<Date | Date[] | undefined>();

withDefaults(defineProps<{
  label?: string;
  placeholder?: string;
  dateFormat?: string;
  error?: string;
}>(), {
  dateFormat: 'mm/dd/yy'
});
</script>

<style scoped>
.n-datepicker-wrapper {
  @apply flex flex-col gap-1;
}

.n-datepicker-label {
  @apply text-primary-500 font-mono text-sm;
}

.n-datepicker {
  @apply w-full;
}

:deep(.p-inputtext) {
  @apply bg-surface-800 border-surface-600 text-surface-50 transition-all duration-300;
  @apply focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:shadow-[0_0_10px_#00F0FF];
}

:deep(.n-datepicker-panel) {
  @apply bg-surface-800 border border-surface-600 shadow-[0_0_15px_#00F0FF];
}

:deep(.p-datepicker-header) {
  @apply bg-surface-800 text-primary-500 border-b border-surface-700;
}

:deep(.p-datepicker-title) {
  @apply text-primary-400 font-bold;
}

:deep(.p-datepicker-table) {
  @apply text-surface-200;
}

:deep(.p-datepicker-day-selected) {
  @apply bg-primary-500 text-black;
}

:deep(.p-datepicker-today > span) {
  @apply bg-surface-700 text-primary-400 border border-primary-500;
}

.p-invalid :deep(.p-inputtext) {
  @apply border-secondary-500 focus:border-secondary-500 focus:ring-secondary-500 focus:shadow-[0_0_10px_#FF003C];
}

.n-datepicker-error {
  @apply text-secondary-500 text-xs;
}
</style>
