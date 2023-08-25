<template>
  <div
    :style="{
      'background-image': `url(${fondo})`,
      'background-size': 'cover',
    }"
  >
    <div class="flex flex-row items-center justify-between">
      <Solapa></Solapa>
      <div class="flex flex-row gap-4 justify-around">
        <NuxtLink to="/">
          <button
            class="text-white font-monse text-2xl"
            :class="$route.path === '/' ? 'underline font-bold' : ''"
          >
            Inicio
          </button>
        </NuxtLink>
        <NuxtLink to="/instalaciones">
          <button
            class="text-white font-monse text-2xl"
            :class="
              $route.path === '/instalaciones' ? 'underline font-bold' : ''
            "
          >
            Instalaciones
          </button>
        </NuxtLink>
        <button
          class="text-white font-monse text-2xl"
          :class="$route.path === '/habitaciones' ? 'underline font-bold' : ''"
        >
          Habitaciones
        </button>
        <button
          class="text-white font-monse text-2xl"
          :class="$route.path === '/contacto' ? 'underline font-bold' : ''"
        >
          Contactanos
        </button>
      </div>
    </div>
    <!-- SPEECH -->
    <div class="flex flex-col h-full justify-center gap-y-28">
      <div class="flex flex-col">
        <div class="text-white font-monse text-5xl">BIENVENDO A</div>
        <div class="text-white font-adobe text-9xl font-bold">EL PASO 43</div>
        <div class="text-white font-adobe text-7xl font-bold">H O T E L</div>
        <p class="text-white font-adobe text-2xl">
          Reservá tu estadía y disfruta de la playa a solo 43 pasos del mar.
        </p>
      </div>
      <!-- BOTON  -->
      <div class="flex justify-center">
        <Boton texto="RESERVA YA" icono="si"></Boton>
      </div>
    </div>

    <!-- ALINEAR EL HEADER AL Y SIN USAR HEIGHT -->
  </div>
</template>
<script setup>
const props = defineProps(["fondo"]);
</script>
