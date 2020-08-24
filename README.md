## Simple Martketplace APP

An application to show and "buy" itens from a realtime firebase datase.

This app uses the same database from my other repo [`React-firebase-Product-register`](https://github.com/willerlucas/react-firebase-Product-register)

You will need to set your firebase configuration at the [`firebaseConfig.ts`](/src/firebaseConfig.ts) file.

## Project Status
this app is a study on ionic, so there will be updates as the studies continue.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  You will also need `firebase`

To run this example in production or development mode you have to make sure, `ionic` and `cordova` are installed globally on your machine. After that you can install all necessary dependencies for running this example.

0. Check if `npm` is installed. Otherwise please [install `node.js` and `npm`](https://nodejs.org/en/download/package-manager/).
```bash
npm -v
```

1. Install ionic and cordova command line interface globally.
```bash
npm install -g cordova ionic
```

2. Install all dependencies listed in [`package.json`](/package.json).
```bash
npm install
```

3. Run with
```bash
ionic serve --port=8080
```
