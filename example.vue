<template>
  <v-map :zoom=10 :center="initialLocation">
    <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
    <v-polyline-decorator :options="options">
      <v-polyline :opacity="0" :latLngs="latlngs"></v-polyline>
    </v-polyline-decorator>
  </v-map>
</template>

<script>
  import L from 'leaflet'
  import * as Vue2Leaflet from 'vue2-leaflet'
  import Vue2LeafletPolylinedecorator from './Vue2LeafletPolylinedecorator'

  function rand() {
    let max = 0
    let min = 0.1
    return Math.random() * (max - min) + min;
  }

  export default {
    components: {
      'v-map': Vue2Leaflet.LMap,
      'v-tilelayer': Vue2Leaflet.LTileLayer,
      'v-polyline': Vue2Leaflet.LPolyline,
      'v-polyline-decorator': Vue2LeafletPolylinedecorator
    },
    methods: {
    },
    data () {
      let x = -35.15;
      let y = -58.2;
      let latlngs = []
      for (let i = 0; i < 10; i++) {
        latlngs.push(L.latLng(x, y))
        x += rand();
        y += rand();
      }
      let options = {
        patterns: [
             { offset: 12, repeat: 25, symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}}) },
             { offset: 0, repeat: 25, symbol: L.Symbol.dash({pixelSize: 0}) }
         ]
      }
      return {
        options,
        latlngs,
        initialLocation: L.latLng(x-0.3, y-0.3)
      }
    },
    mounted() {
    }
  }
</script>

<style>
  @import "~leaflet/dist/leaflet.css";
  html, body {
    height: 100%;
    margin: 0;
  }
</style>