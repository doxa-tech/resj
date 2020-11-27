/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/controllers sync recursive _controller\\.js$":
/*!**********************************************************!*\
  !*** ./app/javascript/controllers sync _controller\.js$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cards/form_controller.js": "./app/javascript/controllers/cards/form_controller.js",
	"./cards/list_controller.js": "./app/javascript/controllers/cards/list_controller.js",
	"./cards/wizard_controller.js": "./app/javascript/controllers/cards/wizard_controller.js",
	"./list_controller.js": "./app/javascript/controllers/list_controller.js",
	"./orators/list_controller.js": "./app/javascript/controllers/orators/list_controller.js",
	"./search_controller.js": "./app/javascript/controllers/search_controller.js",
	"./select/locations_controller.js": "./app/javascript/controllers/select/locations_controller.js",
	"./select/simple_controller.js": "./app/javascript/controllers/select/simple_controller.js",
	"./select/tags_controller.js": "./app/javascript/controllers/select/tags_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/controllers sync recursive _controller\\.js$";

/***/ }),

/***/ "./app/javascript/controllers/cards/form_controller.js":
/*!*************************************************************!*\
  !*** ./app/javascript/controllers/cards/form_controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardsForm; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CardsForm =
/*#__PURE__*/
function (_Controller) {
  _inherits(CardsForm, _Controller);

  function CardsForm() {
    _classCallCheck(this, CardsForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardsForm).apply(this, arguments));
  }

  _createClass(CardsForm, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.showCurrentStep(); // set the state according to the browser history

      window.onpopstate = function (e) {
        if ('step' in e.state) {
          _this.stepIndex = _this.stepToIndex(e.state.step);

          _this.showCurrentStep();
        }
      };
    }
  }, {
    key: "showCurrentStep",
    value: function showCurrentStep() {
      var _this2 = this;

      this.stepTargets.forEach(function (e, i) {
        e.classList.toggle("current", i == _this2.stepIndex);
      });
      this.showCurrentNav();
    }
  }, {
    key: "showCurrentNav",
    value: function showCurrentNav() {
      this.previousTarget.classList.toggle("current", this.stepIndex > 0);
      this.nextTarget.classList.toggle("current", this.stepIndex < CardsForm.steps.length - 1);
      this.confirmationTarget.classList.toggle("current", this.stepIndex >= CardsForm.steps.length - 1);
    }
  }, {
    key: "showErrors",
    value: function showErrors(data) {
      var _this3 = this;

      this.errorTarget.innerHTML = "";
      data.forEach(function (e) {
        _this3.errorTarget.innerHTML += "<p>" + e + "</p>";
      });
    }
  }, {
    key: "next",
    value: function next() {
      var _this4 = this;

      if (this.stepIndex >= CardsForm.steps.length - 1) throw "Can not go further";
      this.update(function () {
        _this4.stepIndex++;

        _this4.showCurrentStep();
      });
    }
  }, {
    key: "previous",
    value: function previous() {
      if (this.stepIndex <= 0) throw "Can not go back";
      this.stepIndex--;
      this.showCurrentStep();
    }
  }, {
    key: "confirmation",
    value: function confirmation() {
      this.update(function () {
        Turbolinks.visit(window.location.pathname.replace("edit", "confirmation"));
      });
    }
  }, {
    key: "stepToIndex",
    value: function stepToIndex(step) {
      var i = CardsForm.steps.indexOf(step);
      if (i === -1) throw "Invalid step provided";
      return i;
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(onSuccess) {
        var success;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.submit();

              case 2:
                success = _context.sent;
                if (success && onSuccess) onSuccess();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update(_x) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "submit",
    value: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, res, errors;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData(this.formTarget);
                formData.append("card[current_step]", this.data.get("step"));
                _context2.prev = 2;
                _context2.next = 5;
                return fetch(this.formTarget.getAttribute("action"), {
                  method: "PATCH",
                  body: formData
                });

              case 5:
                res = _context2.sent;

                if (!(res.status === 200)) {
                  _context2.next = 18;
                  break;
                }

                _context2.next = 9;
                return res.json();

              case 9:
                errors = _context2.sent;

                if (!(errors.length === 0)) {
                  _context2.next = 14;
                  break;
                }

                return _context2.abrupt("return", true);

              case 14:
                this.showErrors(errors);
                return _context2.abrupt("return", false);

              case 16:
                _context2.next = 20;
                break;

              case 18:
                console.log("Request rejected by the server with the code " + res.status);
                return _context2.abrupt("return", false);

              case 20:
                _context2.next = 25;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](2);
                console.log(_context2.t0);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 22]]);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "stepIndex",
    get: function get() {
      return this.stepToIndex(this.data.get("step"));
    },
    set: function set(i) {
      if (i >= CardsForm.steps.length) throw "Step index is out of bound";
      var step = CardsForm.steps[i];
      this.data.set("step", step);
      var url = new URL(window.location.href);
      url.searchParams.set("step", step);
      history.pushState({
        step: step
      }, document.title, url.pathname + url.search);
    }
  }]);

  return CardsForm;
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);

CardsForm.targets = ["form", "step", "previous", "next", "confirmation", "error"];
CardsForm.steps = ["general", "location", "extra"];


/***/ }),

/***/ "./app/javascript/controllers/cards/list_controller.js":
/*!*************************************************************!*\
  !*** ./app/javascript/controllers/cards/list_controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var controllers_list_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! controllers/list_controller.js */ "./app/javascript/controllers/list_controller.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_ListController) {
  _inherits(_default, _ListController);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.map = void 0;
    return _this;
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      var mapElement = document.getElementById('mapbox');

      if (mapElement) {
        mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.accessToken = 'pk.eyJ1IjoibmtjciIsImEiOiI4UnhLZEx3In0.bakfmpx2lREiNbHn0lWq9Q';
        var zoom = 0;

        if (window.innerWidth < 626) {
          zoom = 7;
        } else {
          zoom = 8;
        }

        var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Map({
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
          if (id.indexOf(prefix) !== 0) return; // extract the color from the id

          var rgb = id.replace(prefix, '').split(',').map(Number);
          var w = 25;
          var h = 41; // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
          // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info

          var pulsingDot = {
            width: w,
            height: h,
            data: new Uint8Array(w * h * 4),
            // get rendering context for the map canvas when layer is added to the map
            onAdd: function onAdd() {
              var canvas = document.createElement('canvas');
              canvas.width = this.width;
              canvas.height = this.height;
              this.context = canvas.getContext('2d'); // draw inner circle

              var context = this.context;
              var p = new Path2D('M12.629,41c5.069,0 12.371,-21.381 12.371,-28.07c0,-6.69 -5.135,-12.93 -12.371,-12.93c-7.235,0 -12.629,6.55 -12.629,12.93c0,6.38 7.561,28.07 12.629,28.07Z');
              context.fillStyle = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
              context.fill(p);
              context.beginPath();
              context.arc(12.379, 12.93, 5.323, 0, 2 * Math.PI, false);
              context.fillStyle = '#fff';
              context.fill(); // <circle cx="" cy="" r="" style="fill:#fff;"/>
              // update this image's data with data from the canvas

              this.data = context.getImageData(0, 0, this.width, this.height).data; // continuously repaint the map, resulting in the smooth animation of the dot

              map.triggerRepaint();
            },
            // called once before every frame where the icon will be used
            render: function render() {
              // return `true` to let the map know that the image was updated
              return true;
            }
          };
          map.addImage(id, pulsingDot, {
            pixelRatio: 2
          });
        });
        map.on('load', function () {
          map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.FullscreenControl());
          map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.NavigationControl());
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
                stops: [[0, '#41A337'], [5, '#2D7026'], [10, '#0B5703']]
              },
              'circle-radius': {
                property: 'point_count',
                type: 'interval',
                stops: [[0, 20], [100, 30], [750, 40]]
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
          }); // inspect a cluster on click

          map.on('click', 'clusters', function (e) {
            var features = map.queryRenderedFeatures(e.point, {
              layers: ['clusters']
            });
            var clusterId = features[0].properties.cluster_id;
            map.getSource('items').getClusterExpansionZoom(clusterId, function (err, zoom) {
              if (err) return;
              map.easeTo({
                center: features[0].geometry.coordinates,
                zoom: zoom
              });
            });
          });
          map.on('mouseenter', 'clusters', function () {
            map.getCanvas().style.cursor = 'pointer';
          });
          map.on('mouseleave', 'clusters', function () {
            map.getCanvas().style.cursor = '';
          }); // When a click event occurs on a feature in the places layer, open a popup at the
          // location of the feature, with description HTML from its properties.

          map.on('click', 'unclustered-point', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description; // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            map.flyTo({
              center: e.features[0].geometry.coordinates
            });
            new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
          }); // Change the cursor to a pointer when the mouse is over the places layer.

          map.on('mouseenter', 'unclustered-point', function () {
            map.getCanvas().style.cursor = 'pointer';
          }); // Change it back to a pointer when it leaves.

          map.on('mouseleave', 'unclustered-point', function () {
            map.getCanvas().style.cursor = '';
          });
        });
        this.map = map;
      } else {
        console.error("mapbox html element not found.");
      }
    }
  }, {
    key: "updateList",
    value: function updateList(items) {
      var _this2 = this;

      // a table of rows
      var content = [];
      items.forEach(function (c) {
        _this2.nameTarget.innerHTML = c.properties.name;
        _this2.nameTarget.href = c.properties.href;
        _this2.typeTarget.innerHTML = c.properties.type;
        content.push(_this2.itemTemplateTarget.outerHTML);
      });
      return content;
    }
  }, {
    key: "updateMap",
    value: function updateMap(items) {
      var _this3 = this;

      var map = this.map;

      if (!map.loaded()) {
        map.on('load', function () {
          _this3.setMap(items);
        });
      } else {
        this.setMap(items);
      }
    }
  }, {
    key: "setMap",
    value: function setMap(items) {
      var map = this.map;
      map.getSource('items').setData({
        "type": "FeatureCollection",
        "features": items
      });
      var boundingBox = this.getBoundingBox(items);

      if (boundingBox.xMin !== undefined && boundingBox.yMin !== undefined && boundingBox.xMax !== undefined && boundingBox.yMax) {
        map.fitBounds([[boundingBox.xMin, boundingBox.yMin], [boundingBox.xMax, boundingBox.yMax]]);
      }
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(data) {
      var bounds = {},
          coords,
          point,
          latitude,
          longitude;

      for (var i = 0; i < data.length; i++) {
        coords = data[i].geometry.coordinates;
        longitude = coords[0];
        latitude = coords[1];
        if (longitude === null || latitude === null) continue;
        bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
        bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
        bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
        bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
      }

      return bounds;
    }
  }, {
    key: "itemPerPage",
    get: function get() {
      return 10;
    }
  }]);

  return _default;
}(controllers_list_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = [].concat(_toConsumableArray(controllers_list_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].targets), ["itemTemplate", "name", "type"]);


/***/ }),

/***/ "./app/javascript/controllers/cards/wizard_controller.js":
/*!***************************************************************!*\
  !*** ./app/javascript/controllers/cards/wizard_controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WizardController; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var WizardController =
/*#__PURE__*/
function (_Controller) {
  _inherits(WizardController, _Controller);

  function WizardController() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WizardController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WizardController)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.map = void 0;
    return _this;
  }

  _createClass(WizardController, [{
    key: "initialize",
    value: function initialize() {
      var mapElement = document.getElementById('mapbox');

      if (mapElement) {
        mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.accessToken = 'pk.eyJ1IjoibmtjciIsImEiOiI4UnhLZEx3In0.bakfmpx2lREiNbHn0lWq9Q';
        var zoom = 0;

        if (window.innerWidth < 626) {
          zoom = 7;
        } else {
          zoom = 8;
        }

        var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Map({
          container: 'mapbox',
          style: 'mapbox://styles/nkcr/ck4vla6vz2ir81cnya5cl6uog',
          minZoom: 7,
          center: [7.1960, 46.6221],
          zoom: zoom,
          scrollZoom: false
        });
        var latTarget = this.latitudeTarget;
        var lngTarget = this.longitudeTarget;
        map.on('load', function () {
          map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.NavigationControl());
          map.on('click', function (e) {
            latTarget.value = e.lngLat.lat;
            lngTarget.value = e.lngLat.lng;
            var el = document.createElement('div');
            el.className = 'marker';

            if (this.marker !== undefined) {
              this.marker.remove();
            }

            this.marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Marker(el).setLngLat(e.lngLat.toArray()).addTo(map);
          });
        });
      } else {
        console.error("mapbox html element not found. ");
      }
    }
  }]);

  return WizardController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

WizardController.targets = ["latitude", "longitude"];


/***/ }),

/***/ "./app/javascript/controllers/index.js":
/*!*********************************************!*\
  !*** ./app/javascript/controllers/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js");
// Load all the controllers within this directory and all subdirectories. 
// Controller files must be named *_controller.js.


var application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start();
console.log("hi");

var context = __webpack_require__("./app/javascript/controllers sync recursive _controller\\.js$");

application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context));

/***/ }),

/***/ "./app/javascript/controllers/list_controller.js":
/*!*******************************************************!*\
  !*** ./app/javascript/controllers/list_controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListController; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ListController =
/*#__PURE__*/
function (_Controller) {
  _inherits(ListController, _Controller);

  function ListController() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ListController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListController)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.items = void 0;
    return _this;
  }

  _createClass(ListController, [{
    key: "updateItems",
    value: function updateItems(items) {
      this.items = items;
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var start = (this.currentPage - 1) * this.itemPerPage;
      var items = this.items.slice(start, start + this.itemPerPage);
      var updatedList = this.updateList(items);
      this.itemsTarget.innerHTML = "";
      var content = "";

      for (var i = 0; i < updatedList.length; i++) {
        content += updatedList[i];
      }

      this.itemsTarget.innerHTML = content;
      this.updateMap(this.items);
      this.updatePagination();
    }
  }, {
    key: "updatePagination",
    value: function updatePagination() {
      this.numbersTarget.innerHTML = "";

      for (var i = 1; i <= this.numberOfPages; i++) {
        this.numberTarget.innerHTML = i;
        this.numberTarget.classList.toggle("current", i == this.currentPage);
        this.numbersTarget.innerHTML += this.numberTemplateTarget.innerHTML;
      }

      this.previousTarget.classList.toggle("current", this.currentPage > 1);
      this.nextTarget.classList.toggle("current", this.currentPage < this.numberOfPages);
    }
  }, {
    key: "previous",
    value: function previous() {
      if (this.currentPage <= 1) throw "Current page is already the first.";
      this.currentPage--;
      this.update();
    }
  }, {
    key: "next",
    value: function next() {
      if (this.currentPage >= this.numberOfPages) throw "Current page is already the last.";
      this.currentPage++;
      this.update();
    }
  }, {
    key: "go",
    value: function go(event) {
      this.currentPage = event.target.innerHTML;
      ;
      this.update();
    }
  }, {
    key: "updateList",
    value: function updateList(items) {
      throw "#updateList must be defined in the child class.";
    }
  }, {
    key: "updateMap",
    value: function updateMap(items) {
      throw "#updateMap must be defined in the child class.";
    }
  }, {
    key: "currentPage",
    get: function get() {
      return this.data.get("page");
    },
    set: function set(i) {
      if (i <= 0) throw "Current page cannot be equal or lower than zero.";
      if (i > this.numberOfPages) throw "Current page cannot be greater than the total number";
      this.data.set("page", i);
    }
  }, {
    key: "numberOfPages",
    get: function get() {
      return Math.ceil(this.items.length / this.itemPerPage);
    }
  }, {
    key: "itemPerPage",
    get: function get() {
      throw "Getter #itemPerPage must be defined in the child class";
    }
  }]);

  return ListController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

ListController.targets = ["numberTemplate", "items", "number", "numbers", "previous", "next"];


/***/ }),

/***/ "./app/javascript/controllers/orators/list_controller.js":
/*!***************************************************************!*\
  !*** ./app/javascript/controllers/orators/list_controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var controllers_list_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! controllers/list_controller.js */ "./app/javascript/controllers/list_controller.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_ListController) {
  _inherits(_default, _ListController);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "updateList",
    value: function updateList(items) {
      var _this = this;

      var content = [];
      items.forEach(function (c) {
        _this.titleTarget.innerHTML = c.firstname + " " + c.lastname;
        _this.titleTarget.href = c.href;
        _this.themesTarget.innerHTML = c.themes;
        content.push(_this.itemTemplateTarget.outerHTML);
      });
      return content;
    }
  }, {
    key: "updateMap",
    value: function updateMap() {// TODO
    }
  }, {
    key: "itemPerPage",
    get: function get() {
      return 10;
    }
  }]);

  return _default;
}(controllers_list_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = [].concat(_toConsumableArray(controllers_list_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].targets), ["itemTemplate", "title", "themes"]);


/***/ }),

/***/ "./app/javascript/controllers/search_controller.js":
/*!*********************************************************!*\
  !*** ./app/javascript/controllers/search_controller.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchController; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SearchController =
/*#__PURE__*/
function (_Controller) {
  _inherits(SearchController, _Controller);

  function SearchController() {
    _classCallCheck(this, SearchController);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchController).apply(this, arguments));
  }

  _createClass(SearchController, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      var timeout;
      this.inputTargets.forEach(function (i) {
        i.addEventListener("input", function () {
          clearTimeout(timeout);
          timeout = setTimeout(_this.search.bind(_this), 800);
        });
      });
      console.log("hi from the search");
      this.filtersHolderTarget.style.display = "none";
      this.filtersBtnTarget.innerText = "Voir les filtres";
    }
  }, {
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var items;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request();

              case 2:
                items = _context.sent;
                this.listController.updateItems(items);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, params, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, param, items;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData(this.formTarget);
                params = "?";
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 5;

                for (_iterator = formData.entries()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  param = _step.value;
                  params += param[0] + "=" + param[1] + "&";
                }

                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 13:
                _context2.prev = 13;
                _context2.prev = 14;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 16:
                _context2.prev = 16;

                if (!_didIteratorError) {
                  _context2.next = 19;
                  break;
                }

                throw _iteratorError;

              case 19:
                return _context2.finish(16);

              case 20:
                return _context2.finish(13);

              case 21:
                _context2.next = 23;
                return this.request(params);

              case 23:
                items = _context2.sent;
                this.listController.updateItems(items);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 9, 13, 21], [14,, 16, 20]]);
      }));

      function search() {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(params) {
        var res, items;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = params || "";
                _context3.prev = 1;
                _context3.next = 4;
                return fetch(this.formTarget.getAttribute("action") + params);

              case 4:
                res = _context3.sent;
                _context3.next = 7;
                return res.json();

              case 7:
                items = _context3.sent;
                return _context3.abrupt("return", items);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 11]]);
      }));

      function request(_x) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "toggleFilters",
    value: function toggleFilters() {
      var holder = this.filtersHolderTarget;
      var btn = this.filtersBtnTarget;

      if (holder.style.display === "none") {
        holder.style.display = "block";
        btn.innerText = "Cacher les filtre";
      } else {
        holder.style.display = "none";
        btn.innerText = "Voir les filtres";
      }
    }
  }, {
    key: "listController",
    get: function get() {
      return this.application.getControllerForElementAndIdentifier(this.listTarget, this.data.get("list-controller"));
    }
  }]);

  return SearchController;
}(stimulus__WEBPACK_IMPORTED_MODULE_1__["Controller"]);

SearchController.targets = ["form", "input", "list", "filtersBtn", "filtersHolder"];


/***/ }),

/***/ "./app/javascript/controllers/select/locations_controller.js":
/*!*******************************************************************!*\
  !*** ./app/javascript/controllers/select/locations_controller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.min.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Controller) {
  _inherits(_default, _Controller);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.cache = {};
    _this.choice = void 0;
    return _this;
  }

  _createClass(_default, [{
    key: "request",
    value: function request() {
      var _this2 = this;

      var query = this.choice.input.value;

      if (query in this.cache) {
        this.update(this.cache[query]);
      } else {
        fetch("/api/locations?query=" + query).then(function (res) {
          res.json().then(function (data) {
            _this2.cache[query] = data;

            _this2.update(data);
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: "update",
    value: function update(data) {
      this.choice.setChoices(data, 'id', 'name', true);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this3 = this;

      this.choice = new choices_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.element, {
        placeholderValue: "Taper une ville",
        noChoicesText: "Plus d'option disponible",
        itemSelectText: "Cliquez pour séléctionner",
        noResultsText: "Pas de résultats",
        searchFloor: 2,
        shouldSort: false,
        searchChoices: false,
        classNames: {
          containerOuter: "choices " + this.element.className
        }
      });
      this.element.addEventListener('search', function (event) {
        clearTimeout(timeout);
        var timeout = setTimeout(_this3.request.bind(_this3), 500);
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);



/***/ }),

/***/ "./app/javascript/controllers/select/simple_controller.js":
/*!****************************************************************!*\
  !*** ./app/javascript/controllers/select/simple_controller.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.min.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Controller) {
  _inherits(_default, _Controller);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      new choices_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.element, {
        searchEnabled: false,
        placeholderValue: "Sélectionner",
        noChoicesText: "Plus d'option disponible",
        itemSelectText: "Cliquez pour séléectionner",
        classNames: {
          containerOuter: "choices " + this.element.className
        }
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);



/***/ }),

/***/ "./app/javascript/controllers/select/tags_controller.js":
/*!**************************************************************!*\
  !*** ./app/javascript/controllers/select/tags_controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.min.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Controller) {
  _inherits(_default, _Controller);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      new choices_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.element, {
        maxItemCount: 5,
        customAddItemText: "Tag de 3 lettres minimum",
        addItemText: function addItemText(value) {
          return "Appuyer sur Enter pour ajouter <b>\"".concat(value, "\"</b>");
        },
        maxItemText: function maxItemText(maxItemCount) {
          return "Seulement ".concat(maxItemCount, " tags autoris\xE9s");
        },
        addItemFilterFn: function addItemFilterFn(value) {
          return value.length > 2;
        },
        classNames: {
          containerOuter: "choices " + this.element.className
        }
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);



/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! controllers */ "./app/javascript/controllers/index.js");
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
__webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js").start();

__webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js").start();

__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js").start();



/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type,
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/index.js ***!
  \***************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/application */ "./node_modules/@stimulus/core/dist/src/application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _src_application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/context */ "./node_modules/@stimulus/core/dist/src/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _src_context__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony import */ var _src_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/controller */ "./node_modules/@stimulus/core/dist/src/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _src_controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]; });

/* harmony import */ var _src_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/schema */ "./node_modules/@stimulus/core/dist/src/schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _src_schema__WEBPACK_IMPORTED_MODULE_3__["defaultSchema"]; });






/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/action.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action.js ***!
  \********************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventNameForElement", function() { return getDefaultEventNameForElement; });
/* harmony import */ var _action_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_descriptor */ "./node_modules/@stimulus/core/dist/src/action_descriptor.js");


var Action =
/** @class */
function () {
  function Action(element, index, descriptor) {
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  Action.forToken = function (token) {
    return new this(token.element, token.index, Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["parseDescriptorString"])(token.content));
  };

  Action.prototype.toString = function () {
    var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
    return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
  };

  Object.defineProperty(Action.prototype, "eventTargetName", {
    get: function get() {
      return Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["stringifyEventTarget"])(this.eventTarget);
    },
    enumerable: true,
    configurable: true
  });
  return Action;
}();


var defaultEventNames = {
  "a": function a(e) {
    return "click";
  },
  "button": function button(e) {
    return "click";
  },
  "form": function form(e) {
    return "submit";
  },
  "input": function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "change";
  },
  "select": function select(e) {
    return "change";
  },
  "textarea": function textarea(e) {
    return "change";
  }
};
function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/action_descriptor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action_descriptor.js ***!
  \*******************************************************************/
/*! exports provided: parseDescriptorString, stringifyEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDescriptorString", function() { return parseDescriptorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEventTarget", function() { return stringifyEventTarget; });
// capture nos.:            12   23 4               43   1 5   56 7  76
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;
function parseDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/application.js":
/*!*************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/application.js ***!
  \*************************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ "./node_modules/@stimulus/core/dist/src/dispatcher.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./node_modules/@stimulus/core/dist/src/router.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/src/schema.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [0, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};





var Application =
/** @class */
function () {
  function Application(element, schema) {
    if (element === void 0) {
      element = document.documentElement;
    }

    if (schema === void 0) {
      schema = _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"];
    }

    this.element = element;
    this.schema = schema;
    this.dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"](this);
    this.router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"](this);
  }

  Application.start = function (element, schema) {
    var application = new Application(element, schema);
    application.start();
    return application;
  };

  Application.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , domReady()];

          case 1:
            _a.sent();

            this.router.start();
            this.dispatcher.start();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Application.prototype.stop = function () {
    this.router.stop();
    this.dispatcher.stop();
  };

  Application.prototype.register = function (identifier, controllerConstructor) {
    this.load({
      identifier: identifier,
      controllerConstructor: controllerConstructor
    });
  };

  Application.prototype.load = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var definitions = Array.isArray(head) ? head : [head].concat(rest);
    definitions.forEach(function (definition) {
      return _this.router.loadDefinition(definition);
    });
  };

  Application.prototype.unload = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var identifiers = Array.isArray(head) ? head : [head].concat(rest);
    identifiers.forEach(function (identifier) {
      return _this.router.unloadIdentifier(identifier);
    });
  };

  Object.defineProperty(Application.prototype, "controllers", {
    // Controllers
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    },
    enumerable: true,
    configurable: true
  });

  Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {
    var context = this.router.getContextForElementAndIdentifier(element, identifier);
    return context ? context.controller : null;
  }; // Error handling


  Application.prototype.handleError = function (error, message, detail) {
    console.error("%s\n\n%o\n\n%o", message, error, detail);
  };

  return Application;
}();



function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/binding.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding.js ***!
  \*********************************************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
var Binding =
/** @class */
function () {
  function Binding(context, action) {
    this.context = context;
    this.action = action;
  }

  Object.defineProperty(Binding.prototype, "index", {
    get: function get() {
      return this.action.index;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "eventTarget", {
    get: function get() {
      return this.action.eventTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: true,
    configurable: true
  });

  Binding.prototype.handleEvent = function (event) {
    if (this.willBeInvokedByEvent(event)) {
      this.invokeWithEvent(event);
    }
  };

  Object.defineProperty(Binding.prototype, "eventName", {
    get: function get() {
      return this.action.eventName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "method", {
    get: function get() {
      var method = this.controller[this.methodName];

      if (typeof method == "function") {
        return method;
      }

      throw new Error("Action \"" + this.action + "\" references undefined method \"" + this.methodName + "\"");
    },
    enumerable: true,
    configurable: true
  });

  Binding.prototype.invokeWithEvent = function (event) {
    try {
      this.method.call(this.controller, event);
    } catch (error) {
      var _a = this,
          identifier = _a.identifier,
          controller = _a.controller,
          element = _a.element,
          index = _a.index;

      var detail = {
        identifier: identifier,
        controller: controller,
        element: element,
        index: index,
        event: event
      };
      this.context.handleError(error, "invoking action \"" + this.action + "\"", detail);
    }
  };

  Binding.prototype.willBeInvokedByEvent = function (event) {
    var eventTarget = event.target;

    if (this.element === eventTarget) {
      return true;
    } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
      return this.scope.containsElement(eventTarget);
    } else {
      return true;
    }
  };

  Object.defineProperty(Binding.prototype, "controller", {
    get: function get() {
      return this.context.controller;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "methodName", {
    get: function get() {
      return this.action.methodName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: true,
    configurable: true
  });
  return Binding;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/binding_observer.js":
/*!******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding_observer.js ***!
  \******************************************************************/
/*! exports provided: BindingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingObserver", function() { return BindingObserver; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./node_modules/@stimulus/core/dist/src/action.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding */ "./node_modules/@stimulus/core/dist/src/binding.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");




var BindingObserver =
/** @class */
function () {
  function BindingObserver(context, delegate) {
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  BindingObserver.prototype.start = function () {
    if (!this.valueListObserver) {
      this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__["ValueListObserver"](this.element, this.actionAttribute, this);
      this.valueListObserver.start();
    }
  };

  BindingObserver.prototype.stop = function () {
    if (this.valueListObserver) {
      this.valueListObserver.stop();
      delete this.valueListObserver;
      this.disconnectAllActions();
    }
  };

  Object.defineProperty(BindingObserver.prototype, "element", {
    get: function get() {
      return this.context.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
    get: function get() {
      return this.schema.actionAttribute;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "schema", {
    get: function get() {
      return this.context.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "bindings", {
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    },
    enumerable: true,
    configurable: true
  });

  BindingObserver.prototype.connectAction = function (action) {
    var binding = new _binding__WEBPACK_IMPORTED_MODULE_1__["Binding"](this.context, action);
    this.bindingsByAction.set(action, binding);
    this.delegate.bindingConnected(binding);
  };

  BindingObserver.prototype.disconnectAction = function (action) {
    var binding = this.bindingsByAction.get(action);

    if (binding) {
      this.bindingsByAction.delete(action);
      this.delegate.bindingDisconnected(binding);
    }
  };

  BindingObserver.prototype.disconnectAllActions = function () {
    var _this = this;

    this.bindings.forEach(function (binding) {
      return _this.delegate.bindingDisconnected(binding);
    });
    this.bindingsByAction.clear();
  }; // Value observer delegate


  BindingObserver.prototype.parseValueForToken = function (token) {
    var action = _action__WEBPACK_IMPORTED_MODULE_0__["Action"].forToken(token);

    if (action.identifier == this.identifier) {
      return action;
    }
  };

  BindingObserver.prototype.elementMatchedValue = function (element, action) {
    this.connectAction(action);
  };

  BindingObserver.prototype.elementUnmatchedValue = function (element, action) {
    this.disconnectAction(action);
  };

  return BindingObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/context.js ***!
  \*********************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _binding_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_observer */ "./node_modules/@stimulus/core/dist/src/binding_observer.js");


var Context =
/** @class */
function () {
  function Context(module, scope) {
    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new _binding_observer__WEBPACK_IMPORTED_MODULE_0__["BindingObserver"](this, this.dispatcher);

    try {
      this.controller.initialize();
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  Context.prototype.connect = function () {
    this.bindingObserver.start();

    try {
      this.controller.connect();
    } catch (error) {
      this.handleError(error, "connecting controller");
    }
  };

  Context.prototype.disconnect = function () {
    try {
      this.controller.disconnect();
    } catch (error) {
      this.handleError(error, "disconnecting controller");
    }

    this.bindingObserver.stop();
  };

  Object.defineProperty(Context.prototype, "application", {
    get: function get() {
      return this.module.application;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "identifier", {
    get: function get() {
      return this.module.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "dispatcher", {
    get: function get() {
      return this.application.dispatcher;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "parentElement", {
    get: function get() {
      return this.element.parentElement;
    },
    enumerable: true,
    configurable: true
  }); // Error handling

  Context.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    var _a = this,
        identifier = _a.identifier,
        controller = _a.controller,
        element = _a.element;

    detail = Object.assign({
      identifier: identifier,
      controller: controller,
      element: element
    }, detail);
    this.application.handleError(error, "Error " + message, detail);
  };

  return Context;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/controller.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/controller.js ***!
  \************************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _target_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target_properties */ "./node_modules/@stimulus/core/dist/src/target_properties.js");


var Controller =
/** @class */
function () {
  function Controller(context) {
    this.context = context;
  }

  Controller.bless = function () {
    Object(_target_properties__WEBPACK_IMPORTED_MODULE_0__["defineTargetProperties"])(this);
  };

  Object.defineProperty(Controller.prototype, "application", {
    get: function get() {
      return this.context.application;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "targets", {
    get: function get() {
      return this.scope.targets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "data", {
    get: function get() {
      return this.scope.data;
    },
    enumerable: true,
    configurable: true
  });

  Controller.prototype.initialize = function () {// Override in your subclass to set up initial controller state
  };

  Controller.prototype.connect = function () {// Override in your subclass to respond when the controller is connected to the DOM
  };

  Controller.prototype.disconnect = function () {// Override in your subclass to respond when the controller is disconnected from the DOM
  };

  Controller.targets = [];
  return Controller;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/data_map.js":
/*!**********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/data_map.js ***!
  \**********************************************************/
/*! exports provided: DataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMap", function() { return DataMap; });
var DataMap =
/** @class */
function () {
  function DataMap(scope) {
    this.scope = scope;
  }

  Object.defineProperty(DataMap.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DataMap.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });

  DataMap.prototype.get = function (key) {
    key = this.getFormattedKey(key);
    return this.element.getAttribute(key);
  };

  DataMap.prototype.set = function (key, value) {
    key = this.getFormattedKey(key);
    this.element.setAttribute(key, value);
    return this.get(key);
  };

  DataMap.prototype.has = function (key) {
    key = this.getFormattedKey(key);
    return this.element.hasAttribute(key);
  };

  DataMap.prototype.delete = function (key) {
    if (this.has(key)) {
      key = this.getFormattedKey(key);
      this.element.removeAttribute(key);
      return true;
    } else {
      return false;
    }
  };

  DataMap.prototype.getFormattedKey = function (key) {
    return "data-" + this.identifier + "-" + dasherize(key);
  };

  return DataMap;
}();



function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, char) {
    return "-" + char.toLowerCase();
  });
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/definition.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/definition.js ***!
  \************************************************************/
/*! exports provided: blessDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessDefinition", function() { return blessDefinition; });
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/** @hidden */


function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
  };
}

function blessControllerConstructor(controllerConstructor) {
  var constructor = extend(controllerConstructor);
  constructor.bless();
  return constructor;
}

var extend = function () {
  function extendWithReflect(constructor) {
    function Controller() {
      var _newTarget = this && this instanceof Controller ? this.constructor : void 0;

      return Reflect.construct(constructor, arguments, _newTarget);
    }

    Controller.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: Controller
      }
    });
    Reflect.setPrototypeOf(Controller, constructor);
    return Controller;
  }

  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };

    var b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return (
        /** @class */
        function (_super) {
          __extends(Controller, _super);

          function Controller() {
            return _super !== null && _super.apply(this, arguments) || this;
          }

          return Controller;
        }(constructor)
      );
    };
  }
}();

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/dispatcher.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/dispatcher.js ***!
  \************************************************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listener */ "./node_modules/@stimulus/core/dist/src/event_listener.js");


var Dispatcher =
/** @class */
function () {
  function Dispatcher(application) {
    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  Dispatcher.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.connect();
      });
    }
  };

  Dispatcher.prototype.stop = function () {
    if (this.started) {
      this.started = false;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.disconnect();
      });
    }
  };

  Object.defineProperty(Dispatcher.prototype, "eventListeners", {
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    },
    enumerable: true,
    configurable: true
  }); // Binding observer delegate

  /** @hidden */

  Dispatcher.prototype.bindingConnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingConnected(binding);
  };
  /** @hidden */


  Dispatcher.prototype.bindingDisconnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
  }; // Error handling


  Dispatcher.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    this.application.handleError(error, "Error " + message, detail);
  };

  Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
    var eventTarget = binding.eventTarget,
        eventName = binding.eventName;
    return this.fetchEventListener(eventTarget, eventName);
  };

  Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName) {
    var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
    var eventListener = eventListenerMap.get(eventName);

    if (!eventListener) {
      eventListener = this.createEventListener(eventTarget, eventName);
      eventListenerMap.set(eventName, eventListener);
    }

    return eventListener;
  };

  Dispatcher.prototype.createEventListener = function (eventTarget, eventName) {
    var eventListener = new _event_listener__WEBPACK_IMPORTED_MODULE_0__["EventListener"](eventTarget, eventName);

    if (this.started) {
      eventListener.connect();
    }

    return eventListener;
  };

  Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
    var eventListenerMap = this.eventListenerMaps.get(eventTarget);

    if (!eventListenerMap) {
      eventListenerMap = new Map();
      this.eventListenerMaps.set(eventTarget, eventListenerMap);
    }

    return eventListenerMap;
  };

  return Dispatcher;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/event_listener.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/event_listener.js ***!
  \****************************************************************/
/*! exports provided: EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
var EventListener =
/** @class */
function () {
  function EventListener(eventTarget, eventName) {
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.unorderedBindings = new Set();
  }

  EventListener.prototype.connect = function () {
    this.eventTarget.addEventListener(this.eventName, this, false);
  };

  EventListener.prototype.disconnect = function () {
    this.eventTarget.removeEventListener(this.eventName, this, false);
  }; // Binding observer delegate

  /** @hidden */


  EventListener.prototype.bindingConnected = function (binding) {
    this.unorderedBindings.add(binding);
  };
  /** @hidden */


  EventListener.prototype.bindingDisconnected = function (binding) {
    this.unorderedBindings.delete(binding);
  };

  EventListener.prototype.handleEvent = function (event) {
    var extendedEvent = extendEvent(event);

    for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
      var binding = _a[_i];

      if (extendedEvent.immediatePropagationStopped) {
        break;
      } else {
        binding.handleEvent(extendedEvent);
      }
    }
  };

  Object.defineProperty(EventListener.prototype, "bindings", {
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
            rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    },
    enumerable: true,
    configurable: true
  });
  return EventListener;
}();



function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var stopImmediatePropagation_1 = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;
        stopImmediatePropagation_1.call(this);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/module.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/module.js ***!
  \********************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/src/context.js");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "./node_modules/@stimulus/core/dist/src/definition.js");



var Module =
/** @class */
function () {
  function Module(application, definition) {
    this.application = application;
    this.definition = Object(_definition__WEBPACK_IMPORTED_MODULE_1__["blessDefinition"])(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  Object.defineProperty(Module.prototype, "identifier", {
    get: function get() {
      return this.definition.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "controllerConstructor", {
    get: function get() {
      return this.definition.controllerConstructor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "contexts", {
    get: function get() {
      return Array.from(this.connectedContexts);
    },
    enumerable: true,
    configurable: true
  });

  Module.prototype.connectContextForScope = function (scope) {
    var context = this.fetchContextForScope(scope);
    this.connectedContexts.add(context);
    context.connect();
  };

  Module.prototype.disconnectContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (context) {
      this.connectedContexts.delete(context);
      context.disconnect();
    }
  };

  Module.prototype.fetchContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (!context) {
      context = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"](this, scope);
      this.contextsByScope.set(scope, context);
    }

    return context;
  };

  return Module;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/router.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/router.js ***!
  \********************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./node_modules/@stimulus/core/dist/src/module.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");
/* harmony import */ var _scope_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope_observer */ "./node_modules/@stimulus/core/dist/src/scope_observer.js");




var Router =
/** @class */
function () {
  function Router(application) {
    this.application = application;
    this.scopeObserver = new _scope_observer__WEBPACK_IMPORTED_MODULE_2__["ScopeObserver"](this.element, this.schema, this);
    this.scopesByIdentifier = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
    this.modulesByIdentifier = new Map();
  }

  Object.defineProperty(Router.prototype, "element", {
    get: function get() {
      return this.application.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "modules", {
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "contexts", {
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    },
    enumerable: true,
    configurable: true
  });

  Router.prototype.start = function () {
    this.scopeObserver.start();
  };

  Router.prototype.stop = function () {
    this.scopeObserver.stop();
  };

  Router.prototype.loadDefinition = function (definition) {
    this.unloadIdentifier(definition.identifier);
    var module = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"](this.application, definition);
    this.connectModule(module);
  };

  Router.prototype.unloadIdentifier = function (identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      this.disconnectModule(module);
    }
  };

  Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      return module.contexts.find(function (context) {
        return context.element == element;
      });
    }
  }; // Error handler delegate

  /** @hidden */


  Router.prototype.handleError = function (error, message, detail) {
    this.application.handleError(error, message, detail);
  }; // Scope observer delegate

  /** @hidden */


  Router.prototype.scopeConnected = function (scope) {
    this.scopesByIdentifier.add(scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.connectContextForScope(scope);
    }
  };
  /** @hidden */


  Router.prototype.scopeDisconnected = function (scope) {
    this.scopesByIdentifier.delete(scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.disconnectContextForScope(scope);
    }
  }; // Modules


  Router.prototype.connectModule = function (module) {
    this.modulesByIdentifier.set(module.identifier, module);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.connectContextForScope(scope);
    });
  };

  Router.prototype.disconnectModule = function (module) {
    this.modulesByIdentifier.delete(module.identifier);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.disconnectContextForScope(scope);
    });
  };

  return Router;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/schema.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/schema.js ***!
  \********************************************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target"
};

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/scope.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope.js ***!
  \*******************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_map */ "./node_modules/@stimulus/core/dist/src/data_map.js");
/* harmony import */ var _target_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target_set */ "./node_modules/@stimulus/core/dist/src/target_set.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/src/selectors.js");




var Scope =
/** @class */
function () {
  function Scope(schema, identifier, element) {
    this.schema = schema;
    this.identifier = identifier;
    this.element = element;
    this.targets = new _target_set__WEBPACK_IMPORTED_MODULE_1__["TargetSet"](this);
    this.data = new _data_map__WEBPACK_IMPORTED_MODULE_0__["DataMap"](this);
  }

  Scope.prototype.findElement = function (selector) {
    return this.findAllElements(selector)[0];
  };

  Scope.prototype.findAllElements = function (selector) {
    var head = this.element.matches(selector) ? [this.element] : [];
    var tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));
    return head.concat(tail);
  };

  Scope.prototype.filterElements = function (elements) {
    var _this = this;

    return elements.filter(function (element) {
      return _this.containsElement(element);
    });
  };

  Scope.prototype.containsElement = function (element) {
    return element.closest(this.controllerSelector) === this.element;
  };

  Object.defineProperty(Scope.prototype, "controllerSelector", {
    get: function get() {
      return Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["attributeValueContainsToken"])(this.schema.controllerAttribute, this.identifier);
    },
    enumerable: true,
    configurable: true
  });
  return Scope;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/scope_observer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope_observer.js ***!
  \****************************************************************/
/*! exports provided: ScopeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeObserver", function() { return ScopeObserver; });
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./node_modules/@stimulus/core/dist/src/scope.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");



var ScopeObserver =
/** @class */
function () {
  function ScopeObserver(element, schema, delegate) {
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__["ValueListObserver"](this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  ScopeObserver.prototype.start = function () {
    this.valueListObserver.start();
  };

  ScopeObserver.prototype.stop = function () {
    this.valueListObserver.stop();
  };

  Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: true,
    configurable: true
  }); // Value observer delegate

  /** @hidden */

  ScopeObserver.prototype.parseValueForToken = function (token) {
    var element = token.element,
        identifier = token.content;
    var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
    var scope = scopesByIdentifier.get(identifier);

    if (!scope) {
      scope = new _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"](this.schema, identifier, element);
      scopesByIdentifier.set(identifier, scope);
    }

    return scope;
  };
  /** @hidden */


  ScopeObserver.prototype.elementMatchedValue = function (element, value) {
    var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
    this.scopeReferenceCounts.set(value, referenceCount);

    if (referenceCount == 1) {
      this.delegate.scopeConnected(value);
    }
  };
  /** @hidden */


  ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
    var referenceCount = this.scopeReferenceCounts.get(value);

    if (referenceCount) {
      this.scopeReferenceCounts.set(value, referenceCount - 1);

      if (referenceCount == 1) {
        this.delegate.scopeDisconnected(value);
      }
    }
  };

  ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
    var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

    if (!scopesByIdentifier) {
      scopesByIdentifier = new Map();
      this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
    }

    return scopesByIdentifier;
  };

  return ScopeObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/selectors.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/selectors.js ***!
  \***********************************************************/
/*! exports provided: attributeValueContainsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueContainsToken", function() { return attributeValueContainsToken; });
/** @hidden */
function attributeValueContainsToken(attributeName, token) {
  return "[" + attributeName + "~=\"" + token + "\"]";
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/target_properties.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_properties.js ***!
  \*******************************************************************/
/*! exports provided: defineTargetProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineTargetProperties", function() { return defineTargetProperties; });
/** @hidden */
function defineTargetProperties(constructor) {
  var prototype = constructor.prototype;
  var targetNames = getTargetNamesForConstructor(constructor);
  targetNames.forEach(function (name) {
    var _a;

    return defineLinkedProperties(prototype, (_a = {}, _a[name + "Target"] = {
      get: function get() {
        var target = this.targets.find(name);

        if (target) {
          return target;
        } else {
          throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
        }
      }
    }, _a[name + "Targets"] = {
      get: function get() {
        return this.targets.findAll(name);
      }
    }, _a["has" + capitalize(name) + "Target"] = {
      get: function get() {
        return this.targets.has(name);
      }
    }, _a));
  });
}

function getTargetNamesForConstructor(constructor) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (targetNames, constructor) {
    getOwnTargetNamesForConstructor(constructor).forEach(function (name) {
      return targetNames.add(name);
    });
    return targetNames;
  }, new Set()));
}

function getAncestorsForConstructor(constructor) {
  var ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors;
}

function getOwnTargetNamesForConstructor(constructor) {
  var definition = constructor["targets"];
  return Array.isArray(definition) ? definition : [];
}

function defineLinkedProperties(object, properties) {
  Object.keys(properties).forEach(function (name) {
    if (!(name in object)) {
      var descriptor = properties[name];
      Object.defineProperty(object, name, descriptor);
    }
  });
}

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/target_set.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_set.js ***!
  \************************************************************/
/*! exports provided: TargetSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSet", function() { return TargetSet; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/src/selectors.js");


var TargetSet =
/** @class */
function () {
  function TargetSet(scope) {
    this.scope = scope;
  }

  Object.defineProperty(TargetSet.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "schema", {
    get: function get() {
      return this.scope.schema;
    },
    enumerable: true,
    configurable: true
  });

  TargetSet.prototype.has = function (targetName) {
    return this.find(targetName) != null;
  };

  TargetSet.prototype.find = function () {
    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    var selector = this.getSelectorForTargetNames(targetNames);
    return this.scope.findElement(selector);
  };

  TargetSet.prototype.findAll = function () {
    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    var selector = this.getSelectorForTargetNames(targetNames);
    return this.scope.findAllElements(selector);
  };

  TargetSet.prototype.getSelectorForTargetNames = function (targetNames) {
    var _this = this;

    return targetNames.map(function (targetName) {
      return _this.getSelectorForTargetName(targetName);
    }).join(", ");
  };

  TargetSet.prototype.getSelectorForTargetName = function (targetName) {
    var targetDescriptor = this.identifier + "." + targetName;
    return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(this.schema.targetAttribute, targetDescriptor);
  };

  return TargetSet;
}();



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/index.js ***!
  \*******************************************************/
/*! exports provided: Multimap, IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/multimap */ "./node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _src_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]; });

/* harmony import */ var _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/indexed_multimap */ "./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__["IndexedMultimap"]; });




/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js ***!
  \**********************************************************************/
/*! exports provided: IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/src/set_operations.js");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var IndexedMultimap =
/** @class */
function (_super) {
  __extends(IndexedMultimap, _super);

  function IndexedMultimap() {
    var _this = _super.call(this) || this;

    _this.keysByValue = new Map();
    return _this;
  }

  Object.defineProperty(IndexedMultimap.prototype, "values", {
    get: function get() {
      return Array.from(this.keysByValue.keys());
    },
    enumerable: true,
    configurable: true
  });

  IndexedMultimap.prototype.add = function (key, value) {
    _super.prototype.add.call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["add"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype.delete = function (key, value) {
    _super.prototype.delete.call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["del"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype.hasValue = function (value) {
    return this.keysByValue.has(value);
  };

  IndexedMultimap.prototype.getKeysForValue = function (value) {
    var set = this.keysByValue.get(value);
    return set ? Array.from(set) : [];
  };

  return IndexedMultimap;
}(_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]);



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/src/multimap.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/multimap.js ***!
  \**************************************************************/
/*! exports provided: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/src/set_operations.js");


var Multimap =
/** @class */
function () {
  function Multimap() {
    this.valuesByKey = new Map();
  }

  Object.defineProperty(Multimap.prototype, "values", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Multimap.prototype, "size", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    },
    enumerable: true,
    configurable: true
  });

  Multimap.prototype.add = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["add"])(this.valuesByKey, key, value);
  };

  Multimap.prototype.delete = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["del"])(this.valuesByKey, key, value);
  };

  Multimap.prototype.has = function (key, value) {
    var values = this.valuesByKey.get(key);
    return values != null && values.has(value);
  };

  Multimap.prototype.hasKey = function (key) {
    return this.valuesByKey.has(key);
  };

  Multimap.prototype.hasValue = function (value) {
    var sets = Array.from(this.valuesByKey.values());
    return sets.some(function (set) {
      return set.has(value);
    });
  };

  Multimap.prototype.getValuesForKey = function (key) {
    var values = this.valuesByKey.get(key);
    return values ? Array.from(values) : [];
  };

  Multimap.prototype.getKeysForValue = function (value) {
    return Array.from(this.valuesByKey).filter(function (_a) {
      var key = _a[0],
          values = _a[1];
      return values.has(value);
    }).map(function (_a) {
      var key = _a[0],
          values = _a[1];
      return key;
    });
  };

  return Multimap;
}();



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/src/set_operations.js":
/*!********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/set_operations.js ***!
  \********************************************************************/
/*! exports provided: add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function add(map, key, value) {
  fetch(map, key).add(value);
}
function del(map, key, value) {
  fetch(map, key).delete(value);
  prune(map, key);
}
function fetch(map, key) {
  var values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}
function prune(map, key) {
  var values = map.get(key);

  if (values != null && values.size == 0) {
    map.delete(key);
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \*****************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, TokenListObserver, ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });

/* harmony import */ var _src_element_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/element_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _src_element_observer__WEBPACK_IMPORTED_MODULE_1__["ElementObserver"]; });

/* harmony import */ var _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__["TokenListObserver"]; });

/* harmony import */ var _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/value_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__["ValueListObserver"]; });






/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js ***!
  \**********************************************************************************/
/*! exports provided: AttributeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");


var AttributeObserver =
/** @class */
function () {
  function AttributeObserver(element, attributeName, delegate) {
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new _element_observer__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"](element, this);
  }

  Object.defineProperty(AttributeObserver.prototype, "element", {
    get: function get() {
      return this.elementObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttributeObserver.prototype, "selector", {
    get: function get() {
      return "[" + this.attributeName + "]";
    },
    enumerable: true,
    configurable: true
  });

  AttributeObserver.prototype.start = function () {
    this.elementObserver.start();
  };

  AttributeObserver.prototype.stop = function () {
    this.elementObserver.stop();
  };

  AttributeObserver.prototype.refresh = function () {
    this.elementObserver.refresh();
  };

  Object.defineProperty(AttributeObserver.prototype, "started", {
    get: function get() {
      return this.elementObserver.started;
    },
    enumerable: true,
    configurable: true
  }); // Element observer delegate

  AttributeObserver.prototype.matchElement = function (element) {
    return element.hasAttribute(this.attributeName);
  };

  AttributeObserver.prototype.matchElementsInTree = function (tree) {
    var match = this.matchElement(tree) ? [tree] : [];
    var matches = Array.from(tree.querySelectorAll(this.selector));
    return match.concat(matches);
  };

  AttributeObserver.prototype.elementMatched = function (element) {
    if (this.delegate.elementMatchedAttribute) {
      this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementUnmatched = function (element) {
    if (this.delegate.elementUnmatchedAttribute) {
      this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {
    if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
      this.delegate.elementAttributeValueChanged(element, attributeName);
    }
  };

  return AttributeObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js ***!
  \********************************************************************************/
/*! exports provided: ElementObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
var ElementObserver =
/** @class */
function () {
  function ElementObserver(element, delegate) {
    var _this = this;

    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  ElementObserver.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true,
        childList: true,
        subtree: true
      });
      this.refresh();
    }
  };

  ElementObserver.prototype.stop = function () {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  };

  ElementObserver.prototype.refresh = function () {
    if (this.started) {
      var matches = new Set(this.matchElementsInTree());

      for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
        var element = _a[_i];

        if (!matches.has(element)) {
          this.removeElement(element);
        }
      }

      for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
        var element = _c[_b];
        this.addElement(element);
      }
    }
  }; // Mutation record processing


  ElementObserver.prototype.processMutations = function (mutations) {
    if (this.started) {
      for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
        var mutation = mutations_1[_i];
        this.processMutation(mutation);
      }
    }
  };

  ElementObserver.prototype.processMutation = function (mutation) {
    if (mutation.type == "attributes") {
      this.processAttributeChange(mutation.target, mutation.attributeName);
    } else if (mutation.type == "childList") {
      this.processRemovedNodes(mutation.removedNodes);
      this.processAddedNodes(mutation.addedNodes);
    }
  };

  ElementObserver.prototype.processAttributeChange = function (node, attributeName) {
    var element = node;

    if (this.elements.has(element)) {
      if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
        this.delegate.elementAttributeChanged(element, attributeName);
      } else {
        this.removeElement(element);
      }
    } else if (this.matchElement(element)) {
      this.addElement(element);
    }
  };

  ElementObserver.prototype.processRemovedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element) {
        this.processTree(element, this.removeElement);
      }
    }
  };

  ElementObserver.prototype.processAddedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element && this.elementIsActive(element)) {
        this.processTree(element, this.addElement);
      }
    }
  }; // Element matching


  ElementObserver.prototype.matchElement = function (element) {
    return this.delegate.matchElement(element);
  };

  ElementObserver.prototype.matchElementsInTree = function (tree) {
    if (tree === void 0) {
      tree = this.element;
    }

    return this.delegate.matchElementsInTree(tree);
  };

  ElementObserver.prototype.processTree = function (tree, processor) {
    for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
      var element = _a[_i];
      processor.call(this, element);
    }
  };

  ElementObserver.prototype.elementFromNode = function (node) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      return node;
    }
  };

  ElementObserver.prototype.elementIsActive = function (element) {
    if (element.isConnected != this.element.isConnected) {
      return false;
    } else {
      return this.element.contains(element);
    }
  }; // Element tracking


  ElementObserver.prototype.addElement = function (element) {
    if (!this.elements.has(element)) {
      if (this.elementIsActive(element)) {
        this.elements.add(element);

        if (this.delegate.elementMatched) {
          this.delegate.elementMatched(element);
        }
      }
    }
  };

  ElementObserver.prototype.removeElement = function (element) {
    if (this.elements.has(element)) {
      this.elements.delete(element);

      if (this.delegate.elementUnmatched) {
        this.delegate.elementUnmatched(element);
      }
    }
  };

  return ElementObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: TokenListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");



var TokenListObserver =
/** @class */
function () {
  function TokenListObserver(element, attributeName, delegate) {
    this.attributeObserver = new _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
  }

  Object.defineProperty(TokenListObserver.prototype, "started", {
    get: function get() {
      return this.attributeObserver.started;
    },
    enumerable: true,
    configurable: true
  });

  TokenListObserver.prototype.start = function () {
    this.attributeObserver.start();
  };

  TokenListObserver.prototype.stop = function () {
    this.attributeObserver.stop();
  };

  TokenListObserver.prototype.refresh = function () {
    this.attributeObserver.refresh();
  };

  Object.defineProperty(TokenListObserver.prototype, "element", {
    get: function get() {
      return this.attributeObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TokenListObserver.prototype, "attributeName", {
    get: function get() {
      return this.attributeObserver.attributeName;
    },
    enumerable: true,
    configurable: true
  }); // Attribute observer delegate

  TokenListObserver.prototype.elementMatchedAttribute = function (element) {
    this.tokensMatched(this.readTokensForElement(element));
  };

  TokenListObserver.prototype.elementAttributeValueChanged = function (element) {
    var _a = this.refreshTokensForElement(element),
        unmatchedTokens = _a[0],
        matchedTokens = _a[1];

    this.tokensUnmatched(unmatchedTokens);
    this.tokensMatched(matchedTokens);
  };

  TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {
    this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
  };

  TokenListObserver.prototype.tokensMatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenMatched(token);
    });
  };

  TokenListObserver.prototype.tokensUnmatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenUnmatched(token);
    });
  };

  TokenListObserver.prototype.tokenMatched = function (token) {
    this.delegate.tokenMatched(token);
    this.tokensByElement.add(token.element, token);
  };

  TokenListObserver.prototype.tokenUnmatched = function (token) {
    this.delegate.tokenUnmatched(token);
    this.tokensByElement.delete(token.element, token);
  };

  TokenListObserver.prototype.refreshTokensForElement = function (element) {
    var previousTokens = this.tokensByElement.getValuesForKey(element);
    var currentTokens = this.readTokensForElement(element);
    var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_a) {
      var previousToken = _a[0],
          currentToken = _a[1];
      return !tokensAreEqual(previousToken, currentToken);
    });

    if (firstDifferingIndex == -1) {
      return [[], []];
    } else {
      return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
    }
  };

  TokenListObserver.prototype.readTokensForElement = function (element) {
    var attributeName = this.attributeName;
    var tokenString = element.getAttribute(attributeName) || "";
    return parseTokenString(tokenString, element, attributeName);
  };

  return TokenListObserver;
}();



function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}

function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");


var ValueListObserver =
/** @class */
function () {
  function ValueListObserver(element, attributeName, delegate) {
    this.tokenListObserver = new _token_list_observer__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  Object.defineProperty(ValueListObserver.prototype, "started", {
    get: function get() {
      return this.tokenListObserver.started;
    },
    enumerable: true,
    configurable: true
  });

  ValueListObserver.prototype.start = function () {
    this.tokenListObserver.start();
  };

  ValueListObserver.prototype.stop = function () {
    this.tokenListObserver.stop();
  };

  ValueListObserver.prototype.refresh = function () {
    this.tokenListObserver.refresh();
  };

  Object.defineProperty(ValueListObserver.prototype, "element", {
    get: function get() {
      return this.tokenListObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ValueListObserver.prototype, "attributeName", {
    get: function get() {
      return this.tokenListObserver.attributeName;
    },
    enumerable: true,
    configurable: true
  });

  ValueListObserver.prototype.tokenMatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element).set(token, value);
      this.delegate.elementMatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.tokenUnmatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element).delete(token);
      this.delegate.elementUnmatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.fetchParseResultForToken = function (token) {
    var parseResult = this.parseResultsByToken.get(token);

    if (!parseResult) {
      parseResult = this.parseToken(token);
      this.parseResultsByToken.set(token, parseResult);
    }

    return parseResult;
  };

  ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
    var valuesByToken = this.valuesByTokenByElement.get(element);

    if (!valuesByToken) {
      valuesByToken = new Map();
      this.valuesByTokenByElement.set(element, valuesByToken);
    }

    return valuesByToken;
  };

  ValueListObserver.prototype.parseToken = function (token) {
    try {
      var value = this.delegate.parseValueForToken(token);
      return {
        value: value
      };
    } catch (error) {
      return {
        error: error
      };
    }
  };

  return ValueListObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/webpack-helpers/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/webpack-helpers/dist/index.js ***!
  \**************************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
function definitionsFromContext(context) {
  return context.keys().map(function (key) {
    return definitionForModuleWithContextAndKey(context, key);
  }).filter(function (value) {
    return value;
  });
}

function definitionForModuleWithContextAndKey(context, key) {
  var identifier = identifierForContextKey(key);

  if (identifier) {
    return definitionForModuleAndIdentifier(context(key), identifier);
  }
}

function definitionForModuleAndIdentifier(module, identifier) {
  var controllerConstructor = module.default;

  if (typeof controllerConstructor == "function") {
    return {
      identifier: identifier,
      controllerConstructor: controllerConstructor
    };
  }
}

function identifierForContextKey(key) {
  var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];

  if (logicalName) {
    return logicalName.replace(/_/g, "-").replace(/\//g, "--");
  }
}

/***/ }),

/***/ "./node_modules/choices.js/public/assets/scripts/choices.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/scripts/choices.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! choices.js v7.1.5 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (e) {
    var t = {};

    function i(n) {
      if (t[n]) return t[n].exports;
      var s = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
    }

    return i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var s in e) {
        i.d(n, s, function (t) {
          return e[t];
        }.bind(null, s));
      }
      return n;
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "/public/assets/scripts/", i(i.s = 5);
  }([function (e, t, i) {
    var n;
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    !function () {
      "use strict";

      var i = {}.hasOwnProperty;

      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var n = arguments[t];

          if (n) {
            var r = _typeof(n);

            if ("string" === r || "number" === r) e.push(n);else if (Array.isArray(n) && n.length) {
              var o = s.apply(null, n);
              o && e.push(o);
            } else if ("object" === r) for (var a in n) {
              i.call(n, a) && n[a] && e.push(a);
            }
          }
        }

        return e.join(" ");
      }

      e.exports ? (s.default = s, e.exports = s) : void 0 === (n = function () {
        return s;
      }.apply(t, [])) || (e.exports = n);
    }();
  }, function (e, t, i) {
    "use strict";

    var n = function n(e) {
      return function (e) {
        return !!e && "object" == _typeof(e);
      }(e) && !function (e) {
        var t = Object.prototype.toString.call(e);
        return "[object RegExp]" === t || "[object Date]" === t || function (e) {
          return e.$$typeof === s;
        }(e);
      }(e);
    };

    var s = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function r(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e) ? c((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
      var i;
    }

    function o(e, t, i) {
      return e.concat(t).map(function (e) {
        return r(e, i);
      });
    }

    function a(e) {
      return Object.keys(e).concat(function (e) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
          return e.propertyIsEnumerable(t);
        }) : [];
      }(e));
    }

    function l(e, t, i) {
      var n = {};
      return i.isMergeableObject(e) && a(e).forEach(function (t) {
        n[t] = r(e[t], i);
      }), a(t).forEach(function (s) {
        (function (e, t) {
          try {
            return t in e && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
          } catch (e) {
            return !1;
          }
        })(e, s) || (i.isMergeableObject(t[s]) && e[s] ? n[s] = function (e, t) {
          if (!t.customMerge) return c;
          var i = t.customMerge(e);
          return "function" == typeof i ? i : c;
        }(s, i)(e[s], t[s], i) : n[s] = r(t[s], i));
      }), n;
    }

    function c(e, t, i) {
      (i = i || {}).arrayMerge = i.arrayMerge || o, i.isMergeableObject = i.isMergeableObject || n, i.cloneUnlessOtherwiseSpecified = r;
      var s = Array.isArray(t);
      return s === Array.isArray(e) ? s ? i.arrayMerge(e, t, i) : l(e, t, i) : r(t, i);
    }

    c.all = function (e, t) {
      if (!Array.isArray(e)) throw new Error("first argument should be an array");
      return e.reduce(function (e, i) {
        return c(e, i, t);
      }, {});
    };

    var h = c;
    e.exports = h;
  }, function (e, t, i) {
    "use strict";

    (function (e, n) {
      var s,
          r = i(4);
      s = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;
      var o = Object(r.a)(s);
      t.a = o;
    }).call(this, i(7), i(8)(e));
  }, function (e, t, i) {
    /*!
     * Fuse.js v3.4.2 - Lightweight fuzzy-search (http://fusejs.io)
     * 
     * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
     * All Rights Reserved. Apache Software License 2.0
     * 
     * http://www.apache.org/licenses/LICENSE-2.0
     */
    var n;
    n = function n() {
      return function (e) {
        var t = {};

        function i(n) {
          if (t[n]) return t[n].exports;
          var s = t[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
        }

        return i.m = e, i.c = t, i.d = function (e, t, n) {
          i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
          });
        }, i.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          });
        }, i.t = function (e, t) {
          if (1 & t && (e = i(e)), 8 & t) return e;
          if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
          var n = Object.create(null);
          if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" != typeof e) for (var s in e) {
            i.d(n, s, function (t) {
              return e[t];
            }.bind(null, s));
          }
          return n;
        }, i.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e.default;
          } : function () {
            return e;
          };
          return i.d(t, "a", t), t;
        }, i.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, i.p = "", i(i.s = "./src/index.js");
      }({
        "./src/bitap/bitap_matched_indices.js":
        /*!********************************************!*\
          !*** ./src/bitap/bitap_matched_indices.js ***!
          \********************************************/

        /*! no static exports found */
        function srcBitapBitap_matched_indicesJs(e, t) {
          e.exports = function () {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = [], n = -1, s = -1, r = 0, o = e.length; r < o; r += 1) {
              var a = e[r];
              a && -1 === n ? n = r : a || -1 === n || ((s = r - 1) - n + 1 >= t && i.push([n, s]), n = -1);
            }

            return e[r - 1] && r - n >= t && i.push([n, r - 1]), i;
          };
        },
        "./src/bitap/bitap_pattern_alphabet.js":
        /*!*********************************************!*\
          !*** ./src/bitap/bitap_pattern_alphabet.js ***!
          \*********************************************/

        /*! no static exports found */
        function srcBitapBitap_pattern_alphabetJs(e, t) {
          e.exports = function (e) {
            for (var t = {}, i = e.length, n = 0; n < i; n += 1) {
              t[e.charAt(n)] = 0;
            }

            for (var s = 0; s < i; s += 1) {
              t[e.charAt(s)] |= 1 << i - s - 1;
            }

            return t;
          };
        },
        "./src/bitap/bitap_regex_search.js":
        /*!*****************************************!*\
          !*** ./src/bitap/bitap_regex_search.js ***!
          \*****************************************/

        /*! no static exports found */
        function srcBitapBitap_regex_searchJs(e, t) {
          var i = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

          e.exports = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
                s = new RegExp(t.replace(i, "\\$&").replace(n, "|")),
                r = e.match(s),
                o = !!r,
                a = [];
            if (o) for (var l = 0, c = r.length; l < c; l += 1) {
              var h = r[l];
              a.push([e.indexOf(h), h.length - 1]);
            }
            return {
              score: o ? .5 : 1,
              isMatch: o,
              matchedIndices: a
            };
          };
        },
        "./src/bitap/bitap_score.js":
        /*!**********************************!*\
          !*** ./src/bitap/bitap_score.js ***!
          \**********************************/

        /*! no static exports found */
        function srcBitapBitap_scoreJs(e, t) {
          e.exports = function (e, t) {
            var i = t.errors,
                n = void 0 === i ? 0 : i,
                s = t.currentLocation,
                r = void 0 === s ? 0 : s,
                o = t.expectedLocation,
                a = void 0 === o ? 0 : o,
                l = t.distance,
                c = void 0 === l ? 100 : l,
                h = n / e.length,
                u = Math.abs(a - r);
            return c ? h + u / c : u ? 1 : h;
          };
        },
        "./src/bitap/bitap_search.js":
        /*!***********************************!*\
          !*** ./src/bitap/bitap_search.js ***!
          \***********************************/

        /*! no static exports found */
        function srcBitapBitap_searchJs(e, t, i) {
          var n = i(
          /*! ./bitap_score */
          "./src/bitap/bitap_score.js"),
              s = i(
          /*! ./bitap_matched_indices */
          "./src/bitap/bitap_matched_indices.js");

          e.exports = function (e, t, i, r) {
            for (var o = r.location, a = void 0 === o ? 0 : o, l = r.distance, c = void 0 === l ? 100 : l, h = r.threshold, u = void 0 === h ? .6 : h, d = r.findAllMatches, p = void 0 !== d && d, f = r.minMatchCharLength, m = void 0 === f ? 1 : f, v = a, g = e.length, _ = u, b = e.indexOf(t, v), y = t.length, E = [], S = 0; S < g; S += 1) {
              E[S] = 0;
            }

            if (-1 !== b) {
              var I = n(t, {
                errors: 0,
                currentLocation: b,
                expectedLocation: v,
                distance: c
              });

              if (_ = Math.min(I, _), -1 !== (b = e.lastIndexOf(t, v + y))) {
                var w = n(t, {
                  errors: 0,
                  currentLocation: b,
                  expectedLocation: v,
                  distance: c
                });
                _ = Math.min(w, _);
              }
            }

            b = -1;

            for (var C = [], O = 1, A = y + g, x = 1 << y - 1, T = 0; T < y; T += 1) {
              for (var L = 0, k = A; L < k;) {
                n(t, {
                  errors: T,
                  currentLocation: v + k,
                  expectedLocation: v,
                  distance: c
                }) <= _ ? L = k : A = k, k = Math.floor((A - L) / 2 + L);
              }

              A = k;
              var D = Math.max(1, v - k + 1),
                  P = p ? g : Math.min(v + k, g) + y,
                  F = Array(P + 2);
              F[P + 1] = (1 << T) - 1;

              for (var j = P; j >= D; j -= 1) {
                var M = j - 1,
                    N = i[e.charAt(M)];

                if (N && (E[M] = 1), F[j] = (F[j + 1] << 1 | 1) & N, 0 !== T && (F[j] |= (C[j + 1] | C[j]) << 1 | 1 | C[j + 1]), F[j] & x && (O = n(t, {
                  errors: T,
                  currentLocation: M,
                  expectedLocation: v,
                  distance: c
                })) <= _) {
                  if (_ = O, (b = M) <= v) break;
                  D = Math.max(1, 2 * v - b);
                }
              }

              if (n(t, {
                errors: T + 1,
                currentLocation: v,
                expectedLocation: v,
                distance: c
              }) > _) break;
              C = F;
            }

            return {
              isMatch: b >= 0,
              score: 0 === O ? .001 : O,
              matchedIndices: s(E, m)
            };
          };
        },
        "./src/bitap/index.js":
        /*!****************************!*\
          !*** ./src/bitap/index.js ***!
          \****************************/

        /*! no static exports found */
        function srcBitapIndexJs(e, t, i) {
          function n(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
          }

          var s = i(
          /*! ./bitap_regex_search */
          "./src/bitap/bitap_regex_search.js"),
              r = i(
          /*! ./bitap_search */
          "./src/bitap/bitap_search.js"),
              o = i(
          /*! ./bitap_pattern_alphabet */
          "./src/bitap/bitap_pattern_alphabet.js"),
              a = function () {
            function e(t, i) {
              var n = i.location,
                  s = void 0 === n ? 0 : n,
                  r = i.distance,
                  a = void 0 === r ? 100 : r,
                  l = i.threshold,
                  c = void 0 === l ? .6 : l,
                  h = i.maxPatternLength,
                  u = void 0 === h ? 32 : h,
                  d = i.isCaseSensitive,
                  p = void 0 !== d && d,
                  f = i.tokenSeparator,
                  m = void 0 === f ? / +/g : f,
                  v = i.findAllMatches,
                  g = void 0 !== v && v,
                  _ = i.minMatchCharLength,
                  b = void 0 === _ ? 1 : _;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.options = {
                location: s,
                distance: a,
                threshold: c,
                maxPatternLength: u,
                isCaseSensitive: p,
                tokenSeparator: m,
                findAllMatches: g,
                minMatchCharLength: b
              }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = o(this.pattern));
            }

            var t, i, a;
            return t = e, (i = [{
              key: "search",
              value: function value(e) {
                if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
                  isMatch: !0,
                  score: 0,
                  matchedIndices: [[0, e.length - 1]]
                };
                var t = this.options,
                    i = t.maxPatternLength,
                    n = t.tokenSeparator;
                if (this.pattern.length > i) return s(e, this.pattern, n);
                var o = this.options,
                    a = o.location,
                    l = o.distance,
                    c = o.threshold,
                    h = o.findAllMatches,
                    u = o.minMatchCharLength;
                return r(e, this.pattern, this.patternAlphabet, {
                  location: a,
                  distance: l,
                  threshold: c,
                  findAllMatches: h,
                  minMatchCharLength: u
                });
              }
            }]) && n(t.prototype, i), a && n(t, a), e;
          }();

          e.exports = a;
        },
        "./src/helpers/deep_value.js":
        /*!***********************************!*\
          !*** ./src/helpers/deep_value.js ***!
          \***********************************/

        /*! no static exports found */
        function srcHelpersDeep_valueJs(e, t, i) {
          var n = i(
          /*! ./is_array */
          "./src/helpers/is_array.js");

          e.exports = function (e, t) {
            return function e(t, i, s) {
              if (i) {
                var r = i.indexOf("."),
                    o = i,
                    a = null;
                -1 !== r && (o = i.slice(0, r), a = i.slice(r + 1));
                var l = t[o];
                if (null != l) if (a || "string" != typeof l && "number" != typeof l) {
                  if (n(l)) for (var c = 0, h = l.length; c < h; c += 1) {
                    e(l[c], a, s);
                  } else a && e(l, a, s);
                } else s.push(l.toString());
              } else s.push(t);

              return s;
            }(e, t, []);
          };
        },
        "./src/helpers/is_array.js":
        /*!*********************************!*\
          !*** ./src/helpers/is_array.js ***!
          \*********************************/

        /*! no static exports found */
        function srcHelpersIs_arrayJs(e, t) {
          e.exports = function (e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
          };
        },
        "./src/index.js":
        /*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/

        /*! no static exports found */
        function srcIndexJs(e, t, i) {
          function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
              return _typeof(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
            })(e);
          }

          function s(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
          }

          var r = i(
          /*! ./bitap */
          "./src/bitap/index.js"),
              o = i(
          /*! ./helpers/deep_value */
          "./src/helpers/deep_value.js"),
              a = i(
          /*! ./helpers/is_array */
          "./src/helpers/is_array.js"),
              l = function () {
            function e(t, i) {
              var n = i.location,
                  s = void 0 === n ? 0 : n,
                  r = i.distance,
                  a = void 0 === r ? 100 : r,
                  l = i.threshold,
                  c = void 0 === l ? .6 : l,
                  h = i.maxPatternLength,
                  u = void 0 === h ? 32 : h,
                  d = i.caseSensitive,
                  p = void 0 !== d && d,
                  f = i.tokenSeparator,
                  m = void 0 === f ? / +/g : f,
                  v = i.findAllMatches,
                  g = void 0 !== v && v,
                  _ = i.minMatchCharLength,
                  b = void 0 === _ ? 1 : _,
                  y = i.id,
                  E = void 0 === y ? null : y,
                  S = i.keys,
                  I = void 0 === S ? [] : S,
                  w = i.shouldSort,
                  C = void 0 === w || w,
                  O = i.getFn,
                  A = void 0 === O ? o : O,
                  x = i.sortFn,
                  T = void 0 === x ? function (e, t) {
                return e.score - t.score;
              } : x,
                  L = i.tokenize,
                  k = void 0 !== L && L,
                  D = i.matchAllTokens,
                  P = void 0 !== D && D,
                  F = i.includeMatches,
                  j = void 0 !== F && F,
                  M = i.includeScore,
                  N = void 0 !== M && M,
                  K = i.verbose,
                  R = void 0 !== K && K;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.options = {
                location: s,
                distance: a,
                threshold: c,
                maxPatternLength: u,
                isCaseSensitive: p,
                tokenSeparator: m,
                findAllMatches: g,
                minMatchCharLength: b,
                id: E,
                keys: I,
                includeMatches: j,
                includeScore: N,
                shouldSort: C,
                getFn: A,
                sortFn: T,
                verbose: R,
                tokenize: k,
                matchAllTokens: P
              }, this.setCollection(t);
            }

            var t, i, l;
            return t = e, (i = [{
              key: "setCollection",
              value: function value(e) {
                return this.list = e, e;
              }
            }, {
              key: "search",
              value: function value(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                  limit: !1
                };

                this._log('---------\nSearch pattern: "'.concat(e, '"'));

                var i = this._prepareSearchers(e),
                    n = i.tokenSearchers,
                    s = i.fullSearcher,
                    r = this._search(n, s),
                    o = r.weights,
                    a = r.results;

                return this._computeScore(o, a), this.options.shouldSort && this._sort(a), t.limit && "number" == typeof t.limit && (a = a.slice(0, t.limit)), this._format(a);
              }
            }, {
              key: "_prepareSearchers",
              value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = [];
                if (this.options.tokenize) for (var i = e.split(this.options.tokenSeparator), n = 0, s = i.length; n < s; n += 1) {
                  t.push(new r(i[n], this.options));
                }
                var o = new r(e, this.options);
                return {
                  tokenSearchers: t,
                  fullSearcher: o
                };
              }
            }, {
              key: "_search",
              value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    i = this.list,
                    n = {},
                    s = [];

                if ("string" == typeof i[0]) {
                  for (var r = 0, o = i.length; r < o; r += 1) {
                    this._analyze({
                      key: "",
                      value: i[r],
                      record: r,
                      index: r
                    }, {
                      resultMap: n,
                      results: s,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                  }

                  return {
                    weights: null,
                    results: s
                  };
                }

                for (var a = {}, l = 0, c = i.length; l < c; l += 1) {
                  for (var h = i[l], u = 0, d = this.options.keys.length; u < d; u += 1) {
                    var p = this.options.keys[u];

                    if ("string" != typeof p) {
                      if (a[p.name] = {
                        weight: 1 - p.weight || 1
                      }, p.weight <= 0 || p.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                      p = p.name;
                    } else a[p] = {
                      weight: 1
                    };

                    this._analyze({
                      key: p,
                      value: this.options.getFn(h, p),
                      record: h,
                      index: l
                    }, {
                      resultMap: n,
                      results: s,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                  }
                }

                return {
                  weights: a,
                  results: s
                };
              }
            }, {
              key: "_analyze",
              value: function value(e, t) {
                var i = e.key,
                    n = e.arrayIndex,
                    s = void 0 === n ? -1 : n,
                    r = e.value,
                    o = e.record,
                    l = e.index,
                    c = t.tokenSearchers,
                    h = void 0 === c ? [] : c,
                    u = t.fullSearcher,
                    d = void 0 === u ? [] : u,
                    p = t.resultMap,
                    f = void 0 === p ? {} : p,
                    m = t.results,
                    v = void 0 === m ? [] : m;

                if (null != r) {
                  var g = !1,
                      _ = -1,
                      b = 0;

                  if ("string" == typeof r) {
                    this._log("\nKey: ".concat("" === i ? "-" : i));

                    var y = d.search(r);

                    if (this._log('Full text: "'.concat(r, '", score: ').concat(y.score)), this.options.tokenize) {
                      for (var E = r.split(this.options.tokenSeparator), S = [], I = 0; I < h.length; I += 1) {
                        var w = h[I];

                        this._log('\nPattern: "'.concat(w.pattern, '"'));

                        for (var C = !1, O = 0; O < E.length; O += 1) {
                          var A = E[O],
                              x = w.search(A),
                              T = {};
                          x.isMatch ? (T[A] = x.score, g = !0, C = !0, S.push(x.score)) : (T[A] = 1, this.options.matchAllTokens || S.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(T[A]));
                        }

                        C && (b += 1);
                      }

                      _ = S[0];

                      for (var L = S.length, k = 1; k < L; k += 1) {
                        _ += S[k];
                      }

                      _ /= L, this._log("Token score average:", _);
                    }

                    var D = y.score;
                    _ > -1 && (D = (D + _) / 2), this._log("Score average:", D);
                    var P = !this.options.tokenize || !this.options.matchAllTokens || b >= h.length;

                    if (this._log("\nCheck Matches: ".concat(P)), (g || y.isMatch) && P) {
                      var F = f[l];
                      F ? F.output.push({
                        key: i,
                        arrayIndex: s,
                        value: r,
                        score: D,
                        matchedIndices: y.matchedIndices
                      }) : (f[l] = {
                        item: o,
                        output: [{
                          key: i,
                          arrayIndex: s,
                          value: r,
                          score: D,
                          matchedIndices: y.matchedIndices
                        }]
                      }, v.push(f[l]));
                    }
                  } else if (a(r)) for (var j = 0, M = r.length; j < M; j += 1) {
                    this._analyze({
                      key: i,
                      arrayIndex: j,
                      value: r[j],
                      record: o,
                      index: l
                    }, {
                      resultMap: f,
                      results: v,
                      tokenSearchers: h,
                      fullSearcher: d
                    });
                  }
                }
              }
            }, {
              key: "_computeScore",
              value: function value(e, t) {
                this._log("\n\nComputing score:\n");

                for (var i = 0, n = t.length; i < n; i += 1) {
                  for (var s = t[i].output, r = s.length, o = 1, a = 1, l = 0; l < r; l += 1) {
                    var c = e ? e[s[l].key].weight : 1,
                        h = (1 === c ? s[l].score : s[l].score || .001) * c;
                    1 !== c ? a = Math.min(a, h) : (s[l].nScore = h, o *= h);
                  }

                  t[i].score = 1 === a ? o : a, this._log(t[i]);
                }
              }
            }, {
              key: "_sort",
              value: function value(e) {
                this._log("\n\nSorting...."), e.sort(this.options.sortFn);
              }
            }, {
              key: "_format",
              value: function value(e) {
                var t = [];

                if (this.options.verbose) {
                  var i = [];
                  this._log("\n\nOutput:\n\n", JSON.stringify(e, function (e, t) {
                    if ("object" === n(t) && null !== t) {
                      if (-1 !== i.indexOf(t)) return;
                      i.push(t);
                    }

                    return t;
                  })), i = null;
                }

                var s = [];
                this.options.includeMatches && s.push(function (e, t) {
                  var i = e.output;
                  t.matches = [];

                  for (var n = 0, s = i.length; n < s; n += 1) {
                    var r = i[n];

                    if (0 !== r.matchedIndices.length) {
                      var o = {
                        indices: r.matchedIndices,
                        value: r.value
                      };
                      r.key && (o.key = r.key), r.hasOwnProperty("arrayIndex") && r.arrayIndex > -1 && (o.arrayIndex = r.arrayIndex), t.matches.push(o);
                    }
                  }
                }), this.options.includeScore && s.push(function (e, t) {
                  t.score = e.score;
                });

                for (var r = 0, o = e.length; r < o; r += 1) {
                  var a = e[r];

                  if (this.options.id && (a.item = this.options.getFn(a.item, this.options.id)[0]), s.length) {
                    for (var l = {
                      item: a.item
                    }, c = 0, h = s.length; c < h; c += 1) {
                      s[c](a, l);
                    }

                    t.push(l);
                  } else t.push(a.item);
                }

                return t;
              }
            }, {
              key: "_log",
              value: function value() {
                var e;
                this.options.verbose && (e = console).log.apply(e, arguments);
              }
            }]) && s(t.prototype, i), l && s(t, l), e;
          }();

          e.exports = l;
        }
      });
    }, e.exports = n();
  }, function (e, t, i) {
    "use strict";

    function n(e) {
      var t,
          i = e.Symbol;
      return "function" == typeof i ? i.observable ? t = i.observable : (t = i("observable"), i.observable = t) : t = "@@observable", t;
    }

    i.d(t, "a", function () {
      return n;
    });
  }, function (e, t, i) {
    e.exports = i(9);
  }, function (e, t) {
    window.delegateEvent = function () {
      var e, t;

      function i(t) {
        var i = e.get(t.type);
        i && i.forEach(function (e) {
          return e(t);
        });
      }

      return void 0 === e && (e = new Map()), void 0 === t && (t = []), {
        add: function add(n, s) {
          e.has(n) ? e.get(n).push(s) : e.set(n, [s]), -1 === t.indexOf(n) && (document.documentElement.addEventListener(n, i, !0), t.push(n));
        },
        remove: function remove(i, n) {
          e.get(i) && (e.set(i, e.get(i).filter(function (e) {
            return e !== n;
          })), e.get(i).length || t.splice(t.indexOf(i), 1));
        }
      };
    }();
  }, function (e, t) {
    var i;

    i = function () {
      return this;
    }();

    try {
      i = i || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
    }

    e.exports = i;
  }, function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []), Object.defineProperty(t, "loaded", {
          enumerable: !0,
          get: function get() {
            return t.l;
          }
        }), Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function get() {
            return t.i;
          }
        }), Object.defineProperty(t, "exports", {
          enumerable: !0
        }), t.webpackPolyfill = 1;
      }

      return t;
    };
  }, function (e, t, i) {
    "use strict";

    i.r(t);

    var n = i(3),
        s = i.n(n),
        r = i(1),
        o = i.n(r),
        a = (i(6), i(2)),
        l = function l() {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
        c = {
      INIT: "@@redux/INIT" + l(),
      REPLACE: "@@redux/REPLACE" + l(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + l();
      }
    };

    function h(e) {
      if ("object" != _typeof(e) || null === e) return !1;

      for (var t = e; null !== Object.getPrototypeOf(t);) {
        t = Object.getPrototypeOf(t);
      }

      return Object.getPrototypeOf(e) === t;
    }

    function u(e, t, i) {
      var n;
      if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");

      if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
        if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
        return i(u)(e, t);
      }

      if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
      var s = e,
          r = t,
          o = [],
          l = o,
          d = !1;

      function p() {
        l === o && (l = o.slice());
      }

      function f() {
        if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return r;
      }

      function m(e) {
        if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
        if (d) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
        var t = !0;
        return p(), l.push(e), function () {
          if (t) {
            if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            t = !1, p();
            var i = l.indexOf(e);
            l.splice(i, 1);
          }
        };
      }

      function v(e) {
        if (!h(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (d) throw new Error("Reducers may not dispatch actions.");

        try {
          d = !0, r = s(r, e);
        } finally {
          d = !1;
        }

        for (var t = o = l, i = 0; i < t.length; i++) {
          (0, t[i])();
        }

        return e;
      }

      return v({
        type: c.INIT
      }), (n = {
        dispatch: v,
        subscribe: m,
        getState: f,
        replaceReducer: function replaceReducer(e) {
          if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
          s = e, v({
            type: c.REPLACE
          });
        }
      })[a.a] = function () {
        var e,
            t = m;
        return (e = {
          subscribe: function subscribe(e) {
            if ("object" != _typeof(e) || null === e) throw new TypeError("Expected the observer to be an object.");

            function i() {
              e.next && e.next(f());
            }

            return i(), {
              unsubscribe: t(i)
            };
          }
        })[a.a] = function () {
          return this;
        }, e;
      }, n;
    }

    function d(e, t) {
      var i = t && t.type;
      return "Given " + (i && 'action "' + String(i) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }

    var p = [];
    var f = [];
    var m = [];

    var v,
        g = {
      loading: !1
    },
        _ = function _(e, t) {
      switch (void 0 === e && (e = g), t.type) {
        case "SET_IS_LOADING":
          return {
            loading: t.isLoading
          };

        default:
          return e;
      }
    },
        b = function b(e) {
      for (var t, i, n = "", s = 0; s < e; s++) {
        n += (t = 0, i = 36, Math.floor(Math.random() * (i - t) + t)).toString(36);
      }

      return n;
    },
        y = function y(e, t) {
      var i = e.id || e.name && e.name + "-" + b(2) || b(4);
      return i = t + "-" + (i = i.replace(/(:|\.|\[|\]|,)/g, ""));
    },
        E = function E(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    },
        S = function S(e, t) {
      return null != t && E(t) === e;
    },
        I = function I(e) {
      return e instanceof Element;
    },
        w = function w(e, t) {
      for (var i = e; i;) {
        if (i.hasAttribute(t)) return i;
        i = i.parentElement;
      }

      return null;
    },
        C = function C(e) {
      return S("String", e) ? e.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") : e;
    },
        O = (v = document.createElement("div"), function (e) {
      var t = e.trim();
      v.innerHTML = t;

      for (var i = v.children[0]; v.firstChild;) {
        v.removeChild(v.firstChild);
      }

      return i;
    }),
        A = function A(e, t) {
      return e.score - t.score;
    },
        x = function e(t, i) {
      var n = i.indexOf(".");
      return n > -1 ? e(t[i.substring(0, n)], i.substr(n + 1)) : t[i];
    },
        T = function T(e) {
      return JSON.parse(JSON.stringify(e));
    },
        L = function L(e, t) {
      var i = Object.keys(e).sort(),
          n = Object.keys(t).sort();
      return i.filter(function (e) {
        return n.indexOf(e) < 0;
      });
    },
        k = function (e) {
      for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
        var s = t[n];
        0, "function" == typeof e[s] && (i[s] = e[s]);
      }

      var r,
          o = Object.keys(i);

      try {
        !function (e) {
          Object.keys(e).forEach(function (t) {
            var i = e[t];
            if (void 0 === i(void 0, {
              type: c.INIT
            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if (void 0 === i(void 0, {
              type: c.PROBE_UNKNOWN_ACTION()
            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + c.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
          });
        }(i);
      } catch (e) {
        r = e;
      }

      return function (e, t) {
        if (void 0 === e && (e = {}), r) throw r;

        for (var n = !1, s = {}, a = 0; a < o.length; a++) {
          var l = o[a],
              c = i[l],
              h = e[l],
              u = c(h, t);

          if (void 0 === u) {
            var p = d(l, t);
            throw new Error(p);
          }

          s[l] = u, n = n || u !== h;
        }

        return n ? s : e;
      };
    }({
      items: function items(e, t) {
        switch (void 0 === e && (e = p), t.type) {
          case "ADD_ITEM":
            return [].concat(e, [{
              id: t.id,
              choiceId: t.choiceId,
              groupId: t.groupId,
              value: t.value,
              label: t.label,
              active: !0,
              highlighted: !1,
              customProperties: t.customProperties,
              placeholder: t.placeholder || !1,
              keyCode: null
            }]).map(function (e) {
              var t = e;
              return t.highlighted = !1, t;
            });

          case "REMOVE_ITEM":
            return e.map(function (e) {
              var i = e;
              return i.id === t.id && (i.active = !1), i;
            });

          case "HIGHLIGHT_ITEM":
            return e.map(function (e) {
              var i = e;
              return i.id === t.id && (i.highlighted = t.highlighted), i;
            });

          default:
            return e;
        }
      },
      groups: function groups(e, t) {
        switch (void 0 === e && (e = f), t.type) {
          case "ADD_GROUP":
            return [].concat(e, [{
              id: t.id,
              value: t.value,
              active: t.active,
              disabled: t.disabled
            }]);

          case "CLEAR_CHOICES":
            return [];

          default:
            return e;
        }
      },
      choices: function choices(e, t) {
        switch (void 0 === e && (e = m), t.type) {
          case "ADD_CHOICE":
            return [].concat(e, [{
              id: t.id,
              elementId: t.elementId,
              groupId: t.groupId,
              value: t.value,
              label: t.label || t.value,
              disabled: t.disabled || !1,
              selected: !1,
              active: !0,
              score: 9999,
              customProperties: t.customProperties,
              placeholder: t.placeholder || !1,
              keyCode: null
            }]);

          case "ADD_ITEM":
            return t.activateOptions ? e.map(function (e) {
              var i = e;
              return i.active = t.active, i;
            }) : t.choiceId > -1 ? e.map(function (e) {
              var i = e;
              return i.id === parseInt(t.choiceId, 10) && (i.selected = !0), i;
            }) : e;

          case "REMOVE_ITEM":
            return t.choiceId > -1 ? e.map(function (e) {
              var i = e;
              return i.id === parseInt(t.choiceId, 10) && (i.selected = !1), i;
            }) : e;

          case "FILTER_CHOICES":
            return e.map(function (e) {
              var i = e;
              return i.active = t.results.some(function (e) {
                var t = e.item,
                    n = e.score;
                return t.id === i.id && (i.score = n, !0);
              }), i;
            });

          case "ACTIVATE_CHOICES":
            return e.map(function (e) {
              var i = e;
              return i.active = t.active, i;
            });

          case "CLEAR_CHOICES":
            return m;

          default:
            return e;
        }
      },
      general: _
    }),
        D = function D(e, t) {
      var i = e;
      if ("CLEAR_ALL" === t.type) i = void 0;else if ("RESET_TO" === t.type) return T(t.state);
      return k(i, t);
    };

    function P(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var F = function () {
      function e() {
        this._store = u(D, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
      }

      var t,
          i,
          n,
          s = e.prototype;
      return s.subscribe = function (e) {
        this._store.subscribe(e);
      }, s.dispatch = function (e) {
        this._store.dispatch(e);
      }, s.isLoading = function () {
        return this.state.general.loading;
      }, s.getChoiceById = function (e) {
        return !!e && this.activeChoices.find(function (t) {
          return t.id === parseInt(e, 10);
        });
      }, s.getGroupById = function (e) {
        return this.groups.find(function (t) {
          return t.id === parseInt(e, 10);
        });
      }, t = e, (i = [{
        key: "state",
        get: function get() {
          return this._store.getState();
        }
      }, {
        key: "items",
        get: function get() {
          return this.state.items;
        }
      }, {
        key: "activeItems",
        get: function get() {
          return this.items.filter(function (e) {
            return !0 === e.active;
          });
        }
      }, {
        key: "highlightedActiveItems",
        get: function get() {
          return this.items.filter(function (e) {
            return e.active && e.highlighted;
          });
        }
      }, {
        key: "choices",
        get: function get() {
          return this.state.choices;
        }
      }, {
        key: "activeChoices",
        get: function get() {
          return this.choices.filter(function (e) {
            return !0 === e.active;
          });
        }
      }, {
        key: "selectableChoices",
        get: function get() {
          return this.choices.filter(function (e) {
            return !0 !== e.disabled;
          });
        }
      }, {
        key: "searchableChoices",
        get: function get() {
          return this.selectableChoices.filter(function (e) {
            return !0 !== e.placeholder;
          });
        }
      }, {
        key: "placeholderChoice",
        get: function get() {
          return [].concat(this.choices).reverse().find(function (e) {
            return !0 === e.placeholder;
          });
        }
      }, {
        key: "groups",
        get: function get() {
          return this.state.groups;
        }
      }, {
        key: "activeGroups",
        get: function get() {
          var e = this.groups,
              t = this.choices;
          return e.filter(function (e) {
            var i = !0 === e.active && !1 === e.disabled,
                n = t.some(function (e) {
              return !0 === e.active && !1 === e.disabled;
            });
            return i && n;
          }, []);
        }
      }]) && P(t.prototype, i), n && P(t, n), e;
    }(),
        j = function () {
      function e(e) {
        var t = e.element,
            i = e.type,
            n = e.classNames;
        Object.assign(this, {
          element: t,
          type: i,
          classNames: n
        }), this.isActive = !1;
      }

      var t = e.prototype;
      return t.distanceFromTopWindow = function () {
        return this.dimensions = this.element.getBoundingClientRect(), this.position = Math.ceil(this.dimensions.top + window.pageYOffset + this.element.offsetHeight), this.position;
      }, t.getChild = function (e) {
        return this.element.querySelector(e);
      }, t.show = function () {
        return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
      }, t.hide = function () {
        return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
      }, e;
    }(),
        M = function () {
      function e(e) {
        var t = e.element,
            i = e.type,
            n = e.classNames,
            s = e.position;
        Object.assign(this, {
          element: t,
          classNames: n,
          type: i,
          position: s
        }), this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
      }

      var t = e.prototype;
      return t.addEventListeners = function () {
        this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
      }, t.removeEventListeners = function () {
        this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
      }, t.shouldFlip = function (e, t) {
        var i, n;
        if (void 0 === t && (i = document.body, n = document.documentElement, t = Math.max(i.scrollHeight, i.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)), void 0 === e) return !1;
        var s = !1;
        return "auto" === this.position ? s = e >= t : "top" === this.position && (s = !0), s;
      }, t.setActiveDescendant = function (e) {
        this.element.setAttribute("aria-activedescendant", e);
      }, t.removeActiveDescendant = function () {
        this.element.removeAttribute("aria-activedescendant");
      }, t.open = function (e) {
        this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
      }, t.close = function () {
        this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
      }, t.focus = function () {
        this.isFocussed || this.element.focus();
      }, t.addFocusState = function () {
        this.element.classList.add(this.classNames.focusState);
      }, t.removeFocusState = function () {
        this.element.classList.remove(this.classNames.focusState);
      }, t.enable = function () {
        this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), "select-one" === this.type && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
      }, t.disable = function () {
        this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), "select-one" === this.type && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
      }, t.wrap = function (e) {
        !function (e, t) {
          void 0 === t && (t = document.createElement("div")), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e);
        }(e, this.element);
      }, t.unwrap = function (e) {
        this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element);
      }, t.addLoadingState = function () {
        this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
      }, t.removeLoadingState = function () {
        this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
      }, t._onFocus = function () {
        this.isFocussed = !0;
      }, t._onBlur = function () {
        this.isFocussed = !1;
      }, e;
    }();

    function N(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var K = function () {
      function e(e) {
        var t = e.element,
            i = e.type,
            n = e.classNames,
            s = e.placeholderValue;
        Object.assign(this, {
          element: t,
          type: i,
          classNames: n,
          placeholderValue: s
        }), this.element = t, this.classNames = n, this.isFocussed = this.element === document.activeElement, this.isDisabled = !1, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
      }

      var t,
          i,
          n,
          s = e.prototype;
      return s.addEventListeners = function () {
        this.element.addEventListener("input", this._onInput), this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur), this.element.form && this.element.form.addEventListener("reset", this._onFormReset);
      }, s.removeEventListeners = function () {
        this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur), this.element.form && this.element.form.removeEventListener("reset", this._onFormReset);
      }, s.enable = function () {
        this.element.removeAttribute("disabled"), this.isDisabled = !1;
      }, s.disable = function () {
        this.element.setAttribute("disabled", ""), this.isDisabled = !0;
      }, s.focus = function () {
        this.isFocussed || this.element.focus();
      }, s.blur = function () {
        this.isFocussed && this.element.blur();
      }, s.clear = function (e) {
        return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
      }, s.setWidth = function (e) {
        var t = this,
            i = function i(e) {
          t.element.style.width = e;
        };

        if (this._placeholderValue) {
          var n = this.element.value.length >= this._placeholderValue.length / 1.25;
          (this.element.value && n || e) && this.calcWidth(i);
        } else this.calcWidth(i);
      }, s.calcWidth = function (e) {
        return function (e, t) {
          var i = e.value || e.placeholder,
              n = e.offsetWidth;

          if (i) {
            var s = O("<span>" + C(i) + "</span>");

            if (s.style.position = "absolute", s.style.padding = "0", s.style.top = "-9999px", s.style.left = "-9999px", s.style.width = "auto", s.style.whiteSpace = "pre", document.body.contains(e) && window.getComputedStyle) {
              var r = window.getComputedStyle(e);
              r && (s.style.fontSize = r.fontSize, s.style.fontFamily = r.fontFamily, s.style.fontWeight = r.fontWeight, s.style.fontStyle = r.fontStyle, s.style.letterSpacing = r.letterSpacing, s.style.textTransform = r.textTransform, s.style.paddingLeft = r.paddingLeft, s.style.paddingRight = r.paddingRight);
            }

            document.body.appendChild(s), requestAnimationFrame(function () {
              i && s.offsetWidth !== e.offsetWidth && (n = s.offsetWidth + 4), document.body.removeChild(s), t.call(void 0, n + "px");
            });
          } else t.call(void 0, n + "px");
        }(this.element, e);
      }, s.setActiveDescendant = function (e) {
        this.element.setAttribute("aria-activedescendant", e);
      }, s.removeActiveDescendant = function () {
        this.element.removeAttribute("aria-activedescendant");
      }, s._onInput = function () {
        "select-one" !== this.type && this.setWidth();
      }, s._onPaste = function (e) {
        e.target === this.element && this.preventPaste && e.preventDefault();
      }, s._onFocus = function () {
        this.isFocussed = !0;
      }, s._onBlur = function () {
        this.isFocussed = !1;
      }, t = e, (i = [{
        key: "placeholder",
        set: function set(e) {
          this.element.placeholder = e;
        }
      }, {
        key: "value",
        set: function set(e) {
          this.element.value = e;
        },
        get: function get() {
          return C(this.element.value);
        }
      }]) && N(t.prototype, i), n && N(t, n), e;
    }(),
        R = {
      items: [],
      choices: [],
      silent: !1,
      renderChoiceLimit: -1,
      maxItemCount: -1,
      addItems: !0,
      addItemFilterFn: null,
      removeItems: !0,
      removeItemButton: !1,
      editItems: !1,
      duplicateItemsAllowed: !0,
      delimiter: ",",
      paste: !0,
      searchEnabled: !0,
      searchChoices: !0,
      searchFloor: 1,
      searchResultLimit: 4,
      searchFields: ["label", "value"],
      position: "auto",
      resetScrollPosition: !0,
      shouldSort: !0,
      shouldSortItems: !1,
      sortFn: function sortFn(e, t) {
        var i = ("" + (e.label || e.value)).toLowerCase(),
            n = ("" + (t.label || t.value)).toLowerCase();
        return i < n ? -1 : i > n ? 1 : 0;
      },
      placeholder: !0,
      placeholderValue: null,
      searchPlaceholderValue: null,
      prependValue: null,
      appendValue: null,
      renderSelectedChoices: "auto",
      loadingText: "Loading...",
      noResultsText: "No results found",
      noChoicesText: "No choices to choose from",
      itemSelectText: "Press to select",
      uniqueItemText: "Only unique values can be added",
      customAddItemText: "Only values matching specific conditions can be added",
      addItemText: function addItemText(e) {
        return 'Press Enter to add <b>"' + C(e) + '"</b>';
      },
      maxItemText: function maxItemText(e) {
        return "Only " + e + " values can be added";
      },
      itemComparer: function itemComparer(e, t) {
        return e === t;
      },
      fuseOptions: {
        includeScore: !0
      },
      callbackOnInit: null,
      callbackOnCreateTemplates: null,
      classNames: {
        containerOuter: "choices",
        containerInner: "choices__inner",
        input: "choices__input",
        inputCloned: "choices__input--cloned",
        list: "choices__list",
        listItems: "choices__list--multiple",
        listSingle: "choices__list--single",
        listDropdown: "choices__list--dropdown",
        item: "choices__item",
        itemSelectable: "choices__item--selectable",
        itemDisabled: "choices__item--disabled",
        itemChoice: "choices__item--choice",
        placeholder: "choices__placeholder",
        group: "choices__group",
        groupHeading: "choices__heading",
        button: "choices__button",
        activeState: "is-active",
        focusState: "is-focused",
        openState: "is-open",
        disabledState: "is-disabled",
        highlightedState: "is-highlighted",
        hiddenState: "is-hidden",
        flippedState: "is-flipped",
        loadingState: "is-loading",
        noResults: "has-no-results",
        noChoices: "has-no-choices"
      }
    },
        B = "showDropdown",
        V = "hideDropdown",
        H = "change",
        G = "choice",
        q = "search",
        W = "addItem",
        U = "removeItem",
        z = "highlightItem",
        X = "highlightChoice",
        Y = "ADD_CHOICE",
        $ = "FILTER_CHOICES",
        J = "ACTIVATE_CHOICES",
        Z = "CLEAR_CHOICES",
        Q = "ADD_GROUP",
        ee = "ADD_ITEM",
        te = "REMOVE_ITEM",
        ie = "HIGHLIGHT_ITEM",
        ne = 46,
        se = 8,
        re = 13,
        oe = 65,
        ae = 27,
        le = 38,
        ce = 40,
        he = 33,
        ue = 34,
        de = function () {
      function e(e) {
        var t = e.element;
        Object.assign(this, {
          element: t
        }), this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight, this.hasChildren = !!this.element.children;
      }

      var t = e.prototype;
      return t.clear = function () {
        this.element.innerHTML = "";
      }, t.append = function (e) {
        this.element.appendChild(e);
      }, t.getChild = function (e) {
        return this.element.querySelector(e);
      }, t.scrollToTop = function () {
        this.element.scrollTop = 0;
      }, t.scrollToChoice = function (e, t) {
        var i = this;

        if (e) {
          var n = this.element.offsetHeight,
              s = e.offsetHeight,
              r = e.offsetTop + s,
              o = this.element.scrollTop + n,
              a = t > 0 ? this.element.scrollTop + r - o : e.offsetTop;
          requestAnimationFrame(function (e) {
            i._animateScroll(e, a, t);
          });
        }
      }, t._scrollDown = function (e, t, i) {
        var n = (i - e) / t,
            s = n > 1 ? n : 1;
        this.element.scrollTop = e + s;
      }, t._scrollUp = function (e, t, i) {
        var n = (e - i) / t,
            s = n > 1 ? n : 1;
        this.element.scrollTop = e - s;
      }, t._animateScroll = function (e, t, i) {
        var n = this,
            s = this.element.scrollTop,
            r = !1;
        i > 0 ? (this._scrollDown(s, 4, t), s < t && (r = !0)) : (this._scrollUp(s, 4, t), s > t && (r = !0)), r && requestAnimationFrame(function () {
          n._animateScroll(e, t, i);
        });
      }, e;
    }();

    function pe(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var fe = function () {
      function e(e) {
        var t = e.element,
            i = e.classNames;
        if (Object.assign(this, {
          element: t,
          classNames: i
        }), !I(t)) throw new TypeError("Invalid element passed");
        this.isDisabled = !1;
      }

      var t,
          i,
          n,
          s = e.prototype;
      return s.conceal = function () {
        this.element.classList.add(this.classNames.input), this.element.classList.add(this.classNames.hiddenState), this.element.tabIndex = "-1";
        var e = this.element.getAttribute("style");
        e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("aria-hidden", "true"), this.element.setAttribute("data-choice", "active");
      }, s.reveal = function () {
        this.element.classList.remove(this.classNames.input), this.element.classList.remove(this.classNames.hiddenState), this.element.removeAttribute("tabindex");
        var e = this.element.getAttribute("data-choice-orig-style");
        e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("aria-hidden"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
      }, s.enable = function () {
        this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
      }, s.disable = function () {
        this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
      }, s.triggerEvent = function (e, t) {
        !function (e, t, i) {
          void 0 === i && (i = null);
          var n = new CustomEvent(t, {
            detail: i,
            bubbles: !0,
            cancelable: !0
          });
          e.dispatchEvent(n);
        }(this.element, e, t);
      }, t = e, (i = [{
        key: "value",
        get: function get() {
          return this.element.value;
        },
        set: function set(e) {
          this.element.value = e;
        }
      }]) && pe(t.prototype, i), n && pe(t, n), e;
    }();

    function me(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var ve = function (e) {
      var t, i, n, s, r;

      function o(t) {
        var i,
            n = t.element,
            s = t.classNames,
            r = t.delimiter;
        return (i = e.call(this, {
          element: n,
          classNames: s
        }) || this).delimiter = r, i;
      }

      return i = e, (t = o).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, n = o, (s = [{
        key: "value",
        set: function set(e) {
          var t = e.map(function (e) {
            return e.value;
          }).join(this.delimiter);
          this.element.setAttribute("value", t), this.element.value = t;
        },
        get: function get() {
          return this.element.value;
        }
      }]) && me(n.prototype, s), r && me(n, r), o;
    }(fe);

    function ge(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var _e = function (e) {
      var t, i, n, s, r;

      function o(t) {
        var i,
            n = t.element,
            s = t.classNames,
            r = t.template;
        return (i = e.call(this, {
          element: n,
          classNames: s
        }) || this).template = r, i;
      }

      return i = e, (t = o).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, o.prototype.appendDocFragment = function (e) {
        this.element.innerHTML = "", this.element.appendChild(e);
      }, n = o, (s = [{
        key: "placeholderOption",
        get: function get() {
          return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
        }
      }, {
        key: "optionGroups",
        get: function get() {
          return Array.from(this.element.getElementsByTagName("OPTGROUP"));
        }
      }, {
        key: "options",
        get: function get() {
          return Array.from(this.element.options);
        },
        set: function set(e) {
          var t = this,
              i = document.createDocumentFragment();
          e.forEach(function (e) {
            return n = e, s = t.template(n), void i.appendChild(s);
            var n, s;
          }), this.appendDocFragment(i);
        }
      }]) && ge(n.prototype, s), r && ge(n, r), o;
    }(fe),
        be = i(0),
        ye = i.n(be),
        Ee = {
      containerOuter: function containerOuter(e, t, i, n, s, r) {
        var o = n ? 'tabindex="0"' : "",
            a = i ? 'role="listbox"' : "",
            l = "";
        return i && s && (a = 'role="combobox"', l = 'aria-autocomplete="list"'), O('\n      <div\n        class="' + e.containerOuter + '"\n        data-type="' + r + '"\n        ' + a + "\n        " + o + "\n        " + l + '\n        aria-haspopup="true"\n        aria-expanded="false"\n        dir="' + t + '"\n        >\n      </div>\n    ');
      },
      containerInner: function containerInner(e) {
        return O('\n      <div class="' + e.containerInner + '"></div>\n    ');
      },
      itemList: function itemList(e, t) {
        var i,
            n = ye()(e.list, ((i = {})[e.listSingle] = t, i[e.listItems] = !t, i));
        return O('\n      <div class="' + n + '"></div>\n    ');
      },
      placeholder: function placeholder(e, t) {
        return O('\n      <div class="' + e.placeholder + '">\n        ' + t + "\n      </div>\n    ");
      },
      item: function item(e, t, i) {
        var n,
            s,
            r = t.active ? 'aria-selected="true"' : "",
            o = t.disabled ? 'aria-disabled="true"' : "",
            a = ye()(e.item, ((n = {})[e.highlightedState] = t.highlighted, n[e.itemSelectable] = !t.highlighted, n[e.placeholder] = t.placeholder, n));
        return i ? (a = ye()(e.item, ((s = {})[e.highlightedState] = t.highlighted, s[e.itemSelectable] = !t.disabled, s[e.placeholder] = t.placeholder, s)), O('\n        <div\n          class="' + a + '"\n          data-item\n          data-id="' + t.id + '"\n          data-value="' + t.value + "\"\n          data-custom-properties='" + t.customProperties + "'\n          data-deletable\n          " + r + "\n          " + o + "\n          >\n          " + t.label + '\x3c!--\n       --\x3e<button\n            type="button"\n            class="' + e.button + '"\n            data-button\n            aria-label="Remove item: \'' + t.value + "'\"\n            >\n            Remove item\n          </button>\n        </div>\n      ")) : O('\n      <div\n        class="' + a + '"\n        data-item\n        data-id="' + t.id + '"\n        data-value="' + t.value + '"\n        ' + r + "\n        " + o + "\n        >\n        " + t.label + "\n      </div>\n    ");
      },
      choiceList: function choiceList(e, t) {
        var i = t ? "" : 'aria-multiselectable="true"';
        return O('\n      <div\n        class="' + e.list + '"\n        dir="ltr"\n        role="listbox"\n        ' + i + "\n        >\n      </div>\n    ");
      },
      choiceGroup: function choiceGroup(e, t) {
        var i,
            n = t.disabled ? 'aria-disabled="true"' : "",
            s = ye()(e.group, ((i = {})[e.itemDisabled] = t.disabled, i));
        return O('\n      <div\n        class="' + s + '"\n        data-group\n        data-id="' + t.id + '"\n        data-value="' + t.value + '"\n        role="group"\n        ' + n + '\n        >\n        <div class="' + e.groupHeading + '">' + t.value + "</div>\n      </div>\n    ");
      },
      choice: function choice(e, t, i) {
        var n,
            s = t.groupId > 0 ? 'role="treeitem"' : 'role="option"',
            r = ye()(e.item, e.itemChoice, ((n = {})[e.itemDisabled] = t.disabled, n[e.itemSelectable] = !t.disabled, n[e.placeholder] = t.placeholder, n));
        return O('\n      <div\n        class="' + r + '"\n        data-select-text="' + i + '"\n        data-choice\n        data-id="' + t.id + '"\n        data-value="' + t.value + '"\n        ' + (t.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable") + '\n        id="' + t.elementId + '"\n        ' + s + "\n        >\n        " + t.label + "\n      </div>\n    ");
      },
      input: function input(e, t) {
        var i = ye()(e.input, e.inputCloned);
        return O('\n      <input\n        type="text"\n        class="' + i + '"\n        autocomplete="off"\n        autocapitalize="off"\n        spellcheck="false"\n        role="textbox"\n        aria-autocomplete="list"\n        aria-label="' + t + '"\n        >\n    ');
      },
      dropdown: function dropdown(e) {
        var t = ye()(e.list, e.listDropdown);
        return O('\n      <div\n        class="' + t + '"\n        aria-expanded="false"\n        >\n      </div>\n    ');
      },
      notice: function notice(e, t, i) {
        var n;
        void 0 === i && (i = "");
        var s = ye()(e.item, e.itemChoice, ((n = {})[e.noResults] = "no-results" === i, n[e.noChoices] = "no-choices" === i, n));
        return O('\n      <div class="' + s + '">\n        ' + t + "\n      </div>\n    ");
      },
      option: function option(e) {
        return O('\n      <option value="' + e.value + '" ' + (e.active ? "selected" : "") + " " + (e.disabled ? "disabled" : "") + " " + (e.customProperties ? "data-custom-properties=" + e.customProperties : "") + ">" + e.label + "</option>\n    ");
      }
    },
        Se = function Se(e) {
      return void 0 === e && (e = !0), {
        type: J,
        active: e
      };
    },
        Ie = function Ie(e, t) {
      return {
        type: ie,
        id: e,
        highlighted: t
      };
    },
        we = function we(e, t, i, n) {
      return {
        type: Q,
        value: e,
        id: t,
        active: i,
        disabled: n
      };
    },
        Ce = function () {
      function e(t, i) {
        var n = this;

        if (void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {}), S("String", t)) {
          var s = Array.from(document.querySelectorAll(t));
          if (s.length > 1) return this._generateInstances(s, i);
        }

        this.config = o.a.all([R, e.userDefaults, i], {
          arrayMerge: function arrayMerge(e, t) {
            return [].concat(t);
          }
        });
        var r = L(this.config, R);
        r.length && console.warn("Unknown config option(s) passed", r.join(", ")), ["auto", "always"].includes(this.config.renderSelectedChoices) || (this.config.renderSelectedChoices = "auto");
        var a = S("String", t) ? document.querySelector(t) : t;

        if (a) {
          if (this._isTextElement = "text" === a.type, this._isSelectOneElement = "select-one" === a.type, this._isSelectMultipleElement = "select-multiple" === a.type, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this._isTextElement ? this.passedElement = new ve({
            element: a,
            classNames: this.config.classNames,
            delimiter: this.config.delimiter
          }) : this._isSelectElement && (this.passedElement = new _e({
            element: a,
            classNames: this.config.classNames,
            template: function template(e) {
              return n.config.templates.option(e);
            }
          })), !this.passedElement) return console.error("Passed element was of an invalid type");
          this.initialised = !1, this._store = new F(this.render), this._initialState = {}, this._currentState = {}, this._prevState = {}, this._currentValue = "", this._canSearch = this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = y(this.passedElement.element, "choices-"), this._direction = this.passedElement.element.getAttribute("dir") || "ltr", this._idNames = {
            itemChoice: "item-choice"
          }, this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && (this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onAKey = this._onAKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.config.silent || (!0 === this.config.shouldSortItems && this._isSelectOneElement && console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false."), "active" === this.passedElement.element.getAttribute("data-choice") && console.warn("Trying to initialise Choices on element already initialised")), this.init();
        } else this.config.silent || console.error("Could not find passed element or passed element was of an invalid type");
      }

      var t = e.prototype;
      return t.init = function () {
        if (!this.initialised) {
          this._createTemplates(), this._createElements(), this._createStructure(), this._initialState = T(this._store.state), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
          var e = this.config.callbackOnInit;
          e && S("Function", e) && e.call(this);
        }
      }, t.destroy = function () {
        this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this._isSelectElement && (this.passedElement.options = this._presetChoices), this.clearStore(), this.config.templates = null, this.initialised = !1);
      }, t.enable = function () {
        return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
      }, t.disable = function () {
        return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
      }, t.highlightItem = function (e, t) {
        if (void 0 === t && (t = !0), !e) return this;
        var i = e.id,
            n = e.groupId,
            s = void 0 === n ? -1 : n,
            r = e.value,
            o = void 0 === r ? "" : r,
            a = e.label,
            l = void 0 === a ? "" : a,
            c = s >= 0 ? this._store.getGroupById(s) : null;
        return this._store.dispatch(Ie(i, !0)), t && this.passedElement.triggerEvent(z, {
          id: i,
          value: o,
          label: l,
          groupValue: c && c.value ? c.value : null
        }), this;
      }, t.unhighlightItem = function (e) {
        if (!e) return this;
        var t = e.id,
            i = e.groupId,
            n = void 0 === i ? -1 : i,
            s = e.value,
            r = void 0 === s ? "" : s,
            o = e.label,
            a = void 0 === o ? "" : o,
            l = n >= 0 ? this._store.getGroupById(n) : null;
        return this._store.dispatch(Ie(t, !1)), this.passedElement.triggerEvent(z, {
          id: t,
          value: r,
          label: a,
          groupValue: l && l.value ? l.value : null
        }), this;
      }, t.highlightAll = function () {
        var e = this;
        return this._store.items.forEach(function (t) {
          return e.highlightItem(t);
        }), this;
      }, t.unhighlightAll = function () {
        var e = this;
        return this._store.items.forEach(function (t) {
          return e.unhighlightItem(t);
        }), this;
      }, t.removeActiveItemsByValue = function (e) {
        var t = this;
        return this._store.activeItems.filter(function (t) {
          return t.value === e;
        }).forEach(function (e) {
          return t._removeItem(e);
        }), this;
      }, t.removeActiveItems = function (e) {
        var t = this;
        return this._store.activeItems.filter(function (t) {
          return t.id !== e;
        }).forEach(function (e) {
          return t._removeItem(e);
        }), this;
      }, t.removeHighlightedItems = function (e) {
        var t = this;
        return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach(function (i) {
          t._removeItem(i), e && t._triggerChange(i.value);
        }), this;
      }, t.showDropdown = function (e) {
        var t = this;
        return this.dropdown.isActive ? this : (requestAnimationFrame(function () {
          t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow()), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(B, {});
        }), this);
      }, t.hideDropdown = function (e) {
        var t = this;
        return this.dropdown.isActive ? (requestAnimationFrame(function () {
          t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(V, {});
        }), this) : this;
      }, t.getValue = function (e) {
        void 0 === e && (e = !1);

        var t = this._store.activeItems.reduce(function (t, i) {
          var n = e ? i.value : i;
          return t.push(n), t;
        }, []);

        return this._isSelectOneElement ? t[0] : t;
      }, t.setValue = function (e) {
        var t = this;
        return this.initialised ? ([].concat(e).forEach(function (e) {
          return t._setChoiceOrItem(e);
        }), this) : this;
      }, t.setChoiceByValue = function (e) {
        var t = this;
        return !this.initialised || this._isTextElement ? this : ((S("Array", e) ? e : [e]).forEach(function (e) {
          return t._findAndSelectChoiceByValue(e);
        }), this);
      }, t.setChoices = function (e, t, i, n) {
        var s = this;
        if (void 0 === e && (e = []), void 0 === t && (t = ""), void 0 === i && (i = ""), void 0 === n && (n = !1), !this._isSelectElement || !t) return this;
        n && this.clearChoices(), this.containerOuter.removeLoadingState();
        return this._setLoading(!0), e.forEach(function (e) {
          e.choices ? s._addGroup({
            group: e,
            id: e.id || null,
            valueKey: t,
            labelKey: i
          }) : s._addChoice({
            value: e[t],
            label: e[i],
            isSelected: e.selected,
            isDisabled: e.disabled,
            customProperties: e.customProperties,
            placeholder: e.placeholder
          });
        }), this._setLoading(!1), this;
      }, t.clearChoices = function () {
        this._store.dispatch({
          type: Z
        });
      }, t.clearStore = function () {
        return this._store.dispatch({
          type: "CLEAR_ALL"
        }), this;
      }, t.clearInput = function () {
        var e = !this._isSelectOneElement;
        return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch(Se(!0))), this;
      }, t.ajax = function (e) {
        var t = this;
        return this.initialised && this._isSelectElement && e ? (requestAnimationFrame(function () {
          return t._handleLoadingState(!0);
        }), e(this._ajaxCallback()), this) : this;
      }, t._render = function () {
        if (!this._store.isLoading()) {
          this._currentState = this._store.state;
          var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
              t = this._isSelectElement,
              i = this._currentState.items !== this._prevState.items;
          e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
        }
      }, t._renderChoices = function () {
        var e = this,
            t = this._store,
            i = t.activeGroups,
            n = t.activeChoices,
            s = document.createDocumentFragment();

        if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
          return e.choiceList.scrollToTop();
        }), i.length >= 1 && !this._isSearching) {
          var r = n.filter(function (e) {
            return !0 === e.placeholder && -1 === e.groupId;
          });
          r.length >= 1 && (s = this._createChoicesFragment(r, s)), s = this._createGroupsFragment(i, n, s);
        } else n.length >= 1 && (s = this._createChoicesFragment(n, s));

        if (s.childNodes && s.childNodes.length > 0) {
          var o = this._store.activeItems,
              a = this._canAddItem(o, this.input.value);

          a.response ? (this.choiceList.append(s), this._highlightChoice()) : this.choiceList.append(this._getTemplate("notice", a.notice));
        } else {
          var l, c;
          this._isSearching ? (c = S("Function", this.config.noResultsText) ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = S("Function", this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l);
        }
      }, t._renderItems = function () {
        var e = this._store.activeItems || [];
        this.itemList.clear();

        var t = this._createItemsFragment(e);

        t.childNodes && this.itemList.append(t);
      }, t._createGroupsFragment = function (e, t, i) {
        var n = this,
            s = i || document.createDocumentFragment();
        return this.config.shouldSort && e.sort(this.config.sortFn), e.forEach(function (e) {
          var i = function (e) {
            return t.filter(function (t) {
              return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
            });
          }(e);

          if (i.length >= 1) {
            var r = n._getTemplate("choiceGroup", e);

            s.appendChild(r), n._createChoicesFragment(i, s, !0);
          }
        }), s;
      }, t._createChoicesFragment = function (e, t, i) {
        var n = this;
        void 0 === i && (i = !1);

        var s = t || document.createDocumentFragment(),
            r = this.config,
            o = r.renderSelectedChoices,
            a = r.searchResultLimit,
            l = r.renderChoiceLimit,
            c = this._isSearching ? A : this.config.sortFn,
            h = function h(e) {
          if ("auto" !== o || n._isSelectOneElement || !e.selected) {
            var t = n._getTemplate("choice", e, n.config.itemSelectText);

            s.appendChild(t);
          }
        },
            u = e;

        "auto" !== o || this._isSelectOneElement || (u = e.filter(function (e) {
          return !e.selected;
        }));
        var d = u.reduce(function (e, t) {
          return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
        }, {
          placeholderChoices: [],
          normalChoices: []
        }),
            p = d.placeholderChoices,
            f = d.normalChoices;
        (this.config.shouldSort || this._isSearching) && f.sort(c);
        var m = u.length,
            v = [].concat(p, f);
        this._isSearching ? m = a : l > 0 && !i && (m = l);

        for (var g = 0; g < m; g += 1) {
          v[g] && h(v[g]);
        }

        return s;
      }, t._createItemsFragment = function (e, t) {
        var i = this;
        void 0 === t && (t = null);
        var n = this.config,
            s = n.shouldSortItems,
            r = n.sortFn,
            o = n.removeItemButton,
            a = t || document.createDocumentFragment();
        s && !this._isSelectOneElement && e.sort(r), this._isTextElement ? this.passedElement.value = e : this.passedElement.options = e;
        return e.forEach(function (e) {
          return function (e) {
            var t = i._getTemplate("item", e, o);

            a.appendChild(t);
          }(e);
        }), a;
      }, t._triggerChange = function (e) {
        null != e && this.passedElement.triggerEvent(H, {
          value: e
        });
      }, t._selectPlaceholderChoice = function () {
        var e = this._store.placeholderChoice;
        e && (this._addItem({
          value: e.value,
          label: e.label,
          choiceId: e.id,
          groupId: e.groupId,
          placeholder: e.placeholder
        }), this._triggerChange(e.value));
      }, t._handleButtonAction = function (e, t) {
        if (e && t && this.config.removeItems && this.config.removeItemButton) {
          var i = t.parentNode.getAttribute("data-id"),
              n = e.find(function (e) {
            return e.id === parseInt(i, 10);
          });
          this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._selectPlaceholderChoice();
        }
      }, t._handleItemAction = function (e, t, i) {
        var n = this;

        if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
          var s = t.getAttribute("data-id");
          e.forEach(function (e) {
            e.id !== parseInt(s, 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
          }), this.input.focus();
        }
      }, t._handleChoiceAction = function (e, t) {
        if (e && t) {
          var i = t.getAttribute("data-id"),
              n = this._store.getChoiceById(i),
              s = e[0] && e[0].keyCode ? e[0].keyCode : null,
              r = this.dropdown.isActive;

          if (n.keyCode = s, this.passedElement.triggerEvent(G, {
            choice: n
          }), n && !n.selected && !n.disabled) this._canAddItem(e, n.value).response && (this._addItem({
            value: n.value,
            label: n.label,
            choiceId: n.id,
            groupId: n.groupId,
            customProperties: n.customProperties,
            placeholder: n.placeholder,
            keyCode: n.keyCode
          }), this._triggerChange(n.value));
          this.clearInput(), r && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
        }
      }, t._handleBackspace = function (e) {
        if (this.config.removeItems && e) {
          var t = e[e.length - 1],
              i = e.some(function (e) {
            return e.highlighted;
          });
          this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
        }
      }, t._setLoading = function (e) {
        this._store.dispatch(function (e) {
          return {
            type: "SET_IS_LOADING",
            isLoading: e
          };
        }(e));
      }, t._handleLoadingState = function (e) {
        void 0 === e && (e = !0);
        var t = this.itemList.getChild("." + this.config.classNames.placeholder);
        e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText), this.itemList.append(t)) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t.innerHTML = this._placeholderValue || "" : this.input.placeholder = this._placeholderValue || "");
      }, t._handleSearch = function (e) {
        if (e && this.input.isFocussed) {
          var t = this._store.choices,
              i = this.config,
              n = i.searchFloor,
              s = i.searchChoices,
              r = t.some(function (e) {
            return !e.active;
          });

          if (e && e.length >= n) {
            var o = s ? this._searchChoices(e) : 0;
            this.passedElement.triggerEvent(q, {
              value: e,
              resultCount: o
            });
          } else r && (this._isSearching = !1, this._store.dispatch(Se(!0)));
        }
      }, t._canAddItem = function (e, t) {
        var i = !0,
            n = S("Function", this.config.addItemText) ? this.config.addItemText(t) : this.config.addItemText;

        if (!this._isSelectOneElement) {
          var s = function (e, t, i) {
            return void 0 === i && (i = "value"), e.some(function (e) {
              return S("String", t) ? e[i] === t.trim() : e[i] === t;
            });
          }(e, t);

          this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = S("Function", this.config.maxItemText) ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && s && i && (i = !1, n = S("Function", this.config.uniqueItemText) ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && S("Function", this.config.addItemFilterFn) && !this.config.addItemFilterFn(t) && (i = !1, n = S("Function", this.config.customAddItemText) ? this.config.customAddItemText(t) : this.config.customAddItemText);
        }

        return {
          response: i,
          notice: n
        };
      }, t._ajaxCallback = function () {
        var e = this;
        return function (t, i, n) {
          if (t && i) {
            var s = S("Object", t) ? [t] : t;
            s && S("Array", s) && s.length ? (e._handleLoadingState(!1), e._setLoading(!0), s.forEach(function (t) {
              t.choices ? e._addGroup({
                group: t,
                id: t.id || null,
                valueKey: i,
                labelKey: n
              }) : e._addChoice({
                value: x(t, i),
                label: x(t, n),
                isSelected: t.selected,
                isDisabled: t.disabled,
                customProperties: t.customProperties,
                placeholder: t.placeholder
              });
            }), e._setLoading(!1), e._isSelectOneElement && e._selectPlaceholderChoice()) : e._handleLoadingState(!1);
          }
        };
      }, t._searchChoices = function (e) {
        var t = S("String", e) ? e.trim() : e,
            i = S("String", this._currentValue) ? this._currentValue.trim() : this._currentValue;
        if (t.length < 1 && t === i + " ") return 0;
        var n = this._store.searchableChoices,
            r = t,
            o = [].concat(this.config.searchFields),
            a = Object.assign(this.config.fuseOptions, {
          keys: o
        }),
            l = new s.a(n, a).search(r);
        return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch(function (e) {
          return {
            type: $,
            results: e
          };
        }(l)), l.length;
      }, t._addEventListeners = function () {
        window.delegateEvent.add("keyup", this._onKeyUp), window.delegateEvent.add("keydown", this._onKeyDown), window.delegateEvent.add("click", this._onClick), window.delegateEvent.add("touchmove", this._onTouchMove), window.delegateEvent.add("touchend", this._onTouchEnd), window.delegateEvent.add("mousedown", this._onMouseDown), window.delegateEvent.add("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus), this.containerOuter.element.addEventListener("blur", this._onBlur)), this.input.element.addEventListener("focus", this._onFocus), this.input.element.addEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset), this.input.addEventListeners();
      }, t._removeEventListeners = function () {
        window.delegateEvent.remove("keyup", this._onKeyUp), window.delegateEvent.remove("keydown", this._onKeyDown), window.delegateEvent.remove("click", this._onClick), window.delegateEvent.remove("touchmove", this._onTouchMove), window.delegateEvent.remove("touchend", this._onTouchEnd), window.delegateEvent.remove("mousedown", this._onMouseDown), window.delegateEvent.remove("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
      }, t._onKeyDown = function (e) {
        var t,
            i = e.target,
            n = e.keyCode,
            s = e.ctrlKey,
            r = e.metaKey;

        if (i === this.input.element || this.containerOuter.element.contains(i)) {
          var o = this._store.activeItems,
              a = this.input.isFocussed,
              l = this.dropdown.isActive,
              c = this.itemList.hasChildren,
              h = String.fromCharCode(n),
              u = ne,
              d = se,
              p = re,
              f = oe,
              m = ae,
              v = le,
              g = ce,
              _ = he,
              b = ue,
              y = s || r;
          !this._isTextElement && /[a-zA-Z0-9-_ ]/.test(h) && this.showDropdown();
          var E = ((t = {})[f] = this._onAKey, t[p] = this._onEnterKey, t[m] = this._onEscapeKey, t[v] = this._onDirectionKey, t[_] = this._onDirectionKey, t[g] = this._onDirectionKey, t[b] = this._onDirectionKey, t[d] = this._onDeleteKey, t[u] = this._onDeleteKey, t);
          E[n] && E[n]({
            event: e,
            target: i,
            keyCode: n,
            metaKey: r,
            activeItems: o,
            hasFocusedInput: a,
            hasActiveDropdown: l,
            hasItems: c,
            hasCtrlDownKeyPressed: y
          });
        }
      }, t._onKeyUp = function (e) {
        var t = e.target,
            i = e.keyCode;

        if (t === this.input.element) {
          var n = this.input.value,
              s = this._store.activeItems,
              r = this._canAddItem(s, n),
              o = ne,
              a = se;

          if (this._isTextElement) {
            if (r.notice && n) {
              var l = this._getTemplate("notice", r.notice);

              this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0);
            } else this.hideDropdown(!0);
          } else {
            var c = (i === o || i === a) && !t.value,
                h = !this._isTextElement && this._isSearching,
                u = this._canSearch && r.response;
            c && h ? (this._isSearching = !1, this._store.dispatch(Se(!0))) : u && this._handleSearch(this.input.value);
          }

          this._canSearch = this.config.searchEnabled;
        }
      }, t._onAKey = function (e) {
        var t = e.hasItems;
        e.hasCtrlDownKeyPressed && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
      }, t._onEnterKey = function (e) {
        var t = e.event,
            i = e.target,
            n = e.activeItems,
            s = e.hasActiveDropdown,
            r = re,
            o = i.hasAttribute("data-button");

        if (this._isTextElement && i.value) {
          var a = this.input.value;
          this._canAddItem(n, a).response && (this.hideDropdown(!0), this._addItem({
            value: a
          }), this._triggerChange(a), this.clearInput());
        }

        if (o && (this._handleButtonAction(n, i), t.preventDefault()), s) {
          var l = this.dropdown.getChild("." + this.config.classNames.highlightedState);
          l && (n[0] && (n[0].keyCode = r), this._handleChoiceAction(n, l)), t.preventDefault();
        } else this._isSelectOneElement && (this.showDropdown(), t.preventDefault());
      }, t._onEscapeKey = function (e) {
        e.hasActiveDropdown && (this.hideDropdown(!0), this.containerOuter.focus());
      }, t._onDirectionKey = function (e) {
        var t = e.event,
            i = e.hasActiveDropdown,
            n = e.keyCode,
            s = e.metaKey,
            r = ce,
            o = he,
            a = ue;

        if (i || this._isSelectOneElement) {
          this.showDropdown(), this._canSearch = !1;
          var l,
              c = n === r || n === a ? 1 : -1;
          if (s || n === a || n === o) l = c > 0 ? Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]")).pop() : this.dropdown.element.querySelector("[data-choice-selectable]");else {
            var h = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
            l = h ? function (e, t, i) {
              if (void 0 === i && (i = 1), e && t) {
                var n = e.parentNode.parentNode,
                    s = Array.from(n.querySelectorAll(t)),
                    r = s.indexOf(e);
                return s[r + (i > 0 ? 1 : -1)];
              }
            }(h, "[data-choice-selectable]", c) : this.dropdown.element.querySelector("[data-choice-selectable]");
          }
          l && (function (e, t, i) {
            if (void 0 === i && (i = 1), e) return i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop;
          }(l, this.choiceList.element, c) || this.choiceList.scrollToChoice(l, c), this._highlightChoice(l)), t.preventDefault();
        }
      }, t._onDeleteKey = function (e) {
        var t = e.event,
            i = e.target,
            n = e.hasFocusedInput,
            s = e.activeItems;
        !n || i.value || this._isSelectOneElement || (this._handleBackspace(s), t.preventDefault());
      }, t._onTouchMove = function () {
        this._wasTap && (this._wasTap = !1);
      }, t._onTouchEnd = function (e) {
        var t = (e || e.touches[0]).target;
        this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation());
        this._wasTap = !0;
      }, t._onMouseDown = function (e) {
        var t = e.target,
            i = e.shiftKey;

        if (this.choiceList.element.contains(t) && navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/) && (this._isScrollingOnIe = !0), this.containerOuter.element.contains(t) && t !== this.input.element) {
          var n = this._store.activeItems,
              s = i,
              r = w(t, "data-button"),
              o = w(t, "data-item"),
              a = w(t, "data-choice");
          r ? this._handleButtonAction(n, r) : o ? this._handleItemAction(n, o, s) : a && this._handleChoiceAction(n, a), e.preventDefault();
        }
      }, t._onMouseOver = function (e) {
        var t = e.target;
        (t === this.dropdown || this.dropdown.element.contains(t)) && t.hasAttribute("data-choice") && this._highlightChoice(t);
      }, t._onClick = function (e) {
        var t = e.target;
        this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
      }, t._onFocus = function (e) {
        var t = this,
            i = e.target;
        this.containerOuter.element.contains(i) && {
          text: function text() {
            i === t.input.element && t.containerOuter.addFocusState();
          },
          "select-one": function selectOne() {
            t.containerOuter.addFocusState(), i === t.input.element && t.showDropdown(!0);
          },
          "select-multiple": function selectMultiple() {
            i === t.input.element && (t.showDropdown(!0), t.containerOuter.addFocusState());
          }
        }[this.passedElement.element.type]();
      }, t._onBlur = function (e) {
        var t = this,
            i = e.target;

        if (this.containerOuter.element.contains(i) && !this._isScrollingOnIe) {
          var n = this._store.activeItems.some(function (e) {
            return e.highlighted;
          });

          ({
            text: function text() {
              i === t.input.element && (t.containerOuter.removeFocusState(), n && t.unhighlightAll(), t.hideDropdown(!0));
            },
            "select-one": function selectOne() {
              t.containerOuter.removeFocusState(), (i === t.input.element || i === t.containerOuter.element && !t._canSearch) && t.hideDropdown(!0);
            },
            "select-multiple": function selectMultiple() {
              i === t.input.element && (t.containerOuter.removeFocusState(), t.hideDropdown(!0), n && t.unhighlightAll());
            }
          })[this.passedElement.element.type]();
        } else this._isScrollingOnIe = !1, this.input.element.focus();
      }, t._onFormReset = function () {
        this._store.dispatch({
          type: "RESET_TO",
          state: this._initialState
        });
      }, t._highlightChoice = function (e) {
        var t = this;
        void 0 === e && (e = null);
        var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));

        if (i.length) {
          var n = e;
          Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)).forEach(function (e) {
            e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
          }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(X, {
            el: n
          }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
        }
      }, t._addItem = function (e) {
        var t = e.value,
            i = e.label,
            n = void 0 === i ? null : i,
            s = e.choiceId,
            r = void 0 === s ? -1 : s,
            o = e.groupId,
            a = void 0 === o ? -1 : o,
            l = e.customProperties,
            c = void 0 === l ? null : l,
            h = e.placeholder,
            u = void 0 !== h && h,
            d = e.keyCode,
            p = void 0 === d ? null : d,
            f = S("String", t) ? t.trim() : t,
            m = p,
            v = c,
            g = this._store.items,
            _ = n || f,
            b = parseInt(r, 10) || -1,
            y = a >= 0 ? this._store.getGroupById(a) : null,
            E = g ? g.length + 1 : 1;

        return this.config.prependValue && (f = this.config.prependValue + f.toString()), this.config.appendValue && (f += this.config.appendValue.toString()), this._store.dispatch(function (e) {
          var t = e.value,
              i = e.label,
              n = e.id,
              s = e.choiceId,
              r = e.groupId,
              o = e.customProperties,
              a = e.placeholder,
              l = e.keyCode;
          return {
            type: ee,
            value: t,
            label: i,
            id: n,
            choiceId: s,
            groupId: r,
            customProperties: o,
            placeholder: a,
            keyCode: l
          };
        }({
          value: f,
          label: _,
          id: E,
          choiceId: b,
          groupId: a,
          customProperties: c,
          placeholder: u,
          keyCode: m
        })), this._isSelectOneElement && this.removeActiveItems(E), this.passedElement.triggerEvent(W, {
          id: E,
          value: f,
          label: _,
          customProperties: v,
          groupValue: y && y.value ? y.value : void 0,
          keyCode: m
        }), this;
      }, t._removeItem = function (e) {
        if (!e || !S("Object", e)) return this;
        var t = e.id,
            i = e.value,
            n = e.label,
            s = e.choiceId,
            r = e.groupId,
            o = r >= 0 ? this._store.getGroupById(r) : null;
        return this._store.dispatch(function (e, t) {
          return {
            type: te,
            id: e,
            choiceId: t
          };
        }(t, s)), o && o.value ? this.passedElement.triggerEvent(U, {
          id: t,
          value: i,
          label: n,
          groupValue: o.value
        }) : this.passedElement.triggerEvent(U, {
          id: t,
          value: i,
          label: n
        }), this;
      }, t._addChoice = function (e) {
        var t = e.value,
            i = e.label,
            n = void 0 === i ? null : i,
            s = e.isSelected,
            r = void 0 !== s && s,
            o = e.isDisabled,
            a = void 0 !== o && o,
            l = e.groupId,
            c = void 0 === l ? -1 : l,
            h = e.customProperties,
            u = void 0 === h ? null : h,
            d = e.placeholder,
            p = void 0 !== d && d,
            f = e.keyCode,
            m = void 0 === f ? null : f;

        if (null != t) {
          var v = this._store.choices,
              g = n || t,
              _ = v ? v.length + 1 : 1,
              b = this._baseId + "-" + this._idNames.itemChoice + "-" + _;

          this._store.dispatch(function (e) {
            var t = e.value,
                i = e.label,
                n = e.id,
                s = e.groupId,
                r = e.disabled,
                o = e.elementId,
                a = e.customProperties,
                l = e.placeholder,
                c = e.keyCode;
            return {
              type: Y,
              value: t,
              label: i,
              id: n,
              groupId: s,
              disabled: r,
              elementId: o,
              customProperties: a,
              placeholder: l,
              keyCode: c
            };
          }({
            value: t,
            label: g,
            id: _,
            groupId: c,
            disabled: a,
            elementId: b,
            customProperties: u,
            placeholder: p,
            keyCode: m
          })), r && this._addItem({
            value: t,
            label: g,
            choiceId: _,
            customProperties: u,
            placeholder: p,
            keyCode: m
          });
        }
      }, t._addGroup = function (e) {
        var t = this,
            i = e.group,
            n = e.id,
            s = e.valueKey,
            r = void 0 === s ? "value" : s,
            o = e.labelKey,
            a = void 0 === o ? "label" : o,
            l = S("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
            c = n || Math.floor(new Date().valueOf() * Math.random()),
            h = !!i.disabled && i.disabled;

        if (l) {
          this._store.dispatch(we(i.label, c, !0, h));

          l.forEach(function (e) {
            var i = e.disabled || e.parentNode && e.parentNode.disabled;

            t._addChoice({
              value: e[r],
              label: S("Object", e) ? e[a] : e.innerHTML,
              isSelected: e.selected,
              isDisabled: i,
              groupId: c,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            });
          });
        } else this._store.dispatch(we(i.label, i.id, !1, i.disabled));
      }, t._getTemplate = function (e) {
        var t;
        if (!e) return null;

        for (var i = this.config, n = i.templates, s = i.classNames, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {
          o[a - 1] = arguments[a];
        }

        return (t = n[e]).call.apply(t, [this, s].concat(o));
      }, t._createTemplates = function () {
        var e = this.config.callbackOnCreateTemplates,
            t = {};
        e && S("Function", e) && (t = e.call(this, O)), this.config.templates = o()(Ee, t);
      }, t._createElements = function () {
        this.containerOuter = new M({
          element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
          classNames: this.config.classNames,
          type: this.passedElement.element.type,
          position: this.config.position
        }), this.containerInner = new M({
          element: this._getTemplate("containerInner"),
          classNames: this.config.classNames,
          type: this.passedElement.element.type,
          position: this.config.position
        }), this.input = new K({
          element: this._getTemplate("input", this._placeholderValue),
          classNames: this.config.classNames,
          type: this.passedElement.element.type
        }), this.choiceList = new de({
          element: this._getTemplate("choiceList", this._isSelectOneElement)
        }), this.itemList = new de({
          element: this._getTemplate("itemList", this._isSelectOneElement)
        }), this.dropdown = new j({
          element: this._getTemplate("dropdown"),
          classNames: this.config.classNames,
          type: this.passedElement.element.type
        });
      }, t._createStructure = function () {
        this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth(!0)), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement ? this._addPredefinedChoices() : this._isTextElement && this._addPredefinedItems();
      }, t._addPredefinedChoices = function () {
        var e = this,
            t = this.passedElement.optionGroups;

        if (this._highlightPosition = 0, this._isSearching = !1, this._setLoading(!0), t && t.length) {
          var i = this.passedElement.placeholderOption;
          i && "SELECT" === i.parentNode.tagName && this._addChoice({
            value: i.value,
            label: i.innerHTML,
            isSelected: i.selected,
            isDisabled: i.disabled,
            placeholder: !0
          }), t.forEach(function (t) {
            return e._addGroup({
              group: t,
              id: t.id || null
            });
          });
        } else {
          var n = this.passedElement.options,
              s = this.config.sortFn,
              r = this._presetChoices;
          n.forEach(function (e) {
            r.push({
              value: e.value,
              label: e.innerHTML,
              selected: e.selected,
              disabled: e.disabled || e.parentNode.disabled,
              placeholder: e.hasAttribute("placeholder"),
              customProperties: e.getAttribute("data-custom-properties")
            });
          }), this.config.shouldSort && r.sort(s);
          var o = r.some(function (e) {
            return e.selected;
          });
          r.forEach(function (t, i) {
            return function (t, i) {
              var n = t.value,
                  s = t.label,
                  r = t.customProperties,
                  a = t.placeholder;
              if (e._isSelectElement) {
                if (t.choices) e._addGroup({
                  group: t,
                  id: t.id || null
                });else {
                  var l = e._isSelectOneElement && !o && 0 === i,
                      c = !!l || t.selected,
                      h = !l && t.disabled;

                  e._addChoice({
                    value: n,
                    label: s,
                    isSelected: c,
                    isDisabled: h,
                    customProperties: r,
                    placeholder: a
                  });
                }
              } else e._addChoice({
                value: n,
                label: s,
                isSelected: t.selected,
                isDisabled: t.disabled,
                customProperties: r,
                placeholder: a
              });
            }(t, i);
          });
        }

        this._setLoading(!1);
      }, t._addPredefinedItems = function () {
        var e = this;

        this._presetItems.forEach(function (t) {
          return function (t) {
            var i = E(t);
            "Object" === i && t.value ? e._addItem({
              value: t.value,
              label: t.label,
              choiceId: t.id,
              customProperties: t.customProperties,
              placeholder: t.placeholder
            }) : "String" === i && e._addItem({
              value: t
            });
          }(t);
        });
      }, t._setChoiceOrItem = function (e) {
        var t = this;
        ({
          object: function object() {
            e.value && (t._isTextElement ? t._addItem({
              value: e.value,
              label: e.label,
              choiceId: e.id,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            }) : t._addChoice({
              value: e.value,
              label: e.label,
              isSelected: !0,
              isDisabled: !1,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            }));
          },
          string: function string() {
            t._isTextElement ? t._addItem({
              value: e
            }) : t._addChoice({
              value: e,
              label: e,
              isSelected: !0,
              isDisabled: !1
            });
          }
        })[E(e).toLowerCase()]();
      }, t._findAndSelectChoiceByValue = function (e) {
        var t = this,
            i = this._store.choices.find(function (i) {
          return t.config.itemComparer(i.value, e);
        });

        i && !i.selected && this._addItem({
          value: i.value,
          label: i.label,
          choiceId: i.id,
          groupId: i.groupId,
          customProperties: i.customProperties,
          placeholder: i.placeholder,
          keyCode: i.keyCode
        });
      }, t._generateInstances = function (t, i) {
        return t.reduce(function (t, n) {
          return t.push(new e(n, i)), t;
        }, [this]);
      }, t._generatePlaceholderValue = function () {
        return !this._isSelectOneElement && !!this.config.placeholder && (this.config.placeholderValue || this.passedElement.element.getAttribute("placeholder"));
      }, e;
    }();

    Ce.userDefaults = {};
    t.default = Ce;
  }]).default;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/mapbox-gl/dist/mapbox-gl.js":
/*!**************************************************!*\
  !*** ./node_modules/mapbox-gl/dist/mapbox-gl.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Mapbox GL JS is licensed under the 3-Clause BSD License. Full text of license: https://github.com/mapbox/mapbox-gl-js/blob/v1.6.1/LICENSE.txt */
(function (global, factory) {
 true ? module.exports = factory() :
undefined;
}(this, (function () { 'use strict';

/* eslint-disable */

var shared, worker, mapboxgl;
// define gets called three times: one for each chunk. we rely on the order
// they're imported to know which is which
function define(_, chunk) {
if (!shared) {
    shared = chunk;
} else if (!worker) {
    worker = chunk;
} else {
    var workerBundleString = 'var sharedChunk = {}; (' + shared + ')(sharedChunk); (' + worker + ')(sharedChunk);'

    var sharedChunk = {};
    shared(sharedChunk);
    mapboxgl = chunk(sharedChunk);
    mapboxgl.workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
}
}


define(["exports"],(function(t){"use strict";function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=n;function n(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=n,this.p2x=r,this.p2y=n;}n.prototype.sampleCurveX=function(t){return ((this.ax*t+this.bx)*t+this.cx)*t},n.prototype.sampleCurveY=function(t){return ((this.ay*t+this.by)*t+this.cy)*t},n.prototype.sampleCurveDerivativeX=function(t){return (3*this.ax*t+2*this.bx)*t+this.cx},n.prototype.solveCurveX=function(t,e){var r,n,i,a,o;for(void 0===e&&(e=1e-6),i=t,o=0;o<8;o++){if(a=this.sampleCurveX(i)-t,Math.abs(a)<e)return i;var s=this.sampleCurveDerivativeX(i);if(Math.abs(s)<1e-6)break;i-=a/s;}if((i=t)<(r=0))return r;if(i>(n=1))return n;for(;r<n;){if(a=this.sampleCurveX(i),Math.abs(a-t)<e)return i;t>a?r=i:n=i,i=.5*(n-r)+r;}return i},n.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))};var i=a;function a(t,e){this.x=t,this.y=e;}function o(t,e){if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return !1;for(var r=0;r<t.length;r++)if(!o(t[r],e[r]))return !1;return !0}if("object"==typeof t&&null!==t&&null!==e){if("object"!=typeof e)return !1;if(Object.keys(t).length!==Object.keys(e).length)return !1;for(var n in t)if(!o(t[n],e[n]))return !1;return !0}return t===e}function s(t,e,n,i){var a=new r(t,e,n,i);return function(t){return a.solve(t)}}a.prototype={clone:function(){return new a(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,r=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=r,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=e*this.x-r*this.y,i=r*this.x+e*this.y;return this.x=n,this.y=i,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.x+r*(this.x-e.x)-n*(this.y-e.y),a=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=i,this.y=a,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},a.convert=function(t){return t instanceof a?t:Array.isArray(t)?new a(t[0],t[1]):t};var u=s(.25,.1,.25,1);function l(t,e,r){return Math.min(r,Math.max(e,t))}function p(t,e,r){var n=r-e,i=((t-e)%n+n)%n+e;return i===e?r:i}function c(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var a=i[n];for(var o in a)t[o]=a[o];}return t}var h=1;function f(){return h++}function y(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}function d(t){return !!t&&/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)}function m(t,e){t.forEach((function(t){e[t]&&(e[t]=e[t].bind(e));}));}function v(t,e){return -1!==t.indexOf(e,t.length-e.length)}function g(t,e,r){var n={};for(var i in t)n[i]=e.call(r||this,t[i],i,t);return n}function x(t,e,r){var n={};for(var i in t)e.call(r||this,t[i],i,t)&&(n[i]=t[i]);return n}function b(t){return Array.isArray(t)?t.map(b):"object"==typeof t&&t?g(t,b):t}var _={};function w(t){_[t]||("undefined"!=typeof console&&console.warn(t),_[t]=!0);}function A(t,e,r){return (r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function S(t){for(var e=0,r=0,n=t.length,i=n-1,a=void 0,o=void 0;r<n;i=r++)a=t[r],e+=((o=t[i]).x-a.x)*(a.y+o.y);return e}function k(){return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function I(t){var e={};if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,(function(t,r,n,i){var a=n||i;return e[r]=!a||a.toLowerCase(),""})),e["max-age"]){var r=parseInt(e["max-age"],10);isNaN(r)?delete e["max-age"]:e["max-age"]=r;}return e}var z=null;function C(t){if(null==z){var e=t.navigator?t.navigator.userAgent:null;z=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")));}return z}function B(t){try{var e=self[t];return e.setItem("_mapbox_test_",1),e.removeItem("_mapbox_test_"),!0}catch(t){return !1}}var T,P,E,M,V=self.performance&&self.performance.now?self.performance.now.bind(self.performance):Date.now.bind(Date),F=self.requestAnimationFrame||self.mozRequestAnimationFrame||self.webkitRequestAnimationFrame||self.msRequestAnimationFrame,L=self.cancelAnimationFrame||self.mozCancelAnimationFrame||self.webkitCancelAnimationFrame||self.msCancelAnimationFrame,O={now:V,frame:function(t){var e=F(t);return {cancel:function(){return L(e)}}},getImageData:function(t,e){void 0===e&&(e=0);var r=self.document.createElement("canvas"),n=r.getContext("2d");if(!n)throw new Error("failed to create canvas 2d context");return r.width=t.width,r.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(-e,-e,t.width+2*e,t.height+2*e)},resolveURL:function(t){return T||(T=self.document.createElement("a")),T.href=t,T.href},hardwareConcurrency:self.navigator.hardwareConcurrency||4,get devicePixelRatio(){return self.devicePixelRatio},get prefersReducedMotion(){return !!self.matchMedia&&(null==P&&(P=self.matchMedia("(prefers-reduced-motion: reduce)")),P.matches)}},D={API_URL:"https://api.mapbox.com",get EVENTS_URL(){return this.API_URL?0===this.API_URL.indexOf("https://api.mapbox.cn")?"https://events.mapbox.cn/events/v2":0===this.API_URL.indexOf("https://api.mapbox.com")?"https://events.mapbox.com/events/v2":null:null},FEEDBACK_URL:"https://apps.mapbox.com/feedback",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null,MAX_PARALLEL_IMAGE_REQUESTS:16},R={supported:!1,testSupport:function(t){if(U||!M)return;j?q(t):E=t;}},U=!1,j=!1;function q(t){var e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e);try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,M),t.isContextLost())return;R.supported=!0;}catch(t){}t.deleteTexture(e),U=!0;}self.document&&((M=self.document.createElement("img")).onload=function(){E&&q(E),E=null,j=!0;},M.onerror=function(){U=!0,E=null;},M.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=");var N="01";var K=function(t,e){this._transformRequestFn=t,this._customAccessToken=e,this._createSkuToken();};function X(t){return 0===t.indexOf("mapbox:")}K.prototype._createSkuToken=function(){var t=function(){for(var t="",e=0;e<10;e++)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())];return {token:["1",N,t].join(""),tokenExpiresAt:Date.now()+432e5}}();this._skuToken=t.token,this._skuTokenExpiresAt=t.tokenExpiresAt;},K.prototype._isSkuTokenExpired=function(){return Date.now()>this._skuTokenExpiresAt},K.prototype.transformRequest=function(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}},K.prototype.normalizeStyleURL=function(t,e){if(!X(t))return t;var r=H(t);return r.path="/styles/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},K.prototype.normalizeGlyphsURL=function(t,e){if(!X(t))return t;var r=H(t);return r.path="/fonts/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},K.prototype.normalizeSourceURL=function(t,e){if(!X(t))return t;var r=H(t);return r.path="/v4/"+r.authority+".json",r.params.push("secure"),this._makeAPIURL(r,this._customAccessToken||e)},K.prototype.normalizeSpriteURL=function(t,e,r,n){var i=H(t);return X(t)?(i.path="/styles/v1"+i.path+"/sprite"+e+r,this._makeAPIURL(i,this._customAccessToken||n)):(i.path+=""+e+r,Y(i))},K.prototype.normalizeTileURL=function(t,e,r){if(this._isSkuTokenExpired()&&this._createSkuToken(),!e||!X(e))return t;var n=H(t),i=O.devicePixelRatio>=2||512===r?"@2x":"",a=R.supported?".webp":"$1";return n.path=n.path.replace(/(\.(png|jpg)\d*)(?=$)/,""+i+a),n.path=n.path.replace(/^.+\/v4\//,"/"),n.path="/v4"+n.path,D.REQUIRE_ACCESS_TOKEN&&(D.ACCESS_TOKEN||this._customAccessToken)&&this._skuToken&&n.params.push("sku="+this._skuToken),this._makeAPIURL(n,this._customAccessToken)},K.prototype.canonicalizeTileURL=function(t){var e=H(t);if(!e.path.match(/(^\/v4\/)/)||!e.path.match(/\.[\w]+$/))return t;var r="mapbox://tiles/";r+=e.path.replace("/v4/","");var n=e.params.filter((function(t){return !t.match(/^access_token=/)}));return n.length&&(r+="?"+n.join("&")),r},K.prototype.canonicalizeTileset=function(t,e){if(!X(e))return t.tiles||[];for(var r=[],n=0,i=t.tiles;n<i.length;n+=1){var a=i[n],o=this.canonicalizeTileURL(a);r.push(o);}return r},K.prototype._makeAPIURL=function(t,e){var r="See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes",n=H(D.API_URL);if(t.protocol=n.protocol,t.authority=n.authority,"/"!==n.path&&(t.path=""+n.path+t.path),!D.REQUIRE_ACCESS_TOKEN)return Y(t);if(!(e=e||D.ACCESS_TOKEN))throw new Error("An API access token is required to use Mapbox GL. "+r);if("s"===e[0])throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). "+r);return t.params=t.params.filter((function(t){return -1===t.indexOf("access_token")})),t.params.push("access_token="+e),Y(t)};var Z=/^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/|\?|$)/i;function G(t){return Z.test(t)}var J=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;function H(t){var e=t.match(J);if(!e)throw new Error("Unable to parse URL object");return {protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function Y(t){var e=t.params.length?"?"+t.params.join("&"):"";return t.protocol+"://"+t.authority+t.path+e}function $(t){if(!t)return null;var e,r=t.split(".");if(!r||3!==r.length)return null;try{return JSON.parse((e=r[1],decodeURIComponent(self.atob(e).split("").map((function(t){return "%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join(""))))}catch(t){return null}}var W=function(t){this.type=t,this.anonId=null,this.eventData={},this.queue=[],this.pendingRequest=null;};W.prototype.getStorageKey=function(t){var e,r=$(D.ACCESS_TOKEN),n="";return r&&r.u?(e=r.u,n=self.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(function(t,e){return String.fromCharCode(Number("0x"+e))})))):n=D.ACCESS_TOKEN||"",t?"mapbox.eventData."+t+":"+n:"mapbox.eventData:"+n},W.prototype.fetchEventData=function(){var t=B("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{var n=self.localStorage.getItem(e);n&&(this.eventData=JSON.parse(n));var i=self.localStorage.getItem(r);i&&(this.anonId=i);}catch(t){w("Unable to read from LocalStorage");}},W.prototype.saveEventData=function(){var t=B("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{self.localStorage.setItem(r,this.anonId),Object.keys(this.eventData).length>=1&&self.localStorage.setItem(e,JSON.stringify(this.eventData));}catch(t){w("Unable to write to LocalStorage");}},W.prototype.processRequests=function(t){},W.prototype.postEvent=function(t,e,r,n){var i=this;if(D.EVENTS_URL){var a=H(D.EVENTS_URL);a.params.push("access_token="+(n||D.ACCESS_TOKEN||""));var o={event:this.type,created:new Date(t).toISOString(),sdkIdentifier:"mapbox-gl-js",sdkVersion:"1.6.1",skuId:N,userId:this.anonId},s=e?c(o,e):o,u={url:Y(a),headers:{"Content-Type":"text/plain"},body:JSON.stringify([s])};this.pendingRequest=_t(u,(function(t){i.pendingRequest=null,r(t),i.saveEventData(),i.processRequests(n);}));}},W.prototype.queueRequest=function(t,e){this.queue.push(t),this.processRequests(e);};var Q,tt,et=function(t){function e(){t.call(this,"map.load"),this.success={},this.skuToken="";}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.postMapLoadEvent=function(t,e,r,n){this.skuToken=r,(D.EVENTS_URL&&n||D.ACCESS_TOKEN&&Array.isArray(t)&&t.some((function(t){return X(t)||G(t)})))&&this.queueRequest({id:e,timestamp:Date.now()},n);},e.prototype.processRequests=function(t){var e=this;if(!this.pendingRequest&&0!==this.queue.length){var r=this.queue.shift(),n=r.id,i=r.timestamp;n&&this.success[n]||(this.anonId||this.fetchEventData(),d(this.anonId)||(this.anonId=y()),this.postEvent(i,{skuToken:this.skuToken},(function(t){t||n&&(e.success[n]=!0);}),t));}},e}(W),rt=new(function(t){function e(e){t.call(this,"appUserTurnstile"),this._customAccessToken=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.postTurnstileEvent=function(t,e){D.EVENTS_URL&&D.ACCESS_TOKEN&&Array.isArray(t)&&t.some((function(t){return X(t)||G(t)}))&&this.queueRequest(Date.now(),e);},e.prototype.processRequests=function(t){var e=this;if(!this.pendingRequest&&0!==this.queue.length){this.anonId&&this.eventData.lastSuccess&&this.eventData.tokenU||this.fetchEventData();var r=$(D.ACCESS_TOKEN),n=r?r.u:D.ACCESS_TOKEN,i=n!==this.eventData.tokenU;d(this.anonId)||(this.anonId=y(),i=!0);var a=this.queue.shift();if(this.eventData.lastSuccess){var o=new Date(this.eventData.lastSuccess),s=new Date(a),u=(a-this.eventData.lastSuccess)/864e5;i=i||u>=1||u<-1||o.getDate()!==s.getDate();}else i=!0;if(!i)return this.processRequests();this.postEvent(a,{"enabled.telemetry":!1},(function(t){t||(e.eventData.lastSuccess=a,e.eventData.tokenU=n);}),t);}},e}(W)),nt=rt.postTurnstileEvent.bind(rt),it=new et,at=it.postMapLoadEvent.bind(it),ot="mapbox-tiles",st=500,ut=50,lt=42e4;function pt(){self.caches&&!Q&&(Q=self.caches.open(ot));}function ct(t,e,r){if(pt(),Q){var n={status:e.status,statusText:e.statusText,headers:new self.Headers};e.headers.forEach((function(t,e){return n.headers.set(e,t)}));var i=I(e.headers.get("Cache-Control")||"");if(!i["no-store"])i["max-age"]&&n.headers.set("Expires",new Date(r+1e3*i["max-age"]).toUTCString()),new Date(n.headers.get("Expires")).getTime()-r<lt||function(t,e){if(void 0===tt)try{new Response(new ReadableStream),tt=!0;}catch(t){tt=!1;}tt?e(t.body):t.blob().then(e);}(e,(function(e){var r=new self.Response(e,n);pt(),Q&&Q.then((function(e){return e.put(ht(t.url),r)})).catch((function(t){return w(t.message)}));}));}}function ht(t){var e=t.indexOf("?");return e<0?t:t.slice(0,e)}function ft(t,e){if(pt(),!Q)return e(null);var r=ht(t.url);Q.then((function(t){t.match(r).then((function(n){var i=function(t){if(!t)return !1;var e=new Date(t.headers.get("Expires")||0),r=I(t.headers.get("Cache-Control")||"");return e>Date.now()&&!r["no-cache"]}(n);t.delete(r),i&&t.put(r,n.clone()),e(null,n,i);})).catch(e);})).catch(e);}var yt=1/0;var dt={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"};"function"==typeof Object.freeze&&Object.freeze(dt);var mt=function(t){function e(e,r,n){401===r&&G(n)&&(e+=": you may have provided an invalid Mapbox access token. See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes"),t.call(this,e),this.status=r,this.url=n,this.name=this.constructor.name,this.message=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.name+": "+this.message+" ("+this.status+"): "+this.url},e}(Error),vt=k()?function(){return self.worker&&self.worker.referrer}:function(){return ("blob:"===self.location.protocol?self.parent:self).location.href};function gt(t,e){var r,n=new self.AbortController,i=new self.Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:vt(),signal:n.signal}),a=!1,o=!1,s=(r=i.url).indexOf("sku=")>0&&G(r);"json"===t.type&&i.headers.set("Accept","application/json");var u=function(r,n,a){if(!o){if(r&&"SecurityError"!==r.message&&w(r),n&&a)return l(n);var u=Date.now();self.fetch(i).then((function(r){if(r.ok){var n=s?r.clone():null;return l(r,n,u)}return e(new mt(r.statusText,r.status,t.url))})).catch((function(t){20!==t.code&&e(new Error(t.message));}));}},l=function(r,n,s){("arrayBuffer"===t.type?r.arrayBuffer():"json"===t.type?r.json():r.text()).then((function(t){o||(n&&s&&ct(i,n,s),a=!0,e(null,t,r.headers.get("Cache-Control"),r.headers.get("Expires")));})).catch((function(t){o||e(new Error(t.message));}));};return s?ft(i,u):u(null,null),{cancel:function(){o=!0,a||n.abort();}}}var xt=function(t,e){if(r=t.url,!(/^file:/.test(r)||/^file:/.test(vt())&&!/^\w+:/.test(r))){if(self.fetch&&self.Request&&self.AbortController&&self.Request.prototype.hasOwnProperty("signal"))return gt(t,e);if(k()&&self.worker&&self.worker.actor){return self.worker.actor.send("getResource",t,e,void 0,!0)}}var r;return function(t,e){var r=new self.XMLHttpRequest;for(var n in r.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(r.responseType="arraybuffer"),t.headers)r.setRequestHeader(n,t.headers[n]);return "json"===t.type&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials="include"===t.credentials,r.onerror=function(){e(new Error(r.statusText));},r.onload=function(){if((r.status>=200&&r.status<300||0===r.status)&&null!==r.response){var n=r.response;if("json"===t.type)try{n=JSON.parse(r.response);}catch(t){return e(t)}e(null,n,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"));}else e(new mt(r.statusText,r.status,t.url));},r.send(t.body),{cancel:function(){return r.abort()}}}(t,e)},bt=function(t,e){return xt(c(t,{type:"arrayBuffer"}),e)},_t=function(t,e){return xt(c(t,{method:"POST"}),e)};var wt,At;wt=[],At=0;var St=function(t,e){if(R.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*"),At>=D.MAX_PARALLEL_IMAGE_REQUESTS){var r={requestParameters:t,callback:e,cancelled:!1,cancel:function(){this.cancelled=!0;}};return wt.push(r),r}At++;var n=!1,i=function(){if(!n)for(n=!0,At--;wt.length&&At<D.MAX_PARALLEL_IMAGE_REQUESTS;){var t=wt.shift(),e=t.requestParameters,r=t.callback;t.cancelled||(t.cancel=St(e,r).cancel);}},a=bt(t,(function(t,r,n,a){if(i(),t)e(t);else if(r){var o=new self.Image;o.onload=function(){e(null,o),self.URL.revokeObjectURL(o.src);},o.onerror=function(){return e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))};var s=new self.Blob([new Uint8Array(r)],{type:"image/png"});o.cacheControl=n,o.expires=a,o.src=r.byteLength?self.URL.createObjectURL(s):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";}}));return {cancel:function(){a.cancel(),i();}}};function kt(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e));}function It(t,e,r){if(r&&r[t]){var n=r[t].indexOf(e);-1!==n&&r[t].splice(n,1);}}var zt=function(t,e){void 0===e&&(e={}),c(this,e),this.type=t;},Ct=function(t){function e(e,r){void 0===r&&(r={}),t.call(this,"error",c({error:e},r));}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(zt),Bt=function(){};Bt.prototype.on=function(t,e){return this._listeners=this._listeners||{},kt(t,e,this._listeners),this},Bt.prototype.off=function(t,e){return It(t,e,this._listeners),It(t,e,this._oneTimeListeners),this},Bt.prototype.once=function(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},kt(t,e,this._oneTimeListeners),this},Bt.prototype.fire=function(t,e){"string"==typeof t&&(t=new zt(t,e||{}));var r=t.type;if(this.listens(r)){t.target=this;for(var n=0,i=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];n<i.length;n+=1){i[n].call(this,t);}for(var a=0,o=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];a<o.length;a+=1){var s=o[a];It(r,s,this._oneTimeListeners),s.call(this,t);}var u=this._eventedParent;u&&(c(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),u.fire(t));}else t instanceof Ct&&console.error(t.error);return this},Bt.prototype.listens=function(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)},Bt.prototype.setEventedParent=function(t,e){return this._eventedParent=t,this._eventedParentData=e,this};var Tt={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"resolvedImage",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:24,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},expression_name:{type:"enum",values:{let:{group:"Variable binding"},var:{group:"Variable binding"},literal:{group:"Types"},array:{group:"Types"},at:{group:"Lookup"},in:{group:"Lookup"},case:{group:"Decision"},match:{group:"Decision"},coalesce:{group:"Decision"},step:{group:"Ramps, scales, curves"},interpolate:{group:"Ramps, scales, curves"},"interpolate-hcl":{group:"Ramps, scales, curves"},"interpolate-lab":{group:"Ramps, scales, curves"},ln2:{group:"Math"},pi:{group:"Math"},e:{group:"Math"},typeof:{group:"Types"},string:{group:"Types"},number:{group:"Types"},boolean:{group:"Types"},object:{group:"Types"},collator:{group:"Types"},format:{group:"Types"},image:{group:"Types"},"number-format":{group:"Types"},"to-string":{group:"Types"},"to-number":{group:"Types"},"to-boolean":{group:"Types"},"to-rgba":{group:"Color"},"to-color":{group:"Types"},rgb:{group:"Color"},rgba:{group:"Color"},get:{group:"Lookup"},has:{group:"Lookup"},length:{group:"Lookup"},properties:{group:"Feature data"},"feature-state":{group:"Feature data"},"geometry-type":{group:"Feature data"},id:{group:"Feature data"},zoom:{group:"Zoom"},"heatmap-density":{group:"Heatmap"},"line-progress":{group:"Feature data"},accumulated:{group:"Feature data"},"+":{group:"Math"},"*":{group:"Math"},"-":{group:"Math"},"/":{group:"Math"},"%":{group:"Math"},"^":{group:"Math"},sqrt:{group:"Math"},log10:{group:"Math"},ln:{group:"Math"},log2:{group:"Math"},sin:{group:"Math"},cos:{group:"Math"},tan:{group:"Math"},asin:{group:"Math"},acos:{group:"Math"},atan:{group:"Math"},min:{group:"Math"},max:{group:"Math"},round:{group:"Math"},abs:{group:"Math"},ceil:{group:"Math"},floor:{group:"Math"},"==":{group:"Decision"},"!=":{group:"Decision"},">":{group:"Decision"},"<":{group:"Decision"},">=":{group:"Decision"},"<=":{group:"Decision"},all:{group:"Decision"},any:{group:"Decision"},"!":{group:"Decision"},"is-supported-script":{group:"String"},upcase:{group:"String"},downcase:{group:"String"},concat:{group:"String"},"resolved-locale":{group:"String"}}},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}}},Pt=function(t,e,r,n){this.message=(t?t+": ":"")+r,n&&(this.identifier=n),null!=e&&e.__line__&&(this.line=e.__line__);};function Et(t){var e=t.key,r=t.value;return r?[new Pt(e,r,"constants have been deprecated as of v8")]:[]}function Mt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var a=i[n];for(var o in a)t[o]=a[o];}return t}function Vt(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function Ft(t){if(Array.isArray(t))return t.map(Ft);if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){var e={};for(var r in t)e[r]=Ft(t[r]);return e}return Vt(t)}var Lt=function(t){function e(e,r){t.call(this,r),this.message=r,this.key=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),Ot=function(t,e){void 0===e&&(e=[]),this.parent=t,this.bindings={};for(var r=0,n=e;r<n.length;r+=1){var i=n[r],a=i[0],o=i[1];this.bindings[a]=o;}};Ot.prototype.concat=function(t){return new Ot(this,t)},Ot.prototype.get=function(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(t+" not found in scope.")},Ot.prototype.has=function(t){return !!this.bindings[t]||!!this.parent&&this.parent.has(t)};var Dt={kind:"null"},Rt={kind:"number"},Ut={kind:"string"},jt={kind:"boolean"},qt={kind:"color"},Nt={kind:"object"},Kt={kind:"value"},Xt={kind:"collator"},Zt={kind:"formatted"},Gt={kind:"resolvedImage"};function Jt(t,e){return {kind:"array",itemType:t,N:e}}function Ht(t){if("array"===t.kind){var e=Ht(t.itemType);return "number"==typeof t.N?"array<"+e+", "+t.N+">":"value"===t.itemType.kind?"array":"array<"+e+">"}return t.kind}var Yt=[Dt,Rt,Ut,jt,qt,Zt,Nt,Jt(Kt),Gt];function $t(t,e){if("error"===e.kind)return null;if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!$t(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else{if(t.kind===e.kind)return null;if("value"===t.kind)for(var r=0,n=Yt;r<n.length;r+=1){if(!$t(n[r],e))return null}}return "Expected "+Ht(t)+" but found "+Ht(e)+" instead."}var Wt=e((function(t,e){var r={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function n(t){return (t=Math.round(t))<0?0:t>255?255:t}function i(t){return t<0?0:t>1?1:t}function a(t){return "%"===t[t.length-1]?n(parseFloat(t)/100*255):n(parseInt(t))}function o(t){return "%"===t[t.length-1]?i(parseFloat(t)/100):i(parseFloat(t))}function s(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{e.parseCSSColor=function(t){var e,i=t.replace(/ /g,"").toLowerCase();if(i in r)return r[i].slice();if("#"===i[0])return 4===i.length?(e=parseInt(i.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===i.length&&(e=parseInt(i.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null;var u=i.indexOf("("),l=i.indexOf(")");if(-1!==u&&l+1===i.length){var p=i.substr(0,u),c=i.substr(u+1,l-(u+1)).split(","),h=1;switch(p){case"rgba":if(4!==c.length)return null;h=o(c.pop());case"rgb":return 3!==c.length?null:[a(c[0]),a(c[1]),a(c[2]),h];case"hsla":if(4!==c.length)return null;h=o(c.pop());case"hsl":if(3!==c.length)return null;var f=(parseFloat(c[0])%360+360)%360/360,y=o(c[1]),d=o(c[2]),m=d<=.5?d*(y+1):d+y-d*y,v=2*d-m;return [n(255*s(v,m,f+1/3)),n(255*s(v,m,f)),n(255*s(v,m,f-1/3)),h];default:return null}}return null};}catch(t){}})).parseCSSColor,Qt=function(t,e,r,n){void 0===n&&(n=1),this.r=t,this.g=e,this.b=r,this.a=n;};Qt.parse=function(t){if(t){if(t instanceof Qt)return t;if("string"==typeof t){var e=Wt(t);if(e)return new Qt(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3])}}},Qt.prototype.toString=function(){var t=this.toArray(),e=t[0],r=t[1],n=t[2],i=t[3];return "rgba("+Math.round(e)+","+Math.round(r)+","+Math.round(n)+","+i+")"},Qt.prototype.toArray=function(){var t=this.r,e=this.g,r=this.b,n=this.a;return 0===n?[0,0,0,0]:[255*t/n,255*e/n,255*r/n,n]},Qt.black=new Qt(0,0,0,1),Qt.white=new Qt(1,1,1,1),Qt.transparent=new Qt(0,0,0,0),Qt.red=new Qt(1,0,0,1);var te=function(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"});};te.prototype.compare=function(t,e){return this.collator.compare(t,e)},te.prototype.resolvedLocale=function(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale};var ee=function(t,e,r,n,i){this.text=t,this.image=e,this.scale=r,this.fontStack=n,this.textColor=i;},re=function(t){this.sections=t;};re.fromString=function(t){return new re([new ee(t,null,null,null,null)])},re.prototype.isEmpty=function(){return 0===this.sections.length||!this.sections.some((function(t){return 0!==t.text.length||t.image&&0!==t.image.name.length}))},re.factory=function(t){return t instanceof re?t:re.fromString(t)},re.prototype.toString=function(){return 0===this.sections.length?"":this.sections.map((function(t){return t.text})).join("")},re.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var n=r[e];if(n.image)t.push(["image",n.image.name]);else{t.push(n.text);var i={};n.fontStack&&(i["text-font"]=["literal",n.fontStack.split(",")]),n.scale&&(i["font-scale"]=n.scale),n.textColor&&(i["text-color"]=["rgba"].concat(n.textColor.toArray())),t.push(i);}}return t};var ne=function(t){this.name=t.name,this.available=t.available;};function ie(t,e,r,n){return "number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===n||"number"==typeof n&&n>=0&&n<=1?null:"Invalid rgba value ["+[t,e,r,n].join(", ")+"]: 'a' must be between 0 and 1.":"Invalid rgba value ["+("number"==typeof n?[t,e,r,n]:[t,e,r]).join(", ")+"]: 'r', 'g', and 'b' must be between 0 and 255."}function ae(t){if(null===t)return Dt;if("string"==typeof t)return Ut;if("boolean"==typeof t)return jt;if("number"==typeof t)return Rt;if(t instanceof Qt)return qt;if(t instanceof te)return Xt;if(t instanceof re)return Zt;if(t instanceof ne)return Gt;if(Array.isArray(t)){for(var e,r=t.length,n=0,i=t;n<i.length;n+=1){var a=ae(i[n]);if(e){if(e===a)continue;e=Kt;break}e=a;}return Jt(e||Kt,r)}return Nt}function oe(t){var e=typeof t;return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof Qt||t instanceof re||t instanceof ne?t.toString():JSON.stringify(t)}ne.prototype.toString=function(){return this.name},ne.fromString=function(t){return new ne({name:t,available:!1})},ne.prototype.serialize=function(){return ["image",this.name]};var se=function(t,e){this.type=t,this.value=e;};se.parse=function(t,e){if(2!==t.length)return e.error("'literal' expression requires exactly one argument, but found "+(t.length-1)+" instead.");if(!function t(e){if(null===e)return !0;if("string"==typeof e)return !0;if("boolean"==typeof e)return !0;if("number"==typeof e)return !0;if(e instanceof Qt)return !0;if(e instanceof te)return !0;if(e instanceof re)return !0;if(e instanceof ne)return !0;if(Array.isArray(e)){for(var r=0,n=e;r<n.length;r+=1){if(!t(n[r]))return !1}return !0}if("object"==typeof e){for(var i in e)if(!t(e[i]))return !1;return !0}return !1}(t[1]))return e.error("invalid value");var r=t[1],n=ae(r),i=e.expectedType;return "array"!==n.kind||0!==n.N||!i||"array"!==i.kind||"number"==typeof i.N&&0!==i.N||(n=i),new se(n,r)},se.prototype.evaluate=function(){return this.value},se.prototype.eachChild=function(){},se.prototype.possibleOutputs=function(){return [this.value]},se.prototype.serialize=function(){return "array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof Qt?["rgba"].concat(this.value.toArray()):this.value instanceof re?this.value.serialize():this.value};var ue=function(t){this.name="ExpressionEvaluationError",this.message=t;};ue.prototype.toJSON=function(){return this.message};var le={string:Ut,number:Rt,boolean:jt,object:Nt},pe=function(t,e){this.type=t,this.args=e;};pe.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r,n=1,i=t[0];if("array"===i){var a,o;if(t.length>2){var s=t[1];if("string"!=typeof s||!(s in le)||"object"===s)return e.error('The item type argument of "array" must be one of string, number, boolean',1);a=le[s],n++;}else a=Kt;if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2);o=t[2],n++;}r=Jt(a,o);}else r=le[i];for(var u=[];n<t.length;n++){var l=e.parse(t[n],n,Kt);if(!l)return null;u.push(l);}return new pe(r,u)},pe.prototype.evaluate=function(t){for(var e=0;e<this.args.length;e++){var r=this.args[e].evaluate(t);if(!$t(this.type,ae(r)))return r;if(e===this.args.length-1)throw new ue("Expected value to be of type "+Ht(this.type)+", but found "+Ht(ae(r))+" instead.")}return null},pe.prototype.eachChild=function(t){this.args.forEach(t);},pe.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.args.map((function(t){return t.possibleOutputs()})))},pe.prototype.serialize=function(){var t=this.type,e=[t.kind];if("array"===t.kind){var r=t.itemType;if("string"===r.kind||"number"===r.kind||"boolean"===r.kind){e.push(r.kind);var n=t.N;("number"==typeof n||this.args.length>1)&&e.push(n);}}return e.concat(this.args.map((function(t){return t.serialize()})))};var ce=function(t){this.type=Zt,this.sections=t;};ce.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r=t[1];if(!Array.isArray(r)&&"object"==typeof r)return e.error("First argument must be an image or text section.");for(var n=[],i=!1,a=1;a<=t.length-1;++a){var o=t[a];if(i&&"object"==typeof o&&!Array.isArray(o)){i=!1;var s=null;if(o["font-scale"]&&!(s=e.parse(o["font-scale"],1,Rt)))return null;var u=null;if(o["text-font"]&&!(u=e.parse(o["text-font"],1,Jt(Ut))))return null;var l=null;if(o["text-color"]&&!(l=e.parse(o["text-color"],1,qt)))return null;var p=n[n.length-1];p.scale=s,p.font=u,p.textColor=l;}else{var c=e.parse(t[a],1,Kt);if(!c)return null;var h=c.type.kind;if("string"!==h&&"value"!==h&&"null"!==h&&"resolvedImage"!==h)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");i=!0,n.push({content:c,scale:null,font:null,textColor:null});}}return new ce(n)},ce.prototype.evaluate=function(t){return new re(this.sections.map((function(e){var r=e.content.evaluate(t);return ae(r)===Gt?new ee("",r,null,null,null):new ee(oe(r),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))},ce.prototype.eachChild=function(t){for(var e=0,r=this.sections;e<r.length;e+=1){var n=r[e];t(n.content),n.scale&&t(n.scale),n.font&&t(n.font),n.textColor&&t(n.textColor);}},ce.prototype.possibleOutputs=function(){return [void 0]},ce.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var n=r[e];t.push(n.content.serialize());var i={};n.scale&&(i["font-scale"]=n.scale.serialize()),n.font&&(i["text-font"]=n.font.serialize()),n.textColor&&(i["text-color"]=n.textColor.serialize()),t.push(i);}return t};var he=function(t){this.type=Gt,this.input=t;};he.parse=function(t,e){if(2!==t.length)return e.error("Expected two arguments.");var r=e.parse(t[1],1,Ut);return r?new he(r):e.error("No image name provided.")},he.prototype.evaluate=function(t){var e=this.input.evaluate(t),r=!1;return t.availableImages&&t.availableImages.indexOf(e)>-1&&(r=!0),new ne({name:e,available:r})},he.prototype.eachChild=function(t){t(this.input);},he.prototype.possibleOutputs=function(){return [void 0]},he.prototype.serialize=function(){return ["image",this.input.serialize()]};var fe={"to-boolean":jt,"to-color":qt,"to-number":Rt,"to-string":Ut},ye=function(t,e){this.type=t,this.args=e;};ye.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r=t[0];if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.");for(var n=fe[r],i=[],a=1;a<t.length;a++){var o=e.parse(t[a],a,Kt);if(!o)return null;i.push(o);}return new ye(n,i)},ye.prototype.evaluate=function(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t));if("color"===this.type.kind){for(var e,r,n=0,i=this.args;n<i.length;n+=1){if(r=null,(e=i[n].evaluate(t))instanceof Qt)return e;if("string"==typeof e){var a=t.parseColor(e);if(a)return a}else if(Array.isArray(e)&&!(r=e.length<3||e.length>4?"Invalid rbga value "+JSON.stringify(e)+": expected an array containing either three or four numeric values.":ie(e[0],e[1],e[2],e[3])))return new Qt(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new ue(r||"Could not parse color from value '"+("string"==typeof e?e:String(JSON.stringify(e)))+"'")}if("number"===this.type.kind){for(var o=null,s=0,u=this.args;s<u.length;s+=1){if(null===(o=u[s].evaluate(t)))return 0;var l=Number(o);if(!isNaN(l))return l}throw new ue("Could not convert "+JSON.stringify(o)+" to number.")}return "formatted"===this.type.kind?re.fromString(oe(this.args[0].evaluate(t))):"resolvedImage"===this.type.kind?ne.fromString(oe(this.args[0].evaluate(t))):oe(this.args[0].evaluate(t))},ye.prototype.eachChild=function(t){this.args.forEach(t);},ye.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.args.map((function(t){return t.possibleOutputs()})))},ye.prototype.serialize=function(){if("formatted"===this.type.kind)return new ce([{content:this.args[0],scale:null,font:null,textColor:null}]).serialize();if("resolvedImage"===this.type.kind)return new he(this.args[0]).serialize();var t=["to-"+this.type.kind];return this.eachChild((function(e){t.push(e.serialize());})),t};var de=["Unknown","Point","LineString","Polygon"],me=function(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null;};me.prototype.id=function(){return this.feature&&"id"in this.feature?this.feature.id:null},me.prototype.geometryType=function(){return this.feature?"number"==typeof this.feature.type?de[this.feature.type]:this.feature.type:null},me.prototype.properties=function(){return this.feature&&this.feature.properties||{}},me.prototype.parseColor=function(t){var e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=Qt.parse(t)),e};var ve=function(t,e,r,n){this.name=t,this.type=e,this._evaluate=r,this.args=n;};ve.prototype.evaluate=function(t){return this._evaluate(t,this.args)},ve.prototype.eachChild=function(t){this.args.forEach(t);},ve.prototype.possibleOutputs=function(){return [void 0]},ve.prototype.serialize=function(){return [this.name].concat(this.args.map((function(t){return t.serialize()})))},ve.parse=function(t,e){var r,n=t[0],i=ve.definitions[n];if(!i)return e.error('Unknown expression "'+n+'". If you wanted a literal array, use ["literal", [...]].',0);for(var a=Array.isArray(i)?i[0]:i.type,o=Array.isArray(i)?[[i[1],i[2]]]:i.overloads,s=o.filter((function(e){var r=e[0];return !Array.isArray(r)||r.length===t.length-1})),u=null,l=0,p=s;l<p.length;l+=1){var c=p[l],h=c[0],f=c[1];u=new Ae(e.registry,e.path,null,e.scope);for(var y=[],d=!1,m=1;m<t.length;m++){var v=t[m],g=Array.isArray(h)?h[m-1]:h.type,x=u.parse(v,1+y.length,g);if(!x){d=!0;break}y.push(x);}if(!d)if(Array.isArray(h)&&h.length!==y.length)u.error("Expected "+h.length+" arguments, but found "+y.length+" instead.");else{for(var b=0;b<y.length;b++){var _=Array.isArray(h)?h[b]:h.type,w=y[b];u.concat(b+1).checkSubtype(_,w.type);}if(0===u.errors.length)return new ve(n,a,f,y)}}if(1===s.length)(r=e.errors).push.apply(r,u.errors);else{for(var A=(s.length?s:o).map((function(t){var e,r=t[0];return e=r,Array.isArray(e)?"("+e.map(Ht).join(", ")+")":"("+Ht(e.type)+"...)"})).join(" | "),S=[],k=1;k<t.length;k++){var I=e.parse(t[k],1+S.length);if(!I)return null;S.push(Ht(I.type));}e.error("Expected arguments of type "+A+", but found ("+S.join(", ")+") instead.");}return null},ve.register=function(t,e){for(var r in ve.definitions=e,e)t[r]=ve;};var ge=function(t,e,r){this.type=Xt,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e;};function xe(t){if(t instanceof ve){if("get"===t.name&&1===t.args.length)return !1;if("feature-state"===t.name)return !1;if("has"===t.name&&1===t.args.length)return !1;if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return !1;if(/^filter-/.test(t.name))return !1}var e=!0;return t.eachChild((function(t){e&&!xe(t)&&(e=!1);})),e}function be(t){if(t instanceof ve&&"feature-state"===t.name)return !1;var e=!0;return t.eachChild((function(t){e&&!be(t)&&(e=!1);})),e}function _e(t,e){if(t instanceof ve&&e.indexOf(t.name)>=0)return !1;var r=!0;return t.eachChild((function(t){r&&!_e(t,e)&&(r=!1);})),r}ge.parse=function(t,e){if(2!==t.length)return e.error("Expected one argument.");var r=t[1];if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.");var n=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,jt);if(!n)return null;var i=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,jt);if(!i)return null;var a=null;return r.locale&&!(a=e.parse(r.locale,1,Ut))?null:new ge(n,i,a)},ge.prototype.evaluate=function(t){return new te(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)},ge.prototype.eachChild=function(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale);},ge.prototype.possibleOutputs=function(){return [void 0]},ge.prototype.serialize=function(){var t={};return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]};var we=function(t,e){this.type=e.type,this.name=t,this.boundExpression=e;};we.parse=function(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.");var r=t[1];return e.scope.has(r)?new we(r,e.scope.get(r)):e.error('Unknown variable "'+r+'". Make sure "'+r+'" has been bound in an enclosing "let" expression before using it.',1)},we.prototype.evaluate=function(t){return this.boundExpression.evaluate(t)},we.prototype.eachChild=function(){},we.prototype.possibleOutputs=function(){return [void 0]},we.prototype.serialize=function(){return ["var",this.name]};var Ae=function(t,e,r,n,i){void 0===e&&(e=[]),void 0===n&&(n=new Ot),void 0===i&&(i=[]),this.registry=t,this.path=e,this.key=e.map((function(t){return "["+t+"]"})).join(""),this.scope=n,this.errors=i,this.expectedType=r;};function Se(t,e){for(var r,n,i=t.length-1,a=0,o=i,s=0;a<=o;)if(r=t[s=Math.floor((a+o)/2)],n=t[s+1],r<=e){if(s===i||e<n)return s;a=s+1;}else{if(!(r>e))throw new ue("Input is not a number.");o=s-1;}return 0}Ae.prototype.parse=function(t,e,r,n,i){return void 0===i&&(i={}),e?this.concat(e,r,n)._parse(t,i):this._parse(t,i)},Ae.prototype._parse=function(t,e){function r(t,e,r){return "assert"===r?new pe(e,[t]):"coerce"===r?new ye(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');var n=t[0];if("string"!=typeof n)return this.error("Expression name must be a string, but found "+typeof n+' instead. If you wanted a literal array, use ["literal", [...]].',0),null;var i=this.registry[n];if(i){var a=i.parse(t,this);if(!a)return null;if(this.expectedType){var o=this.expectedType,s=a.type;if("string"!==o.kind&&"number"!==o.kind&&"boolean"!==o.kind&&"object"!==o.kind&&"array"!==o.kind||"value"!==s.kind)if("color"!==o.kind&&"formatted"!==o.kind&&"resolvedImage"!==o.kind||"value"!==s.kind&&"string"!==s.kind){if(this.checkSubtype(o,s))return null}else a=r(a,o,e.typeAnnotation||"coerce");else a=r(a,o,e.typeAnnotation||"assert");}if(!(a instanceof se)&&"resolvedImage"!==a.type.kind&&function t(e){if(e instanceof we)return t(e.boundExpression);if(e instanceof ve&&"error"===e.name)return !1;if(e instanceof ge)return !1;var r=e instanceof ye||e instanceof pe;var n=!0;e.eachChild((function(e){n=r?n&&t(e):n&&e instanceof se;}));if(!n)return !1;return xe(e)&&_e(e,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}(a)){var u=new me;try{a=new se(a.type,a.evaluate(u));}catch(t){return this.error(t.message),null}}return a}return this.error('Unknown expression "'+n+'". If you wanted a literal array, use ["literal", [...]].',0)}return void 0===t?this.error("'undefined' value invalid. Use null instead."):"object"==typeof t?this.error('Bare objects invalid. Use ["literal", {...}] instead.'):this.error("Expected an array, but found "+typeof t+" instead.")},Ae.prototype.concat=function(t,e,r){var n="number"==typeof t?this.path.concat(t):this.path,i=r?this.scope.concat(r):this.scope;return new Ae(this.registry,n,e||null,i,this.errors)},Ae.prototype.error=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var n=""+this.key+e.map((function(t){return "["+t+"]"})).join("");this.errors.push(new Lt(n,t));},Ae.prototype.checkSubtype=function(t,e){var r=$t(t,e);return r&&this.error(r),r};var ke=function(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[];for(var n=0,i=r;n<i.length;n+=1){var a=i[n],o=a[0],s=a[1];this.labels.push(o),this.outputs.push(s);}};function Ie(t,e,r){return t*(1-r)+e*r}ke.parse=function(t,e){if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");var r=e.parse(t[1],1,Rt);if(!r)return null;var n=[],i=null;e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType);for(var a=1;a<t.length;a+=2){var o=1===a?-1/0:t[a],s=t[a+1],u=a,l=a+1;if("number"!=typeof o)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',u);if(n.length&&n[n.length-1][0]>=o)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',u);var p=e.parse(s,l,i);if(!p)return null;i=i||p.type,n.push([o,p]);}return new ke(i,r,n)},ke.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;return n>=e[i-1]?r[i-1].evaluate(t):r[Se(e,n)].evaluate(t)},ke.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1){t(r[e]);}},ke.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.outputs.map((function(t){return t.possibleOutputs()})))},ke.prototype.serialize=function(){for(var t=["step",this.input.serialize()],e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize());return t};var ze=Object.freeze({__proto__:null,number:Ie,color:function(t,e,r){return new Qt(Ie(t.r,e.r,r),Ie(t.g,e.g,r),Ie(t.b,e.b,r),Ie(t.a,e.a,r))},array:function(t,e,r){return t.map((function(t,n){return Ie(t,e[n],r)}))}}),Ce=.95047,Be=1,Te=1.08883,Pe=4/29,Ee=6/29,Me=3*Ee*Ee,Ve=Ee*Ee*Ee,Fe=Math.PI/180,Le=180/Math.PI;function Oe(t){return t>Ve?Math.pow(t,1/3):t/Me+Pe}function De(t){return t>Ee?t*t*t:Me*(t-Pe)}function Re(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Ue(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function je(t){var e=Ue(t.r),r=Ue(t.g),n=Ue(t.b),i=Oe((.4124564*e+.3575761*r+.1804375*n)/Ce),a=Oe((.2126729*e+.7151522*r+.072175*n)/Be);return {l:116*a-16,a:500*(i-a),b:200*(a-Oe((.0193339*e+.119192*r+.9503041*n)/Te)),alpha:t.a}}function qe(t){var e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,n=isNaN(t.b)?e:e-t.b/200;return e=Be*De(e),r=Ce*De(r),n=Te*De(n),new Qt(Re(3.2404542*r-1.5371385*e-.4985314*n),Re(-.969266*r+1.8760108*e+.041556*n),Re(.0556434*r-.2040259*e+1.0572252*n),t.alpha)}function Ne(t,e,r){var n=e-t;return t+r*(n>180||n<-180?n-360*Math.round(n/360):n)}var Ke={forward:je,reverse:qe,interpolate:function(t,e,r){return {l:Ie(t.l,e.l,r),a:Ie(t.a,e.a,r),b:Ie(t.b,e.b,r),alpha:Ie(t.alpha,e.alpha,r)}}},Xe={forward:function(t){var e=je(t),r=e.l,n=e.a,i=e.b,a=Math.atan2(i,n)*Le;return {h:a<0?a+360:a,c:Math.sqrt(n*n+i*i),l:r,alpha:t.a}},reverse:function(t){var e=t.h*Fe,r=t.c;return qe({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return {h:Ne(t.h,e.h,r),c:Ie(t.c,e.c,r),l:Ie(t.l,e.l,r),alpha:Ie(t.alpha,e.alpha,r)}}},Ze=Object.freeze({__proto__:null,lab:Ke,hcl:Xe}),Ge=function(t,e,r,n,i){this.type=t,this.operator=e,this.interpolation=r,this.input=n,this.labels=[],this.outputs=[];for(var a=0,o=i;a<o.length;a+=1){var s=o[a],u=s[0],l=s[1];this.labels.push(u),this.outputs.push(l);}};function Je(t,e,r,n){var i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}Ge.interpolationFactor=function(t,e,n,i){var a=0;if("exponential"===t.name)a=Je(e,t.base,n,i);else if("linear"===t.name)a=Je(e,1,n,i);else if("cubic-bezier"===t.name){var o=t.controlPoints;a=new r(o[0],o[1],o[2],o[3]).solve(Je(e,1,n,i));}return a},Ge.parse=function(t,e){var r=t[0],n=t[1],i=t[2],a=t.slice(3);if(!Array.isArray(n)||0===n.length)return e.error("Expected an interpolation type expression.",1);if("linear"===n[0])n={name:"linear"};else if("exponential"===n[0]){var o=n[1];if("number"!=typeof o)return e.error("Exponential interpolation requires a numeric base.",1,1);n={name:"exponential",base:o};}else{if("cubic-bezier"!==n[0])return e.error("Unknown interpolation type "+String(n[0]),1,0);var s=n.slice(1);if(4!==s.length||s.some((function(t){return "number"!=typeof t||t<0||t>1})))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);n={name:"cubic-bezier",controlPoints:s};}if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(!(i=e.parse(i,2,Rt)))return null;var u=[],l=null;"interpolate-hcl"===r||"interpolate-lab"===r?l=qt:e.expectedType&&"value"!==e.expectedType.kind&&(l=e.expectedType);for(var p=0;p<a.length;p+=2){var c=a[p],h=a[p+1],f=p+3,y=p+4;if("number"!=typeof c)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',f);if(u.length&&u[u.length-1][0]>=c)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',f);var d=e.parse(h,y,l);if(!d)return null;l=l||d.type,u.push([c,d]);}return "number"===l.kind||"color"===l.kind||"array"===l.kind&&"number"===l.itemType.kind&&"number"==typeof l.N?new Ge(l,r,n,i,u):e.error("Type "+Ht(l)+" is not interpolatable.")},Ge.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;if(n>=e[i-1])return r[i-1].evaluate(t);var a=Se(e,n),o=e[a],s=e[a+1],u=Ge.interpolationFactor(this.interpolation,n,o,s),l=r[a].evaluate(t),p=r[a+1].evaluate(t);return "interpolate"===this.operator?ze[this.type.kind.toLowerCase()](l,p,u):"interpolate-hcl"===this.operator?Xe.reverse(Xe.interpolate(Xe.forward(l),Xe.forward(p),u)):Ke.reverse(Ke.interpolate(Ke.forward(l),Ke.forward(p),u))},Ge.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1){t(r[e]);}},Ge.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.outputs.map((function(t){return t.possibleOutputs()})))},Ge.prototype.serialize=function(){var t;t="linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints);for(var e=[this.operator,t,this.input.serialize()],r=0;r<this.labels.length;r++)e.push(this.labels[r],this.outputs[r].serialize());return e};var He=function(t,e){this.type=t,this.args=e;};He.parse=function(t,e){if(t.length<2)return e.error("Expectected at least one argument.");var r=null,n=e.expectedType;n&&"value"!==n.kind&&(r=n);for(var i=[],a=0,o=t.slice(1);a<o.length;a+=1){var s=o[a],u=e.parse(s,1+i.length,r,void 0,{typeAnnotation:"omit"});if(!u)return null;r=r||u.type,i.push(u);}var l=n&&i.some((function(t){return $t(n,t.type)}));return new He(l?Kt:r,i)},He.prototype.evaluate=function(t){for(var e,r=null,n=0,i=0,a=this.args;i<a.length;i+=1){if(n++,(r=a[i].evaluate(t))&&r instanceof ne&&!r.available&&(e||(e=r.name),r=null,n===this.args.length&&(r=e)),null!==r)break}return r},He.prototype.eachChild=function(t){this.args.forEach(t);},He.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.args.map((function(t){return t.possibleOutputs()})))},He.prototype.serialize=function(){var t=["coalesce"];return this.eachChild((function(e){t.push(e.serialize());})),t};var Ye=function(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e;};Ye.prototype.evaluate=function(t){return this.result.evaluate(t)},Ye.prototype.eachChild=function(t){for(var e=0,r=this.bindings;e<r.length;e+=1){t(r[e][1]);}t(this.result);},Ye.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found "+(t.length-1)+" instead.");for(var r=[],n=1;n<t.length-1;n+=2){var i=t[n];if("string"!=typeof i)return e.error("Expected string, but found "+typeof i+" instead.",n);if(/[^a-zA-Z0-9_]/.test(i))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);var a=e.parse(t[n+1],n+1);if(!a)return null;r.push([i,a]);}var o=e.parse(t[t.length-1],t.length-1,e.expectedType,r);return o?new Ye(r,o):null},Ye.prototype.possibleOutputs=function(){return this.result.possibleOutputs()},Ye.prototype.serialize=function(){for(var t=["let"],e=0,r=this.bindings;e<r.length;e+=1){var n=r[e],i=n[0],a=n[1];t.push(i,a.serialize());}return t.push(this.result.serialize()),t};var $e=function(t,e,r){this.type=t,this.index=e,this.input=r;};$e.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1,Rt),n=e.parse(t[2],2,Jt(e.expectedType||Kt));if(!r||!n)return null;var i=n.type;return new $e(i.itemType,r,n)},$e.prototype.evaluate=function(t){var e=this.index.evaluate(t),r=this.input.evaluate(t);if(e<0)throw new ue("Array index out of bounds: "+e+" < 0.");if(e>=r.length)throw new ue("Array index out of bounds: "+e+" > "+(r.length-1)+".");if(e!==Math.floor(e))throw new ue("Array index must be an integer, but found "+e+" instead.");return r[e]},$e.prototype.eachChild=function(t){t(this.index),t(this.input);},$e.prototype.possibleOutputs=function(){return [void 0]},$e.prototype.serialize=function(){return ["at",this.index.serialize(),this.input.serialize()]};var We=function(t,e){this.type=jt,this.needle=t,this.haystack=e;};We.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.");var r,n=e.parse(t[1],1,Kt),i=e.parse(t[2],2,Kt);return n&&i?"boolean"!==(r=n.type).kind&&"string"!==r.kind&&"number"!==r.kind&&"null"!==r.kind&&"value"!==r.kind?e.error("Expected first argument to be of type boolean, string, number or null, but found "+Ht(n.type)+" instead"):new We(n,i):null},We.prototype.evaluate=function(t){var e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!e||!r)return !1;if(!function(t){return "boolean"==typeof t||"string"==typeof t||"number"==typeof t}(e))throw new ue("Expected first argument to be of type boolean, string or number, but found "+Ht(ae(e))+" instead.");if(!function(t){return Array.isArray(t)||"string"==typeof t}(r))throw new ue("Expected second argument to be of type array or string, but found "+Ht(ae(r))+" instead.");return r.indexOf(e)>=0},We.prototype.eachChild=function(t){t(this.needle),t(this.haystack);},We.prototype.possibleOutputs=function(){return [!0,!1]},We.prototype.serialize=function(){return ["in",this.needle.serialize(),this.haystack.serialize()]};var Qe=function(t,e,r,n,i,a){this.inputType=t,this.type=e,this.input=r,this.cases=n,this.outputs=i,this.otherwise=a;};Qe.parse=function(t,e){if(t.length<5)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if(t.length%2!=1)return e.error("Expected an even number of arguments.");var r,n;e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType);for(var i={},a=[],o=2;o<t.length-1;o+=2){var s=t[o],u=t[o+1];Array.isArray(s)||(s=[s]);var l=e.concat(o);if(0===s.length)return l.error("Expected at least one branch label.");for(var p=0,c=s;p<c.length;p+=1){var h=c[p];if("number"!=typeof h&&"string"!=typeof h)return l.error("Branch labels must be numbers or strings.");if("number"==typeof h&&Math.abs(h)>Number.MAX_SAFE_INTEGER)return l.error("Branch labels must be integers no larger than "+Number.MAX_SAFE_INTEGER+".");if("number"==typeof h&&Math.floor(h)!==h)return l.error("Numeric branch labels must be integer values.");if(r){if(l.checkSubtype(r,ae(h)))return null}else r=ae(h);if(void 0!==i[String(h)])return l.error("Branch labels must be unique.");i[String(h)]=a.length;}var f=e.parse(u,o,n);if(!f)return null;n=n||f.type,a.push(f);}var y=e.parse(t[1],1,Kt);if(!y)return null;var d=e.parse(t[t.length-1],t.length-1,n);return d?"value"!==y.type.kind&&e.concat(1).checkSubtype(r,y.type)?null:new Qe(r,n,y,i,a,d):null},Qe.prototype.evaluate=function(t){var e=this.input.evaluate(t);return (ae(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)},Qe.prototype.eachChild=function(t){t(this.input),this.outputs.forEach(t),t(this.otherwise);},Qe.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.outputs.map((function(t){return t.possibleOutputs()}))).concat(this.otherwise.possibleOutputs())},Qe.prototype.serialize=function(){for(var t=this,e=["match",this.input.serialize()],r=[],n={},i=0,a=Object.keys(this.cases).sort();i<a.length;i+=1){var o=a[i];void 0===(c=n[this.cases[o]])?(n[this.cases[o]]=r.length,r.push([this.cases[o],[o]])):r[c][1].push(o);}for(var s=function(e){return "number"===t.inputType.kind?Number(e):e},u=0,l=r;u<l.length;u+=1){var p=l[u],c=p[0],h=p[1];1===h.length?e.push(s(h[0])):e.push(h.map(s)),e.push(this.outputs[outputIndex$1].serialize());}return e.push(this.otherwise.serialize()),e};var tr=function(t,e,r){this.type=t,this.branches=e,this.otherwise=r;};function er(t,e){return "=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function rr(t,e,r,n){return 0===n.compare(e,r)}function nr(t,e,r){var n="=="!==t&&"!="!==t;return function(){function i(t,e,r){this.type=jt,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind;}return i.parse=function(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.");var r=t[0],a=e.parse(t[1],1,Kt);if(!a)return null;if(!er(r,a.type))return e.concat(1).error('"'+r+"\" comparisons are not supported for type '"+Ht(a.type)+"'.");var o=e.parse(t[2],2,Kt);if(!o)return null;if(!er(r,o.type))return e.concat(2).error('"'+r+"\" comparisons are not supported for type '"+Ht(o.type)+"'.");if(a.type.kind!==o.type.kind&&"value"!==a.type.kind&&"value"!==o.type.kind)return e.error("Cannot compare types '"+Ht(a.type)+"' and '"+Ht(o.type)+"'.");n&&("value"===a.type.kind&&"value"!==o.type.kind?a=new pe(o.type,[a]):"value"!==a.type.kind&&"value"===o.type.kind&&(o=new pe(a.type,[o])));var s=null;if(4===t.length){if("string"!==a.type.kind&&"string"!==o.type.kind&&"value"!==a.type.kind&&"value"!==o.type.kind)return e.error("Cannot use collator to compare non-string types.");if(!(s=e.parse(t[3],3,Xt)))return null}return new i(a,o,s)},i.prototype.evaluate=function(i){var a=this.lhs.evaluate(i),o=this.rhs.evaluate(i);if(n&&this.hasUntypedArgument){var s=ae(a),u=ae(o);if(s.kind!==u.kind||"string"!==s.kind&&"number"!==s.kind)throw new ue('Expected arguments for "'+t+'" to be (string, string) or (number, number), but found ('+s.kind+", "+u.kind+") instead.")}if(this.collator&&!n&&this.hasUntypedArgument){var l=ae(a),p=ae(o);if("string"!==l.kind||"string"!==p.kind)return e(i,a,o)}return this.collator?r(i,a,o,this.collator.evaluate(i)):e(i,a,o)},i.prototype.eachChild=function(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator);},i.prototype.possibleOutputs=function(){return [!0,!1]},i.prototype.serialize=function(){var e=[t];return this.eachChild((function(t){e.push(t.serialize());})),e},i}()}tr.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found only "+(t.length-1)+".");if(t.length%2!=0)return e.error("Expected an odd number of arguments.");var r;e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType);for(var n=[],i=1;i<t.length-1;i+=2){var a=e.parse(t[i],i,jt);if(!a)return null;var o=e.parse(t[i+1],i+1,r);if(!o)return null;n.push([a,o]),r=r||o.type;}var s=e.parse(t[t.length-1],t.length-1,r);return s?new tr(r,n,s):null},tr.prototype.evaluate=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[0],a=n[1];if(i.evaluate(t))return a.evaluate(t)}return this.otherwise.evaluate(t)},tr.prototype.eachChild=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[0],a=n[1];t(i),t(a);}t(this.otherwise);},tr.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.branches.map((function(t){t[0];return t[1].possibleOutputs()}))).concat(this.otherwise.possibleOutputs())},tr.prototype.serialize=function(){var t=["case"];return this.eachChild((function(e){t.push(e.serialize());})),t};var ir=nr("==",(function(t,e,r){return e===r}),rr),ar=nr("!=",(function(t,e,r){return e!==r}),(function(t,e,r,n){return !rr(0,e,r,n)})),or=nr("<",(function(t,e,r){return e<r}),(function(t,e,r,n){return n.compare(e,r)<0})),sr=nr(">",(function(t,e,r){return e>r}),(function(t,e,r,n){return n.compare(e,r)>0})),ur=nr("<=",(function(t,e,r){return e<=r}),(function(t,e,r,n){return n.compare(e,r)<=0})),lr=nr(">=",(function(t,e,r){return e>=r}),(function(t,e,r,n){return n.compare(e,r)>=0})),pr=function(t,e,r,n,i){this.type=Ut,this.number=t,this.locale=e,this.currency=r,this.minFractionDigits=n,this.maxFractionDigits=i;};pr.parse=function(t,e){if(3!==t.length)return e.error("Expected two arguments.");var r=e.parse(t[1],1,Rt);if(!r)return null;var n=t[2];if("object"!=typeof n||Array.isArray(n))return e.error("NumberFormat options argument must be an object.");var i=null;if(n.locale&&!(i=e.parse(n.locale,1,Ut)))return null;var a=null;if(n.currency&&!(a=e.parse(n.currency,1,Ut)))return null;var o=null;if(n["min-fraction-digits"]&&!(o=e.parse(n["min-fraction-digits"],1,Rt)))return null;var s=null;return n["max-fraction-digits"]&&!(s=e.parse(n["max-fraction-digits"],1,Rt))?null:new pr(r,i,a,o,s)},pr.prototype.evaluate=function(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))},pr.prototype.eachChild=function(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits);},pr.prototype.possibleOutputs=function(){return [void 0]},pr.prototype.serialize=function(){var t={};return this.locale&&(t.locale=this.locale.serialize()),this.currency&&(t.currency=this.currency.serialize()),this.minFractionDigits&&(t["min-fraction-digits"]=this.minFractionDigits.serialize()),this.maxFractionDigits&&(t["max-fraction-digits"]=this.maxFractionDigits.serialize()),["number-format",this.number.serialize(),t]};var cr=function(t){this.type=Rt,this.input=t;};cr.parse=function(t,e){if(2!==t.length)return e.error("Expected 1 argument, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1);return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error("Expected argument of type string or array, but found "+Ht(r.type)+" instead."):new cr(r):null},cr.prototype.evaluate=function(t){var e=this.input.evaluate(t);if("string"==typeof e)return e.length;if(Array.isArray(e))return e.length;throw new ue("Expected value to be of type string or array, but found "+Ht(ae(e))+" instead.")},cr.prototype.eachChild=function(t){t(this.input);},cr.prototype.possibleOutputs=function(){return [void 0]},cr.prototype.serialize=function(){var t=["length"];return this.eachChild((function(e){t.push(e.serialize());})),t};var hr={"==":ir,"!=":ar,">":sr,"<":or,">=":lr,"<=":ur,array:pe,at:$e,boolean:pe,case:tr,coalesce:He,collator:ge,format:ce,image:he,in:We,interpolate:Ge,"interpolate-hcl":Ge,"interpolate-lab":Ge,length:cr,let:Ye,literal:se,match:Qe,number:pe,"number-format":pr,object:pe,step:ke,string:pe,"to-boolean":ye,"to-color":ye,"to-number":ye,"to-string":ye,var:we};function fr(t,e){var r=e[0],n=e[1],i=e[2],a=e[3];r=r.evaluate(t),n=n.evaluate(t),i=i.evaluate(t);var o=a?a.evaluate(t):1,s=ie(r,n,i,o);if(s)throw new ue(s);return new Qt(r/255*o,n/255*o,i/255*o,o)}function yr(t,e){return t in e}function dr(t,e){var r=e[t];return void 0===r?null:r}function mr(t){return {type:t}}function vr(t){return {result:"success",value:t}}function gr(t){return {result:"error",value:t}}function xr(t){return "data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function br(t){return !!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function _r(t){return !!t.expression&&t.expression.interpolated}function wr(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function Ar(t){return "object"==typeof t&&null!==t&&!Array.isArray(t)}function Sr(t){return t}function kr(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function Ir(t,e,r,n,i){return kr(typeof r===i?n[r]:void 0,t.default,e.default)}function zr(t,e,r){if("number"!==wr(r))return kr(t.default,e.default);var n=t.stops.length;if(1===n)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[n-1][0])return t.stops[n-1][1];var i=Se(t.stops.map((function(t){return t[0]})),r);return t.stops[i][1]}function Cr(t,e,r){var n=void 0!==t.base?t.base:1;if("number"!==wr(r))return kr(t.default,e.default);var i=t.stops.length;if(1===i)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[i-1][0])return t.stops[i-1][1];var a=Se(t.stops.map((function(t){return t[0]})),r),o=function(t,e,r,n){var i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}(r,n,t.stops[a][0],t.stops[a+1][0]),s=t.stops[a][1],u=t.stops[a+1][1],l=ze[e.type]||Sr;if(t.colorSpace&&"rgb"!==t.colorSpace){var p=Ze[t.colorSpace];l=function(t,e){return p.reverse(p.interpolate(p.forward(t),p.forward(e),o))};}return "function"==typeof s.evaluate?{evaluate:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var r=s.evaluate.apply(void 0,t),n=u.evaluate.apply(void 0,t);if(void 0!==r&&void 0!==n)return l(r,n,o)}}:l(s,u,o)}function Br(t,e,r){return "color"===e.type?r=Qt.parse(r):"formatted"===e.type?r=re.fromString(r.toString()):"resolvedImage"===e.type?r=ne.fromString(r.toString()):wr(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0),kr(r,t.default,e.default)}ve.register(hr,{error:[{kind:"error"},[Ut],function(t,e){var r=e[0];throw new ue(r.evaluate(t))}],typeof:[Ut,[Kt],function(t,e){return Ht(ae(e[0].evaluate(t)))}],"to-rgba":[Jt(Rt,4),[qt],function(t,e){return e[0].evaluate(t).toArray()}],rgb:[qt,[Rt,Rt,Rt],fr],rgba:[qt,[Rt,Rt,Rt,Rt],fr],has:{type:jt,overloads:[[[Ut],function(t,e){return yr(e[0].evaluate(t),t.properties())}],[[Ut,Nt],function(t,e){var r=e[0],n=e[1];return yr(r.evaluate(t),n.evaluate(t))}]]},get:{type:Kt,overloads:[[[Ut],function(t,e){return dr(e[0].evaluate(t),t.properties())}],[[Ut,Nt],function(t,e){var r=e[0],n=e[1];return dr(r.evaluate(t),n.evaluate(t))}]]},"feature-state":[Kt,[Ut],function(t,e){return dr(e[0].evaluate(t),t.featureState||{})}],properties:[Nt,[],function(t){return t.properties()}],"geometry-type":[Ut,[],function(t){return t.geometryType()}],id:[Kt,[],function(t){return t.id()}],zoom:[Rt,[],function(t){return t.globals.zoom}],"heatmap-density":[Rt,[],function(t){return t.globals.heatmapDensity||0}],"line-progress":[Rt,[],function(t){return t.globals.lineProgress||0}],accumulated:[Kt,[],function(t){return void 0===t.globals.accumulated?null:t.globals.accumulated}],"+":[Rt,mr(Rt),function(t,e){for(var r=0,n=0,i=e;n<i.length;n+=1){r+=i[n].evaluate(t);}return r}],"*":[Rt,mr(Rt),function(t,e){for(var r=1,n=0,i=e;n<i.length;n+=1){r*=i[n].evaluate(t);}return r}],"-":{type:Rt,overloads:[[[Rt,Rt],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)-n.evaluate(t)}],[[Rt],function(t,e){return -e[0].evaluate(t)}]]},"/":[Rt,[Rt,Rt],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)/n.evaluate(t)}],"%":[Rt,[Rt,Rt],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)%n.evaluate(t)}],ln2:[Rt,[],function(){return Math.LN2}],pi:[Rt,[],function(){return Math.PI}],e:[Rt,[],function(){return Math.E}],"^":[Rt,[Rt,Rt],function(t,e){var r=e[0],n=e[1];return Math.pow(r.evaluate(t),n.evaluate(t))}],sqrt:[Rt,[Rt],function(t,e){var r=e[0];return Math.sqrt(r.evaluate(t))}],log10:[Rt,[Rt],function(t,e){var r=e[0];return Math.log(r.evaluate(t))/Math.LN10}],ln:[Rt,[Rt],function(t,e){var r=e[0];return Math.log(r.evaluate(t))}],log2:[Rt,[Rt],function(t,e){var r=e[0];return Math.log(r.evaluate(t))/Math.LN2}],sin:[Rt,[Rt],function(t,e){var r=e[0];return Math.sin(r.evaluate(t))}],cos:[Rt,[Rt],function(t,e){var r=e[0];return Math.cos(r.evaluate(t))}],tan:[Rt,[Rt],function(t,e){var r=e[0];return Math.tan(r.evaluate(t))}],asin:[Rt,[Rt],function(t,e){var r=e[0];return Math.asin(r.evaluate(t))}],acos:[Rt,[Rt],function(t,e){var r=e[0];return Math.acos(r.evaluate(t))}],atan:[Rt,[Rt],function(t,e){var r=e[0];return Math.atan(r.evaluate(t))}],min:[Rt,mr(Rt),function(t,e){return Math.min.apply(Math,e.map((function(e){return e.evaluate(t)})))}],max:[Rt,mr(Rt),function(t,e){return Math.max.apply(Math,e.map((function(e){return e.evaluate(t)})))}],abs:[Rt,[Rt],function(t,e){var r=e[0];return Math.abs(r.evaluate(t))}],round:[Rt,[Rt],function(t,e){var r=e[0].evaluate(t);return r<0?-Math.round(-r):Math.round(r)}],floor:[Rt,[Rt],function(t,e){var r=e[0];return Math.floor(r.evaluate(t))}],ceil:[Rt,[Rt],function(t,e){var r=e[0];return Math.ceil(r.evaluate(t))}],"filter-==":[jt,[Ut,Kt],function(t,e){var r=e[0],n=e[1];return t.properties()[r.value]===n.value}],"filter-id-==":[jt,[Kt],function(t,e){var r=e[0];return t.id()===r.value}],"filter-type-==":[jt,[Ut],function(t,e){var r=e[0];return t.geometryType()===r.value}],"filter-<":[jt,[Ut,Kt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i<a}],"filter-id-<":[jt,[Kt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<i}],"filter->":[jt,[Ut,Kt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i>a}],"filter-id->":[jt,[Kt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>i}],"filter-<=":[jt,[Ut,Kt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i<=a}],"filter-id-<=":[jt,[Kt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<=i}],"filter->=":[jt,[Ut,Kt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i>=a}],"filter-id->=":[jt,[Kt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>=i}],"filter-has":[jt,[Kt],function(t,e){return e[0].value in t.properties()}],"filter-has-id":[jt,[],function(t){return null!==t.id()}],"filter-type-in":[jt,[Jt(Ut)],function(t,e){return e[0].value.indexOf(t.geometryType())>=0}],"filter-id-in":[jt,[Jt(Kt)],function(t,e){return e[0].value.indexOf(t.id())>=0}],"filter-in-small":[jt,[Ut,Jt(Kt)],function(t,e){var r=e[0];return e[1].value.indexOf(t.properties()[r.value])>=0}],"filter-in-large":[jt,[Ut,Jt(Kt)],function(t,e){var r=e[0],n=e[1];return function(t,e,r,n){for(;r<=n;){var i=r+n>>1;if(e[i]===t)return !0;e[i]>t?n=i-1:r=i+1;}return !1}(t.properties()[r.value],n.value,0,n.value.length-1)}],all:{type:jt,overloads:[[[jt,jt],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)&&n.evaluate(t)}],[mr(jt),function(t,e){for(var r=0,n=e;r<n.length;r+=1){if(!n[r].evaluate(t))return !1}return !0}]]},any:{type:jt,overloads:[[[jt,jt],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)||n.evaluate(t)}],[mr(jt),function(t,e){for(var r=0,n=e;r<n.length;r+=1){if(n[r].evaluate(t))return !0}return !1}]]},"!":[jt,[jt],function(t,e){return !e[0].evaluate(t)}],"is-supported-script":[jt,[Ut],function(t,e){var r=e[0],n=t.globals&&t.globals.isSupportedScript;return !n||n(r.evaluate(t))}],upcase:[Ut,[Ut],function(t,e){return e[0].evaluate(t).toUpperCase()}],downcase:[Ut,[Ut],function(t,e){return e[0].evaluate(t).toLowerCase()}],concat:[Ut,mr(Kt),function(t,e){return e.map((function(e){return oe(e.evaluate(t))})).join("")}],"resolved-locale":[Ut,[Xt],function(t,e){return e[0].evaluate(t).resolvedLocale()}]});var Tr=function(t,e){this.expression=t,this._warningHistory={},this._evaluator=new me,this._defaultValue=e?function(t){return "color"===t.type&&Ar(t.default)?new Qt(0,0,0,0):"color"===t.type?Qt.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null;};function Pr(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in hr}function Er(t,e){var r=new Ae(hr,[],e?function(t){var e={color:qt,string:Ut,number:Rt,enum:Ut,boolean:jt,formatted:Zt,resolvedImage:Gt};if("array"===t.type)return Jt(e[t.value]||Kt,t.length);return e[t.type]}(e):void 0),n=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0);return n?vr(new Tr(n,e)):gr(r.errors)}Tr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n,i){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=i,this.expression.evaluate(this._evaluator)},Tr.prototype.evaluate=function(t,e,r,n,i){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=i||null;try{var a=this.expression.evaluate(this._evaluator);if(null==a||"number"==typeof a&&a!=a)return this._defaultValue;if(this._enumValues&&!(a in this._enumValues))throw new ue("Expected value to be one of "+Object.keys(this._enumValues).map((function(t){return JSON.stringify(t)})).join(", ")+", but found "+JSON.stringify(a)+" instead.");return a}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}};var Mr=function(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!be(e.expression);};Mr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n,i){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i)},Mr.prototype.evaluate=function(t,e,r,n,i){return this._styleExpression.evaluate(t,e,r,n,i)};var Vr=function(t,e,r,n){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!be(e.expression),this.interpolationType=n;};function Fr(t,e){if("error"===(t=Er(t,e)).result)return t;var r=t.value.expression,n=xe(r);if(!n&&!xr(e))return gr([new Lt("","data expressions not supported")]);var i=_e(r,["zoom"]);if(!i&&!br(e))return gr([new Lt("","zoom expressions not supported")]);var a=function t(e){var r=null;if(e instanceof Ye)r=t(e.result);else if(e instanceof He)for(var n=0,i=e.args;n<i.length;n+=1){var a=i[n];if(r=t(a))break}else(e instanceof ke||e instanceof Ge)&&e.input instanceof ve&&"zoom"===e.input.name&&(r=e);if(r instanceof Lt)return r;e.eachChild((function(e){var n=t(e);n instanceof Lt?r=n:!r&&n?r=new Lt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):r&&n&&r!==n&&(r=new Lt("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));}));return r}(r);if(!a&&!i)return gr([new Lt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);if(a instanceof Lt)return gr([a]);if(a instanceof Ge&&!_r(e))return gr([new Lt("",'"interpolate" expressions cannot be used with this property')]);if(!a)return vr(new Mr(n?"constant":"source",t.value));var o=a instanceof Ge?a.interpolation:void 0;return vr(new Vr(n?"camera":"composite",t.value,a.labels,o))}Vr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n,i){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i)},Vr.prototype.evaluate=function(t,e,r,n,i){return this._styleExpression.evaluate(t,e,r,n,i)},Vr.prototype.interpolationFactor=function(t,e,r){return this.interpolationType?Ge.interpolationFactor(this.interpolationType,t,e,r):0};var Lr=function(t,e){this._parameters=t,this._specification=e,Mt(this,function t(e,r){var n,i,a,o="color"===r.type,s=e.stops&&"object"==typeof e.stops[0][0],u=s||void 0!==e.property,l=s||!u,p=e.type||(_r(r)?"exponential":"interval");if(o&&((e=Mt({},e)).stops&&(e.stops=e.stops.map((function(t){return [t[0],Qt.parse(t[1])]}))),e.default?e.default=Qt.parse(e.default):e.default=Qt.parse(r.default)),e.colorSpace&&"rgb"!==e.colorSpace&&!Ze[e.colorSpace])throw new Error("Unknown color space: "+e.colorSpace);if("exponential"===p)n=Cr;else if("interval"===p)n=zr;else if("categorical"===p){n=Ir,i=Object.create(null);for(var c=0,h=e.stops;c<h.length;c+=1){var f=h[c];i[f[0]]=f[1];}a=typeof e.stops[0][0];}else{if("identity"!==p)throw new Error('Unknown function type "'+p+'"');n=Br;}if(s){for(var y={},d=[],m=0;m<e.stops.length;m++){var v=e.stops[m],g=v[0].zoom;void 0===y[g]&&(y[g]={zoom:g,type:e.type,property:e.property,default:e.default,stops:[]},d.push(g)),y[g].stops.push([v[0].value,v[1]]);}for(var x=[],b=0,_=d;b<_.length;b+=1){var w=_[b];x.push([y[w].zoom,t(y[w],r)]);}var A={name:"linear"};return {kind:"composite",interpolationType:A,interpolationFactor:Ge.interpolationFactor.bind(void 0,A),zoomStops:x.map((function(t){return t[0]})),evaluate:function(t,n){var i=t.zoom;return Cr({stops:x,base:e.base},r,i).evaluate(i,n)}}}if(l){var S="exponential"===p?{name:"exponential",base:void 0!==e.base?e.base:1}:null;return {kind:"camera",interpolationType:S,interpolationFactor:Ge.interpolationFactor.bind(void 0,S),zoomStops:e.stops.map((function(t){return t[0]})),evaluate:function(t){var o=t.zoom;return n(e,r,o,i,a)}}}return {kind:"source",evaluate:function(t,o){var s=o&&o.properties?o.properties[e.property]:void 0;return void 0===s?kr(e.default,r.default):n(e,r,s,i,a)}}}(this._parameters,this._specification));};function Or(t){var e=t.key,r=t.value,n=t.valueSpec||{},i=t.objectElementValidators||{},a=t.style,o=t.styleSpec,s=[],u=wr(r);if("object"!==u)return [new Pt(e,r,"object expected, "+u+" found")];for(var l in r){var p=l.split(".")[0],c=n[p]||n["*"],h=void 0;if(i[p])h=i[p];else if(n[p])h=un;else if(i["*"])h=i["*"];else{if(!n["*"]){s.push(new Pt(e,r[l],'unknown property "'+l+'"'));continue}h=un;}s=s.concat(h({key:(e?e+".":e)+l,value:r[l],valueSpec:c,style:a,styleSpec:o,object:r,objectKey:l},r));}for(var f in n)i[f]||n[f].required&&void 0===n[f].default&&void 0===r[f]&&s.push(new Pt(e,r,'missing required property "'+f+'"'));return s}function Dr(t){var e=t.value,r=t.valueSpec,n=t.style,i=t.styleSpec,a=t.key,o=t.arrayElementValidator||un;if("array"!==wr(e))return [new Pt(a,e,"array expected, "+wr(e)+" found")];if(r.length&&e.length!==r.length)return [new Pt(a,e,"array length "+r.length+" expected, length "+e.length+" found")];if(r["min-length"]&&e.length<r["min-length"])return [new Pt(a,e,"array length at least "+r["min-length"]+" expected, length "+e.length+" found")];var s={type:r.value,values:r.values};i.$version<7&&(s.function=r.function),"object"===wr(r.value)&&(s=r.value);for(var u=[],l=0;l<e.length;l++)u=u.concat(o({array:e,arrayIndex:l,value:e[l],valueSpec:s,style:n,styleSpec:i,key:a+"["+l+"]"}));return u}function Rr(t){var e=t.key,r=t.value,n=t.valueSpec,i=wr(r);return "number"===i&&r!=r&&(i="NaN"),"number"!==i?[new Pt(e,r,"number expected, "+i+" found")]:"minimum"in n&&r<n.minimum?[new Pt(e,r,r+" is less than the minimum value "+n.minimum)]:"maximum"in n&&r>n.maximum?[new Pt(e,r,r+" is greater than the maximum value "+n.maximum)]:[]}function Ur(t){var e,r,n,i=t.valueSpec,a=Vt(t.value.type),o={},s="categorical"!==a&&void 0===t.value.property,u=!s,l="array"===wr(t.value.stops)&&"array"===wr(t.value.stops[0])&&"object"===wr(t.value.stops[0][0]),p=Or({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===a)return [new Pt(t.key,t.value,'identity function may not have a "stops" property')];var e=[],r=t.value;e=e.concat(Dr({key:t.key,value:r,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:c})),"array"===wr(r)&&0===r.length&&e.push(new Pt(t.key,r,"array must have at least one stop"));return e},default:function(t){return un({key:t.key,value:t.value,valueSpec:i,style:t.style,styleSpec:t.styleSpec})}}});return "identity"===a&&s&&p.push(new Pt(t.key,t.value,'missing required property "property"')),"identity"===a||t.value.stops||p.push(new Pt(t.key,t.value,'missing required property "stops"')),"exponential"===a&&t.valueSpec.expression&&!_r(t.valueSpec)&&p.push(new Pt(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(u&&!xr(t.valueSpec)?p.push(new Pt(t.key,t.value,"property functions not supported")):s&&!br(t.valueSpec)&&p.push(new Pt(t.key,t.value,"zoom functions not supported"))),"categorical"!==a&&!l||void 0!==t.value.property||p.push(new Pt(t.key,t.value,'"property" property is required')),p;function c(t){var e=[],a=t.value,s=t.key;if("array"!==wr(a))return [new Pt(s,a,"array expected, "+wr(a)+" found")];if(2!==a.length)return [new Pt(s,a,"array length 2 expected, length "+a.length+" found")];if(l){if("object"!==wr(a[0]))return [new Pt(s,a,"object expected, "+wr(a[0])+" found")];if(void 0===a[0].zoom)return [new Pt(s,a,"object stop key must have zoom")];if(void 0===a[0].value)return [new Pt(s,a,"object stop key must have value")];if(n&&n>Vt(a[0].zoom))return [new Pt(s,a[0].zoom,"stop zoom values must appear in ascending order")];Vt(a[0].zoom)!==n&&(n=Vt(a[0].zoom),r=void 0,o={}),e=e.concat(Or({key:s+"[0]",value:a[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:Rr,value:h}}));}else e=e.concat(h({key:s+"[0]",value:a[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},a));return Pr(Ft(a[1]))?e.concat([new Pt(s+"[1]",a[1],"expressions are not allowed in function stops.")]):e.concat(un({key:s+"[1]",value:a[1],valueSpec:i,style:t.style,styleSpec:t.styleSpec}))}function h(t,n){var s=wr(t.value),u=Vt(t.value),l=null!==t.value?t.value:n;if(e){if(s!==e)return [new Pt(t.key,l,s+" stop domain type must match previous stop domain type "+e)]}else e=s;if("number"!==s&&"string"!==s&&"boolean"!==s)return [new Pt(t.key,l,"stop domain value must be a number, string, or boolean")];if("number"!==s&&"categorical"!==a){var p="number expected, "+s+" found";return xr(i)&&void 0===a&&(p+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new Pt(t.key,l,p)]}return "categorical"!==a||"number"!==s||isFinite(u)&&Math.floor(u)===u?"categorical"!==a&&"number"===s&&void 0!==r&&u<r?[new Pt(t.key,l,"stop domain values must appear in ascending order")]:(r=u,"categorical"===a&&u in o?[new Pt(t.key,l,"stop domain values must be unique")]:(o[u]=!0,[])):[new Pt(t.key,l,"integer expected, found "+u)]}}function jr(t){var e=("property"===t.expressionContext?Fr:Er)(Ft(t.value),t.valueSpec);if("error"===e.result)return e.value.map((function(e){return new Pt(""+t.key+e.key,t.value,e.message)}));var r=e.value.expression||e.value._styleExpression.expression;if("property"===t.expressionContext&&"text-font"===t.propertyKey&&-1!==r.possibleOutputs().indexOf(void 0))return [new Pt(t.key,t.value,'Invalid data expression for "'+t.propertyKey+'". Output values must be contained as literals within the expression.')];if("property"===t.expressionContext&&"layout"===t.propertyType&&!be(r))return [new Pt(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')];if("filter"===t.expressionContext&&!be(r))return [new Pt(t.key,t.value,'"feature-state" data expressions are not supported with filters.')];if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!_e(r,["zoom","feature-state"]))return [new Pt(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')];if("cluster-initial"===t.expressionContext&&!xe(r))return [new Pt(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return []}function qr(t){var e=t.key,r=t.value,n=t.valueSpec,i=[];return Array.isArray(n.values)?-1===n.values.indexOf(Vt(r))&&i.push(new Pt(e,r,"expected one of ["+n.values.join(", ")+"], "+JSON.stringify(r)+" found")):-1===Object.keys(n.values).indexOf(Vt(r))&&i.push(new Pt(e,r,"expected one of ["+Object.keys(n.values).join(", ")+"], "+JSON.stringify(r)+" found")),i}function Nr(t){if(!0===t||!1===t)return !0;if(!Array.isArray(t)||0===t.length)return !1;switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1];case"in":return t.length>=3&&Array.isArray(t[2]);case"!in":case"!has":case"none":return !1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2]);case"any":case"all":for(var e=0,r=t.slice(1);e<r.length;e+=1){var n=r[e];if(!Nr(n)&&"boolean"!=typeof n)return !1}return !0;default:return !0}}Lr.deserialize=function(t){return new Lr(t._parameters,t._specification)},Lr.serialize=function(t){return {_parameters:t._parameters,_specification:t._specification}};var Kr={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}};function Xr(t){if(null==t)return function(){return !0};Nr(t)||(t=Gr(t));var e=Er(t,Kr);if("error"===e.result)throw new Error(e.value.map((function(t){return t.key+": "+t.message})).join(", "));return function(t,r){return e.value.evaluate(t,r)}}function Zr(t,e){return t<e?-1:t>e?1:0}function Gr(t){if(!t)return !0;var e,r=t[0];return t.length<=1?"any"!==r:"=="===r?Jr(t[1],t[2],"=="):"!="===r?$r(Jr(t[1],t[2],"==")):"<"===r||">"===r||"<="===r||">="===r?Jr(t[1],t[2],r):"any"===r?(e=t.slice(1),["any"].concat(e.map(Gr))):"all"===r?["all"].concat(t.slice(1).map(Gr)):"none"===r?["all"].concat(t.slice(1).map(Gr).map($r)):"in"===r?Hr(t[1],t.slice(2)):"!in"===r?$r(Hr(t[1],t.slice(2))):"has"===r?Yr(t[1]):"!has"!==r||$r(Yr(t[1]))}function Jr(t,e,r){switch(t){case"$type":return ["filter-type-"+r,e];case"$id":return ["filter-id-"+r,e];default:return ["filter-"+r,t,e]}}function Hr(t,e){if(0===e.length)return !1;switch(t){case"$type":return ["filter-type-in",["literal",e]];case"$id":return ["filter-id-in",["literal",e]];default:return e.length>200&&!e.some((function(t){return typeof t!=typeof e[0]}))?["filter-in-large",t,["literal",e.sort(Zr)]]:["filter-in-small",t,["literal",e]]}}function Yr(t){switch(t){case"$type":return !0;case"$id":return ["filter-has-id"];default:return ["filter-has",t]}}function $r(t){return ["!",t]}function Wr(t){return Nr(Ft(t.value))?jr(Mt({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):function t(e){var r=e.value;var n=e.key;if("array"!==wr(r))return [new Pt(n,r,"array expected, "+wr(r)+" found")];var i=e.styleSpec;var a;var o=[];if(r.length<1)return [new Pt(n,r,"filter array must have at least 1 element")];o=o.concat(qr({key:n+"[0]",value:r[0],valueSpec:i.filter_operator,style:e.style,styleSpec:e.styleSpec}));switch(Vt(r[0])){case"<":case"<=":case">":case">=":r.length>=2&&"$type"===Vt(r[1])&&o.push(new Pt(n,r,'"$type" cannot be use with operator "'+r[0]+'"'));case"==":case"!=":3!==r.length&&o.push(new Pt(n,r,'filter array for operator "'+r[0]+'" must have 3 elements'));case"in":case"!in":r.length>=2&&"string"!==(a=wr(r[1]))&&o.push(new Pt(n+"[1]",r[1],"string expected, "+a+" found"));for(var s=2;s<r.length;s++)a=wr(r[s]),"$type"===Vt(r[1])?o=o.concat(qr({key:n+"["+s+"]",value:r[s],valueSpec:i.geometry_type,style:e.style,styleSpec:e.styleSpec})):"string"!==a&&"number"!==a&&"boolean"!==a&&o.push(new Pt(n+"["+s+"]",r[s],"string, number, or boolean expected, "+a+" found"));break;case"any":case"all":case"none":for(var u=1;u<r.length;u++)o=o.concat(t({key:n+"["+u+"]",value:r[u],style:e.style,styleSpec:e.styleSpec}));break;case"has":case"!has":a=wr(r[1]),2!==r.length?o.push(new Pt(n,r,'filter array for "'+r[0]+'" operator must have 2 elements')):"string"!==a&&o.push(new Pt(n+"[1]",r[1],"string expected, "+a+" found"));}return o}(t)}function Qr(t,e){var r=t.key,n=t.style,i=t.styleSpec,a=t.value,o=t.objectKey,s=i[e+"_"+t.layerType];if(!s)return [];var u=o.match(/^(.*)-transition$/);if("paint"===e&&u&&s[u[1]]&&s[u[1]].transition)return un({key:r,value:a,valueSpec:i.transition,style:n,styleSpec:i});var l,p=t.valueSpec||s[o];if(!p)return [new Pt(r,a,'unknown property "'+o+'"')];if("string"===wr(a)&&xr(p)&&!p.tokens&&(l=/^{([^}]+)}$/.exec(a)))return [new Pt(r,a,'"'+o+'" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": '+JSON.stringify(l[1])+" }`.")];var c=[];return "symbol"===t.layerType&&("text-field"===o&&n&&!n.glyphs&&c.push(new Pt(r,a,'use of "text-field" requires a style "glyphs" property')),"text-font"===o&&Ar(Ft(a))&&"identity"===Vt(a.type)&&c.push(new Pt(r,a,'"text-font" does not support identity functions'))),c.concat(un({key:t.key,value:a,valueSpec:p,style:n,styleSpec:i,expressionContext:"property",propertyType:e,propertyKey:o}))}function tn(t){return Qr(t,"paint")}function en(t){return Qr(t,"layout")}function rn(t){var e=[],r=t.value,n=t.key,i=t.style,a=t.styleSpec;r.type||r.ref||e.push(new Pt(n,r,'either "type" or "ref" is required'));var o,s=Vt(r.type),u=Vt(r.ref);if(r.id)for(var l=Vt(r.id),p=0;p<t.arrayIndex;p++){var c=i.layers[p];Vt(c.id)===l&&e.push(new Pt(n,r.id,'duplicate layer id "'+r.id+'", previously used at line '+c.id.__line__));}if("ref"in r)["type","source","source-layer","filter","layout"].forEach((function(t){t in r&&e.push(new Pt(n,r[t],'"'+t+'" is prohibited for ref layers'));})),i.layers.forEach((function(t){Vt(t.id)===u&&(o=t);})),o?o.ref?e.push(new Pt(n,r.ref,"ref cannot reference another ref layer")):s=Vt(o.type):e.push(new Pt(n,r.ref,'ref layer "'+u+'" not found'));else if("background"!==s)if(r.source){var h=i.sources&&i.sources[r.source],f=h&&Vt(h.type);h?"vector"===f&&"raster"===s?e.push(new Pt(n,r.source,'layer "'+r.id+'" requires a raster source')):"raster"===f&&"raster"!==s?e.push(new Pt(n,r.source,'layer "'+r.id+'" requires a vector source')):"vector"!==f||r["source-layer"]?"raster-dem"===f&&"hillshade"!==s?e.push(new Pt(n,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==s||!r.paint||!r.paint["line-gradient"]||"geojson"===f&&h.lineMetrics||e.push(new Pt(n,r,'layer "'+r.id+'" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.')):e.push(new Pt(n,r,'layer "'+r.id+'" must specify a "source-layer"')):e.push(new Pt(n,r.source,'source "'+r.source+'" not found'));}else e.push(new Pt(n,r,'missing required property "source"'));return e=e.concat(Or({key:n,value:r,valueSpec:a.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(){return []},type:function(){return un({key:n+".type",value:r.type,valueSpec:a.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"})},filter:Wr,layout:function(t){return Or({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return en(Mt({layerType:s},t))}}})},paint:function(t){return Or({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return tn(Mt({layerType:s},t))}}})}}}))}function nn(t){var e=t.value,r=t.key,n=t.styleSpec,i=t.style;if(!e.type)return [new Pt(r,e,'"type" is required')];var a,o=Vt(e.type);switch(o){case"vector":case"raster":case"raster-dem":return a=Or({key:r,value:e,valueSpec:n["source_"+o.replace("-","_")],style:t.style,styleSpec:n});case"geojson":if(a=Or({key:r,value:e,valueSpec:n.source_geojson,style:i,styleSpec:n}),e.cluster)for(var s in e.clusterProperties){var u=e.clusterProperties[s],l=u[0],p=u[1],c="string"==typeof l?[l,["accumulated"],["get",s]]:l;a.push.apply(a,jr({key:r+"."+s+".map",value:p,expressionContext:"cluster-map"})),a.push.apply(a,jr({key:r+"."+s+".reduce",value:c,expressionContext:"cluster-reduce"}));}return a;case"video":return Or({key:r,value:e,valueSpec:n.source_video,style:i,styleSpec:n});case"image":return Or({key:r,value:e,valueSpec:n.source_image,style:i,styleSpec:n});case"canvas":return [new Pt(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")];default:return qr({key:r+".type",value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:i,styleSpec:n})}}function an(t){var e=t.value,r=t.styleSpec,n=r.light,i=t.style,a=[],o=wr(e);if(void 0===e)return a;if("object"!==o)return a=a.concat([new Pt("light",e,"object expected, "+o+" found")]);for(var s in e){var u=s.match(/^(.*)-transition$/);a=u&&n[u[1]]&&n[u[1]].transition?a.concat(un({key:s,value:e[s],valueSpec:r.transition,style:i,styleSpec:r})):n[s]?a.concat(un({key:s,value:e[s],valueSpec:n[s],style:i,styleSpec:r})):a.concat([new Pt(s,e[s],'unknown property "'+s+'"')]);}return a}function on(t){var e=t.value,r=t.key,n=wr(e);return "string"!==n?[new Pt(r,e,"string expected, "+n+" found")]:[]}var sn={"*":function(){return []},array:Dr,boolean:function(t){var e=t.value,r=t.key,n=wr(e);return "boolean"!==n?[new Pt(r,e,"boolean expected, "+n+" found")]:[]},number:Rr,color:function(t){var e=t.key,r=t.value,n=wr(r);return "string"!==n?[new Pt(e,r,"color expected, "+n+" found")]:null===Wt(r)?[new Pt(e,r,'color expected, "'+r+'" found')]:[]},constants:Et,enum:qr,filter:Wr,function:Ur,layer:rn,object:Or,source:nn,light:an,string:on,formatted:function(t){return 0===on(t).length?[]:jr(t)},resolvedImage:function(t){return 0===on(t).length?[]:jr(t)}};function un(t){var e=t.value,r=t.valueSpec,n=t.styleSpec;return r.expression&&Ar(Vt(e))?Ur(t):r.expression&&Pr(Ft(e))?jr(t):r.type&&sn[r.type]?sn[r.type](t):Or(Mt({},t,{valueSpec:r.type?n[r.type]:r}))}function ln(t){var e=t.value,r=t.key,n=on(t);return n.length?n:(-1===e.indexOf("{fontstack}")&&n.push(new Pt(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&n.push(new Pt(r,e,'"glyphs" url must include a "{range}" token')),n)}function pn(t,e){void 0===e&&(e=Tt);var r=[];return r=r.concat(un({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:ln,"*":function(){return []}}})),t.constants&&(r=r.concat(Et({key:"constants",value:t.constants,style:t,styleSpec:e}))),cn(r)}function cn(t){return [].concat(t).sort((function(t,e){return t.line-e.line}))}function hn(t){return function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return cn(t.apply(this,e))}}pn.source=hn(nn),pn.light=hn(an),pn.layer=hn(rn),pn.filter=hn(Wr),pn.paintProperty=hn(tn),pn.layoutProperty=hn(en);var fn=pn,yn=fn.light,dn=fn.paintProperty,mn=fn.layoutProperty;function vn(t,e){var r=!1;if(e&&e.length)for(var n=0,i=e;n<i.length;n+=1){var a=i[n];t.fire(new Ct(new Error(a.message))),r=!0;}return r}var gn=bn,xn=3;function bn(t,e,r){var n=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;var i=new Int32Array(this.arrayBuffer);t=i[0],e=i[1],r=i[2],this.d=e+2*r;for(var a=0;a<this.d*this.d;a++){var o=i[xn+a],s=i[xn+a+1];n.push(o===s?null:i.subarray(o,s));}var u=i[xn+n.length],l=i[xn+n.length+1];this.keys=i.subarray(u,l),this.bboxes=i.subarray(l),this.insert=this._insertReadonly;}else{this.d=e+2*r;for(var p=0;p<this.d*this.d;p++)n.push([]);this.keys=[],this.bboxes=[];}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0;var c=r/e*t;this.min=-c,this.max=t+c;}bn.prototype.insert=function(t,e,r,n,i){this._forEachCell(e,r,n,i,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i);},bn.prototype._insertReadonly=function(){throw "Cannot insert into a GridIndex created from an ArrayBuffer."},bn.prototype._insertCell=function(t,e,r,n,i,a){this.cells[i].push(a);},bn.prototype.query=function(t,e,r,n,i){var a=this.min,o=this.max;if(t<=a&&e<=a&&o<=r&&o<=n&&!i)return Array.prototype.slice.call(this.keys);var s=[];return this._forEachCell(t,e,r,n,this._queryCell,s,{},i),s},bn.prototype._queryCell=function(t,e,r,n,i,a,o,s){var u=this.cells[i];if(null!==u)for(var l=this.keys,p=this.bboxes,c=0;c<u.length;c++){var h=u[c];if(void 0===o[h]){var f=4*h;(s?s(p[f+0],p[f+1],p[f+2],p[f+3]):t<=p[f+2]&&e<=p[f+3]&&r>=p[f+0]&&n>=p[f+1])?(o[h]=!0,a.push(l[h])):o[h]=!1;}}},bn.prototype._forEachCell=function(t,e,r,n,i,a,o,s){for(var u=this._convertToCellCoord(t),l=this._convertToCellCoord(e),p=this._convertToCellCoord(r),c=this._convertToCellCoord(n),h=u;h<=p;h++)for(var f=l;f<=c;f++){var y=this.d*f+h;if((!s||s(this._convertFromCellCoord(h),this._convertFromCellCoord(f),this._convertFromCellCoord(h+1),this._convertFromCellCoord(f+1)))&&i.call(this,t,e,r,n,y,a,o,s))return}},bn.prototype._convertFromCellCoord=function(t){return (t-this.padding)/this.scale},bn.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},bn.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer;for(var t=this.cells,e=xn+this.cells.length+1+1,r=0,n=0;n<this.cells.length;n++)r+=this.cells[n].length;var i=new Int32Array(e+r+this.keys.length+this.bboxes.length);i[0]=this.extent,i[1]=this.n,i[2]=this.padding;for(var a=e,o=0;o<t.length;o++){var s=t[o];i[xn+o]=a,i.set(s,a),a+=s.length;}return i[xn+t.length]=a,i.set(this.keys,a),a+=this.keys.length,i[xn+t.length+1]=a,i.set(this.bboxes,a),a+=this.bboxes.length,i.buffer};var _n=self.ImageData,wn={};function An(t,e,r){void 0===r&&(r={}),Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),wn[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]};}for(var Sn in An("Object",Object),gn.serialize=function(t,e){var r=t.toArrayBuffer();return e&&e.push(r),{buffer:r}},gn.deserialize=function(t){return new gn(t.buffer)},An("Grid",gn),An("Color",Qt),An("Error",Error),An("ResolvedImage",ne),An("StylePropertyFunction",Lr),An("StyleExpression",Tr,{omit:["_evaluator"]}),An("ZoomDependentExpression",Vr),An("ZoomConstantExpression",Mr),An("CompoundExpression",ve,{omit:["_evaluate"]}),hr)hr[Sn]._classRegistryKey||An("Expression_"+Sn,hr[Sn]);function kn(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function In(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp)return t;if(kn(t))return e&&e.push(t),t;if(ArrayBuffer.isView(t)){var r=t;return e&&e.push(r.buffer),r}if(t instanceof _n)return e&&e.push(t.data.buffer),t;if(Array.isArray(t)){for(var n=[],i=0,a=t;i<a.length;i+=1){var o=a[i];n.push(In(o,e));}return n}if("object"==typeof t){var s=t.constructor,u=s._classRegistryKey;if(!u)throw new Error("can't serialize object of unregistered class");var l=s.serialize?s.serialize(t,e):{};if(!s.serialize){for(var p in t)if(t.hasOwnProperty(p)&&!(wn[u].omit.indexOf(p)>=0)){var c=t[p];l[p]=wn[u].shallow.indexOf(p)>=0?c:In(c,e);}t instanceof Error&&(l.message=t.message);}if(l.$name)throw new Error("$name property is reserved for worker serialization logic.");return "Object"!==u&&(l.$name=u),l}throw new Error("can't serialize object of type "+typeof t)}function zn(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||kn(t)||ArrayBuffer.isView(t)||t instanceof _n)return t;if(Array.isArray(t))return t.map(zn);if("object"==typeof t){var e=t.$name||"Object",r=wn[e].klass;if(!r)throw new Error("can't deserialize unregistered class "+e);if(r.deserialize)return r.deserialize(t);for(var n=Object.create(r.prototype),i=0,a=Object.keys(t);i<a.length;i+=1){var o=a[i];if("$name"!==o){var s=t[o];n[o]=wn[e].shallow.indexOf(o)>=0?s:zn(s);}}return n}throw new Error("can't deserialize object of type "+typeof t)}var Cn=function(){this.first=!0;};Cn.prototype.update=function(t,e){var r=Math.floor(t);return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))};var Bn={"Latin-1 Supplement":function(t){return t>=128&&t<=255},Arabic:function(t){return t>=1536&&t<=1791},"Arabic Supplement":function(t){return t>=1872&&t<=1919},"Arabic Extended-A":function(t){return t>=2208&&t<=2303},"Hangul Jamo":function(t){return t>=4352&&t<=4607},"Unified Canadian Aboriginal Syllabics":function(t){return t>=5120&&t<=5759},Khmer:function(t){return t>=6016&&t<=6143},"Unified Canadian Aboriginal Syllabics Extended":function(t){return t>=6320&&t<=6399},"General Punctuation":function(t){return t>=8192&&t<=8303},"Letterlike Symbols":function(t){return t>=8448&&t<=8527},"Number Forms":function(t){return t>=8528&&t<=8591},"Miscellaneous Technical":function(t){return t>=8960&&t<=9215},"Control Pictures":function(t){return t>=9216&&t<=9279},"Optical Character Recognition":function(t){return t>=9280&&t<=9311},"Enclosed Alphanumerics":function(t){return t>=9312&&t<=9471},"Geometric Shapes":function(t){return t>=9632&&t<=9727},"Miscellaneous Symbols":function(t){return t>=9728&&t<=9983},"Miscellaneous Symbols and Arrows":function(t){return t>=11008&&t<=11263},"CJK Radicals Supplement":function(t){return t>=11904&&t<=12031},"Kangxi Radicals":function(t){return t>=12032&&t<=12255},"Ideographic Description Characters":function(t){return t>=12272&&t<=12287},"CJK Symbols and Punctuation":function(t){return t>=12288&&t<=12351},Hiragana:function(t){return t>=12352&&t<=12447},Katakana:function(t){return t>=12448&&t<=12543},Bopomofo:function(t){return t>=12544&&t<=12591},"Hangul Compatibility Jamo":function(t){return t>=12592&&t<=12687},Kanbun:function(t){return t>=12688&&t<=12703},"Bopomofo Extended":function(t){return t>=12704&&t<=12735},"CJK Strokes":function(t){return t>=12736&&t<=12783},"Katakana Phonetic Extensions":function(t){return t>=12784&&t<=12799},"Enclosed CJK Letters and Months":function(t){return t>=12800&&t<=13055},"CJK Compatibility":function(t){return t>=13056&&t<=13311},"CJK Unified Ideographs Extension A":function(t){return t>=13312&&t<=19903},"Yijing Hexagram Symbols":function(t){return t>=19904&&t<=19967},"CJK Unified Ideographs":function(t){return t>=19968&&t<=40959},"Yi Syllables":function(t){return t>=40960&&t<=42127},"Yi Radicals":function(t){return t>=42128&&t<=42191},"Hangul Jamo Extended-A":function(t){return t>=43360&&t<=43391},"Hangul Syllables":function(t){return t>=44032&&t<=55215},"Hangul Jamo Extended-B":function(t){return t>=55216&&t<=55295},"Private Use Area":function(t){return t>=57344&&t<=63743},"CJK Compatibility Ideographs":function(t){return t>=63744&&t<=64255},"Arabic Presentation Forms-A":function(t){return t>=64336&&t<=65023},"Vertical Forms":function(t){return t>=65040&&t<=65055},"CJK Compatibility Forms":function(t){return t>=65072&&t<=65103},"Small Form Variants":function(t){return t>=65104&&t<=65135},"Arabic Presentation Forms-B":function(t){return t>=65136&&t<=65279},"Halfwidth and Fullwidth Forms":function(t){return t>=65280&&t<=65519}};function Tn(t){for(var e=0,r=t;e<r.length;e+=1){if(En(r[e].charCodeAt(0)))return !0}return !1}function Pn(t){return !Bn.Arabic(t)&&(!Bn["Arabic Supplement"](t)&&(!Bn["Arabic Extended-A"](t)&&(!Bn["Arabic Presentation Forms-A"](t)&&!Bn["Arabic Presentation Forms-B"](t))))}function En(t){return 746===t||747===t||!(t<4352)&&(!!Bn["Bopomofo Extended"](t)||(!!Bn.Bopomofo(t)||(!(!Bn["CJK Compatibility Forms"](t)||t>=65097&&t<=65103)||(!!Bn["CJK Compatibility Ideographs"](t)||(!!Bn["CJK Compatibility"](t)||(!!Bn["CJK Radicals Supplement"](t)||(!!Bn["CJK Strokes"](t)||(!(!Bn["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||(!!Bn["CJK Unified Ideographs Extension A"](t)||(!!Bn["CJK Unified Ideographs"](t)||(!!Bn["Enclosed CJK Letters and Months"](t)||(!!Bn["Hangul Compatibility Jamo"](t)||(!!Bn["Hangul Jamo Extended-A"](t)||(!!Bn["Hangul Jamo Extended-B"](t)||(!!Bn["Hangul Jamo"](t)||(!!Bn["Hangul Syllables"](t)||(!!Bn.Hiragana(t)||(!!Bn["Ideographic Description Characters"](t)||(!!Bn.Kanbun(t)||(!!Bn["Kangxi Radicals"](t)||(!!Bn["Katakana Phonetic Extensions"](t)||(!(!Bn.Katakana(t)||12540===t)||(!(!Bn["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||(!(!Bn["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||(!!Bn["Unified Canadian Aboriginal Syllabics"](t)||(!!Bn["Unified Canadian Aboriginal Syllabics Extended"](t)||(!!Bn["Vertical Forms"](t)||(!!Bn["Yijing Hexagram Symbols"](t)||(!!Bn["Yi Syllables"](t)||!!Bn["Yi Radicals"](t))))))))))))))))))))))))))))))}function Mn(t){return !(En(t)||function(t){return !(!Bn["Latin-1 Supplement"](t)||167!==t&&169!==t&&174!==t&&177!==t&&188!==t&&189!==t&&190!==t&&215!==t&&247!==t)||(!(!Bn["General Punctuation"](t)||8214!==t&&8224!==t&&8225!==t&&8240!==t&&8241!==t&&8251!==t&&8252!==t&&8258!==t&&8263!==t&&8264!==t&&8265!==t&&8273!==t)||(!!Bn["Letterlike Symbols"](t)||(!!Bn["Number Forms"](t)||(!(!Bn["Miscellaneous Technical"](t)||!(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215))||(!(!Bn["Control Pictures"](t)||9251===t)||(!!Bn["Optical Character Recognition"](t)||(!!Bn["Enclosed Alphanumerics"](t)||(!!Bn["Geometric Shapes"](t)||(!(!Bn["Miscellaneous Symbols"](t)||t>=9754&&t<=9759)||(!(!Bn["Miscellaneous Symbols and Arrows"](t)||!(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243))||(!!Bn["CJK Symbols and Punctuation"](t)||(!!Bn.Katakana(t)||(!!Bn["Private Use Area"](t)||(!!Bn["CJK Compatibility Forms"](t)||(!!Bn["Small Form Variants"](t)||(!!Bn["Halfwidth and Fullwidth Forms"](t)||(8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)))))))))))))))))}(t))}function Vn(t){return t>=1424&&t<=2303||Bn["Arabic Presentation Forms-A"](t)||Bn["Arabic Presentation Forms-B"](t)}function Fn(t,e){return !(!e&&Vn(t))&&!(t>=2304&&t<=3583||t>=3840&&t<=4255||Bn.Khmer(t))}function Ln(t){for(var e=0,r=t;e<r.length;e+=1){if(Vn(r[e].charCodeAt(0)))return !0}return !1}var On="deferred",Dn="loading",Rn="loaded",Un=null,jn="unavailable",qn=null,Nn=function(t){Un&&Un(t);};function Kn(){Xn.fire(new zt("pluginStateChange",{pluginStatus:jn,pluginURL:qn}));}var Xn=new Bt,Zn=function(){return jn},Gn=function(){if(jn!==On||!qn)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified");jn=Dn,Kn(),qn&&bt({url:qn},(function(t){t?Nn(t):(jn=Rn,Kn());}));},Jn={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:function(){return jn===Rn||null!=Jn.applyArabicShaping},isLoading:function(){return jn===Dn},setState:function(t){jn=t.pluginStatus,qn=t.pluginURL;},isParsed:function(){return null!=Jn.applyArabicShaping&&null!=Jn.processBidirectionalText&&null!=Jn.processStyledBidirectionalText},getPluginURL:function(){return qn}},Hn=function(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new Cn,this.transition={});};Hn.prototype.isSupportedScript=function(t){return function(t,e){for(var r=0,n=t;r<n.length;r+=1){if(!Fn(n[r].charCodeAt(0),e))return !1}return !0}(t,Jn.isLoaded())},Hn.prototype.crossFadingFactor=function(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)},Hn.prototype.getCrossfadeParameters=function(){var t=this.zoom,e=t-Math.floor(t),r=this.crossFadingFactor();return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*r}:{fromScale:.5,toScale:1,t:1-(1-r)*e}};var Yn=function(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(Ar(t))return new Lr(t,e);if(Pr(t)){var r=Fr(t,e);if("error"===r.result)throw new Error(r.value.map((function(t){return t.key+": "+t.message})).join(", "));return r.value}var n=t;return "string"==typeof t&&"color"===e.type&&(n=Qt.parse(t)),{kind:"constant",evaluate:function(){return n}}}(void 0===e?t.specification.default:e,t.specification);};Yn.prototype.isDataDriven=function(){return "source"===this.expression.kind||"composite"===this.expression.kind},Yn.prototype.possiblyEvaluate=function(t,e){return this.property.possiblyEvaluate(this,t,e)};var $n=function(t){this.property=t,this.value=new Yn(t,void 0);};$n.prototype.transitioned=function(t,e){return new Qn(this.property,this.value,e,c({},t.transition,this.transition),t.now)},$n.prototype.untransitioned=function(){return new Qn(this.property,this.value,null,{},0)};var Wn=function(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues);};Wn.prototype.getValue=function(t){return b(this._values[t].value.value)},Wn.prototype.setValue=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new $n(this._values[t].property)),this._values[t].value=new Yn(this._values[t].property,null===e?void 0:b(e));},Wn.prototype.getTransition=function(t){return b(this._values[t].transition)},Wn.prototype.setTransition=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new $n(this._values[t].property)),this._values[t].transition=b(e)||void 0;},Wn.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);var a=this.getTransition(n);void 0!==a&&(t[n+"-transition"]=a);}return t},Wn.prototype.transitioned=function(t,e){for(var r=new ti(this._properties),n=0,i=Object.keys(this._values);n<i.length;n+=1){var a=i[n];r._values[a]=this._values[a].transitioned(t,e._values[a]);}return r},Wn.prototype.untransitioned=function(){for(var t=new ti(this._properties),e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e];t._values[n]=this._values[n].untransitioned();}return t};var Qn=function(t,e,r,n,i){this.property=t,this.value=e,this.begin=i+n.delay||0,this.end=this.begin+n.duration||0,t.specification.transition&&(n.delay||n.duration)&&(this.prior=r);};Qn.prototype.possiblyEvaluate=function(t,e){var r=t.now||0,n=this.value.possiblyEvaluate(t,e),i=this.prior;if(i){if(r>this.end)return this.prior=null,n;if(this.value.isDataDriven())return this.prior=null,n;if(r<this.begin)return i.possiblyEvaluate(t,e);var a=(r-this.begin)/(this.end-this.begin);return this.property.interpolate(i.possiblyEvaluate(t,e),n,function(t){if(t<=0)return 0;if(t>=1)return 1;var e=t*t,r=e*t;return 4*(t<.5?r:3*(t-e)+r-.75)}(a))}return n};var ti=function(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues);};ti.prototype.possiblyEvaluate=function(t,e){for(var r=new ni(this._properties),n=0,i=Object.keys(this._values);n<i.length;n+=1){var a=i[n];r._values[a]=this._values[a].possiblyEvaluate(t,e);}return r},ti.prototype.hasTransition=function(){for(var t=0,e=Object.keys(this._values);t<e.length;t+=1){var r=e[t];if(this._values[r].prior)return !0}return !1};var ei=function(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues);};ei.prototype.getValue=function(t){return b(this._values[t].value)},ei.prototype.setValue=function(t,e){this._values[t]=new Yn(this._values[t].property,null===e?void 0:b(e));},ei.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);}return t},ei.prototype.possiblyEvaluate=function(t,e){for(var r=new ni(this._properties),n=0,i=Object.keys(this._values);n<i.length;n+=1){var a=i[n];r._values[a]=this._values[a].possiblyEvaluate(t,e);}return r};var ri=function(t,e,r){this.property=t,this.value=e,this.parameters=r;};ri.prototype.isConstant=function(){return "constant"===this.value.kind},ri.prototype.constantOr=function(t){return "constant"===this.value.kind?this.value.value:t},ri.prototype.evaluate=function(t,e,r){return this.property.evaluate(this.value,this.parameters,t,e,r)};var ni=function(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues);};ni.prototype.get=function(t){return this._values[t]};var ii=function(t){this.specification=t;};ii.prototype.possiblyEvaluate=function(t,e){return t.expression.evaluate(e)},ii.prototype.interpolate=function(t,e,r){var n=ze[this.specification.type];return n?n(t,e,r):t};var ai=function(t,e){this.specification=t,this.overrides=e;};ai.prototype.possiblyEvaluate=function(t,e,r){return "constant"===t.expression.kind||"camera"===t.expression.kind?new ri(this,{kind:"constant",value:t.expression.evaluate(e,null,{},r)},e):new ri(this,t.expression,e)},ai.prototype.interpolate=function(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0===t.value.value||void 0===e.value.value)return new ri(this,{kind:"constant",value:void 0},t.parameters);var n=ze[this.specification.type];return n?new ri(this,{kind:"constant",value:n(t.value.value,e.value.value,r)},t.parameters):t},ai.prototype.evaluate=function(t,e,r,n,i){return "constant"===t.kind?t.value:t.evaluate(e,r,n,i)};var oi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(t,e,r){if(void 0===t.value)return new ri(this,{kind:"constant",value:void 0},e);if("constant"===t.expression.kind){var n=t.expression.evaluate(e,null,{},r),i="resolvedImage"===t.property.specification.type&&"string"!=typeof n?n.name:n,a=this._calculate(i,i,i,e);return new ri(this,{kind:"constant",value:a},e)}if("camera"===t.expression.kind){var o=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e);return new ri(this,{kind:"constant",value:o},e)}return new ri(this,t.expression,e)},e.prototype.evaluate=function(t,e,r,n,i){if("source"===t.kind){var a=t.evaluate(e,r,n,i);return this._calculate(a,a,a,e)}return "composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},r,n),t.evaluate({zoom:Math.floor(e.zoom)},r,n),t.evaluate({zoom:Math.floor(e.zoom)+1},r,n),e):t.value},e.prototype._calculate=function(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},e.prototype.interpolate=function(t){return t},e}(ai),si=function(t){this.specification=t;};si.prototype.possiblyEvaluate=function(t,e,r){if(void 0!==t.value){if("constant"===t.expression.kind){var n=t.expression.evaluate(e,null,{},r);return this._calculate(n,n,n,e)}return this._calculate(t.expression.evaluate(new Hn(Math.floor(e.zoom-1),e)),t.expression.evaluate(new Hn(Math.floor(e.zoom),e)),t.expression.evaluate(new Hn(Math.floor(e.zoom+1),e)),e)}},si.prototype._calculate=function(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},si.prototype.interpolate=function(t){return t};var ui=function(t){this.specification=t;};ui.prototype.possiblyEvaluate=function(t,e,r){return !!t.expression.evaluate(e,null,{},r)},ui.prototype.interpolate=function(){return !1};var li=function(t){for(var e in this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[],t){var r=t[e];r.specification.overridable&&this.overridableProperties.push(e);var n=this.defaultPropertyValues[e]=new Yn(r,void 0),i=this.defaultTransitionablePropertyValues[e]=new $n(r);this.defaultTransitioningPropertyValues[e]=i.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=n.possiblyEvaluate({});}};An("DataDrivenProperty",ai),An("DataConstantProperty",ii),An("CrossFadedDataDrivenProperty",oi),An("CrossFadedProperty",si),An("ColorRampProperty",ui);var pi=function(t){function e(e,r){if(t.call(this),this.id=e.id,this.type=e.type,this._featureFilter=function(){return !0},"custom"!==e.type&&(e=e,this.metadata=e.metadata,this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,"background"!==e.type&&(this.source=e.source,this.sourceLayer=e["source-layer"],this.filter=e.filter),r.layout&&(this._unevaluatedLayout=new ei(r.layout)),r.paint)){for(var n in this._transitionablePaint=new Wn(r.paint),e.paint)this.setPaintProperty(n,e.paint[n],{validate:!1});for(var i in e.layout)this.setLayoutProperty(i,e.layout[i],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned();}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getCrossfadeParameters=function(){return this._crossfadeParameters},e.prototype.getLayoutProperty=function(t){return "visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)},e.prototype.setLayoutProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e){var n="layers."+this.id+".layout."+t;if(this._validate(mn,n,t,e,r))return}"visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e;},e.prototype.getPaintProperty=function(t){return v(t,"-transition")?this._transitionablePaint.getTransition(t.slice(0,-"-transition".length)):this._transitionablePaint.getValue(t)},e.prototype.setPaintProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e){var n="layers."+this.id+".paint."+t;if(this._validate(dn,n,t,e,r))return !1}if(v(t,"-transition"))return this._transitionablePaint.setTransition(t.slice(0,-"-transition".length),e||void 0),!1;var i=this._transitionablePaint._values[t],a="cross-faded-data-driven"===i.property.specification["property-type"],o=i.value.isDataDriven(),s=i.value;this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t);var u=this._transitionablePaint._values[t].value;return u.isDataDriven()||o||a||this._handleOverridablePaintPropertyUpdate(t,s,u)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){},e.prototype._handleOverridablePaintPropertyUpdate=function(t,e,r){return !1},e.prototype.isHidden=function(t){return !!(this.minzoom&&t<this.minzoom)||(!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility)},e.prototype.updateTransitions=function(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint);},e.prototype.hasTransition=function(){return this._transitioningPaint.hasTransition()},e.prototype.recalculate=function(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,e);},e.prototype.serialize=function(){var t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),x(t,(function(t,e){return !(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)}))},e.prototype._validate=function(t,e,r,n,i){return void 0===i&&(i={}),(!i||!1!==i.validate)&&vn(this,t.call(fn,{key:e,layerType:this.type,objectKey:r,value:n,styleSpec:Tt,style:{glyphs:!0,sprite:!0}}))},e.prototype.is3D=function(){return !1},e.prototype.isTileClipped=function(){return !1},e.prototype.hasOffscreenPass=function(){return !1},e.prototype.resize=function(){},e.prototype.isStateDependent=function(){for(var t in this.paint._values){var e=this.paint.get(t);if(e instanceof ri&&xr(e.property.specification)&&(("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent))return !0}return !1},e}(Bt),ci={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array},hi=function(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8;},fi=function(){this.isTransferred=!1,this.capacity=-1,this.resize(0);};function yi(t,e){void 0===e&&(e=1);var r=0,n=0;return {members:t.map((function(t){var i,a=(i=t.type,ci[i].BYTES_PER_ELEMENT),o=r=di(r,Math.max(e,a)),s=t.components||1;return n=Math.max(n,a),r+=a*s,{name:t.name,type:t.type,components:s,offset:o}})),size:di(r,Math.max(n,e)),alignment:e}}function di(t,e){return Math.ceil(t/e)*e}fi.serialize=function(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}},fi.deserialize=function(t){var e=Object.create(this.prototype);return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e},fi.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews());},fi.prototype.clear=function(){this.length=0;},fi.prototype.resize=function(t){this.reserve(t),this.length=t;},fi.prototype.reserve=function(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);var e=this.uint8;this._refreshViews(),e&&this.uint8.set(e);}},fi.prototype._refreshViews=function(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")};var mi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.int16[n+0]=e,this.int16[n+1]=r,t},e}(fi);mi.prototype.bytesPerElement=4,An("StructArrayLayout2i4",mi);var vi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=4*t;return this.int16[a+0]=e,this.int16[a+1]=r,this.int16[a+2]=n,this.int16[a+3]=i,t},e}(fi);vi.prototype.bytesPerElement=8,An("StructArrayLayout4i8",vi);var gi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=6*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,this.int16[s+4]=a,this.int16[s+5]=o,t},e}(fi);gi.prototype.bytesPerElement=12,An("StructArrayLayout2i4i12",gi);var xi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=4*t,u=8*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.uint8[u+4]=n,this.uint8[u+5]=i,this.uint8[u+6]=a,this.uint8[u+7]=o,t},e}(fi);xi.prototype.bytesPerElement=8,An("StructArrayLayout2i4ub8",xi);var bi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s){var u=this.length;return this.resize(u+1),this.emplace(u,t,e,r,n,i,a,o,s)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u){var l=8*t;return this.uint16[l+0]=e,this.uint16[l+1]=r,this.uint16[l+2]=n,this.uint16[l+3]=i,this.uint16[l+4]=a,this.uint16[l+5]=o,this.uint16[l+6]=s,this.uint16[l+7]=u,t},e}(fi);bi.prototype.bytesPerElement=16,An("StructArrayLayout8ui16",bi);var _i=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c){var h=this.length;return this.resize(h+1),this.emplace(h,t,e,r,n,i,a,o,s,u,l,p,c)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h){var f=12*t;return this.int16[f+0]=e,this.int16[f+1]=r,this.int16[f+2]=n,this.int16[f+3]=i,this.uint16[f+4]=a,this.uint16[f+5]=o,this.uint16[f+6]=s,this.uint16[f+7]=u,this.int16[f+8]=l,this.int16[f+9]=p,this.int16[f+10]=c,this.int16[f+11]=h,t},e}(fi);_i.prototype.bytesPerElement=24,An("StructArrayLayout4i4ui4i24",_i);var wi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.float32[i+0]=e,this.float32[i+1]=r,this.float32[i+2]=n,t},e}(fi);wi.prototype.bytesPerElement=12,An("StructArrayLayout3f12",wi);var Ai=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t;return this.uint32[r+0]=e,t},e}(fi);Ai.prototype.bytesPerElement=4,An("StructArrayLayout1ul4",Ai);var Si=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p){var c=this.length;return this.resize(c+1),this.emplace(c,t,e,r,n,i,a,o,s,u,l,p)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c){var h=12*t,f=6*t;return this.int16[h+0]=e,this.int16[h+1]=r,this.int16[h+2]=n,this.int16[h+3]=i,this.int16[h+4]=a,this.int16[h+5]=o,this.uint32[f+3]=s,this.uint16[h+8]=u,this.uint16[h+9]=l,this.int16[h+10]=p,this.int16[h+11]=c,t},e}(fi);Si.prototype.bytesPerElement=24,An("StructArrayLayout6i1ul2ui2i24",Si);var ki=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=6*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,this.int16[s+4]=a,this.int16[s+5]=o,t},e}(fi);ki.prototype.bytesPerElement=12,An("StructArrayLayout2i2i2i12",ki);var Ii=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=12*t,o=3*t;return this.uint8[a+0]=e,this.uint8[a+1]=r,this.float32[o+1]=n,this.float32[o+2]=i,t},e}(fi);Ii.prototype.bytesPerElement=12,An("StructArrayLayout2ub2f12",Ii);var zi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m){var v=this.length;return this.resize(v+1),this.emplace(v,t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v){var g=24*t,x=12*t,b=48*t;return this.int16[g+0]=e,this.int16[g+1]=r,this.uint16[g+2]=n,this.uint16[g+3]=i,this.uint32[x+2]=a,this.uint32[x+3]=o,this.uint32[x+4]=s,this.uint16[g+10]=u,this.uint16[g+11]=l,this.uint16[g+12]=p,this.float32[x+7]=c,this.float32[x+8]=h,this.uint8[b+36]=f,this.uint8[b+37]=y,this.uint8[b+38]=d,this.uint32[x+10]=m,this.int16[g+22]=v,t},e}(fi);zi.prototype.bytesPerElement=48,An("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",zi);var Ci=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,_,w,A,S,k){var I=this.length;return this.resize(I+1),this.emplace(I,t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,_,w,A,S,k)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,_,w,A,S,k,I){var z=30*t,C=15*t;return this.int16[z+0]=e,this.int16[z+1]=r,this.int16[z+2]=n,this.int16[z+3]=i,this.int16[z+4]=a,this.int16[z+5]=o,this.int16[z+6]=s,this.int16[z+7]=u,this.uint16[z+8]=l,this.uint16[z+9]=p,this.uint16[z+10]=c,this.uint16[z+11]=h,this.uint16[z+12]=f,this.uint16[z+13]=y,this.uint16[z+14]=d,this.uint16[z+15]=m,this.uint16[z+16]=v,this.uint16[z+17]=g,this.uint16[z+18]=x,this.uint16[z+19]=b,this.uint16[z+20]=_,this.uint16[z+21]=w,this.uint32[C+11]=A,this.float32[C+12]=S,this.float32[C+13]=k,this.float32[C+14]=I,t},e}(fi);Ci.prototype.bytesPerElement=60,An("StructArrayLayout8i14ui1ul3f60",Ci);var Bi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t;return this.float32[r+0]=e,t},e}(fi);Bi.prototype.bytesPerElement=4,An("StructArrayLayout1f4",Bi);var Ti=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.int16[i+0]=e,this.int16[i+1]=r,this.int16[i+2]=n,t},e}(fi);Ti.prototype.bytesPerElement=6,An("StructArrayLayout3i6",Ti);var Pi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=2*t,a=4*t;return this.uint32[i+0]=e,this.uint16[a+2]=r,this.uint16[a+3]=n,t},e}(fi);Pi.prototype.bytesPerElement=8,An("StructArrayLayout1ul2ui8",Pi);var Ei=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.uint16[i+0]=e,this.uint16[i+1]=r,this.uint16[i+2]=n,t},e}(fi);Ei.prototype.bytesPerElement=6,An("StructArrayLayout3ui6",Ei);var Mi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.uint16[n+0]=e,this.uint16[n+1]=r,t},e}(fi);Mi.prototype.bytesPerElement=4,An("StructArrayLayout2ui4",Mi);var Vi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t;return this.uint16[r+0]=e,t},e}(fi);Vi.prototype.bytesPerElement=2,An("StructArrayLayout1ui2",Vi);var Fi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.float32[n+0]=e,this.float32[n+1]=r,t},e}(fi);Fi.prototype.bytesPerElement=8,An("StructArrayLayout2f8",Fi);var Li=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=4*t;return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=n,this.float32[a+3]=i,t},e}(fi);Li.prototype.bytesPerElement=16,An("StructArrayLayout4f16",Li);var Oi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorPointX:{configurable:!0},anchorPointY:{configurable:!0},x1:{configurable:!0},y1:{configurable:!0},x2:{configurable:!0},y2:{configurable:!0},featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0},radius:{configurable:!0},signedDistanceFromAnchor:{configurable:!0},anchorPoint:{configurable:!0}};return r.anchorPointX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorPointX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorPointY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorPointY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.x1.get=function(){return this._structArray.int16[this._pos2+2]},r.x1.set=function(t){this._structArray.int16[this._pos2+2]=t;},r.y1.get=function(){return this._structArray.int16[this._pos2+3]},r.y1.set=function(t){this._structArray.int16[this._pos2+3]=t;},r.x2.get=function(){return this._structArray.int16[this._pos2+4]},r.x2.set=function(t){this._structArray.int16[this._pos2+4]=t;},r.y2.get=function(){return this._structArray.int16[this._pos2+5]},r.y2.set=function(t){this._structArray.int16[this._pos2+5]=t;},r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t;},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+8]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+8]=t;},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t;},r.radius.get=function(){return this._structArray.int16[this._pos2+10]},r.radius.set=function(t){this._structArray.int16[this._pos2+10]=t;},r.signedDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+11]},r.signedDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+11]=t;},r.anchorPoint.get=function(){return new i(this.anchorPointX,this.anchorPointY)},Object.defineProperties(e.prototype,r),e}(hi);Oi.prototype.size=24;var Di=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Oi(this,t)},e}(Si);An("CollisionBoxArray",Di);var Ri=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorX:{configurable:!0},anchorY:{configurable:!0},glyphStartIndex:{configurable:!0},numGlyphs:{configurable:!0},vertexStartIndex:{configurable:!0},lineStartIndex:{configurable:!0},lineLength:{configurable:!0},segment:{configurable:!0},lowerSize:{configurable:!0},upperSize:{configurable:!0},lineOffsetX:{configurable:!0},lineOffsetY:{configurable:!0},writingMode:{configurable:!0},placedOrientation:{configurable:!0},hidden:{configurable:!0},crossTileID:{configurable:!0},associatedIconIndex:{configurable:!0}};return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.glyphStartIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.glyphStartIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t;},r.numGlyphs.get=function(){return this._structArray.uint16[this._pos2+3]},r.numGlyphs.set=function(t){this._structArray.uint16[this._pos2+3]=t;},r.vertexStartIndex.get=function(){return this._structArray.uint32[this._pos4+2]},r.vertexStartIndex.set=function(t){this._structArray.uint32[this._pos4+2]=t;},r.lineStartIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.lineStartIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t;},r.lineLength.get=function(){return this._structArray.uint32[this._pos4+4]},r.lineLength.set=function(t){this._structArray.uint32[this._pos4+4]=t;},r.segment.get=function(){return this._structArray.uint16[this._pos2+10]},r.segment.set=function(t){this._structArray.uint16[this._pos2+10]=t;},r.lowerSize.get=function(){return this._structArray.uint16[this._pos2+11]},r.lowerSize.set=function(t){this._structArray.uint16[this._pos2+11]=t;},r.upperSize.get=function(){return this._structArray.uint16[this._pos2+12]},r.upperSize.set=function(t){this._structArray.uint16[this._pos2+12]=t;},r.lineOffsetX.get=function(){return this._structArray.float32[this._pos4+7]},r.lineOffsetX.set=function(t){this._structArray.float32[this._pos4+7]=t;},r.lineOffsetY.get=function(){return this._structArray.float32[this._pos4+8]},r.lineOffsetY.set=function(t){this._structArray.float32[this._pos4+8]=t;},r.writingMode.get=function(){return this._structArray.uint8[this._pos1+36]},r.writingMode.set=function(t){this._structArray.uint8[this._pos1+36]=t;},r.placedOrientation.get=function(){return this._structArray.uint8[this._pos1+37]},r.placedOrientation.set=function(t){this._structArray.uint8[this._pos1+37]=t;},r.hidden.get=function(){return this._structArray.uint8[this._pos1+38]},r.hidden.set=function(t){this._structArray.uint8[this._pos1+38]=t;},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+10]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+10]=t;},r.associatedIconIndex.get=function(){return this._structArray.int16[this._pos2+22]},r.associatedIconIndex.set=function(t){this._structArray.int16[this._pos2+22]=t;},Object.defineProperties(e.prototype,r),e}(hi);Ri.prototype.size=48;var Ui=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Ri(this,t)},e}(zi);An("PlacedSymbolArray",Ui);var ji=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorX:{configurable:!0},anchorY:{configurable:!0},rightJustifiedTextSymbolIndex:{configurable:!0},centerJustifiedTextSymbolIndex:{configurable:!0},leftJustifiedTextSymbolIndex:{configurable:!0},verticalPlacedTextSymbolIndex:{configurable:!0},placedIconSymbolIndex:{configurable:!0},verticalPlacedIconSymbolIndex:{configurable:!0},key:{configurable:!0},textBoxStartIndex:{configurable:!0},textBoxEndIndex:{configurable:!0},verticalTextBoxStartIndex:{configurable:!0},verticalTextBoxEndIndex:{configurable:!0},iconBoxStartIndex:{configurable:!0},iconBoxEndIndex:{configurable:!0},verticalIconBoxStartIndex:{configurable:!0},verticalIconBoxEndIndex:{configurable:!0},featureIndex:{configurable:!0},numHorizontalGlyphVertices:{configurable:!0},numVerticalGlyphVertices:{configurable:!0},numIconVertices:{configurable:!0},numVerticalIconVertices:{configurable:!0},crossTileID:{configurable:!0},textBoxScale:{configurable:!0},textOffset0:{configurable:!0},textOffset1:{configurable:!0}};return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.rightJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+2]},r.rightJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+2]=t;},r.centerJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+3]},r.centerJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+3]=t;},r.leftJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+4]},r.leftJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+4]=t;},r.verticalPlacedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+5]},r.verticalPlacedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+5]=t;},r.placedIconSymbolIndex.get=function(){return this._structArray.int16[this._pos2+6]},r.placedIconSymbolIndex.set=function(t){this._structArray.int16[this._pos2+6]=t;},r.verticalPlacedIconSymbolIndex.get=function(){return this._structArray.int16[this._pos2+7]},r.verticalPlacedIconSymbolIndex.set=function(t){this._structArray.int16[this._pos2+7]=t;},r.key.get=function(){return this._structArray.uint16[this._pos2+8]},r.key.set=function(t){this._structArray.uint16[this._pos2+8]=t;},r.textBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.textBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t;},r.textBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+10]},r.textBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+10]=t;},r.verticalTextBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+11]},r.verticalTextBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+11]=t;},r.verticalTextBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+12]},r.verticalTextBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+12]=t;},r.iconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+13]},r.iconBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+13]=t;},r.iconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+14]},r.iconBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+14]=t;},r.verticalIconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+15]},r.verticalIconBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+15]=t;},r.verticalIconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+16]},r.verticalIconBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+16]=t;},r.featureIndex.get=function(){return this._structArray.uint16[this._pos2+17]},r.featureIndex.set=function(t){this._structArray.uint16[this._pos2+17]=t;},r.numHorizontalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+18]},r.numHorizontalGlyphVertices.set=function(t){this._structArray.uint16[this._pos2+18]=t;},r.numVerticalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+19]},r.numVerticalGlyphVertices.set=function(t){this._structArray.uint16[this._pos2+19]=t;},r.numIconVertices.get=function(){return this._structArray.uint16[this._pos2+20]},r.numIconVertices.set=function(t){this._structArray.uint16[this._pos2+20]=t;},r.numVerticalIconVertices.get=function(){return this._structArray.uint16[this._pos2+21]},r.numVerticalIconVertices.set=function(t){this._structArray.uint16[this._pos2+21]=t;},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+11]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+11]=t;},r.textBoxScale.get=function(){return this._structArray.float32[this._pos4+12]},r.textBoxScale.set=function(t){this._structArray.float32[this._pos4+12]=t;},r.textOffset0.get=function(){return this._structArray.float32[this._pos4+13]},r.textOffset0.set=function(t){this._structArray.float32[this._pos4+13]=t;},r.textOffset1.get=function(){return this._structArray.float32[this._pos4+14]},r.textOffset1.set=function(t){this._structArray.float32[this._pos4+14]=t;},Object.defineProperties(e.prototype,r),e}(hi);ji.prototype.size=60;var qi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new ji(this,t)},e}(Ci);An("SymbolInstanceArray",qi);var Ni=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={offsetX:{configurable:!0}};return r.offsetX.get=function(){return this._structArray.float32[this._pos4+0]},r.offsetX.set=function(t){this._structArray.float32[this._pos4+0]=t;},Object.defineProperties(e.prototype,r),e}(hi);Ni.prototype.size=4;var Ki=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getoffsetX=function(t){return this.float32[1*t+0]},e.prototype.get=function(t){return new Ni(this,t)},e}(Bi);An("GlyphOffsetArray",Ki);var Xi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={x:{configurable:!0},y:{configurable:!0},tileUnitDistanceFromAnchor:{configurable:!0}};return r.x.get=function(){return this._structArray.int16[this._pos2+0]},r.x.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.y.get=function(){return this._structArray.int16[this._pos2+1]},r.y.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.tileUnitDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+2]},r.tileUnitDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+2]=t;},Object.defineProperties(e.prototype,r),e}(hi);Xi.prototype.size=6;var Zi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getx=function(t){return this.int16[3*t+0]},e.prototype.gety=function(t){return this.int16[3*t+1]},e.prototype.gettileUnitDistanceFromAnchor=function(t){return this.int16[3*t+2]},e.prototype.get=function(t){return new Xi(this,t)},e}(Ti);An("SymbolLineVertexArray",Zi);var Gi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0}};return r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+0]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+0]=t;},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t;},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+3]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+3]=t;},Object.defineProperties(e.prototype,r),e}(hi);Gi.prototype.size=8;var Ji=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Gi(this,t)},e}(Pi);An("FeatureIndexArray",Ji);var Hi=yi([{name:"a_pos",components:2,type:"Int16"}],4).members,Yi=function(t){void 0===t&&(t=[]),this.segments=t;};function $i(t,e){return 256*(t=l(Math.floor(t),0,255))+(e=l(Math.floor(e),0,255))}Yi.prototype.prepareSegment=function(t,e,r,n){var i=this.segments[this.segments.length-1];return t>Yi.MAX_VERTEX_ARRAY_LENGTH&&w("Max vertices per segment is "+Yi.MAX_VERTEX_ARRAY_LENGTH+": bucket requested "+t),(!i||i.vertexLength+t>Yi.MAX_VERTEX_ARRAY_LENGTH||i.sortKey!==n)&&(i={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==n&&(i.sortKey=n),this.segments.push(i)),i},Yi.prototype.get=function(){return this.segments},Yi.prototype.destroy=function(){for(var t=0,e=this.segments;t<e.length;t+=1){var r=e[t];for(var n in r.vaos)r.vaos[n].destroy();}},Yi.simpleSegment=function(t,e,r,n){return new Yi([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:n,vaos:{},sortKey:0}])},Yi.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,An("SegmentVector",Yi);var Wi=function(){this.ids=[],this.positions=[],this.indexed=!1;};function Qi(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}Wi.prototype.add=function(t,e,r,n){this.ids.push(t),this.positions.push(e,r,n);},Wi.prototype.getPositions=function(t){for(var e=0,r=this.ids.length-1;e<r;){var n=e+r>>1;this.ids[n]>=t?r=n:e=n+1;}for(var i=[];this.ids[e]===t;){var a=this.positions[3*e],o=this.positions[3*e+1],s=this.positions[3*e+2];i.push({index:a,start:o,end:s}),e++;}return i},Wi.serialize=function(t,e){var r=new Float64Array(t.ids),n=new Uint32Array(t.positions);return function t(e,r,n,i){if(n>=i)return;var a=e[n+i>>1];var o=n-1;var s=i+1;for(;;){do{o++;}while(e[o]<a);do{s--;}while(e[s]>a);if(o>=s)break;Qi(e,o,s),Qi(r,3*o,3*s),Qi(r,3*o+1,3*s+1),Qi(r,3*o+2,3*s+2);}t(e,r,n,s);t(e,r,s+1,i);}(r,n,0,r.length-1),e&&e.push(r.buffer,n.buffer),{ids:r,positions:n}},Wi.deserialize=function(t){var e=new Wi;return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e},An("FeaturePositionMap",Wi);var ta=function(t,e){this.gl=t.gl,this.location=e;},ea=function(t){function e(e,r){t.call(this,e,r),this.current=0;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t));},e}(ta),ra=function(t){function e(e,r){t.call(this,e,r),this.current=0;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t));},e}(ta),na=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0];}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]));},e}(ta),ia=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0];}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]));},e}(ta),aa=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0,0];}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]));},e}(ta),oa=function(t){function e(e,r){t.call(this,e,r),this.current=Qt.transparent;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a));},e}(ta),sa=new Float32Array(16),ua=function(t){function e(e,r){t.call(this,e,r),this.current=sa;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t);for(var e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t);break}},e}(ta);function la(t){return [$i(255*t.r,255*t.g),$i(255*t.b,255*t.a)]}var pa=function(t,e,r){this.value=t,this.names=e,this.uniformNames=this.names.map((function(t){return "u_"+t})),this.type=r,this.maxValue=-1/0;};pa.prototype.defines=function(){return this.names.map((function(t){return "#define HAS_UNIFORM_u_"+t}))},pa.prototype.setConstantPatternPositions=function(){},pa.prototype.populatePaintArray=function(){},pa.prototype.updatePaintArray=function(){},pa.prototype.upload=function(){},pa.prototype.destroy=function(){},pa.prototype.setUniforms=function(t,e,r,n){e.set(n.constantOr(this.value));},pa.prototype.getBinding=function(t,e){return "color"===this.type?new oa(t,e):new ra(t,e)},pa.serialize=function(t){var e=t.value,r=t.names,n=t.type;return {value:In(e),names:r,type:n}},pa.deserialize=function(t){var e=t.value,r=t.names,n=t.type;return new pa(zn(e),r,n)};var ca=function(t,e,r){this.value=t,this.names=e,this.uniformNames=this.names.map((function(t){return "u_"+t})),this.type=r,this.maxValue=-1/0,this.patternPositions={patternTo:null,patternFrom:null};};ca.prototype.defines=function(){return this.names.map((function(t){return "#define HAS_UNIFORM_u_"+t}))},ca.prototype.populatePaintArray=function(){},ca.prototype.updatePaintArray=function(){},ca.prototype.upload=function(){},ca.prototype.destroy=function(){},ca.prototype.setConstantPatternPositions=function(t,e){this.patternPositions.patternTo=t.tlbr,this.patternPositions.patternFrom=e.tlbr;},ca.prototype.setUniforms=function(t,e,r,n,i){var a=this.patternPositions;"u_pattern_to"===i&&a.patternTo&&e.set(a.patternTo),"u_pattern_from"===i&&a.patternFrom&&e.set(a.patternFrom);},ca.prototype.getBinding=function(t,e){return new aa(t,e)};var ha=function(t,e,r,n){this.expression=t,this.names=e,this.type=r,this.uniformNames=this.names.map((function(t){return "a_"+t})),this.maxValue=-1/0,this.paintVertexAttributes=e.map((function(t){return {name:"a_"+t,type:"Float32",components:"color"===r?2:1,offset:0}})),this.paintVertexArray=new n;};ha.prototype.defines=function(){return []},ha.prototype.setConstantPatternPositions=function(){},ha.prototype.populatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=i.length;i.reserve(t);var o=this.expression.evaluate(new Hn(0),e,{},[],n);if("color"===this.type)for(var s=la(o),u=a;u<t;u++)i.emplaceBack(s[0],s[1]);else{for(var l=a;l<t;l++)i.emplaceBack(o);this.maxValue=Math.max(this.maxValue,o);}},ha.prototype.updatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=this.expression.evaluate({zoom:0},r,n);if("color"===this.type)for(var o=la(a),s=t;s<e;s++)i.emplace(s,o[0],o[1]);else{for(var u=t;u<e;u++)i.emplace(u,a);this.maxValue=Math.max(this.maxValue,a);}},ha.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},ha.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();},ha.prototype.setUniforms=function(t,e){e.set(0);},ha.prototype.getBinding=function(t,e){return new ra(t,e)};var fa=function(t,e,r,n,i,a){this.expression=t,this.names=e,this.uniformNames=this.names.map((function(t){return "u_"+t+"_t"})),this.type=r,this.useIntegerZoom=n,this.zoom=i,this.maxValue=-1/0;var o=a;this.paintVertexAttributes=e.map((function(t){return {name:"a_"+t,type:"Float32",components:"color"===r?4:2,offset:0}})),this.paintVertexArray=new o;};fa.prototype.defines=function(){return []},fa.prototype.setConstantPatternPositions=function(){},fa.prototype.populatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=i.length;i.reserve(t);var o=this.expression.evaluate(new Hn(this.zoom),e,{},[],n),s=this.expression.evaluate(new Hn(this.zoom+1),e,{},[],n);if("color"===this.type)for(var u=la(o),l=la(s),p=a;p<t;p++)i.emplaceBack(u[0],u[1],l[0],l[1]);else{for(var c=a;c<t;c++)i.emplaceBack(o,s);this.maxValue=Math.max(this.maxValue,o,s);}},fa.prototype.updatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=this.expression.evaluate({zoom:this.zoom},r,n),o=this.expression.evaluate({zoom:this.zoom+1},r,n);if("color"===this.type)for(var s=la(a),u=la(o),l=t;l<e;l++)i.emplace(l,s[0],s[1],u[0],u[1]);else{for(var p=t;p<e;p++)i.emplace(p,a,o);this.maxValue=Math.max(this.maxValue,a,o);}},fa.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},fa.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();},fa.prototype.interpolationFactor=function(t){return this.useIntegerZoom&&(t=Math.floor(t)),l(this.expression.interpolationFactor(t,this.zoom,this.zoom+1),0,1)},fa.prototype.setUniforms=function(t,e,r){e.set(this.interpolationFactor(r.zoom));},fa.prototype.getBinding=function(t,e){return new ra(t,e)};var ya=function(t,e,r,n,i,a,o){this.expression=t,this.names=e,this.type=r,this.uniformNames=this.names.map((function(t){return "u_"+t+"_t"})),this.useIntegerZoom=n,this.zoom=i,this.maxValue=-1/0,this.layerId=o,this.paintVertexAttributes=e.map((function(t){return {name:"a_"+t,type:"Uint16",components:4,offset:0}})),this.zoomInPaintVertexArray=new a,this.zoomOutPaintVertexArray=new a;};ya.prototype.defines=function(){return []},ya.prototype.setConstantPatternPositions=function(){},ya.prototype.populatePaintArray=function(t,e,r){var n=this.zoomInPaintVertexArray,i=this.zoomOutPaintVertexArray,a=this.layerId,o=n.length;if(n.reserve(t),i.reserve(t),r&&e.patterns&&e.patterns[a]){var s=e.patterns[a],u=s.min,l=s.mid,p=s.max,c=r[u],h=r[l],f=r[p];if(!c||!h||!f)return;for(var y=o;y<t;y++)n.emplaceBack(h.tl[0],h.tl[1],h.br[0],h.br[1],c.tl[0],c.tl[1],c.br[0],c.br[1]),i.emplaceBack(h.tl[0],h.tl[1],h.br[0],h.br[1],f.tl[0],f.tl[1],f.br[0],f.br[1]);}},ya.prototype.updatePaintArray=function(t,e,r,n,i){var a=this.zoomInPaintVertexArray,o=this.zoomOutPaintVertexArray,s=this.layerId;if(i&&r.patterns&&r.patterns[s]){var u=r.patterns[s],l=u.min,p=u.mid,c=u.max,h=i[l],f=i[p],y=i[c];if(!h||!f||!y)return;for(var d=t;d<e;d++)a.emplace(d,f.tl[0],f.tl[1],f.br[0],f.br[1],h.tl[0],h.tl[1],h.br[0],h.br[1]),o.emplace(d,f.tl[0],f.tl[1],f.br[0],f.br[1],y.tl[0],y.tl[1],y.br[0],y.br[1]);}},ya.prototype.upload=function(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},ya.prototype.destroy=function(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy();},ya.prototype.setUniforms=function(t,e){e.set(0);},ya.prototype.getBinding=function(t,e){return new ra(t,e)};var da=function(){this.binders={},this.cacheKey="",this._buffers=[];};da.createDynamic=function(t,e,r){var n=new da,i=[];for(var a in t.paint._values)if(r(a)){var o=t.paint.get(a);if(o instanceof ri&&xr(o.property.specification)){var s=va(a,t.type),u=o.property.specification.type,l=o.property.useIntegerZoom;if("cross-faded"===o.property.specification["property-type"]||"cross-faded-data-driven"===o.property.specification["property-type"])if("constant"===o.value.kind)n.binders[a]=new ca(o.value.value,s,u),i.push("/u_"+a);else{var p=ga(a,u,"source");n.binders[a]=new ya(o.value,s,u,l,e,p,t.id),i.push("/a_"+a);}else if("constant"===o.value.kind)n.binders[a]=new pa(o.value.value,s,u),i.push("/u_"+a);else if("source"===o.value.kind){var c=ga(a,u,"source");n.binders[a]=new ha(o.value,s,u,c),i.push("/a_"+a);}else{var h=ga(a,u,"composite");n.binders[a]=new fa(o.value,s,u,l,e,h),i.push("/z_"+a);}}}return n.cacheKey=i.sort().join(""),n},da.prototype.populatePaintArrays=function(t,e,r,n,i){for(var a in this.binders){this.binders[a].populatePaintArray(t,e,n,i);}},da.prototype.setConstantPatternPositions=function(t,e){for(var r in this.binders){this.binders[r].setConstantPatternPositions(t,e);}},da.prototype.updatePaintArrays=function(t,e,r,n,i){var a=!1;for(var o in t)for(var s=0,u=e.getPositions(+o);s<u.length;s+=1){var l=u[s],p=r.feature(l.index);for(var c in this.binders){var h=this.binders[c];if(!(h instanceof pa||h instanceof ca)&&!0===h.expression.isStateDependent){var f=n.paint.get(c);h.expression=f.value,h.updatePaintArray(l.start,l.end,p,t[o],i),a=!0;}}}return a},da.prototype.defines=function(){var t=[];for(var e in this.binders)t.push.apply(t,this.binders[e].defines());return t},da.prototype.getPaintVertexBuffers=function(){return this._buffers},da.prototype.getUniforms=function(t,e){var r=[];for(var n in this.binders)for(var i=this.binders[n],a=0,o=i.uniformNames;a<o.length;a+=1){var s=o[a];if(e[s]){var u=i.getBinding(t,e[s]);r.push({name:s,property:n,binding:u});}}return r},da.prototype.setUniforms=function(t,e,r,n){for(var i=0,a=e;i<a.length;i+=1){var o=a[i],s=o.name,u=o.property,l=o.binding;this.binders[u].setUniforms(t,l,n,r.get(u),s);}},da.prototype.updatePatternPaintBuffers=function(t){var e=[];for(var r in this.binders){var n=this.binders[r];if(n instanceof ya){var i=2===t.fromScale?n.zoomInPaintVertexBuffer:n.zoomOutPaintVertexBuffer;i&&e.push(i);}else(n instanceof ha||n instanceof fa)&&n.paintVertexBuffer&&e.push(n.paintVertexBuffer);}this._buffers=e;},da.prototype.upload=function(t){for(var e in this.binders)this.binders[e].upload(t);var r=[];for(var n in this.binders){var i=this.binders[n];(i instanceof ha||i instanceof fa)&&i.paintVertexBuffer&&r.push(i.paintVertexBuffer);}this._buffers=r;},da.prototype.destroy=function(){for(var t in this.binders)this.binders[t].destroy();};var ma=function(t,e,r,n){void 0===n&&(n=function(){return !0}),this.programConfigurations={};for(var i=0,a=e;i<a.length;i+=1){var o=a[i];this.programConfigurations[o.id]=da.createDynamic(o,r,n),this.programConfigurations[o.id].layoutAttributes=t;}this.needsUpload=!1,this._featureMap=new Wi,this._bufferOffset=0;};function va(t,e){return {"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from"],"fill-pattern":["pattern_to","pattern_from"],"fill-extrusion-pattern":["pattern_to","pattern_from"]}[t]||[t.replace(e+"-","").replace(/-/g,"_")]}function ga(t,e,r){var n={color:{source:Fi,composite:Li},number:{source:Bi,composite:Fi}},i=function(t){return {"line-pattern":{source:bi,composite:bi},"fill-pattern":{source:bi,composite:bi},"fill-extrusion-pattern":{source:bi,composite:bi}}[t]}(t);return i&&i[r]||n[e][r]}ma.prototype.populatePaintArrays=function(t,e,r,n,i){for(var a in this.programConfigurations)this.programConfigurations[a].populatePaintArrays(t,e,r,n,i);void 0!==e.id&&this._featureMap.add(+e.id,r,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0;},ma.prototype.updatePaintArrays=function(t,e,r,n){for(var i=0,a=r;i<a.length;i+=1){var o=a[i];this.needsUpload=this.programConfigurations[o.id].updatePaintArrays(t,this._featureMap,e,o,n)||this.needsUpload;}},ma.prototype.get=function(t){return this.programConfigurations[t]},ma.prototype.upload=function(t){if(this.needsUpload){for(var e in this.programConfigurations)this.programConfigurations[e].upload(t);this.needsUpload=!1;}},ma.prototype.destroy=function(){for(var t in this.programConfigurations)this.programConfigurations[t].destroy();},An("ConstantBinder",pa),An("CrossFadedConstantBinder",ca),An("SourceExpressionBinder",ha),An("CrossFadedCompositeBinder",ya),An("CompositeExpressionBinder",fa),An("ProgramConfiguration",da,{omit:["_buffers"]}),An("ProgramConfigurationSet",ma);var xa=8192;var ba,_a=(ba=15,{min:-1*Math.pow(2,ba-1),max:Math.pow(2,ba-1)-1});function wa(t){for(var e=xa/t.extent,r=t.loadGeometry(),n=0;n<r.length;n++)for(var i=r[n],a=0;a<i.length;a++){var o=i[a];o.x=Math.round(o.x*e),o.y=Math.round(o.y*e),(o.x<_a.min||o.x>_a.max||o.y<_a.min||o.y>_a.max)&&(w("Geometry exceeds allowed extent, reduce your vector tile buffer size"),o.x=l(o.x,_a.min,_a.max),o.y=l(o.y,_a.min,_a.max));}return r}function Aa(t,e,r,n,i){t.emplaceBack(2*e+(n+1)/2,2*r+(i+1)/2);}var Sa=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new mi,this.indexArray=new Ei,this.segments=new Yi,this.programConfigurations=new ma(Hi,t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};function ka(t,e){for(var r=0;r<t.length;r++)if(Va(e,t[r]))return !0;for(var n=0;n<e.length;n++)if(Va(t,e[n]))return !0;return !!Ba(t,e)}function Ia(t,e,r){return !!Va(t,e)||!!Pa(e,t,r)}function za(t,e){if(1===t.length)return Ma(e,t[0]);for(var r=0;r<e.length;r++)for(var n=e[r],i=0;i<n.length;i++)if(Va(t,n[i]))return !0;for(var a=0;a<t.length;a++)if(Ma(e,t[a]))return !0;for(var o=0;o<e.length;o++)if(Ba(t,e[o]))return !0;return !1}function Ca(t,e,r){if(t.length>1){if(Ba(t,e))return !0;for(var n=0;n<e.length;n++)if(Pa(e[n],t,r))return !0}for(var i=0;i<t.length;i++)if(Pa(t[i],e,r))return !0;return !1}function Ba(t,e){if(0===t.length||0===e.length)return !1;for(var r=0;r<t.length-1;r++)for(var n=t[r],i=t[r+1],a=0;a<e.length-1;a++){if(Ta(n,i,e[a],e[a+1]))return !0}return !1}function Ta(t,e,r,n){return A(t,r,n)!==A(e,r,n)&&A(t,e,r)!==A(t,e,n)}function Pa(t,e,r){var n=r*r;if(1===e.length)return t.distSqr(e[0])<n;for(var i=1;i<e.length;i++){if(Ea(t,e[i-1],e[i])<n)return !0}return !1}function Ea(t,e,r){var n=e.distSqr(r);if(0===n)return t.distSqr(e);var i=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/n;return i<0?t.distSqr(e):i>1?t.distSqr(r):t.distSqr(r.sub(e)._mult(i)._add(e))}function Ma(t,e){for(var r,n,i,a=!1,o=0;o<t.length;o++)for(var s=0,u=(r=t[o]).length-1;s<r.length;u=s++)n=r[s],i=r[u],n.y>e.y!=i.y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(a=!a);return a}function Va(t,e){for(var r=!1,n=0,i=t.length-1;n<t.length;i=n++){var a=t[n],o=t[i];a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(r=!r);}return r}function Fa(t,e,r){var n=r[0],i=r[2];if(t.x<n.x&&e.x<n.x||t.x>i.x&&e.x>i.x||t.y<n.y&&e.y<n.y||t.y>i.y&&e.y>i.y)return !1;var a=A(t,e,r[0]);return a!==A(t,e,r[1])||a!==A(t,e,r[2])||a!==A(t,e,r[3])}function La(t,e,r){var n=e.paint.get(t).value;return "constant"===n.kind?n.value:r.programConfigurations.get(e.id).binders[t].maxValue}function Oa(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function Da(t,e,r,n,a){if(!e[0]&&!e[1])return t;var o=i.convert(e)._mult(a);"viewport"===r&&o._rotate(-n);for(var s=[],u=0;u<t.length;u++){var l=t[u];s.push(l.sub(o));}return s}Sa.prototype.populate=function(t,e){var r=this.layers[0],n=[],i=null;"circle"===r.type&&(i=r.layout.get("circle-sort-key"));for(var a=0,o=t;a<o.length;a+=1){var s=o[a],u=s.feature,l=s.index,p=s.sourceLayerIndex;if(this.layers[0]._featureFilter(new Hn(this.zoom),u)){var c=wa(u),h=i?i.evaluate(u,{}):void 0,f={id:u.id,properties:u.properties,type:u.type,sourceLayerIndex:p,index:l,geometry:c,patterns:{},sortKey:h};n.push(f);}}i&&n.sort((function(t,e){return t.sortKey-e.sortKey}));for(var y=0,d=n;y<d.length;y+=1){var m=d[y],v=m,g=v.geometry,x=v.index,b=v.sourceLayerIndex,_=t[x].feature;this.addFeature(m,g,x),e.featureIndex.insert(_,g,x,b,this.index);}},Sa.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},Sa.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Sa.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},Sa.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Hi),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},Sa.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},Sa.prototype.addFeature=function(t,e,r){for(var n=0,i=e;n<i.length;n+=1)for(var a=0,o=i[n];a<o.length;a+=1){var s=o[a],u=s.x,l=s.y;if(!(u<0||u>=xa||l<0||l>=xa)){var p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),c=p.vertexLength;Aa(this.layoutVertexArray,u,l,-1,-1),Aa(this.layoutVertexArray,u,l,1,-1),Aa(this.layoutVertexArray,u,l,1,1),Aa(this.layoutVertexArray,u,l,-1,1),this.indexArray.emplaceBack(c,c+1,c+2),this.indexArray.emplaceBack(c,c+3,c+2),p.vertexLength+=4,p.primitiveLength+=2;}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{});},An("CircleBucket",Sa,{omit:["layers"]});var Ra=new li({"circle-sort-key":new ai(Tt.layout_circle["circle-sort-key"])}),Ua={paint:new li({"circle-radius":new ai(Tt.paint_circle["circle-radius"]),"circle-color":new ai(Tt.paint_circle["circle-color"]),"circle-blur":new ai(Tt.paint_circle["circle-blur"]),"circle-opacity":new ai(Tt.paint_circle["circle-opacity"]),"circle-translate":new ii(Tt.paint_circle["circle-translate"]),"circle-translate-anchor":new ii(Tt.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new ii(Tt.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new ii(Tt.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new ai(Tt.paint_circle["circle-stroke-width"]),"circle-stroke-color":new ai(Tt.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new ai(Tt.paint_circle["circle-stroke-opacity"])}),layout:Ra},ja="undefined"!=typeof Float32Array?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var t=arguments,e=0,r=arguments.length;r--;)e+=t[r]*t[r];return Math.sqrt(e)});var qa,Na;qa=new ja(3),ja!=Float32Array&&(qa[0]=0,qa[1]=0,qa[2]=0),Na=qa;function Ka(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*o,t[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*o,t[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*o,t[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*o,t}!function(){var t=function(){var t=new ja(4);return ja!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}();}();var Xa=function(t){function e(e){t.call(this,e,Ua);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new Sa(t)},e.prototype.queryRadius=function(t){var e=t;return La("circle-radius",this,e)+La("circle-stroke-width",this,e)+Oa(this.paint.get("circle-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,a,o,s){for(var u=Da(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),a.angle,o),l=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r),p="map"===this.paint.get("circle-pitch-alignment"),c=p?u:function(t,e){return t.map((function(t){return Za(t,e)}))}(u,s),h=p?l*o:l,f=0,y=n;f<y.length;f+=1)for(var d=0,m=y[f];d<m.length;d+=1){var v=m[d],g=p?v:Za(v,s),x=h,b=Ka([],[v.x,v.y,0,1],s);if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?x*=b[3]/a.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(x*=a.cameraToCenterDistance/b[3]),Ia(c,g,x))return !0}return !1},e}(pi);function Za(t,e){var r=Ka([],[t.x,t.y,0,1],e);return new i(r[0]/r[3],r[1]/r[3])}var Ga=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Sa);function Ja(t,e,r,n){var i=e.width,a=e.height;if(n){if(n instanceof Uint8ClampedArray)n=new Uint8Array(n.buffer);else if(n.length!==i*a*r)throw new RangeError("mismatched image size")}else n=new Uint8Array(i*a*r);return t.width=i,t.height=a,t.data=n,t}function Ha(t,e,r){var n=e.width,i=e.height;if(n!==t.width||i!==t.height){var a=Ja({},{width:n,height:i},r);Ya(t,a,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,n),height:Math.min(t.height,i)},r),t.width=n,t.height=i,t.data=a.data;}}function Ya(t,e,r,n,i,a){if(0===i.width||0===i.height)return e;if(i.width>t.width||i.height>t.height||r.x>t.width-i.width||r.y>t.height-i.height)throw new RangeError("out of range source coordinates for image copy");if(i.width>e.width||i.height>e.height||n.x>e.width-i.width||n.y>e.height-i.height)throw new RangeError("out of range destination coordinates for image copy");for(var o=t.data,s=e.data,u=0;u<i.height;u++)for(var l=((r.y+u)*t.width+r.x)*a,p=((n.y+u)*e.width+n.x)*a,c=0;c<i.width*a;c++)s[p+c]=o[l+c];return e}An("HeatmapBucket",Ga,{omit:["layers"]});var $a=function(t,e){Ja(this,t,1,e);};$a.prototype.resize=function(t){Ha(this,t,1);},$a.prototype.clone=function(){return new $a({width:this.width,height:this.height},new Uint8Array(this.data))},$a.copy=function(t,e,r,n,i){Ya(t,e,r,n,i,1);};var Wa=function(t,e){Ja(this,t,4,e);};Wa.prototype.resize=function(t){Ha(this,t,4);},Wa.prototype.replace=function(t,e){e?this.data.set(t):t instanceof Uint8ClampedArray?this.data=new Uint8Array(t.buffer):this.data=t;},Wa.prototype.clone=function(){return new Wa({width:this.width,height:this.height},new Uint8Array(this.data))},Wa.copy=function(t,e,r,n,i){Ya(t,e,r,n,i,4);},An("AlphaImage",$a),An("RGBAImage",Wa);var Qa={paint:new li({"heatmap-radius":new ai(Tt.paint_heatmap["heatmap-radius"]),"heatmap-weight":new ai(Tt.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new ii(Tt.paint_heatmap["heatmap-intensity"]),"heatmap-color":new ui(Tt.paint_heatmap["heatmap-color"]),"heatmap-opacity":new ii(Tt.paint_heatmap["heatmap-opacity"])})};function to(t,e){for(var r=new Uint8Array(1024),n={},i=0,a=0;i<256;i++,a+=4){n[e]=i/255;var o=t.evaluate(n);r[a+0]=Math.floor(255*o.r/o.a),r[a+1]=Math.floor(255*o.g/o.a),r[a+2]=Math.floor(255*o.b/o.a),r[a+3]=Math.floor(255*o.a);}return new Wa({width:256,height:1},r)}var eo=function(t){function e(e){t.call(this,e,Qa),this._updateColorRamp();}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new Ga(t)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){"heatmap-color"===t&&this._updateColorRamp();},e.prototype._updateColorRamp=function(){var t=this._transitionablePaint._values["heatmap-color"].value.expression;this.colorRamp=to(t,"heatmapDensity"),this.colorRampTexture=null;},e.prototype.resize=function(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null);},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return !1},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility},e}(pi),ro={paint:new li({"hillshade-illumination-direction":new ii(Tt.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new ii(Tt.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new ii(Tt.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new ii(Tt.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new ii(Tt.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new ii(Tt.paint_hillshade["hillshade-accent-color"])})},no=function(t){function e(e){t.call(this,e,ro);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility},e}(pi),io=yi([{name:"a_pos",components:2,type:"Int16"}],4).members,ao=so,oo=so;function so(t,e,r){r=r||2;var n,i,a,o,s,u,l,p=e&&e.length,c=p?e[0]*r:t.length,h=uo(t,0,c,r,!0),f=[];if(!h||h.next===h.prev)return f;if(p&&(h=function(t,e,r,n){var i,a,o,s,u,l=[];for(i=0,a=e.length;i<a;i++)o=e[i]*n,s=i<a-1?e[i+1]*n:t.length,(u=uo(t,o,s,n,!1))===u.next&&(u.steiner=!0),l.push(bo(u));for(l.sort(mo),i=0;i<l.length;i++)vo(l[i],r),r=lo(r,r.next);return r}(t,e,h,r)),t.length>80*r){n=a=t[0],i=o=t[1];for(var y=r;y<c;y+=r)(s=t[y])<n&&(n=s),(u=t[y+1])<i&&(i=u),s>a&&(a=s),u>o&&(o=u);l=0!==(l=Math.max(a-n,o-i))?1/l:0;}return po(h,f,r,n,i,l),f}function uo(t,e,r,n,i){var a,o;if(i===Mo(t,e,r,n)>0)for(a=e;a<r;a+=n)o=To(a,t[a],t[a+1],o);else for(a=r-n;a>=e;a-=n)o=To(a,t[a],t[a+1],o);return o&&So(o,o.next)&&(Po(o),o=o.next),o}function lo(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!So(n,n.next)&&0!==Ao(n.prev,n,n.next))n=n.next;else{if(Po(n),(n=e=n.prev)===n.next)break;r=!0;}}while(r||n!==e);return e}function po(t,e,r,n,i,a,o){if(t){!o&&a&&function(t,e,r,n){var i=t;do{null===i.z&&(i.z=xo(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,a,o,s,u,l=1;do{for(r=t,t=null,a=null,o=0;r;){for(o++,n=r,s=0,e=0;e<l&&(s++,n=n.nextZ);e++);for(u=l;s>0||u>0&&n;)0!==s&&(0===u||!n||r.z<=n.z)?(i=r,r=r.nextZ,s--):(i=n,n=n.nextZ,u--),a?a.nextZ=i:t=i,i.prevZ=a,a=i;r=n;}a.nextZ=null,l*=2;}while(o>1)}(i);}(t,n,i,a);for(var s,u,l=t;t.prev!==t.next;)if(s=t.prev,u=t.next,a?ho(t,n,i,a):co(t))e.push(s.i/r),e.push(t.i/r),e.push(u.i/r),Po(t),t=u.next,l=u.next;else if((t=u)===l){o?1===o?po(t=fo(lo(t),e,r),e,r,n,i,a,2):2===o&&yo(t,e,r,n,i,a):po(lo(t),e,r,n,i,a,1);break}}}function co(t){var e=t.prev,r=t,n=t.next;if(Ao(e,r,n)>=0)return !1;for(var i=t.next.next;i!==t.prev;){if(_o(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&Ao(i.prev,i,i.next)>=0)return !1;i=i.next;}return !0}function ho(t,e,r,n){var i=t.prev,a=t,o=t.next;if(Ao(i,a,o)>=0)return !1;for(var s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,u=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,l=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,p=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,c=xo(s,u,e,r,n),h=xo(l,p,e,r,n),f=t.prevZ,y=t.nextZ;f&&f.z>=c&&y&&y.z<=h;){if(f!==t.prev&&f!==t.next&&_o(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Ao(f.prev,f,f.next)>=0)return !1;if(f=f.prevZ,y!==t.prev&&y!==t.next&&_o(i.x,i.y,a.x,a.y,o.x,o.y,y.x,y.y)&&Ao(y.prev,y,y.next)>=0)return !1;y=y.nextZ;}for(;f&&f.z>=c;){if(f!==t.prev&&f!==t.next&&_o(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Ao(f.prev,f,f.next)>=0)return !1;f=f.prevZ;}for(;y&&y.z<=h;){if(y!==t.prev&&y!==t.next&&_o(i.x,i.y,a.x,a.y,o.x,o.y,y.x,y.y)&&Ao(y.prev,y,y.next)>=0)return !1;y=y.nextZ;}return !0}function fo(t,e,r){var n=t;do{var i=n.prev,a=n.next.next;!So(i,a)&&ko(i,n,n.next,a)&&Co(i,a)&&Co(a,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(a.i/r),Po(n),Po(n.next),n=t=a),n=n.next;}while(n!==t);return lo(n)}function yo(t,e,r,n,i,a){var o=t;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&wo(o,s)){var u=Bo(o,s);return o=lo(o,o.next),u=lo(u,u.next),po(o,e,r,n,i,a),void po(u,e,r,n,i,a)}s=s.next;}o=o.next;}while(o!==t)}function mo(t,e){return t.x-e.x}function vo(t,e){if(e=function(t,e){var r,n=e,i=t.x,a=t.y,o=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var s=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=i&&s>o){if(o=s,s===i){if(a===n.y)return n;if(a===n.next.y)return n.next}r=n.x<n.next.x?n:n.next;}}n=n.next;}while(n!==e);if(!r)return null;if(i===o)return r;var u,l=r,p=r.x,c=r.y,h=1/0;n=r;do{i>=n.x&&n.x>=p&&i!==n.x&&_o(a<c?i:o,a,p,c,a<c?o:i,a,n.x,n.y)&&(u=Math.abs(a-n.y)/(i-n.x),Co(n,t)&&(u<h||u===h&&(n.x>r.x||n.x===r.x&&go(r,n)))&&(r=n,h=u)),n=n.next;}while(n!==l);return r}(t,e)){var r=Bo(e,t);lo(r,r.next);}}function go(t,e){return Ao(t.prev,t,e.prev)<0&&Ao(e.next,t,t.next)<0}function xo(t,e,r,n,i){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function bo(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;}while(e!==t);return r}function _o(t,e,r,n,i,a,o,s){return (i-o)*(e-s)-(t-o)*(a-s)>=0&&(t-o)*(n-s)-(r-o)*(e-s)>=0&&(r-o)*(a-s)-(i-o)*(n-s)>=0}function wo(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&ko(r,r.next,t,e))return !0;r=r.next;}while(r!==t);return !1}(t,e)&&(Co(t,e)&&Co(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,a=(t.y+e.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;}while(r!==t);return n}(t,e)&&(Ao(t.prev,t,e.prev)||Ao(t,e.prev,e))||So(t,e)&&Ao(t.prev,t,t.next)>0&&Ao(e.prev,e,e.next)>0)}function Ao(t,e,r){return (e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function So(t,e){return t.x===e.x&&t.y===e.y}function ko(t,e,r,n){var i=zo(Ao(t,e,r)),a=zo(Ao(t,e,n)),o=zo(Ao(r,n,t)),s=zo(Ao(r,n,e));return i!==a&&o!==s||(!(0!==i||!Io(t,r,e))||(!(0!==a||!Io(t,n,e))||(!(0!==o||!Io(r,t,n))||!(0!==s||!Io(r,e,n)))))}function Io(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function zo(t){return t>0?1:t<0?-1:0}function Co(t,e){return Ao(t.prev,t,t.next)<0?Ao(t,e,t.next)>=0&&Ao(t,t.prev,e)>=0:Ao(t,e,t.prev)<0||Ao(t,t.next,e)<0}function Bo(t,e){var r=new Eo(t.i,t.x,t.y),n=new Eo(e.i,e.x,e.y),i=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function To(t,e,r,n){var i=new Eo(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Po(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function Eo(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function Mo(t,e,r,n){for(var i=0,a=e,o=r-n;a<r;a+=n)i+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return i}function Vo(t,e,r,n,i){!function t(e,r,n,i,a){for(;i>n;){if(i-n>600){var o=i-n+1,s=r-n+1,u=Math.log(o),l=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*l*(o-l)/o)*(s-o/2<0?-1:1),c=Math.max(n,Math.floor(r-s*l/o+p)),h=Math.min(i,Math.floor(r+(o-s)*l/o+p));t(e,r,c,h,a);}var f=e[r],y=n,d=i;for(Fo(e,n,r),a(e[i],f)>0&&Fo(e,n,i);y<d;){for(Fo(e,y,d),y++,d--;a(e[y],f)<0;)y++;for(;a(e[d],f)>0;)d--;}0===a(e[n],f)?Fo(e,n,d):Fo(e,++d,i),d<=r&&(n=d+1),r<=d&&(i=d-1);}}(t,e,r||0,n||t.length-1,i||Lo);}function Fo(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}function Lo(t,e){return t<e?-1:t>e?1:0}function Oo(t,e){var r=t.length;if(r<=1)return [t];for(var n,i,a=[],o=0;o<r;o++){var s=S(t[o]);0!==s&&(t[o].area=Math.abs(s),void 0===i&&(i=s<0),i===s<0?(n&&a.push(n),n=[t[o]]):n.push(t[o]));}if(n&&a.push(n),e>1)for(var u=0;u<a.length;u++)a[u].length<=e||(Vo(a[u],e,1,a[u].length-1,Do),a[u]=a[u].slice(0,e));return a}function Do(t,e){return e.area-t.area}function Ro(t,e,r){for(var n=r.patternDependencies,i=!1,a=0,o=e;a<o.length;a+=1){var s=o[a].paint.get(t+"-pattern");s.isConstant()||(i=!0);var u=s.constantOr(null);u&&(i=!0,n[u.to]=!0,n[u.from]=!0);}return i}function Uo(t,e,r,n,i){for(var a=i.patternDependencies,o=0,s=e;o<s.length;o+=1){var u=s[o],l=u.paint.get(t+"-pattern").value;if("constant"!==l.kind){var p=l.evaluate({zoom:n-1},r,{},i.availableImages),c=l.evaluate({zoom:n},r,{},i.availableImages),h=l.evaluate({zoom:n+1},r,{},i.availableImages);p=p&&p.name?p.name:p,c=c&&c.name?c.name:c,h=h&&h.name?h.name:h,a[p]=!0,a[c]=!0,a[h]=!0,r.patterns[u.id]={min:p,mid:c,max:h};}}return r}so.deviation=function(t,e,r,n){var i=e&&e.length,a=i?e[0]*r:t.length,o=Math.abs(Mo(t,0,a,r));if(i)for(var s=0,u=e.length;s<u;s++){var l=e[s]*r,p=s<u-1?e[s+1]*r:t.length;o-=Math.abs(Mo(t,l,p,r));}var c=0;for(s=0;s<n.length;s+=3){var h=n[s]*r,f=n[s+1]*r,y=n[s+2]*r;c+=Math.abs((t[h]-t[y])*(t[f+1]-t[h+1])-(t[h]-t[f])*(t[y+1]-t[h+1]));}return 0===o&&0===c?0:Math.abs((c-o)/o)},so.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var a=0;a<t[i].length;a++)for(var o=0;o<e;o++)r.vertices.push(t[i][a][o]);i>0&&(n+=t[i-1].length,r.holes.push(n));}return r},ao.default=oo;var jo=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new mi,this.indexArray=new Ei,this.indexArray2=new Mi,this.programConfigurations=new ma(io,t.layers,t.zoom),this.segments=new Yi,this.segments2=new Yi,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};jo.prototype.populate=function(t,e){this.hasPattern=Ro("fill",this.layers,e);for(var r=this.layers[0].layout.get("fill-sort-key"),n=[],i=0,a=t;i<a.length;i+=1){var o=a[i],s=o.feature,u=o.index,l=o.sourceLayerIndex;if(this.layers[0]._featureFilter(new Hn(this.zoom),s)){var p=wa(s),c=r?r.evaluate(s,{},e.availableImages):void 0,h={id:s.id,properties:s.properties,type:s.type,sourceLayerIndex:l,index:u,geometry:p,patterns:{},sortKey:c};n.push(h);}}r&&n.sort((function(t,e){return t.sortKey-e.sortKey}));for(var f=0,y=n;f<y.length;f+=1){var d=y[f],m=d,v=m.geometry,g=m.index,x=m.sourceLayerIndex;if(this.hasPattern){var b=Uo("fill",this.layers,d,this.zoom,e);this.patternFeatures.push(b);}else this.addFeature(d,v,g,{});var _=t[g].feature;e.featureIndex.insert(_,v,g,x,this.index);}},jo.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},jo.prototype.addFeatures=function(t,e){for(var r=0,n=this.patternFeatures;r<n.length;r+=1){var i=n[r];this.addFeature(i,i.geometry,i.index,e);}},jo.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},jo.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},jo.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,io),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0;},jo.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy());},jo.prototype.addFeature=function(t,e,r,n){for(var i=0,a=Oo(e,500);i<a.length;i+=1){for(var o=a[i],s=0,u=0,l=o;u<l.length;u+=1){s+=l[u].length;}for(var p=this.segments.prepareSegment(s,this.layoutVertexArray,this.indexArray),c=p.vertexLength,h=[],f=[],y=0,d=o;y<d.length;y+=1){var m=d[y];if(0!==m.length){m!==o[0]&&f.push(h.length/2);var v=this.segments2.prepareSegment(m.length,this.layoutVertexArray,this.indexArray2),g=v.vertexLength;this.layoutVertexArray.emplaceBack(m[0].x,m[0].y),this.indexArray2.emplaceBack(g+m.length-1,g),h.push(m[0].x),h.push(m[0].y);for(var x=1;x<m.length;x++)this.layoutVertexArray.emplaceBack(m[x].x,m[x].y),this.indexArray2.emplaceBack(g+x-1,g+x),h.push(m[x].x),h.push(m[x].y);v.vertexLength+=m.length,v.primitiveLength+=m.length;}}for(var b=ao(h,f),_=0;_<b.length;_+=3)this.indexArray.emplaceBack(c+b[_],c+b[_+1],c+b[_+2]);p.vertexLength+=s,p.primitiveLength+=b.length/3;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,n);},An("FillBucket",jo,{omit:["layers","patternFeatures"]});var qo=new li({"fill-sort-key":new ai(Tt.layout_fill["fill-sort-key"])}),No={paint:new li({"fill-antialias":new ii(Tt.paint_fill["fill-antialias"]),"fill-opacity":new ai(Tt.paint_fill["fill-opacity"]),"fill-color":new ai(Tt.paint_fill["fill-color"]),"fill-outline-color":new ai(Tt.paint_fill["fill-outline-color"]),"fill-translate":new ii(Tt.paint_fill["fill-translate"]),"fill-translate-anchor":new ii(Tt.paint_fill["fill-translate-anchor"]),"fill-pattern":new oi(Tt.paint_fill["fill-pattern"])}),layout:qo},Ko=function(t){function e(e){t.call(this,e,No);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r);var n=this.paint._values["fill-outline-color"];"constant"===n.value.kind&&void 0===n.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"]);},e.prototype.createBucket=function(t){return new jo(t)},e.prototype.queryRadius=function(){return Oa(this.paint.get("fill-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,a,o){return za(Da(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),a.angle,o),n)},e.prototype.isTileClipped=function(){return !0},e}(pi),Xo=yi([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4).members,Zo=Go;function Go(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(Jo,this,e);}function Jo(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){var r=t.readVarint()+t.pos;for(;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i;}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos);}function Ho(t){for(var e,r,n=0,i=0,a=t.length,o=a-1;i<a;o=i++)e=t[i],n+=((r=t[o]).x-e.x)*(e.y+r.y);return n}Go.types=["Unknown","Point","LineString","Polygon"],Go.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,n=1,a=0,o=0,s=0,u=[];t.pos<r;){if(a<=0){var l=t.readVarint();n=7&l,a=l>>3;}if(a--,1===n||2===n)o+=t.readSVarint(),s+=t.readSVarint(),1===n&&(e&&u.push(e),e=[]),e.push(new i(o,s));else{if(7!==n)throw new Error("unknown command "+n);e&&e.push(e[0].clone());}}return e&&u.push(e),u},Go.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,a=0,o=1/0,s=-1/0,u=1/0,l=-1/0;t.pos<e;){if(n<=0){var p=t.readVarint();r=7&p,n=p>>3;}if(n--,1===r||2===r)(i+=t.readSVarint())<o&&(o=i),i>s&&(s=i),(a+=t.readSVarint())<u&&(u=a),a>l&&(l=a);else if(7!==r)throw new Error("unknown command "+r)}return [o,u,s,l]},Go.prototype.toGeoJSON=function(t,e,r){var n,i,a=this.extent*Math.pow(2,r),o=this.extent*t,s=this.extent*e,u=this.loadGeometry(),l=Go.types[this.type];function p(t){for(var e=0;e<t.length;e++){var r=t[e],n=180-360*(r.y+s)/a;t[e]=[360*(r.x+o)/a-180,360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90];}}switch(this.type){case 1:var c=[];for(n=0;n<u.length;n++)c[n]=u[n][0];p(u=c);break;case 2:for(n=0;n<u.length;n++)p(u[n]);break;case 3:for(u=function(t){var e=t.length;if(e<=1)return [t];for(var r,n,i=[],a=0;a<e;a++){var o=Ho(t[a]);0!==o&&(void 0===n&&(n=o<0),n===o<0?(r&&i.push(r),r=[t[a]]):r.push(t[a]));}r&&i.push(r);return i}(u),n=0;n<u.length;n++)for(i=0;i<u[n].length;i++)p(u[n][i]);}1===u.length?u=u[0]:l="Multi"+l;var h={type:"Feature",geometry:{type:l,coordinates:u},properties:this.properties};return "id"in this&&(h.id=this.id),h};var Yo=$o;function $o(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(Wo,this,e),this.length=this._features.length;}function Wo(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){var e=null,r=t.readVarint()+t.pos;for(;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null;}return e}(r));}function Qo(t,e,r){if(3===t){var n=new Yo(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n);}}$o.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new Zo(this._pbf,e,this.extent,this._keys,this._values)};var ts={VectorTile:function(t,e){this.layers=t.readFields(Qo,{},e);},VectorTileFeature:Zo,VectorTileLayer:Yo},es=ts.VectorTileFeature.types,rs=Math.pow(2,13);function ns(t,e,r,n,i,a,o,s){t.emplaceBack(e,r,2*Math.floor(n*rs)+o,i*rs*2,a*rs*2,Math.round(s));}var is=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new gi,this.indexArray=new Ei,this.programConfigurations=new ma(Xo,t.layers,t.zoom),this.segments=new Yi,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};function as(t,e){return t.x===e.x&&(t.x<0||t.x>xa)||t.y===e.y&&(t.y<0||t.y>xa)}function os(t){return t.every((function(t){return t.x<0}))||t.every((function(t){return t.x>xa}))||t.every((function(t){return t.y<0}))||t.every((function(t){return t.y>xa}))}is.prototype.populate=function(t,e){this.features=[],this.hasPattern=Ro("fill-extrusion",this.layers,e);for(var r=0,n=t;r<n.length;r+=1){var i=n[r],a=i.feature,o=i.index,s=i.sourceLayerIndex;if(this.layers[0]._featureFilter(new Hn(this.zoom),a)){var u=wa(a),l={sourceLayerIndex:s,index:o,geometry:u,properties:a.properties,type:a.type,patterns:{}};void 0!==a.id&&(l.id=a.id),this.hasPattern?this.features.push(Uo("fill-extrusion",this.layers,l,this.zoom,e)):this.addFeature(l,u,o,{}),e.featureIndex.insert(a,u,o,s,this.index,!0);}}},is.prototype.addFeatures=function(t,e){for(var r=0,n=this.features;r<n.length;r+=1){var i=n[r],a=i.geometry;this.addFeature(i,a,i.index,e);}},is.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},is.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},is.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},is.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Xo),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},is.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},is.prototype.addFeature=function(t,e,r,n){for(var i=0,a=Oo(e,500);i<a.length;i+=1){for(var o=a[i],s=0,u=0,l=o;u<l.length;u+=1){s+=l[u].length;}for(var p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray),c=0,h=o;c<h.length;c+=1){var f=h[c];if(0!==f.length&&!os(f))for(var y=0,d=0;d<f.length;d++){var m=f[d];if(d>=1){var v=f[d-1];if(!as(m,v)){p.vertexLength+4>Yi.MAX_VERTEX_ARRAY_LENGTH&&(p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray));var g=m.sub(v)._perp()._unit(),x=v.dist(m);y+x>32768&&(y=0),ns(this.layoutVertexArray,m.x,m.y,g.x,g.y,0,0,y),ns(this.layoutVertexArray,m.x,m.y,g.x,g.y,0,1,y),y+=x,ns(this.layoutVertexArray,v.x,v.y,g.x,g.y,0,0,y),ns(this.layoutVertexArray,v.x,v.y,g.x,g.y,0,1,y);var b=p.vertexLength;this.indexArray.emplaceBack(b,b+2,b+1),this.indexArray.emplaceBack(b+1,b+2,b+3),p.vertexLength+=4,p.primitiveLength+=2;}}}}if(p.vertexLength+s>Yi.MAX_VERTEX_ARRAY_LENGTH&&(p=this.segments.prepareSegment(s,this.layoutVertexArray,this.indexArray)),"Polygon"===es[t.type]){for(var _=[],w=[],A=p.vertexLength,S=0,k=o;S<k.length;S+=1){var I=k[S];if(0!==I.length){I!==o[0]&&w.push(_.length/2);for(var z=0;z<I.length;z++){var C=I[z];ns(this.layoutVertexArray,C.x,C.y,0,0,1,1,0),_.push(C.x),_.push(C.y);}}}for(var B=ao(_,w),T=0;T<B.length;T+=3)this.indexArray.emplaceBack(A+B[T],A+B[T+2],A+B[T+1]);p.primitiveLength+=B.length/3,p.vertexLength+=s;}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,n);},An("FillExtrusionBucket",is,{omit:["layers","features"]});var ss={paint:new li({"fill-extrusion-opacity":new ii(Tt["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new ai(Tt["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new ii(Tt["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new ii(Tt["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new oi(Tt["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new ai(Tt["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new ai(Tt["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new ii(Tt["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})},us=function(t){function e(e){t.call(this,e,ss);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new is(t)},e.prototype.queryRadius=function(){return Oa(this.paint.get("fill-extrusion-translate"))},e.prototype.is3D=function(){return !0},e.prototype.queryIntersectsFeature=function(t,e,r,n,a,o,s,u){var l=Da(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),o.angle,s),p=this.paint.get("fill-extrusion-height").evaluate(e,r),c=this.paint.get("fill-extrusion-base").evaluate(e,r),h=function(t,e,r,n){for(var a=[],o=0,s=t;o<s.length;o+=1){var u=s[o],l=[u.x,u.y,n,1];Ka(l,l,e),a.push(new i(l[0]/l[3],l[1]/l[3]));}return a}(l,u,0,0),f=function(t,e,r,n){for(var a=[],o=[],s=n[8]*e,u=n[9]*e,l=n[10]*e,p=n[11]*e,c=n[8]*r,h=n[9]*r,f=n[10]*r,y=n[11]*r,d=0,m=t;d<m.length;d+=1){for(var v=m[d],g=[],x=[],b=0,_=v;b<_.length;b+=1){var w=_[b],A=w.x,S=w.y,k=n[0]*A+n[4]*S+n[12],I=n[1]*A+n[5]*S+n[13],z=n[2]*A+n[6]*S+n[14],C=n[3]*A+n[7]*S+n[15],B=z+l,T=C+p,P=k+c,E=I+h,M=z+f,V=C+y,F=new i((k+s)/T,(I+u)/T);F.z=B/T,g.push(F);var L=new i(P/V,E/V);L.z=M/V,x.push(L);}a.push(g),o.push(x);}return [a,o]}(n,c,p,u);return function(t,e,r){var n=1/0;za(r,e)&&(n=ps(r,e[0]));for(var i=0;i<e.length;i++)for(var a=e[i],o=t[i],s=0;s<a.length-1;s++){var u=a[s],l=a[s+1],p=o[s],c=o[s+1],h=[u,l,c,p,u];ka(r,h)&&(n=Math.min(n,ps(r,h)));}return n!==1/0&&n}(f[0],f[1],h)},e}(pi);function ls(t,e){return t.x*e.x+t.y*e.y}function ps(t,e){if(1===t.length){var r=e[0],n=e[1],i=e[3],a=t[0],o=n.sub(r),s=i.sub(r),u=a.sub(r),l=ls(o,o),p=ls(o,s),c=ls(s,s),h=ls(u,o),f=ls(u,s),y=l*c-p*p,d=(c*h-p*f)/y,m=(l*f-p*h)/y,v=1-d-m;return r.z*v+n.z*d+i.z*m}for(var g=1/0,x=0,b=e;x<b.length;x+=1){var _=b[x];g=Math.min(g,_.z);}return g}var cs=yi([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4).members,hs=ts.VectorTileFeature.types,fs=Math.cos(Math.PI/180*37.5),ys=Math.pow(2,14)/.5,ds=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new xi,this.indexArray=new Ei,this.programConfigurations=new ma(cs,t.layers,t.zoom),this.segments=new Yi,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};ds.prototype.populate=function(t,e){this.hasPattern=Ro("line",this.layers,e);for(var r=this.layers[0].layout.get("line-sort-key"),n=[],i=0,a=t;i<a.length;i+=1){var o=a[i],s=o.feature,u=o.index,l=o.sourceLayerIndex;if(this.layers[0]._featureFilter(new Hn(this.zoom),s)){var p=wa(s),c=r?r.evaluate(s,{}):void 0,h={id:s.id,properties:s.properties,type:s.type,sourceLayerIndex:l,index:u,geometry:p,patterns:{},sortKey:c};n.push(h);}}r&&n.sort((function(t,e){return t.sortKey-e.sortKey}));for(var f=0,y=n;f<y.length;f+=1){var d=y[f],m=d,v=m.geometry,g=m.index,x=m.sourceLayerIndex;if(this.hasPattern){var b=Uo("line",this.layers,d,this.zoom,e);this.patternFeatures.push(b);}else this.addFeature(d,v,g,{});var _=t[g].feature;e.featureIndex.insert(_,v,g,x,this.index);}},ds.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},ds.prototype.addFeatures=function(t,e){for(var r=0,n=this.patternFeatures;r<n.length;r+=1){var i=n[r];this.addFeature(i,i.geometry,i.index,e);}},ds.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},ds.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},ds.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,cs),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},ds.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},ds.prototype.addFeature=function(t,e,r,n){for(var i=this.layers[0].layout,a=i.get("line-join").evaluate(t,{}),o=i.get("line-cap"),s=i.get("line-miter-limit"),u=i.get("line-round-limit"),l=0,p=e;l<p.length;l+=1){var c=p[l];this.addLine(c,t,a,o,s,u,r,n);}},ds.prototype.addLine=function(t,e,r,n,i,a,o,s){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,e.properties&&e.properties.hasOwnProperty("mapbox_clip_start")&&e.properties.hasOwnProperty("mapbox_clip_end")){this.clipStart=+e.properties.mapbox_clip_start,this.clipEnd=+e.properties.mapbox_clip_end;for(var u=0;u<t.length-1;u++)this.totalDistance+=t[u].dist(t[u+1]);}for(var l="Polygon"===hs[e.type],p=t.length;p>=2&&t[p-1].equals(t[p-2]);)p--;for(var c=0;c<p-1&&t[c].equals(t[c+1]);)c++;if(!(p<(l?3:2))){"bevel"===r&&(i=1.05);var h,f=this.overscaling<=16?15*xa/(512*this.overscaling):0,y=this.segments.prepareSegment(10*p,this.layoutVertexArray,this.indexArray),d=void 0,m=void 0,v=void 0,g=void 0;this.e1=this.e2=-1,l&&(h=t[p-2],g=t[c].sub(h)._unit()._perp());for(var x=c;x<p;x++)if(!(m=l&&x===p-1?t[c+1]:t[x+1])||!t[x].equals(m)){g&&(v=g),h&&(d=h),h=t[x],g=m?m.sub(h)._unit()._perp():v;var b=(v=v||g).add(g);0===b.x&&0===b.y||b._unit();var _=v.x*g.x+v.y*g.y,w=b.x*g.x+b.y*g.y,A=0!==w?1/w:1/0,S=2*Math.sqrt(2-2*w),k=w<fs&&d&&m,I=v.x*g.y-v.y*g.x>0;if(k&&x>c){var z=h.dist(d);if(z>2*f){var C=h.sub(h.sub(d)._mult(f/z)._round());this.updateDistance(d,C),this.addCurrentVertex(C,v,0,0,y),d=C;}}var B=d&&m,T=B?r:l?"butt":n;if(B&&"round"===T&&(A<a?T="miter":A<=2&&(T="fakeround")),"miter"===T&&A>i&&(T="bevel"),"bevel"===T&&(A>2&&(T="flipbevel"),A<i&&(T="miter")),d&&this.updateDistance(d,h),"miter"===T)b._mult(A),this.addCurrentVertex(h,b,0,0,y);else if("flipbevel"===T){if(A>100)b=g.mult(-1);else{var P=A*v.add(g).mag()/v.sub(g).mag();b._perp()._mult(P*(I?-1:1));}this.addCurrentVertex(h,b,0,0,y),this.addCurrentVertex(h,b.mult(-1),0,0,y);}else if("bevel"===T||"fakeround"===T){var E=-Math.sqrt(A*A-1),M=I?E:0,V=I?0:E;if(d&&this.addCurrentVertex(h,v,M,V,y),"fakeround"===T)for(var F=Math.round(180*S/Math.PI/20),L=1;L<F;L++){var O=L/F;if(.5!==O){var D=O-.5;O+=O*D*(O-1)*((1.0904+_*(_*(3.55645-1.43519*_)-3.2452))*D*D+(.848013+_*(.215638*_-1.06021)));}var R=g.sub(v)._mult(O)._add(v)._unit()._mult(I?-1:1);this.addHalfVertex(h,R.x,R.y,!1,I,0,y);}m&&this.addCurrentVertex(h,g,-M,-V,y);}else if("butt"===T)this.addCurrentVertex(h,b,0,0,y);else if("square"===T){var U=d?1:-1;this.addCurrentVertex(h,b,U,U,y);}else"round"===T&&(d&&(this.addCurrentVertex(h,v,0,0,y),this.addCurrentVertex(h,v,1,1,y,!0)),m&&(this.addCurrentVertex(h,g,-1,-1,y,!0),this.addCurrentVertex(h,g,0,0,y)));if(k&&x<p-1){var j=h.dist(m);if(j>2*f){var q=h.add(m.sub(h)._mult(f/j)._round());this.updateDistance(h,q),this.addCurrentVertex(q,g,0,0,y),h=q;}}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,e,o,s);}},ds.prototype.addCurrentVertex=function(t,e,r,n,i,a){void 0===a&&(a=!1);var o=e.x+e.y*r,s=e.y-e.x*r,u=-e.x+e.y*n,l=-e.y-e.x*n;this.addHalfVertex(t,o,s,a,!1,r,i),this.addHalfVertex(t,u,l,a,!0,-n,i),this.distance>ys/2&&0===this.totalDistance&&(this.distance=0,this.addCurrentVertex(t,e,r,n,i,a));},ds.prototype.addHalfVertex=function(t,e,r,n,i,a,o){var s=t.x,u=t.y,l=.5*this.scaledDistance;this.layoutVertexArray.emplaceBack((s<<1)+(n?1:0),(u<<1)+(i?1:0),Math.round(63*e)+128,Math.round(63*r)+128,1+(0===a?0:a<0?-1:1)|(63&l)<<2,l>>6);var p=o.vertexLength++;this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,p),o.primitiveLength++),i?this.e2=p:this.e1=p;},ds.prototype.updateDistance=function(t,e){this.distance+=t.dist(e),this.scaledDistance=this.totalDistance>0?(this.clipStart+(this.clipEnd-this.clipStart)*this.distance/this.totalDistance)*(ys-1):this.distance;},An("LineBucket",ds,{omit:["layers","patternFeatures"]});var ms=new li({"line-cap":new ii(Tt.layout_line["line-cap"]),"line-join":new ai(Tt.layout_line["line-join"]),"line-miter-limit":new ii(Tt.layout_line["line-miter-limit"]),"line-round-limit":new ii(Tt.layout_line["line-round-limit"]),"line-sort-key":new ai(Tt.layout_line["line-sort-key"])}),vs={paint:new li({"line-opacity":new ai(Tt.paint_line["line-opacity"]),"line-color":new ai(Tt.paint_line["line-color"]),"line-translate":new ii(Tt.paint_line["line-translate"]),"line-translate-anchor":new ii(Tt.paint_line["line-translate-anchor"]),"line-width":new ai(Tt.paint_line["line-width"]),"line-gap-width":new ai(Tt.paint_line["line-gap-width"]),"line-offset":new ai(Tt.paint_line["line-offset"]),"line-blur":new ai(Tt.paint_line["line-blur"]),"line-dasharray":new si(Tt.paint_line["line-dasharray"]),"line-pattern":new oi(Tt.paint_line["line-pattern"]),"line-gradient":new ui(Tt.paint_line["line-gradient"])}),layout:ms},gs=new(function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(e,r){return r=new Hn(Math.floor(r.zoom),{now:r.now,fadeDuration:r.fadeDuration,zoomHistory:r.zoomHistory,transition:r.transition}),t.prototype.possiblyEvaluate.call(this,e,r)},e.prototype.evaluate=function(e,r,n,i){return r=c({},r,{zoom:Math.floor(r.zoom)}),t.prototype.evaluate.call(this,e,r,n,i)},e}(ai))(vs.paint.properties["line-width"].specification);gs.useIntegerZoom=!0;var xs=function(t){function e(e){t.call(this,e,vs);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._handleSpecialPaintPropertyUpdate=function(t){"line-gradient"===t&&this._updateGradient();},e.prototype._updateGradient=function(){var t=this._transitionablePaint._values["line-gradient"].value.expression;this.gradient=to(t,"lineProgress"),this.gradientTexture=null;},e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r),this.paint._values["line-floorwidth"]=gs.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,e);},e.prototype.createBucket=function(t){return new ds(t)},e.prototype.queryRadius=function(t){var e=t,r=bs(La("line-width",this,e),La("line-gap-width",this,e)),n=La("line-offset",this,e);return r/2+Math.abs(n)+Oa(this.paint.get("line-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,a,o,s){var u=Da(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),o.angle,s),l=s/2*bs(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),p=this.paint.get("line-offset").evaluate(e,r);return p&&(n=function(t,e){for(var r=[],n=new i(0,0),a=0;a<t.length;a++){for(var o=t[a],s=[],u=0;u<o.length;u++){var l=o[u-1],p=o[u],c=o[u+1],h=0===u?n:p.sub(l)._unit()._perp(),f=u===o.length-1?n:c.sub(p)._unit()._perp(),y=h._add(f)._unit(),d=y.x*f.x+y.y*f.y;y._mult(1/d),s.push(y._mult(e)._add(p));}r.push(s);}return r}(n,p*s)),function(t,e,r){for(var n=0;n<e.length;n++){var i=e[n];if(t.length>=3)for(var a=0;a<i.length;a++)if(Va(t,i[a]))return !0;if(Ca(t,i,r))return !0}return !1}(u,n,l)},e.prototype.isTileClipped=function(){return !0},e}(pi);function bs(t,e){return e>0?e+2*t:t}var _s=yi([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),ws=yi([{name:"a_projected_pos",components:3,type:"Float32"}],4),As=(yi([{name:"a_fade_opacity",components:1,type:"Uint32"}],4),yi([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}])),Ss=(yi([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"},{type:"Int16",name:"radius"},{type:"Int16",name:"signedDistanceFromAnchor"}]),yi([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4)),ks=yi([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4);yi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),yi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",components:2,name:"textOffset"}]),yi([{type:"Float32",name:"offsetX"}]),yi([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}]);function Is(t,e,r){return t.sections.forEach((function(t){t.text=function(t,e,r){var n=e.layout.get("text-transform").evaluate(r,{});return "uppercase"===n?t=t.toLocaleUpperCase():"lowercase"===n&&(t=t.toLocaleLowerCase()),Jn.applyArabicShaping&&(t=Jn.applyArabicShaping(t)),t}(t.text,e,r);})),t}var zs={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};var Cs=24,Bs=function(t,e,r,n,i){var a,o,s=8*i-n-1,u=(1<<s)-1,l=u>>1,p=-7,c=r?i-1:0,h=r?-1:1,f=t[e+c];for(c+=h,a=f&(1<<-p)-1,f>>=-p,p+=s;p>0;a=256*a+t[e+c],c+=h,p-=8);for(o=a&(1<<-p)-1,a>>=-p,p+=n;p>0;o=256*o+t[e+c],c+=h,p-=8);if(0===a)a=1-l;else{if(a===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),a-=l;}return (f?-1:1)*o*Math.pow(2,a-n)},Ts=function(t,e,r,n,i,a){var o,s,u,l=8*a-i-1,p=(1<<l)-1,c=p>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:a-1,y=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,o=p):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),(e+=o+c>=1?h/u:h*Math.pow(2,1-c))*u>=2&&(o++,u/=2),o+c>=p?(s=0,o=p):o+c>=1?(s=(e*u-1)*Math.pow(2,i),o+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;t[r+f]=255&s,f+=y,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;t[r+f]=255&o,f+=y,o/=256,l-=8);t[r+f-y]|=128*d;},Ps=Es;function Es(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}Es.Varint=0,Es.Fixed64=1,Es.Bytes=2,Es.Fixed32=5;var Ms="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function Vs(t){return t.type===Es.Bytes?t.readVarint()+t.pos:t.pos+1}function Fs(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function Ls(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i];}function Os(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r]);}function Ds(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r]);}function Rs(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r]);}function Us(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r]);}function js(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r]);}function qs(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r]);}function Ns(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r]);}function Ks(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r]);}function Xs(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r]);}function Zs(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function Gs(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24;}function Js(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}Es.prototype={destroy:function(){this.buf=null;},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,a=this.pos;this.type=7&n,t(i,e,this),this.pos===a&&this.skip(n);}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=Zs(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=Js(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=Zs(this.buf,this.pos)+4294967296*Zs(this.buf,this.pos+4);return this.pos+=8,t},readSFixed64:function(){var t=Zs(this.buf,this.pos)+4294967296*Js(this.buf,this.pos+4);return this.pos+=8,t},readFloat:function(){var t=Bs(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=Bs(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,a=r.buf;if(i=a[r.pos++],n=(112&i)>>4,i<128)return Fs(t,n,e);if(i=a[r.pos++],n|=(127&i)<<3,i<128)return Fs(t,n,e);if(i=a[r.pos++],n|=(127&i)<<10,i<128)return Fs(t,n,e);if(i=a[r.pos++],n|=(127&i)<<17,i<128)return Fs(t,n,e);if(i=a[r.pos++],n|=(127&i)<<24,i<128)return Fs(t,n,e);if(i=a[r.pos++],n|=(1&i)<<31,i<128)return Fs(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&Ms?function(t,e,r){return Ms.decode(t.subarray(e,r))}(this.buf,e,t):function(t,e,r){var n="",i=e;for(;i<r;){var a,o,s,u=t[i],l=null,p=u>239?4:u>223?3:u>191?2:1;if(i+p>r)break;1===p?u<128&&(l=u):2===p?128==(192&(a=t[i+1]))&&(l=(31&u)<<6|63&a)<=127&&(l=null):3===p?(a=t[i+1],o=t[i+2],128==(192&a)&&128==(192&o)&&((l=(15&u)<<12|(63&a)<<6|63&o)<=2047||l>=55296&&l<=57343)&&(l=null)):4===p&&(a=t[i+1],o=t[i+2],s=t[i+3],128==(192&a)&&128==(192&o)&&128==(192&s)&&((l=(15&u)<<18|(63&a)<<12|(63&o)<<6|63&s)<=65535||l>=1114112)&&(l=null)),null===l?(l=65533,p=1):l>65535&&(l-=65536,n+=String.fromCharCode(l>>>10&1023|55296),l=56320|1023&l),n+=String.fromCharCode(l),i+=p;}return n}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==Es.Bytes)return t.push(this.readVarint(e));var r=Vs(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==Es.Bytes)return t.push(this.readSVarint());var e=Vs(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==Es.Bytes)return t.push(this.readBoolean());var e=Vs(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==Es.Bytes)return t.push(this.readFloat());var e=Vs(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==Es.Bytes)return t.push(this.readDouble());var e=Vs(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==Es.Bytes)return t.push(this.readFixed32());var e=Vs(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==Es.Bytes)return t.push(this.readSFixed32());var e=Vs(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==Es.Bytes)return t.push(this.readFixed64());var e=Vs(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==Es.Bytes)return t.push(this.readSFixed64());var e=Vs(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===Es.Varint)for(;this.buf[this.pos++]>127;);else if(e===Es.Bytes)this.pos=this.readVarint()+this.pos;else if(e===Es.Fixed32)this.pos+=4;else{if(e!==Es.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8;}},writeTag:function(t,e){this.writeVarint(t<<3|e);},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),Gs(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),Gs(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),Gs(this.buf,-1&t,this.pos),Gs(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),Gs(this.buf,-1&t,this.pos),Gs(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0));if(t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos]=127&t;}(r,0,e),function(t,e){var r=(7&t)<<4;if(e.buf[e.pos++]|=r|((t>>>=3)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;e.buf[e.pos++]=127&t;}(n,e);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,a=0;a<e.length;a++){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){n>56319||a+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null;}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128);}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&Ls(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeFloat:function(t){this.realloc(4),Ts(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),Ts(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r];},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&Ls(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n;},writeMessage:function(t,e,r){this.writeTag(t,Es.Bytes),this.writeRawMessage(e,r);},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,Os,e);},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,Ds,e);},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,js,e);},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,Rs,e);},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,Us,e);},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,qs,e);},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,Ns,e);},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,Ks,e);},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,Xs,e);},writeBytesField:function(t,e){this.writeTag(t,Es.Bytes),this.writeBytes(e);},writeFixed32Field:function(t,e){this.writeTag(t,Es.Fixed32),this.writeFixed32(e);},writeSFixed32Field:function(t,e){this.writeTag(t,Es.Fixed32),this.writeSFixed32(e);},writeFixed64Field:function(t,e){this.writeTag(t,Es.Fixed64),this.writeFixed64(e);},writeSFixed64Field:function(t,e){this.writeTag(t,Es.Fixed64),this.writeSFixed64(e);},writeVarintField:function(t,e){this.writeTag(t,Es.Varint),this.writeVarint(e);},writeSVarintField:function(t,e){this.writeTag(t,Es.Varint),this.writeSVarint(e);},writeStringField:function(t,e){this.writeTag(t,Es.Bytes),this.writeString(e);},writeFloatField:function(t,e){this.writeTag(t,Es.Fixed32),this.writeFloat(e);},writeDoubleField:function(t,e){this.writeTag(t,Es.Fixed64),this.writeDouble(e);},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e));}};var Hs=3;function Ys(t,e,r){1===t&&r.readMessage($s,e);}function $s(t,e,r){if(3===t){var n=r.readMessage(Ws,{}),i=n.id,a=n.bitmap,o=n.width,s=n.height,u=n.left,l=n.top,p=n.advance;e.push({id:i,bitmap:new $a({width:o+2*Hs,height:s+2*Hs},a),metrics:{width:o,height:s,left:u,top:l,advance:p}});}}function Ws(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint());}var Qs=Hs;function tu(t){for(var e=0,r=0,n=0,i=t;n<i.length;n+=1){var a=i[n];e+=a.w*a.h,r=Math.max(r,a.w);}t.sort((function(t,e){return e.h-t.h}));for(var o=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}],s=0,u=0,l=0,p=t;l<p.length;l+=1)for(var c=p[l],h=o.length-1;h>=0;h--){var f=o[h];if(!(c.w>f.w||c.h>f.h)){if(c.x=f.x,c.y=f.y,u=Math.max(u,c.y+c.h),s=Math.max(s,c.x+c.w),c.w===f.w&&c.h===f.h){var y=o.pop();h<o.length&&(o[h]=y);}else c.h===f.h?(f.x+=c.w,f.w-=c.w):c.w===f.w?(f.y+=c.h,f.h-=c.h):(o.push({x:f.x+c.w,y:f.y,w:f.w-c.w,h:c.h}),f.y+=c.h,f.h-=c.h);break}}return {w:s,h:u,fill:e/(s*u)||0}}var eu=1,ru=function(t,e){var r=e.pixelRatio,n=e.version,i=e.stretchX,a=e.stretchY,o=e.content;this.paddedRect=t,this.pixelRatio=r,this.stretchX=i,this.stretchY=a,this.content=o,this.version=n;},nu={tl:{configurable:!0},br:{configurable:!0},tlbr:{configurable:!0},displaySize:{configurable:!0}};nu.tl.get=function(){return [this.paddedRect.x+eu,this.paddedRect.y+eu]},nu.br.get=function(){return [this.paddedRect.x+this.paddedRect.w-eu,this.paddedRect.y+this.paddedRect.h-eu]},nu.tlbr.get=function(){return this.tl.concat(this.br)},nu.displaySize.get=function(){return [(this.paddedRect.w-2*eu)/this.pixelRatio,(this.paddedRect.h-2*eu)/this.pixelRatio]},Object.defineProperties(ru.prototype,nu);var iu=function(t,e){var r={},n={};this.haveRenderCallbacks=[];var i=[];this.addImages(t,r,i),this.addImages(e,n,i);var a=tu(i),o=a.w,s=a.h,u=new Wa({width:o||1,height:s||1});for(var l in t){var p=t[l],c=r[l].paddedRect;Wa.copy(p.data,u,{x:0,y:0},{x:c.x+eu,y:c.y+eu},p.data);}for(var h in e){var f=e[h],y=n[h].paddedRect,d=y.x+eu,m=y.y+eu,v=f.data.width,g=f.data.height;Wa.copy(f.data,u,{x:0,y:0},{x:d,y:m},f.data),Wa.copy(f.data,u,{x:0,y:g-1},{x:d,y:m-1},{width:v,height:1}),Wa.copy(f.data,u,{x:0,y:0},{x:d,y:m+g},{width:v,height:1}),Wa.copy(f.data,u,{x:v-1,y:0},{x:d-1,y:m},{width:1,height:g}),Wa.copy(f.data,u,{x:0,y:0},{x:d+v,y:m},{width:1,height:g});}this.image=u,this.iconPositions=r,this.patternPositions=n;};iu.prototype.addImages=function(t,e,r){for(var n in t){var i=t[n],a={x:0,y:0,w:i.data.width+2*eu,h:i.data.height+2*eu};r.push(a),e[n]=new ru(a,i),i.hasRenderCallback&&this.haveRenderCallbacks.push(n);}},iu.prototype.patchUpdatedImages=function(t,e){for(var r in t.dispatchRenderCallbacks(this.haveRenderCallbacks),t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e);},iu.prototype.patchUpdatedImage=function(t,e,r){if(t&&e&&t.version!==e.version){t.version=e.version;var n=t.tl,i=n[0],a=n[1];r.update(e.data,void 0,{x:i,y:a});}},An("ImagePosition",ru),An("ImageAtlas",iu);var au={horizontal:1,vertical:2,horizontalOnly:3},ou=-17;var su=function(){this.scale=1,this.fontStack="",this.imageName=null;};su.forText=function(t,e){var r=new su;return r.scale=t||1,r.fontStack=e,r},su.forImage=function(t){var e=new su;return e.imageName=t,e};var uu=function(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null;};function lu(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d){var m,v=uu.fromFeature(t,i);c===au.vertical&&v.verticalizePunctuation();var g=Jn.processBidirectionalText,x=Jn.processStyledBidirectionalText;if(g&&1===v.sections.length){m=[];for(var b=0,_=g(v.toString(),mu(v,l,a,e,n,f,y));b<_.length;b+=1){var w=_[b],A=new uu;A.text=w,A.sections=v.sections;for(var S=0;S<w.length;S++)A.sectionIndex.push(0);m.push(A);}}else if(x){m=[];for(var k=0,I=x(v.text,v.sectionIndex,mu(v,l,a,e,n,f,y));k<I.length;k+=1){var z=I[k],C=new uu;C.text=z[0],C.sectionIndex=z[1],C.sections=v.sections,m.push(C);}}else m=function(t,e){for(var r=[],n=t.text,i=0,a=0,o=e;a<o.length;a+=1){var s=o[a];r.push(t.substring(i,s)),i=s;}return i<n.length&&r.push(t.substring(i,n.length)),r}(v,mu(v,l,a,e,n,f,y));var B=[],T={positionedLines:B,text:v.toString(),top:p[1],bottom:p[1],left:p[0],right:p[0],writingMode:c,iconsInText:!1,verticalizable:!1};return function(t,e,r,n,i,a,o,s,u,l,p,c){for(var h=0,f=ou,y=0,d=0,m="right"===s?1:"left"===s?0:.5,v=0,g=0,x=i;g<x.length;g+=1){var b=x[g];b.trim();var _=b.getMaxScale(),w=(_-1)*Cs,A={positionedGlyphs:[],lineOffset:0};t.positionedLines[v]=A;var S=A.positionedGlyphs,k=0;if(b.length()){for(var I=0;I<b.length();I++){var z=b.getSection(I),C=b.getSectionIndex(I),B=b.getCharCode(I),T=0,P=null,E=null,M=null,V=Cs,F=!(u===au.horizontal||!p&&!En(B)||p&&(pu[B]||(Z=B,Bn.Arabic(Z)||Bn["Arabic Supplement"](Z)||Bn["Arabic Extended-A"](Z)||Bn["Arabic Presentation Forms-A"](Z)||Bn["Arabic Presentation Forms-B"](Z))));if(z.imageName){var L=n[z.imageName];if(!L)continue;M=z.imageName,t.iconsInText=t.iconsInText||!0,E=L.paddedRect;var O=L.displaySize;z.scale=z.scale*Cs/c,P={width:O[0],height:O[1],left:eu,top:-Qs,advance:F?O[1]:O[0]};var D=Cs-O[1]*z.scale;T=w+D,V=P.advance;var R=F?O[0]*z.scale-Cs*_:O[1]*z.scale-Cs*_;R>0&&R>k&&(k=R);}else{var U=r[z.fontStack],j=U&&U[B];if(j&&j.rect)E=j.rect,P=j.metrics;else{var q=e[z.fontStack],N=q&&q[B];if(!N)continue;P=N.metrics;}T=(_-z.scale)*Cs;}F?(t.verticalizable=!0,S.push({glyph:B,imageName:M,x:h,y:f+T,vertical:F,scale:z.scale,fontStack:z.fontStack,sectionIndex:C,metrics:P,rect:E}),h+=V*z.scale+l):(S.push({glyph:B,imageName:M,x:h,y:f+T,vertical:F,scale:z.scale,fontStack:z.fontStack,sectionIndex:C,metrics:P,rect:E}),h+=P.advance*z.scale+l);}if(0!==S.length){var K=h-l;y=Math.max(K,y),gu(S,0,S.length-1,m,k);}h=0;var X=a*_+k;A.lineOffset=Math.max(k,w),f+=X,d=Math.max(X,d),++v;}else f+=a,++v;}var Z;var G=f-ou,J=vu(o),H=J.horizontalAlign,Y=J.verticalAlign;(function(t,e,r,n,i,a,o,s,u){var l=(e-r)*i,p=0;p=a!==o?-s*n-ou:(-n*u+.5)*o;for(var c=0,h=t;c<h.length;c+=1)for(var f=h[c],y=0,d=f.positionedGlyphs;y<d.length;y+=1){var m=d[y];m.x+=l,m.y+=p;}})(t.positionedLines,m,H,Y,y,d,a,G,i.length),t.top+=-Y*G,t.bottom=t.top+G,t.left+=-H*y,t.right=t.left+y;}(T,e,r,n,m,o,s,u,c,l,h,d),!function(t){for(var e=0,r=t;e<r.length;e+=1){if(0!==r[e].positionedGlyphs.length)return !1}return !0}(B)&&T}uu.fromFeature=function(t,e){for(var r=new uu,n=0;n<t.sections.length;n++){var i=t.sections[n];i.image?r.addImageSection(i):r.addTextSection(i,e);}return r},uu.prototype.length=function(){return this.text.length},uu.prototype.getSection=function(t){return this.sections[this.sectionIndex[t]]},uu.prototype.getSectionIndex=function(t){return this.sectionIndex[t]},uu.prototype.getCharCode=function(t){return this.text.charCodeAt(t)},uu.prototype.verticalizePunctuation=function(){this.text=function(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r+1)||null,i=t.charCodeAt(r-1)||null;(!n||!Mn(n)||zs[t[r+1]])&&(!i||!Mn(i)||zs[t[r-1]])&&zs[t[r]]?e+=zs[t[r]]:e+=t[r];}return e}(this.text);},uu.prototype.trim=function(){for(var t=0,e=0;e<this.text.length&&pu[this.text.charCodeAt(e)];e++)t++;for(var r=this.text.length,n=this.text.length-1;n>=0&&n>=t&&pu[this.text.charCodeAt(n)];n--)r--;this.text=this.text.substring(t,r),this.sectionIndex=this.sectionIndex.slice(t,r);},uu.prototype.substring=function(t,e){var r=new uu;return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r},uu.prototype.toString=function(){return this.text},uu.prototype.getMaxScale=function(){var t=this;return this.sectionIndex.reduce((function(e,r){return Math.max(e,t.sections[r].scale)}),0)},uu.prototype.addTextSection=function(t,e){this.text+=t.text,this.sections.push(su.forText(t.scale,t.fontStack||e));for(var r=this.sections.length-1,n=0;n<t.text.length;++n)this.sectionIndex.push(r);},uu.prototype.addImageSection=function(t){var e=t.image?t.image.name:"";if(0!==e.length){var r=this.getNextImageSectionCharCode();r?(this.text+=String.fromCharCode(r),this.sections.push(su.forImage(e)),this.sectionIndex.push(this.sections.length-1)):w("Reached maximum number of images 6401");}else w("Can't add FormattedSection with an empty image.");},uu.prototype.getNextImageSectionCharCode=function(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)};var pu={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},cu={};function hu(t,e,r,n,i,a){if(e.imageName){var o=n[e.imageName];return o?o.displaySize[0]*e.scale*Cs/a+i:0}var s=r[e.fontStack],u=s&&s[t];return u?u.metrics.advance*e.scale+i:0}function fu(t,e,r,n){var i=Math.pow(t-e,2);return n?t<e?i/2:2*i:i+Math.abs(r)*r}function yu(t,e,r){var n=0;return 10===t&&(n-=1e4),r&&(n+=150),40!==t&&65288!==t||(n+=50),41!==e&&65289!==e||(n+=50),n}function du(t,e,r,n,i,a){for(var o=null,s=fu(e,r,i,a),u=0,l=n;u<l.length;u+=1){var p=l[u],c=fu(e-p.x,r,i,a)+p.badness;c<=s&&(o=p,s=c);}return {index:t,x:e,priorBreak:o,badness:s}}function mu(t,e,r,n,i,a,o){if("point"!==a)return [];if(!t)return [];for(var s,u=[],l=function(t,e,r,n,i,a){for(var o=0,s=0;s<t.length();s++){var u=t.getSection(s);o+=hu(t.getCharCode(s),u,n,i,e,a);}return o/Math.max(1,Math.ceil(o/r))}(t,e,r,n,i,o),p=t.text.indexOf("​")>=0,c=0,h=0;h<t.length();h++){var f=t.getSection(h),y=t.getCharCode(h);if(pu[y]||(c+=hu(y,f,n,i,e,o)),h<t.length()-1){var d=!!(!((s=y)<11904)&&(Bn["Bopomofo Extended"](s)||Bn.Bopomofo(s)||Bn["CJK Compatibility Forms"](s)||Bn["CJK Compatibility Ideographs"](s)||Bn["CJK Compatibility"](s)||Bn["CJK Radicals Supplement"](s)||Bn["CJK Strokes"](s)||Bn["CJK Symbols and Punctuation"](s)||Bn["CJK Unified Ideographs Extension A"](s)||Bn["CJK Unified Ideographs"](s)||Bn["Enclosed CJK Letters and Months"](s)||Bn["Halfwidth and Fullwidth Forms"](s)||Bn.Hiragana(s)||Bn["Ideographic Description Characters"](s)||Bn["Kangxi Radicals"](s)||Bn["Katakana Phonetic Extensions"](s)||Bn.Katakana(s)||Bn["Vertical Forms"](s)||Bn["Yi Radicals"](s)||Bn["Yi Syllables"](s)));(cu[y]||d||f.imageName)&&u.push(du(h+1,c,l,u,yu(y,t.getCharCode(h+1),d&&p),!1));}}return function t(e){return e?t(e.priorBreak).concat(e.index):[]}(du(t.length(),c,l,u,0,!0))}function vu(t){var e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;}return {horizontalAlign:e,verticalAlign:r}}function gu(t,e,r,n,i){if(n||i)for(var a=t[r],o=a.metrics.advance*a.scale,s=(t[r].x+o)*n,u=e;u<=r;u++)t[u].x-=s,t[u].y+=i;}function xu(t,e,r,n,i,a){var o,s=t.image;if(s.content){var u=s.content,l=s.pixelRatio||1;o=[u[0]/l,u[1]/l,s.displaySize[0]-u[2]/l,s.displaySize[1]-u[3]/l];}var p,c,h,f,y=e.left*a,d=e.right*a;"width"===r||"both"===r?(f=i[0]+y-n[3],c=i[0]+d+n[1]):c=(f=i[0]+(y+d-s.displaySize[0])/2)+s.displaySize[0];var m=e.top*a,v=e.bottom*a;return "height"===r||"both"===r?(p=i[1]+m-n[0],h=i[1]+v+n[2]):h=(p=i[1]+(m+v-s.displaySize[1])/2)+s.displaySize[1],{image:s,top:p,right:c,bottom:h,left:f,collisionPadding:o}}cu[10]=!0,cu[32]=!0,cu[38]=!0,cu[40]=!0,cu[41]=!0,cu[43]=!0,cu[45]=!0,cu[47]=!0,cu[173]=!0,cu[183]=!0,cu[8203]=!0,cu[8208]=!0,cu[8211]=!0,cu[8231]=!0;var bu=function(t){function e(e,r,n,i){t.call(this,e,r),this.angle=n,void 0!==i&&(this.segment=i);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.x,this.y,this.angle,this.segment)},e}(i);An("Anchor",bu);var _u=128;function wu(t,e){var r=e.expression;if("constant"===r.kind)return {kind:"constant",layoutSize:r.evaluate(new Hn(t+1))};if("source"===r.kind)return {kind:"source"};for(var n=r.zoomStops,i=r.interpolationType,a=0;a<n.length&&n[a]<=t;)a++;for(var o=a=Math.max(0,a-1);o<n.length&&n[o]<t+1;)o++;o=Math.min(n.length-1,o);var s=n[a],u=n[o];return "composite"===r.kind?{kind:"composite",minZoom:s,maxZoom:u,interpolationType:i}:{kind:"camera",minZoom:s,maxZoom:u,minSize:r.evaluate(new Hn(s)),maxSize:r.evaluate(new Hn(u)),interpolationType:i}}function Au(t,e,r){var n=e.uSize,i=e.uSizeT,a=r.lowerSize,o=r.upperSize;return "source"===t.kind?a/_u:"composite"===t.kind?Ie(a/_u,o/_u,i):n}function Su(t,e){var r=0,n=0;if("constant"===t.kind)n=t.layoutSize;else if("source"!==t.kind){var i=t.interpolationType,a=t.minZoom,o=t.maxZoom,s=i?l(Ge.interpolationFactor(i,e,a,o),0,1):0;"camera"===t.kind?n=Ie(t.minSize,t.maxSize,s):r=s;}return {uSizeT:r,uSize:n}}var ku=Object.freeze({__proto__:null,getSizeData:wu,evaluateSizeForFeature:Au,evaluateSizeForZoom:Su,SIZE_PACK_FACTOR:_u});function Iu(t,e,r,n,i){if(void 0===e.segment)return !0;for(var a=e,o=e.segment+1,s=0;s>-r/2;){if(--o<0)return !1;s-=t[o].dist(a),a=t[o];}s+=t[o].dist(t[o+1]),o++;for(var u=[],l=0;s<r/2;){var p=t[o-1],c=t[o],h=t[o+1];if(!h)return !1;var f=p.angleTo(c)-c.angleTo(h);for(f=Math.abs((f+3*Math.PI)%(2*Math.PI)-Math.PI),u.push({distance:s,angleDelta:f}),l+=f;s-u[0].distance>n;)l-=u.shift().angleDelta;if(l>i)return !1;o++,s+=c.dist(h);}return !0}function zu(t){for(var e=0,r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1]);return e}function Cu(t,e,r){return t?.6*e*r:0}function Bu(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function Tu(t,e,r,n,i,a){for(var o=Cu(r,i,a),s=Bu(r,n)*a,u=0,l=zu(t)/2,p=0;p<t.length-1;p++){var c=t[p],h=t[p+1],f=c.dist(h);if(u+f>l){var y=(l-u)/f,d=Ie(c.x,h.x,y),m=Ie(c.y,h.y,y),v=new bu(d,m,h.angleTo(c),p);return v._round(),!o||Iu(t,v,s,o,e)?v:void 0}u+=f;}}function Pu(t,e,r,n,i,a,o,s,u){var l=Cu(n,a,o),p=Bu(n,i),c=p*o,h=0===t[0].x||t[0].x===u||0===t[0].y||t[0].y===u;return e-c<e/4&&(e=c+e/4),function t(e,r,n,i,a,o,s,u,l){var p=o/2;var c=zu(e);var h=0,f=r-n;var y=[];for(var d=0;d<e.length-1;d++){for(var m=e[d],v=e[d+1],g=m.dist(v),x=v.angleTo(m);f+n<h+g;){var b=((f+=n)-h)/g,_=Ie(m.x,v.x,b),w=Ie(m.y,v.y,b);if(_>=0&&_<l&&w>=0&&w<l&&f-p>=0&&f+p<=c){var A=new bu(_,w,x,d);A._round(),i&&!Iu(e,A,o,i,a)||y.push(A);}}h+=g;}u||y.length||s||(y=t(e,h/2,n,i,a,o,s,!0,l));return y}(t,h?e/2*s%e:(p/2+2*a)*o*s%e,e,l,r,c,h,!1,u)}var Eu=eu;function Mu(t,e,r,n){var a=[],o=t.image,s=o.pixelRatio,u=o.paddedRect.w-2*Eu,l=o.paddedRect.h-2*Eu,p=t.right-t.left,c=t.bottom-t.top,h=o.stretchX||[[0,u]],f=o.stretchY||[[0,l]],y=function(t,e){return t+e[1]-e[0]},d=h.reduce(y,0),m=f.reduce(y,0),v=u-d,g=l-m,x=0,b=d,_=0,w=m,A=0,S=v,k=0,I=g;if(o.content&&n){var z=o.content;x=Vu(h,0,z[0]),_=Vu(f,0,z[1]),b=Vu(h,z[0],z[2]),w=Vu(f,z[1],z[3]),A=z[0]-x,k=z[1]-_,S=z[2]-z[0]-b,I=z[3]-z[1]-w;}var C=function(n,a,u,l){var h=Lu(n.stretch-x,b,p,t.left),f=Ou(n.fixed-A,S,n.stretch,d),y=Lu(a.stretch-_,w,c,t.top),v=Ou(a.fixed-k,I,a.stretch,m),g=Lu(u.stretch-x,b,p,t.left),z=Ou(u.fixed-A,S,u.stretch,d),C=Lu(l.stretch-_,w,c,t.top),B=Ou(l.fixed-k,I,l.stretch,m),T=new i(h,y),P=new i(g,y),E=new i(g,C),M=new i(h,C),V=new i(f/s,v/s),F=new i(z/s,B/s),L=e*Math.PI/180;if(L){var O=Math.sin(L),D=Math.cos(L),R=[D,-O,O,D];T._matMult(R),P._matMult(R),M._matMult(R),E._matMult(R);}var U=n.stretch+n.fixed,j=u.stretch+u.fixed,q=a.stretch+a.fixed,N=l.stretch+l.fixed;return {tl:T,tr:P,bl:M,br:E,tex:{x:o.paddedRect.x+Eu+U,y:o.paddedRect.y+Eu+q,w:j-U,h:N-q},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:V,pixelOffsetBR:F,minFontScaleX:S/s/p,minFontScaleY:I/s/c,isSDF:r}};if(n&&(o.stretchX||o.stretchY))for(var B=Fu(h,v,d),T=Fu(f,g,m),P=0;P<B.length-1;P++)for(var E=B[P],M=B[P+1],V=0;V<T.length-1;V++){var F=T[V],L=T[V+1];a.push(C(E,F,M,L));}else a.push(C({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:u+1},{fixed:0,stretch:l+1}));return a}function Vu(t,e,r){for(var n=0,i=0,a=t;i<a.length;i+=1){var o=a[i];n+=Math.max(e,Math.min(r,o[1]))-Math.max(e,Math.min(r,o[0]));}return n}function Fu(t,e,r){for(var n=[{fixed:-Eu,stretch:0}],i=0,a=t;i<a.length;i+=1){var o=a[i],s=o[0],u=o[1],l=n[n.length-1];n.push({fixed:s-l.stretch,stretch:l.stretch}),n.push({fixed:s-l.stretch,stretch:l.stretch+(u-s)});}return n.push({fixed:e+Eu,stretch:r}),n}function Lu(t,e,r,n){return t/e*r+n}function Ou(t,e,r,n){return t-e*r/n}var Du=function(t,e,r,n,a,o,s,u,l,p,c,h){var f=s.top*u-l,y=s.bottom*u+l,d=s.left*u-l,m=s.right*u+l,v=s.collisionPadding;if(v&&(d-=v[0]*u,f-=v[1]*u,m+=v[2]*u,y+=v[3]*u),this.boxStartIndex=t.length,p){var g=y-f,x=m-d;g>0&&(g=Math.max(10*u,g),this._addLineCollisionCircles(t,e,r,r.segment,x,g,n,a,o,c));}else{if(h){var b=new i(d,f),_=new i(m,f),w=new i(d,y),A=new i(m,y),S=h*Math.PI/180;b._rotate(S),_._rotate(S),w._rotate(S),A._rotate(S),d=Math.min(b.x,_.x,w.x,A.x),m=Math.max(b.x,_.x,w.x,A.x),f=Math.min(b.y,_.y,w.y,A.y),y=Math.max(b.y,_.y,w.y,A.y);}t.emplaceBack(r.x,r.y,d,f,m,y,n,a,o,0,0);}this.boxEndIndex=t.length;};Du.prototype._addLineCollisionCircles=function(t,e,r,n,i,a,o,s,u,l){var p=a/2,c=Math.floor(i/p)||1,h=1+.4*Math.log(l)/Math.LN2,f=Math.floor(c*h/2),y=-a/2,d=r,m=n+1,v=y,g=-i/2,x=g-i/4;do{if(--m<0){if(v>g)return;m=0;break}v-=e[m].dist(d),d=e[m];}while(v>x);for(var b=e[m].dist(e[m+1]),_=-f;_<c+f;_++){var w=_*p,A=g+w;if(w<0&&(A+=w),w>i&&(A+=w-i),!(A<v)){for(;v+b<A;){if(v+=b,++m+1>=e.length)return;b=e[m].dist(e[m+1]);}var S=A-v,k=e[m],I=e[m+1].sub(k)._unit()._mult(S)._add(k)._round(),z=Math.abs(A-y)<p?0:.8*(A-y);t.emplaceBack(I.x,I.y,-a/2,-a/2,a/2,a/2,o,s,u,a/2,z);}}};var Ru=function(t,e){if(void 0===t&&(t=[]),void 0===e&&(e=Uu),this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(var r=(this.length>>1)-1;r>=0;r--)this._down(r);};function Uu(t,e){return t<e?-1:t>e?1:0}function ju(t,e,r){void 0===e&&(e=1),void 0===r&&(r=!1);for(var n=1/0,a=1/0,o=-1/0,s=-1/0,u=t[0],l=0;l<u.length;l++){var p=u[l];(!l||p.x<n)&&(n=p.x),(!l||p.y<a)&&(a=p.y),(!l||p.x>o)&&(o=p.x),(!l||p.y>s)&&(s=p.y);}var c=o-n,h=s-a,f=Math.min(c,h),y=f/2,d=new Ru([],qu);if(0===f)return new i(n,a);for(var m=n;m<o;m+=f)for(var v=a;v<s;v+=f)d.push(new Nu(m+y,v+y,y,t));for(var g=function(t){for(var e=0,r=0,n=0,i=t[0],a=0,o=i.length,s=o-1;a<o;s=a++){var u=i[a],l=i[s],p=u.x*l.y-l.x*u.y;r+=(u.x+l.x)*p,n+=(u.y+l.y)*p,e+=3*p;}return new Nu(r/e,n/e,0,t)}(t),x=d.length;d.length;){var b=d.pop();(b.d>g.d||!g.d)&&(g=b,r&&console.log("found best %d after %d probes",Math.round(1e4*b.d)/1e4,x)),b.max-g.d<=e||(y=b.h/2,d.push(new Nu(b.p.x-y,b.p.y-y,y,t)),d.push(new Nu(b.p.x+y,b.p.y-y,y,t)),d.push(new Nu(b.p.x-y,b.p.y+y,y,t)),d.push(new Nu(b.p.x+y,b.p.y+y,y,t)),x+=4);}return r&&(console.log("num probes: "+x),console.log("best distance: "+g.d)),g.p}function qu(t,e){return e.max-t.max}function Nu(t,e,r,n){this.p=new i(t,e),this.h=r,this.d=function(t,e){for(var r=!1,n=1/0,i=0;i<e.length;i++)for(var a=e[i],o=0,s=a.length,u=s-1;o<s;u=o++){var l=a[o],p=a[u];l.y>t.y!=p.y>t.y&&t.x<(p.x-l.x)*(t.y-l.y)/(p.y-l.y)+l.x&&(r=!r),n=Math.min(n,Ea(t,l,p));}return (r?1:-1)*Math.sqrt(n)}(this.p,n),this.max=this.d+this.h*Math.SQRT2;}Ru.prototype.push=function(t){this.data.push(t),this.length++,this._up(this.length-1);},Ru.prototype.pop=function(){if(0!==this.length){var t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}},Ru.prototype.peek=function(){return this.data[0]},Ru.prototype._up=function(t){for(var e=this.data,r=this.compare,n=e[t];t>0;){var i=t-1>>1,a=e[i];if(r(n,a)>=0)break;e[t]=a,t=i;}e[t]=n;},Ru.prototype._down=function(t){for(var e=this.data,r=this.compare,n=this.length>>1,i=e[t];t<n;){var a=1+(t<<1),o=e[a],s=a+1;if(s<this.length&&r(e[s],o)<0&&(a=s,o=e[s]),r(o,i)>=0)break;e[t]=o,t=a;}e[t]=i;};var Ku=e((function(t){t.exports=function(t,e){var r,n,i,a,o,s,u,l;for(r=3&t.length,n=t.length-r,i=e,o=3432918353,s=461845907,l=0;l<n;)u=255&t.charCodeAt(l)|(255&t.charCodeAt(++l))<<8|(255&t.charCodeAt(++l))<<16|(255&t.charCodeAt(++l))<<24,++l,i=27492+(65535&(a=5*(65535&(i=(i^=u=(65535&(u=(u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(a>>>16)&65535)<<16);switch(u=0,r){case 3:u^=(255&t.charCodeAt(l+2))<<16;case 2:u^=(255&t.charCodeAt(l+1))<<8;case 1:i^=u=(65535&(u=(u=(65535&(u^=255&t.charCodeAt(l)))*o+(((u>>>16)*o&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295;}return i^=t.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0};})),Xu=e((function(t){t.exports=function(t,e){for(var r,n=t.length,i=e^n,a=0;n>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))+((1540483477*(r>>>16)&65535)<<16),i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),n-=4,++a;switch(n){case 3:i^=(255&t.charCodeAt(a+2))<<16;case 2:i^=(255&t.charCodeAt(a+1))<<8;case 1:i=1540483477*(65535&(i^=255&t.charCodeAt(a)))+((1540483477*(i>>>16)&65535)<<16);}return i=1540483477*(65535&(i^=i>>>13))+((1540483477*(i>>>16)&65535)<<16),(i^=i>>>15)>>>0};})),Zu=Ku,Gu=Ku,Ju=Xu;Zu.murmur3=Gu,Zu.murmur2=Ju;var Hu=7,Yu=Number.POSITIVE_INFINITY;function $u(t,e){return e[1]!==Yu?function(t,e,r){var n=0,i=0;switch(e=Math.abs(e),r=Math.abs(r),t){case"top-right":case"top-left":case"top":i=r-Hu;break;case"bottom-right":case"bottom-left":case"bottom":i=-r+Hu;}switch(t){case"top-right":case"bottom-right":case"right":n=-e;break;case"top-left":case"bottom-left":case"left":n=e;}return [n,i]}(t,e[0],e[1]):function(t,e){var r=0,n=0;e<0&&(e=0);var i=e/Math.sqrt(2);switch(t){case"top-right":case"top-left":n=i-Hu;break;case"bottom-right":case"bottom-left":n=-i+Hu;break;case"bottom":n=-e+Hu;break;case"top":n=e-Hu;}switch(t){case"top-right":case"bottom-right":r=-i;break;case"top-left":case"bottom-left":r=i;break;case"left":r=e;break;case"right":r=-e;}return [r,n]}(t,e[0])}function Wu(t){switch(t){case"right":case"top-right":case"bottom-right":return "right";case"left":case"top-left":case"bottom-left":return "left"}return "center"}var Qu=255,tl=Qu*_u;function el(t,e,r,n,a,o,s,u,l,p,c,h,f,y){var d=function(t,e,r,n,a,o,s,u){for(var l=n.layout.get("text-rotate").evaluate(o,{})*Math.PI/180,p=[],c=0,h=e.positionedLines;c<h.length;c+=1)for(var f=h[c],y=0,d=f.positionedGlyphs;y<d.length;y+=1){var m=d[y];if(m.rect){var v=m.rect||{},g=Qs+1,x=!0,b=1,_=0,w=(a||u)&&m.vertical,A=m.metrics.advance*m.scale/2;if(u&&e.verticalizable){var S=(m.scale-1)*Cs,k=(Cs-m.metrics.width*m.scale)/2;_=f.lineOffset/2-(m.imageName?-k:S);}if(m.imageName){var I=s[m.imageName];x=I.sdf,b=I.pixelRatio,g=eu/b;}var z=a?[m.x+A,m.y]:[0,0],C=a?[0,0]:[m.x+A+r[0],m.y+r[1]-_],B=[0,0];w&&(B=C,C=[0,0]);var T=(m.metrics.left-g)*m.scale-A+C[0],P=(-m.metrics.top-g)*m.scale+C[1],E=T+v.w*m.scale/b,M=P+v.h*m.scale/b,V=new i(T,P),F=new i(E,P),L=new i(T,M),O=new i(E,M);if(w){var D=new i(-A,A-ou),R=-Math.PI/2,U=Cs/2-A,j=m.imageName?U:0,q=new i(5-ou-U,-j),N=new(Function.prototype.bind.apply(i,[null].concat(B)));V._rotateAround(R,D)._add(q)._add(N),F._rotateAround(R,D)._add(q)._add(N),L._rotateAround(R,D)._add(q)._add(N),O._rotateAround(R,D)._add(q)._add(N);}if(l){var K=Math.sin(l),X=Math.cos(l),Z=[X,-K,K,X];V._matMult(Z),F._matMult(Z),L._matMult(Z),O._matMult(Z);}var G=new i(0,0),J=new i(0,0);p.push({tl:V,tr:F,bl:L,br:O,tex:v,writingMode:e.writingMode,glyphOffset:z,sectionIndex:m.sectionIndex,isSDF:x,pixelOffsetTL:G,pixelOffsetBR:J,minFontScaleX:0,minFontScaleY:0});}}return p}(0,r,u,a,o,s,n,t.allowVerticalPlacement),m=t.textSizeData,v=null;"source"===m.kind?(v=[_u*a.layout.get("text-size").evaluate(s,{})])[0]>tl&&w(t.layerIds[0]+': Value for "text-size" is >= '+Qu+'. Reduce your "text-size".'):"composite"===m.kind&&((v=[_u*y.compositeTextSizes[0].evaluate(s,{}),_u*y.compositeTextSizes[1].evaluate(s,{})])[0]>tl||v[1]>tl)&&w(t.layerIds[0]+': Value for "text-size" is >= '+Qu+'. Reduce your "text-size".'),t.addSymbols(t.text,d,v,u,o,s,p,e,l.lineStartIndex,l.lineLength,f);for(var g=0,x=c;g<x.length;g+=1){h[x[g]]=t.text.placedSymbolArray.length-1;}return 4*d.length}function rl(t){for(var e in t)return t[e];return null}function nl(t,e,r,n){var i=t.compareText;if(e in i){for(var a=i[e],o=a.length-1;o>=0;o--)if(n.dist(a[o])<r)return !0}else i[e]=[];return i[e].push(n),!1}var il=ts.VectorTileFeature.types,al=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}];function ol(t,e,r,n,i,a,o,s,u,l,p,c,h){var f=s?Math.min(tl,Math.round(s[0])):0,y=s?Math.min(tl,Math.round(s[1])):0;t.emplaceBack(e,r,Math.round(32*n),Math.round(32*i),a,o,(f<<1)+(u?1:0),y,16*l,16*p,256*c,256*h);}function sl(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r);}function ul(t){for(var e=0,r=t.sections;e<r.length;e+=1){if(Ln(r[e].text))return !0}return !1}var ll=function(t){this.layoutVertexArray=new _i,this.indexArray=new Ei,this.programConfigurations=t,this.segments=new Yi,this.dynamicLayoutVertexArray=new wi,this.opacityVertexArray=new Ai,this.placedSymbolArray=new Ui;};ll.prototype.upload=function(t,e,r,n){r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,_s.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,ws.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,al,!0),this.opacityVertexBuffer.itemSize=1),(r||n)&&this.programConfigurations.upload(t);},ll.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy());},An("SymbolBuffers",ll);var pl=function(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new Yi,this.collisionVertexArray=new Ii;};pl.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,As.members,!0);},pl.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy());},An("CollisionBuffers",pl);var cl=function(t){this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.pixelRatio=t.pixelRatio,this.sourceLayerIndex=t.sourceLayerIndex,this.hasPattern=!1,this.hasPaintOverrides=!1,this.hasRTLText=!1;var e=this.layers[0]._unevaluatedLayout._values;this.textSizeData=wu(this.zoom,e["text-size"]),this.iconSizeData=wu(this.zoom,e["icon-size"]);var r=this.layers[0].layout,n=r.get("symbol-sort-key"),i=r.get("symbol-z-order");this.sortFeaturesByKey="viewport-y"!==i&&void 0!==n.constantOr(1);var a="viewport-y"===i||"auto"===i&&!this.sortFeaturesByKey;this.sortFeaturesByY=a&&(r.get("text-allow-overlap")||r.get("icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement")),"point"===r.get("symbol-placement")&&(this.writingModes=r.get("text-writing-mode").map((function(t){return au[t]}))),this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id})),this.sourceID=t.sourceID;};cl.prototype.createArrays=function(){var t=this.layers[0].layout;this.hasPaintOverrides=dl.hasPaintOverrides(t),this.text=new ll(new ma(_s.members,this.layers,this.zoom,(function(t){return /^text/.test(t)}))),this.icon=new ll(new ma(_s.members,this.layers,this.zoom,(function(t){return /^icon/.test(t)}))),this.textCollisionBox=new pl(ki,Ss.members,Mi),this.iconCollisionBox=new pl(ki,Ss.members,Mi),this.textCollisionCircle=new pl(ki,ks.members,Ei),this.iconCollisionCircle=new pl(ki,ks.members,Ei),this.glyphOffsetArray=new Ki,this.lineVertexArray=new Zi,this.symbolInstances=new qi;},cl.prototype.calculateGlyphDependencies=function(t,e,r,n,i){for(var a=0;a<t.length;a++)if(e[t.charCodeAt(a)]=!0,(r||n)&&i){var o=zs[t.charAt(a)];o&&(e[o.charCodeAt(0)]=!0);}},cl.prototype.populate=function(t,e){var r=this.layers[0],n=r.layout,i=n.get("text-font"),a=n.get("text-field"),o=n.get("icon-image"),s=("constant"!==a.value.kind||a.value.value instanceof re&&!a.value.value.isEmpty()||a.value.value.toString().length>0)&&("constant"!==i.value.kind||i.value.value.length>0),u=("constant"!==o.value.kind||!!o.value.value)&&Object.keys(o.parameters).length>0,l=n.get("symbol-sort-key");if(this.features=[],s||u){for(var p=e.iconDependencies,c=e.glyphDependencies,h=e.availableImages,f=new Hn(this.zoom),y=0,d=t;y<d.length;y+=1){var m=d[y],v=m.feature,g=m.index,x=m.sourceLayerIndex;if(r._featureFilter(f,v)){var b=void 0;if(s){var _=r.getValueAndResolveTokens("text-field",v,h),w=re.factory(_);ul(w)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===Zn()||this.hasRTLText&&Jn.isParsed())&&(b=Is(w,r,v));}var A=void 0;if(u){var S=r.getValueAndResolveTokens("icon-image",v,h);A=S instanceof ne?S:ne.fromString(S);}if(b||A){var k=this.sortFeaturesByKey?l.evaluate(v,{}):void 0,I={text:b,icon:A,index:g,sourceLayerIndex:x,geometry:wa(v),properties:v.properties,type:il[v.type],sortKey:k};if(void 0!==v.id&&(I.id=v.id),this.features.push(I),A&&(p[A.name]=!0),b){var z=i.evaluate(v,{}).join(","),C="map"===n.get("text-rotation-alignment")&&"point"!==n.get("symbol-placement");this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(au.vertical)>=0;for(var B=0,T=b.sections;B<T.length;B+=1){var P=T[B];if(P.image)p[P.image.name]=!0;else{var E=Tn(b.toString()),M=P.fontStack||z,V=c[M]=c[M]||{};this.calculateGlyphDependencies(P.text,V,C,this.allowVerticalPlacement,E);}}}}}}"line"===n.get("symbol-placement")&&(this.features=function(t){var e={},r={},n=[],i=0;function a(e){n.push(t[e]),i++;}function o(t,e,i){var a=r[t];return delete r[t],r[e]=a,n[a].geometry[0].pop(),n[a].geometry[0]=n[a].geometry[0].concat(i[0]),a}function s(t,r,i){var a=e[r];return delete e[r],e[t]=a,n[a].geometry[0].shift(),n[a].geometry[0]=i[0].concat(n[a].geometry[0]),a}function u(t,e,r){var n=r?e[0][e[0].length-1]:e[0][0];return t+":"+n.x+":"+n.y}for(var l=0;l<t.length;l++){var p=t[l],c=p.geometry,h=p.text?p.text.toString():null;if(h){var f=u(h,c),y=u(h,c,!0);if(f in r&&y in e&&r[f]!==e[y]){var d=s(f,y,c),m=o(f,y,n[d].geometry);delete e[f],delete r[y],r[u(h,n[m].geometry,!0)]=m,n[d].geometry=null;}else f in r?o(f,y,c):y in e?s(f,y,c):(a(l),e[f]=i-1,r[y]=i-1);}else a(l);}return n.filter((function(t){return t.geometry}))}(this.features)),this.sortFeaturesByKey&&this.features.sort((function(t,e){return t.sortKey-e.sortKey}));}},cl.prototype.update=function(t,e,r){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r));},cl.prototype.isEmpty=function(){return 0===this.symbolInstances.length&&!this.hasRTLText},cl.prototype.uploadPending=function(){return !this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload},cl.prototype.upload=function(t){this.uploaded||(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t),this.textCollisionCircle.upload(t),this.iconCollisionCircle.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0;},cl.prototype.destroy=function(){this.text.destroy(),this.icon.destroy(),this.textCollisionBox.destroy(),this.iconCollisionBox.destroy(),this.textCollisionCircle.destroy(),this.iconCollisionCircle.destroy();},cl.prototype.addToLineVertexArray=function(t,e){var r=this.lineVertexArray.length;if(void 0!==t.segment){for(var n=t.dist(e[t.segment+1]),i=t.dist(e[t.segment]),a={},o=t.segment+1;o<e.length;o++)a[o]={x:e[o].x,y:e[o].y,tileUnitDistanceFromAnchor:n},o<e.length-1&&(n+=e[o+1].dist(e[o]));for(var s=t.segment||0;s>=0;s--)a[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:i},s>0&&(i+=e[s-1].dist(e[s]));for(var u=0;u<e.length;u++){var l=a[u];this.lineVertexArray.emplaceBack(l.x,l.y,l.tileUnitDistanceFromAnchor);}}return {lineStartIndex:r,lineLength:this.lineVertexArray.length-r}},cl.prototype.addSymbols=function(t,e,r,n,i,a,o,s,u,l,p){var c=this,h=t.indexArray,f=t.layoutVertexArray,y=t.dynamicLayoutVertexArray,d=t.segments.prepareSegment(4*e.length,t.layoutVertexArray,t.indexArray,a.sortKey),m=this.glyphOffsetArray.length,v=d.vertexLength,g=this.allowVerticalPlacement&&o===au.vertical?Math.PI/2:0,x=function(t){var e=t.tl,n=t.tr,i=t.bl,a=t.br,o=t.tex,u=t.pixelOffsetTL,l=t.pixelOffsetBR,p=t.minFontScaleX,m=t.minFontScaleY,v=d.vertexLength,x=t.glyphOffset[1];ol(f,s.x,s.y,e.x,x+e.y,o.x,o.y,r,t.isSDF,u.x,u.y,p,m),ol(f,s.x,s.y,n.x,x+n.y,o.x+o.w,o.y,r,t.isSDF,l.x,u.y,p,m),ol(f,s.x,s.y,i.x,x+i.y,o.x,o.y+o.h,r,t.isSDF,u.x,l.y,p,m),ol(f,s.x,s.y,a.x,x+a.y,o.x+o.w,o.y+o.h,r,t.isSDF,l.x,l.y,p,m),sl(y,s,g),h.emplaceBack(v,v+1,v+2),h.emplaceBack(v+1,v+2,v+3),d.vertexLength+=4,d.primitiveLength+=2,c.glyphOffsetArray.emplaceBack(t.glyphOffset[0]);};if(a.text&&a.text.sections){var b=a.text.sections;if(this.hasPaintOverrides){for(var _,w=function(e,r){void 0===_||_===e&&!r||t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,a,a.index,{},b[_]),_=e;},A=0,S=e;A<S.length;A+=1){var k=S[A];w(k.sectionIndex,!1),x(k);}w(_,!0);}else{for(var I=0,z=e;I<z.length;I+=1){x(z[I]);}t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,a,a.index,{},b[0]);}}else{for(var C=0,B=e;C<B.length;C+=1){x(B[C]);}t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,a,a.index,{});}t.placedSymbolArray.emplaceBack(s.x,s.y,m,this.glyphOffsetArray.length-m,v,u,l,s.segment,r?r[0]:0,r?r[1]:0,n[0],n[1],o,0,!1,0,p);},cl.prototype._addCollisionDebugVertex=function(t,e,r,n,i,a){return e.emplaceBack(0,0),t.emplaceBack(r.x,r.y,n,i,Math.round(a.x),Math.round(a.y))},cl.prototype.addCollisionDebugVertices=function(t,e,r,n,a,o,s,u){var l=a.segments.prepareSegment(4,a.layoutVertexArray,a.indexArray),p=l.vertexLength,c=a.layoutVertexArray,h=a.collisionVertexArray,f=s.anchorX,y=s.anchorY;if(this._addCollisionDebugVertex(c,h,o,f,y,new i(t,e)),this._addCollisionDebugVertex(c,h,o,f,y,new i(r,e)),this._addCollisionDebugVertex(c,h,o,f,y,new i(r,n)),this._addCollisionDebugVertex(c,h,o,f,y,new i(t,n)),l.vertexLength+=4,u){var d=a.indexArray;d.emplaceBack(p,p+1,p+2),d.emplaceBack(p,p+2,p+3),l.primitiveLength+=2;}else{var m=a.indexArray;m.emplaceBack(p,p+1),m.emplaceBack(p+1,p+2),m.emplaceBack(p+2,p+3),m.emplaceBack(p+3,p),l.primitiveLength+=4;}},cl.prototype.addDebugCollisionBoxes=function(t,e,r,n){for(var i=t;i<e;i++){var a=this.collisionBoxArray.get(i),o=a.x1,s=a.y1,u=a.x2,l=a.y2,p=a.radius>0;this.addCollisionDebugVertices(o,s,u,l,p?n?this.textCollisionCircle:this.iconCollisionCircle:n?this.textCollisionBox:this.iconCollisionBox,a.anchorPoint,r,p);}},cl.prototype.generateCollisionDebugBuffers=function(){for(var t=0;t<this.symbolInstances.length;t++){var e=this.symbolInstances.get(t);this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e,!1),this.addDebugCollisionBoxes(e.verticalIconBoxStartIndex,e.verticalIconBoxEndIndex,e,!1);}},cl.prototype._deserializeCollisionBoxesForSymbol=function(t,e,r,n,i,a,o,s,u){for(var l={},p=e;p<r;p++){var c=t.get(p);if(0===c.radius){l.textBox={x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2,anchorPointX:c.anchorPointX,anchorPointY:c.anchorPointY},l.textFeatureIndex=c.featureIndex;break}l.textCircles||(l.textCircles=[],l.textFeatureIndex=c.featureIndex);l.textCircles.push(c.anchorPointX,c.anchorPointY,c.radius,c.signedDistanceFromAnchor,1);}for(var h=n;h<i;h++){var f=t.get(h);if(0===f.radius){l.verticalTextBox={x1:f.x1,y1:f.y1,x2:f.x2,y2:f.y2,anchorPointX:f.anchorPointX,anchorPointY:f.anchorPointY},l.verticalTextFeatureIndex=f.featureIndex;break}}for(var y=a;y<o;y++){var d=t.get(y);if(0===d.radius){l.iconBox={x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2,anchorPointX:d.anchorPointX,anchorPointY:d.anchorPointY},l.iconFeatureIndex=d.featureIndex;break}}for(var m=s;m<u;m++){var v=t.get(m);if(0===v.radius){l.verticalIconBox={x1:v.x1,y1:v.y1,x2:v.x2,y2:v.y2,anchorPointX:v.anchorPointX,anchorPointY:v.anchorPointY},l.verticalIconFeatureIndex=v.featureIndex;break}}return l},cl.prototype.deserializeCollisionBoxes=function(t){this.collisionArrays=[];for(var e=0;e<this.symbolInstances.length;e++){var r=this.symbolInstances.get(e);this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex,r.verticalIconBoxStartIndex,r.verticalIconBoxEndIndex));}},cl.prototype.hasTextData=function(){return this.text.segments.get().length>0},cl.prototype.hasIconData=function(){return this.icon.segments.get().length>0},cl.prototype.hasTextCollisionBoxData=function(){return this.textCollisionBox.segments.get().length>0},cl.prototype.hasIconCollisionBoxData=function(){return this.iconCollisionBox.segments.get().length>0},cl.prototype.hasTextCollisionCircleData=function(){return this.textCollisionCircle.segments.get().length>0},cl.prototype.hasIconCollisionCircleData=function(){return this.iconCollisionCircle.segments.get().length>0},cl.prototype.addIndicesForPlacedSymbol=function(t,e){for(var r=t.placedSymbolArray.get(e),n=r.vertexStartIndex+4*r.numGlyphs,i=r.vertexStartIndex;i<n;i+=4)t.indexArray.emplaceBack(i,i+1,i+2),t.indexArray.emplaceBack(i+1,i+2,i+3);},cl.prototype.getSortedSymbolIndexes=function(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes;for(var e=Math.sin(t),r=Math.cos(t),n=[],i=[],a=[],o=0;o<this.symbolInstances.length;++o){a.push(o);var s=this.symbolInstances.get(o);n.push(0|Math.round(e*s.anchorX+r*s.anchorY)),i.push(s.featureIndex);}return a.sort((function(t,e){return n[t]-n[e]||i[e]-i[t]})),a},cl.prototype.sortFeatures=function(t){var e=this;if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[];for(var r=0,n=this.symbolInstanceIndexes;r<n.length;r+=1){var i=n[r],a=this.symbolInstances.get(i);this.featureSortOrder.push(a.featureIndex),[a.rightJustifiedTextSymbolIndex,a.centerJustifiedTextSymbolIndex,a.leftJustifiedTextSymbolIndex].forEach((function(t,r,n){t>=0&&n.indexOf(t)===r&&e.addIndicesForPlacedSymbol(e.text,t);})),a.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.text,a.verticalPlacedTextSymbolIndex),a.placedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,a.placedIconSymbolIndex),a.verticalPlacedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,a.verticalPlacedIconSymbolIndex);}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray);}},An("SymbolBucket",cl,{omit:["layers","collisionBoxArray","features","compareText"]}),cl.MAX_GLYPHS=65535,cl.addDynamicAttributes=sl;var hl=new li({"symbol-placement":new ii(Tt.layout_symbol["symbol-placement"]),"symbol-spacing":new ii(Tt.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new ii(Tt.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new ai(Tt.layout_symbol["symbol-sort-key"]),"symbol-z-order":new ii(Tt.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new ii(Tt.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new ii(Tt.layout_symbol["icon-ignore-placement"]),"icon-optional":new ii(Tt.layout_symbol["icon-optional"]),"icon-rotation-alignment":new ii(Tt.layout_symbol["icon-rotation-alignment"]),"icon-size":new ai(Tt.layout_symbol["icon-size"]),"icon-text-fit":new ii(Tt.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new ii(Tt.layout_symbol["icon-text-fit-padding"]),"icon-image":new ai(Tt.layout_symbol["icon-image"]),"icon-rotate":new ai(Tt.layout_symbol["icon-rotate"]),"icon-padding":new ii(Tt.layout_symbol["icon-padding"]),"icon-keep-upright":new ii(Tt.layout_symbol["icon-keep-upright"]),"icon-offset":new ai(Tt.layout_symbol["icon-offset"]),"icon-anchor":new ai(Tt.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new ii(Tt.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new ii(Tt.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new ii(Tt.layout_symbol["text-rotation-alignment"]),"text-field":new ai(Tt.layout_symbol["text-field"]),"text-font":new ai(Tt.layout_symbol["text-font"]),"text-size":new ai(Tt.layout_symbol["text-size"]),"text-max-width":new ai(Tt.layout_symbol["text-max-width"]),"text-line-height":new ii(Tt.layout_symbol["text-line-height"]),"text-letter-spacing":new ai(Tt.layout_symbol["text-letter-spacing"]),"text-justify":new ai(Tt.layout_symbol["text-justify"]),"text-radial-offset":new ai(Tt.layout_symbol["text-radial-offset"]),"text-variable-anchor":new ii(Tt.layout_symbol["text-variable-anchor"]),"text-anchor":new ai(Tt.layout_symbol["text-anchor"]),"text-max-angle":new ii(Tt.layout_symbol["text-max-angle"]),"text-writing-mode":new ii(Tt.layout_symbol["text-writing-mode"]),"text-rotate":new ai(Tt.layout_symbol["text-rotate"]),"text-padding":new ii(Tt.layout_symbol["text-padding"]),"text-keep-upright":new ii(Tt.layout_symbol["text-keep-upright"]),"text-transform":new ai(Tt.layout_symbol["text-transform"]),"text-offset":new ai(Tt.layout_symbol["text-offset"]),"text-allow-overlap":new ii(Tt.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new ii(Tt.layout_symbol["text-ignore-placement"]),"text-optional":new ii(Tt.layout_symbol["text-optional"])}),fl={paint:new li({"icon-opacity":new ai(Tt.paint_symbol["icon-opacity"]),"icon-color":new ai(Tt.paint_symbol["icon-color"]),"icon-halo-color":new ai(Tt.paint_symbol["icon-halo-color"]),"icon-halo-width":new ai(Tt.paint_symbol["icon-halo-width"]),"icon-halo-blur":new ai(Tt.paint_symbol["icon-halo-blur"]),"icon-translate":new ii(Tt.paint_symbol["icon-translate"]),"icon-translate-anchor":new ii(Tt.paint_symbol["icon-translate-anchor"]),"text-opacity":new ai(Tt.paint_symbol["text-opacity"]),"text-color":new ai(Tt.paint_symbol["text-color"],{runtimeType:qt,getOverride:function(t){return t.textColor},hasOverride:function(t){return !!t.textColor}}),"text-halo-color":new ai(Tt.paint_symbol["text-halo-color"]),"text-halo-width":new ai(Tt.paint_symbol["text-halo-width"]),"text-halo-blur":new ai(Tt.paint_symbol["text-halo-blur"]),"text-translate":new ii(Tt.paint_symbol["text-translate"]),"text-translate-anchor":new ii(Tt.paint_symbol["text-translate-anchor"])}),layout:hl},yl=function(t){this.type=t.property.overrides?t.property.overrides.runtimeType:Dt,this.defaultValue=t;};yl.prototype.evaluate=function(t){if(t.formattedSection){var e=this.defaultValue.property.overrides;if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default},yl.prototype.eachChild=function(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression);},yl.prototype.possibleOutputs=function(){return [void 0]},yl.prototype.serialize=function(){return null},An("FormatSectionOverride",yl,{omit:["defaultValue"]});var dl=function(t){function e(e){t.call(this,e,fl);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e,r){if(t.prototype.recalculate.call(this,e,r),"auto"===this.layout.get("icon-rotation-alignment")&&("point"!==this.layout.get("symbol-placement")?this.layout._values["icon-rotation-alignment"]="map":this.layout._values["icon-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-rotation-alignment")&&("point"!==this.layout.get("symbol-placement")?this.layout._values["text-rotation-alignment"]="map":this.layout._values["text-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){var n=this.layout.get("text-writing-mode");if(n){for(var i=[],a=0,o=n;a<o.length;a+=1){var s=o[a];i.indexOf(s)<0&&i.push(s);}this.layout._values["text-writing-mode"]=i;}else this.layout._values["text-writing-mode"]=["horizontal"];}this._setPaintOverrides();},e.prototype.getValueAndResolveTokens=function(t,e,r){var n=this.layout.get(t).evaluate(e,{},r),i=this._unevaluatedLayout._values[t];return i.isDataDriven()||Pr(i.value)||!n?n:function(t,e){return e.replace(/{([^{}]+)}/g,(function(e,r){return r in t?String(t[r]):""}))}(e.properties,n)},e.prototype.createBucket=function(t){return new cl(t)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return !1},e.prototype._setPaintOverrides=function(){for(var t=0,r=fl.paint.overridableProperties;t<r.length;t+=1){var n=r[t];if(e.hasPaintOverride(this.layout,n)){var i=this.paint.get(n),a=new yl(i),o=new Tr(a,i.property.specification),s=null;s="constant"===i.value.kind||"source"===i.value.kind?new Mr("source",o):new Vr("composite",o,i.value.zoomStops,i.value._interpolationType),this.paint._values[n]=new ri(i.property,s,i.parameters);}}},e.prototype._handleOverridablePaintPropertyUpdate=function(t,r,n){return !(!this.layout||r.isDataDriven()||n.isDataDriven())&&e.hasPaintOverride(this.layout,t)},e.hasPaintOverride=function(t,e){var r=t.get("text-field"),n=fl.paint.properties[e],i=!1,a=function(t){for(var e=0,r=t;e<r.length;e+=1){var a=r[e];if(n.overrides&&n.overrides.hasOverride(a))return void(i=!0)}};if("constant"===r.value.kind&&r.value.value instanceof re)a(r.value.value.sections);else if("source"===r.value.kind){var o=function(t){if(!i)if(t instanceof se&&ae(t.value)===Zt){var e=t.value;a(e.sections);}else t instanceof ce?a(t.sections):t.eachChild(o);},s=r.value;s._styleExpression&&o(s._styleExpression.expression);}return i},e.hasPaintOverrides=function(t){for(var r=0,n=fl.paint.overridableProperties;r<n.length;r+=1){var i=n[r];if(e.hasPaintOverride(t,i))return !0}return !1},e}(pi),ml={paint:new li({"background-color":new ii(Tt.paint_background["background-color"]),"background-pattern":new si(Tt.paint_background["background-pattern"]),"background-opacity":new ii(Tt.paint_background["background-opacity"])})},vl=function(t){function e(e){t.call(this,e,ml);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(pi),gl={paint:new li({"raster-opacity":new ii(Tt.paint_raster["raster-opacity"]),"raster-hue-rotate":new ii(Tt.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new ii(Tt.paint_raster["raster-brightness-min"]),"raster-brightness-max":new ii(Tt.paint_raster["raster-brightness-max"]),"raster-saturation":new ii(Tt.paint_raster["raster-saturation"]),"raster-contrast":new ii(Tt.paint_raster["raster-contrast"]),"raster-resampling":new ii(Tt.paint_raster["raster-resampling"]),"raster-fade-duration":new ii(Tt.paint_raster["raster-fade-duration"])})},xl=function(t){function e(e){t.call(this,e,gl);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(pi);var bl=function(t){function e(e){t.call(this,e,{}),this.implementation=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.is3D=function(){return "3d"===this.implementation.renderingMode},e.prototype.hasOffscreenPass=function(){return void 0!==this.implementation.prerender},e.prototype.recalculate=function(){},e.prototype.updateTransitions=function(){},e.prototype.hasTransition=function(){},e.prototype.serialize=function(){},e.prototype.onAdd=function(t){this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl);},e.prototype.onRemove=function(t){this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl);},e}(pi),_l={circle:Xa,heatmap:eo,hillshade:no,fill:Ko,"fill-extrusion":us,line:xs,symbol:dl,background:vl,raster:xl};var wl=self.HTMLImageElement,Al=self.HTMLCanvasElement,Sl=self.HTMLVideoElement,kl=self.ImageData,Il=function(t,e,r,n){this.context=t,this.format=r,this.texture=t.gl.createTexture(),this.update(e,n);};Il.prototype.update=function(t,e,r){var n=t.width,i=t.height,a=!(this.size&&this.size[0]===n&&this.size[1]===i||r),o=this.context,s=o.gl;if(this.useMipmap=Boolean(e&&e.useMipmap),s.bindTexture(s.TEXTURE_2D,this.texture),o.pixelStoreUnpackFlipY.set(!1),o.pixelStoreUnpack.set(1),o.pixelStoreUnpackPremultiplyAlpha.set(this.format===s.RGBA&&(!e||!1!==e.premultiply)),a)this.size=[n,i],t instanceof wl||t instanceof Al||t instanceof Sl||t instanceof kl?s.texImage2D(s.TEXTURE_2D,0,this.format,this.format,s.UNSIGNED_BYTE,t):s.texImage2D(s.TEXTURE_2D,0,this.format,n,i,0,this.format,s.UNSIGNED_BYTE,t.data);else{var u=r||{x:0,y:0},l=u.x,p=u.y;t instanceof wl||t instanceof Al||t instanceof Sl||t instanceof kl?s.texSubImage2D(s.TEXTURE_2D,0,l,p,s.RGBA,s.UNSIGNED_BYTE,t):s.texSubImage2D(s.TEXTURE_2D,0,l,p,n,i,s.RGBA,s.UNSIGNED_BYTE,t.data);}this.useMipmap&&this.isSizePowerOfTwo()&&s.generateMipmap(s.TEXTURE_2D);},Il.prototype.bind=function(t,e,r){var n=this.context.gl;n.bindTexture(n.TEXTURE_2D,this.texture),r!==n.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(r=n.LINEAR),t!==this.filter&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,r||t),this.filter=t),e!==this.wrap&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,e),this.wrap=e);},Il.prototype.isSizePowerOfTwo=function(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0},Il.prototype.destroy=function(){this.context.gl.deleteTexture(this.texture),this.texture=null;};var zl=function(t){var e=this;this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=function(){e._triggered=!1,e._callback();});};zl.prototype.trigger=function(){var t=this;this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((function(){t._triggered=!1,t._callback();}),0));},zl.prototype.remove=function(){delete this._channel,this._callback=function(){};};var Cl=function(t,e,r){this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},m(["receive","process"],this),this.invoker=new zl(this.process),this.target.addEventListener("message",this.receive,!1),this.globalScope=k()?t:self;};function Bl(t,e,r){var n=2*Math.PI*6378137/256/Math.pow(2,r);return [t*n-2*Math.PI*6378137/2,e*n-2*Math.PI*6378137/2]}Cl.prototype.send=function(t,e,r,n,i){var a=this;void 0===i&&(i=!1);var o=Math.round(1e18*Math.random()).toString(36).substring(0,10);r&&(this.callbacks[o]=r);var s=C(this.globalScope)?void 0:[];return this.target.postMessage({id:o,type:t,hasCallback:!!r,targetMapId:n,mustQueue:i,sourceMapId:this.mapId,data:In(e,s)},s),{cancel:function(){r&&delete a.callbacks[o],a.target.postMessage({id:o,type:"<cancel>",targetMapId:n,sourceMapId:a.mapId});}}},Cl.prototype.receive=function(t){var e=t.data,r=e.id;if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[r];var n=this.cancelCallbacks[r];delete this.cancelCallbacks[r],n&&n();}else k()||e.mustQueue?(this.tasks[r]=e,this.taskQueue.push(r),this.invoker.trigger()):this.processTask(r,e);},Cl.prototype.process=function(){if(this.taskQueue.length){var t=this.taskQueue.shift(),e=this.tasks[t];delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),e&&this.processTask(t,e);}},Cl.prototype.processTask=function(t,e){var r=this;if("<response>"===e.type){var n=this.callbacks[t];delete this.callbacks[t],n&&(e.error?n(zn(e.error)):n(null,zn(e.data)));}else{var i=!1,a=C(this.globalScope)?void 0:[],o=e.hasCallback?function(e,n){i=!0,delete r.cancelCallbacks[t],r.target.postMessage({id:t,type:"<response>",sourceMapId:r.mapId,error:e?In(e):null,data:In(n,a)},a);}:function(t){i=!0;},s=null,u=zn(e.data);if(this.parent[e.type])s=this.parent[e.type](e.sourceMapId,u,o);else if(this.parent.getWorkerSource){var l=e.type.split(".");s=this.parent.getWorkerSource(e.sourceMapId,l[0],u.source)[l[1]](u,o);}else o(new Error("Could not find function "+e.type));!i&&s&&s.cancel&&(this.cancelCallbacks[t]=s.cancel);}},Cl.prototype.remove=function(){this.invoker.remove(),this.target.removeEventListener("message",this.receive,!1);};var Tl=function(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]));};Tl.prototype.setNorthEast=function(t){return this._ne=t instanceof Pl?new Pl(t.lng,t.lat):Pl.convert(t),this},Tl.prototype.setSouthWest=function(t){return this._sw=t instanceof Pl?new Pl(t.lng,t.lat):Pl.convert(t),this},Tl.prototype.extend=function(t){var e,r,n=this._sw,i=this._ne;if(t instanceof Pl)e=t,r=t;else{if(!(t instanceof Tl))return Array.isArray(t)?t.every(Array.isArray)?this.extend(Tl.convert(t)):this.extend(Pl.convert(t)):this;if(e=t._sw,r=t._ne,!e||!r)return this}return n||i?(n.lng=Math.min(e.lng,n.lng),n.lat=Math.min(e.lat,n.lat),i.lng=Math.max(r.lng,i.lng),i.lat=Math.max(r.lat,i.lat)):(this._sw=new Pl(e.lng,e.lat),this._ne=new Pl(r.lng,r.lat)),this},Tl.prototype.getCenter=function(){return new Pl((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},Tl.prototype.getSouthWest=function(){return this._sw},Tl.prototype.getNorthEast=function(){return this._ne},Tl.prototype.getNorthWest=function(){return new Pl(this.getWest(),this.getNorth())},Tl.prototype.getSouthEast=function(){return new Pl(this.getEast(),this.getSouth())},Tl.prototype.getWest=function(){return this._sw.lng},Tl.prototype.getSouth=function(){return this._sw.lat},Tl.prototype.getEast=function(){return this._ne.lng},Tl.prototype.getNorth=function(){return this._ne.lat},Tl.prototype.toArray=function(){return [this._sw.toArray(),this._ne.toArray()]},Tl.prototype.toString=function(){return "LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},Tl.prototype.isEmpty=function(){return !(this._sw&&this._ne)},Tl.prototype.contains=function(t){var e=Pl.convert(t),r=e.lng,n=e.lat,i=this._sw.lat<=n&&n<=this._ne.lat,a=this._sw.lng<=r&&r<=this._ne.lng;return this._sw.lng>this._ne.lng&&(a=this._sw.lng>=r&&r>=this._ne.lng),i&&a},Tl.convert=function(t){return !t||t instanceof Tl?t:new Tl(t)};var Pl=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid LngLat object: ("+t+", "+e+")");if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")};Pl.prototype.wrap=function(){return new Pl(p(this.lng,-180,180),this.lat)},Pl.prototype.toArray=function(){return [this.lng,this.lat]},Pl.prototype.toString=function(){return "LngLat("+this.lng+", "+this.lat+")"},Pl.prototype.toBounds=function(t){void 0===t&&(t=0);var e=360*t/40075017,r=e/Math.cos(Math.PI/180*this.lat);return new Tl(new Pl(this.lng-r,this.lat-e),new Pl(this.lng+r,this.lat+e))},Pl.convert=function(t){if(t instanceof Pl)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new Pl(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new Pl(Number("lng"in t?t.lng:t.lon),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")};var El=2*Math.PI*6378137;function Ml(t){return El*Math.cos(t*Math.PI/180)}function Vl(t){return (180+t)/360}function Fl(t){return (180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function Ll(t,e){return t/Ml(e)}function Ol(t){var e=180-360*t;return 360/Math.PI*Math.atan(Math.exp(e*Math.PI/180))-90}var Dl=function(t,e,r){void 0===r&&(r=0),this.x=+t,this.y=+e,this.z=+r;};Dl.fromLngLat=function(t,e){void 0===e&&(e=0);var r=Pl.convert(t);return new Dl(Vl(r.lng),Fl(r.lat),Ll(e,r.lat))},Dl.prototype.toLngLat=function(){return new Pl(360*this.x-180,Ol(this.y))},Dl.prototype.toAltitude=function(){return t=this.z,e=this.y,t*Ml(Ol(e));var t,e;},Dl.prototype.meterInMercatorCoordinateUnits=function(){return 1/El*(t=Ol(this.y),1/Math.cos(t*Math.PI/180));var t;};var Rl=function(t,e,r){this.z=t,this.x=e,this.y=r,this.key=ql(0,t,e,r);};Rl.prototype.equals=function(t){return this.z===t.z&&this.x===t.x&&this.y===t.y},Rl.prototype.url=function(t,e){var r,n,i,a,o,s=(r=this.x,n=this.y,i=this.z,a=Bl(256*r,256*(n=Math.pow(2,i)-n-1),i),o=Bl(256*(r+1),256*(n+1),i),a[0]+","+a[1]+","+o[0]+","+o[1]),u=function(t,e,r){for(var n,i="",a=t;a>0;a--)i+=(e&(n=1<<a-1)?1:0)+(r&n?2:0);return i}(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",String(this.z)).replace("{x}",String(this.x)).replace("{y}",String("tms"===e?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",u).replace("{bbox-epsg-3857}",s)},Rl.prototype.getTilePoint=function(t){var e=Math.pow(2,this.z);return new i((t.x*e-this.x)*xa,(t.y*e-this.y)*xa)},Rl.prototype.toString=function(){return this.z+"/"+this.x+"/"+this.y};var Ul=function(t,e){this.wrap=t,this.canonical=e,this.key=ql(t,e.z,e.x,e.y);},jl=function(t,e,r,n,i){this.overscaledZ=t,this.wrap=e,this.canonical=new Rl(r,+n,+i),this.key=ql(e,t,n,i);};function ql(t,e,r,n){(t*=2)<0&&(t=-1*t-1);var i=1<<e;return 32*(i*i*t+i*n+r)+e}jl.prototype.equals=function(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)},jl.prototype.scaledTo=function(t){var e=this.canonical.z-t;return t>this.canonical.z?new jl(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new jl(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)},jl.prototype.isChildOf=function(t){if(t.wrap!==this.wrap)return !1;var e=this.canonical.z-t.canonical.z;return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e},jl.prototype.children=function(t){if(this.overscaledZ>=t)return [new jl(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];var e=this.canonical.z+1,r=2*this.canonical.x,n=2*this.canonical.y;return [new jl(e,this.wrap,e,r,n),new jl(e,this.wrap,e,r+1,n),new jl(e,this.wrap,e,r,n+1),new jl(e,this.wrap,e,r+1,n+1)]},jl.prototype.isLessThan=function(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))},jl.prototype.wrapped=function(){return new jl(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)},jl.prototype.unwrapTo=function(t){return new jl(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)},jl.prototype.overscaleFactor=function(){return Math.pow(2,this.overscaledZ-this.canonical.z)},jl.prototype.toUnwrapped=function(){return new Ul(this.wrap,this.canonical)},jl.prototype.toString=function(){return this.overscaledZ+"/"+this.canonical.x+"/"+this.canonical.y},jl.prototype.getTilePoint=function(t){return this.canonical.getTilePoint(new Dl(t.x-this.wrap,t.y))},An("CanonicalTileID",Rl),An("OverscaledTileID",jl,{omit:["posMatrix"]});var Nl=function(t,e,r){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square");if(r&&"mapbox"!==r&&"terrarium"!==r)return w('"'+r+'" is not a valid encoding type. Valid types include "mapbox" and "terrarium".');this.stride=e.height;var n=this.dim=e.height-2;this.data=new Uint32Array(e.data.buffer),this.encoding=r||"mapbox";for(var i=0;i<n;i++)this.data[this._idx(-1,i)]=this.data[this._idx(0,i)],this.data[this._idx(n,i)]=this.data[this._idx(n-1,i)],this.data[this._idx(i,-1)]=this.data[this._idx(i,0)],this.data[this._idx(i,n)]=this.data[this._idx(i,n-1)];this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(n,-1)]=this.data[this._idx(n-1,0)],this.data[this._idx(-1,n)]=this.data[this._idx(0,n-1)],this.data[this._idx(n,n)]=this.data[this._idx(n-1,n-1)];};Nl.prototype.get=function(t,e){var r=new Uint8Array(this.data.buffer),n=4*this._idx(t,e);return ("terrarium"===this.encoding?this._unpackTerrarium:this._unpackMapbox)(r[n],r[n+1],r[n+2])},Nl.prototype.getUnpackVector=function(){return "terrarium"===this.encoding?[256,1,1/256,32768]:[6553.6,25.6,.1,1e4]},Nl.prototype._idx=function(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data");return (e+1)*this.stride+(t+1)},Nl.prototype._unpackMapbox=function(t,e,r){return (256*t*256+256*e+r)/10-1e4},Nl.prototype._unpackTerrarium=function(t,e,r){return 256*t+e+r/256-32768},Nl.prototype.getPixels=function(){return new Wa({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))},Nl.prototype.backfillBorder=function(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch");var n=e*this.dim,i=e*this.dim+this.dim,a=r*this.dim,o=r*this.dim+this.dim;switch(e){case-1:n=i-1;break;case 1:i=n+1;}switch(r){case-1:a=o-1;break;case 1:o=a+1;}for(var s=-e*this.dim,u=-r*this.dim,l=a;l<o;l++)for(var p=n;p<i;p++)this.data[this._idx(p,l)]=t.data[this._idx(p+s,l+u)];},An("DEMData",Nl);var Kl=yi([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]);var Xl=function(t){this._stringToNumber={},this._numberToString=[];for(var e=0;e<t.length;e++){var r=t[e];this._stringToNumber[r]=e,this._numberToString[e]=r;}};Xl.prototype.encode=function(t){return this._stringToNumber[t]},Xl.prototype.decode=function(t){return this._numberToString[t]};var Zl=function(t,e,r,n){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=n,this.properties=t.properties,null!=t.id&&(this.id=t.id);},Gl={geometry:{configurable:!0}};Gl.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},Gl.geometry.set=function(t){this._geometry=t;},Zl.prototype.toJSON=function(){var t={geometry:this.geometry};for(var e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e]);return t},Object.defineProperties(Zl.prototype,Gl);var Jl=function(){this.state={},this.stateChanges={},this.deletedStates={};};Jl.prototype.updateState=function(t,e,r){var n=String(e);if(this.stateChanges[t]=this.stateChanges[t]||{},this.stateChanges[t][n]=this.stateChanges[t][n]||{},c(this.stateChanges[t][n],r),null===this.deletedStates[t])for(var i in this.deletedStates[t]={},this.state[t])i!==n&&(this.deletedStates[t][i]=null);else if(this.deletedStates[t]&&null===this.deletedStates[t][n])for(var a in this.deletedStates[t][n]={},this.state[t][n])r[a]||(this.deletedStates[t][n][a]=null);else for(var o in r){this.deletedStates[t]&&this.deletedStates[t][n]&&null===this.deletedStates[t][n][o]&&delete this.deletedStates[t][n][o];}},Jl.prototype.removeFeatureState=function(t,e,r){if(!(null===this.deletedStates[t])){var n=String(e);if(this.deletedStates[t]=this.deletedStates[t]||{},r&&void 0!==e&&e>=0)null!==this.deletedStates[t][n]&&(this.deletedStates[t][n]=this.deletedStates[t][n]||{},this.deletedStates[t][n][r]=null);else if(void 0!==e&&e>=0){if(this.stateChanges[t]&&this.stateChanges[t][n])for(r in this.deletedStates[t][n]={},this.stateChanges[t][n])this.deletedStates[t][n][r]=null;else this.deletedStates[t][n]=null;}else this.deletedStates[t]=null;}},Jl.prototype.getState=function(t,e){var r=String(e),n=this.state[t]||{},i=this.stateChanges[t]||{},a=c({},n[r],i[r]);if(null===this.deletedStates[t])return {};if(this.deletedStates[t]){var o=this.deletedStates[t][e];if(null===o)return {};for(var s in o)delete a[s];}return a},Jl.prototype.initializeTileState=function(t,e){t.setFeatureState(this.state,e);},Jl.prototype.coalesceChanges=function(t,e){var r={};for(var n in this.stateChanges){this.state[n]=this.state[n]||{};var i={};for(var a in this.stateChanges[n])this.state[n][a]||(this.state[n][a]={}),c(this.state[n][a],this.stateChanges[n][a]),i[a]=this.state[n][a];r[n]=i;}for(var o in this.deletedStates){this.state[o]=this.state[o]||{};var s={};if(null===this.deletedStates[o])for(var u in this.state[o])s[u]={},this.state[o][u]={};else for(var l in this.deletedStates[o]){if(null===this.deletedStates[o][l])this.state[o][l]={};else for(var p=0,h=Object.keys(this.deletedStates[o][l]);p<h.length;p+=1){var f=h[p];delete this.state[o][l][f];}s[l]=this.state[o][l];}r[o]=r[o]||{},c(r[o],s);}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(var y in t){t[y].setFeatureState(r,e);}};var Hl=function(t,e,r){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=e||new gn(xa,16,0),this.grid3D=new gn(xa,16,0),this.featureIndexArray=r||new Ji;};function Yl(t){for(var e=1/0,r=1/0,n=-1/0,i=-1/0,a=0,o=t;a<o.length;a+=1){var s=o[a];e=Math.min(e,s.x),r=Math.min(r,s.y),n=Math.max(n,s.x),i=Math.max(i,s.y);}return {minX:e,minY:r,maxX:n,maxY:i}}function $l(t,e){return e-t}Hl.prototype.insert=function(t,e,r,n,i,a){var o=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(r,n,i);for(var s=a?this.grid3D:this.grid,u=0;u<e.length;u++){for(var l=e[u],p=[1/0,1/0,-1/0,-1/0],c=0;c<l.length;c++){var h=l[c];p[0]=Math.min(p[0],h.x),p[1]=Math.min(p[1],h.y),p[2]=Math.max(p[2],h.x),p[3]=Math.max(p[3],h.y);}p[0]<xa&&p[1]<xa&&p[2]>=0&&p[3]>=0&&s.insert(o,p[0],p[1],p[2],p[3]);}},Hl.prototype.loadVTLayers=function(){return this.vtLayers||(this.vtLayers=new ts.VectorTile(new Ps(this.rawTileData)).layers,this.sourceLayerCoder=new Xl(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers},Hl.prototype.query=function(t,e,r){var n=this;this.loadVTLayers();for(var a=t.params||{},o=xa/t.tileSize/t.scale,s=Xr(a.filter),u=t.queryGeometry,l=t.queryPadding*o,p=Yl(u),c=this.grid.query(p.minX-l,p.minY-l,p.maxX+l,p.maxY+l),h=Yl(t.cameraQueryGeometry),f=this.grid3D.query(h.minX-l,h.minY-l,h.maxX+l,h.maxY+l,(function(e,r,n,a){return function(t,e,r,n,a){for(var o=0,s=t;o<s.length;o+=1){var u=s[o];if(e<=u.x&&r<=u.y&&n>=u.x&&a>=u.y)return !0}var l=[new i(e,r),new i(e,a),new i(n,a),new i(n,r)];if(t.length>2)for(var p=0,c=l;p<c.length;p+=1){if(Va(t,c[p]))return !0}for(var h=0;h<t.length-1;h++){if(Fa(t[h],t[h+1],l))return !0}return !1}(t.cameraQueryGeometry,e-l,r-l,n+l,a+l)})),y=0,d=f;y<d.length;y+=1){var m=d[y];c.push(m);}c.sort($l);for(var v,g={},x=function(i){var l=c[i];if(l!==v){v=l;var p=n.featureIndexArray.get(l),h=null;n.loadMatchingFeature(g,p.bucketIndex,p.sourceLayerIndex,p.featureIndex,s,a.layers,e,(function(e,i){h||(h=wa(e));var a={};return e.id&&(a=r.getState(i.sourceLayer||"_geojsonTileLayer",e.id)),i.queryIntersectsFeature(u,e,a,h,n.z,t.transform,o,t.pixelPosMatrix)}));}},b=0;b<c.length;b++)x(b);return g},Hl.prototype.loadMatchingFeature=function(t,e,r,n,i,a,o,s){var u=this.bucketLayerIDs[e];if(!a||function(t,e){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return !0;return !1}(a,u)){var l=this.sourceLayerCoder.decode(r),p=this.vtLayers[l].feature(n);if(i(new Hn(this.tileID.overscaledZ),p))for(var c=0;c<u.length;c++){var h=u[c];if(!(a&&a.indexOf(h)<0)){var f=o[h];if(f){var y=!s||s(p,f);if(y){var d=new Zl(p,this.z,this.x,this.y);d.layer=f.serialize();var m=t[h];void 0===m&&(m=t[h]=[]),m.push({featureIndex:n,feature:d,intersectionZ:y});}}}}}},Hl.prototype.lookupSymbolFeatures=function(t,e,r,n,i,a){var o={};this.loadVTLayers();for(var s=Xr(n),u=0,l=t;u<l.length;u+=1){var p=l[u];this.loadMatchingFeature(o,e,r,p,s,i,a);}return o},Hl.prototype.hasLayer=function(t){for(var e=0,r=this.bucketLayerIDs;e<r.length;e+=1)for(var n=0,i=r[e];n<i.length;n+=1){if(t===i[n])return !0}return !1},An("FeatureIndex",Hl,{omit:["rawTileData","sourceLayerCoder"]});var Wl=function(t,e){this.tileID=t,this.uid=f(),this.uses=0,this.tileSize=e,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.expiredRequestCount=0,this.state="loading";};Wl.prototype.registerFadeDuration=function(t){var e=t+this.timeAdded;e<O.now()||this.fadeEndTime&&e<this.fadeEndTime||(this.fadeEndTime=e);},Wl.prototype.wasRequested=function(){return "errored"===this.state||"loaded"===this.state||"reloading"===this.state},Wl.prototype.loadVectorData=function(t,e,r){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",t){for(var n in t.featureIndex&&(this.latestFeatureIndex=t.featureIndex,t.rawTileData?(this.latestRawTileData=t.rawTileData,this.latestFeatureIndex.rawTileData=t.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=t.collisionBoxArray,this.buckets=function(t,e){var r={};if(!e)return r;for(var n=function(){var t=a[i],n=t.layerIds.map((function(t){return e.getLayer(t)})).filter(Boolean);if(0!==n.length){t.layers=n,t.stateDependentLayerIds&&(t.stateDependentLayers=t.stateDependentLayerIds.map((function(t){return n.filter((function(e){return e.id===t}))[0]})));for(var o=0,s=n;o<s.length;o+=1){var u=s[o];r[u.id]=t;}}},i=0,a=t;i<a.length;i+=1)n();return r}(t.buckets,e.style),this.hasSymbolBuckets=!1,this.buckets){var i=this.buckets[n];if(i instanceof cl){if(this.hasSymbolBuckets=!0,!r)break;i.justReloaded=!0;}}if(this.hasRTLText=!1,this.hasSymbolBuckets)for(var a in this.buckets){var o=this.buckets[a];if(o instanceof cl&&o.hasRTLText){this.hasRTLText=!0,Jn.isLoading()||Jn.isLoaded()||"deferred"!==Zn()||Gn();break}}for(var s in this.queryPadding=0,this.buckets){var u=this.buckets[s];this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(s).queryRadius(u));}t.imageAtlas&&(this.imageAtlas=t.imageAtlas),t.glyphAtlasImage&&(this.glyphAtlasImage=t.glyphAtlasImage);}else this.collisionBoxArray=new Di;},Wl.prototype.unloadVectorData=function(){for(var t in this.buckets)this.buckets[t].destroy();this.buckets={},this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.imageAtlas&&(this.imageAtlas=null),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded";},Wl.prototype.getBucket=function(t){return this.buckets[t.id]},Wl.prototype.upload=function(t){for(var e in this.buckets){var r=this.buckets[e];r.uploadPending()&&r.upload(t);}var n=t.gl;this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new Il(t,this.imageAtlas.image,n.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new Il(t,this.glyphAtlasImage,n.ALPHA),this.glyphAtlasImage=null);},Wl.prototype.prepare=function(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture);},Wl.prototype.queryRenderedFeatures=function(t,e,r,n,i,a,o,s,u){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:r,cameraQueryGeometry:n,scale:i,tileSize:this.tileSize,pixelPosMatrix:u,transform:o,params:a,queryPadding:this.queryPadding*s},t,e):{}},Wl.prototype.querySourceFeatures=function(t,e){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData){var r=this.latestFeatureIndex.loadVTLayers(),n=e?e.sourceLayer:"",i=r._geojsonTileLayer||r[n];if(i)for(var a=Xr(e&&e.filter),o=this.tileID.canonical,s=o.z,u=o.x,l=o.y,p={z:s,x:u,y:l},c=0;c<i.length;c++){var h=i.feature(c);if(a(new Hn(this.tileID.overscaledZ),h)){var f=new Zl(h,s,u,l);f.tile=p,t.push(f);}}}},Wl.prototype.clearMask=function(){this.segments&&(this.segments.destroy(),delete this.segments),this.maskedBoundsBuffer&&(this.maskedBoundsBuffer.destroy(),delete this.maskedBoundsBuffer),this.maskedIndexBuffer&&(this.maskedIndexBuffer.destroy(),delete this.maskedIndexBuffer),delete this.mask;},Wl.prototype.setMask=function(t,e){if(!o(this.mask,t)&&(this.clearMask(),this.mask=t,!o(t,{0:!0}))){var r=new vi,n=new Ei;this.segments=new Yi,this.segments.prepareSegment(0,r,n);for(var a=Object.keys(t),s=0;s<a.length;s++){var u=t[+a[s]],l=xa>>u.z,p=new i(u.x*l,u.y*l),c=new i(p.x+l,p.y+l),h=this.segments.prepareSegment(4,r,n);r.emplaceBack(p.x,p.y,p.x,p.y),r.emplaceBack(c.x,p.y,c.x,p.y),r.emplaceBack(p.x,c.y,p.x,c.y),r.emplaceBack(c.x,c.y,c.x,c.y);var f=h.vertexLength;n.emplaceBack(f,f+1,f+2),n.emplaceBack(f+1,f+2,f+3),h.vertexLength+=4,h.primitiveLength+=2;}this.maskedBoundsBuffer=e.createVertexBuffer(r,Kl.members),this.maskedIndexBuffer=e.createIndexBuffer(n);}},Wl.prototype.hasData=function(){return "loaded"===this.state||"reloading"===this.state||"expired"===this.state},Wl.prototype.patternsLoaded=function(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length},Wl.prototype.setExpiryData=function(t){var e=this.expirationTime;if(t.cacheControl){var r=I(t.cacheControl);r["max-age"]&&(this.expirationTime=Date.now()+1e3*r["max-age"]);}else t.expires&&(this.expirationTime=new Date(t.expires).getTime());if(this.expirationTime){var n=Date.now(),i=!1;if(this.expirationTime>n)i=!1;else if(e)if(this.expirationTime<e)i=!0;else{var a=this.expirationTime-e;a?this.expirationTime=n+Math.max(a,3e4):i=!0;}else i=!0;i?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0;}},Wl.prototype.getExpiryTimeout=function(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)},Wl.prototype.setFeatureState=function(t,e){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData&&0!==Object.keys(t).length){var r=this.latestFeatureIndex.loadVTLayers();for(var n in this.buckets){var i=this.buckets[n],a=i.layers[0].sourceLayer||"_geojsonTileLayer",o=r[a],s=t[a];o&&s&&0!==Object.keys(s).length&&(i.update(s,o,this.imageAtlas&&this.imageAtlas.patternPositions||{}),e&&e.style&&(this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(n).queryRadius(i))));}}},Wl.prototype.holdingForFade=function(){return void 0!==this.symbolFadeHoldUntil},Wl.prototype.symbolFadeFinished=function(){return !this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<O.now()},Wl.prototype.clearFadeHold=function(){this.symbolFadeHoldUntil=void 0;},Wl.prototype.setHoldDuration=function(t){this.symbolFadeHoldUntil=O.now()+t;},Wl.prototype.setDependencies=function(t,e){for(var r={},n=0,i=e;n<i.length;n+=1){r[i[n]]=!0;}this.dependencies[t]=r;},Wl.prototype.hasDependency=function(t,e){for(var r=0,n=t;r<n.length;r+=1){var i=n[r],a=this.dependencies[i];if(a)for(var o=0,s=e;o<s.length;o+=1){if(a[s[o]])return !0}}return !1};t.Actor=Cl,t.AlphaImage=$a,t.CanonicalTileID=Rl,t.CollisionBoxArray=Di,t.Color=Qt,t.DEMData=Nl,t.DataConstantProperty=ii,t.DictionaryCoder=Xl,t.EXTENT=xa,t.ErrorEvent=Ct,t.EvaluationParameters=Hn,t.Event=zt,t.Evented=Bt,t.FeatureIndex=Hl,t.FillBucket=jo,t.FillExtrusionBucket=is,t.ImageAtlas=iu,t.ImagePosition=ru,t.LineBucket=ds,t.LngLat=Pl,t.LngLatBounds=Tl,t.MercatorCoordinate=Dl,t.ONE_EM=Cs,t.OverscaledTileID=jl,t.Point=i,t.Point$1=i,t.ProgramConfiguration=da,t.Properties=li,t.Protobuf=Ps,t.RGBAImage=Wa,t.RequestManager=K,t.ResourceType=dt,t.SegmentVector=Yi,t.SourceFeatureState=Jl,t.StructArrayLayout1ui2=Vi,t.StructArrayLayout2i4=mi,t.StructArrayLayout2ui4=Mi,t.StructArrayLayout3ui6=Ei,t.StructArrayLayout4i8=vi,t.SymbolBucket=cl,t.Texture=Il,t.Tile=Wl,t.Transitionable=Wn,t.Uniform1f=ra,t.Uniform1i=ea,t.Uniform2f=na,t.Uniform3f=ia,t.Uniform4f=aa,t.UniformColor=oa,t.UniformMatrix4f=ua,t.UnwrappedTileID=Ul,t.ValidationError=Pt,t.WritingMode=au,t.ZoomHistory=Cn,t.addDynamicAttributes=sl,t.asyncAll=function(t,e,r){if(!t.length)return r(null,[]);var n=t.length,i=new Array(t.length),a=null;t.forEach((function(t,o){e(t,(function(t,e){t&&(a=t),i[o]=e,0==--n&&r(a,i);}));}));},t.bezier=s,t.bindAll=m,t.browser=O,t.cacheEntryPossiblyAdded=function(t){++yt>ut&&(t.getActor().send("enforceCacheSizeLimit",st),yt=0);},t.clamp=l,t.clearTileCache=function(t){var e=self.caches.delete(ot);t&&e.catch(t).then((function(){return t()}));},t.clone=function(t){var e=new ja(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=b,t.config=D,t.create=function(){var t=new ja(16);return ja!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.create$1=function(){var t=new ja(9);return ja!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t},t.create$2=function(){var t=new ja(4);return ja!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},t.createCommonjsModule=e,t.createExpression=Er,t.createLayout=yi,t.createStyleLayer=function(t){return "custom"===t.type?new bl(t):new _l[t.type](t)},t.deepEqual=o,t.ease=u,t.emitValidationErrors=vn,t.endsWith=v,t.enforceCacheSizeLimit=function(t){pt(),Q&&Q.then((function(e){e.keys().then((function(r){for(var n=0;n<r.length-t;n++)e.delete(r[n]);}));}));},t.evaluateSizeForFeature=Au,t.evaluateSizeForZoom=Su,t.evaluateVariableOffset=$u,t.evented=Xn,t.extend=c,t.featureFilter=Xr,t.filterObject=x,t.fromRotation=function(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},t.getAnchorAlignment=vu,t.getAnchorJustification=Wu,t.getArrayBuffer=bt,t.getImage=St,t.getJSON=function(t,e){return xt(c(t,{type:"json"}),e)},t.getRTLTextPluginStatus=Zn,t.getReferrer=vt,t.getVideo=function(t,e){var r,n,i=self.document.createElement("video");i.muted=!0,i.onloadstart=function(){e(null,i);};for(var a=0;a<t.length;a++){var o=self.document.createElement("source");r=t[a],n=void 0,(n=self.document.createElement("a")).href=r,(n.protocol!==self.document.location.protocol||n.host!==self.document.location.host)&&(i.crossOrigin="Anonymous"),o.src=t[a],i.appendChild(o);}return {cancel:function(){}}},t.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.invert=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],l=e[7],p=e[8],c=e[9],h=e[10],f=e[11],y=e[12],d=e[13],m=e[14],v=e[15],g=r*s-n*o,x=r*u-i*o,b=r*l-a*o,_=n*u-i*s,w=n*l-a*s,A=i*l-a*u,S=p*d-c*y,k=p*m-h*y,I=p*v-f*y,z=c*m-h*d,C=c*v-f*d,B=h*v-f*m,T=g*B-x*C+b*z+_*I-w*k+A*S;return T?(T=1/T,t[0]=(s*B-u*C+l*z)*T,t[1]=(i*C-n*B-a*z)*T,t[2]=(d*A-m*w+v*_)*T,t[3]=(h*w-c*A-f*_)*T,t[4]=(u*I-o*B-l*k)*T,t[5]=(r*B-i*I+a*k)*T,t[6]=(m*b-y*A-v*x)*T,t[7]=(p*A-h*b+f*x)*T,t[8]=(o*C-s*I+l*S)*T,t[9]=(n*I-r*C-a*S)*T,t[10]=(y*w-d*b+v*g)*T,t[11]=(c*b-p*w-f*g)*T,t[12]=(s*k-o*z-u*S)*T,t[13]=(r*z-n*k+i*S)*T,t[14]=(d*x-y*_-m*g)*T,t[15]=(p*_-c*x+h*g)*T,t):null},t.isChar=Bn,t.isMapboxURL=X,t.keysDifference=function(t,e){var r=[];for(var n in t)n in e||r.push(n);return r},t.makeRequest=xt,t.mapObject=g,t.mercatorXfromLng=Vl,t.mercatorYfromLat=Fl,t.mercatorZfromAltitude=Ll,t.multiply=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],d=e[12],m=e[13],v=e[14],g=e[15],x=r[0],b=r[1],_=r[2],w=r[3];return t[0]=x*n+b*s+_*c+w*d,t[1]=x*i+b*u+_*h+w*m,t[2]=x*a+b*l+_*f+w*v,t[3]=x*o+b*p+_*y+w*g,x=r[4],b=r[5],_=r[6],w=r[7],t[4]=x*n+b*s+_*c+w*d,t[5]=x*i+b*u+_*h+w*m,t[6]=x*a+b*l+_*f+w*v,t[7]=x*o+b*p+_*y+w*g,x=r[8],b=r[9],_=r[10],w=r[11],t[8]=x*n+b*s+_*c+w*d,t[9]=x*i+b*u+_*h+w*m,t[10]=x*a+b*l+_*f+w*v,t[11]=x*o+b*p+_*y+w*g,x=r[12],b=r[13],_=r[14],w=r[15],t[12]=x*n+b*s+_*c+w*d,t[13]=x*i+b*u+_*h+w*m,t[14]=x*a+b*l+_*f+w*v,t[15]=x*o+b*p+_*y+w*g,t},t.mvt=ts,t.number=Ie,t.ortho=function(t,e,r,n,i,a,o){var s=1/(e-r),u=1/(n-i),l=1/(a-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(e+r)*s,t[13]=(i+n)*u,t[14]=(o+a)*l,t[15]=1,t},t.parseGlyphPBF=function(t){return new Ps(t).readFields(Ys,[])},t.pbf=Ps,t.performSymbolLayout=function(t,e,r,n,a,o){t.createArrays();var s=512*t.overscaling;t.tilePixelRatio=xa/s,t.compareText={},t.iconsNeedLinear=!1;var u=t.layers[0].layout,l=t.layers[0]._unevaluatedLayout._values,p={};if("composite"===t.textSizeData.kind){var c=t.textSizeData,h=c.minZoom,f=c.maxZoom;p.compositeTextSizes=[l["text-size"].possiblyEvaluate(new Hn(h)),l["text-size"].possiblyEvaluate(new Hn(f))];}if("composite"===t.iconSizeData.kind){var y=t.iconSizeData,d=y.minZoom,m=y.maxZoom;p.compositeIconSizes=[l["icon-size"].possiblyEvaluate(new Hn(d)),l["icon-size"].possiblyEvaluate(new Hn(m))];}p.layoutTextSize=l["text-size"].possiblyEvaluate(new Hn(t.zoom+1)),p.layoutIconSize=l["icon-size"].possiblyEvaluate(new Hn(t.zoom+1)),p.textMaxSize=l["text-size"].possiblyEvaluate(new Hn(18));for(var v=u.get("text-line-height")*Cs,g="map"===u.get("text-rotation-alignment")&&"point"!==u.get("symbol-placement"),x=u.get("text-keep-upright"),b=u.get("text-size"),_=function(){var o=S[A],s=u.get("text-font").evaluate(o,{}).join(","),l=b.evaluate(o,{}),c=p.layoutTextSize.evaluate(o,{}),h=p.layoutIconSize.evaluate(o,{}),f={horizontal:{},vertical:void 0},y=o.text,d=[0,0];if(y){var m=y.toString(),_=u.get("text-letter-spacing").evaluate(o,{})*Cs,k=function(t){for(var e=0,r=t;e<r.length;e+=1){if(!Pn(r[e].charCodeAt(0)))return !1}return !0}(m)?_:0,I=u.get("text-anchor").evaluate(o,{}),z=u.get("text-variable-anchor");if(!z){var C=u.get("text-radial-offset").evaluate(o,{});d=C?$u(I,[C*Cs,Yu]):u.get("text-offset").evaluate(o,{}).map((function(t){return t*Cs}));}var B=g?"center":u.get("text-justify").evaluate(o,{}),T=u.get("symbol-placement"),P="point"===T?u.get("text-max-width").evaluate(o,{})*Cs:0,E=function(){t.allowVerticalPlacement&&Tn(m)&&(f.vertical=lu(y,e,r,a,s,P,v,I,"left",k,d,au.vertical,!0,T,c,l));};if(!g&&z){for(var M="auto"===B?z.map((function(t){return Wu(t)})):[B],V=!1,F=0;F<M.length;F++){var L=M[F];if(!f.horizontal[L])if(V)f.horizontal[L]=f.horizontal[0];else{var O=lu(y,e,r,a,s,P,v,"center",L,k,d,au.horizontal,!1,T,c,l);O&&(f.horizontal[L]=O,V=1===O.positionedLines.length);}}E();}else{"auto"===B&&(B=Wu(I));var D=lu(y,e,r,a,s,P,v,I,B,k,d,au.horizontal,!1,T,c,l);D&&(f.horizontal[B]=D),E(),Tn(m)&&g&&x&&(f.vertical=lu(y,e,r,a,s,P,v,I,B,k,d,au.vertical,!1,T,c,l));}}var R=void 0,U=!1;if(o.icon&&o.icon.name){var j=n[o.icon.name];j&&(R=function(t,e,r){var n=vu(r),i=n.horizontalAlign,a=n.verticalAlign,o=e[0],s=e[1],u=o-t.displaySize[0]*i,l=u+t.displaySize[0],p=s-t.displaySize[1]*a;return {image:t,top:p,bottom:p+t.displaySize[1],left:u,right:l}}(a[o.icon.name],u.get("icon-offset").evaluate(o,{}),u.get("icon-anchor").evaluate(o,{})),U=j.sdf,void 0===t.sdfIcons?t.sdfIcons=j.sdf:t.sdfIcons!==j.sdf&&w("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),j.pixelRatio!==t.pixelRatio?t.iconsNeedLinear=!0:0!==u.get("icon-rotate").constantOr(1)&&(t.iconsNeedLinear=!0));}var q=rl(f.horizontal)||f.vertical;t.iconsInText=!!q&&q.iconsInText,(q||R)&&function(t,e,r,n,a,o,s,u,l,p){var c=o.textMaxSize.evaluate(e,{});void 0===c&&(c=s);var h,f=t.layers[0].layout,y=f.get("icon-offset").evaluate(e,{}),d=rl(r.horizontal),m=s/24,v=t.tilePixelRatio*m,g=t.tilePixelRatio*c/24,x=t.tilePixelRatio*u,b=t.tilePixelRatio*f.get("symbol-spacing"),_=f.get("text-padding")*t.tilePixelRatio,A=f.get("icon-padding")*t.tilePixelRatio,S=f.get("text-max-angle")/180*Math.PI,k="map"===f.get("text-rotation-alignment")&&"point"!==f.get("symbol-placement"),I="map"===f.get("icon-rotation-alignment")&&"point"!==f.get("symbol-placement"),z=f.get("symbol-placement"),C=b/2,B=f.get("icon-text-fit");n&&"none"!==B&&(t.allowVerticalPlacement&&r.vertical&&(h=xu(n,r.vertical,B,f.get("icon-text-fit-padding"),y,m)),d&&(n=xu(n,d,B,f.get("icon-text-fit-padding"),y,m)));var T=function(i,s){s.x<0||s.x>=xa||s.y<0||s.y>=xa||function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,_,A){var S,k,I,z,C,B=t.addToLineVertexArray(e,r),T=0,P=0,E=0,M=0,V=-1,F=-1,L={},O=Zu(""),D=0,R=0;void 0===s._unevaluatedLayout.getValue("text-radial-offset")?(S=s.layout.get("text-offset").evaluate(b,{}).map((function(t){return t*Cs})),D=S[0],R=S[1]):(D=s.layout.get("text-radial-offset").evaluate(b,{})*Cs,R=Yu);if(t.allowVerticalPlacement&&n.vertical){var U=s.layout.get("text-rotate").evaluate(b,{})+90,j=n.vertical;z=new Du(u,r,e,l,p,c,j,h,f,y,t.overscaling,U),o&&(C=new Du(u,r,e,l,p,c,o,m,v,y,t.overscaling,U));}if(i){var q=s.layout.get("icon-rotate").evaluate(b,{}),N="none"!==s.layout.get("icon-text-fit"),K=Mu(i,q,A,N),X=o?Mu(o,q,A,N):void 0;I=new Du(u,r,e,l,p,c,i,m,v,!1,t.overscaling,q),T=4*K.length;var Z=t.iconSizeData,G=null;"source"===Z.kind?(G=[_u*s.layout.get("icon-size").evaluate(b,{})])[0]>tl&&w(t.layerIds[0]+': Value for "icon-size" is >= '+Qu+'. Reduce your "icon-size".'):"composite"===Z.kind&&((G=[_u*_.compositeIconSizes[0].evaluate(b,{}),_u*_.compositeIconSizes[1].evaluate(b,{})])[0]>tl||G[1]>tl)&&w(t.layerIds[0]+': Value for "icon-size" is >= '+Qu+'. Reduce your "icon-size".'),t.addSymbols(t.icon,K,G,x,g,b,!1,e,B.lineStartIndex,B.lineLength,-1),V=t.icon.placedSymbolArray.length-1,X&&(P=4*X.length,t.addSymbols(t.icon,X,G,x,g,b,au.vertical,e,B.lineStartIndex,B.lineLength,-1),F=t.icon.placedSymbolArray.length-1);}for(var J in n.horizontal){var H=n.horizontal[J];if(!k){O=Zu(H.text);var Y=s.layout.get("text-rotate").evaluate(b,{});k=new Du(u,r,e,l,p,c,H,h,f,y,t.overscaling,Y);}var $=1===H.positionedLines.length;if(E+=el(t,e,H,a,s,y,b,d,B,n.vertical?au.horizontal:au.horizontalOnly,$?Object.keys(n.horizontal):[J],L,V,_),$)break}n.vertical&&(M+=el(t,e,n.vertical,a,s,y,b,d,B,au.vertical,["vertical"],L,F,_));var W=k?k.boxStartIndex:t.collisionBoxArray.length,Q=k?k.boxEndIndex:t.collisionBoxArray.length,tt=z?z.boxStartIndex:t.collisionBoxArray.length,et=z?z.boxEndIndex:t.collisionBoxArray.length,rt=I?I.boxStartIndex:t.collisionBoxArray.length,nt=I?I.boxEndIndex:t.collisionBoxArray.length,it=C?C.boxStartIndex:t.collisionBoxArray.length,at=C?C.boxEndIndex:t.collisionBoxArray.length;t.glyphOffsetArray.length>=cl.MAX_GLYPHS&&w("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907");t.symbolInstances.emplaceBack(e.x,e.y,L.right>=0?L.right:-1,L.center>=0?L.center:-1,L.left>=0?L.left:-1,L.vertical||-1,V,F,O,W,Q,tt,et,rt,nt,it,at,l,E,M,T,P,0,h,D,R);}(t,s,i,r,n,a,h,t.layers[0],t.collisionBoxArray,e.index,e.sourceLayerIndex,t.index,v,_,k,l,x,A,I,y,e,o,p);};if("line"===z)for(var P=0,E=function(t,e,r,n,a){for(var o=[],s=0;s<t.length;s++)for(var u=t[s],l=void 0,p=0;p<u.length-1;p++){var c=u[p],h=u[p+1];c.x<e&&h.x<e||(c.x<e?c=new i(e,c.y+(h.y-c.y)*((e-c.x)/(h.x-c.x)))._round():h.x<e&&(h=new i(e,c.y+(h.y-c.y)*((e-c.x)/(h.x-c.x)))._round()),c.y<r&&h.y<r||(c.y<r?c=new i(c.x+(h.x-c.x)*((r-c.y)/(h.y-c.y)),r)._round():h.y<r&&(h=new i(c.x+(h.x-c.x)*((r-c.y)/(h.y-c.y)),r)._round()),c.x>=n&&h.x>=n||(c.x>=n?c=new i(n,c.y+(h.y-c.y)*((n-c.x)/(h.x-c.x)))._round():h.x>=n&&(h=new i(n,c.y+(h.y-c.y)*((n-c.x)/(h.x-c.x)))._round()),c.y>=a&&h.y>=a||(c.y>=a?c=new i(c.x+(h.x-c.x)*((a-c.y)/(h.y-c.y)),a)._round():h.y>=a&&(h=new i(c.x+(h.x-c.x)*((a-c.y)/(h.y-c.y)),a)._round()),l&&c.equals(l[l.length-1])||(l=[c],o.push(l)),l.push(h)))));}return o}(e.geometry,0,0,xa,xa);P<E.length;P+=1)for(var M=E[P],V=Pu(M,b,S,r.vertical||d,n,24,g,t.overscaling,xa),F=0,L=V;F<L.length;F+=1){var O=L[F],D=d;D&&nl(t,D.text,C,O)||T(M,O);}else if("line-center"===z)for(var R=0,U=e.geometry;R<U.length;R+=1){var j=U[R];if(j.length>1){var q=Tu(j,S,r.vertical||d,n,24,g);q&&T(j,q);}}else if("Polygon"===e.type)for(var N=0,K=Oo(e.geometry,0);N<K.length;N+=1){var X=K[N],Z=ju(X,16);T(X[0],new bu(Z.x,Z.y,0));}else if("LineString"===e.type)for(var G=0,J=e.geometry;G<J.length;G+=1){var H=J[G];T(H,new bu(H[0].x,H[0].y,0));}else if("Point"===e.type)for(var Y=0,$=e.geometry;Y<$.length;Y+=1)for(var W=$[Y],Q=0,tt=W;Q<tt.length;Q+=1){var et=tt[Q];T([et],new bu(et.x,et.y,0));}}(t,o,f,R,n,p,c,h,d,U);},A=0,S=t.features;A<S.length;A+=1)_();o&&t.generateCollisionDebugBuffers();},t.perspective=function(t,e,r,n,i){var a,o=1/Math.tan(e/2);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(a=1/(n-i),t[10]=(i+n)*a,t[14]=2*i*n*a):(t[10]=-1,t[14]=-2*n),t},t.pick=function(t,e){for(var r={},n=0;n<e.length;n++){var i=e[n];i in t&&(r[i]=t[i]);}return r},t.plugin=Jn,t.polygonIntersectsPolygon=ka,t.postMapLoadEvent=at,t.postTurnstileEvent=nt,t.potpack=tu,t.rasterBoundsAttributes=Kl,t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.register=An,t.registerForPluginStateChange=function(t){return t({pluginStatus:jn,pluginURL:qn}),Xn.on("pluginStateChange",t),t},t.rotate=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=Math.sin(r),u=Math.cos(r);return t[0]=n*u+a*s,t[1]=i*u+o*s,t[2]=n*-s+a*u,t[3]=i*-s+o*u,t},t.rotateX=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[4],o=e[5],s=e[6],u=e[7],l=e[8],p=e[9],c=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*i+l*n,t[5]=o*i+p*n,t[6]=s*i+c*n,t[7]=u*i+h*n,t[8]=l*i-a*n,t[9]=p*i-o*n,t[10]=c*i-s*n,t[11]=h*i-u*n,t},t.rotateZ=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],o=e[1],s=e[2],u=e[3],l=e[4],p=e[5],c=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i+l*n,t[1]=o*i+p*n,t[2]=s*i+c*n,t[3]=u*i+h*n,t[4]=l*i-a*n,t[5]=p*i-o*n,t[6]=c*i-s*n,t[7]=h*i-u*n,t},t.scale=function(t,e,r){var n=r[0],i=r[1],a=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.setCacheLimits=function(t,e){st=t,ut=e;},t.setRTLTextPlugin=function(t,e,r){if(void 0===r&&(r=!1),jn===On||jn===Dn||jn===Rn)throw new Error("setRTLTextPlugin cannot be called multiple times.");qn=O.resolveURL(t),jn=On,Un=e,Kn(),r||Gn();},t.sphericalToCartesian=function(t){var e=t[0],r=t[1],n=t[2];return r+=90,r*=Math.PI/180,n*=Math.PI/180,{x:e*Math.cos(r)*Math.sin(n),y:e*Math.sin(r)*Math.sin(n),z:e*Math.cos(n)}},t.styleSpec=Tt,t.symbolSize=ku,t.transformMat3=function(t,e,r){var n=e[0],i=e[1],a=e[2];return t[0]=n*r[0]+i*r[3]+a*r[6],t[1]=n*r[1]+i*r[4]+a*r[7],t[2]=n*r[2]+i*r[5]+a*r[8],t},t.transformMat4=Ka,t.translate=function(t,e,r){var n,i,a,o,s,u,l,p,c,h,f,y,d=r[0],m=r[1],v=r[2];return e===t?(t[12]=e[0]*d+e[4]*m+e[8]*v+e[12],t[13]=e[1]*d+e[5]*m+e[9]*v+e[13],t[14]=e[2]*d+e[6]*m+e[10]*v+e[14],t[15]=e[3]*d+e[7]*m+e[11]*v+e[15]):(n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],t[0]=n,t[1]=i,t[2]=a,t[3]=o,t[4]=s,t[5]=u,t[6]=l,t[7]=p,t[8]=c,t[9]=h,t[10]=f,t[11]=y,t[12]=n*d+s*m+c*v+e[12],t[13]=i*d+u*m+h*v+e[13],t[14]=a*d+l*m+f*v+e[14],t[15]=o*d+p*m+y*v+e[15]),t},t.triggerPluginCompletionEvent=Nn,t.uniqueId=f,t.validateCustomStyleLayer=function(t){var e=[],r=t.id;return void 0===r&&e.push({message:"layers."+r+': missing required property "id"'}),void 0===t.render&&e.push({message:"layers."+r+': missing required method "render"'}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:"layers."+r+': property "renderingMode" must be either "2d" or "3d"'}),e},t.validateLight=yn,t.validateStyle=fn,t.values=function(t){var e=[];for(var r in t)e.push(t[r]);return e},t.vectorTile=ts,t.version="1.6.1",t.warnOnce=w,t.webpSupported=R,t.window=self,t.wrap=p;}));

define(["./shared"],(function(e){"use strict";function t(e){var r=typeof e;if("number"===r||"boolean"===r||"string"===r||null==e)return JSON.stringify(e);if(Array.isArray(e)){for(var i="[",o=0,n=e;o<n.length;o+=1){i+=t(n[o])+",";}return i+"]"}for(var a=Object.keys(e).sort(),s="{",l=0;l<a.length;l++)s+=JSON.stringify(a[l])+":"+t(e[a[l]])+",";return s+"}"}function r(r){for(var i="",o=0,n=e.refProperties;o<n.length;o+=1){i+="/"+t(r[n[o]]);}return i}var i=function(e){this.keyCache={},e&&this.replace(e);};i.prototype.replace=function(e){this._layerConfigs={},this._layers={},this.update(e,[]);},i.prototype.update=function(t,i){for(var o=this,n=0,a=t;n<a.length;n+=1){var s=a[n];this._layerConfigs[s.id]=s;var l=this._layers[s.id]=e.createStyleLayer(s);l._featureFilter=e.featureFilter(l.filter),this.keyCache[s.id]&&delete this.keyCache[s.id];}for(var u=0,h=i;u<h.length;u+=1){var c=h[u];delete this.keyCache[c],delete this._layerConfigs[c],delete this._layers[c];}this.familiesBySource={};for(var p=0,f=function(e,t){for(var i={},o=0;o<e.length;o++){var n=t&&t[e[o].id]||r(e[o]);t&&(t[e[o].id]=n);var a=i[n];a||(a=i[n]=[]),a.push(e[o]);}var s=[];for(var l in i)s.push(i[l]);return s}(e.values(this._layerConfigs),this.keyCache);p<f.length;p+=1){var d=f[p].map((function(e){return o._layers[e.id]})),g=d[0];if("none"!==g.visibility){var m=g.source||"",v=this.familiesBySource[m];v||(v=this.familiesBySource[m]={});var y=g.sourceLayer||"_geojsonTileLayer",x=v[y];x||(x=v[y]=[]),x.push(d);}}};var o=function(t){var r={},i=[];for(var o in t){var n=t[o],a=r[o]={};for(var s in n){var l=n[+s];if(l&&0!==l.bitmap.width&&0!==l.bitmap.height){var u={x:0,y:0,w:l.bitmap.width+2,h:l.bitmap.height+2};i.push(u),a[s]={rect:u,metrics:l.metrics};}}}var h=e.potpack(i),c=h.w,p=h.h,f=new e.AlphaImage({width:c||1,height:p||1});for(var d in t){var g=t[d];for(var m in g){var v=g[+m];if(v&&0!==v.bitmap.width&&0!==v.bitmap.height){var y=r[d][m].rect;e.AlphaImage.copy(v.bitmap,f,{x:0,y:0},{x:y.x+1,y:y.y+1},v.bitmap);}}}this.image=f,this.positions=r;};e.register("GlyphAtlas",o);var n=function(t){this.tileID=new e.OverscaledTileID(t.tileID.overscaledZ,t.tileID.wrap,t.tileID.canonical.z,t.tileID.canonical.x,t.tileID.canonical.y),this.uid=t.uid,this.zoom=t.zoom,this.pixelRatio=t.pixelRatio,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=t.showCollisionBoxes,this.collectResourceTiming=!!t.collectResourceTiming,this.returnDependencies=!!t.returnDependencies;};function a(t,r,i){for(var o=new e.EvaluationParameters(r),n=0,a=t;n<a.length;n+=1){a[n].recalculate(o,i);}}n.prototype.parse=function(t,r,i,n,s){var l=this;this.status="parsing",this.data=t,this.collisionBoxArray=new e.CollisionBoxArray;var u=new e.DictionaryCoder(Object.keys(t.layers).sort()),h=new e.FeatureIndex(this.tileID);h.bucketLayerIDs=[];var c,p,f,d,g={},m={featureIndex:h,iconDependencies:{},patternDependencies:{},glyphDependencies:{},availableImages:i},v=r.familiesBySource[this.source];for(var y in v){var x=t.layers[y];if(x){1===x.version&&e.warnOnce('Vector tile source "'+this.source+'" layer "'+y+'" does not use vector tile spec v2 and therefore may have some rendering errors.');for(var w=u.encode(y),S=[],M=0;M<x.length;M++){var b=x.feature(M);S.push({feature:b,index:M,sourceLayerIndex:w});}for(var k=0,I=v[y];k<I.length;k+=1){var _=I[k],P=_[0];if(!(P.minzoom&&this.zoom<Math.floor(P.minzoom)))if(!(P.maxzoom&&this.zoom>=P.maxzoom))if("none"!==P.visibility)a(_,this.zoom,i),(g[P.id]=P.createBucket({index:h.bucketLayerIDs.length,layers:_,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:w,sourceID:this.source})).populate(S,m),h.bucketLayerIDs.push(_.map((function(e){return e.id})));}}}var T=e.mapObject(m.glyphDependencies,(function(e){return Object.keys(e).map(Number)}));Object.keys(T).length?n.send("getGlyphs",{uid:this.uid,stacks:T},(function(e,t){c||(c=e,p=t,C.call(l));})):p={};var L=Object.keys(m.iconDependencies);L.length?n.send("getImages",{icons:L,source:this.source,tileID:this.tileID,type:"icons"},(function(e,t){c||(c=e,f=t,C.call(l));})):f={};var D=Object.keys(m.patternDependencies);function C(){if(c)return s(c);if(p&&f&&d){var t=new o(p),r=new e.ImageAtlas(f,d);for(var n in g){var l=g[n];l instanceof e.SymbolBucket?(a(l.layers,this.zoom,i),e.performSymbolLayout(l,p,t.positions,f,r.iconPositions,this.showCollisionBoxes)):l.hasPattern&&(l instanceof e.LineBucket||l instanceof e.FillBucket||l instanceof e.FillExtrusionBucket)&&(a(l.layers,this.zoom,i),l.addFeatures(m,r.patternPositions));}this.status="done",s(null,{buckets:e.values(g).filter((function(e){return !e.isEmpty()})),featureIndex:h,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:t.image,imageAtlas:r,glyphMap:this.returnDependencies?p:null,iconMap:this.returnDependencies?f:null,glyphPositions:this.returnDependencies?t.positions:null});}}D.length?n.send("getImages",{icons:D,source:this.source,tileID:this.tileID,type:"patterns"},(function(e,t){c||(c=e,d=t,C.call(l));})):d={},C.call(this);};var s="undefined"!=typeof performance,l={getEntriesByName:function(e){return !!(s&&performance&&performance.getEntriesByName)&&performance.getEntriesByName(e)},mark:function(e){return !!(s&&performance&&performance.mark)&&performance.mark(e)},measure:function(e,t,r){return !!(s&&performance&&performance.measure)&&performance.measure(e,t,r)},clearMarks:function(e){return !!(s&&performance&&performance.clearMarks)&&performance.clearMarks(e)},clearMeasures:function(e){return !!(s&&performance&&performance.clearMeasures)&&performance.clearMeasures(e)}},u=function(e){this._marks={start:[e.url,"start"].join("#"),end:[e.url,"end"].join("#"),measure:e.url.toString()},l.mark(this._marks.start);};function h(t,r){var i=e.getArrayBuffer(t.request,(function(t,i,o,n){t?r(t):i&&r(null,{vectorTile:new e.vectorTile.VectorTile(new e.pbf(i)),rawData:i,cacheControl:o,expires:n});}));return function(){i.cancel(),r();}}u.prototype.finish=function(){l.mark(this._marks.end);var e=l.getEntriesByName(this._marks.measure);return 0===e.length&&(l.measure(this._marks.measure,this._marks.start,this._marks.end),e=l.getEntriesByName(this._marks.measure),l.clearMarks(this._marks.start),l.clearMarks(this._marks.end),l.clearMeasures(this._marks.measure)),e},l.Performance=u;var c=function(e,t,r,i){this.actor=e,this.layerIndex=t,this.availableImages=r,this.loadVectorData=i||h,this.loading={},this.loaded={};};c.prototype.loadTile=function(t,r){var i=this,o=t.uid;this.loading||(this.loading={});var a=!!(t&&t.request&&t.request.collectResourceTiming)&&new l.Performance(t.request),s=this.loading[o]=new n(t);s.abort=this.loadVectorData(t,(function(t,n){if(delete i.loading[o],t||!n)return s.status="done",i.loaded[o]=s,r(t);var l=n.rawData,u={};n.expires&&(u.expires=n.expires),n.cacheControl&&(u.cacheControl=n.cacheControl);var h={};if(a){var c=a.finish();c&&(h.resourceTiming=JSON.parse(JSON.stringify(c)));}s.vectorTile=n.vectorTile,s.parse(n.vectorTile,i.layerIndex,i.availableImages,i.actor,(function(t,i){if(t||!i)return r(t);r(null,e.extend({rawTileData:l.slice(0)},i,u,h));})),i.loaded=i.loaded||{},i.loaded[o]=s;}));},c.prototype.reloadTile=function(e,t){var r=this,i=this.loaded,o=e.uid,n=this;if(i&&i[o]){var a=i[o];a.showCollisionBoxes=e.showCollisionBoxes;var s=function(e,i){var o=a.reloadCallback;o&&(delete a.reloadCallback,a.parse(a.vectorTile,n.layerIndex,r.availableImages,n.actor,o)),t(e,i);};"parsing"===a.status?a.reloadCallback=s:"done"===a.status&&(a.vectorTile?a.parse(a.vectorTile,this.layerIndex,this.availableImages,this.actor,s):s());}},c.prototype.abortTile=function(e,t){var r=this.loading,i=e.uid;r&&r[i]&&r[i].abort&&(r[i].abort(),delete r[i]),t();},c.prototype.removeTile=function(e,t){var r=this.loaded,i=e.uid;r&&r[i]&&delete r[i],t();};var p=function(){this.loaded={};};p.prototype.loadTile=function(t,r){var i=t.uid,o=t.encoding,n=t.rawImageData,a=new e.DEMData(i,n,o);this.loaded=this.loaded||{},this.loaded[i]=a,r(null,a);},p.prototype.removeTile=function(e){var t=this.loaded,r=e.uid;t&&t[r]&&delete t[r];};var f={RADIUS:6378137,FLATTENING:1/298.257223563,POLAR_RADIUS:6356752.3142};function d(e){var t=0;if(e&&e.length>0){t+=Math.abs(g(e[0]));for(var r=1;r<e.length;r++)t-=Math.abs(g(e[r]));}return t}function g(e){var t,r,i,o,n,a,s=0,l=e.length;if(l>2){for(a=0;a<l;a++)a===l-2?(i=l-2,o=l-1,n=0):a===l-1?(i=l-1,o=0,n=1):(i=a,o=a+1,n=a+2),t=e[i],r=e[o],s+=(m(e[n][0])-m(t[0]))*Math.sin(m(r[1]));s=s*f.RADIUS*f.RADIUS/2;}return s}function m(e){return e*Math.PI/180}var v={geometry:function e(t){var r,i=0;switch(t.type){case"Polygon":return d(t.coordinates);case"MultiPolygon":for(r=0;r<t.coordinates.length;r++)i+=d(t.coordinates[r]);return i;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0;case"GeometryCollection":for(r=0;r<t.geometries.length;r++)i+=e(t.geometries[r]);return i}},ring:g},y=function e(t,r){switch(t&&t.type||null){case"FeatureCollection":return t.features=t.features.map(x(e,r)),t;case"GeometryCollection":return t.geometries=t.geometries.map(x(e,r)),t;case"Feature":return t.geometry=e(t.geometry,r),t;case"Polygon":case"MultiPolygon":return function(e,t){"Polygon"===e.type?e.coordinates=w(e.coordinates,t):"MultiPolygon"===e.type&&(e.coordinates=e.coordinates.map(x(w,t)));return e}(t,r);default:return t}};function x(e,t){return function(r){return e(r,t)}}function w(e,t){t=!!t,e[0]=S(e[0],t);for(var r=1;r<e.length;r++)e[r]=S(e[r],!t);return e}function S(e,t){return function(e){return v.ring(e)>=0}(e)===t?e:e.reverse()}var M=e.vectorTile.VectorTileFeature.prototype.toGeoJSON,b=function(t){this._feature=t,this.extent=e.EXTENT,this.type=t.type,this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10));};b.prototype.loadGeometry=function(){if(1===this._feature.type){for(var t=[],r=0,i=this._feature.geometry;r<i.length;r+=1){var o=i[r];t.push([new e.Point$1(o[0],o[1])]);}return t}for(var n=[],a=0,s=this._feature.geometry;a<s.length;a+=1){for(var l=[],u=0,h=s[a];u<h.length;u+=1){var c=h[u];l.push(new e.Point$1(c[0],c[1]));}n.push(l);}return n},b.prototype.toGeoJSON=function(e,t,r){return M.call(this,e,t,r)};var k=function(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=e.EXTENT,this.length=t.length,this._features=t;};k.prototype.feature=function(e){return new b(this._features[e])};var I=e.vectorTile.VectorTileFeature,_=P;function P(e,t){this.options=t||{},this.features=e,this.length=e.length;}function T(e,t){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=t||4096;}P.prototype.feature=function(e){return new T(this.features[e],this.options.extent)},T.prototype.loadGeometry=function(){var t=this.rawGeometry;this.geometry=[];for(var r=0;r<t.length;r++){for(var i=t[r],o=[],n=0;n<i.length;n++)o.push(new e.Point$1(i[n][0],i[n][1]));this.geometry.push(o);}return this.geometry},T.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,r=-1/0,i=1/0,o=-1/0,n=0;n<e.length;n++)for(var a=e[n],s=0;s<a.length;s++){var l=a[s];t=Math.min(t,l.x),r=Math.max(r,l.x),i=Math.min(i,l.y),o=Math.max(o,l.y);}return [t,i,r,o]},T.prototype.toGeoJSON=I.prototype.toGeoJSON;var L=z,D=z,C=function(e,t){t=t||{};var r={};for(var i in e)r[i]=new _(e[i].features,t),r[i].name=i,r[i].version=t.version,r[i].extent=t.extent;return z({layers:r})},O=_;function z(t){var r=new e.pbf;return function(e,t){for(var r in e.layers)t.writeMessage(3,E,e.layers[r]);}(t,r),r.finish()}function E(e,t){var r;t.writeVarintField(15,e.version||1),t.writeStringField(1,e.name||""),t.writeVarintField(5,e.extent||4096);var i={keys:[],values:[],keycache:{},valuecache:{}};for(r=0;r<e.length;r++)i.feature=e.feature(r),t.writeMessage(2,N,i);var o=i.keys;for(r=0;r<o.length;r++)t.writeStringField(3,o[r]);var n=i.values;for(r=0;r<n.length;r++)t.writeMessage(4,Z,n[r]);}function N(e,t){var r=e.feature;void 0!==r.id&&t.writeVarintField(1,r.id),t.writeMessage(2,F,e),t.writeVarintField(3,r.type),t.writeMessage(4,J,r);}function F(e,t){var r=e.feature,i=e.keys,o=e.values,n=e.keycache,a=e.valuecache;for(var s in r.properties){var l=n[s];void 0===l&&(i.push(s),l=i.length-1,n[s]=l),t.writeVarint(l);var u=r.properties[s],h=typeof u;"string"!==h&&"boolean"!==h&&"number"!==h&&(u=JSON.stringify(u));var c=h+":"+u,p=a[c];void 0===p&&(o.push(u),p=o.length-1,a[c]=p),t.writeVarint(p);}}function A(e,t){return (t<<3)+(7&e)}function B(e){return e<<1^e>>31}function J(e,t){for(var r=e.loadGeometry(),i=e.type,o=0,n=0,a=r.length,s=0;s<a;s++){var l=r[s],u=1;1===i&&(u=l.length),t.writeVarint(A(1,u));for(var h=3===i?l.length-1:l.length,c=0;c<h;c++){1===c&&1!==i&&t.writeVarint(A(2,h-1));var p=l[c].x-o,f=l[c].y-n;t.writeVarint(B(p)),t.writeVarint(B(f)),o+=p,n+=f;}3===i&&t.writeVarint(A(7,1));}}function Z(e,t){var r=typeof e;"string"===r?t.writeStringField(1,e):"boolean"===r?t.writeBooleanField(7,e):"number"===r&&(e%1!=0?t.writeDoubleField(3,e):e<0?t.writeSVarintField(6,e):t.writeVarintField(5,e));}function G(e,t,r,i,o,n){if(!(o-i<=r)){var a=i+o>>1;!function e(t,r,i,o,n,a){for(;n>o;){if(n-o>600){var s=n-o+1,l=i-o+1,u=Math.log(s),h=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*h*(s-h)/s)*(l-s/2<0?-1:1),p=Math.max(o,Math.floor(i-l*h/s+c)),f=Math.min(n,Math.floor(i+(s-l)*h/s+c));e(t,r,i,p,f,a);}var d=r[2*i+a],g=o,m=n;for(j(t,r,o,i),r[2*n+a]>d&&j(t,r,o,n);g<m;){for(j(t,r,g,m),g++,m--;r[2*g+a]<d;)g++;for(;r[2*m+a]>d;)m--;}r[2*o+a]===d?j(t,r,o,m):j(t,r,++m,n),m<=i&&(o=m+1),i<=m&&(n=m-1);}}(e,t,a,i,o,n%2),G(e,t,r,i,a-1,n+1),G(e,t,r,a+1,o,n+1);}}function j(e,t,r,i){Y(e,r,i),Y(t,2*r,2*i),Y(t,2*r+1,2*i+1);}function Y(e,t,r){var i=e[t];e[t]=e[r],e[r]=i;}function V(e,t,r,i){var o=e-r,n=t-i;return o*o+n*n}L.fromVectorTileJs=D,L.fromGeojsonVt=C,L.GeoJSONWrapper=O;var X=function(e){return e[0]},W=function(e){return e[1]},R=function(e,t,r,i,o){void 0===t&&(t=X),void 0===r&&(r=W),void 0===i&&(i=64),void 0===o&&(o=Float64Array),this.nodeSize=i,this.points=e;for(var n=e.length<65536?Uint16Array:Uint32Array,a=this.ids=new n(e.length),s=this.coords=new o(2*e.length),l=0;l<e.length;l++)a[l]=l,s[2*l]=t(e[l]),s[2*l+1]=r(e[l]);G(a,s,i,0,a.length-1,0);};R.prototype.range=function(e,t,r,i){return function(e,t,r,i,o,n,a){for(var s,l,u=[0,e.length-1,0],h=[];u.length;){var c=u.pop(),p=u.pop(),f=u.pop();if(p-f<=a)for(var d=f;d<=p;d++)s=t[2*d],l=t[2*d+1],s>=r&&s<=o&&l>=i&&l<=n&&h.push(e[d]);else{var g=Math.floor((f+p)/2);s=t[2*g],l=t[2*g+1],s>=r&&s<=o&&l>=i&&l<=n&&h.push(e[g]);var m=(c+1)%2;(0===c?r<=s:i<=l)&&(u.push(f),u.push(g-1),u.push(m)),(0===c?o>=s:n>=l)&&(u.push(g+1),u.push(p),u.push(m));}}return h}(this.ids,this.coords,e,t,r,i,this.nodeSize)},R.prototype.within=function(e,t,r){return function(e,t,r,i,o,n){for(var a=[0,e.length-1,0],s=[],l=o*o;a.length;){var u=a.pop(),h=a.pop(),c=a.pop();if(h-c<=n)for(var p=c;p<=h;p++)V(t[2*p],t[2*p+1],r,i)<=l&&s.push(e[p]);else{var f=Math.floor((c+h)/2),d=t[2*f],g=t[2*f+1];V(d,g,r,i)<=l&&s.push(e[f]);var m=(u+1)%2;(0===u?r-o<=d:i-o<=g)&&(a.push(c),a.push(f-1),a.push(m)),(0===u?r+o>=d:i+o>=g)&&(a.push(f+1),a.push(h),a.push(m));}}return s}(this.ids,this.coords,e,t,r,this.nodeSize)};var q={minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:function(e){return e}},U=function(e){this.options=re(Object.create(q),e),this.trees=new Array(this.options.maxZoom+1);};function $(e,t,r,i,o){return {x:e,y:t,zoom:1/0,id:r,parentId:-1,numPoints:i,properties:o}}function H(e,t){var r=e.geometry.coordinates,i=r[0],o=r[1];return {x:ee(i),y:te(o),zoom:1/0,index:t,parentId:-1}}function K(e){return {type:"Feature",id:e.id,properties:Q(e),geometry:{type:"Point",coordinates:[(i=e.x,360*(i-.5)),(t=e.y,r=(180-360*t)*Math.PI/180,360*Math.atan(Math.exp(r))/Math.PI-90)]}};var t,r,i;}function Q(e){var t=e.numPoints,r=t>=1e4?Math.round(t/1e3)+"k":t>=1e3?Math.round(t/100)/10+"k":t;return re(re({},e.properties),{cluster:!0,cluster_id:e.id,point_count:t,point_count_abbreviated:r})}function ee(e){return e/360+.5}function te(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function re(e,t){for(var r in t)e[r]=t[r];return e}function ie(e){return e.x}function oe(e){return e.y}function ne(e,t,r,i,o,n){var a=o-r,s=n-i;if(0!==a||0!==s){var l=((e-r)*a+(t-i)*s)/(a*a+s*s);l>1?(r=o,i=n):l>0&&(r+=a*l,i+=s*l);}return (a=e-r)*a+(s=t-i)*s}function ae(e,t,r,i){var o={id:void 0===e?null:e,type:t,geometry:r,tags:i,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,r=e.type;if("Point"===r||"MultiPoint"===r||"LineString"===r)se(e,t);else if("Polygon"===r||"MultiLineString"===r)for(var i=0;i<t.length;i++)se(e,t[i]);else if("MultiPolygon"===r)for(i=0;i<t.length;i++)for(var o=0;o<t[i].length;o++)se(e,t[i][o]);}(o),o}function se(e,t){for(var r=0;r<t.length;r+=3)e.minX=Math.min(e.minX,t[r]),e.minY=Math.min(e.minY,t[r+1]),e.maxX=Math.max(e.maxX,t[r]),e.maxY=Math.max(e.maxY,t[r+1]);}function le(e,t,r,i){if(t.geometry){var o=t.geometry.coordinates,n=t.geometry.type,a=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),s=[],l=t.id;if(r.promoteId?l=t.properties[r.promoteId]:r.generateId&&(l=i||0),"Point"===n)ue(o,s);else if("MultiPoint"===n)for(var u=0;u<o.length;u++)ue(o[u],s);else if("LineString"===n)he(o,s,a,!1);else if("MultiLineString"===n){if(r.lineMetrics){for(u=0;u<o.length;u++)s=[],he(o[u],s,a,!1),e.push(ae(l,"LineString",s,t.properties));return}ce(o,s,a,!1);}else if("Polygon"===n)ce(o,s,a,!0);else{if("MultiPolygon"!==n){if("GeometryCollection"===n){for(u=0;u<t.geometry.geometries.length;u++)le(e,{id:l,geometry:t.geometry.geometries[u],properties:t.properties},r,i);return}throw new Error("Input data is not a valid GeoJSON object.")}for(u=0;u<o.length;u++){var h=[];ce(o[u],h,a,!0),s.push(h);}}e.push(ae(l,n,s,t.properties));}}function ue(e,t){t.push(pe(e[0])),t.push(fe(e[1])),t.push(0);}function he(e,t,r,i){for(var o,n,a=0,s=0;s<e.length;s++){var l=pe(e[s][0]),u=fe(e[s][1]);t.push(l),t.push(u),t.push(0),s>0&&(a+=i?(o*u-l*n)/2:Math.sqrt(Math.pow(l-o,2)+Math.pow(u-n,2))),o=l,n=u;}var h=t.length-3;t[2]=1,function e(t,r,i,o){for(var n,a=o,s=i-r>>1,l=i-r,u=t[r],h=t[r+1],c=t[i],p=t[i+1],f=r+3;f<i;f+=3){var d=ne(t[f],t[f+1],u,h,c,p);if(d>a)n=f,a=d;else if(d===a){var g=Math.abs(f-s);g<l&&(n=f,l=g);}}a>o&&(n-r>3&&e(t,r,n,o),t[n+2]=a,i-n>3&&e(t,n,i,o));}(t,0,h,r),t[h+2]=1,t.size=Math.abs(a),t.start=0,t.end=t.size;}function ce(e,t,r,i){for(var o=0;o<e.length;o++){var n=[];he(e[o],n,r,i),t.push(n);}}function pe(e){return e/360+.5}function fe(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function de(e,t,r,i,o,n,a,s){if(i/=t,n>=(r/=t)&&a<i)return e;if(a<r||n>=i)return null;for(var l=[],u=0;u<e.length;u++){var h=e[u],c=h.geometry,p=h.type,f=0===o?h.minX:h.minY,d=0===o?h.maxX:h.maxY;if(f>=r&&d<i)l.push(h);else if(!(d<r||f>=i)){var g=[];if("Point"===p||"MultiPoint"===p)ge(c,g,r,i,o);else if("LineString"===p)me(c,g,r,i,o,!1,s.lineMetrics);else if("MultiLineString"===p)ye(c,g,r,i,o,!1);else if("Polygon"===p)ye(c,g,r,i,o,!0);else if("MultiPolygon"===p)for(var m=0;m<c.length;m++){var v=[];ye(c[m],v,r,i,o,!0),v.length&&g.push(v);}if(g.length){if(s.lineMetrics&&"LineString"===p){for(m=0;m<g.length;m++)l.push(ae(h.id,p,g[m],h.tags));continue}"LineString"!==p&&"MultiLineString"!==p||(1===g.length?(p="LineString",g=g[0]):p="MultiLineString"),"Point"!==p&&"MultiPoint"!==p||(p=3===g.length?"Point":"MultiPoint"),l.push(ae(h.id,p,g,h.tags));}}}return l.length?l:null}function ge(e,t,r,i,o){for(var n=0;n<e.length;n+=3){var a=e[n+o];a>=r&&a<=i&&(t.push(e[n]),t.push(e[n+1]),t.push(e[n+2]));}}function me(e,t,r,i,o,n,a){for(var s,l,u=ve(e),h=0===o?we:Se,c=e.start,p=0;p<e.length-3;p+=3){var f=e[p],d=e[p+1],g=e[p+2],m=e[p+3],v=e[p+4],y=0===o?f:d,x=0===o?m:v,w=!1;a&&(s=Math.sqrt(Math.pow(f-m,2)+Math.pow(d-v,2))),y<r?x>r&&(l=h(u,f,d,m,v,r),a&&(u.start=c+s*l)):y>i?x<i&&(l=h(u,f,d,m,v,i),a&&(u.start=c+s*l)):xe(u,f,d,g),x<r&&y>=r&&(l=h(u,f,d,m,v,r),w=!0),x>i&&y<=i&&(l=h(u,f,d,m,v,i),w=!0),!n&&w&&(a&&(u.end=c+s*l),t.push(u),u=ve(e)),a&&(c+=s);}var S=e.length-3;f=e[S],d=e[S+1],g=e[S+2],(y=0===o?f:d)>=r&&y<=i&&xe(u,f,d,g),S=u.length-3,n&&S>=3&&(u[S]!==u[0]||u[S+1]!==u[1])&&xe(u,u[0],u[1],u[2]),u.length&&t.push(u);}function ve(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function ye(e,t,r,i,o,n){for(var a=0;a<e.length;a++)me(e[a],t,r,i,o,n,!1);}function xe(e,t,r,i){e.push(t),e.push(r),e.push(i);}function we(e,t,r,i,o,n){var a=(n-t)/(i-t);return e.push(n),e.push(r+(o-r)*a),e.push(1),a}function Se(e,t,r,i,o,n){var a=(n-r)/(o-r);return e.push(t+(i-t)*a),e.push(n),e.push(1),a}function Me(e,t){for(var r=[],i=0;i<e.length;i++){var o,n=e[i],a=n.type;if("Point"===a||"MultiPoint"===a||"LineString"===a)o=be(n.geometry,t);else if("MultiLineString"===a||"Polygon"===a){o=[];for(var s=0;s<n.geometry.length;s++)o.push(be(n.geometry[s],t));}else if("MultiPolygon"===a)for(o=[],s=0;s<n.geometry.length;s++){for(var l=[],u=0;u<n.geometry[s].length;u++)l.push(be(n.geometry[s][u],t));o.push(l);}r.push(ae(n.id,a,o,n.tags));}return r}function be(e,t){var r=[];r.size=e.size,void 0!==e.start&&(r.start=e.start,r.end=e.end);for(var i=0;i<e.length;i+=3)r.push(e[i]+t,e[i+1],e[i+2]);return r}function ke(e,t){if(e.transformed)return e;var r,i,o,n=1<<e.z,a=e.x,s=e.y;for(r=0;r<e.features.length;r++){var l=e.features[r],u=l.geometry,h=l.type;if(l.geometry=[],1===h)for(i=0;i<u.length;i+=2)l.geometry.push(Ie(u[i],u[i+1],t,n,a,s));else for(i=0;i<u.length;i++){var c=[];for(o=0;o<u[i].length;o+=2)c.push(Ie(u[i][o],u[i][o+1],t,n,a,s));l.geometry.push(c);}}return e.transformed=!0,e}function Ie(e,t,r,i,o,n){return [Math.round(r*(e*i-o)),Math.round(r*(t*i-n))]}function _e(e,t,r,i,o){for(var n=t===o.maxZoom?0:o.tolerance/((1<<t)*o.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:i,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},s=0;s<e.length;s++){a.numFeatures++,Pe(a,e[s],n,o);var l=e[s].minX,u=e[s].minY,h=e[s].maxX,c=e[s].maxY;l<a.minX&&(a.minX=l),u<a.minY&&(a.minY=u),h>a.maxX&&(a.maxX=h),c>a.maxY&&(a.maxY=c);}return a}function Pe(e,t,r,i){var o=t.geometry,n=t.type,a=[];if("Point"===n||"MultiPoint"===n)for(var s=0;s<o.length;s+=3)a.push(o[s]),a.push(o[s+1]),e.numPoints++,e.numSimplified++;else if("LineString"===n)Te(a,o,e,r,!1,!1);else if("MultiLineString"===n||"Polygon"===n)for(s=0;s<o.length;s++)Te(a,o[s],e,r,"Polygon"===n,0===s);else if("MultiPolygon"===n)for(var l=0;l<o.length;l++){var u=o[l];for(s=0;s<u.length;s++)Te(a,u[s],e,r,!0,0===s);}if(a.length){var h=t.tags||null;if("LineString"===n&&i.lineMetrics){for(var c in h={},t.tags)h[c]=t.tags[c];h.mapbox_clip_start=o.start/o.size,h.mapbox_clip_end=o.end/o.size;}var p={geometry:a,type:"Polygon"===n||"MultiPolygon"===n?3:"LineString"===n||"MultiLineString"===n?2:1,tags:h};null!==t.id&&(p.id=t.id),e.features.push(p);}}function Te(e,t,r,i,o,n){var a=i*i;if(i>0&&t.size<(o?a:i))r.numPoints+=t.length/3;else{for(var s=[],l=0;l<t.length;l+=3)(0===i||t[l+2]>a)&&(r.numSimplified++,s.push(t[l]),s.push(t[l+1])),r.numPoints++;o&&function(e,t){for(var r=0,i=0,o=e.length,n=o-2;i<o;n=i,i+=2)r+=(e[i]-e[n])*(e[i+1]+e[n+1]);if(r>0===t)for(i=0,o=e.length;i<o/2;i+=2){var a=e[i],s=e[i+1];e[i]=e[o-2-i],e[i+1]=e[o-1-i],e[o-2-i]=a,e[o-1-i]=s;}}(s,n),e.push(s);}}function Le(e,t){var r=(t=this.options=function(e,t){for(var r in t)e[r]=t[r];return e}(Object.create(this.options),t)).debug;if(r&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var i=function(e,t){var r=[];if("FeatureCollection"===e.type)for(var i=0;i<e.features.length;i++)le(r,e.features[i],t,i);else"Feature"===e.type?le(r,e,t):le(r,{geometry:e},t);return r}(e,t);this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),(i=function(e,t){var r=t.buffer/t.extent,i=e,o=de(e,1,-1-r,r,0,-1,2,t),n=de(e,1,1-r,2+r,0,-1,2,t);return (o||n)&&(i=de(e,1,-r,1+r,0,-1,2,t)||[],o&&(i=Me(o,1).concat(i)),n&&(i=i.concat(Me(n,-1)))),i}(i,t)).length&&this.splitTile(i,0,0,0),r&&(i.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)));}function De(e,t,r){return 32*((1<<e)*r+t)+e}function Ce(e,t){var r=e.tileID.canonical;if(!this._geoJSONIndex)return t(null,null);var i=this._geoJSONIndex.getTile(r.z,r.x,r.y);if(!i)return t(null,null);var o=new k(i.features),n=L(o);0===n.byteOffset&&n.byteLength===n.buffer.byteLength||(n=new Uint8Array(n)),t(null,{vectorTile:o,rawData:n.buffer});}U.prototype.load=function(e){var t=this.options,r=t.log,i=t.minZoom,o=t.maxZoom,n=t.nodeSize;r&&console.time("total time");var a="prepare "+e.length+" points";r&&console.time(a),this.points=e;for(var s=[],l=0;l<e.length;l++)e[l].geometry&&s.push(H(e[l],l));this.trees[o+1]=new R(s,ie,oe,n,Float32Array),r&&console.timeEnd(a);for(var u=o;u>=i;u--){var h=+Date.now();s=this._cluster(s,u),this.trees[u]=new R(s,ie,oe,n,Float32Array),r&&console.log("z%d: %d clusters in %dms",u,s.length,+Date.now()-h);}return r&&console.timeEnd("total time"),this},U.prototype.getClusters=function(e,t){var r=((e[0]+180)%360+360)%360-180,i=Math.max(-90,Math.min(90,e[1])),o=180===e[2]?180:((e[2]+180)%360+360)%360-180,n=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)r=-180,o=180;else if(r>o){var a=this.getClusters([r,i,180,n],t),s=this.getClusters([-180,i,o,n],t);return a.concat(s)}for(var l=this.trees[this._limitZoom(t)],u=[],h=0,c=l.range(ee(r),te(n),ee(o),te(i));h<c.length;h+=1){var p=c[h],f=l.points[p];u.push(f.numPoints?K(f):this.points[f.index]);}return u},U.prototype.getChildren=function(e){var t=this._getOriginId(e),r=this._getOriginZoom(e),i="No cluster with the specified id.",o=this.trees[r];if(!o)throw new Error(i);var n=o.points[t];if(!n)throw new Error(i);for(var a=this.options.radius/(this.options.extent*Math.pow(2,r-1)),s=[],l=0,u=o.within(n.x,n.y,a);l<u.length;l+=1){var h=u[l],c=o.points[h];c.parentId===e&&s.push(c.numPoints?K(c):this.points[c.index]);}if(0===s.length)throw new Error(i);return s},U.prototype.getLeaves=function(e,t,r){t=t||10,r=r||0;var i=[];return this._appendLeaves(i,e,t,r,0),i},U.prototype.getTile=function(e,t,r){var i=this.trees[this._limitZoom(e)],o=Math.pow(2,e),n=this.options,a=n.extent,s=n.radius/a,l=(r-s)/o,u=(r+1+s)/o,h={features:[]};return this._addTileFeatures(i.range((t-s)/o,l,(t+1+s)/o,u),i.points,t,r,o,h),0===t&&this._addTileFeatures(i.range(1-s/o,l,1,u),i.points,o,r,o,h),t===o-1&&this._addTileFeatures(i.range(0,l,s/o,u),i.points,-1,r,o,h),h.features.length?h:null},U.prototype.getClusterExpansionZoom=function(e){for(var t=this._getOriginZoom(e)-1;t<=this.options.maxZoom;){var r=this.getChildren(e);if(t++,1!==r.length)break;e=r[0].properties.cluster_id;}return t},U.prototype._appendLeaves=function(e,t,r,i,o){for(var n=0,a=this.getChildren(t);n<a.length;n+=1){var s=a[n],l=s.properties;if(l&&l.cluster?o+l.point_count<=i?o+=l.point_count:o=this._appendLeaves(e,l.cluster_id,r,i,o):o<i?o++:e.push(s),e.length===r)break}return o},U.prototype._addTileFeatures=function(e,t,r,i,o,n){for(var a=0,s=e;a<s.length;a+=1){var l=t[s[a]],u=l.numPoints,h={type:1,geometry:[[Math.round(this.options.extent*(l.x*o-r)),Math.round(this.options.extent*(l.y*o-i))]],tags:u?Q(l):this.points[l.index].properties},c=void 0;u?c=l.id:this.options.generateId?c=l.index:this.points[l.index].id&&(c=this.points[l.index].id),void 0!==c&&(h.id=c),n.features.push(h);}},U.prototype._limitZoom=function(e){return Math.max(this.options.minZoom,Math.min(e,this.options.maxZoom+1))},U.prototype._cluster=function(e,t){for(var r=[],i=this.options,o=i.radius,n=i.extent,a=i.reduce,s=o/(n*Math.pow(2,t)),l=0;l<e.length;l++){var u=e[l];if(!(u.zoom<=t)){u.zoom=t;for(var h=this.trees[t+1],c=h.within(u.x,u.y,s),p=u.numPoints||1,f=u.x*p,d=u.y*p,g=a&&p>1?this._map(u,!0):null,m=(l<<5)+(t+1)+this.points.length,v=0,y=c;v<y.length;v+=1){var x=y[v],w=h.points[x];if(!(w.zoom<=t)){w.zoom=t;var S=w.numPoints||1;f+=w.x*S,d+=w.y*S,p+=S,w.parentId=m,a&&(g||(g=this._map(u,!0)),a(g,this._map(w)));}}1===p?r.push(u):(u.parentId=m,r.push($(f/p,d/p,m,p,g)));}}return r},U.prototype._getOriginId=function(e){return e-this.points.length>>5},U.prototype._getOriginZoom=function(e){return (e-this.points.length)%32},U.prototype._map=function(e,t){if(e.numPoints)return t?re({},e.properties):e.properties;var r=this.points[e.index].properties,i=this.options.map(r);return t&&i===r?re({},i):i},Le.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},Le.prototype.splitTile=function(e,t,r,i,o,n,a){for(var s=[e,t,r,i],l=this.options,u=l.debug;s.length;){i=s.pop(),r=s.pop(),t=s.pop(),e=s.pop();var h=1<<t,c=De(t,r,i),p=this.tiles[c];if(!p&&(u>1&&console.time("creation"),p=this.tiles[c]=_e(e,t,r,i,l),this.tileCoords.push({z:t,x:r,y:i}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,r,i,p.numFeatures,p.numPoints,p.numSimplified),console.timeEnd("creation"));var f="z"+t;this.stats[f]=(this.stats[f]||0)+1,this.total++;}if(p.source=e,o){if(t===l.maxZoom||t===o)continue;var d=1<<o-t;if(r!==Math.floor(n/d)||i!==Math.floor(a/d))continue}else if(t===l.indexMaxZoom||p.numPoints<=l.indexMaxPoints)continue;if(p.source=null,0!==e.length){u>1&&console.time("clipping");var g,m,v,y,x,w,S=.5*l.buffer/l.extent,M=.5-S,b=.5+S,k=1+S;g=m=v=y=null,x=de(e,h,r-S,r+b,0,p.minX,p.maxX,l),w=de(e,h,r+M,r+k,0,p.minX,p.maxX,l),e=null,x&&(g=de(x,h,i-S,i+b,1,p.minY,p.maxY,l),m=de(x,h,i+M,i+k,1,p.minY,p.maxY,l),x=null),w&&(v=de(w,h,i-S,i+b,1,p.minY,p.maxY,l),y=de(w,h,i+M,i+k,1,p.minY,p.maxY,l),w=null),u>1&&console.timeEnd("clipping"),s.push(g||[],t+1,2*r,2*i),s.push(m||[],t+1,2*r,2*i+1),s.push(v||[],t+1,2*r+1,2*i),s.push(y||[],t+1,2*r+1,2*i+1);}}},Le.prototype.getTile=function(e,t,r){var i=this.options,o=i.extent,n=i.debug;if(e<0||e>24)return null;var a=1<<e,s=De(e,t=(t%a+a)%a,r);if(this.tiles[s])return ke(this.tiles[s],o);n>1&&console.log("drilling down to z%d-%d-%d",e,t,r);for(var l,u=e,h=t,c=r;!l&&u>0;)u--,h=Math.floor(h/2),c=Math.floor(c/2),l=this.tiles[De(u,h,c)];return l&&l.source?(n>1&&console.log("found parent tile z%d-%d-%d",u,h,c),n>1&&console.time("drilling down"),this.splitTile(l.source,u,h,c,e,t,r),n>1&&console.timeEnd("drilling down"),this.tiles[s]?ke(this.tiles[s],o):null):null};var Oe=function(t){function r(e,r,i,o){t.call(this,e,r,i,Ce),o&&(this.loadGeoJSON=o);}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.loadData=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),this._pendingCallback=t,this._pendingLoadDataParams=e,this._state&&"Idle"!==this._state?this._state="NeedsLoadData":(this._state="Coalescing",this._loadData());},r.prototype._loadData=function(){var t=this;if(this._pendingCallback&&this._pendingLoadDataParams){var r=this._pendingCallback,i=this._pendingLoadDataParams;delete this._pendingCallback,delete this._pendingLoadDataParams;var o=!!(i&&i.request&&i.request.collectResourceTiming)&&new l.Performance(i.request);this.loadGeoJSON(i,(function(n,a){if(n||!a)return r(n);if("object"!=typeof a)return r(new Error("Input data given to '"+i.source+"' is not a valid GeoJSON object."));y(a,!0);try{t._geoJSONIndex=i.cluster?new U(function(t){var r=t.superclusterOptions,i=t.clusterProperties;if(!i||!r)return r;for(var o={},n={},a={accumulated:null,zoom:0},s={properties:null},l=Object.keys(i),u=0,h=l;u<h.length;u+=1){var c=h[u],p=i[c],f=p[0],d=p[1],g=e.createExpression(d),m=e.createExpression("string"==typeof f?[f,["accumulated"],["get",c]]:f);o[c]=g.value,n[c]=m.value;}return r.map=function(e){s.properties=e;for(var t={},r=0,i=l;r<i.length;r+=1){var n=i[r];t[n]=o[n].evaluate(a,s);}return t},r.reduce=function(e,t){s.properties=t;for(var r=0,i=l;r<i.length;r+=1){var o=i[r];a.accumulated=e[o],e[o]=n[o].evaluate(a,s);}},r}(i)).load(a.features):function(e,t){return new Le(e,t)}(a,i.geojsonVtOptions);}catch(n){return r(n)}t.loaded={};var s={};if(o){var l=o.finish();l&&(s.resourceTiming={},s.resourceTiming[i.source]=JSON.parse(JSON.stringify(l)));}r(null,s);}));}},r.prototype.coalesce=function(){"Coalescing"===this._state?this._state="Idle":"NeedsLoadData"===this._state&&(this._state="Coalescing",this._loadData());},r.prototype.reloadTile=function(e,r){var i=this.loaded,o=e.uid;return i&&i[o]?t.prototype.reloadTile.call(this,e,r):this.loadTile(e,r)},r.prototype.loadGeoJSON=function(t,r){if(t.request)e.getJSON(t.request,r);else{if("string"!=typeof t.data)return r(new Error("Input data given to '"+t.source+"' is not a valid GeoJSON object."));try{return r(null,JSON.parse(t.data))}catch(e){return r(new Error("Input data given to '"+t.source+"' is not a valid GeoJSON object."))}}},r.prototype.removeSource=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),t();},r.prototype.getClusterExpansionZoom=function(e,t){t(null,this._geoJSONIndex.getClusterExpansionZoom(e.clusterId));},r.prototype.getClusterChildren=function(e,t){t(null,this._geoJSONIndex.getChildren(e.clusterId));},r.prototype.getClusterLeaves=function(e,t){t(null,this._geoJSONIndex.getLeaves(e.clusterId,e.limit,e.offset));},r}(c);var ze=function(t){var r=this;this.self=t,this.actor=new e.Actor(t,this),this.layerIndexes={},this.availableImages={},this.workerSourceTypes={vector:c,geojson:Oe},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=function(e,t){if(r.workerSourceTypes[e])throw new Error('Worker source with name "'+e+'" already registered.');r.workerSourceTypes[e]=t;},this.self.registerRTLTextPlugin=function(t){if(e.plugin.isParsed())throw new Error("RTL text plugin already registered.");e.plugin.applyArabicShaping=t.applyArabicShaping,e.plugin.processBidirectionalText=t.processBidirectionalText,e.plugin.processStyledBidirectionalText=t.processStyledBidirectionalText;};};return ze.prototype.setReferrer=function(e,t){this.referrer=t;},ze.prototype.setImages=function(e,t,r){this.availableImages[e]=t,r();},ze.prototype.setLayers=function(e,t,r){this.getLayerIndex(e).replace(t),r();},ze.prototype.updateLayers=function(e,t,r){this.getLayerIndex(e).update(t.layers,t.removedIds),r();},ze.prototype.loadTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).loadTile(t,r);},ze.prototype.loadDEMTile=function(e,t,r){this.getDEMWorkerSource(e,t.source).loadTile(t,r);},ze.prototype.reloadTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).reloadTile(t,r);},ze.prototype.abortTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).abortTile(t,r);},ze.prototype.removeTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).removeTile(t,r);},ze.prototype.removeDEMTile=function(e,t){this.getDEMWorkerSource(e,t.source).removeTile(t);},ze.prototype.removeSource=function(e,t,r){if(this.workerSources[e]&&this.workerSources[e][t.type]&&this.workerSources[e][t.type][t.source]){var i=this.workerSources[e][t.type][t.source];delete this.workerSources[e][t.type][t.source],void 0!==i.removeSource?i.removeSource(t,r):r();}},ze.prototype.loadWorkerSource=function(e,t,r){try{this.self.importScripts(t.url),r();}catch(e){r(e.toString());}},ze.prototype.syncRTLPluginState=function(t,r,i){try{e.plugin.setState(r);var o=e.plugin.getPluginURL();if(e.plugin.isLoaded()&&!e.plugin.isParsed()&&null!=o){this.self.importScripts(o);var n=e.plugin.isParsed();i(n?void 0:new Error("RTL Text Plugin failed to import scripts from "+o),n);}}catch(e){i(e.toString());}},ze.prototype.getAvailableImages=function(e){var t=this.availableImages[e];return t||(t=[]),t},ze.prototype.getLayerIndex=function(e){var t=this.layerIndexes[e];return t||(t=this.layerIndexes[e]=new i),t},ze.prototype.getWorkerSource=function(e,t,r){var i=this;if(this.workerSources[e]||(this.workerSources[e]={}),this.workerSources[e][t]||(this.workerSources[e][t]={}),!this.workerSources[e][t][r]){var o={send:function(t,r,o){i.actor.send(t,r,o,e);}};this.workerSources[e][t][r]=new this.workerSourceTypes[t](o,this.getLayerIndex(e),this.getAvailableImages(e));}return this.workerSources[e][t][r]},ze.prototype.getDEMWorkerSource=function(e,t){return this.demWorkerSources[e]||(this.demWorkerSources[e]={}),this.demWorkerSources[e][t]||(this.demWorkerSources[e][t]=new p),this.demWorkerSources[e][t]},ze.prototype.enforceCacheSizeLimit=function(t,r){e.enforceCacheSizeLimit(r);},"undefined"!=typeof WorkerGlobalScope&&void 0!==e.window&&e.window instanceof WorkerGlobalScope&&(e.window.worker=new ze(e.window)),ze}));


//

return mapboxgl;

})));
//# sourceMappingURL=mapbox-gl.js.map


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/stimulus/index.js":
/*!****************************************!*\
  !*** ./node_modules/stimulus/index.js ***!
  \****************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/core */ "./node_modules/@stimulus/core/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });



/***/ }),

/***/ "./node_modules/stimulus/webpack-helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/webpack-helpers */ "./node_modules/@stimulus/webpack-helpers/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["identifierForContextKey"]; });



/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-3fd5677e2d9024c3cda9.js.map