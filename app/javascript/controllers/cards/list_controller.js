import ListController from "controllers/list_controller.js"
import mapboxgl from 'mapbox-gl';

export default class extends ListController {
  static targets = [...ListController.targets, "itemTemplate", "name", "type"];
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
        var w = 25;
        var h = 41;

        // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
        // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
        var pulsingDot = {
          width: w,
          height: h,
          data: new Uint8Array(w * h * 4),

          // get rendering context for the map canvas when layer is added to the map
          onAdd: function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
            // draw inner circle
            var context = this.context

            var p = new Path2D('M12.629,41c5.069,0 12.371,-21.381 12.371,-28.07c0,-6.69 -5.135,-12.93 -12.371,-12.93c-7.235,0 -12.629,6.55 -12.629,12.93c0,6.38 7.561,28.07 12.629,28.07Z')
            context.fillStyle = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
            context.fill(p);

            context.beginPath();
            context.arc(12.379, 12.93, 5.323, 0, 2 * Math.PI, false);
            context.fillStyle = '#fff';
            context.fill();
            // <circle cx="" cy="" r="" style="fill:#fff;"/>
            // update this image's data with data from the canvas
            this.data = context.getImageData(
              0,
              0,
              this.width,
              this.height
            ).data;

            // continuously repaint the map, resulting in the smooth animation of the dot
            map.triggerRepaint();
          },

          // called once before every frame where the icon will be used
          render: function () {
            // return `true` to let the map know that the image was updated
            return true;
          }
        };
        map.addImage(id, pulsingDot, { pixelRatio: 2 });
      });
      map.on('load', function () {
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl());
        map.addSource('items', {
          type: "geojson",
          data: {
            "type": "FeatureCollection",
            "features": []
          },
          cluster: true
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
                [0, '#41A337'],
                [5, '#2D7026'],
                [10, '#0B5703'],
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
          }
        });

        map.addLayer({
          id: 'unclustered-point',
          type: 'symbol',
          source: 'items',
          filter: ['!', ['has', 'point_count']],

          'layout': {
            'icon-image': ['concat', 'marker-rgb-', ['get', 'color']],
            'icon-size': 1.6,
            'icon-offset': [0, -1]
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
          var description = e.features[0].properties.description;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          map.flyTo({ center: e.features[0].geometry.coordinates });

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
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
      });
      this.map = map;
    } else {
      console.error("mapbox html element not found.")
    }
  }

  updateList(items) {
    // a table of rows
    let content = [];
    items.forEach((c) => {
      this.nameTarget.innerHTML = c.properties.name;
      this.nameTarget.href = c.properties.href
      this.typeTarget.innerHTML = c.properties.type;
      content.push(this.itemTemplateTarget.outerHTML);
    });
    return content;
  }

  updateMap(items) {
    let map = this.map;
    if (!map.loaded()) {
      map.on('load', () => {
        this.setMap(items);
      });
    } else {
      this.setMap(items);
    }
  }

  get itemPerPage() {
    return 10;
  }

  setMap(items) {
    let map = this.map;
    map.getSource('items').setData({
      "type": "FeatureCollection",
      "features": items
    });
    const boundingBox = this.getBoundingBox(items);
    if (boundingBox.xMin !== undefined && boundingBox.yMin !== undefined &&
      boundingBox.xMax !== undefined && boundingBox.yMax) {
      map.fitBounds([[boundingBox.xMin, boundingBox.yMin], [boundingBox.xMax, boundingBox.yMax]]);
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