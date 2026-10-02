# React + TypeScript Examples

After running `npm install`, start dev mode with `npm run dev` or build the project with `npm run build` (see `package.json` for further details).

The example app covers the following aspects of React:

1. Components (parent and child relationships)
2. Props (including callback functions)
3. The useState hook
4. The useEffect hook

The example app has three main React Components:

## Counter

Text input and counter with separate button component. A revised version of the vite example from [Build a React app from Scratch](https://react.dev/learn/build-a-react-app-from-scratch) in the official docs. This example removes the styling, moves the count button to new component and adds a text input example.

## Game

Adapted from [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe) in the offical docs. Added type declarations and `useEffect` to create a temporary colour change.

## Questions

Load questions from a json file using JSON Server. Run `npx json-server db.json` in and they should be available from `http://localhost:3000/questions`. These questions are used in the [JavaScript Quiz App Examples](https://github.com/ctlnorwich/JavaScript-Quiz-App-Examples) repo.
