<template>
  <section
    class="flex flex-col items-center pt-[2rem] mt-[8rem] max-md:mt-[3.1rem]"
  >
    <h1
      :class="[
        'text-[2.25rem] leading-[1.45rem] mb-[0.4rem]',
        'max-md:text-[1.25rem] max-md:leading-default max-md:mb-4',
        'text-def',
        'text-center',
      ]"
    >
      Tokenomic
    </h1>

    <NuxtImg src="/bgs/statistic.png" class="w-[46.4rem] max-md:hidden" />
    <div class="md:hidden flex flex-col items-center gap-8">
      <NuxtImg src="/bgs/statistic-mobile-1.png" class="w-[14rem]" />
      <NuxtImg src="/bgs/statistic-mobile-2.png" class="w-[11rem]" />
    </div>
  </section>
</template>
