const prefix = 'http://127.0.0.1:8000/api/'

export const getReservas = () => {
  return fetch(prefix + 'reservas', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
}
