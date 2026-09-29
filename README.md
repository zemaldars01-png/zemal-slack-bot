# ZemalBot

ZemalBot is a custom Slack bot built for the Hack Club Stardance Challenge.

It is written in JavaScript using Node.js and Slack Bolt, and it uses Socket Mode to connect with the Hack Club Slack workspace.

The bot supports multiple custom slash commands, including utility commands and API-powered commands.

## Features

ZemalBot currently supports the following slash commands:

- `/zemalbot-ping` - checks if the bot is online
- `/zemalbot-hello` - sends a friendly greeting
- `/zemalbot-status` - shows the bot status and uptime
- `/zemalbot-help` - displays all available commands
- `/zemalbot-catfact` - fetches a random cat fact from an external API
- `/zemalbot-joke` - fetches a random joke from an external API

## Technologies Used

- JavaScript
- Node.js
- Slack Bolt
- Slack Socket Mode
- Axios
- dotenv
- Git
- GitHub
- Hack Club Nest for hosting

## How It Works

ZemalBot connects to Slack using Socket Mode.

When a user runs one of the registered slash commands, Slack sends the command to the bot.

The bot acknowledges the command using `ack()` and sends a response back to Slack using `respond()`.

For API-powered commands such as `/zemalbot-catfact` and `/zemalbot-joke`, the bot sends a request to an external API using Axios, receives the data, and displays the result inside Slack.

## Commands

### `/zemalbot-ping`

Checks whether ZemalBot is online and responding.

Example:

```text
🏓 Pong! ZemalBot is online.
```

### `/zemalbot-hello`

Sends a greeting to the user who runs the command.

Example:

```text
👋 Hello @user! I'm ZemalBot. Nice to meet you!
```

### `/zemalbot-status`

Shows the current status of ZemalBot and how long the bot process has been running.

Example:

```text
✅ ZemalBot Status: Online
⚡ Socket Mode: Connected
⏱ Uptime: 120 seconds
```

### `/zemalbot-help`

Displays a list of all available ZemalBot commands.

### `/zemalbot-catfact`

Fetches and displays a random cat fact using an external API.

Example:

```text
🐱 Cat Fact:
Cats only sweat through their paws.
```

### `/zemalbot-joke`

Fetches and displays a random joke using an external API.

Example:

```text
😂 Why did the house go to the doctor?

It was having window panes.
```

## Project Structure

```text
zemal-slack-bot/
│
├── index.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
├── .wakatime-project
└── .env
```

The `.env` file contains private Slack tokens and is excluded from GitHub using `.gitignore`.

## Installation

Clone the repository:

```bash
git clone https://github.com/zemaldars01-png/zemal-slack-bot.git
```

Move into the project folder:

```bash
cd zemal-slack-bot
```

Install the required dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file inside the project folder.

Add:

```env
SLACK_BOT_TOKEN=your_bot_user_oauth_token
SLACK_APP_TOKEN=your_app_level_token
```

`SLACK_BOT_TOKEN` should contain the Slack Bot User OAuth Token.

`SLACK_APP_TOKEN` should contain the Slack App-Level Token used for Socket Mode.

Never upload real tokens to GitHub or include them directly in the source code.

## Running the Bot Locally

Start the bot with:

```bash
npm start
```

You can also run it directly with:

```bash
node index.js
```

If the connection is successful, the terminal should display:

```text
⚡ ZemalBot is running!
Ready to receive Slack commands.
```

You can then test the slash commands inside Slack.

## Slack App Setup

The Slack app uses Socket Mode and the slash commands must also be registered inside the Slack API dashboard.

The following commands are currently registered:

```text
/zemalbot-ping
/zemalbot-hello
/zemalbot-status
/zemalbot-help
/zemalbot-catfact
/zemalbot-joke
```

The app uses Slack permissions required for handling slash commands and sending responses.

## API Integration

ZemalBot uses Axios to make requests to external APIs.

### Cat Fact API

The `/zemalbot-catfact` command uses:

```text
https://catfact.ninja/fact
```

The API returns a random cat fact, which ZemalBot sends back into Slack.

### Joke API

The `/zemalbot-joke` command uses:

```text
https://official-joke-api.appspot.com/random_joke
```

The API returns a joke setup and punchline, which ZemalBot displays in Slack.

Both API commands use `try/catch` error handling so the bot can respond safely if an API request fails.

## Security

Sensitive information is stored inside the `.env` file.

The following files and folders are excluded from Git:

```text
node_modules
.env
.DS_Store
```

Slack tokens should never be committed to a public repository.

## Hosting

The project is designed to be hosted on Hack Club Nest.

Running the bot on Nest will allow ZemalBot to remain online even when the local computer is turned off.

Local development and testing are currently working.

24/7 deployment through Hack Club Nest is the next deployment step.

## Stardance Challenge

ZemalBot was built as part of the Hack Club Stardance Challenge.

The project currently includes:

- a working Slack app
- six custom slash commands
- Slack Socket Mode integration
- API-powered commands
- error handling
- secure environment variables
- Git version control
- a public GitHub repository
- preparation for 24/7 hosting on Hack Club Nest

## Future Improvements

Possible future improvements include:

- adding more API-powered commands
- adding interactive Slack messages
- creating more useful automation commands
- improving status information
- improving API error handling
- adding more personalized bot responses
- adding additional integrations

## Author

**Zemal Dars**

Built for the Hack Club Stardance Challenge.