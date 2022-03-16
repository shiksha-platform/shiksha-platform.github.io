---
title: "Folder Structure"
---


Below is the folder structure for front end application

```shell
/module-template
/packages/common-lib
/packages/attendance
/packages/teachers-app
...

```
![Folder Structure](/img/frontend-dev/folder-1.png)

## Module Folder Structure

```shell
/packages/attendance/src/components
/packages/attendance/src/pages
/packages/attendance/src/services
packages/attendance/craco.config.js
packages/attendance/modulefederation.config.js
packages/attendance/package.json
...

```
```components``` - Add presentation components to this folder.
```pages``` - Add navigation page components to this folder.
```services``` - Non presentation classes e.g. Utility, Backend API client classes.

## Important Notes:
If ```craco.config.js```, ```modulefederation.config.js``` is modified, application need to be restarted  
```
yarn start
```