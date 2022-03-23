---
sidebar_position: 1
title: "Getting Started"
---

<!-- ## Requirements -->

## Requirements :scroll:

- Your machine should have [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) or [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

_Note: Preferable versions_

|       | Version |
| ----- | ------- |
| node  | 16      |
| npm   | 6       |
| yarn  | 1.16    |
| lerna | 4       |

- Check the node and npm version by running following commands.

```sh
node -v
npm -v
```

- Install lerna globally by running following command.

```
npm i lerna -g
```

- Install yarn

```
npm i yarn -g
```

## Installation Steps :walking:

### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [Frontend](https://github.com/shiksha-platform/frontend-modulefederation) by using the <kbd><b>Fork</b></kbd> button.

![Fork Repo](/img/frontend-dev/fork.png)

### 2. Clone it :busts_in_silhouette:

You need to clone (download) it to a local machine using

```sh
git clone https://github.com/Your_Username/frontend-modulefederation.git
```

> This makes a local copy of the repository in your machine.

![Clone Repo](/img/frontend-dev/clone.png)

Once you have cloned the `frontend-modulefederation` repository in GitHub, move to that folder first using the change directory command.

This will change directory to a folder
```sh
cd frontend-modulefederation
```

![cd repo](/img/frontend-dev/cd.png)

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that _your local copy_ has a reference to _your forked remote repository_ in GitHub :octocat:

```sh
git remote -v
```
By running the above command, you can see that the local copy has a reference to the forked remote repository in GitHub.
```
origin  https://github.com/Your_Username/frontend-modulefederation.git (fetch)
origin  https://github.com/Your_Username/frontend-modulefederation.git (push)
```

![set up repo](/img/frontend-dev/setup.png)

### 4. Run it :checkered_flag:

- Install dependencies

```
yarn install
```

- Build @shiksha/common-lib

```
lerna run build --scope=@shiksha/common-lib
```

- Run frontend application in dev environment

```
yarn start
```

Browse - http://localhost:4000

- Run standalone module in dev environment

```sh
lerna run  start --scope=[module-name]
// e.g.  to run attendance module
lerna run  start --scope=attendance
```

Browse - http://localhost:[module port number]
