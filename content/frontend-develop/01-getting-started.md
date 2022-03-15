---
title: "Getting Started"
metaTitle: "Getting Started"
metaDescription: "Getting Started"
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
* Fork/Clone git repository 
```
git clone https://github.com/shiksha-platform/frontend-modulefederashstion.git

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