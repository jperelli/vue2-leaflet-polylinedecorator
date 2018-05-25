<template>
  <div style="display: none;">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet-polylinedecorator'

import { findRealParent, propsBinder } from 'vue2-leaflet'

const props = {
  paths: {
    type: Array,
    default: () => []
  },
  patterns: {
    type: Array,
    default: () => []
  },
  visible: {
    type: Boolean,
    custom: true,
    default: true
  }
};

export default {
  name: 'LPolylineDecorator',
  props,
  data() {
    return {
      ready: false,
    }
  },
  mounted() {
    const polyline = L.polyline(this.paths);
    const options = { patterns: this.patterns };
    this.mapObject = L.polylineDecorator(polyline, options);
    L.DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
  },
  beforeDestroy() {
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setVisible(newVal, oldVal) {
      if (newVal == oldVal) return;
      if (newVal) {
        this.parentContainer.addLayer(this);
      } else {
        this.parentContainer.removeLayer(this);
      }
    },
    addLatLng(value) {
      this.mapObject.addLatLng(value);
    }
  }
};
</script>
