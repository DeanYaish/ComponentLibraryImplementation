<template>
  <Button
    :label="label"
    :icon="icon"
    :class="['n-button', `n-button--${variant}`]"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import Button from 'primevue/button';

defineProps<{
  label?: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
}>();
</script>

<style scoped>
.n-button {
  @apply font-sans tracking-wide uppercase font-bold transition-all duration-300;
}

/* Neon Glow Effects for Cyberpunk Theme */
.n-button--primary {
  @apply bg-primary-500 border-primary-500 text-black hover:bg-primary-400 hover:shadow-[0_0_15px_#00F0FF];
}

.n-button--secondary {
  @apply bg-surface-800 border-primary-500 text-primary-500 border hover:bg-surface-700 hover:text-primary-400 hover:shadow-[0_0_10px_#00F0FF];
}

.n-button--ghost {
  @apply bg-transparent text-primary-500 hover:text-primary-400 hover:bg-surface-800/50;
}

.n-button--danger {
  @apply bg-secondary-500 border-secondary-500 text-white hover:bg-secondary-600 hover:shadow-[0_0_15px_#FF003C];
}
</style>
