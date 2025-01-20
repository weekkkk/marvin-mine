<script setup lang="ts">
const props = defineProps<{ n: number }>();
</script>

<template>
  <div class="w-[20.7rem] h-[21rme] relative">
    <div class="absolute px-[2rem] py-[2.5rem] object-cover h-full w-full">
      <p class="mb-[1.5rem] leading-text">Step {{ n }}</p>

      <div class="leading-text text-brand">
        <slot />
      </div>
    </div>
    <NuxtImg src="/bgs/step.svg" class="object-cover h-full w-full" />
  </div>
</template>
