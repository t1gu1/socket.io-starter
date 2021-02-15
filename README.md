# Socket.io typescript starter

## Commands

- `npm start` to start the dev server with watcher (Compile typescript)
- `npm prod` to start the prod server

### Less important commands

- `npm tsc` Only compile typescript to javascript (src to dist)
- `npm dist` Only run dist/index.js with nodeJS

## Setup

- Install modules `yarn install`
- Copy .env.example to .env (You can change the PORT)
- Run it `npm start`!

## Tools to test

- Go to: <http://amritb.github.io/socketio-client-tool/>
- Change the port in the first input to `3000`
- Click Connect

You can go in the **Emit** tab and add `moveRight` or `moveLeft` event to test the events.
