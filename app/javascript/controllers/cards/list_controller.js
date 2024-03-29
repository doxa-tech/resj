import ListController from "controllers/list_controller"
import mapboxgl from 'mapbox-gl';

export default class MapController extends ListController {
  static targets = [...ListController.targets, "itemTemplate", "name", "type",
    "place", "canton", "description", "link"];

  map;

  initialize() {
    const mapElement = document.getElementById('mapbox');

    if (!mapElement) {
      console.error("mapbox html element not found")
      return
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoibmtjciIsImEiOiI4UnhLZEx3In0.bakfmpx2lREiNbHn0lWq9Q';
    var zoom = 0;
    if (window.innerWidth < 626) {
      zoom = 9;
    } else {
      zoom = 9;
    }

    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/nkcr/ckoxc46cg1eqy17pfcfzq79gx',
      minZoom: 7,
      center: [7.1960, 46.6221],
      zoom: zoom,
      scrollZoom: false
    });

    map.addControl(new mapboxgl.NavigationControl({
      showCompass: false,
      visualizePitch: false
    }), 'bottom-left');

    map.on('styleimagemissing', function (e) {
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

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;

      const context = canvas.getContext('2d');

      // a classic marker:
      // var p = new Path2D('M12.629,41c5.069,0 12.371,-21.381 12.371,-28.07c0,-6.69 -5.135,-12.93 -12.371,-12.93c-7.235,0 -12.629,6.55 -12.629,12.93c0,6.38 7.561,28.07 12.629,28.07Z')
      // losange:
      var p = new Path2D('M14.042,0L28.083,14.042L14.042,28.083L0,14.042L14.042,0Z')
      context.fillStyle = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
      context.fill(p);

      context.beginPath();
      context.arc(14.042, 10.263, 4.035, 0, 2 * Math.PI, false);
      context.fillStyle = '#fff';
      context.fill();
      // update this image's data with data from the canvas
      const data = context.getImageData(0, 0, w, h).data;

      map.addImage(id, { width: w, height: h, data: data }, { pixelRatio: 2 });
    });

    map.on('load', this.mapLoaded.bind(this));

    this.map = map;
  }

  mapLoaded() {
    const map = this.map;

    map.addSource('items', {
      type: "geojson",
      data: {
        "type": "FeatureCollection",
        "features": []
      },
      cluster: true,
      clusterRadius: 20
    });

    map.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'items',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': {
          property: 'point_count',
          type: 'interval',
          stops: [
            [0, '#111111'],
            [5, '#373736'],
            [10, '#333333'],
          ]
        },
        'circle-radius': {
          property: 'point_count',
          type: 'interval',
          stops: [
            [0, 20],
            [100, 30],
            [750, 40]
          ]
        }
      }
    });

    map.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'items',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
      },
      paint: {
        "text-color": "#fff"
      }
    });

    map.addLayer({
      id: 'unclustered-point',
      type: 'symbol',
      source: 'items',
      filter: ['!', ['has', 'point_count']],

      'layout': {
        'icon-image': ['concat', 'marker-rgb-', ['get', 'color']],
        'icon-size': 2,
        'icon-offset': [0, -1],
        'icon-allow-overlap': true,
        'text-allow-overlap': true,
        'icon-ignore-placement': true,
        'text-ignore-placement': true
      }
    });

    // inspect a cluster on click
    map.on('click', 'clusters', function (e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ['clusters']
      });
      var clusterId = features[0].properties.cluster_id;
      map.getSource('items').getClusterExpansionZoom(
        clusterId,
        function (err, zoom) {
          if (err) return;

          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom
          });
        }
      );
    });

    map.on('mouseenter', 'clusters', function () {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'clusters', function () {
      map.getCanvas().style.cursor = '';
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'unclustered-point', function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var type = e.features[0].properties.type;
      var name = e.features[0].properties.name;
      var disabled = e.features[0].properties.disabled;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      map.flyTo({ center: e.features[0].geometry.coordinates });

      let content = `<div><h5>${type}</h5><p>${name}</p><p><a href="${e.features[0].properties.href}">En savoir plus</a></p></div>`;

      if (disabled) {
        content = content + "<p class='outdated'>Ce groupe n'est plus à jour</p>";
      }

      new mapboxgl.Popup({ closeButton: false, className: disabled ? 'disabled' : '' })
        .setLngLat(coordinates)
        .setHTML(content)
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'unclustered-point', function () {
      map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'unclustered-point', function () {
      map.getCanvas().style.cursor = '';
    });
  }

  updateList(items) {
    // a table of rows
    let content = [];

    items.forEach((c) => {
      let name = `<a href="${c.properties.href}">${c.properties.name}</a>`;

      if (c.properties.disabled) {
        this.itemTemplateTarget.classList.add("disabled");
        name = name + `<p class="outdated">Ce groupe n'est plus à jour</p>`;
      } else {
        this.itemTemplateTarget.classList.remove("disabled");
      }

      this.typeTarget.innerHTML = c.properties.type;
      this.placeTarget.innerHTML = c.properties.place;
      this.cantonTarget.innerHTML = c.properties.canton;
      this.descriptionTarget.innerHTML = c.properties.description;
      this.linkTarget.href = c.properties.href;
      this.nameTarget.innerHTML = name;

      content.push(this.itemTemplateTarget.outerHTML);
    });
    return content;
  }

  updateMap(items) {
    const map = this.map;
    if (!map.loaded()) {
      map.on('load', () => {
        this.setMap(items);
      });
    } else {
      this.setMap(items);
    }
  }

  get itemPerPage() {
    return 5;
  }

  setMap(items) {
    const map = this.map;
    map.getSource('items').setData({
      "type": "FeatureCollection",
      "features": items
    });
    const boundingBox = this.getBoundingBox(items);
    if (boundingBox.xMin !== undefined && boundingBox.yMin !== undefined &&
      boundingBox.xMax !== undefined && boundingBox.yMax) {
      map.fitBounds([[boundingBox.xMin, boundingBox.yMin], [boundingBox.xMax, boundingBox.yMax]], { maxZoom: 13 });
    }
  }

  getBoundingBox(data) {
    var bounds = {}, coords, point, latitude, longitude;

    for (var i = 0; i < data.length; i++) {
      coords = data[i].geometry.coordinates;
      longitude = coords[0];
      latitude = coords[1];
      if (longitude === null || latitude === null) continue
      bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
      bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
      bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
      bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;

    }

    return bounds;
  }
}