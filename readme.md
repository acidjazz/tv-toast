<p align="center">
  <img src="media/toast.png" width="600" />
</p>

[![](https://img.shields.io/badge/nuxt.js-v2.14.3-04C690.svg?style=flat-square)](https://nuxtjs.org)
[![](https://img.shields.io/npm/v/tv-toast.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/tv-toast)
[![](https://img.shields.io/npm/dt/tv-toast.svg?style=flat-square)](https://www.npmjs.com/package/tv-toast)
[![](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord&style=flat-square)](https://discord.gg/enn4S6)
[![](https://img.shields.io/github/license/acidjazz/tv-toast?style=flat-square)](https://www.npmjs.com/package-tv-toast)


> programmatic toasts for [Nuxt.js](https://nuxtjs.org) powered by [Tailwind CSS](https://tailwindcss.com)

## Quick Setup
1. Add the `nuxt-tv-toast` dependency to your Nuxt.js project
```bash
npm install nuxt-tv-toast
# OR
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

3. If you're using [Purge](https://tailwindcss.com/docs/controlling-file-size), add this module to the content section of `tailwind.config.js`

```js
module.exports = {
    content: [
      './node_modules/tv-toast/**/*.vue'
  }
```


## Usage

```js
this.$toast.show('Keeping it simple')
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
