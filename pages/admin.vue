<script setup>
import { ref, computed } from "vue";
import { useReservas } from "@/composables/reservas";

const { useGetReservas, reservas } = useReservas();
useGetReservas();

// CALCULAR DIAS EN EL MES
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// PINTAR RESERVA
function getClass(dia, habitacion) {
  const fechaDia = new Date(tablaaño.value, tablames.value - 1, dia); // Meses en JavaScript son base 0 (enero = 0, febrero = 1, ...)

  const reserva = reservas.value.find((reserva) => {
    const fechaDesde = new Date(reserva.desde);
    const fechaHasta = new Date(reserva.hasta);
    return (
      fechaDia >= fechaDesde &&
      fechaDia <= fechaHasta &&
      reserva.habitacion_id === habitacion
    );
  });

  return reserva ? "bg-red-400" : habitacion % 2 === 0 ? "bg-gray-200" : "";
}

function getReservaTabla(dia, habitacion) {
  const fechaDia = new Date(tablaaño.value, tablames.value - 1, dia);
  const reserva = reservas.value.find((reserva) => {
    const fechaDesde = new Date(reserva.desde);
    const fechaHasta = new Date(reserva.hasta);
    return (
      fechaDia >= fechaDesde &&
      fechaDia <= fechaHasta &&
      reserva.habitacion_id === habitacion
    );
  });
  console.log(reserva.pasajero);
  pasajero.value = reserva.pasajero;
  fechaDesde.value = reserva.desde;
  fechaHasta.value = reserva.hasta;
  return reserva || null;
}

const habitaciones = 12;
const tablames = ref(8);
const tablaaño = ref(2023);
const dias = daysInMonth(tablames.value, tablaaño.value);
const pasajero = ref("");
const fechaDesde = ref("");
const fechaHasta = ref("");
</script>

<template>
  <div class="flex flex-row">
    <!-- izquierda -->
    <div>
      <div class="flex flex-row">
        <select v-model="tablames" class="border" name="" id="">
          <option value="1">Enero</option>
          <option value="2">Febrero</option>
          <option value="3">Marzo</option>
          <option value="4">Abril</option>
          <option value="5">Mayo</option>
          <option value="6">Junio</option>
          <option value="7">Julio</option>
          <option value="8">Agosto</option>
          <option value="9">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
        </select>
        <input v-model="tablaaño" class="border" type="text" name="" id="" />
      </div>
      <div class="border max-w-fit p-2">
        <div v-for="habitacion in habitaciones" class="my-1">
          <div style="display: flex">
            <button
              v-for="dia in dias"
              :key="dia"
              class="border border-gray-300 min-w-[2rem] text-center px-1"
              :class="getClass(dia, habitacion)"
              @click="getReservaTabla(dia, habitacion)"
            >
              {{ dia }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- derecha -->
    <div>pasajero : {{ pasajero }}</div>
    <input type="date" name="" id="" v-model="fechaDesde" />
    <input type="date" name="" id="" v-model="fechaHasta" />
  </div>
</template>
