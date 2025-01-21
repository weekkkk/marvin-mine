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
    href: "https://t.me/marvinminebot?startapp",
    icon: "/icons/x.svg",
  },
  {
    href: "https://t.me/marvinminebot?startapp",
    icon: "/icons/tg.svg",
  },
];
</script>

<template>
  <header
    :class="[
      'relative mx-auto',
      'my-10',
      'max-md:my-0',
      'h-[6.2rem] w-[51.5rem]',
      'max-md:h-[5rem] max-md:w-full',
    ]"
  >
    <nav
      :class="[
        'absolute left-0 right-0 top-0 bottom-0',
        'flex items-center justify-between max-md:justify-center',
        'px-12',
        'max-md:px-4',
      ]"
    >
      <ul
        :class="[
          'uppercase text-brand',
          'text-control',
          'max-md:text-[0.75rem]',
          'flex',
          'gap-10',
          'max-md:gap-[1.5rem]',
        ]"
      >
        <li v-for="{ hash, text } in links" :key="hash">
          <NuxtLink :to="{ hash }" class="hover:brightness-150 transition-all">
            {{ text }}
          </NuxtLink>
        </li>
      </ul>

      <div
        :class="[
          'flex items-center gap-[1.6rem]',
          'max-md:absolute max-md:top-full max-md:left-0 max-md:right-0',
          'max-md:translate-y-[1.1rem]',
          'max-md:z-10',
          'max-md:flex-row-reverse max-md:justify-between',
          'max-md:px-4',
        ]"
      >
        <ul :class="['flex gap-4']">
          <li v-for="{ href, icon } in socials" :key="icon">
            <a
              :href="href"
              target="_blank"
              :class="[
                'p-[0.2rem]',
                'max-md:p-[0.1rem]',
                'bg-brand',
                'inline-block',
                'rounded-full',
                'hover:brightness-150 transition-all',
              ]"
            >
              <NuxtImg :src="icon" class="h-[1.4rem]" />
            </a>
          </li>
        </ul>

        <a
          href="https://mavrin-meme.gitbook.io/marvin-coin-docs"
          target="_blank"
        >
          <NuxtImg
            src="/icons/white-paper.svg"
            class="h-[3rem] max-md:h-[2.25rem] hover:brightness-150 transition-all"
          />
        </a>
      </div>
    </nav>

    <NuxtImg
      class="max-md:hidden object-cover w-full h-full"
      src="/bgs/header.svg"
    />
    <NuxtImg
      class="md:hidden object-cover w-full h-full"
      src="/bgs/header-mobile.svg"
    />
  </header>
</template>
