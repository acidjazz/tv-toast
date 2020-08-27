import TvToast from './tv-toast.vue'
import { spawn, removeElement } from './utils.js'

let installed = false

export default {
  install(Vue) {
    if (installed) return
    Vue.component('TvToast', TvToast)
    installed = true
  }
}

export { TvToast, spawn, removeElement }
