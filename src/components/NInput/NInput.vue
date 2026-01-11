<template>
  <div class="n-input-wrapper">
    <label v-if="label" class="n-input-label">{{ label }}</label>
    <InputText
      v-model="model"
      :placeholder="placeholder"
      :class="['n-input', { 'p-invalid': error }]"
      v-bind="$attrs"
    />
    <small v-if="error" class="n-input-error">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';

const model = defineModel<string | number | undefined>();

defineProps<{
  label?: string;
  placeholder?: string;
  error?: string;
}>();
</script>

<style scoped>
.n-input-wrapper {
  @apply flex flex-col gap-1;
}

.n-input-label {
  @apply text-primary-500 font-mono text-sm;
}

.n-input {
  @apply bg-surface-800 border-surface-600 text-surface-50 transition-all duration-300;
  @apply focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:shadow-[0_0_10px_#00F0FF];
}

.p-invalid {
  @apply border-secondary-500 focus:border-secondary-500 focus:ring-secondary-500 focus:shadow-[0_0_10px_#FF003C];
}

.n-input-error {
  @apply text-secondary-500 text-xs;
}
</style>
