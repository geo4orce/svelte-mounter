# svelte-mounter
Mount a Svelte component to a DOM element

## Install
* `npm i svelte-mounter`

Ensure you already have:
* `npm i svelte`
* `npm i svelte svelte-loader`

## Config
See the [webpack settings here](https://github.com/sveltejs/svelte-loader).

## Test
Jest `npm test`

## Example

### 1) Mount Point
Create a mount point in your HTML:
```
<div id="js-svelte-mount"></div>
```

### 2) Mount Component
Mount a Svelte component:
```
import svelteMounter from "svelte-mounter";
import MyComponent from "./MyComponent.svelte";

svelteMounter("js-svelte-mount", MyComponent);
```

## Contribute
https://github.com/geo4orce/svelte-mounter

# Releases

## v2.2
Add tests

## v2.1
Expected default name in the example

## v2.0
Swapped Cmp and mount - because mount can be implied.

## v1.0
Init idea
