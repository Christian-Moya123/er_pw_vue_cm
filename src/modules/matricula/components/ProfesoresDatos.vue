<template>
  <div class="todos">
    <button @click="consultar">Consultar</button>
    <table v-if="profesores">
      <thead>
        <tr>
          <th scope="col">Cédula</th>
          <th scope="col">Nombre</th>
          <th scope="col">Acción</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profesor in profesores" :key="profesor.id">
          <td>{{ profesor.cedula }}</td>
          <td>{{ profesor.nombre }}</td>
          <td>
            <Button @click="ver(profesor.links[0].href)">Visualizar</Button>
          </td>
          <td>
            <Button @click="eliminar(profesor.cedula)">Eliminar</Button>
          </td>
        </tr>
      </tbody>
    </table>
    <strong v-if="mensaje">Se eliminó exitosamente el Profesor</strong>
  </div>
</template>

<script>
import {
  obtenerTodosProfesoresFachada,
  obtenerProfesorFachada,
  eliminarProfesorFachada,
} from "@/modules/matricula/helpers/ProfesorCliente";
export default {
  data() {
    return { profesores: null, mensaje: false };
  },
  methods: {
    async consultar() {
      this.profesores = await obtenerTodosProfesoresFachada();
    },
    async ver(link) {
      this.$emit("profesor", await obtenerProfesorFachada(link));
    },
    async eliminar(id) {
      try {
        eliminarProfesorFachada(id);

        setTimeout(async () => {
          this.profesores = null;
          this.mensaje = true;
          await this.consultar();
        }, 1000);

        setTimeout(() => {
          this.mensaje = false;
        }, 3000);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
table {
  color: white;
}
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid black;
}
tbody tr:nth-child(odd) {
  background-color: #abdbeb;
}

tbody tr:nth-child(even) {
  background-color: #a4c3dc;
}

thead tr {
  background-color: #000000;
}

button {
  padding: 5px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  background-color: #8faadc;
  margin: 10px;
  color: white;
}
</style>
