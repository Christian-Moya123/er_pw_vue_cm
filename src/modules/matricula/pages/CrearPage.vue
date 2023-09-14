<template>
  <div class="cp">
    <ProfesorDatos :profesor="{}"/>
  </div>
</template>

<script>
import ProfesorDatos from "../components/ProfesorDatos.vue";
export default {
  components: {
    ProfesorDatos,
  },
};
</script>

<style scoped>
.cp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
</style>
