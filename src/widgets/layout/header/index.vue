<script setup lang="ts">
const links = [
  {
    hash: "#how_to_play",
    text: "How to play",
  },
  {
    hash: "#tokenomics",
    text: "Tokenomics",
  },
  {
    hash: "#roadmap",
    text: "Roadmap",
  },
];

const socials = [
  {
    href: "#",
    icon: "/icons/x.svg",
  },
  {
    href: "#",
    icon: "/icons/tg.svg",
  },
];
</script>

<template>
  <header class="relative mx-auto my-10 h-[6.2rem] w-[51.5rem]">
    <nav
      :class="[
        'absolute left-0 right-0 top-0 bottom-0',
        'flex items-center justify-between',
        'pl-20 pr-12',
      ]"
    >
      <ul :class="['uppercase text-brand', 'flex gap-20']">
        <li v-for="{ hash, text } in links" :key="hash">
          <NuxtLink
            :to="{ hash }"
            class="hover:brightness-150 transition-transform"
          >
            {{ text }}
          </NuxtLink>
        </li>
      </ul>

      <ul :class="['flex gap-4']">
        <li v-for="{ href, icon } in socials" :key="icon">
          <a
            :href="href"
            :class="['p-[0.2rem', 'bg-brand', 'inline-block', 'rounded-full']"
          >
            <NuxtImg :src="icon" class="h-[1.4rem]" />
          </a>
        </li>
      </ul>
    </nav>

    <NuxtImg class="object-cover w-full h-full" src="/bgs/header.svg" />
  </header>
</template>
