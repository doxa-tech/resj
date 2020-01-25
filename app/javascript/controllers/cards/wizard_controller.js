import { Controller } from "stimulus"
import mapboxgl from 'mapbox-gl';

export default class WizardController extends Controller {
  static targets = ["latitude", "longitude"];
  map;

  initialize() {
    const mapElement = document.getElementById('mapbox');
    if (mapElement) {
      mapboxgl.accessToken = 'pk.eyJ1IjoibmtjciIsImEiOiI4UnhLZEx3In0.bakfmpx2lREiNbHn0lWq9Q';
      var zoom = 0;
      if (window.innerWidth < 626) {
        zoom = 7;
      } else {
        zoom = 8;
      }
      let map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/nkcr/ck4vla6vz2ir81cnya5cl6uog',
        minZoom: 7,
        center: [7.1960, 46.6221],
        zoom: zoom,
        scrollZoom: false
      });
      const latTarget = this.latitudeTarget;
      const lngTarget = this.longitudeTarget;
      map.on('load', function () {
        map.addControl(new mapboxgl.NavigationControl());
        map.on('click', function (e) {
          console.log(e.lngLat.lat)
          latTarget.value = e.lngLat.lat
          lngTarget.value = e.lngLat.lng
          var el = document.createElement('div');
          el.className = 'marker';
          if (this.marker !== undefined) {
            this.marker.remove();
          }
          this.marker = new mapboxgl.Marker(el)
            .setLngLat(e.lngLat.toArray())
            .addTo(map);
        });
      });
    } else {
      console.error("mapbox html element not found. ")
    }
  }

}