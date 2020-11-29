/*
 * utils.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export function removeElement (el) {
  if (typeof (el).remove !== 'undefined')
    el.remove()
  else
    el.parentNode.removeChild(el)
}

// add the component w/ the specified props
export function spawn (id, propsData, Component, Vue, options) {
  if (propsData) {
    if (options) {
      if (options.defaults) {
        propsData.defaults = options.defaults
      }
      if (options.defaultProps) {
        propsData = {...options.defaultProps, ...propsData}
      }
    }
  }
  const Instance = Vue.extend(Component)
  return new Instance({
    el: document.getElementById(id).appendChild(document.createElement('div')),
    propsData,
  })
}
