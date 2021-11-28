<template>
  <div class="flex">
    <h1 v-for="n in 50" :key="n">hola</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      h: 600,
    };
  },
};
</script>

<style scoped>
</style>