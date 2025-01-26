<script setup lang="ts">
const config = useRuntimeConfig();
const img = computed(() => `${config.app.baseURL}imgs/dialog/test.svg`);
</script>

<template>
  <section
    :class="[
      'w-[22rem] h-[7.5rem]',
      'py-8',
      'flex justify-center items-center',
      'text-xs',
      'leading-none',
      'mx-auto',
      'text-xl text-brown',
    ]"
    :style="{
      backgroundImage: `url('${img}')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <span> Coming soon </span>
  </section>
</template>
