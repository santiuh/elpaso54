import { ref } from "vue";
import { getReservas, getHabitaciones } from "@/services/base";

const reservas = ref([]);
const habitaciones = ref([]);

export const useReservas = () => {
  const useGetReservas = () => {
    getReservas().then((data) => (reservas.value = data));
  };

  const useGetHabitaciones = () => {
    getHabitaciones().then((data) => (habitaciones.value = data));
  };
  return {
    useGetReservas,
    reservas,
    useGetHabitaciones,
    habitaciones,
  };
};
