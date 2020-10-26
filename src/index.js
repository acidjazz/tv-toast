import TvToast from './tv-toast.vue'
import { spawn, removeElement } from './utils.js'

let installed = false

const containerClasses = [
  'z-40', 'fixed', 'inset-0', 'flex', 'flex-col-reverse', 'items-end', 'justify-center',
  'px-4', 'py-6', 'pointer-events-none', 'sm:p-6', 'sm:items-end', 'sm:justify-end'
]

export default {
  install(Vue) {
    if (installed) return
    Vue.component('TvToast', TvToast)
    installed = true
  }
}

export { TvToast, spawn, removeElement, containerClasses }
