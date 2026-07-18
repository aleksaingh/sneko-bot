# sneko-bot

An all-in-one Slack bot that tells you mostly some fun facts!

---

## Commands

| Command | Description |
|---------|-------------|
| /as-ping | Check the bot's latency |
| /as-dadjoke | Get a random dad joke |
| /as-catfact | Get a random cat fact |
| /as-dog | Get a random dog picture |
| /as-fact | Get a random useless fact |
| /as-weather [city] | Get the weather for a city |

---

## Tech Stack

- Node.js
- Slack Bolt SDK
- axios
- dotenv

---

## Setup

1. Clone the repo
git clone https://github.com/aleksingh/sneko-bot.git
cd sneko-bot

2. Install dependencies
npm install

3. Create a .env file
SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=xapp-...

4. Run the bot
node index.js

---

## APIs Used

- icanhazdadjoke.com - Dad jokes
- catfact.ninja - Cat facts
- dog.ceo - Random dog images
- restcountries.com - Country facts
- uselessfacts.jsph.pl - Useless facts
- wttr.in - Weather

---

## License

MIT
