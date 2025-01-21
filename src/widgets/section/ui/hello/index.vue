<script setup lang="ts">
const links = [
  { href: "#", text: "Play now", icon: "/icons/gamepad.svg" },
  { href: "#", text: "Ranking", icon: "/icons/rocket.svg" },
  { href: "#", text: "Chart", icon: "/icons/star.svg" },
];

const targetDate = new Date("January 25, 2025 00:00:00").getTime();

const time = reactive({
  days: "",
  hours: "",
  minutes: "",
  seconds: "",
});

function formatNum(n: number, name: string) {
  return `${n}${name}`;
}
function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    clearInterval(timerInterval.value);
    return;
  }

  // Вычисляем дни, часы, минуты и секунды
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  time.days = formatNum(days, "D");
  time.hours = formatNum(hours, "H");
  time.minutes = formatNum(minutes, "M");
  time.seconds = formatNum(seconds, "S");
}

const timerInterval = ref<NodeJS.Timeout>();

onMounted(() => {
  timerInterval.value = setInterval(updateTimer, 1000);
});

updateTimer();
</script>

<template>
  <section
    class="flex flex-col items-center relative -mt-3 max-md:mt-[3.5rem] max-md:pb-[5rem]"
  >
    <div :class="['flex flex-col', 'items-center']">
      <NuxtImg src="/images/title.svg" class="max-md:hidden h-[3.8rem] mb-3" />
      <NuxtImg src="/images/title-mobile.svg" class="md:hidden h-[3rem] mb-4" />

      <ul class="inline-flex gap-[0.75rem] mb-4 text-brand">
        <li v-for="key in Object.keys(time)" :key="key" class="relative">
          <NuxtImg src="/bgs/time.svg" class="h-[1.65rem] max-md:h-[1.1rem]" />
          <div
            class="absolute object-cover top-0 w-full h-full inline-flex justify-center items-center"
          >
            <span class="text-control max-md:text-[0.75rem]">
              {{ time[key as keyof typeof time] }}
            </span>
          </div>
        </li>
      </ul>

      <NuxtImg src="/images/logo.png" class="h-[17.23rem] max-md:h-[11.5rem]" />
      <NuxtImg
        src="/images/marvin.png"
        :class="[
          'h-[22.4rem]',
          'max-md:h-[17.1rem]',
          '-mt-[4rem] ml-[5rem]',
          'max-md:ml-[2.5rem]',
        ]"
      />
    </div>
    <ul
      :class="[
        'flex',
        'max-md:flex-col',
        'gap-x-10 gap-y-2',
        'absolute',
        'bottom-[3.5rem]',
        'max-md:bottom-0',
      ]"
    >
      <li v-for="{ href, text, icon } in links" key="text">
        <a :href="href">
          <UiButton class="w-[12.5rem] max-md:w-[9.4rem]">
            <div class="uppercase inline-flex items-end gap-2">
              <NuxtImg class="h-[1.2rem] max-md:h-[0.9rem]" :src="icon" />
              <span>
                {{ text }}
              </span>
            </div>
          </UiButton>
        </a>
      </li>
    </ul>
  </section>
</template>
