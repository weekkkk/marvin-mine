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
  <footer
    class="relative mx-auto my-10 mt-[7.2rem] h-[6.2rem] w-[51.5rem] max-md:h-[5rem] max-md:w-full max-md:my-0 max-md:mt-[8.7rem]"
  >
    <nav
      :class="[
        'absolute left-0 right-0 top-0 bottom-0',
        'flex items-center justify-between max-md:justify-center',
        'pl-20 pr-12',
        'max-md:pl-4 max-md:pr-4',
      ]"
    >
      <ul
        :class="[
          'uppercase text-brand text-control',
          'flex gap-20',
          'max-md:text-[0.75rem] max-md:gap-[1.5rem]',
        ]"
      >
        <li v-for="{ hash, text } in links" :key="hash">
          <NuxtLink :to="{ hash }" class="hover:brightness-150 transition-all">
            {{ text }}
          </NuxtLink>
        </li>
      </ul>

      <ul :class="['flex gap-4', 'max-md:hidden']">
        <li v-for="{ href, icon } in socials" :key="icon">
          <a
            :href="href"
            :class="[
              'p-[0.2rem',
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
    </nav>

    <NuxtImg
      class="max-md:hidden object-cover w-full h-full"
      src="/bgs/footer.svg"
    />
    <NuxtImg
      class="md:hidden object-cover w-full h-full"
      src="/bgs/footer-mobile.svg"
    />
  </footer>
</template>
