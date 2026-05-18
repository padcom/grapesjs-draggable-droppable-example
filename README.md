# [GrapesJS](https://grapesjs.com/docs/api/component.html#component) `draggable`/`droppable` example

This example shows how to use the `draggable` and `droppable` options for components.

## `draggable`

This defines where this component can be dragged over and finally dropped

## `droppable`

This defines what can be dropped into this component (false = nothing)

## Example

```javascript
  // this defines where this component can be dropped
  draggable: '[data-gjs-type="wrapper"]',
  // this defines what can be dropped into this component (false = nothing)
  droppable: '[data-gjs-type="child"]',
```
