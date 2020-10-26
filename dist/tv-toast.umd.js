(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tv-toast"] = factory();
	else
		root["tv-toast"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TvToast", function() { return /* reexport */ tv_toast; });
__webpack_require__.d(__webpack_exports__, "spawn", function() { return /* reexport */ spawn; });
__webpack_require__.d(__webpack_exports__, "removeElement", function() { return /* reexport */ removeElement; });
__webpack_require__.d(__webpack_exports__, "containerClasses", function() { return /* reexport */ containerClasses; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ffdce810-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/tv-toast.vue?vue&type=template&id=49e3b47e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"enter-active-class":"transform ease-out duration-300 transition","enter-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transform ease-in duration-100","leave-class":"opacity-100 sm:translate-x-0 translate-y-0","leave-to-class":"opacity-0 sm:translate-x-1 translate-y-1 sm:translate-y-0"}},[(_vm.active && _vm.primary === false)?_c('div',{staticClass:"max-w-sm w-full shadow-lg rounded-lg pointer-events-auto relative mb-4 overflow-hidden",class:_vm.classToastAll},[(_vm.progress && _vm.timeout)?_c('div',{staticClass:"absolute left-0 bottom-0 right-0 h-1 rounded",class:_vm.classTimeout,style:(("width: " + _vm.timeLeftPercent + "%"))}):_vm._e(),_c('div',{staticClass:"rounded-lg shadow-xs overflow-hidden z-100",class:_vm.classToastAll},[_c('div',{staticClass:"p-4"},[_c('div',{staticClass:"flex items-start"},[_c('div',{staticClass:"flex-shrink-0"},[(_vm.type === 'success')?_c('div',{staticClass:"border-2 border-green-200 rounded-full p-1"},[_c('IconCheck',{staticClass:"w-3 h-3",attrs:{"primary":"text-green-400","secondary":"text-green-300"}})],1):_vm._e(),(_vm.type === 'info')?_c('div',{staticClass:"border-2 border-blue-200 rounded-full p-1"},[_c('IconInfo',{staticClass:"w-3 h-3",attrs:{"primary":"text-blue-400","secondary":"text-blue-300"}})],1):_vm._e(),(_vm.type === 'warning')?_c('div',{staticClass:"border-2 border-yellow-200 rounded-full p-1"},[_c('IconBang',{staticClass:"w-3 h-3",attrs:{"primary":"text-yellow-400","secondary":"text-yellow-300"}})],1):_vm._e(),(_vm.type === 'danger')?_c('div',{staticClass:"border-2 border-red-200 rounded-full p-1"},[_c('IconBang',{staticClass:"w-3 h-3",attrs:{"primary":"text-red-400","secondary":"text-red-300"}})],1):_vm._e(),(_vm.icon !== false)?_c('div',[_c(_vm.icon,{tag:"component",staticClass:"w-6 h-6",attrs:{"primary":_vm.iconPrimary,"secondary":_vm.iconSecondary}})],1):_vm._e()]),_c('div',{staticClass:"ml-3 w-0 flex-1 pt-0.5"},[(_vm.title)?_c('p',{staticClass:"text-sm leading-5 font-medium",class:_vm.classTitle},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('p',{staticClass:"text-sm leading-5",class:[_vm.classMessage, {'mt-1': _vm.title}],domProps:{"innerHTML":_vm._s(_vm.message)}})]),_c('div',{staticClass:"ml-4 flex-shrink-0 flex"},[_c('button',{staticClass:"inline-flex text-gray-400 transition ease-in-out duration-150 focus:outline-none focus:text-gray-500",on:{"click":_vm.destroy}},[_c('IconTimes',{staticClass:"h-4 w-4",attrs:{"primary":_vm.classClose,"secondary":_vm.classClose}})],1)])])])])]):_vm._e(),(_vm.active && _vm.primary !== false && _vm.secondary !== false)?_c('div',{staticClass:"max-w-md w-full shadow-lg rounded-lg pointer-events-auto mb-4",class:_vm.classToastAll},[(_vm.progress && _vm.timeout)?_c('div',{staticClass:"absolute left-0 bottom-0 right-0 h-1 rounded bg-gray-100",style:(("width: " + _vm.timeLeftPercent + "%"))}):_vm._e(),_c('div',{staticClass:"flex rounded-lg shadow-xs"},[_c('div',{staticClass:"w-0 flex-1 flex items-center p-4"},[_c('div',{staticClass:"w-full"},[(_vm.title)?_c('p',{staticClass:"text-sm leading-5 font-medium",class:_vm.classTitle},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('p',{staticClass:"text-sm leading-5",class:[_vm.classMessage, {'mt-1': _vm.title}],domProps:{"innerHTML":_vm._s(_vm.message)}})])]),_c('div',{staticClass:"flex border-l border-gray-200"},[_c('div',{staticClass:"-ml-px flex flex-col"},[_c('div',{staticClass:"h-0 flex-1 flex border-b border-gray-200"},[_c('button',{staticClass:"-mb-px flex items-center justify-center w-full rounded-tr-lg border border-transparent px-4 py-3 text-sm leading-5 font-medium text-indigo-600 transition ease-in-out duration-150 hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-indigo-700 active:bg-gray-50",on:{"click":_vm.primaryAction}},[_vm._v(_vm._s(_vm.primary.label))])]),_c('div',{staticClass:"-mt-px h-0 flex-1 flex"},[_c('button',{staticClass:"flex items-center justify-center w-full rounded-br-lg border border-transparent px-4 py-3 text-sm leading-5 font-medium text-gray-700 transition ease-in-out duration-150 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50",on:{"click":_vm.secondaryAction}},[_vm._v(_vm._s(_vm.secondary.label))])])])])])]):_vm._e(),(_vm.active && _vm.primary !== false && _vm.secondary === false)?_c('div',{staticClass:"max-w-sm w-full shadow-lg rounded-lg pointer-events-auto mb-4",class:_vm.classToastAll},[(_vm.progress && _vm.timeout)?_c('div',{staticClass:"absolute left-0 bottom-0 right-0 h-1 rounded bg-gray-100",style:(("width: " + _vm.timeLeftPercent + "%"))}):_vm._e(),_c('div',{staticClass:"rounded-lg shadow-xs overflow-hidden"},[_c('div',{staticClass:"p-4"},[_c('div',{staticClass:"flex items-center"},[_c('div',{staticClass:"w-0 flex-1 flex justify-between"},[_c('p',{staticClass:"w-0 flex-1 text-sm leading-5 font-medium text-gray-900",domProps:{"innerHTML":_vm._s(_vm.message)}}),_c('button',{staticClass:"ml-3 flex-shrink-0 text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150",on:{"click":_vm.primaryAction}},[_vm._v(_vm._s(_vm.primary.label))])]),_c('div',{staticClass:"ml-4 flex-shrink-0 flex"},[_c('button',{staticClass:"inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"},[_c('IconTimes',{staticClass:"h-4 w-4",attrs:{"primary":_vm.classClose,"secondary":_vm.classClose}})],1)])])])])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/tv-toast.vue?vue&type=template&id=49e3b47e&

// CONCATENATED MODULE: ./src/utils.js
/*
 * utils.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
function removeElement (el) {
  if (typeof (el).remove !== 'undefined')
    el.remove()
  else
    el.parentNode.removeChild(el)
}

// add the component w/ the specified props
function spawn (id, propsData, Component, Vue, options) {
  if (propsData && options && options.defaults) {
    propsData.defaults = options.defaults
  }
  const Instance = Vue.extend(Component)
  return new Instance({
    el: document.getElementById(id).appendChild(document.createElement('div')),
    propsData,
  })
}

// EXTERNAL MODULE: ./node_modules/tv-icon/dist/tv-icon.umd.js
var tv_icon_umd = __webpack_require__("fe2d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/tv-toast.vue?vue&type=script&lang=js&
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



/* harmony default export */ var tv_toastvue_type_script_lang_js_ = ({
  components: { IconCheck: tv_icon_umd["IconCheck"], IconBang: tv_icon_umd["IconBang"], IconTimes: tv_icon_umd["IconTimes"], },
  props: {
    title: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    message: {
      type: String,
      required: false,
      default: 'Please specify a <b>message</b>',
    },
    type: {
      type: String,
      required: false,
      validate: (type) => { return ['success', 'info', 'danger', 'warning'].includes(type) },
      default: '',
    },
    progress: {
      type: Boolean,
      required: false,
      default: true,
    },
    icon: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    iconPrimary: {
      type: String,
      required: false,
      default: '',
    },
    iconSecondary: {
      type: String,
      required: false,
      default: '',
    },
    timeout: {
      type: [Boolean, Number],
      required: false,
      default: 2,
    },
    primary: {
      type: [Boolean, Object],
      required: false,
      default: false,
    },
    secondary: {
      type: [Boolean, Object],
      required: false,
      default: false,
    },
    classToast: {
      type: String,
      required: false,
      default: 'bg-white',
    },
    classTitle: {
      type: String,
      required: false,
      default: 'text-gray-900',
    },
    classMessage: {
      type: String,
      required: false,
      default: 'text-gray-500',
    },
    classClose: {
      type: String,
      required: false,
      default: 'text-gray-400',
    },
    classTimeout: {
      type: String,
      required: false,
      default: 'bg-gray-200',
    },
    defaults: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },

  data () {
    return {
      active: false,
      interval: false,
      timeLeft: false,
      speed: 10,
    }
  },

  computed: {
    classToastAll () {
      if (this.defaults && this.defaults.classToast) {
        return [this.classToast, this.defaults.classToast]
      }
      if (this.classToast)
        return [this.classToast]
      return []
    },
   timeLeftPercent () {
      return Math.round(((this.timeLeft * 100 / (this.timeout * 1000)) * 100) / 100)
    },
  },

  mounted () {
    this.active = true
    if (this.timeout > 0) {
      this.timeLeft = (this.timeout * 1000)
      this.interval = setInterval(() => this.updateTime(), this.speed)
    }
  },

  methods: {
    updateTime () {
      this.timeLeft -= this.speed
      if (this.timeLeft === 0)
        this.destroy()
    },
    destroy () {
      this.active = false
      clearInterval(this.interval)
      setTimeout(() => {
        this.$destroy()
        removeElement(this.$el)
      }, 1000)
    },
    primaryAction () {
      this.primary.action()
      this.destroy()
    },
    secondaryAction () {
      this.secondary.action()
      this.destroy()
    },
  },
});

// CONCATENATED MODULE: ./src/tv-toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tv_toastvue_type_script_lang_js_ = (tv_toastvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/tv-toast.vue





/* normalize component */

var component = normalizeComponent(
  src_tv_toastvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tv_toast = (component.exports);
// CONCATENATED MODULE: ./src/index.js



let installed = false

const containerClasses = [
  'z-40', 'fixed', 'inset-0', 'flex', 'flex-col-reverse', 'items-end', 'justify-center',
  'px-4', 'py-6', 'pointer-events-none', 'sm:p-6', 'sm:items-end', 'sm:justify-end'
]

/* harmony default export */ var src_0 = ({
  install(Vue) {
    if (installed) return
    Vue.component('TvToast', tv_toast)
    installed = true
  }
});



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fe2d":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "IconBang", function() { return /* reexport */ IconBang; });
__webpack_require__.d(__webpack_exports__, "IconCheck", function() { return /* reexport */ IconCheck; });
__webpack_require__.d(__webpack_exports__, "IconInfo", function() { return /* reexport */ IconInfo; });
__webpack_require__.d(__webpack_exports__, "IconTimes", function() { return /* reexport */ IconTimes; });
__webpack_require__.d(__webpack_exports__, "IconEnvelope", function() { return /* reexport */ IconEnvelope; });
__webpack_require__.d(__webpack_exports__, "IconGithub", function() { return /* reexport */ IconGithub; });
__webpack_require__.d(__webpack_exports__, "IconLaravel", function() { return /* reexport */ IconLaravel; });
__webpack_require__.d(__webpack_exports__, "IconNuxt", function() { return /* reexport */ IconNuxt; });
__webpack_require__.d(__webpack_exports__, "IconPhone", function() { return /* reexport */ IconPhone; });
__webpack_require__.d(__webpack_exports__, "IconSignIn", function() { return /* reexport */ IconSignIn; });
__webpack_require__.d(__webpack_exports__, "IconToast", function() { return /* reexport */ IconToast; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconBang.vue?vue&type=template&id=14d169c7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M96 512a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M49.22 0h93.56a24 24 0 0 1 24 25.2l-13.63 272a24 24 0 0 1-24 22.8H62.84a24 24 0 0 1-24-22.8l-13.59-272A24 24 0 0 1 49.22 0z"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/IconBang.vue?vue&type=template&id=14d169c7&

// CONCATENATED MODULE: ./src/mixins/icon.js
/* harmony default export */ var icon = ({
  props: {
    primary: {
      type: String,
      required: false,
      default: 'text-gray-400',
    },
    secondary: {
      type: String,
      required: false,
      default: 'text-gray-300',
    },
  },
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconBang.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconBangvue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconBang.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconBangvue_type_script_lang_js_ = (IconBangvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/IconBang.vue





/* normalize component */

var component = normalizeComponent(
  src_IconBangvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconBang = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconCheck.vue?vue&type=template&id=1323e48a&
var IconCheckvue_type_template_id_1323e48a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M504.5 144.42L264.75 385.5 192 312.59l240.11-241a25.49 25.49 0 0 1 36.06-.14l.14.14L504.5 108a25.86 25.86 0 0 1 0 36.42z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M264.67 385.59l-54.57 54.87a25.5 25.5 0 0 1-36.06.14l-.14-.14L7.5 273.1a25.84 25.84 0 0 1 0-36.41l36.2-36.41a25.49 25.49 0 0 1 36-.17l.16.17z"}})])}
var IconCheckvue_type_template_id_1323e48a_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconCheck.vue?vue&type=template&id=1323e48a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconCheck.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconCheckvue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconCheck.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconCheckvue_type_script_lang_js_ = (IconCheckvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconCheck.vue





/* normalize component */

var IconCheck_component = normalizeComponent(
  src_IconCheckvue_type_script_lang_js_,
  IconCheckvue_type_template_id_1323e48a_render,
  IconCheckvue_type_template_id_1323e48a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconCheck = (IconCheck_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconInfo.vue?vue&type=template&id=23f9c9de&
var IconInfovue_type_template_id_23f9c9de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M20 448h152a20 20 0 0 1 20 20v24a20 20 0 0 1-20 20H20a20 20 0 0 1-20-20v-24a20 20 0 0 1 20-20z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M96 128a64 64 0 1 0-64-64 64 64 0 0 0 64 64zm28 64H20a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h28v192h96V212a20 20 0 0 0-20-20z"}})])}
var IconInfovue_type_template_id_23f9c9de_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconInfo.vue?vue&type=template&id=23f9c9de&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconInfovue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconInfovue_type_script_lang_js_ = (IconInfovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconInfo.vue





/* normalize component */

var IconInfo_component = normalizeComponent(
  src_IconInfovue_type_script_lang_js_,
  IconInfovue_type_template_id_23f9c9de_render,
  IconInfovue_type_template_id_23f9c9de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconInfo = (IconInfo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconTimes.vue?vue&type=template&id=03c64f16&
var IconTimesvue_type_template_id_03c64f16_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 352 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M9.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L176,322.72,109.28,256ZM342.79,111.45,320.55,89.21a31.46,31.46,0,0,0-44.48,0L176,189.28,242.72,256,342.79,155.93a31.46,31.46,0,0,0,0-44.48Z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M342.79,356.07a31.46,31.46,0,0,1,0,44.48l-22.24,22.24a31.46,31.46,0,0,1-44.48,0L9.21,155.93a31.46,31.46,0,0,1,0-44.48L31.45,89.21a31.46,31.46,0,0,1,44.48,0Z"}})])}
var IconTimesvue_type_template_id_03c64f16_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconTimes.vue?vue&type=template&id=03c64f16&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconTimes.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconTimesvue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconTimes.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconTimesvue_type_script_lang_js_ = (IconTimesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconTimes.vue





/* normalize component */

var IconTimes_component = normalizeComponent(
  src_IconTimesvue_type_script_lang_js_,
  IconTimesvue_type_template_id_03c64f16_render,
  IconTimesvue_type_template_id_03c64f16_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconTimes = (IconTimes_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconEnvelope.vue?vue&type=template&id=1901ca1c&
var IconEnvelopevue_type_template_id_1901ca1c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M256.47 352h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V400a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V183.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52zM464 64H48a48 48 0 0 0-48 48v19a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4 23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131v-19a48 48 0 0 0-48-48z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M512 131v52.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V131a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.69 12.12 49.75 41.4 72.93 41.4h.94c23.18 0 56.24-29.28 72.93-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131z"}})])}
var IconEnvelopevue_type_template_id_1901ca1c_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconEnvelope.vue?vue&type=template&id=1901ca1c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconEnvelope.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconEnvelopevue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconEnvelope.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconEnvelopevue_type_script_lang_js_ = (IconEnvelopevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconEnvelope.vue





/* normalize component */

var IconEnvelope_component = normalizeComponent(
  src_IconEnvelopevue_type_script_lang_js_,
  IconEnvelopevue_type_template_id_1901ca1c_render,
  IconEnvelopevue_type_template_id_1901ca1c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconEnvelope = (IconEnvelope_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconGithub.vue?vue&type=template&id=18624eda&
var IconGithubvue_type_template_id_18624eda_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"aria-hidden":"true","focusable":"false","data-prefix":"fab","data-icon":"github","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 496 512"}},[_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}})])}
var IconGithubvue_type_template_id_18624eda_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconGithub.vue?vue&type=template&id=18624eda&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconGithub.vue?vue&type=script&lang=js&
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


/* harmony default export */ var IconGithubvue_type_script_lang_js_ = ({
  mixins: [icon],
});

// CONCATENATED MODULE: ./src/IconGithub.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconGithubvue_type_script_lang_js_ = (IconGithubvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconGithub.vue





/* normalize component */

var IconGithub_component = normalizeComponent(
  src_IconGithubvue_type_script_lang_js_,
  IconGithubvue_type_template_id_18624eda_render,
  IconGithubvue_type_template_id_18624eda_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconGithub = (IconGithub_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconLaravel.vue?vue&type=template&id=62a92de3&
var IconLaravelvue_type_template_id_62a92de3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512"}},[_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"}})])}
var IconLaravelvue_type_template_id_62a92de3_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconLaravel.vue?vue&type=template&id=62a92de3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconLaravel.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var IconLaravelvue_type_script_lang_js_ = ({
  mixins: [icon],
});

// CONCATENATED MODULE: ./src/IconLaravel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconLaravelvue_type_script_lang_js_ = (IconLaravelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconLaravel.vue





/* normalize component */

var IconLaravel_component = normalizeComponent(
  src_IconLaravelvue_type_script_lang_js_,
  IconLaravelvue_type_template_id_62a92de3_render,
  IconLaravelvue_type_template_id_62a92de3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconLaravel = (IconLaravel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconNuxt.vue?vue&type=template&id=3b1913b4&
var IconNuxtvue_type_template_id_3b1913b4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 400 400"}},[_c('path',{attrs:{"d":"M227.92099 83.45116l-13.6889 24.10141-46.8148-82.44693L23.7037 278.17052h97.3037c0 13.31084 10.61252 24.10142 23.70371 24.10142H23.70371c-8.46771 0-16.29145-4.59601-20.5246-12.05272-4.23315-7.4567-4.23272-16.64312.00114-24.0994L146.89383 13.05492c4.23415-7.45738 12.0596-12.05138 20.5284-12.05138 8.46878 0 16.29423 4.594 20.52839 12.05138l39.97037 70.39623z","fill":"#00C58E"}}),_c('path',{attrs:{"d":"M331.6642 266.11981l-90.05432-158.56724-13.6889-24.10141-13.68888 24.10141-90.04445 158.56724c-4.23385 7.45629-4.23428 16.64271-.00113 24.09941 4.23314 7.4567 12.05689 12.05272 20.5246 12.05272h166.4c8.46946 0 16.29644-4.591 20.532-12.04837 4.23555-7.45736 4.23606-16.64592.00132-24.10376h.01976zM144.7111 278.17052L227.921 131.65399l83.19012 146.51653h-166.4z","fill":"#2F495E"}}),_c('path',{attrs:{"d":"M396.04938 290.22123c-4.23344 7.45557-12.05656 12.0507-20.52345 12.0507H311.1111c13.0912 0 23.7037-10.79057 23.7037-24.10141h40.66173L260.09877 74.98553l-18.4889 32.56704L227.921 83.45116l11.65432-20.51634c4.23416-7.45738 12.0596-12.05138 20.5284-12.05138 8.46879 0 16.29423 4.594 20.52839 12.05138l115.41728 203.185c4.23426 7.457 4.23426 16.6444 0 24.1014z","fill":"#108775"}})])}
var IconNuxtvue_type_template_id_3b1913b4_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconNuxt.vue?vue&type=template&id=3b1913b4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconNuxt.vue?vue&type=script&lang=js&
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

/* harmony default export */ var IconNuxtvue_type_script_lang_js_ = ({});

// CONCATENATED MODULE: ./src/IconNuxt.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconNuxtvue_type_script_lang_js_ = (IconNuxtvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconNuxt.vue





/* normalize component */

var IconNuxt_component = normalizeComponent(
  src_IconNuxtvue_type_script_lang_js_,
  IconNuxtvue_type_template_id_3b1913b4_render,
  IconNuxtvue_type_template_id_3b1913b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconNuxt = (IconNuxt_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconPhone.vue?vue&type=template&id=52a24446&
var IconPhonevue_type_template_id_52a24446_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M191.18 154.51a23.9 23.9 0 0 0 6.91-28l-48-112a24.16 24.16 0 0 0-27.5-13.9L106 4.43l69.73 162.69zm153.6 181.62l162.81 69.77 3.8-16.49a24.3 24.3 0 0 0-14-27.61l-112-48a24 24 0 0 0-28 6.91zM0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.59l12.89-55.82-176.61-75.69-15.88 19.4a370.59 370.59 0 0 1-177.21-177.2L150 188.23 74.34 11.74 18.59 24.61A24 24 0 0 0 0 48z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M74.34 11.74L150 188.23l25.79-21.11L106 4.43zm270.44 324.39l-21.1 25.77 176.6 75.69 7.31-31.69z"}})])}
var IconPhonevue_type_template_id_52a24446_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconPhone.vue?vue&type=template&id=52a24446&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconPhone.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconPhonevue_type_script_lang_js_ = ({
  mixins: [icon],
});

// CONCATENATED MODULE: ./src/IconPhone.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconPhonevue_type_script_lang_js_ = (IconPhonevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconPhone.vue





/* normalize component */

var IconPhone_component = normalizeComponent(
  src_IconPhonevue_type_script_lang_js_,
  IconPhonevue_type_template_id_52a24446_render,
  IconPhonevue_type_template_id_52a24446_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconPhone = (IconPhone_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconSignIn.vue?vue&type=template&id=44a31437&
var IconSignInvue_type_template_id_44a31437_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M512 160v192a96 96 0 0 1-96 96h-84a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h84a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32h-84a12 12 0 0 1-12-12V76a12 12 0 0 1 12-12h84a96 96 0 0 1 96 96z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M215.6 295.9H24a23.94 23.94 0 0 1-24-24v-32a23.94 23.94 0 0 1 24-24h191.5l-77.6-71.1a23.84 23.84 0 0 1-.7-34.5l21.9-21.9a24.08 24.08 0 0 1 33.9-.1L344.9 239a24 24 0 0 1 0 34.1L193 423.7a24 24 0 0 1-33.9-.1l-21.9-21.9a24 24 0 0 1 .8-34.7z"}})])}
var IconSignInvue_type_template_id_44a31437_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconSignIn.vue?vue&type=template&id=44a31437&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconSignIn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconSignInvue_type_script_lang_js_ = ({
  mixins: [icon],
});

// CONCATENATED MODULE: ./src/IconSignIn.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconSignInvue_type_script_lang_js_ = (IconSignInvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconSignIn.vue





/* normalize component */

var IconSignIn_component = normalizeComponent(
  src_IconSignInvue_type_script_lang_js_,
  IconSignInvue_type_template_id_44a31437_render,
  IconSignInvue_type_template_id_44a31437_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconSignIn = (IconSignIn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d7d65bb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconToast.vue?vue&type=template&id=058e062f&
var IconToastvue_type_template_id_058e062f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512"}},[_c('path',{class:[_vm.secondary, 'fill-current'],attrs:{"d":"M288 0C108 0 0 93.4 0 169.14 0 199.44 24.24 224 64 224v256c0 17.67 16.12 32 36 32h376c19.88 0 36-14.33 36-32V224c39.76 0 64-24.56 64-54.86C576 93.4 468 0 288 0zM152 448a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-96a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm96 96a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"}}),_c('path',{class:[_vm.primary, 'fill-current'],attrs:{"d":"M152 400a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm0-96a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm96 96a24 24 0 1 0 24 24 24 24 0 0 0-24-24z"}})])}
var IconToastvue_type_template_id_058e062f_staticRenderFns = []


// CONCATENATED MODULE: ./src/IconToast.vue?vue&type=template&id=058e062f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/IconToast.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var IconToastvue_type_script_lang_js_ = ({ mixins: [icon] });

// CONCATENATED MODULE: ./src/IconToast.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_IconToastvue_type_script_lang_js_ = (IconToastvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/IconToast.vue





/* normalize component */

var IconToast_component = normalizeComponent(
  src_IconToastvue_type_script_lang_js_,
  IconToastvue_type_template_id_058e062f_render,
  IconToastvue_type_template_id_058e062f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconToast = (IconToast_component.exports);
// CONCATENATED MODULE: ./src/index.js











const components = [
  IconBang,
  IconCheck,
  IconInfo,
  IconTimes,
  IconEnvelope,
  IconGithub,
  IconLaravel,
  IconNuxt,
  IconPhone,
  IconSignIn,
  IconToast,
]

/* harmony default export */ var src_0 = ({
  install (Vue, options = {}) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
});


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=tv-icon.umd.js.map

/***/ })

/******/ });
});
//# sourceMappingURL=tv-toast.umd.js.map