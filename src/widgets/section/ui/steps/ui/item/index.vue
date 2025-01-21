<script setup lang="ts">
const props = defineProps<{ n: number; custom?: boolean }>();
</script>

<template>
  <div class="w-[20.7rem] h-[21rme] relative">
    <div class="absolute px-[2rem] py-[2.5rem] object-cover h-full w-full">
      <p class="mb-[1.5rem] leading-text">Step {{ n }}</p>

      <div class="leading-text text-brand">
        <slot />
      </div>
    </div>
    <NuxtImg
      v-if="!custom"
      src="/bgs/step.svg"
      class="object-cover h-full w-full"
    />
    <NuxtImg v-else src="/bgs/step-2.svg" class="object-cover h-full w-full" />
  </div>
</template>
