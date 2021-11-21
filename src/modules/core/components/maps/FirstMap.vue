<template>
    <div id="map"></div>
</template>
<script>
import { loadModules } from 'esri-loader';
import { mapMutations } from 'vuex';
export default{
  name: 'FirstMap',
  created(){
    this.setMap();
  },
  methods: {
    ...mapMutations('loader', ['SET_RUN']),
    setMap() {
      this.SET_RUN(true);
      loadModules([
        "esri/config",
        "esri/WebMap",
        "esri/views/MapView",
        ], { css: true })
        .then(([esriConfig, Map,SceneView]) => {
          esriConfig.locale = 'es';
          esriConfig.apiKey = 'AAPK4d895666613e47c6b3e73b7c36951a43HFKStwRMIOSdJGTS_Rutvnc4IORFMfY20sLiZ0jcRm8a5T42DmQVU62UhXxVPQgr';
          const map = new Map({
            portalItem: {
              id: "41281c51f9de45edaf1c8ed44bb10e30"
            }
          });
          const view = new SceneView({
              map,
              container: 'map'
          });
          view.when(() => this.SET_RUN(false));
        });
    }
  }
}
</script>

<style scoped>
  #map{
      width:100%;
      height: 100%;
  }
</style>