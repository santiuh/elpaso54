const prefix = "http://127.0.0.1:8000/api/";

export const getReservas = () => {
  return fetch(prefix + "reservas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => res.json());
};

export const addReserva = (data) => {
  return fetch(prefix + "reservas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const updateReserva = (data) => {
  return fetch(prefix + "reservas", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const deleteReservas = (id) => {
  return fetch(prefix + "reservas/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => res.json());
};

export const getHabitaciones = () => {
  return fetch(prefix + "habitaciones", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => res.json());
};

export const getReservasPorNombre = (busqueda) => {
  return fetch(prefix + "reservas/buscarPorNombre", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(busqueda),
  }).then((res) => res.json());
};

export const logIn = (log) => {
  return fetch(prefix + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(log),
  });
};

export const logOut = () => {
  return fetch(prefix + "logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
