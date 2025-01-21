<script setup lang="ts">
const props = defineProps<{ n: number }>();
</script>

<template>
  <div class="w-[20rem] h-[15.2rme] relative">
    <div class="absolute px-[2rem] py-[2rem] object-cover h-full w-full">
      <div class="leading-text text-brand">
        <slot />
      </div>

      <p
        :class="[
          'mb-[1.5rem]',
          'leading-text text-common',
          'absolute right-[2rem] bottom-[2rem]',
        ]"
      >
        0{{ n }} 2025
      </p>
    </div>
    <NuxtImg src="/bgs/radmap-item.svg" class="object-cover h-full w-full" />
  </div>
</template>
