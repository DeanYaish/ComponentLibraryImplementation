<template>
  <Dialog
    v-model:visible="visible"
    :modal="true"
    :header="header"
    :class="['n-dialog', `n-dialog--${size}`]"
    :pt="{
      root: { class: 'n-dialog-root' },
      header: { class: 'n-dialog-header' },
      content: { class: 'n-dialog-content' },
      footer: { class: 'n-dialog-footer' }
    }"
    v-bind="$attrs"
  >
    <slot></slot>
    <template #footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';

const visible = defineModel<boolean>('visible');

withDefaults(defineProps<{
  header?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
}>(), {
  size: 'medium'
});
</script>

<style scoped>
/* Dialog styling often requires global or deep styling because it's appended to body */
:global(.n-dialog-root) {
  @apply bg-surface-900 border border-primary-500/50 shadow-[0_0_30px_#00F0FF] rounded-none !important;
}

:global(.n-dialog-header) {
  @apply bg-surface-800 text-primary-400 border-b border-primary-500/30 p-4 font-mono uppercase tracking-wider !important;
}

:global(.n-dialog-content) {
  @apply bg-surface-900 text-surface-50 p-6 !important;
}

:global(.n-dialog-footer) {
  @apply bg-surface-800 border-t border-surface-700 p-4 flex justify-end gap-2 !important;
}

:global(.p-dialog-title) {
  @apply font-bold text-lg;
}

:global(.p-dialog-header-icons) {
  @apply gap-2;
}

:global(.p-dialog-header-icon) {
  @apply text-surface-400 hover:text-primary-500 transition-colors focus:ring-1 focus:ring-primary-500 rounded-sm;
}

/* Sizes */
:global(.n-dialog--small) {
  @apply w-[90vw] md:w-[400px];
}

:global(.n-dialog--medium) {
  @apply w-[90vw] md:w-[600px];
}

:global(.n-dialog--large) {
  @apply w-[95vw] md:w-[900px];
}

:global(.n-dialog--full) {
  @apply w-full h-full m-0 max-h-full;
}

:global(.p-dialog-mask) {
  @apply bg-black/80 backdrop-blur-sm;
}
</style>
