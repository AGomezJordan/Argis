<template>
    <div id="map"></div>
</template>
<script>
import { loadModules } from 'esri-loader';
import { mapMutations } from 'vuex';
export default{
  name: 'SecondMap',
  data() {
    return {
      bg: [4, 191, 122, 0.6]
    }
  },
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
        "esri/widgets/Locate",
        "esri/Graphic",
        "esri/layers/GraphicsLayer"
        ], { css: true })
        .then(([esriConfig, Map,SceneView, Locate, Graphic, GraphicsLayer]) => {
          esriConfig.locale = 'es';
          esriConfig.apiKey = 'AAPK4d895666613e47c6b3e73b7c36951a43HFKStwRMIOSdJGTS_Rutvnc4IORFMfY20sLiZ0jcRm8a5T42DmQVU62UhXxVPQgr';
          const map = new Map({
            basemap: "arcgis-topographic"
          });
          const view = new SceneView({
              map,
              container: 'map',
              center: [-118.807481, 34.010447],
              zoom: 14
          });

          const graphicsLayer = new GraphicsLayer();
          map.add(graphicsLayer);

          const point = {
            type: "point",
            longitude: -118.80657463861,
            latitude: 34.0005930608889
          };
          const simpleMarkerSymbol = {
            type: "simple-marker",
            color: this.bg,  // Orange
            outline: {
                color: [255, 255, 255], // White
                width: 1
            }
          };
          const pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol
          });
          graphicsLayer.add(pointGraphic);
          const polygon = {
            type: "polygon",
            rings: [
                [-118.818984489994, 34.0137559967283], //Longitude, latitude
                [-118.806796597377, 34.0215816298725], //Longitude, latitude
                [-118.791432890735, 34.0163883241613], //Longitude, latitude
                [-118.79596686535, 34.008564864635],   //Longitude, latitude
                [-118.808558110679, 34.0035027131376]  //Longitude, latitude
            ]
          };

          const simpleFillSymbol = {
            type: "simple-fill",
            color: this.bg,  // Orange, opacity 80%
            outline: {
                color: [255, 255, 255],
                width: 1
            }
          };

          const popupTemplate = {
            title: "Primer PopUp",
            content: "Este es mi primer popup y no se que hace"
          }
          const attributes = {
            Name: "Graphic",
            Description: "I am a polygon"
          }

          const polygonGraphic = new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol,
            attributes: attributes,
            popupTemplate: popupTemplate
          });
          graphicsLayer.add(polygonGraphic);

          
          const locate = new Locate({
            view: view,
            useHeadingEnabled: false,
            goToOverride: function(view, options) {
              options.target.scale = 3000;
              return view.goTo(options.target);
            }
          });
          view.ui.add(locate, "top-left");

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