<script setup lang="ts">
const links = [
  { href: "#", text: "Play now", icon: "/icons/gamepad.svg" },
  { href: "#", text: "Ranking", icon: "/icons/rocket.svg" },
  { href: "#", text: "Chart", icon: "/icons/star.svg" },
];
</script>

<template>
  <section class="flex flex-col items-center relative pt-[2.7rem]">
    <div class="flex flex-col items-end">
      <NuxtImg src="/images/logo.png" class="h-[17.2rem]" />
      <NuxtImg src="/images/marvin.png" class="h-[22.45rem]" />
    </div>
    <ul :class="['flex gap-10', 'absolute bottom-[3.5rem]']">
      <li v-for="{ href, text, icon } in links" key="text">
        <a :href="href">
          <UiButton class="w-[12.5rem]">
            <div class="uppercase inline-flex items-end gap-2">
              <NuxtImg class="h-[1.2rem]" :src="icon" />
              <span>
                {{ text }}
              </span>
            </div>
          </UiButton>
        </a>
      </li>
    </ul>
  </section>
</template>
