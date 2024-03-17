# svelte-mounter
Mount a Svelte component to a DOM element using Webpack.

## Install
`npm i svelte svelte-loader svelte-mounter`

## Config
See the [webpack settings here](https://github.com/sveltejs/svelte-loader)

## Example

### 1) Mount Point
Create a mount point in your HTML:
```
<div id="js-svelte-mount"></div>
```

### 2) Mount Component
Mount a Svelte component:
```
import mount from "svelte-mounter";
import MyComponent from "./MyComponent.svelte";

mount("js-svelte-mount", MyComponent);
```

## Contribute
https://github.com/geo4orce/svelte-mounter
