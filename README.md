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
│   ├── ping.js
│
├── /events             # Add other events like "guildMemberAdd" or "messageCreate"
│   ├── ready.js
│   ├── interactionCreate.js
│
├── /loader
│   ├── loadCommands.js
│   ├── loadDataBase.js
│   ├── loadEvents.js
│   ├── loadSlashCommand.js
│
├── config.json         # Edit the config file as you wish
├── main.js
├── package.json        # Dependencies are here
└── README.md
```

---

## 📥 Installation

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

Edit the `config.json` file with your bot's information, including :

- **token :** Your Discord bot token ([Here](https://discord.com/developers/applications))
- **colors :** Customize the color scheme for your bot `mainServerColor`
- **Channels :** Define channel IDs for logs and error logs.
- **_Optionnal :_**
  - _db :_ Configure your database connection settings (host, user, password, database name).

Example `config.json` :

```json
{
  "token": "YOUR_BOT_TOKEN",
  "colors": {
    "mainServerColor": "#FF5733",
    "default": "#1e2124",
    "error": "#ff0000",
    "success": "#1fff00",
    "warning": "#fff300"
  },
  "emotes": {
    "error": "❌",
    "success": "✅",
    "warning": ":warning:"
  },
  "channels": {
    "logs": "YOUR_CHANNEL_ID",
    "errorLogs": "YOUR_CHANNEL_ID"
  },
  "db": {
    "dataBaseHost": "localhost",
    "dataBaseUser": "root",
    "dataBasePassword": "YOUR_PASSWORD",
    "dataBaseName": "YOUR_DATABASE_NAME"
  }
}
```

### 4. Running the Bot

Start the bot by running :

```bash
npm start
```

the bot will log in and be ready to accept commands.

---

## 📨 Contributing

Feel free to fork this repository, create an issue, or submit a pull request if you find any bugs or want to add new features.

---

**📋 License :** This project is licensed under the MIT License.
