<script lang="ts" setup generic="T">
const props = defineProps<{ dot?: boolean }>();

const current = ref(0);

const [container, slider] = useKeenSlider({
  initial: current.value,
  slideChanged: (s) => {
    current.value = s.track.details.rel;
  },
});

const dotHelper = computed(() =>
  slider.value?.track.details
    ? [...Array(slider.value.track.details.slides.length).keys()]
    : []
);
</script>

<style></style>

<template>
  <div class="relative flex flex-col">
    <div ref="container" class="keen-slider">
      <slot />
    </div>

    <div v-if="slider" class="flex justify-center mt-[1.5rem] gap-[2.5rem]">
      <UiButton
        :disabled="!current"
        @click="slider.prev()"
        class="w-[3.75rem] h-[3.75rem] inline-flex justify-center items-center !pl-0 !pr-0 !pt-0 !pb-0"
      >
        <NuxtImg src="/icons/left.svg" class="h-[1.75rem] max-md:h-[1.3rem]" />
      </UiButton>
      <UiButton
        :disabled="dotHelper.at(-1) === current"
        @click="slider.next()"
        class="w-[3.75rem] h-[3.75rem] inline-flex justify-center items-center !pl-0 !pr-0 !pt-0 !pb-0"
      >
        <NuxtImg src="/icons/right.svg" class="h-[1.75rem] max-md:h-[1.3rem]" />
      </UiButton>
    </div>
  </div>
</template>
