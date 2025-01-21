<script setup lang="ts">
const props = defineProps<{ n: number; custom?: boolean; mobile?: boolean }>();
</script>

<template>
  <div
    :class="[
      'relative',
      'w-[20.7rem] h-[21rem]',
      'max-md:w-[16.1rem] max-md:h-[11.9rem]',
    ]"
  >
    <div
      :class="[
        'absolute',
        'px-[2rem] py-[2.5rem]',
        'max-md:px-[2rem] max-md:py-[2rem]',
        'object-cover h-full w-full',
        'max-md:text-[0.75rem] max-md:text-center',
      ]"
    >
      <p :class="['leading-text', 'mb-[1.5rem]', 'max-md:mb-[1rem]']">
        Step {{ n }}
      </p>

      <div class="leading-text text-brand">
        <slot />
      </div>
    </div>
    <NuxtImg
      v-if="!custom && !mobile"
      src="/bgs/step.svg"
      class="object-cover h-full w-full"
    />
    <NuxtImg
      v-else-if="!mobile"
      src="/bgs/step-2.svg"
      class="object-cover h-full w-full"
    />
    <NuxtImg
      v-else
      src="/bgs/step-mobile.svg"
      class="object-cover h-full w-full"
    />
  </div>
</template>
