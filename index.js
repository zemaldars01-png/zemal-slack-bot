require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

// Ping command
app.command("/zemalbot-ping", async ({ ack, respond }) => {
    await ack();

    await respond(
        "🏓 Pong! ZemalBot is online."
    );
});

// Hello command
app.command("/zemalbot-hello", async ({ ack, respond, command }) => {
    await ack();

    await respond(
        `👋 Hello <@${command.user_id}>! I'm ZemalBot. Nice to meet you!`
    );
});

// Status command
app.command("/zemalbot-status", async ({ ack, respond }) => {
    await ack();

    const uptime = Math.floor(process.uptime());

    await respond(
        `✅ ZemalBot Status: Online\n⚡ Socket Mode: Connected\n⏱ Uptime: ${uptime} seconds`
    );
});

// Help command
app.command("/zemalbot-help", async ({ ack, respond }) => {
    await ack();

    await respond({
        text:
`Available Commands:

/zemalbot-ping - Check if the bot is online
/zemalbot-hello - Get a greeting
/zemalbot-status - Check bot status
/zemalbot-catfact - Get a random cat fact
/zemalbot-joke - Get a random joke`
    });
});

// Cat fact command
app.command("/zemalbot-catfact", async ({ ack, respond }) => {
    await ack();

    try {
        const response = await axios.get(
            "https://catfact.ninja/fact"
        );

        await respond({
            text: `🐱 Cat Fact:\n${response.data.fact}`
        });
    } catch (error) {
        await respond({
            text: "Sorry, I could not fetch a cat fact."
        });
    }
});

// Joke command
app.command("/zemalbot-joke", async ({ ack, respond }) => {
    await ack();

    try {
        const response = await axios.get(
            "https://official-joke-api.appspot.com/random_joke"
        );

        await respond({
            text:
`😂 ${response.data.setup}

${response.data.punchline}`
        });
    } catch (error) {
        await respond({
            text: "Sorry, I could not fetch a joke."
        });
    }
});

// Start the bot
(async () => {
    try {
        await app.start();

        console.log("⚡ ZemalBot is running!");
        console.log("Ready to receive Slack commands.");
    } catch (error) {
        console.error("Failed to start ZemalBot:", error);
        process.exit(1);
    }
})();