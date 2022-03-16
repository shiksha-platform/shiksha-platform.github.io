---
title: "Host Application"
---

As a application developer I have a feature module. Now I want to integrate this into my application (e.g. teacher-app). This page describes how to use the feature module's exposed component into app

### What is a Host Applcation? 

### Using module in host application?

Example -
I have ```feature-module-1``` module which exposes ```FeaturePage1``` page component. Now i want to load the ```FeaturePage1``` page into ```my-app-1``` at routes ```/feature1/:param1```

* Add module entry in application's module.json
```
// packages/my-app-1/public/module.json
{
    "featureModule1":{
        "url": "http://localhost:3002"
    }
    ...
}
```
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