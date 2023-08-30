import { ref } from 'vue'
import { getReservas } from '@/services/base'

const reservas = ref([])

export const useReservas = () => {
  const useGetReservas = () => {
    getReservas().then((data) => (reservas.value = data))
  }

  return {
    useGetReservas,
    reservas
  }
}
