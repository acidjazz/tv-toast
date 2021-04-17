<p align="center">
  <img src="media/toast.png" width="600" />
</p>

[![](https://img.shields.io/npm/v/tv-toast.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/tv-toast)
[![](https://img.shields.io/badge/nuxt.js-module-04C690.svg?style=flat-square)](https://nuxtjs.org)
![Test Javascript](https://github.com/acidjazz/tv-toast/workflows/Test%20Javascript/badge.svg)
[![](https://img.shields.io/npm/dt/tv-toast.svg?style=flat-square)](https://www.npmjs.com/package/tv-toast)
[![](https://img.shields.io/github/license/acidjazz/tv-toast?style=flat-square)](https://www.npmjs.com/package-tv-toast)
<!-- [![](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord&style=flat-square)](https://discord.gg/enn4S6) -->

> This requires [Nuxt.js](https://nuxtjs.org) with the [Tailwind CSS](https://tailwindcss.nuxtjs.org) module

## Quick Setup
1. Add the `nuxt-tailvue` dependency to your Nuxt.js project
```bash
npm install nuxt-tailvue
# OR
yarn add nuxt-tailvue
```

2. Add `nuxt-tailvue` to the `modules` section of `nuxt.config.js`
```js
{
  modules: [
    ['nuxt-tailvue', {toast: true}],
  ]
}
```

3. If you're using [Purge](https://tailwindcss.com/docs/controlling-file-size), add this module to the content section of `tailwind.config.js`

```js
module.exports = {
  ...
  purge: {
    ...
    content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js',
    ],
  },
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

```js
  this.$toast.show({
    title: 'custom colors',
    message: 'these are custom colors',
    classToast: 'bg-teal-600',
    classTitle: 'text-teal-100',
    classMessage: 'text-teal-200',
    classClose: 'text-teal-300',
    classTimeout: 'bg-teal-800',
  })
```
![](media/custom.gif?raw=true)


## Options

### `title`
 - Optional, Default: `false`
### `message`
 - Required, Default: `Please specify a message`
### `type` 
 - Optional, Default: false
 - Acceptable: success, info, danger, warning
### `timeout`
 - Allow the toast to timeout in second(s)
 - Displays a timeout progress bar
 - Optional, Default: `2`
### `progress`
 - Optional, Default: `true`
 - Control if the progress line appears
### `primary` 
 - Provide a label and callback for a primary button
 - Optional, Object,
 - ex: `{ label: 'UNDO', action: () => alert('primary') }`
### `secondary` 
 - Provide a label and callback for a secondary button
 - Optional, Object,
 - ex: `{ label: 'UNDO', action: () => alert('secondary') }`
### `classToast`, `classTitle`, `classMessage`, `classClose`, `classTimeout` 
 - Optional, defaulting to white and grays
 - Specify any tailwind classes you'd like to combine
### `classPrimary`
 - Optional, override the primary button for multiple action toasts
 - default: 'text-indigo-600 hover:text-indigo-500 focus:shadow-outline-blue focus:border-blue-300 active:text-indigo-700 active:bg-gray-50'
### `classSecondary`
- Optional, override the secondary button for multiple action toasts
- default: 'text-gray-700 hover:text-gray-500 focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50',
### `classSingle`
- Optional, override the single button classes
- default: 'text-indigo-600 hover:text-indigo-500',
## Defaults
 
 ### Toast Container
 
 * Default toast container classes are as follows
 
 ```js
 const containerClasses = [
   'z-40', 'fixed', 'inset-0', 'flex', 'flex-col-reverse', 'items-end', 'justify-center',
   'px-4', 'py-6', 'pointer-events-none', 'sm:p-6', 'sm:items-end', 'sm:justify-end'
 ]
```
 
 * You maybe add your own classes to alter the position
 
```js
{
  modules: [
    [ 'nuxt-tailvue', { all: true, toast: { defaults: { containerClasses: [ 'mt-12' ] } } } ],
  ]
}
```
> This will move toasts lower 

### Defaults for Props

You can also set default values for all props passed to the tv-toast component using:

 ```js
 {
   modules: [
     [ 'nuxt-tailvue', 
        { 
            all: true, 
            toast: { 
                defaultProps: { 
                    timeout: 10,
                    progress: false,
                    classToast: 'bg-red-600'
                } 
            } 
        }
    ],
   ]
 }
 ```

