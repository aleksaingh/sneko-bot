require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/as-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
app.command("/as-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/as-ping - Check bot latency
/as-catfact - Get a cat fact
/as-weather - Gets weather of a city you name
/as-fact - Random fact
/as-dadjoke - Get a random dad joke`
  });
});
app.command("/as-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});
app.command("/as-weather", async ({ ack, respond, command }) => {
  await ack();
  try {
    const city = command.text || "London";
    const response = await axios.get(`https://wttr.in/${city}?format=3`);
    await respond({ text: `Weather:\n${response.data}` });
  } catch (err) {
    await respond({ text: "Failed to fetch the weather." });
  }
});

app.command("/as-fact", async ({ ack, respond, command }) => {
  await ack();
  try {
    const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
    await respond({ text: `Random Fact:\n${response.data.text}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a fact." });
  }
});
app.command("/as-dadjoke", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });
    await respond({ text: ` ${response.data.joke}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a dad joke." });
  }
});