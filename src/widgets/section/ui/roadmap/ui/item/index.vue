<script setup lang="ts"></script>

<template>
  <div
    :class="[
      'w-[20rem] h-[15.2rme] relative',
      'max-md:w-[13.5rem] max-md:h-[12.8rem]',
    ]"
  >
    <div
      class="absolute px-[2rem] py-[2rem] object-cover h-full w-full max-md:flex max-md:flex-col max-md:text-[0.75rem] max-md:text-center max-md:px-[0.75rem] max-md:py-[1.25rem] max-md:gap-[1.9rem]"
    >
      <div class="leading-text text-brand">
        <slot />
      </div>
    </div>
    <NuxtImg
      src="/bgs/radmap-item.svg"
      class="max-md:hidden object-cover h-full w-full"
    />
    <NuxtImg
      src="/bgs/roadmap-item-mobile.svg"
      class="md:hidden object-cover h-full w-full"
    />
  </div>
</template>
