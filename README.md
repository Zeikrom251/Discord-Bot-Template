# Discord Bot Handler

This project provides a basic structure for a Discord bot build with **Discord.js**

## ✨ Features

- **Command Handling :** Load and handle commands dynamically.
- **Database Integration :** Connect a database with reconnection logic.
- **Slash Commands :** Register and handle custom slash commands.
- **Interaction Handlers :** Handle interactions like buttons, select menus, and modals.
- **Error Handling :** Built in error handler.

---

## 📁 Project Structure

```bash
/project
│
├── /commands           # Put your commands in this folder
│   └── ping.js
│
├── /events             # Add other events like "guildMemberAdd" or "messageCreate"
│   ├── ready.js
│   └── interactionCreate.js
│
├── /functions
│   ├── utils.js        # Here you will find pre-created functions that are usefull
│   └── queries.js      # You can add a file and create functions of your queries to your database
│
├── /interactions       # You can check the "interactionCreate" file to understand how it works
│   ├── /buttons
│   ├── /modals
│   └── /selects
│
├── /loader
│   ├── loadCommands.js
│   ├── loadDataBase.js
│   ├── loadEvents.js
│   └── loadSlashCommand.js
│
├── .env              #The dotenv to store sensitive inforamtions like the token
├── config.js         # Edit the config file as you wish
├── index.js
├── package.json        # Dependencies are here
└── README.md
```

---

## 🚀 Installation

### 1. Clone the repository

You can start by cloning the repository to your local machine :

```bash
git clone https://github.com/Zeikrom251/Discord-Bot-Handler.git
```

### 2. Install Dependencies

Navigate to the project folder and install the required dependencies :

```bash
cd Discord-Bot-Handler
npm install
```

### 3. Configuration

Create a **dotenv** file, you name it `.env`. In that file you can put sensitive informations like your bot Token, or your database informations.

Example `.env` :

```js
TOKEN =
DB_HOST =
DB_USER =
DB_PASSWORD =
DB_NAME =
```

> ℹ️ The database use the lib `mysql2`, you can use either a _mysql_ or _mariadb_ database instance.<br>Please refer to [the documentation]([https://www.npmjs.com/package/mysql2](https://sidorares.github.io/node-mysql2/docs/documentation)) for the details.

Edit the `config.js` file with your bot's information, including :

- **token :** Your Discord bot token ([Here](https://discord.com/developers/applications))
- **colors :** Customize the color scheme for your bot `mainServerColor`
- **Channels :** Define channel IDs for logs and error logs.

Example `config.js` :

```js
const Config = {
  token: "YOUR_BOT_TOKEN",
  colors: {
    mainServerColor: "YOUR_HEX_COLOR",
    default: "#2b2d31",
    error: "#ff0000",
    success: "#1fff00",
    warning: "#fff300",
  },
  emotes: {
    error: "❌",
    success: "✅",
    warning: ":warning:",
  },
  channels: {
    logs: "YOUR_CHANNEL_ID",
    errorLogs: "YOUR_CHANNEL_ID",
  },
}

module.exports = Config
```

### 4. Running the Bot

Start the bot by running :

```bash
node index
```

the bot will log in and be ready to accept commands.

---

## 🤝 Contributing

Feel free to fork this repository, create an issue, or submit a pull request if you find any bugs or want to add new features.

---

## 📄 License

This project is licensed under the [MIT License](https://fr.wikipedia.org/wiki/Licence_MIT).
