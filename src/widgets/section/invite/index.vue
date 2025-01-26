<script setup lang="ts">
const config = useRuntimeConfig();
const img = computed(() => `${config.app.baseURL}imgs/dialog/test.svg`);

const url = inject<Ref<string>>("url");

const copy = async () => {
  const textToCopy = url?.value || "";
  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

const share = async () => {
  const shareData: ShareData = {
    url: url?.value || "",
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error("Sharing failed:", err);
    }
  } else {
    alert("Sharing is not supported on this device/browser.");
  }
};
</script>

<template>
  <section
    :class="[
      'w-[22rem] h-[7.5rem]',
      'py-4',
      'flex flex-col gap-3',
      'text-xs',
      'leading-none',
      'mx-auto',
    ]"
    :style="{
      backgroundImage: `url('${img}')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <main class="text-brown flex items-center justify-between px-8">
      <p class="text-sm">Invite</p>
      <div class="flex items-center gap-2">
        <p class="text-[0.625rem]">t.me/marvinm...</p>
        <img
          src="/imgs/icons/copy.svg"
          class="h-8 hover:brightness-150"
          @click="copy"
        />
        <img
          src="/imgs/icons/share.svg"
          class="h-8 hover:brightness-150 transition-all"
          @click="share"
        />
      </div>
    </main>
    <footer class="px-8">
      <p class="text-sm text-brown leading-4">
        Get 40% of your <br />
        frens rewards
      </p>
    </footer>
  </section>
</template>
