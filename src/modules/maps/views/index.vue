<template>
  <q-page class="flex flex-center">
    <Map :key="key" />
  </q-page>
</template>

<script>
import Map from 'components/maps/ViewMap';

export default {
  name: 'Maps',
  components: {
    Map,
  },
  data() {
    return {
      key: "41281c51f9de45edaf1c8ed44bb10e30",
    };
  }
};
</script>
