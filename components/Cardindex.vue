<template>
  <div
    class="flex lg:flex-row flex-col-reverse lg:mx-52 pb-10 gap-5 lg:gap-16 items-center"
  >
    <div class="flex flex-col items-center lg:items-start gap-5 lg:gap-0">
      <div
        class="font-adobe font-bold text-4xl lg:text-5xl text-center lg:text-start"
      >
        {{ titulocard }}
      </div>
      <div class="text-xl text-center lg:text-start font-monse flex lg:my-7">
        {{ textocard }}
      </div>
      <Boton texto="VER MÁS"></Boton>
    </div>
    <div><img :src="imagen" alt="" /></div>
  </div>
</template>
<script setup>
const props = defineProps(["textocard", "imagen", "titulocard"]);
</script>
