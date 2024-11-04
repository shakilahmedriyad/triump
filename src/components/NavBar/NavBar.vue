<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const NavLogoItem = [
  '^U%DugDYmBVn',
  'J&gt;_Y#8uAZ',
  '4%sÃ#WmT5aJC',
  'kwtpJ dÃ^84l',
  '4XZvV?Ij-1oÃ',
  'Ãr -2ryS?*h#',
  '?d8Dgo5FU³!d',
  '1jft-?Wg?6D-',
]

const date = new Date()
let intervalId: number | undefined
let intervalId2: number | undefined

const hours = date.getHours() > 10 ? date.getHours() : '0' + date.getHours()
const minutes =
  date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()
const seconds =
  date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds()

const currentTime = ref(hours + ': ' + minutes + ': ' + seconds)

const pmam = ref(date.getHours() > 11 ? 'PM' : 'AM')
const currentActive = ref(0)
const NavLogo = ref(NavLogoItem[0])
onMounted(() => {
  intervalId = setInterval(() => {
    currentActive.value =
      currentActive.value < NavLogoItem.length - 1 ? currentActive.value + 1 : 0
    NavLogo.value = NavLogoItem[currentActive.value]
  }, 200)
})

onMounted(() => {
  intervalId2 = setInterval(() => {
    const date = new Date()
    console.log(date.getUTCHours())
    const hrs = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    const hours = hrs >= 10 ? hrs : '0' + hrs
    const minutes =
      date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
    const seconds =
      date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds()

    pmam.value = date.getHours() > 11 ? 'PM' : 'AM'
    currentTime.value = String(hours + ': ' + minutes + ': ' + seconds)
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
  clearInterval(intervalId2)
})
</script>
<template>
  <nav
    class="px-8 sm:text-base text-sm bg-[#fffff] flex pr-10 sm:fixed gap-y-5 flex-wrap w-full items-center justify-between py-5"
  >
    <h2 class="text-sm max-w-[12rem] w-full">{{ NavLogo }}</h2>

    <div>
      <p class="uppercase mr-16">Modest Internet activites</p>
      <h2>{{ currentTime }} {{ pmam }}</h2>
    </div>
  </nav>
</template>
