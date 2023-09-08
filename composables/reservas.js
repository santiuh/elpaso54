import { ref } from "vue";
import {
  getReservas,
  getHabitaciones,
  getReservasPorNombre,
} from "@/services/base";

const reservas = ref([]);
const habitaciones = ref([]);
const resultados = ref([]);

export const useReservas = () => {
  const useGetReservas = () => {
    getReservas().then((data) => (reservas.value = data));
  };

  const useGetHabitaciones = () => {
    getHabitaciones().then((data) => (habitaciones.value = data));
  };

  const useGetReservasPorNombre = (busqueda) => {
    busqueda = { pasajero: busqueda };
    getReservasPorNombre(busqueda).then(
      (data) => (resultados.value = data.resultados)
    );
  };
  return {
    useGetReservas,
    reservas,
    useGetHabitaciones,
    habitaciones,
    useGetReservasPorNombre,
    resultados,
  };
};
