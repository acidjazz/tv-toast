<p align="center">
  <img src="media/toast.png" width="600" />
</p>

[![](https://img.shields.io/npm/v/tv-toast.svg?logo=npm)](https://www.npmjs.com/package/tv-toast)
[![](https://img.shields.io/npm/dt/tv-toast.svg)](https://www.npmjs.com/package/tv-toast)
[![](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord)](https://discord.gg/enn4S6)

> programmatic toasts for [nuxtjs](https://nuxtjs.org) powered by [tailwindcss](https://tailwindcss.com)

## Usage

```js
this.toast.show('Keeping it simple')
```
![](media/simple.gif?raw=true)

```js
  this.$toast.show({
    type: 'success',
    title: 'Success',
    message: 'This is a successful toast',
  })
```
![](media/success.gif?raw=true)

```js
  this.$toast.show({
    type: 'danger',
    title: 'Error',
    message: 'Please specify an e-mail address',
  })
```
![](media/error.gif?raw=true)

```js
  this.$toast.show({
    message: 'Single action toast',
    primary: { label: 'UNDO', action: () => alert('primary') },
    timeout: false,
  })
```
![](media/action.gif?raw=true)


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
1. Add the `nuxt-tv-toast` dependency to your Nuxt.js project
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
