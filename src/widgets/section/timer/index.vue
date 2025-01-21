<script setup lang="ts">
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
  <div :class="['flex flex-col', 'items-center']">
    <img src="/imgs/timer/title.svg" class="h-10 mb-2" />

    <ul class="inline-flex gap-2 mb-4 text-brand">
      <li v-for="key in Object.keys(time)" :key="key" class="relative">
        <img src="/imgs/bgs/time.svg" class="h-4" />
        <div
          class="absolute object-cover top-0 w-full h-full inline-flex justify-center items-center"
        >
          <span class="text-xs">
            {{ time[key as keyof typeof time] }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
