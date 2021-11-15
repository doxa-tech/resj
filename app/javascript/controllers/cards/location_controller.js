import { Controller } from "stimulus"
import mapboxgl from 'mapbox-gl';

export default class LocationController extends Controller {
  static targets = ["latitude", "longitude", "map"];
  map;

  initialize() {
    const mapElement = this.mapTarget;
    if (!mapElement) {
      console.error("Mapbox HTML element not found.")
      return
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoibmtjciIsImEiOiI4UnhLZEx3In0.bakfmpx2lREiNbHn0lWq9Q';
    var zoom = 0;
    if (window.innerWidth < 626) {
      zoom = 7;
    } else {
      zoom = 8;
    }

    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/nkcr/ck4vla6vz2ir81cnya5cl6uog',
      minZoom: 6,
      center: [6.637289636687626, 46.60327680658895],
      zoom: zoom,
      scrollZoom: false,
    });

    map.addControl(new mapboxgl.NavigationControl({
      showCompass: false,
      visualizePitch: false
    }), 'bottom-left');

    map.on('styleimagemissing', (e) => {
      var id = e.id; // id of the missing image

      // check if this missing icon is one this function can generate
      var prefix = 'marker-rgb-';
      if (id.indexOf(prefix) !== 0) return;

      // extract the color from the id
      var rgb = id
        .replace(prefix, '')
        .split(',')
        .map(Number);
      var w = 30;
      var h = 30;

      var canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;

      var context = canvas.getContext('2d');

      var p = new Path2D('M14.042,0L28.083,14.042L14.042,28.083L0,14.042L14.042,0Z')
      context.fillStyle = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
      context.fill(p);

      context.beginPath();
      context.arc(14.042, 10.263, 4.035, 0, 2 * Math.PI, false);
      context.fillStyle = '#fff';
      context.fill();

      const data = context.getImageData(0, 0, w, h).data

      this.map.addImage(id, { width: w, height: h, data: data }, { pixelRatio: 2 });
    });

    this.map = map;

    const latTarget = this.latitudeTarget;
    const lngTarget = this.longitudeTarget;

    const lat = parseFloat(latTarget.value);
    const lng = parseFloat(lngTarget.value);

    map.on('load', () => {

      map.addSource('items', {
        type: "geojson",
        data: {
          "type": "FeatureCollection",
          "features": []
        },
      });

      map.addLayer({
        id: 'single-point',
        type: 'symbol',
        source: 'items',

        'layout': {
          'icon-image': ['concat', 'marker-rgb-', ['get', 'color']],
          'icon-size': 2,
          'icon-offset': [0, -1],
          'icon-allow-overlap': true,
          'text-allow-overlap': true,
          'icon-ignore-placement': true,
          'text-ignore-placement': true,
          'visibility': 'visible'
        }
      });

      if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
        const feature = {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              lng, lat
            ]
          },
          "properties": {
            "color": "0,0,0"
          }
        }
        this.setMap(feature);
      }
    });

    map.on('click', (e) => {
      latTarget.value = e.lngLat.lat
      lngTarget.value = e.lngLat.lng

      const feature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            e.lngLat.lng, e.lngLat.lat
          ]
        },
        "properties": {
          "color": "0,0,0"
        }
      }

      this.setMap(feature);
    });
  }

  setMap(feature) {
    let map = this.map;
    map.getSource('items').setData({
      "type": "FeatureCollection",
      "features": [feature]
    });
    map.flyTo({ center: feature.geometry.coordinates });
    // map.flyTo({ center: [feature.coordinates[0], feature.coordinates[1]] });
  }

}