<script lang="ts" setup>
const config = useRuntimeConfig();
const img = computed(() => `${config.app.baseURL}imgs/stats/paper.svg`)
const stats = [
  {ranking: 1, name: 'hggkmi32342', rewards: '9850'},
  {ranking: 2, name: 'ug7UGG44', rewards: '9800'},
  {ranking: 3, name: 'FGG_3431', rewards: '9715'},
  {ranking: 4, name: 'HHGH55_443', rewards: '9700'},
  {ranking: 5, name: 'uRUUN2', rewards: '9600'},
  {ranking: 6, name: 'JJJG33', rewards: '9520'},
  {ranking: 7, name: 'GHH_FFA', rewards: '9500'},
  {ranking: 8, name: 'FFA_113', rewards: '9498'},
  {ranking: 9, name: 'KULIM232', rewards: '9450'},
  {ranking: 10, name: 'MINER342', rewards: '9230'},
  {ranking: 11, name: 'HERO_233', rewards: '9010'},
  {ranking: 12, name: 'FRER', rewards: '9000'},
]
</script>

<template>
  <div
    :class="[
      'w-[22rem] h-[22.8rem]'
    ]"
    :style="{
      backgroundImage: `url('${img}')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }"
  >
    <!-- <table class="flex flex-col">
      <thead class="mt-[1.86rem] mb-[1.33rem]">
        <tr class="">
          <th class="pl-[1.6rem] text-xs font-normal text-pebble">RANKING</th>
          <th class="pl-[4rem] text-xs font-normal text-pebble">NAME</th>
          <th class="pl-[5.74rem] text-xs font-normal text-pebble">REWARDS</th>
        </tr>
      </thead>
      <tbody class="w-[17.86rem] h-[16.6rem] mb-[2.73rem] ml-[3.13rem] mr-[1.53rem]">
        <tr v-for="stat in stats" :key="stat.ranking" class="">
          <td class="text-xs font-normal text-brown mb=[5rem]">{{ stat.ranking }}</td>
          <td class="text-xs font-normal text-brown mb=[1rem]">{{ stat.name }}</td>
          <td class="text-xs font-normal text-brown mb=[1rem]">{{ stat.rewards }} GOLDS</td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>