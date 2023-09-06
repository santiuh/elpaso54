<template>
  <div
    class="bg-green-500 max-w-max p-3 rounded text-xl text-center"
    :class="clase"
  >
    {{ texto }}
  </div>
</template>
<script setup>
const props = defineProps(["clase", "texto"]);
</script>
