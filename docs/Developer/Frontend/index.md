---
sidebar_position: 1
title: Frontend
---

##  Shiksha Frontend Architecture
Applications can be composed of modules. 
Modules are independent unit for related functionality

![Micro Frontend Architecture](/img/frontend-dev/micro-frontend.png)

## What is Module?
Module is a standalone unit with related functionality implemented for a feature.
Module has a manifest file with the configuration for the module.

Example:

We have a My Classes page in teacher app and Attendance page where teacher marks attendance for the class. Instead of devloping all the functionality in single app, we create a ```ClassModule``` and ```Attendance``` module apps.
```ClassModule``` implements feature for ```MyClasses``` page.
```Attendace``` module implements feature for ```Attendace``` page. 
The ```Attendance``` page is quite  generic which can be used to mark attendace of anny entiity like teacher, student etc.
```teacher-app``` is host application which can reuse components from  ```ClassModule``` and ```Attendance```

```ClassModule``` and ```Attedance``` can be hosted as standalone application.

Module can also use exposed component from other module.
## What is Application?
Application is composed of many feature modules.

Application has Shell and Routes.

Routes are navigated to remote module's exposed Page component

## Shiksha Common Library ```@shiska/common-lib```

This is a UI components and Utility packages that can be reused across modules and applications

