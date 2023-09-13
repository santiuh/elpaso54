import { ref } from "vue";
import {
  getReservas,
  getHabitaciones,
  getReservasPorNombre,
  logIn,
  logOut,
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
  const useLogin = (log) => {
    logIn(log).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("nombre", data.user.name);
        });
      }
    });
  };

  const useLogOut = (log) => {
    logOut(log).then((res) => {
      if (res.status === 200) {
        localStorage.clear();
      }
    });
  };

  return {
    useGetReservas,
    reservas,
    useGetHabitaciones,
    habitaciones,
    useGetReservasPorNombre,
    resultados,
    useLogin,
    useLogOut,
  };
};
