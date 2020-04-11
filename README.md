# OBScore

![Screenshot of OBScore](https://i.imgur.com/ba5i6ih.png)
<p align="center">
  <img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/waffln/obscore-react?include_prereleases">
  <img alt="Discord" src="https://img.shields.io/discord/553557935289270293">
</p>

OBScore is a modular scoreboard controller for setting player tags / names, scores, characters, round and much more.
The controller part of OBScore is designed to be used as an [OBS browser dock](https://youtu.be/E0LLb6SfqRc) but can also be run from a normal modern browser.

OBScore currently ships with one template scoreboard, more will come later.

## Installation

Download the latest [release](releases) and unzip it.

## Usage

[Installation / Usage Video](https://www.youtube.com/watch?v=YWwYGsZNzwc)
- Launch the host for your OS version
- Add the controller HTML file as a browser dock, or open it in your own browser
- Add a scoreboard HTML file as a browser source in OBS

## Development

What you need:

- [NodeJS](https://nodejs.org/) (comes with NPM)

### Controller

Setup:

```sh
cd controller
npm install
```

Run for development: `npm run start` (from `/controller/`) or `npm run controller` (from repository root)

Build for production: `npm run build` (from `/controller/`)

### Host

Setup:

```sh
cd host
npm install
```

Run for development: `ts-node main.ts` (from `/host/`, requires `npm i -g ts-node`)

Build for production: `pkg main.ts` (from `/host/`, requires `npm i -g pkg`)

### Client (script file for scoreboards)

Setup:

```sh
cd client
npm install
```

Run for development: `parcel index.html` (from `/client/`, requires `npm i -g parcel`)

Build for production: `parcel build index.html` (from `/client/`, requires `npm i -g parcel`)
