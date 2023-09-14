<template>
  <div class="conp">
    <ProfesoresDatos @profesor="obtener($event)" />
    <ProfesorDatos :profesor="profesor" v-if="profesor" />
  </div>
</template>

<script>
import ProfesorDatos from "../components/ProfesorDatos.vue";
import ProfesoresDatos from "../components/ProfesoresDatos.vue";
export default {
  components: { ProfesoresDatos, ProfesorDatos },
  data() {
    return {
      profesor: null,
    };
  },
  methods: {
    obtener(p) {
      p.fechaNacimiento = p.fechaNacimiento.substring(0, 10);
      console.log(p);
      this.profesor = p;
    },
  },
};
</script>

<style scoped>
.conp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
</style>
