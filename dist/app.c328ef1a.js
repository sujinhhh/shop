// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// varibles
var cartBtn = document.querySelector(".cart-btn");
var closeCartBtn = document.querySelector(".close-cart");
var clearCartBtn = document.querySelector(".clear-cart");
var cartDOM = document.querySelector(".cart");
var cartOverlay = document.querySelector(".cart-overlay");
var cartItems = document.querySelector(".cart-items");
var cartTotal = document.querySelector(".cart-total");
var cartContent = document.querySelector(".cart-content");
var productsDOM = document.querySelector(".products-center");
var cart = [];
var buttonsDOM = []; // getting the products

var Products = /*#__PURE__*/function () {
  function Products() {
    _classCallCheck(this, Products);
  }

  _createClass(Products, [{
    key: "getProducts",
    value: function () {
      var _getProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result, data, products;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("products.json");

              case 3:
                result = _context.sent;
                _context.next = 6;
                return result.json();

              case 6:
                data = _context.sent;
                products = data.items;
                products = products.map(function (item) {
                  var _item$fields = item.fields,
                      title = _item$fields.title,
                      price = _item$fields.price;
                  var id = item.sys.id;
                  var image = item.fields.image.fields.file.url;
                  return {
                    title: title,
                    price: price,
                    id: id,
                    image: image
                  };
                });
                return _context.abrupt("return", products);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      function getProducts() {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }]);

  return Products;
}(); // display products


var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, [{
    key: "displayProdcts",
    value: function displayProdcts(products) {
      var result = "";
      products.forEach(function (product) {
        result += "\n      \n        <article class=\"product\">\n          <div class=\"img-container\">\n            <img\n              src=".concat(product.image, "\n              alt=\"product\"\n              class=\"product-img\"\n            />\n            <button class=\"bag-btn\" data-id=").concat(product.id, ">\n              <i class=\"fas fa-shopping-cart\">\n                add to cart\n              </i>\n            </button>\n          </div>\n          <h3>").concat(product.title, "</h3>\n          <h4>$").concat(product.price, "</h4>\n        </article>\n       \n        ");
      });
      productsDOM.innerHTML = result;
    }
  }, {
    key: "getBagButtons",
    value: function getBagButtons() {
      var _this = this;

      var buttons = _toConsumableArray(document.querySelectorAll(".bag-btn"));

      buttonsDOM = buttons;
      buttons.forEach(function (button) {
        var id = button.dataset.id;
        var inCart = cart.find(function (item) {
          return item.id === id;
        });

        if (inCart) {
          button.innerText = "In cart";
          button.disabled = true;
        }

        button.addEventListener("click", function (e) {
          e.target.innerText = "In Cart->"; // e.target.disabled = true;

          e.target.disabled = true; // get product from products

          var cartItem = _objectSpread(_objectSpread({}, Storage.getProduct(id)), {}, {
            amount: 1
          }); //  add product to the cart


          cart = [].concat(_toConsumableArray(cart), [cartItem]); // save cart in local storage

          Storage.saveCart(cart); // set cart values

          _this.setCardValues(cart); // display cart item


          _this.addCartItem(cartItem); // show the cart


          _this.showCart();
        });
      });
    }
  }, {
    key: "setCardValues",
    value: function setCardValues(cart) {
      var tempTotal = 0;
      var itemTotal = 0;
      cart.map(function (item) {
        tempTotal += item.price * item.amount;
        itemTotal += item.amount;
      });
      cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
      cartItems.innerText = itemTotal;
    }
  }, {
    key: "addCartItem",
    value: function addCartItem(item) {
      var div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = " <img src=".concat(item.image, " />\n    <div>\n      <h4>").concat(item.title, "</h4>\n      <h5>$").concat(item.price, "</h5>\n      <span class=\"remove-item\" data-id=").concat(item.id, ">remove</span>\n    </div>\n    <div>\n      <i class=\"fas fa-chevron-up\" data-id=").concat(item.id, "></i>\n      <p class=\"item-amount\">").concat(item.amount, "</p>\n      <i class=\"fas fa-chevron-down\" data-id=").concat(item.id, "></i>\n    </div>");
      cartContent.appendChild(div);
    }
  }, {
    key: "showCart",
    value: function showCart() {
      cartOverlay.classList.add("transparentBcg");
      cartDOM.classList.add("showCart");
    }
  }, {
    key: "setupAPP",
    value: function setupAPP() {
      cart = Storage.getCart();
      this.setCardValues(cart);
      this.populateCart(cart);
      cartBtn.addEventListener("click", this.showCart);
      closeCartBtn.addEventListener("click", this.hideCart);
    }
  }, {
    key: "populateCart",
    value: function populateCart(cart) {
      var _this2 = this;

      cart.forEach(function (item) {
        return _this2.addCartItem(item);
      });
    }
  }, {
    key: "hideCart",
    value: function hideCart() {
      cartOverlay.classList.remove("transparentBcg");
      cartDOM.classList.remove("showCart");
    }
  }, {
    key: "cartLogic",
    value: function cartLogic() {
      var _this3 = this;

      // clear cart
      clearCartBtn.addEventListener("click", function () {
        return _this3.clearCart();
      }); // cart funtionality

      cartContent.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-item")) {
          var removeItem = e.target;
          var id = removeItem.dataset.id;
          cartContent.removeChild(removeItem.parentElement.parentElement);

          _this3.removeItem(id);
        } else if (e.target.classList.contains("fa-chevron-up")) {
          var addAmount = e.target;
          var _id = addAmount.dataset.id;
          var tempItem = cart.find(function (item) {
            return item.id === _id;
          });
          tempItem.amount = tempItem.amount + 1;
          Storage.saveCart(cart);

          _this3.setCardValues(cart);

          addAmount.nextElementSibling.innerText = tempItem.amount;
        } else if (e.target.classList.contains("fa-chevron-down")) {
          var lowerAmount = e.target;
          var _id2 = lowerAmount.dataset.id;

          var _tempItem = cart.find(function (item) {
            return item.id === _id2;
          });

          _tempItem.amount = _tempItem.amount - 1;

          if (_tempItem.amount > 0) {
            Storage.saveCart(cart);

            _this3.setCardValues(cart);

            lowerAmount.previousElementSibling.innerText = _tempItem.amount;
          } else {
            cartContent.removeChild(lowerAmount.parentElement.parentElement);

            _this3.removeItem(_id2);

            _this3.hideCart();
          }
        }
      });
    }
  }, {
    key: "clearCart",
    value: function clearCart() {
      var _this4 = this;

      var cartItems = cart.map(function (item) {
        return item.id;
      });
      cartItems.forEach(function (id) {
        return _this4.removeItem(id);
      });

      while (cartContent.children.length > 0) {
        cartContent.removeChild(cartContent.children[0]);
      }

      this.hideCart();
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      cart = cart.filter(function (item) {
        return item.id !== id;
      });
      this.setCardValues(cart);
      Storage.saveCart(cart);
      var button = this.getSingleButton(id);
      button.disabled = false;
      button.innerHTML = "<i class=\"fas fa-shopping-cart\"><i/>add to cart";
    }
  }, {
    key: "getSingleButton",
    value: function getSingleButton(id) {
      return buttonsDOM.find(function (button) {
        return button.dataset.id === id;
      });
    }
  }]);

  return UI;
}(); // local storage


var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, null, [{
    key: "saveProducts",
    value: function saveProducts(products) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, {
    key: "getProduct",
    value: function getProduct(id) {
      var products = JSON.parse(localStorage.getItem("products"));
      return products.find(function (product) {
        return product.id === id;
      });
    }
  }, {
    key: "saveCart",
    value: function saveCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, {
    key: "getCart",
    value: function getCart() {
      return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    }
  }]);

  return Storage;
}();

document.addEventListener("DOMContentLoaded", function () {
  var ui = new UI();
  var products = new Products(); // setUp app

  ui.setupAPP(); //   get all products

  products.getProducts().then(function (products) {
    ui.displayProdcts(products);
    Storage.saveProducts(products);
  }).then(function () {
    ui.getBagButtons();
    ui.cartLogic();
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53333" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map