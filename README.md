# ZemalBot

ZemalBot is a simple Slack bot built for the Hack Club Stardance Challenge.

It uses Slack Bolt for JavaScript and Socket Mode to respond to custom slash commands inside the Hack Club Slack workspace.

## Features

ZemalBot currently supports three slash commands:

- `/zemalbot-ping` - checks if the bot is online
- `/zemalbot-hello` - sends a friendly greeting
- `/zemalbot-status` - shows the current bot status

## Technologies Used

- JavaScript
- Node.js
- Slack Bolt
- Socket Mode
- dotenv
- Hack Club Nest for hosting

## How It Works

The bot connects to Slack using Socket Mode.

When a user runs one of the registered slash commands, ZemalBot receives the command and sends a response back to Slack.

## Setup

Install the required dependencies:

```bash
npm install