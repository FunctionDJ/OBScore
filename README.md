# OBScore

![Screenshot of OBScore](https://i.imgur.com/ba5i6ih.png)
<p align="center">
  <a href="https://github.com/waffln/OBScore/releases/latest">
    <img
      alt="GitHub release (latest by date including pre-releases)"
      src="https://img.shields.io/github/v/release/waffln/obscore-react?include_prereleases&style=for-the-badge"
    />
  </a>
  <a href="https://discord.gg/zkUEfKB">
    <img
      alt="chat on Discord"
      src="https://img.shields.io/discord/553557935289270293?style=for-the-badge&label=Discord&logo=discord"
    />
  </a>
</p>

OBScore is a modular scoreboard controller for setting player tags / names, scores, characters, round and much more.
The controller part of OBScore is designed to be used as an [OBS browser dock](https://youtu.be/E0LLb6SfqRc) but can also be run from a normal modern browser.

OBScore currently ships with one template scoreboard, more will come later.

## Installation

Download the latest [release](https://github.com/waffln/OBScore/releases/latest) and unzip it.

## Usage

[Installation / Usage Video](https://www.youtube.com/watch?v=YWwYGsZNzwc)
- Launch the host for your OS version
- Add the controller HTML file as a browser dock, or open it in your own browser
- Add a scoreboard HTML file as a browser source in OBS

## Development

What you need:

- [NodeJS](https://nodejs.org/) (comes with NPM)

Setup:

```sh
npm install
```

Build all:

```sh
npm run build
```

To run or build invididual parts, `cd` into the folder and run `npm start` or `npm run build`.
