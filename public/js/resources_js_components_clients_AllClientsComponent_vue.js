(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_clients_AllClientsComponent_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/alga-js/dist/alga.min.js":
/*!***********************************************!*\
  !*** ./node_modules/alga-js/dist/alga.min.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$array": () => (/* binding */ z),
/* harmony export */   "$char": () => (/* binding */ d),
/* harmony export */   "$date": () => (/* binding */ we),
/* harmony export */   "$file": () => (/* binding */ de),
/* harmony export */   "$int": () => (/* binding */ e),
/* harmony export */   "$number": () => (/* binding */ w),
/* harmony export */   "$object": () => (/* binding */ $),
/* harmony export */   "$string": () => (/* binding */ v),
/* harmony export */   "array": () => (/* binding */ z),
/* harmony export */   "char": () => (/* binding */ d),
/* harmony export */   "date": () => (/* binding */ we),
/* harmony export */   "file": () => (/* binding */ de),
/* harmony export */   "func": () => (/* binding */ Ee),
/* harmony export */   "int": () => (/* binding */ e),
/* harmony export */   "number": () => (/* binding */ w),
/* harmony export */   "object": () => (/* binding */ $),
/* harmony export */   "storage": () => (/* binding */ Ne),
/* harmony export */   "string": () => (/* binding */ v)
/* harmony export */ });
var e=Object.freeze({__proto__:null,random:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:255,r=Number(e)+1;return Math.floor(Math.random()*r)}}),r=function(e){return!isNaN(e)&&"number"==typeof Number(e)},t=function(e){if("number"!=typeof e&&"string"!=typeof e)throw new Error("You must input only number format here");return 1===Math.sign(e)},n=function(e){if("number"!=typeof e&&"string"!=typeof e)throw new Error("You must input only number format here");return-1===Math.sign(e)},o=function(e){return"string"==typeof e};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return t}(e,r)||c(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function m(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=c(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw a}}}}var g=function(e){return"object"===a(e)&&null!==e&&"[object Object]"===Object.prototype.toString.call(e)},w=Object.freeze({__proto__:null,random:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;if("number"!=typeof e&&e<=0)throw new Error("You have to add a number at least 1");for(var r="",t="0123456789",n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return r},loop:function(e,r){if("number"!=typeof e&e<=-1)throw new Error("Only accept number here, start from 0");if("number"!=typeof r&r<=0)throw new Error("Only accept number here, start from 1");for(var t=[];e<=r;)t.push(e++);return t},isNumber:r,isPositive:t,isNegative:n,calc:function(e,t,n){if(!r(e))throw new Error("This is left operand and must be in number type");if(!r(t))throw new Error("This is left operand and must be in number type");if(!o(n))throw new Error("Operator must be one of these: add, subtract, multiply, divide, reminder or exponent");var a=0;return"add"===n||"addition"===n||"plus"===n||"+"===n?a=Number(e)+Number(t):"subtract"===n||"subtraction"===n||"minus"===n||"-"===n?a=Number(e)-Number(t):"multiply"===n||"multiplication"===n||"??"===n||"*"===n?a=Number(e)*Number(t):"divide"===n||"division"===n||"??"===n||"/"===n?a=Number(e)/Number(t):"remainder"===n||"modulo"===n||"%"===n?a=Number(e)%Number(t):"exponent"!==n&&"exponentiation"!==n&&"**"!==n||(a=Math.pow(Number(e),Number(t))),a},currency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!r(e))throw new Error("Amount must be in a number type");if(!o(t)&&3===t.length)throw new Error("Currency code must have at least 3 uppercase character");if(!o(n))throw new Error("Locale code must contain 2 languages and 2 country code and separated by dash (-)");if(!g(a))throw new Error("Currency options must be in object type");return new Intl.NumberFormat(n,l({style:"currency",currency:t.toUpperCase()},a)).format(e)}}),d=Object.freeze({__proto__:null,random:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:11,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long",t="",n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?";"short"===r||"alphadash"===r?n=n.slice(0,64):"narrow"===r||"alphanumeric"===r?n=n.slice(0,62):"alpha"===r?n=n.slice(10,62):"hex"===r?n=n.slice(0,16):"number"!==r&&"numeric"!==r||(n=n.slice(0,10));for(var o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}}),v=Object.freeze({__proto__:null,split:function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];return"string"==typeof e&&(r>=1&&n.push(e.slice(0,r)),null!==t?(n.push(e.slice(r,t)),n.push(e.slice(t))):n.push(e.slice(r))),n}},capitalize:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"single";if("string"==typeof e){var t=e;return t="multiple"===r?t.toLowerCase().replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))})):t.trimStart().replace(/^\w/,(function(e){return e.toUpperCase()}))}},includes:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return-1!==e.indexOf(r,t)},isString:o}),y=function(e){return!("object"!==a(e)||null===e||!Array.isArray(e))},p=function(e){if(!y(e))throw new Error("On the first argument must be in array type");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];if(t.length<1)throw new Error("On the next arguments, you have to provide at least one argument");var o=Array.from(e);return o.unshift.apply(o,t),o},b=function(e){if(!y(e))throw new Error("On the first argument must be in array type");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];if(t.length<1)throw new Error("On the next arguments, you have to provide at least one argument");var o=Array.from(e);return o.push.apply(o,t),o},N=function(e,t){if(!y(e))throw new Error("On the first argument, here only accept array type");if(!r(t))throw new Error("On the second argument, accept only numeric or number type");for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];if(o.length<1)throw new Error("On the next arguments, you have to enter at least one value");var i=Array.from(e),u=isNaN(t)?1:t;return i.splice.apply(i,[Number(u)-1,0].concat(o)),i},E=function(e,t){if(!y(e))throw new Error("On the first argument, here only accept array type");if(!r(t))throw new Error("On the second argument, accept only numeric or number type");for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];if(o.length<1)throw new Error("On the next arguments, you have to enter at least one value");var i=Array.from(e),u=isNaN(t)?0:t;return i.splice.apply(i,[Number(u)+1,0].concat(o)),i},D=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{key:"id",value:0};if(!y(e))throw new Error("You must enter the first argument in array only");var t=Array.from(e),n=-1;return"key"in r&&"value"in r?n=t.length>=1?t.findIndex((function(e){return e[r.key]===r.value})):-1:t.length>=1&&(n=t.findIndex((function(e){for(var t=0,n=Object.entries(r);t<n.length;t++){var o=f(n[t],2),a=o[0],i=o[1];if(a in e&&e[a]===i)return!0}}))),n},A=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dense";if(!y(e))throw new Error("You must enter the first argument in array only");return"sparse"===r?Object.keys(e).map((function(e){return Number(e)})):h(e.keys())},Y=function(e){if(!y(e))throw new Error("You must enter the argument in array only");var r=A(e);return Number(r[Math.floor(Math.random()*r.length)])},O=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r){for(var n={},o=0,a=r;o<a.length;o++)for(var i=a[o],u=0,l=Object.entries(i);u<l.length;u++){var h=f(l[u],2),c=h[0],s=h[1];n[c]=s}return n}},S=function(e){if(!y(e))throw new Error("Please provide array that you want to remove its element");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];if(t.length<1)throw new Error("On the last of argument, you have to enter at least one argument");for(var o=Array.from(e),i=[],u=function(){var e=f[l];if("string"==typeof e&&"first"===e)o=o.map((function(e,r){return 0===r?null:e})),i=o;else if("string"==typeof e&&"last"===e)o=o.map((function(e,r){return r===o.length-1?null:e})),i=o;else if("number"==typeof e)o=o.map((function(r,t){return t===e?null:r})),i=o;else if("object"===a(e)&&null!==e){var r=D(o,e);o=o.map((function(e,t){return t===r?null:e})),i=o}},l=0,f=t;l<f.length;l++)u();return i.filter((function(e){return null!==e}))},j=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(!y(e))throw new Error("");var t=Array.from(e),n=[];if("string"==typeof r){var o,a=new Set,i=m(t);try{for(i.s();!(o=i.n()).done;){var u=o.value;a.has(u[r])||a.add(u[r])}}catch(e){i.e(e)}finally{i.f()}n=h(a)}else n=Array.from(new Set(t));return n},M=function(e){if(!g(e))throw new Error("This is object helper, you must provide the first argument in an object");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];if(t.length<1)throw new Error("The next arguments must be in a string or in a number and at least one argument");for(var o={},a=new Set(t),i=0,u=Object.entries(e);i<u.length;i++){var l=f(u[i],1),h=l[0];a.has(e[h])||(o[h]=e[h])}return o},x=function(e,t){if(!y(e))throw new Error("The first argument must be in array of objects");if(!g(t))throw new Error("The second argument must be in object type and must have at least one property");for(var n=Array.from(e),a=function(){var e=f(u[i],2),t=e[0],a=e[1],l=n.filter((function(e){if(t in e){if(r(e[t])&&Number(e[t])===Number(a))return!0;if(o(e[t])&&e[t].toLowerCase().includes(a.toLowerCase()))return!0}return!1}));n=l},i=0,u=Object.entries(M(t,"",0));i<u.length;i++)a();return n},T=function(e){return"function"==typeof e},C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc";if(!y(e))throw new Error("Only array of objects accepted");if(!o(t))throw new Error("The second argument must be in a string and a value must be object property key or name");if(!o(n))throw new Error('The third argument must be in a string and a value either "", "asc" or "desc"');var a=Array.from(e);return"asc"===n?a.sort((function(e,n){if(t in e&&t in n){if(r(e[t])&&r(n[t]))return Number(e[t])-Number(n[t]);if(o(e[t])&&o(n[t])){var a=e[t].toLowerCase(),i=n[t].toLowerCase(),u=0;return a<i?u=-1:a>i&&(u=1),u}}})):"desc"===n&&a.sort((function(e,n){if(t in e&&t in n){if(r(e[t])&&r(n[t]))return Number(n[t])-Number(e[t]);if(o(e[t])&&o(n[t])){var a=e[t].toLowerCase(),i=n[t].toLowerCase(),u=0;return i<a?u=-1:i>a&&(u=1),u}}})),a},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;if(!y(e))throw new Error("On the first argument, here only accept array");if(!r(t))throw new Error("This is the page active number, please enter number only");if(!r(n))throw new Error("This is the limit of entries in one page in a number, please enter number only");var o=Array.from(e),a=Number(n)*Number(t)-(Number(n)-1),i=Number(n)*Number(t);return{from:o.length>=1?a:0,start:o.length>=1?a:0,to:i<=o.length?i:o.length,end:i<=o.length?i:o.length,of:o.length,length:o.length}},B=function(e){if(!y(e))throw new Error("This argument only accept array");var r,t={},n=new Set,o=m(new Set(e));try{var a=function(){var o=r.value,a=Array.from(e).filter((function(e){return e===o}));n.has(a.length)||(n.add(a.length),t[a.length]=[]),a.forEach((function(e){t[a.length].push(e)}))};for(o.s();!(r=o.n()).done;)a()}catch(e){o.e(e)}finally{o.f()}return t},I=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=1)throw new Error("You have to provide here at least 2 arguments");var n=[],o={};r.forEach((function(e,r){if(y(e)?o[r]=new Set(e):o[r]=(new Set).add(e),0!==r){var t,a=m(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;o[r-1].has(i)&&n.push(i)}}catch(e){a.e(e)}finally{a.f()}}}));var a=B(n);return Array.from(new Set(a[r.length-1]))},_=function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];if(!y(e)&&e.length<=0)throw new Error("You need to provide more values to your array");if(!t&&t.length<=0)throw new Error("You have to provide here at least 1 value");var o,a=[],i=m(e);try{for(i.s();!(o=i.n()).done;){var u=o.value;t.flat().includes(u)||a.push(u)}}catch(e){i.e(e)}finally{i.f()}return a},L=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length<2&&!y(r[0])&&!y(r[1])&&Number(r[0].length)!==Number(r[1].length))throw new Error("You have to provide at least 2 arguments, both in arrays with the same length");for(var n=Array.from(r[0]).map((function(e){return[]})),o=0,a=r;o<a.length;o++){var i=a[o];i.forEach((function(e,r){r in n&&n[r].push(e)}))}return n},P=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length<2)throw new Error("You have to provide at least 2 arguments, both in arrays with the same length");for(var n=Array.from(r),o=[],a=n.shift(),i=function(){var e=l[u],r=new Map;e.forEach((function(e,t){a[t]&&r.set(a[t],e)})),o.push(Object.fromEntries(r))},u=0,l=n;u<l.length;u++)i();return o},U=function(){if(0===arguments.length||arguments.length>=4)throw new Error("Here only accept 3 arguments, so you have to provide at least 1 argument");var e=1===arguments.length?0:Number(arguments.length<=0?void 0:arguments[0]),r=Number(arguments.length>=2?arguments.length<=1?void 0:arguments[1]:arguments.length<=0?void 0:arguments[0]),o=3===arguments.length?Number(arguments.length<=2?void 0:arguments[2]):1;arguments.length<3&&n(r)&&(o=-1);var a=[],i=0,u=0;if(n(e)&&t(r)?i=e-1:t(e)&&n(r)?i=e+1:t(e)&&t(r)?i=e-1:n(e)&&n(r)&&(i=e+1),i<r){for(;i<r;)i++,o>1?(u+=o)<r&&a.push(u):i<r&&a.push(i);0!==e||a.includes(0)||a.unshift(0)}else if(i>r){for(;i>r;)i--,o<-1?(u-=o)>r&&a.unshift(u):i>r&&a.unshift(i);0!==e||a.includes(0)||a.push(0)}return 1===a.length&&0===a[0]?[]:a},F=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(0===r.length)throw new Error("Accept index of array elements only and you add at least one index in number");return function(e){if(!y(e))throw new Error("Please enter array only here");for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(0===n.length&&n.length!==r.length&&0!==I(r,n).length)throw new Error("Only accept index of array elements and the number of the first indexes must be the same as the second indexes and also, both indexes must be different");for(var a=Array.from(e),i=Array.from(e),u=0;u<r.length;u++)void 0!==r[u]&&void 0!==n[u]&&(i.splice(r[u],1,a[n[u]]),i.splice(n[u],1,a[r[u]]));return i}},H=function(e,r,t){if(!y(e))throw new Error("On the first argument, you have to provide array only");if(!o(r))throw new Error("New property must be in string type");if(!T(t))throw new Error("Callback must be in function or method");return Array.from(e).map((function(e){return e[r]=t.apply(void 0,h(Object.values(e).filter((function(e){return!1===isNaN(e)})))),e}))},z=Object.freeze({__proto__:null,insert:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{position:null,index:null};if(!y(e))throw new Error("On the first argument, only array accept here");if(!g(r))throw new Error("On the second argument, only object with 2 properties (position and index property) accepted");for(var t=arguments.length,n=new Array(t>2?t-2:0),o=2;o<t;o++)n[o-2]=arguments[o];if(n.length<1)throw new Error("On the third or the next arguments, you have to enter at least one argument");var a=[];return"first"===r.position?a=p.apply(void 0,[e].concat(n)):"last"===r.position?a=b.apply(void 0,[e].concat(n)):"before"===r.position?a=N.apply(void 0,[e,r.index].concat(n)):"after"===r.position&&(a=E.apply(void 0,[e,r.index].concat(n))),a},insertFirst:p,insertLast:b,insertBefore:N,insertAfter:E,update:function(e,t,n){if(!y(e))throw new Error("You have to enter array only on the first argument");if(!g(t))throw new Error("You must enter object only here on the second argument");if(!g(n)&&!r(n))throw new Error("You must enter object only on the second argument");var o=Array.from(e),a=g(n)?D(o,n):Number(n);return o.map((function(e,r){var n=e;return r===a&&(n=O(e,t)),n}))},updateBy:function(e,r,t){if(!y(e))throw new Error("You have to enter array only on the first argument");if(!g(r))throw new Error("You must enter object only here on the second argument");if(!y(t))throw new Error("You must enter array of objects or numbers on the second argument");var n=Array.from(e);return n.map((function(e,o){var a,i=e,u=m(t);try{for(u.s();!(a=u.n()).done;){var l=a.value;o===(g(l)?D(n,l):Number(l))&&(i=O(e,r))}}catch(e){u.e(e)}finally{u.f()}return i}))},destroy:S,select:function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];if(!y(e))throw new Error("On the first argument, you have to provide array only");if(t.length<1)throw new Error("On the second argument, you must enter at least one value");var o=Array.from(e);return o.map((function(e){var r,n={},o=m(t);try{for(o.s();!(r=o.n()).done;){var a=r.value;a in e&&(n[a]=e[a])}}catch(e){o.e(e)}finally{o.f()}return n}))},hidden:function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];if(!y(e))throw new Error("On the first argument, you have to provide array only");if(t.length<1)throw new Error("On the second argument, you must enter at least one value");var o=Array.from(e);return o.map((function(e){var r,n=e,o=m(t);try{for(o.s();!(r=o.n()).done;){var a=r.value;a in e&&delete n[a]}}catch(e){o.e(e)}finally{o.f()}return n}))},toggle:function(e){return function(r){var t=Array.from(r);if(t.includes(e)){var n=t.findIndex((function(r){return r===e}));t.splice(n,1)}else t.push(e);return t}},flatten:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],n={};n.id=r.id||"id",n.parent=r.parent||"parent",n.children=r.children||"children";var o=function(){Array.from(e).forEach((function(e){if("object"===a(e)&&null!==e){var r=e;r[n.parent]="0","object"===a(r[n.children])&&Array.isArray(r[n.children])&&(i(r[n.children],e),delete r[n.children]),t.push(r)}}))},i=function e(r,o){r.length>=1&&Array.from(r).forEach((function(r){if("object"===a(r)&&null!==r){var i=r;i[n.parent]=o[n.id],"object"===a(i[n.children])&&Array.isArray(i[n.children])&&(e(i[n.children],r),delete i[n.children]),t.push(i)}}))};return o(),t},nested:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],n=Array.from(e),o={};o.id=r.id||"id",o.parent=r.parent||"parent",o.children=r.children||"children";var i=function(e){e.forEach((function(e){if("object"===a(e)&&null!==e){var r=null;("string"==typeof e[o.parent]&&"0"===e[o.parent]||"number"==typeof e[o.parent]&&0===e[o.parent])&&(r=u(e)),null!==r&&t.push(r)}}))},u=function(e){var r=e;return void 0!==e[o.children]&&null!==e[o.children]||(r[o.children]=l(e[o.id]),r[o.children].length<=0&&delete r[o.children]),delete r[o.parent],r},l=function(e){var r=[];return f(e).length>=1&&f(e).forEach((function(e){r.push(u(e))})),r},f=function(e){return n.filter((function(r){return r.parent===e}))};return i(n),t},index:D,toIndex:A,randomIndex:Y,search:function(e){if(!y)throw new Error("The first argument must be in array");for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(n.length<1)throw new Error("On the next arguments, you must provide at least one argument in either string or number");for(var i=[],u=function(){var t=h[l],n=Array.from(e).filter((function(e){if(r(e)&&Number(e)===Number(t))return!0;if(o(e)&&e.toLowerCase().includes(t.toLowerCase()))return!0;if(g(e))for(var n=0,a=Object.entries(e);n<a.length;n++){var i=f(a[n],2),u=i[0],l=i[1];if(r(e[u])&&Number(l)===Number(t))return!0;if(o(e[u])&&l.toLowerCase().includes(t.toLowerCase()))return!0}return!1}));i=j(i.concat(n))},l=0,h=n;l<h.length;l++)u();return i},searchBy:function(e,t,n){if(!y(e))throw new Error("The first argument must be in array of objects and it is needed in order to be searched");if(!y(t)&&t.length<1)throw new Error("The second argument must have at least one argument either in a string or in a number");if(!y(n)&&n.length<1)throw new Error("The last argument required at least one argument either in a string or in a number");var a,i=[],u=m(t);try{var l=function(){var t=a.value,u=Array.from(e).filter((function(e){for(var a=0,i=Array.from(n);a<i.length;a++){var u=i[a];if(u in e){if(r(e[u])&&Number(e[u])===Number(t))return!0;if(o(e[u])&&-1!==e[u].toLowerCase().indexOf(t.toLowerCase()))return!0}}return!1}));i=j(i.concat(u))};for(u.s();!(a=u.n()).done;)l()}catch(e){u.e(e)}finally{u.f()}return i},filter:x,filtered:x,sort:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";if(!y(e))throw new Error("Only array of strings or numbers accepted");if(!o(t))throw new Error('The second argument must be in a string and a value either "", "asc" or "desc"');var n=Array.from(e);return"asc"===t?n.sort((function(e,t){if(r(e)&&r(t))return Number(e)-Number(t);if(o(e)&&o(t)){var n=e.toLowerCase(),a=t.toLowerCase(),i=0;return n<a?i=-1:n>a&&(i=1),i}})):"desc"===t&&n.sort((function(e,t){if(r(e)&&r(t))return Number(t)-Number(e);if(o(e)&&o(t)){var n=e.toLowerCase(),a=t.toLowerCase(),i=0;return a<n?i=-1:a>n&&(i=1),i}})),n},sortBy:C,sorted:C,sortWith:function(e,r){if(!y(e))throw new Error("The first argument must be in an array type");if(!T(r))throw new Error("The second argument is a compare or callback function");var t=Array.from(e);return t.sort((function(e,t){return-1===Math.sign(r(e,t))?-1:1})),t},paginate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;if(!y(e))throw new Error("On the first argument, here only accept array");if(!r(t))throw new Error("This is the page active number, please enter number only");if(!r(n))throw new Error("This is the limit of entries in one page in a number, please enter number only");var o=Array.from(e),a=Number(n)*Number(t)-(Number(n)-1),i=Number(n)*Number(t);return o.slice(a-1,i<=o.length?i:o.length)},pages:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if(!y(e))throw new Error("On the first argument, here only accept array");if(!r(t))throw new Error("This is the limit of entries in one page in a number, please enter number only");var n=Array.from(e),o=n.length/Number(t),a=Math.ceil(o);return a},pageInfo:k,show:k,pagination:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!r(e))throw new Error("This is the total or all pages in numbers, please enter number only");if(!r(t))throw new Error("This is the page active number, please enter number only");if(!r(n))throw new Error("This is the position of ellipsis [...], please enter number only");var o=[],a=Number(e)<Number(t)?Number(e):Number(t),i=Number(t)<1?1:Number(t),u=a+Number(n),l=i-Number(n);if(0===Number(n))for(var f=1;f<=Number(e);f++)o.push(f);else{if(i>1)for(var h=l;h<i;h++)o.push(h);for(var c=a;c<=u;c++)o.push(c)}var s=o.filter((function(e){return e>0})),m=s.filter((function(r){return r<=Number(e)}));return u<Number(e)&&0!==Number(n)&&m.push("..."),l>1&&0!==Number(n)&&m.unshift("..."),m},sum:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(!y(e))throw new Error("In the first argument, you must enter a data in array");var t=Array.from(e),n=0;if(t.length>=1)if("string"==typeof r&&""!==r){var o=t.map((function(e){return r in e?Number(e[r]):0}));n=o.reduce((function(e,r){return Number(e)+Number(r)}))}else n=t.reduce((function(e,r){return Number(e)+Number(r)}));return n},calculate:H,calc:H,unique:j,isArray:y,isSuperset:function(e,r){if(!y(e)&&!y(r))throw new Error("The both of arguments must be in arrays");var t,n=new Set(e),o=m(r);try{for(o.s();!(t=o.n()).done;){var a=t.value;if(!n.has(a))return!1}}catch(e){o.e(e)}finally{o.f()}return!0},union:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return Array.from(new Set(r.flat()))},intersection:I,difference:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=1)throw new Error("You have to provide here at least 2 arguments");var n=new Set,o=I.apply(void 0,r);return r.forEach((function(e){if(!y(e))throw new Error("Here only accept arrays from all arguments");var r,t=m(e);try{for(t.s();!(r=t.n()).done;){var a=r.value;o.includes(a)||n.has(a)||n.add(a)}}catch(e){t.e(e)}finally{t.f()}})),Array.from(n)},asymmetricDifference:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=1)throw new Error("You have to provide here at least 2 arguments");for(var n=new Set,o=[],a=0,i=r;a<i.length;a++){var u=i[a];if(!y(u))throw new Error("Here only accept arrays from all arguments");u.forEach((function(e){n.has(e)?(n.delete(e),o.push(e)):o.includes(e)||n.add(e)}))}return Array.from(n)},complement:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=1)throw new Error("You have to provide here at least 1 value");var n=Array.from(r);n.shift();var o=new Set(_.apply(void 0,[r[0]].concat(h(n))));return Array.from(o)},without:_,transpose:L,zip:P,unzip:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length<2)throw new Error("You have to provide at least 2 arguments, both in arrays with the same length");for(var n=Array.from(r),o=Object.keys(n[0]),a={},i=0,u=o;i<u.length;i++){var l=u[i];a[l]=[]}for(var f=0,c=n;f<c.length;f++){var s=c[f];for(var m in s)a[m].push(s[m])}return[o].concat(h(L.apply(void 0,h(Object.values(a)))))},range:U,move:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)throw new Error("Only accept index of array elements and you must input at least one index in number type");return function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!y(e))throw new Error("Please enter array only here");if(!r(n))throw new Error("Input only index number here");var a,i=Array.from(e),u=[],l=m(t);try{for(l.s();!(a=l.n()).done;){var f=a.value;void 0!==i[Number(f)]&&u.push(i[Number(f)])}}catch(e){l.e(e)}finally{l.f()}var h=S.apply(void 0,[i].concat(t));return h.splice.apply(h,[n,o].concat(u)),h}},switched:F,transfer:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)throw new Error("Only accept index of array elements and you must enter at least one index in number type");return function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!y(e))throw new Error("Accept array only here");if(!y(n))throw new Error("Accept array only here");if(!r(o))throw new Error("Input only index number here");var a,i=Array.from(e),u=Array.from(n),l=[],f=m(t);try{for(f.s();!(a=f.n()).done;){var h=a.value;void 0!==i[Number(h)]&&l.push(i[Number(h)])}}catch(e){f.e(e)}finally{f.f()}var c=null===o?Number(u.length):o;u.splice.apply(u,[c,0].concat(l));var s=S.apply(void 0,[i].concat(t));return{from:s,to:u}}},compact:function(e){if(!y(e))throw new Error("Enter only array type here");return Array.from(e).filter((function(e){return null!=e&&!1!==e&&!isNaN(e)&&""!==e&&e>0}))},chunk:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!y(e)&&e.length<=2)throw new Error("Please insert array only on the first argument and must have 3 values at least");if("number"!=typeof r)throw new Error("On the second argument, you must input in a number type only");var t,n=U(r,e.length,r),o=[],a=m(n);try{for(a.s();!(t=a.n()).done;){var i=t.value,u=e.slice(Number(i)-Number(r),i);o.push(u)}}catch(e){a.e(e)}finally{a.f()}return n[Number(n.length)-1]<=e.length&&o.push(e.slice(n[Number(n.length)-1],e.length)),o},shuffle:function(e){if(!y(e)&&e.length<=2)throw new Error("This shuffle method only work on data in array type");for(var r=Array.from(e),t=Number(r.length)-1;t>2;t--){var n=r.slice(0,Number(t)+1);r=F(t)(r,Y(n))}return r},group:function(e,r){if(!y(e))throw new Error("You must enter array literal here");if(!T(r))throw new Error("You have to enter a function or callback on the second argument");var t,n={},o=m(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;void 0===n[r(a).toString()]&&(n[r(a).toString()]=[]),n[r(a).toString()].push(a)}}catch(e){o.e(e)}finally{o.f()}return n},countDuplication:B,countBy:function(e,r){if(!y(e))throw new Error("The first paramenter only accept array");if(!T(r))throw new Error("The second paramenter only accept callback function");return e.filter((function(e){return r(e)})).length}}),$=Object.freeze({__proto__:null,remove:function(e){if(!g(e))throw new Error("This is object helper, you must provide the first argument in an object");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];if(t.length<1)throw new Error("The next arguments must be in a string and at least one argument");for(var o=Object.assign({},e),a=0,i=t;a<i.length;a++){var u=i[a];u in o&&delete o[u]}return o},removeBy:M,merge:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r){for(var n={},o=new Map,a=0,i=r;a<i.length;a++)for(var u=i[a],l=0,h=Object.entries(u);l<h.length;l++){var c=f(h[l],2),s=c[0],m=c[1];o.has(s)||(o.set(s,m),n[s]=m)}return n}},replace:O,isObject:g,isObjectValues:function(e){return!!Object.values(e).filter((function(e){return""!==e&&0!==e&&e!=={}&&e!==[]})).join("")},invert:function(e){if(!g(e))throw new Error("You have to input object only here");var r=Object.keys(e),t=Object.values(e);return P(t,r)[0]},clone:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length<1)throw new Error("In this argument must have at least one argument and please provide it in object type");return Object.assign.apply(Object,[{}].concat(r))}}),R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|T|H{1,2}|h{1,2}|a|A|i{1,2}|s{1,2}|Z{1,2}|SSS/g,G=function(e){return"number"==typeof e||"string"==typeof e},q=function(e){return"number"==typeof e||"string"==typeof e},W=function(e){return"number"==typeof e||"string"==typeof e},J=function(e){return!!("object"===a(new Date(e))&&null!==e||"string"==typeof e&&new RegExp(R).test(e))},K=function(e){return!("string"!=typeof e||!new RegExp(Z).test(e))},V=function(e){return e%400==0||e%100!=0&&e%4==0},Q="Year must be in a number or a string type, the length of year either 4 or 2",X="Month must be in a number or a string type, the month number start from 1 to 12",ee="Date must be in a number or a string type, the date number start from 1 to 31",re="Full date must be in string or array type",te=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long",t=[],n=4;n<=10;n++){var o=new Date(Date.UTC(2021,3,n));t.push(new Intl.DateTimeFormat(e,{weekday:r}).format(o))}return t},ne=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);var t=[28,29,30,31],n=new Date(Date.UTC(Number(e),Number(r),0)).getUTCDate();return t.includes(n)?n:31},oe=function(e){if(!G(e))throw new Error(Q);return V(e)?366:365},ae=function(e,r){if(!J(e))throw new Error("Error in the first argument: "+re);if(!J(r))throw new Error("Error in the second argument: "+re);var t=new Date(e),n=new Date(r);return(Number(n.getTime())-Number(t.getTime()))/864e5},ie=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long",t=[],n=0;n<=11;n++){var o=Date.UTC(2021,n);t.push(new Intl.DateTimeFormat(e,{month:r}).format(new Date(o)))}return t},ue=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"long";if(!J(e))throw new Error('You\'re entering the wrong date string, please use this statement "new Date(\'yourdateParam\').toString()" instead or array "[year, monthIndex, dateNumber]"');if(!K(r))throw new Error("Please enter the correct date format");var o,a=new Date(e),i=r,u=r,l={YY:function(){var e=a.getFullYear().toString().slice(-2),r=a.getFullYear();return"00"!==e&&(r=Number(e)),r},YYYY:a.getFullYear(),M:Number(a.getMonth())+1,MM:function(){var e=Number(Number(a.getMonth())+1).toString();return 1===e.length?"0"+e:e},m:ie(t,n)[a.getMonth()].slice(0,3),mm:ie(t,n)[a.getMonth()],D:a.getDate,DD:function(){var e=a.getDate().toString(),r=e;1===e.length&&(r="0"+e);return r},d:te(t,n)[a.getDay()].slice(0,3),dd:te(t,n)[a.getDay()],H:a.getHours(),HH:function(){var e=a.getHours().toString();return 1===e.length?"0"+e:e},h:function(){var e=Number(a.getHours()+1),r=e;return e>12&&(r=e-(e-1)),r},hh:function(){var e=Number(a.getHours()+1),r=e;e>12&&(r=e-(e-1));var t=r.toString();return 1===t.length?"0"+t:t},k:function(){return 0===Number(a.getHours())?24:a.getHours()},kk:function(){var e=Number(a.getHours()).toString();if(1===e.length){var r="0"+e;return 0===Number(r)?24:r}return 0===Number(e)?24:e},i:a.getMinutes(),ii:function(){var e=a.getMinutes().toString();return 1===e.length?"0"+e:e},s:a.getSeconds(),ss:function(){var e=a.getSeconds().toString();return 1===e.length?"0"+e:e},uuu:a.getMilliseconds(),A:a.getHours()<12?"AM":"PM",a:a.getHours()<12?"am":"pm",Do:a.getDate().toString()+"st"},f=i.split(/-|\/|\.|:|\s/),h=m(f);try{for(h.s();!(o=h.n()).done;){var c=o.value;"YY"===c?u=u.replace(c,l.YY()):"YYYY"===c?u=u.replace(c,l.YYYY):"M"===c?u=u.replace(c,l.M):"MM"===c?u=u.replace(c,l.MM()):"m"===c?u=u.replace(c,l.m):"mm"===c?u=u.replace(c,l.mm):"D"===c?u=u.replace(c,l.D):"DD"===c?u=u.replace(c,l.DD()):"d"===c?u=u.replace(c,l.d):"dd"===c?u=u.replace(c,l.dd):"H"===c?u=u.replace(c,l.H):"HH"===c?u=u.replace(c,l.HH()):"h"===c?u=u.replace(c,l.h()):"hh"===c?u=u.replace(c,l.hh()):"k"===c?u=u.replace(c,l.k()):"kk"===c?u=u.replace(c,l.kk()):"i"===c?u=u.replace(c,l.i):"ii"===c?u=u.replace(c,l.ii()):"s"===c?u=u.replace(c,l.s):"ss"===c?u=u.replace(c,l.ss()):"uuu"===c?u=u.replace(c,l.uuu):"A"===c?u=u.replace(c,l.A):"a"===c?u=u.replace(c,l.a):"Do"===c&&(u=u.replace(c,l.Do))}}catch(e){h.e(e)}finally{h.f()}return u},le=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"long";if(!J(e))throw new Error("On the first argument, you have to input only the correct date");if(!K(r))throw new Error("For format date, you must always input the correct one by using characters like these: Y, M, m, D, d, H, h, k, i, S, s, A, a or Do");var o=e.split(/-|\/|\.|T|Z|:|\s/).filter((function(e){return e.length>=1&&" "!==e})).map((function(e){return e.trim()})),a=r.split(/-|\/|\.|T|Z|:|\s/).filter((function(e){return e.length>=1&&" "!==e})).map((function(e){return e.trim()})),i={year:(new Date).getFullYear(),month:Number((new Date).getMonth())+1,day:(new Date).getDate(),hour:(new Date).getHours(),minute:(new Date).getMinutes(),second:(new Date).getSeconds(),millisecond:(new Date).getMilliseconds()};if(o.length!==a.length)throw new Error("The numbers and the formats must be in place, so when we check the length of both of these arguments then the result will be the same");for(var u=0;u<o.length;u++)4===o[u].length&&!1===isNaN(o[u])&&"YYYY"===a[u]||2===o[u].length&&!1===isNaN(o[u])&&"YY"===a[u]?i.year=o[u]:1===o[u].length||2===o[u].length&&!1===isNaN(o[u])&&"M"===a[u]||"MM"===a[u]?i.month=Number(o[u])-1:3===o[u].length&&ie(t,n).map((function(e){return e.slice(0,3)})).includes(o[u])&&"m"===a[u]?i.month=ie(t,n).map((function(e){return e.slice(0,3)})).findIndex(o[u]):o[u].length>=3&&ie(t,n).includes(o[u])&&"mm"===a[u]?i.month=ie(t,n).findIndex(o[u]):1===o[u].length||2===o[u].length&&!1===isNaN(o[u])&&"D"===a[u]||"DD"===a[u]?i.day=o[u]:1===o[u].length||2===o[u].length&&!1===isNaN(o[u])&&"H"===a[u]||"HH"===a[u]?i.hour=o[u]:1===o[u].length||2===o[u].length&&!1===isNaN(o[u])&&"h"===a[u]||"hh"===a[u]?i.hour=o[u]>12?Number(o[u])-(Number(o[u])-1):o[u]:1===o[u].length||2===o[u].length&&!1===isNaN(o[u])&&"k"===a[u]||"kk"===a[u]?i.hour=24===Number(o[u])?0:o[u]:1===o[u].length||2===o[u].length&&!1===isNaN(o[u])&&"i"===a[u]||"ii"===a[u]?i.minute=o[u]:1===o[u].length||2===o[u].length&&!1===isNaN(o[u])&&"s"===a[u]||"ss"===a[u]?i.second=o[u]:o[u].length>=3&&!1===isNaN(o[u])&&"uuu"===a[u]?i.millisecond=o[u]:("st"===o[u].slice(-2)||"nd"===o[u].slice(-2)||"th"===o[u].slice(-2)&&"Do"===a[u])&&(i.second=Number(o[u].slice(0,-2)));return new Date(i.year,i.month,i.day,i.hour,i.minute,i.second,i.millisecond).toString()},fe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!J(e))throw new Error("Please enter a date in correct way, either in string or array type");if(!r(t))throw new Error("Only accept number type on second argument");var o=new Date(e),a=Number(o.getDate())+Number(t),i=Number(ne(Number(o.getFullYear()),o.getMonth()+1));if(a>i){var u=a-i;o=11===Number(o.getMonth())?new Date(Number(o.getFullYear())+1,0,u):new Date(Number(o.getFullYear()),Number(o.getMonth())+1,u)}else o=new Date(Number(o.getFullYear()),Number(o.getMonth()),a);var l=null!==n&&!1!==K(n)?ue(o,n):o;return l},he=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!J(n))throw new Error("Error in the first argument: "+re);if(!J(o))throw new Error("Error in the second argument: "+re);for(var n=new Date(e),o=new Date(r),a=[],i=n;i<=o;){var u=null!==t&&!1!==K(t)?ue(i,t):i;a.push(u),i=fe(i,1)}return a},ce=function(e,r,t){if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);if(!W(t))throw new Error(ee);var n=ae(new Date(Number(e),0,1),new Date(Number(e),Number(r)-1,Number(t))),o=Number(new Date(e,0,1).getDay()),a=0;o>0&&(a=6-(o-1));var i=Number(new Date(Number(e),Number(r)-1,Number(t)).getDay()),u=0;return i<6&&(u=6-i),Math.ceil((Number(n)+u-a)/7)},se=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY-MM-DD";if(!G(e))throw new Error(Q);if(!r(t))throw new Error("You have to enter a number");if(!K(n))throw new Error("Please enter a format of date correctly");var o=Number(new Date(Number(e),0,1).getDay()),a=0;o>0&&(a=6-(o-1));for(var i=[],u=a+1,l=0,f=e,h=1;h<=Number(t);h++){if(h===Number(t)){i.push(ue(new Date(f,l,u),n));for(var c=0;c<6;)c++,i.push(ue(fe(new Date(f,l,u),c),n))}u+=7,l<12&&u>Number(ne(e,l+1))&&(u-=Number(ne(e,l+1)),11!==l?l+=1:(l=1,f+=1))}return i},me=function(e,r){if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);for(var t=ge(e,52,"M"),n=[],o=0,a=Object.entries(t);o<a.length;o++){var i=f(a[o],2),u=i[0];i[1].includes(r.toString())&&n.push(u)}return 1===Number(r)?n.filter((function(e){return"52"!==e})):n},ge=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY-MM-DD";if(!G(e))throw new Error(Q);if(!r(t))throw new Error("You have to enter a number");if(!K(n))throw new Error("Please enter a format of date correctly");var o=Number(new Date(Number(e),0,1).getDay()),a=0;o>0&&(a=6-(o-1));for(var i={},u=a+1,l=0,f=e,h=1;h<=t;h++)i[h.toString()]=[ue(new Date(f,l,u),n),ue(fe(new Date(f,l,u),6),n)],u+=7,l<12&&u>Number(ne(e,l+1))&&(u-=Number(ne(e,l+1)),11!==l?l+=1:(l=1,f+=1));return i},we=Object.freeze({__proto__:null,now:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,r=(new Date).toString();return"string"==typeof e&&(r=ue(r,e)),r},nowHijri:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",r=Date.UTC(Number((new Date).getFullYear()),Number((new Date).getMonth()),Number((new Date).getDate()),Number((new Date).getHours()),Number((new Date).getMinutes()),Number((new Date).getSeconds()),Number((new Date).getMilliseconds())),t=new Intl.DateTimeFormat(e,{calendar:"islamic",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h24"}).format(new Date(r));return t},parse:le,parseDate:le,utc:function(){return new Date(Date.UTC.apply(Date,arguments))},addDate:fe,subtractDate:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!J(e))throw new Error("Please enter a date in correct way, either in string or array type");if(!r(t))throw new Error("Only accept number type on second argument");var o=new Date(e),a=Number(o.getDate())-Number(t),i=Number(ne(Number(o.getFullYear()),o.getMonth()));if(a<1){var u=i+(a-1);o=0===Number(o.getMonth())?new Date(Number(o.getFullYear())-1,0,u):new Date(Number(o.getFullYear()),Number(o.getMonth())+1,u)}else o=new Date(Number(o.getFullYear()),Number(o.getMonth()),a);var l=null!==n&&!1!==K(n)?ue(o,n):o;return l},rangeDate:he,day:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"en-US",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"long";if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);if(!W(t))throw new Error(ee);var a=new Date(Date.UTC(Number(e),Number(r)-1,Number(t)));return new Intl.DateTimeFormat(n,{weekday:o}).format(a)},days:te,daysInMonth:ne,daysInYear:oe,daysInBetween:ae,week:ce,weeks:se,weeksInMonth:me,weeksInYear:function(e){if(!G(e))throw new Error(Q);var r=Number(new Date(Number(e),0,1).getDay()),t=0;r>0&&(t=6-(r-1));var n=Number(new Date(Number(e),11,31).getDay()),o=0;return n<6&&(o=6-n),Math.ceil((Number(oe(e))+o-t)/7)},month:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"long";if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);var o=Date.UTC(e,Number(r)-1);return new Intl.DateTimeFormat(t,{month:n}).format(new Date(o))},months:ie,isYear:G,isMonth:q,isDate:W,isFullDate:J,isFormatDate:K,isLeapYear:V,calendar:function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"YYYY-MM-DD",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"en-US";if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);if(!K(n))throw new Error("Please enter a format of date correctly");var a=te(o),i=he(new Date(e,Number(r)-1,1),new Date(e,Number(r)-1,ne(e,r)),n),u=Number(new Date(e,Number(r)-1,1).getDay()),l=[];if(u>0){var f=u-1;l=he(new Date(e,Number(r)-2,Number(ne(e,Number(r)-1))-f),new Date(e,Number(r)-2,ne(e,Number(r)-1)),n)}var h=Number(new Date(e,Number(r)-1,ne(e,r)).getDay()),c=[];if(h<6){var s=6-(h+1);c=he(new Date(e,Number(r),1),new Date(e,Number(r),1+s),n)}var m=[a,l,i,c];return!0===t?m.flat():m},daysInCalendar:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY-MM-DD";if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);if(!K(t))throw new Error("Please enter a format of date correctly");return he(new Date(e,Number(r)-1,1),new Date(e,Number(r)-1,ne(e,r)),t)},prevDaysInCalendar:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY-MM-DD";if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);if(!K(t))throw new Error("Please enter a format of date correctly");var n=Number(new Date(e,Number(r)-1,1).getDay()),o=[];if(n>0){var a=n-1;o=he(new Date(e,Number(r)-2,Number(ne(e,Number(r)-1))-a),new Date(e,Number(r)-2,ne(e,Number(r)-1)),t)}return o},nextDaysInCalendar:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY-MM-DD";if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);if(!K(t))throw new Error("Please enter a format of date correctly");var n=Number(new Date(e,Number(r)-1,ne(e,r)).getDay()),o=[];if(n<6){var a=6-(n+1);o=he(new Date(e,Number(r),1),new Date(e,Number(r),1+a),t)}return o},weeklyCalendar:function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"YYYY-MM-DD",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"en-US";if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);if(!W(t))throw new Error(ee);if(!K(n))throw new Error("Please enter a format of date correctly");var a=te(o),i=ce(e,r,t),u=se(e,i,n);return P(a,u)[0]},calendarWithWeeks:function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"YYYY-MM-DD",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"en-US";if(!G(e))throw new Error(Q);if(!q(r))throw new Error(X);if(!K(n))throw new Error("Please enter a format of date correctly");var a=te(o),i=me(e,r),u=[];0!==Number(new Date(e,Number(r)-1,1).getDay())&&1===Number(r)&&(u.push("52"),u.push(se(Number(e)-1,52,n)));var l,f=m(i);try{for(f.s();!(l=f.n()).done;){var h=l.value;u.push(h),u.push(se(e,h,n))}}catch(e){f.e(e)}finally{f.f()}var c=["Week",a].concat(u);return!0===t?c.flat():c},dateToArray:function(e){if(!J(e))throw new Error("Please enter a valid date");return new Date(e).toJSON().replace("Z","").split(/-|:|\s|\.|T/g)}}),de=Object.freeze({__proto__:null,size:function(e,r){if(0===e)return"0 Bytes";var t=r||1,n=Math.floor(Math.log(e)/Math.log(1e3));return parseFloat((e/Math.pow(1e3,n)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},name:function(e){if("string"==typeof e)return e.indexOf("",41)>40?e.slice(0,41)+"...":e},type:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"type",t=e.split("/");return"format"==r?t.shift():t.pop(),t.join("")},image:function(e){if("name"in e&&"string"==typeof e.name)return URL.createObjectURL(e)},date:function(e){return new Date(e).toDateString()},loadImage:function(e){"name"in e&&"string"==typeof e.name&&URL.revokeObjectURL(e)},formatSize:function(e){for(var r=0,t=e,n=t.length,o=0;o<n;o++)r+=t[o].size;for(var a=r+" bytes",i=["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=0,l=r/1024;l>1;l/=1024,u++)a=l.toFixed(3)+" "+i[u]+" ("+r+" bytes)";return a},humanSize:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=r?1e3:1024;if(Math.abs(e)<n)return e+" B";var o=r?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1,i=Math.pow(10,t);do{e/=n,++a}while(Math.round(Math.abs(e)*i)/i>=n&&a<o.length-1);return e.toFixed(t)+" "+o[a]},exported:function(e,r){if("object"===a(e)&&"string"==typeof r){var t=Array.from(e),n="";if("json"===r.toLowerCase())n="data:application/json;charset=utf-8,"+JSON.stringify(t,null,2);else if("csv"===r.toLowerCase()){var o,i="",u=m(t);try{for(u.s();!(o=u.n()).done;){var l=o.value;for(var f in l)i+=l[f]+",";i=i.trim().substring(0,i.length-1),i+="\n"}}catch(e){u.e(e)}finally{u.f()}n="data:text/csv;charset=utf-8,"+(i=i.trim().substring(0,i.length-1))}else if("sql"===r.toLowerCase()){var h="INSERT INTO `export_table` (";for(var c in t[0])h+="`"+c+"`,";h=h.trim().substring(0,h.length-1),h+=") VALUES ";var s,g=m(t);try{for(g.s();!(s=g.n()).done;){var w=s.value;for(var d in h+="(",w)h+="`"+w[d]+"`,";h=h.trim().substring(0,h.length-1),h+="),"}}catch(e){g.e(e)}finally{g.f()}h=h.trim().substring(0,h.length-1),n="data:application/sql;charset=utf-8,"+(h+=";")}else if("xml"===r.toLowerCase()){var v='<?xml version="1.0" encoding="UTF-8"?>\n<data>';for(var y in t){for(var p in v+="\n  <entry>",y)v+="\n    <"+p+"`>"+y[p]+"</"+p+"`>";v+="\n  </entry>"}n="data:application/xml;charset=utf-8,"+(v+="\n</data>")}else if("xhs"===r.toLowerCase()){var b,N='//visit official site: http://xhs.glitch.me \n("data", [',E=m(t);try{for(E.s();!(b=E.n()).done;){var D=b.value;for(var A in N+='\n  ("entry", [',D)N+='\n    ("'+A+'", ',N+=D[A]+"),";N=N.trim().substring(0,N.length-1),N+="]),"}}catch(e){E.e(e)}finally{E.f()}N=N.trim().substring(0,N.length-1),n="data:application/xhs;charset=utf-8,"+(N="])")}return n}},download:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"txt",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"export-to";if("string"==typeof e){var n=t+"."+r.toLowerCase(),o=encodeURI(e),a=document.createElement("a");a.href=o,a.download=n,document.body.appendChild(a),a.click(),document.body.removeChild(a)}},printed:function(e){if("object"===a(e)){var r=Array.from(e),t=document.createElement("table"),n=document.createElement("thead"),o=document.createElement("tbody");t.appendChild(n),t.appendChild(o);var i=document.createElement("tr");for(var u in r[0]){var l=document.createElement("th");l.textContent=u.replace(/^\w/,(function(e){return e.toUpperCase()})),i.appendChild(l)}n.appendChild(i);for(var f=0,h=r;f<h.length;f++){var c=h[f],s=document.createElement("tr");for(var m in c){var g=document.createElement("td");g.textContent=c[m],s.appendChild(g)}o.appendChild(s)}var w=window.open();w.document.body.appendChild(t),w.focus(),w.print()}}}),ve=function(e,r,t){var n;if(t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3),n="expires="+o.toGMTString()}else n="";document.cookie=e+"="+r+"; SameSite=Lax;"+n+"; path=/"},ye=function(e){for(var r=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var o=t[n];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(r))return o.substring(r.length,o.length)}return null},pe=function(e){return"object"===("undefined"==typeof window?"undefined":a(window))&&"".concat(e,"Storage")in window},be=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local";if(pe(r))return!!window["".concat(r,"Storage")].getItem(e)},Ne=Object.freeze({__proto__:null,setCookie:ve,getCookie:ye,hasCookie:function(e){return!!ye(e)},removeCookie:function(e){ve(e,"",-1)},clearCookie:function(){for(var e=document.cookie.split(";"),r=0;r<e.length;r++){var t=e[r],n=t.indexOf("="),o=n>-1?t.substr(0,n):t;document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}},isStorage:pe,isCookie:function(){return"object"===("undefined"==typeof document?"undefined":a(document))&&"cookie"in document},setStorage:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"local";pe(t)&&window["".concat(t,"Storage")].setItem(e,r)},getStorage:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local";if(pe(r))return window["".concat(r,"Storage")].getItem(e)},hasStorage:be,removeStorage:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local";pe(r)&&be(e,r)&&window["".concat(r,"Storage")].removeItem(e)},clearStorage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"local";pe(e)&&window["".concat(e,"Storage")].clear()}}),Ee=Object.freeze({__proto__:null,ternary:function(e,r,t){if(!T(e)&&!T(r)&&!T(t))throw new Error("All arguments here only accept value in function");return e()?r():t()}});


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/AllClientsComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/AllClientsComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue */ "./resources/js/components/clients/DataTable.vue");
/* harmony import */ var alga_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alga-js */ "./node_modules/alga-js/dist/alga.min.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AllClients",
  components: {
    DataTable: _DataTable_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    showInfo: function showInfo() {
      return alga_js__WEBPACK_IMPORTED_MODULE_2__.$array.show(this.entries)(1, this.currentEntries);
    }
  },
  data: function data() {
    return {
      columns: [{
        name: "id",
        text: "ID"
      }, {
        name: "firstname",
        text: "First Name"
      }, {
        name: "othernames",
        text: "Other names"
      }, {
        name: "clientnumber",
        text: "Client Number"
      }, {
        name: "cuts",
        text: "Number of Cuts"
      }, {
        name: "status",
        text: "Cut Status"
      }],
      entries: [],
      showEntries: [5, 10, 15, 25, 50, 72, 100],
      currentEntries: 10,
      filteredEntries: []
    };
  },
  methods: {
    getAllClient: function getAllClient() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    paginateEntries: function paginateEntries() {
      this.filteredEntries = alga_js__WEBPACK_IMPORTED_MODULE_2__.$array.paginate(this.entries)(1, this.currentEntries);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/DataTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/DataTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DataTable",
  props: {
    columns: Array,
    entries: Array
  },
  computed: {
    tableHeader: function tableHeader() {
      return this.columns || [];
    },
    tableData: function tableData() {
      return this.entries || [];
    }
  }
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

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

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

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
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
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
      define(genFun, toStringTagSymbol, "GeneratorFunction");
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

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
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
        return new PromiseImpl(function(resolve, reject) {
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
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
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

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

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
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/components/clients/AllClientsComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/clients/AllClientsComponent.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllClientsComponent_vue_vue_type_template_id_d15b2b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllClientsComponent.vue?vue&type=template&id=d15b2b18& */ "./resources/js/components/clients/AllClientsComponent.vue?vue&type=template&id=d15b2b18&");
/* harmony import */ var _AllClientsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllClientsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/clients/AllClientsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllClientsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllClientsComponent_vue_vue_type_template_id_d15b2b18___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllClientsComponent_vue_vue_type_template_id_d15b2b18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/clients/AllClientsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/clients/DataTable.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/clients/DataTable.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataTable_vue_vue_type_template_id_0f4444bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable.vue?vue&type=template&id=0f4444bc& */ "./resources/js/components/clients/DataTable.vue?vue&type=template&id=0f4444bc&");
/* harmony import */ var _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/clients/DataTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTable_vue_vue_type_template_id_0f4444bc___WEBPACK_IMPORTED_MODULE_0__.render,
  _DataTable_vue_vue_type_template_id_0f4444bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/clients/DataTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/clients/AllClientsComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/clients/AllClientsComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllClientsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllClientsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/AllClientsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllClientsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/clients/DataTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/clients/DataTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/DataTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/clients/AllClientsComponent.vue?vue&type=template&id=d15b2b18&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/clients/AllClientsComponent.vue?vue&type=template&id=d15b2b18& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllClientsComponent_vue_vue_type_template_id_d15b2b18___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllClientsComponent_vue_vue_type_template_id_d15b2b18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllClientsComponent_vue_vue_type_template_id_d15b2b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllClientsComponent.vue?vue&type=template&id=d15b2b18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/AllClientsComponent.vue?vue&type=template&id=d15b2b18&");


/***/ }),

/***/ "./resources/js/components/clients/DataTable.vue?vue&type=template&id=0f4444bc&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/clients/DataTable.vue?vue&type=template&id=0f4444bc& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_0f4444bc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_0f4444bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_0f4444bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataTable.vue?vue&type=template&id=0f4444bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/DataTable.vue?vue&type=template&id=0f4444bc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/AllClientsComponent.vue?vue&type=template&id=d15b2b18&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/AllClientsComponent.vue?vue&type=template&id=d15b2b18& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "div.between:flex bottom:margin-3" }, [
        _c("div", { staticClass: "center:flex-items" }, [
          _c("span", { staticClass: "right:margin-1" }, [_vm._v("Show")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.currentEntries,
                  expression: "currentEntries",
                },
              ],
              staticClass: "select",
              on: {
                change: [
                  function ($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function (o) {
                        return o.selected
                      })
                      .map(function (o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.currentEntries = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.paginateEntries,
                ],
              },
            },
            _vm._l(_vm.showEntries, function (se) {
              return _c("option", { key: se, attrs: { value: "" } })
            }),
            0
          ),
          _vm._v(" "),
          _c("span", { staticClass: "left:margin-1" }, [_vm._v("Entries")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "end:flex" }),
      ]),
      _vm._v(" "),
      _c("DataTable", {
        attrs: { columns: _vm.columns, entries: _vm.filteredEntries },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "between:flex y:margin-3" }, [
        _c("div", [
          _vm._v(
            "\n      SHow " +
              _vm._s(_vm.showInfo.from) +
              " to " +
              _vm._s(_vm.showInfo.to) +
              " of\n      " +
              _vm._s(_vm.showInfo.of) +
              " entries\n    "
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "end:flex" }),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/DataTable.vue?vue&type=template&id=0f4444bc&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/clients/DataTable.vue?vue&type=template&id=0f4444bc& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("table", { staticClass: "table table:border secondary-5:border" }, [
    _c("thead", [
      _c(
        "tr",
        _vm._l(_vm.tableHeader, function (th) {
          return _c("th", { key: th }, [
            _c("div", { staticClass: "between:flex center:items" }, [
              _c("span", [_vm._v(_vm._s(th.text))]),
              _vm._v(" "),
              _c("span", [
                _c(
                  "svg",
                  {
                    staticClass: "bi bi-filter",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      fill: "currentcolor",
                      viewBox: "0 0 16 16",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z",
                      },
                    }),
                  ]
                ),
              ]),
            ]),
          ])
        }),
        0
      ),
    ]),
    _vm._v(" "),
    _c(
      "tbody",
      _vm._l(_vm.tableData, function (td) {
        return _c("tr", { key: td }, [
          _c("td", [_vm._v(_vm._s(td.id))]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(td.lastname))]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(td.othernames + " " + td.firstname))]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(td.client_number))]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(td.number_of_cuts))]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(td.cut_status))]),
        ])
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);