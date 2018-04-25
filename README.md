# vue2-leaflet-polylinedecorator

This is a [polyline decorator plugin](https://github.com/bbecquet/Leaflet.PolylineDecorator) extension for [vue2-leaflet package](https://github.com/KoRiGaN/Vue2Leaflet)

## Install

    npm install --save vue2-leaflet-polylinedecorator

## Demo

    git clone git@github.com:jperelli/vue2-leaflet-polylinedecorator.git
    cd vue2-leaflet-polylinedecorator
    yarn
    yarn example

    # or alternatively using npm
    npm install
    npm run example

Then you should be able to navigate with your browser and see the demo in http://localhost:4000/

You can see the demo code in the file [example.vue](example.vue)

## Usage

### on &lt;template&gt; add

something like this

    <v-map :zoom=10 :center="initialLocation">
      <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-polyline-decorator :options="options">
        <v-polyline :opacity="0" :latLngs="latlngs"></v-polyline>
      </v-polyline-decorator>
    </v-map>

### on &lt;script&gt; add

#### option 1

In the same template file, at `<script>` part, this will make the component available only to the template in this file

    import Vue2LeafletPolylineDecorator from 'vue2-leaflet-polylinedecorator'
    ...
    export default {
      ...
      components: {
        'v-polyline-decorator': Vue2LeafletPolylineDecorator
        ...
      },
      ...
    }

#### option 2

At main Vue configuration, this will make the component available to all templates in your app

    import Vue from 'vue'
    import Vue2LeafletPolylineDecorator from 'vue2-leaflet-polylinedecorator'
    ...
    Vue.component('v-polyline-decorator', Vue2LeafletPolylineDecorator)

## Access polylinedecorator layer directly

If you need to access other polylineDecorator methods, like [setPaths()](https://github.com/bbecquet/Leaflet.PolylineDecorator#methods), you can do it with a ref on the polylinedecorator vue element and using the `mapObject` property

    ...
    <v-polyline-decorator ref="decoratorRef">
      ...
    </v-polyline-decorator>
    ...

    ...
    this.$refs.decoratorRef.mapObject.setPaths()
    ...


## Develop and build

    npm install
    npm run build

## Author

[Julián Perelli](https://jperelli.com.ar/)

## License

MIT
