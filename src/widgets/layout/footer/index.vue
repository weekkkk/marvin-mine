<script setup lang="ts">
const route = useRoute();

const links = [
  {
    path: "/",
    text: "Main",
  },
  {
    path: "/ranking",
    text: "Ranking",
  },
  {
    path: "/chart",
    text: "Chart",
  },
];
</script>

<template>
  <footer class="px-8 mb-8">
    <nav>
      <ul class="flex justify-between">
        <li v-for="{ path, text } in links" key="path">
          <NuxtLink :to="path">
            <UiButton :active="path === route.path"> {{ text }} </UiButton>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
