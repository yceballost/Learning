//v1 basic selection

var document = require('sketch/dom');
var doc = context.document;
var selection = context.selection;
var layer = selection.firstObject();

if (selection.length > 1) {
    console.log('Please select only one layer!');
  }else{
    if (layer) {
    console.log("lo tengo!");
    }else{
    console.log("no lo tengo..");
  }
}


// v2 basic selection + layer properties



var document = require('sketch/dom');
var sketch = context.api();
var doc = context.document;
var selection = context.selection;
var layer = selection.firstObject();

if (selection.length > 1) {
    console.log('Please select only one layer!');
  }else{
    if (layer) {
    console.log(layer.name());
    console.log(layer.name());
    console.log(layer.name());
    }else{
    console.log("Please select a layer!");
  }
}

// v3
