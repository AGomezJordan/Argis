<template>
    <div id="map"></div>
</template>
<script>
import { loadModules } from 'esri-loader';
export default{
    mounted(){
        loadModules([
            "esri/config",
            "esri/WebMap",
            "esri/views/MapView",
        ], { css: true })
        .then(([esriConfig, Map,SceneView]) => {
          esriConfig.apiKey = 'AAPK4d895666613e47c6b3e73b7c36951a43HFKStwRMIOSdJGTS_Rutvnc4IORFMfY20sLiZ0jcRm8a5T42DmQVU62UhXxVPQgr';
          let map = new Map({
            portalItem: {
              id: "41281c51f9de45edaf1c8ed44bb10e30"
            }
          });
          let map_view = new SceneView({
              map,
              container: 'map'
          });
        });
    }
}
</script>

<style scoped>
  #map{
      width:100%;
      height: 93vh;
  }
</style>