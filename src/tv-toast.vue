<template>
  <!-- div class="z-40 fixed inset-0 flex flex-col-reverse items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-end sm:justify-end'"></div> make sure these dont get purged -->
  <transition enter-active-class="transform ease-out duration-300 transition" enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-class="opacity-100" leave-to-class="opacity-0">
    <div v-if="active && primary === false" :class="classToast" class="max-w-sm w-full shadow-lg rounded-lg pointer-events-auto relative mb-4 overflow-hidden">
      <div v-if="timeout" :class="classTimeout" class="absolute left-0 bottom-0 right-0 h-1 rounded" :style="`width: ${timeLeftPercent}%`"></div>
      <div :class="classToast" class="rounded-lg shadow-xs overflow-hidden z-100">
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div v-if="type === 'success'" class="border-2 border-green-200 rounded-full p-1">
                <IconCheck class="w-3 h-3" primary="text-green-400" secondary="text-green-300"></IconCheck>
              </div>
              <div v-if="type === 'info'" class="border-2 border-blue-200 rounded-full p-1">
                <IconInfo class="w-3 h-3" primary="text-blue-400" secondary="text-blue-300"></IconInfo>
              </div>
              <div v-if="type === 'warning'" class="border-2 border-yellow-200 rounded-full p-1">
                <IconBang class="w-3 h-3" primary="text-yellow-400" secondary="text-yellow-300"></IconBang>
              </div>
              <div v-if="type === 'danger'" class="border-2 border-red-200 rounded-full p-1">
                <IconBang class="w-3 h-3" primary="text-red-400" secondary="text-red-300"></IconBang>
              </div>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p v-if="title" :class="classTitle" class="text-sm leading-5 font-medium">{{ title }}</p>
              <p :class="[classMessage, {'mt-1': title}]" class="text-sm leading-5 overflow-scroll" v-html="message"></p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button class="inline-flex text-gray-400 transition ease-in-out duration-150 focus:outline-none focus:text-gray-500" @click="destroy">
                <IconTimes class="h-4 w-4" :primary="classClose" :secondary="classClose"></IconTimes>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="active && primary !== false && secondary !== false" :class="classToast" class="max-w-md w-full shadow-lg rounded-lg pointer-events-auto mb-4">
      <div v-if="timeout"  class="absolute left-0 bottom-0 right-0 h-1 rounded bg-gray-100" :style="`width: ${timeLeftPercent}%`"></div>
      <div class="flex rounded-lg shadow-xs">
        <div class="w-0 flex-1 flex items-center p-4">
          <div class="w-full">
            <p v-if="title" :class="classTitle" class="text-sm leading-5 font-medium">{{ title }}</p>
            <p :class="[classMessage, {'mt-1': title}]" class="text-sm leading-5" v-html="message"></p>
          </div>
        </div>
        <div class="flex border-l border-gray-200">
          <div class="-ml-px flex flex-col">
            <div class="h-0 flex-1 flex border-b border-gray-200">
              <button class="-mb-px flex items-center justify-center w-full rounded-tr-lg border border-transparent px-4 py-3 text-sm leading-5 font-medium text-indigo-600 transition ease-in-out duration-150 hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-indigo-700 active:bg-gray-50" @click="primaryAction">{{ primary.label }}</button>
            </div>
            <div class="-mt-px h-0 flex-1 flex">
              <button class="flex items-center justify-center w-full rounded-br-lg border border-transparent px-4 py-3 text-sm leading-5 font-medium text-gray-700 transition ease-in-out duration-150 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50" @click="secondaryAction">{{ secondary.label }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="active && primary !== false && secondary === false" :class="classToast" class="max-w-sm w-full shadow-lg rounded-lg pointer-events-auto mb-4">
      <div v-if="timeout"  class="absolute left-0 bottom-0 right-0 h-1 rounded bg-gray-100" :style="`width: ${timeLeftPercent}%`"></div>
      <div class="rounded-lg shadow-xs overflow-hidden">
        <div class="p-4">
          <div class="flex items-center">
            <div class="w-0 flex-1 flex justify-between">
              <p class="w-0 flex-1 text-sm leading-5 font-medium text-gray-900" v-html="message"></p>
              <button class="ml-3 flex-shrink-0 text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150" @click="primaryAction">{{ primary.label }}</button>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
                <IconTimes class="h-4 w-4" :primary="classClose" :secondary="classClose"></IconTimes>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { removeElement } from './utils.js'
import IconCheck from './icons/IconCheck'
import IconBang from './icons/IconBang'
import IconTimes from './icons/IconTimes'
export default {
  components: { IconCheck, IconBang, IconTimes, },
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
      default: 'bg-gray-100',
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
}
</script>
