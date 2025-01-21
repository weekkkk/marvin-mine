<template>
  <section
    class="flex flex-col items-center mt-[9.6rem] max-md:mt-[5.1rem] max-md:items-stretch"
  >
    <h1
      :class="[
        'text-[2.25rem] leading-[1.45rem] mb-[3rem]',
        'max-md:text-[1.25rem] max-md:leading-default max-md:mb-4',
        'text-def',
        'text-center',
      ]"
    >
      Screenshots
    </h1>

    <ul class="inline-flex gap-[2.5rem] mb-[3rem] max-md:hidden">
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

    <div class="flex gap-[2.5rem] max-md:hidden">
      <UiButton
        class="w-[5rem] h-[5rem] inline-flex justify-center items-center !pl-0 !pr-0 !pt-0 !pb-0"
      >
        <NuxtImg src="/icons/left.svg" class="h-[1.75rem]" />
      </UiButton>
      <UiButton
        class="w-[5rem] h-[5rem] inline-flex justify-center items-center !pl-0 !pr-0 !pt-0 !pb-0"
      >
        <NuxtImg src="/icons/right.svg" class="h-[1.75rem]" />
      </UiButton>
    </div>

    <div class="md:hidden">
      <UiSlider>
        <div key="1" class="flex justify-center keen-slider__slide">
          <NuxtImg class="w-[11.9rem]" src="/images/screenshot-1.png" />
        </div>

        <div key="2" class="flex justify-center keen-slider__slide">
          <NuxtImg class="w-[11.9rem]" src="/images/screenshot-2.png" />
        </div>

        <div key="3" class="flex justify-center keen-slider__slide">
          <NuxtImg class="w-[11.9rem]" src="/images/screenshot-3.png" />
        </div>
      </UiSlider>
    </div>
  </section>
</template>
