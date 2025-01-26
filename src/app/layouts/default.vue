<script setup lang="ts">
const generateRandomNumber = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

const url = ref("https://t.me/marvinminebot?startapp=");

provide("url", url);

onMounted(() => {
  url.value += generateRandomNumber();

  if (window?.Telegram?.WebApp) {
    window.Telegram.WebApp.expand();
  } else {
    console.warn("Telegram WebApp API is not available");
  }
});
</script>

<template>
  <LayoutHeaderWidget />
  <main class="relative h-full">
    <figure class="flex items-center justify-center w-full h-full">
      <img src="/imgs/bgs/marvin.png" alt="" class="w-[15.5rem] ml-11" />
    </figure>

    <div class="absolute top-0 object-cover w-full min-h-full py-5 pb-20 flex">
      <NuxtPage />
    </div>
  </main>
  <LayoutFooterWidget />
</template>
