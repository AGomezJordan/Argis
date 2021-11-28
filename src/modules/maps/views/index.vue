<template>
  <div>
    <q-tabs
        v-model="tab"
        class="bg-dark text-white"
      >
        <q-tab name="fm" label="First Map" />
        <q-tab name="sm" label="Second Map" />
      </q-tabs>
      <div v-if="tab === 'fm'" class="mapContainer">
        <FirstMap />
      </div>
      <div v-if="tab === 'sm'" class="mapContainer">
        <SecondMap />
      </div>
  </div>
</template>

<script>
import FirstMap from 'components/maps/FirstMap';
import SecondMap from 'components/maps/SecondMap';

export default {
  name: 'Maps',
  components: {
    FirstMap,
    SecondMap,
  },
  data() {
    return {
      tab: 'sm'
    };
  },
};
</script>
<style scoped>
.mapContainer {
  width: 100%;
  height: 87.8vh;
}
</style>
