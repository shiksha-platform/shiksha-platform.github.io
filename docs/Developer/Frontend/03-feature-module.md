---
title: "Feature Module"
---

As a module developer, I want to develop a feature that can be used in shiksha platform application. This page describes how to start developing a feature module


### What is a Module? 
Module is a standalone unit with related functionality implemented for a feature.

Module has a manifest file with the configuration for the module.

Module can be developed, tested as standalone as well as can be used in host application as remote module (Refer - https://webpack.js.org/concepts/module-federation/)

Example 

Class Module can be tested as a standaolne application. If we browse url http://localhost:3001/my-classes it opens My Classes List page with class card. click on class card navigates to class details page. This functionaliity is developed in class module. The same module can also be iinttegrated into another host application ```"teacher-app"``` as http://localhost:4000/classes

### Create a new  "feature-module-1" module

* clone template module
```shell
// <root directory>
cp -R module-template packages/feature-module-1
```
* Edit ```packages/feature-module-1/package.json``` and update module name
```
{
"name": "feature-module-1",
...
}
```
* Update ```packages/[module-name]/craco.config.js``` and assign a port for dev environment.
```
module.exports = {
  devServer: {
    port: 3001,
  },
  ...
```
* update ```packages/feature-module-1/moduleFederation.config.js```
```
...
module.exports = {
  name: "feature-module-1",
...
```
* Add pages, components to the module and implement the feature
* Expose the pages and components that can be loaded remotely from host application
```
// e.g. Attendance module exposes Attendance page which can be added to a rooute in// host application. 
...
module.exports = {
  name: "attendance",
  exposes: {
    "./Attendance": "./src/pages/Attendance",
  },
...
```

