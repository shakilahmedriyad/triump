<script setup lang="ts">
import MainSection from '../MainSection/MainSection.vue'

const items = ['$', 'X', 'Y', 'Z', '<', '>', '#', '?', '%', '*', '&', ')', '(']

const leftItem = items[Math.round(Math.random() % items.length)]
const rightItem = items[Math.round(Math.random() % items.length)]
</script>
<template>
  <section class="flex items-center pt-20 sm:pt-32 flex-col w-full">
    <h2 class="sm:fixed top-[50%] left-0 text-[5rem] px-10 translate-y-[-50%]">
      {{ leftItem }}
    </h2>
    <MainSection />
    <h2
      class="sm:fixed sm:pt-10 pt-48 top-[50%] text-[5rem] px-10 right-0 translate-y-[-50%]"
    >
      {{ rightItem }}
    </h2>
  </section>
</template>
