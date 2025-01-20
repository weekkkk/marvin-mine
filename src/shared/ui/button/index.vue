<script lang="ts" setup>
import type { UiButtonProps } from "./types";

const props = withDefaults(defineProps<UiButtonProps>(), {active: false});

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
      'w-[6.53rem] h-[3.33rem] rounded-2xl border-spruce border-[0.05rem] drop-shadow-outer-bottom',
      {'bg-olive text-spruce shadow-inner-top border-spruce': active},
      {'bg-black text-beige shadow-inner-top-light border-spruce': !active}
    ]"
  >
    <slot />
  </button>
</template>