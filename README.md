# svelte-mounter
Mount a Svelte component to a DOM element.

## Install
* `npm i svelte-mounter`

Ensure you already have svelte and webpack:
* `npm i svelte`
* `npm i svelte-loader`
* `npm i webpack`

## Config
See the [webpack settings here](https://github.com/sveltejs/svelte-loader).

# Example

## 1) Mount Point
Create a mount point in your HTML:
```
<div id="js-svelte-mount"></div>
```

## 2) Mount Component
Mount a Svelte component:
```
import mount from "svelte-mounter";
import MyComponent from "./MyComponent.svelte";

mount(MyComponent, "js-svelte-mount");
```
