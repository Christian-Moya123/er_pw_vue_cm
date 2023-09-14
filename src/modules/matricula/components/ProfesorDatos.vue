<template>
  <div class="datos">
    <div class="cont">
      <div class="campos">
        <label for="nombre">Nombre</label>
        <input id="nombre" type="text" v-model="nombre" />
      </div>

      <div class="campos">
        <label for="apellido">Apellido</label>
        <input id="apellido" type="text" v-model="apellido" />
      </div>
      <div class="campos">
        <label for="nombre">Cédula</label>
        <input id="nombre" type="text" v-model="cedula" />
      </div>

      <div class="campos">
        <label for="fecha">Fecha de Nacimiento</label>
        <input
          type="date"
          id="fecha"
          name="trip-start"
          v-model="fechaNacimiento"
        />
      </div>
    </div>
    <button v-if="!profesor.nombre" @click="guardarProfesor">Guardar</button>
    <strong v-if="mensaje">Se insertó el profesor</strong>
  </div>
</template>

<script>
import { ingresarProfesorFachada } from "@/modules/matricula/helpers/ProfesorCliente";
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
      fechaNacimiento: null,
      mensaje: false,
    };
  },
  props: {
    profesor: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    if (this.profesor.nombre) {
      this.nombre = this.profesor.nombre;
      this.apellido = this.profesor.apellido;
      this.cedula = this.profesor.cedula;
      this.fechaNacimiento = this.profesor.fechaNacimiento;
    }
  },

  methods: {
    guardarProfesor() {
      const data = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        fechaNacimiento: (this.fechaNacimiento += "T00:00:00"),
      };
      try {
        ingresarProfesorFachada(data);
        this.mensaje = true;
        this.reiniciarVariables();
      } catch (error) {
        console.log(error);
      }
    },
    reiniciarVariables() {
      this.cedula = null;
      this.nombre = null;
      this.apellido = null;
      this.fechaNacimiento = null;
      setTimeout(() => {
        this.mensaje = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.datos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
.cont {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 20px;
  width: 300px;
  padding: 30px;
  border-radius: 5px;
}
label,
input {
  width: 100%;
  height: fit-content;
  outline: none;
  margin: 0;
  padding: 10px;
  color: rgb(43, 43, 148);
}

input {
  height: 30px;
  border-radius: 5px;
  color: rgb(98, 158, 198);
}
.campos {
  width: 100%;
}

button {
  padding: 10px;
  border-radius: 5px;
  background: #8faadc;
  color: white;
}
</style>
