<script setup>
import { ref, computed } from "vue";
import { useReservas } from "@/composables/reservas";
import { deleteReservas, addReserva, updateReserva } from "@/services/base";

const { useGetReservas, reservas, useGetHabitaciones, habitaciones } =
  useReservas();
useGetReservas();
useGetHabitaciones();

// CALCULAR DIAS EN EL MES
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// PINTAR RESERVA
function getClass(dia, habitacion) {
  if (!reservas.value) return "";
  var fechaDesde = null;
  var fechaHasta = null;
  const fechaDia = new Date(Date.UTC(tablaaño.value, tablames.value - 1, dia)); // Meses en JavaScript son base 0 (enero = 0, febrero = 1, ...)
  const reserva = reservas.value.filter((reserva) => {
    fechaDesde = new Date(reserva.desde);
    fechaHasta = new Date(reserva.hasta);

    return (
      fechaDia >= fechaDesde &&
      fechaDia <= fechaHasta &&
      reserva.habitacion_id === habitacion
    );
  });

  if (reserva.length === 0) {
    return "";
  } else if (reserva.length === 1) {
    if (reserva) {
      if (fechaDia.getTime() === new Date(reserva[0].desde).getTime()) {
        return "primer-dia";
      }
      if (fechaDia.getTime() === new Date(reserva[0].hasta).getTime()) {
        return "ultimo-dia";
      }
      return "bg-red-400 fade-in";
    }
    return "";
  } else {
    if (reserva.length === 2) {
      return "dia-compartido";
    }
  }
}

function getReservaTabla(dia, habitacion) {
  const fechaDia = new Date(Date.UTC(tablaaño.value, tablames.value - 1, dia));
  const reserva = reservas.value.find((reserva) => {
    const fechaDesde = new Date(reserva.desde);
    const fechaHasta = new Date(reserva.hasta);
    return (
      fechaDia >= fechaDesde &&
      fechaDia <= fechaHasta &&
      reserva.habitacion_id === habitacion &&
      inpPasajero.value !== reserva.pasajero
    );
  });
  inpPasajero.value = reserva ? reserva.pasajero : null;
  inpNota.value = reserva ? reserva.nota : null;
  inpContacto.value = reserva ? reserva.pasajero_contacto : null;
  inpDesde.value = reserva ? reserva.desde : null;
  inpHasta.value = reserva ? reserva.hasta : null;
  inpNoches.value = reserva ? reserva.noches : null;
  inpPrecio.value = reserva ? reserva.precio_noche : null;
  inpSeña.value = reserva ? reserva.seña : null;
  inpSeñaCuenta.value = reserva ? reserva.seña_cuenta : null;
  inpCancel.value = reserva ? reserva.pago_cancelado_fecha : null;
  inpCancelCuenta.value = reserva ? reserva.pago_cancelado_cuenta : null;
  // CODIGO NUEVO
  inpReservaId.value = reserva ? reserva.id : null;
  inpHabitacion_id.value = reserva ? reserva.habitacion_id : null;
}

const habitacioness = 12;
const tablames = ref(8);
const tablaaño = ref(2023);
const dias = computed(() => {
  return daysInMonth(tablames.value, tablaaño.value);
});
const diasA = daysInMonth(tablames.value, tablaaño.value);

const inpPasajero = ref("");
const inpContacto = ref("");
const inpNota = ref("");

const inpDesde = ref("");
const inpHasta = ref("");
const inpNoches = ref("");
const inpPrecio = ref("");
const inpSeña = ref("");
const inpSeñaCuenta = ref("");
const inpCancel = ref("");
const inpCancelCuenta = ref("");

// SCRIPT NUEVO 6 DE SEPTIEMBRE
const inpHabitacion_id = ref("");
const inpReservaId = ref("");

const hotel_id = ref(1);

const useDeleteReservas = (id) => {
  deleteReservas(id).then((resp) => {
    if (resp.status === 200) {
      useGetReservas();
      console.log(resp);
      console.log(resp.text);
      console.log("okis");
    }
  });
};

const update = (texto) => {
  toastTexto.value = texto;
  toastClass.value = "scale-in-center";
  toastEstado.value = true;
  setTimeout(function () {
    toastClass.value = "scale-out-center";
  }, 3000);
  setTimeout(function () {
    toastEstado.value = false;
  }, 4000);
};
const toastTexto = ref("");
const toastEstado = ref(false);
const toastClass = ref("");

const useAddReserva = () => {
  var reserva = {
    hotel_id: 1,
    habitacion_id: inpHabitacion_id.value,
    desde: inpDesde.value,
    hasta: inpHasta.value,
    noches: inpNoches.value,
    precio_noche: inpPrecio.value,
    seña: inpSeña.value,
    seña_cuenta: inpSeñaCuenta.value,
    pago_debe: 99999,
    pago_cancelado_fecha: inpCancel.value,
    pago_cancelado_cuenta: inpCancelCuenta.value,
    pasajero: inpPasajero.value,
    pasajero_contacto: inpContacto.value,
    nota: inpNota.value,
  };
  addReserva(reserva).then(useGetReservas());
};

const useUpdateReserva = () => {
  var reserva = {
    id: inpReservaId.value,
    hotel_id: 1,
    habitacion_id: inpHabitacion_id.value,
    desde: inpDesde.value,
    hasta: inpHasta.value,
    noches: inpNoches.value,
    precio_noche: inpPrecio.value,
    seña: inpSeña.value,
    seña_cuenta: inpSeñaCuenta.value,
    pago_debe: 99999,
    pago_cancelado_fecha: inpCancel.value,
    pago_cancelado_cuenta: inpCancelCuenta.value,
    pasajero: inpPasajero.value,
    pasajero_contacto: inpContacto.value,
    nota: inpNota.value,
  };
  updateReserva(reserva).then(useGetReservas());
};
</script>

<template>
  <div class="flex flex-col">
    <!-- ARRIBA -->
    <div class="flex flex-col lg:flex-row lg:justify-center">
      <!-- izquierda -->
      <div class="flex flex-row">
        <!-- Cabañas y Nombre hotel -->
        <div class="flex flex-col border">
          <!-- <div class="p-2 text-center text-xl min-w-max">El Paso 43</div> -->
          <select
            name=""
            id=""
            class="py-2 text-xl min-w-max"
            v-model="hotel_id"
          >
            <option :value="1">El Paso 43</option>
            <option :value="2">El Paso 54</option>
          </select>
          <div class="p-2">
            <div v-for="habitacion in habitaciones">
              <div
                class="border border-gray-3 00 text-center my-1"
                :class="habitacion.Habitación % 2 === 0 ? 'bg-gray-200' : ''"
                v-if="habitacion.hotel_id === hotel_id"
              >
                Cabaña {{ habitacion.Habitación }}
              </div>
            </div>
          </div>
        </div>
        <!-- Izquierda - Select y Fechas -->
        <div class="flex flex-col">
          <div class="flex flex-row p-2 border justify-between">
            <!-- Select -->
            <div class="flex flex-row">
              <div class="flex flex-row gap-1">
                <input
                  v-model="tablaaño"
                  class="border rounded-md w-14 text-center"
                  type="text"
                  name=""
                  id=""
                />
                <select
                  class="border rounded-md text-center"
                  v-model="tablames"
                  name=""
                  id=""
                >
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
              </div>
            </div>
            <div class="flex flex-row gap-1">
              <Boton
                @click="
                  tablames !== 1 ? tablames-- : (tablames = 12) && tablaaño--
                "
                texto="<"
                class="!py-0 px-1 font-bold"
              ></Boton>
              <Boton
                @click="
                  tablames !== 12 ? tablames++ : (tablames = 1) && tablaaño++
                "
                texto=">"
                class="!py-0 px-1 font-bold"
              ></Boton>
            </div>
          </div>
          <div class="border max-w-fit p-2">
            <div
              v-for="habitacion in habitaciones"
              :key="`habitacion-${habitacion}`"
              class="my-1"
              :class="habitacion.Habitación % 2 === 0 ? 'bg-gray-200' : ' '"
            >
              <div
                style="display: flex"
                v-if="habitacion.hotel_id === hotel_id"
              >
                <button
                  v-for="dia in dias"
                  :key="`${habitacion}-${dia}`"
                  class="border border-gray-300 min-w-[2rem] text-center px-1"
                  :class="getClass(dia, habitacion.id)"
                  @click="getReservaTabla(dia, habitacion.id)"
                >
                  {{ dia }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- derecha -->
      <div class="flex flex-col border p-2">
        <div class="flex flex-row">
          <div class="flex flex-col w-3/4">
            <div>Pasajero</div>
            <input
              class="border rounded-md"
              type="text"
              v-model="inpPasajero"
              name=""
              id=""
            />
          </div>
          <div class="flex flex-col w-1/4">
            <div>Habitacion</div>
            <select name="" id="" v-model="inpHabitacion_id">
              <option
                :value="habitacion.id"
                v-for="habitacion in habitaciones"
                v-show="habitacion.hotel_id === hotel_id"
              >
                {{ habitacion.Habitación }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex flex-row gap-2">
          <div class="flex flex-col w-1/2">
            <div>Desde</div>
            <input
              class="border rounded-md"
              type="date"
              name=""
              id=""
              v-model="inpDesde"
            />
          </div>
          <div class="flex flex-col w-1/2">
            <div>Hasta</div>
            <input
              class="border rounded-md"
              type="date"
              name=""
              id=""
              v-model="inpHasta"
            />
          </div>
        </div>
        <div class="flex flex-row gap-1">
          <div class="flex flex-col w-1/4">
            <div>Noches</div>
            <input
              class="border rounded-md"
              type="text"
              name=""
              id=""
              v-model="inpNoches"
            />
          </div>
          <div class="flex flex-col w-1/4">
            <div>Personas</div>
            <input
              class="border rounded-md"
              type="text"
              name=""
              id=""
              v-model="inpPrecio"
            />
          </div>
          <div class="flex flex-col w-2/4">
            <div>Precio Por Noche</div>
            <input
              class="border rounded-md"
              type="text"
              name=""
              id=""
              v-model="inpPrecio"
            />
          </div>
        </div>
        <div class="flex flex-row gap-2">
          <div class="flex flex-col w-1/2">
            <div>Seña</div>
            <input
              class="border rounded-md"
              type="text"
              name=""
              id=""
              v-model="inpSeña"
            />
          </div>
          <div class="flex flex-col w-1/2">
            <div>Seña Cuenta</div>
            <select
              class="border rounded-md"
              name=""
              id=""
              v-model="inpSeñaCuenta"
            >
              <option value="1">AMSI</option>
              <option value="2">Mercado Pago</option>
            </select>
          </div>
        </div>
        <div class="flex flex-row gap-2">
          <div class="flex flex-col w-1/2">
            <div>Fecha Cancelación</div>
            <input
              class="border rounded-md"
              type="date"
              name=""
              id=""
              v-model="inpCancel"
            />
          </div>
          <div class="flex flex-col w-1/2">
            <div>Cuenta</div>
            <select
              class="border rounded-md"
              name=""
              id=""
              v-model="inpCancelCuenta"
            >
              <option value="1">AMSI</option>
              <option value="2">Mercado Pago</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col">
          <div>Nota</div>
          <input
            class="border rounded-md"
            type="text"
            name=""
            v-model="inpNota"
            id=""
          />
        </div>
        <div class="flex flex-col">
          <div>Contacto</div>
          <input
            class="border rounded-md"
            type="text"
            name=""
            id=""
            v-model="inpContacto"
          />
        </div>
        <div class="flex flex-row justify-center p-2 gap-2">
          <Boton
            texto="Borrar"
            class="bg-red-500 !px-2 !py-1"
            @click="useDeleteReservas(inpReservaId)"
          ></Boton>
          <Boton
            texto="Editar"
            class="!bg-blue-400 !px-2 !py-1"
            @click="useUpdateReserva()"
          ></Boton>
          <Boton
            texto="Agregar"
            class="!bg-green-600 !px-2 !py-1"
            @click="useAddReserva()"
          ></Boton>
        </div>
      </div>
    </div>
    <!-- ABAJO -->
    <div>hola</div>
  </div>
</template>
