<template>
  <section class="flex flex-col items-center mt-[6.5rem] max-md:mt-[5.2rem]">
    <h1
      :class="[
        'text-[2.25rem] leading-[1.45rem] mb-[2.8rem]',
        'max-md:text-[1.25rem] max-md:leading-default max-md:mb-[1.2rem]',
        'text-def',
        'text-center',
      ]"
    >
      Partners
    </h1>

    <ul class="flex items-center gap-[3.5rem] max-md:gap-[2.2rem]">
      <li>
        <NuxtImg
          src="/icons/partner-1.svg"
          class="h-[5rem] max-md:h-[1.85rem]"
        />
      </li>
      <li>
        <NuxtImg src="/icons/partner-2.svg" class="h-[5rem] max-md:h-[2rem]" />
      </li>
      <li>
        <NuxtImg
          src="/icons/partner-3.svg"
          class="h-[6.2rem] max-md:h-[2.35rem]"
        />
      </li>
    </ul>
  </section>
</template>
