---
sidebar_position: 1
title: "Getting Started"
---

## Requirements
---
|             | Version |
| ----------- | ----------- |
| node  | 16       |
| npm   | 6        |
| yarn   | 1.16        |
| lerna   | 4        |

## Developer Environment Setup 

* Install node, npm
 https://nodejs.org/en/download/

* Install lerna
``` 
npm i lerna -g
```
* Install yarn
```
npm i yarn -g
```
* Fork the repository
![Fork Repo](/static/img/fork.png)

* Clone git repository 
```
git clone https://github.com/shiksha-platform/frontend-modulefederashstion.git
```

* Move to the directory
```
cd frontend-modulefederation
```

* Install dependencies
```
yarn install
```

* Build @shiksha/common-lib
```
lerna run build --scope=@shiksha/common-lib
```
* Run frontend application in dev environment
```
yarn start
```
Browse - http://localhost:4000