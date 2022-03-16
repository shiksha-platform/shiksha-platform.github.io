---
title: "Host Application"
---

As a application developer I have a feature module. Now I want to integrate this into my application (e.g. teacher-app). This page describes how to use the feature module's exposed component into app

### What is a Host Applcation? 

### Using module in host application?

Example -
I have ```feature-module-1``` module which exposes ```FeaturePage1``` page component. Now i want to load the ```FeaturePage1``` page into ```my-app-1``` at routes ```/feature1/:param1```

* Add module entry in application's ```modules.json```
The port number must match to the port specifiied in module package's ```craco.confiig.js```
```
// packages/my-app-1/public/modules.json
// 
{
    "featureModule1":{
        "url": "http://localhost:3002"
    }
    ...
}
```
![Configure Remote Module](/img/frontend-dev/remote-host-config-2.png)

* Add module entry in application's ```modulefederation.config.js```
module name must match with that mentioned in module's modulefederation.config.js

```
// packages/my-app-1/modulefederation.config.js
module.exports = {
  ...
  remotes: {
    ...
    featureModule1: "featureModule1@[window.appModules.featureModule1.url]/moduleEntry.js",
    ...
  },
  ...
}
```
![Configure Remote Module](/img/frontend-dev/remote-host-config-1.png)

* Load remote component and add route for the component
```
// packages/my-app-1/src/App.js
...
const FeaturePage1Component = React.lazy(() => import("featureModule1/FeaturePage1"));
...

<React.Suspense fallback="Loading ">
<Route
  path="/feature1/:param1"
  element={
    <FeaturePage1Component />
  }
/>
</React.Suspense>
...

```
* It is important to enclose the remote component within ```<React.Suspense>```