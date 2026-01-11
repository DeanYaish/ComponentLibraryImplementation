<template>
  <div class="n-radio-wrapper">
    <RadioButton
      v-model="model"
      :inputId="inputId"
      :value="value"
      class="n-radio"
      v-bind="$attrs"
    />
    <label v-if="label" :for="inputId" class="n-radio-label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton';
import { computed } from 'vue';

const model = defineModel<any>();

const props = defineProps<{
  label?: string;
  value: any;
  id?: string;
}>();

const inputId = computed(() => props.id || `n-radio-${Math.random().toString(36).substr(2, 9)}`);
</script>

<style scoped>
.n-radio-wrapper {
  @apply flex items-center gap-2;
}

.n-radio-label {
  @apply text-surface-200 cursor-pointer select-none hover:text-primary-400 transition-colors;
}

:deep(.p-radiobutton-box) {
  @apply bg-surface-800 border-surface-600;
}

:deep(.p-radiobutton-checked .p-radiobutton-box) {
  @apply bg-primary-500 border-primary-500 shadow-[0_0_10px_#00F0FF];
}

:deep(.p-radiobutton-icon) {
  @apply bg-black;
}
</style>
