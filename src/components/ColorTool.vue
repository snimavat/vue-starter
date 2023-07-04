<template>
  <div class="flex overflow-scroll py-10 px-10">
    <div v-for="c in colors" :key="c" class="flex flex-col items-center mr-6">
      <span class="text-sm mb-6"> {{ c }} </span>
      <div
        v-for="w in weights"
        :key="c + w"
        :class="['bg-' + c + '-' + w]"
        class="flex flex-col w-60 h-60 pt-6 px-6 cursor-pointer rounded-lg mb-6"
        @click="select(c, w)"
      >
        <div class="relative flex gap-4 items-center">
          <span
            class="w-10 h-10 rounded-full flex text-white justify-center items-center"
            :class="['bg-' + csel + '-' + wsel]"
            >A</span
          >
          <span class="text-lg" :class="txtColor">{{ c }}-{{ w }}</span>
        </div>
        <div class="grow"></div>
        <div class="flex mb-4">
          <button
            :class="['bg-' + csel + '-' + wsel]"
            class="rounded-lg px-4 py-1 grow text-white"
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { ref, computed } from "vue";

const colors = [
  "slate",
  "gray",
    "violet",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
   "cyan",
  "amber",
  "yellow",
  "lime",
    "purple",
  "green",
 
  "teal",
 
  "sky",
  "blue",
    "rose",
  "indigo",

 "emerald",
  "fuchsia",
  "pink",

];

const wsel = ref(800);
const csel = ref("stone");
const txtColor = computed(() => {
  return `text-${csel.value}-${wsel.value}`;
});

const select = (cc, ww) => {
  console.log(cc, ww);
  wsel.value = ww;
  csel.value = cc;
};

const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
</script>
