<script setup lang="ts">
const links = [
  { href: "#", text: "Play now", icon: "/icons/gamepad.svg" },
  { href: "#", text: "Ranking", icon: "/icons/rocket.svg" },
  { href: "#", text: "Chart", icon: "/icons/star.svg" },
];
</script>

<template>
  <section
    class="flex flex-col items-center relative pt-[2.7rem] max-md:pb-[5.9rem]"
  >
    <div :class="['flex flex-col', 'items-end', 'max-md:items-center']">
      <NuxtImg src="/images/logo.png" class="h-[17.2rem] max-md:h-[11.5rem]" />
      <NuxtImg
        src="/images/marvin.png"
        :class="[
          'h-[22.45rem]',
          'max-md:h-[17.1rem] max-md:-mt-[2.9rem] max-md:ml-[2.5rem]',
        ]"
      />
    </div>
    <ul
      :class="[
        'flex',
        'max-md:flex-col',
        'gap-x-10 gap-y-2',
        'absolute',
        'bottom-[3.5rem]',
        'max-md:bottom-0',
      ]"
    >
      <li v-for="{ href, text, icon } in links" key="text">
        <a :href="href">
          <UiButton class="w-[12.5rem] max-md:w-[9.4rem]">
            <div class="uppercase inline-flex items-end gap-2">
              <NuxtImg class="h-[1.2rem] max-md:h-[0.9rem]" :src="icon" />
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
