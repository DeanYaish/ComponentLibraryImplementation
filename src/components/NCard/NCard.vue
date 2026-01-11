<template>
  <Card class="n-card" v-bind="$attrs">
    <template #header v-if="$slots.header || header">
      <slot name="header">
        <div class="n-card-header-content" v-if="header">{{ header }}</div>
      </slot>
    </template>
    <template #title v-if="$slots.title || title">
      <slot name="title">{{ title }}</slot>
    </template>
    <template #subtitle v-if="$slots.subtitle || subtitle">
      <slot name="subtitle">{{ subtitle }}</slot>
    </template>
    <template #content>
      <slot></slot>
    </template>
    <template #footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';

defineProps<{
  header?: string;
  title?: string;
  subtitle?: string;
}>();
</script>

<style scoped>
.n-card {
  @apply bg-surface-800 border border-surface-600 text-surface-50 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300;
  @apply hover:border-primary-500 hover:shadow-[0_0_15px_#00F0FF];
}

:deep(.p-card-title) {
  @apply text-xl font-bold text-primary-400 font-mono mb-2;
}

:deep(.p-card-subtitle) {
  @apply text-surface-400 mb-4;
}

:deep(.p-card-content) {
  @apply text-surface-200;
}

:deep(.p-card-footer) {
  @apply mt-4 pt-4 border-t border-surface-700;
}

.n-card-header-content {
  @apply p-4 text-lg font-bold border-b border-surface-700 bg-surface-900 text-primary-500;
}
</style>
