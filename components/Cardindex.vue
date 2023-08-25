<template>
  <div class="flex flex-row px-52 py-6 gap-16">
    <div class="flex flex-col py-20">
      <div class="font-adobe font-bold text-5xl">Luxury redefined</div>
      <div class="text-xl font-monse flex my-7">
        {{ textocard }}
      </div>
      <Boton texto="VER MÁS"></Boton>
    </div>
    <div><img :src="imagen" alt="" /></div>
  </div>
</template>
<script setup>
const props = defineProps(["textocard", "imagen"]);
</script>
