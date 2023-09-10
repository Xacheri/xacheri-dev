# xacheri-dev
Basic steps for configuring a Vue.js project with npm

## Required Software
[node package manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (npm)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
This project uses the node package manager to install dependencies specified in package.json, including Vue.js and ESLint
```sh
cd xacheri-dev
npm install
```

### Compile and Hot-Reload for Development
To run the project during development, ```npm run dev`` will compile, launch in browser, and reload the code to see changes made live.
```sh
npm run dev
```

### Compile and Minify for Production
To build the project into a production/native package, run
```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)
To lint the project with ESLint run
```sh
npm run lint
```
