<script lang="ts" setup>
import type { UiButtonProps } from "./types";

const props = withDefaults(defineProps<UiButtonProps>(), { active: false });

const emit = defineEmits<{
  (e: "click"): void;
}>();

const slots = useSlots();

const config = useRuntimeConfig();
</script>
<template>
  <button
    @click="emit('click')"
    :class="[
      'inline-flex items-center justify-center',
      'w-[6.125rem] h-[3.125rem] rounded-2xl border-spruce border-[0.05rem] drop-shadow-outer-bottom',
      { 'bg-olive text-spruce shadow-inner-top border-spruce': active },
      { 'bg-black text-beige shadow-inner-top-light border-spruce': !active },
      'text-[0.75rem]',
    ]"
  >
    <slot />
  </button>
</template>
