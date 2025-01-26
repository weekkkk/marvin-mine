<script setup lang="ts">
const test = ref("bad");
onMounted(() => {
  if (typeof Telegram !== "undefined" && Telegram.WebApp) {
    Telegram.WebApp.initDataUnsafe;
    Telegram.WebApp.expand();
    test.value = "good";
  } else {
    console.warn("Telegram WebApp API is not available");
  }
});
</script>

<template>
  <NuxtLayout>
    {{ test }}
    <!-- <NuxtPage /> -->
  </NuxtLayout>
</template>
