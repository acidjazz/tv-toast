<p align="center">
  <img src="media/toast.png" />
</p>

<p align="center">
  <a href="https://nuxtjs.org"><img src="https://nuxtjs.org/logos/nuxt-icon.png" width="92" height="92" /></a>
  <a href="https://tailwindcss.com"><img src="https://pbs.twimg.com/profile_images/1278691829135876097/I4HKOLJw_400x400.png" width="92" height="92" /></a>
</p>

[![](https://img.shields.io/npm/v/tv-toast.svg?logo=npm)](https://www.npmjs.com/package/tv-toast)
[![](https://img.shields.io/npm/dt/tv-toast.svg)](https://www.npmjs.com/package/tv-toast)
[![Package Quality](https://npm.packagequality.com/shield/tv-toast.svg)](https://packagequality.com/#?package=tv-toast)
[![](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord)](https://discord.gg/enn4S6)

> programmatic toasts for [nuxtjs](https://nuxtjs.org) powered by [tailwindcss](https://tailwindcss.com)

## Usage

* Show a successful notification
```js
  this.$toast.show({
    type: 'success',
    title: 'Success',
    message: 'This is a successful toast',
  })
```
![](media/success.gif?raw=true)

* Show an Error 
```js
  this.$toast.show({
    type: 'danger',
    title: 'Error',
    message: 'Please specify an e-mail address',
  })
```
![](media/error.gif?raw=true)

* Right-sided split buttons
```js
  this.$toast.show({
    title: 'Toast with actions',
    message: 'This toast has multiple actions',
    primary: { label: 'Primary', action: () => alert('primary') },
    secondary: { label: 'Secondary', action: () => alert('secondary') },
    timeout: false,
  })
```
![](media/actions.gif?raw=true)


## Quick Setup
1. Add `nuxt-tv-toast` dependency to your project
```bash
# Using npm
npm install nuxt-tv-toast
# Using yarn
yarn add nuxt-tv-toast
```
2. Add `nuxt-tv-toast` to the `modules` section of `nuxt.concifg.js`
```js
{
  modules: [
    'nuxt-tv-toast'
  ]
}
```
