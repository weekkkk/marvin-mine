<template>
  <button
    :class="[
      'bg-common text-second',
      'px-10 py-7',
      'rounded-[1.5rem]',
      'text-control',
      'leading-default',
      'border-[1.5px] border-common',
      'shadow-button',
      'hover:brightness-150 transition-all',
    ]"
  >
    <slot />
  </button>
</template>
