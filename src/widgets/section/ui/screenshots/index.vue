<template>
  <section class="flex flex-col items-center mt-[9.6rem]">
    <h1 class="text-[2.25rem] leading-[1.45rem] mb-[3rem] text-def">
      Screenshots
    </h1>

    <ul class="inline-flex gap-[2.5rem] mb-[3rem]">
      <li>
        <NuxtImg class="w-[20.7rem]" src="/images/screenshot-1.png" />
      </li>
      <li>
        <NuxtImg class="w-[20.7rem]" src="/images/screenshot-2.png" />
      </li>
      <li>
        <NuxtImg class="w-[20.7rem]" src="/images/screenshot-3.png" />
      </li>
    </ul>

    <div class="flex gap-[2.5rem]">
      <UiButton class="w-[5rem] px-0 inline-flex justify-center">
        <NuxtImg src="/icons/left.svg" class="h-[1.75rem]" />
      </UiButton>
      <UiButton class="w-[5rem] px-0 inline-flex justify-center">
        <NuxtImg src="/icons/right.svg" class="h-[1.75rem]" />
      </UiButton>
    </div>
  </section>
</template>
