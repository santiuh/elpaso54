<template>
  <div class="relative flex justify-center px-52 my-16">
    <img :src="foto" alt="" />
    <div
      class="absolute bg-white bottom-0 font-monse font-bold text-5xl pt-2 w-1/3 text-center"
    >
      {{ pie }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["foto", "pie"]);
</script>
