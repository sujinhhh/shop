parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function e(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach(function(t){n(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){return c(t)||i(t)||o(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function i(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function c(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,a)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(t){s(o,r,a,i,c,"next",t)}function c(t){s(o,r,a,i,c,"throw",t)}i(void 0)})}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}var m=document.querySelector(".cart-btn"),p=document.querySelector(".close-cart"),g=document.querySelector(".clear-cart"),h=document.querySelector(".cart"),y=document.querySelector(".cart-overlay"),b=document.querySelector(".cart-items"),C=document.querySelector(".cart-total"),S=document.querySelector(".cart-content"),w=document.querySelector(".products-center"),O=[],k=[],P=function(){function t(){d(this,t)}return v(t,[{key:"getProducts",value:function(){var t=l(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("products.json");case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,r=(r=n.items).map(function(t){var e=t.fields;return{title:e.title,price:e.price,id:t.sys.id,image:t.fields.image.fields.file.url}}),t.abrupt("return",r);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}},t,null,[[0,12]])}));return function(){return t.apply(this,arguments)}}()}]),t}(),E=function(){function t(){d(this,t)}return v(t,[{key:"displayProdcts",value:function(t){var e="";t.forEach(function(t){e+='\n      \n        <article class="product">\n          <div class="img-container">\n            <img\n              src='.concat(t.image,'\n              alt="product"\n              class="product-img"\n            />\n            <button class="bag-btn" data-id=').concat(t.id,'>\n              <i class="fas fa-shopping-cart">\n                add to cart\n              </i>\n            </button>\n          </div>\n          <h3>').concat(t.title,"</h3>\n          <h4>$").concat(t.price,"</h4>\n        </article>\n       \n        ")}),w.innerHTML=e}},{key:"getBagButtons",value:function(){var t=this,n=r(document.querySelectorAll(".bag-btn"));k=n,n.forEach(function(n){var a=n.dataset.id;O.find(function(t){return t.id===a})&&(n.innerText="In cart",n.disabled=!0),n.addEventListener("click",function(n){n.target.innerText="In Cart",n.target.disabled=!0;var o=e(e({},L.getProduct(a)),{},{amount:1});console.log(o),O=[].concat(r(O),[o]),L.saveCart(O),t.setCardValues(O),t.addCartItem(o),t.showCart()})})}},{key:"setCardValues",value:function(t){var e=0,n=0;t.map(function(t){e+=t.price*t.amount,n+=t.amount}),C.innerText=parseFloat(e.toFixed(2)),b.innerText=n}},{key:"addCartItem",value:function(t){var e=document.createElement("div");e.classList.add("cart-item"),e.innerHTML=" <img src=".concat(t.image," />\n    <div>\n      <h4>").concat(t.title,"</h4>\n      <h5>$").concat(t.price,'</h5>\n      <span class="remove-item" data-id=').concat(t.id,'>remove</span>\n    </div>\n    <div>\n      <i class="fas fa-chevron-up" data-id=').concat(t.id,'></i>\n      <p class="item-amount">').concat(t.amount,'</p>\n      <i class="fas fa-chevron-down" data-id=').concat(t.id,"></i>\n    </div>"),S.appendChild(e)}},{key:"showCart",value:function(){y.classList.add("transparentBcg"),h.classList.add("showCart")}},{key:"setupAPP",value:function(){O=L.getCart(),this.setCardValues(O),this.populateCart(O),m.addEventListener("click",this.showCart),p.addEventListener("click",this.hideCart)}},{key:"populateCart",value:function(t){var e=this;t.forEach(function(t){return e.addCartItem(t)})}},{key:"hideCart",value:function(){y.classList.remove("transparentBcg"),h.classList.remove("showCart")}},{key:"cartLogic",value:function(){var t=this;g.addEventListener("click",function(){return t.clearCart()}),S.addEventListener("click",function(e){if(e.target.classList.contains("remove-item")){var n=e.target,r=n.dataset.id;S.removeChild(n.parentElement.parentElement),t.removeItem(r)}else if(e.target.classList.contains("fa-chevron-up")){var a=e.target,o=a.dataset.id,i=O.find(function(t){return t.id===o});i.amount=i.amount+1,L.saveCart(O),t.setCardValues(O),a.nextElementSibling.innerText=i.amount}else if(e.target.classList.contains("fa-chevron-down")){var c=e.target,u=c.dataset.id,s=O.find(function(t){return t.id===u});s.amount=s.amount-1,s.amount>0?(L.saveCart(O),t.setCardValues(O),c.previousElementSibling.innerText=s.amount):(S.removeChild(c.parentElement.parentElement),t.removeItem(u),t.hideCart())}})}},{key:"clearCart",value:function(){var t=this;for(O.map(function(t){return t.id}).forEach(function(e){return t.removeItem(e)});S.children.length>0;)S.removeChild(S.children[0]);this.hideCart()}},{key:"removeItem",value:function(t){O=O.filter(function(e){return e.id!==t}),this.setCardValues(O),L.saveCart(O);var e=this.getSingleButton(t);e.disabled=!1,e.innerHTML='<i class="fas fa-shopping-cart"></i>add to cart'}},{key:"getSingleButton",value:function(t){return k.find(function(e){return e.dataset.id===t})}}]),t}(),L=function(){function t(){d(this,t)}return v(t,null,[{key:"saveProducts",value:function(t){localStorage.setItem("products",JSON.stringify(t))}},{key:"getProduct",value:function(t){return JSON.parse(localStorage.getItem("products")).find(function(e){return e.id===t})}},{key:"saveCart",value:function(t){localStorage.setItem("cart",JSON.stringify(t))}},{key:"getCart",value:function(){return localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}}]),t}();document.addEventListener("DOMContentLoaded",function(){var t=new E,e=new P;t.setupAPP(),e.getProducts().then(function(e){t.displayProdcts(e),L.saveProducts(e)}).then(function(){t.getBagButtons(),t.cartLogic()})});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.251befdd.js.map