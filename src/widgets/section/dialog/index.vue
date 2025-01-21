<script setup lang="ts">
const config = useRuntimeConfig();
const img = computed(() => `${config.app.baseURL}imgs/dialog/paper.svg`);
</script>

<template>
  <section
    :class="[
      'w-[22rem] h-[12rem]',
      'py-8',
      'flex flex-col gap-5',
      'text-xs',
      'leading-none',
      'mx-auto',
    ]"
    :style="{
      backgroundImage: `url('${img}')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <main class="text-brown flex items-center justify-between px-7">
      <div class="flex gap-2">
        <p>TOKEN ADRESS:</p>
        <p>EQHHQ8HH774HHG...IQ1</p>
      </div>
      <img src="/imgs/icons/copy.svg" class="h-6" />
    </main>

    <footer class="flex justify-between px-11">
      <UiButton> CHART </UiButton>
      <UiButton active> SWAP </UiButton>
    </footer>
  </section>
</template>
