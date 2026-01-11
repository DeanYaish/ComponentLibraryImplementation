<template>
  <div class="n-checkbox-wrapper">
    <Checkbox
      v-model="model"
      :binary="true"
      :inputId="inputId"
      class="n-checkbox"
      v-bind="$attrs"
    />
    <label v-if="label" :for="inputId" class="n-checkbox-label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import Checkbox from 'primevue/checkbox';
import { computed } from 'vue';

const model = defineModel<boolean>();

const props = defineProps<{
  label?: string;
  id?: string;
}>();

const inputId = computed(() => props.id || `n-checkbox-${Math.random().toString(36).substr(2, 9)}`);
</script>

<style scoped>
.n-checkbox-wrapper {
  @apply flex items-center gap-2;
}

.n-checkbox-label {
  @apply text-surface-200 cursor-pointer select-none hover:text-primary-400 transition-colors;
}

:deep(.p-checkbox-box) {
  @apply bg-surface-800 border-surface-600;
}

:deep(.p-checkbox-checked .p-checkbox-box) {
  @apply bg-primary-500 border-primary-500 shadow-[0_0_10px_#00F0FF];
}

:deep(.p-checkbox-icon) {
  @apply text-black;
}
</style>
