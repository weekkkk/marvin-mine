<script setup lang="ts">
const props = defineProps<{ disabled?: boolean }>();
</script>
<template>
  <button
    :disabled="disabled"
    :class="[
      'bg-common text-second',
      'px-10 py-7',
      'max-md:px-6 max-md:py-[1.275rem]',
      'rounded-[1.5rem]',
      'max-md:rounded-[1.125rem]',
      'text-control',
      'max-md:text-[0.825rem]',
      'leading-default',
      'border-[1.5px] border-common',
      'shadow-button',
      'hover:brightness-150 transition-all',
      'disabled:hover:brightness-100 disabled:transition-none',
    ]"
  >
    <slot />
  </button>
</template>
