import axios from "axios";

export const ingresarProfesorFachada = (body) => {
  ingresarProfesor(body);
};

export const obtenerTodosProfesoresFachada = async () => {
  return await obtenerTodosProfesores();
};

export const obtenerProfesorFachada = async (link) => {
  return await obtenerProfesor(link);
};

export const eliminarProfesorFachada = (cedula) => {
  return eliminarProfesor(cedula);
};

const ingresarProfesor = (body) => {
  console.log(body);
  axios
    .post(`http://localhost:8081/API/v1.0/Matricula/profesores`, body)
    .then((r) => r.data);
};

const obtenerTodosProfesores = async () => {
  const data = axios
    .get(`http://localhost:8081/API/v1.0/Matricula/profesores`)
    .then((r) => r.data);
  return data;
};

const obtenerProfesor = async (link) => {
  const data = axios.get(link).then((r) => r.data);
  return data;
};

const eliminarProfesor = (cedula) => {
  const data = axios
    .delete(`http://localhost:8081/API/v1.0/Matricula/profesores/${cedula}`)
    .then((r) => r.data);
  return data;
};
