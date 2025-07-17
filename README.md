# Discord Bot Handler

This project provides a basic structure for a Discord bot build with **Discord.js**

## ✨ Features

- **Improved Project Structure:** Organized source code with clear separation of concerns
- **Environment-Based Configuration:** Different settings for development and production
- **Command Handling:** Load and handle commands dynamically
- **Database Integration:** Connect to a database with reconnection logic
- **Data Layer Abstraction:** Structured database queries and mutations
- **Slash Commands:** Register and handle custom slash commands
- **Interaction Handlers:** Handle interactions like buttons, select menus, and modals
- **Error Handling:** Built-in error handler
- **Code Formatting:** Prettier configuration for consistent code style

---

## 📁 Project Structure

```bash
/project
│
├── /src                       # Source code directory
│   ├── /commands              # Bot commands
│   │   └── ping.js
│   │
│   ├── /components            # Interactive components
│   │   ├── /interactions
│   │   │   ├── /buttons
│   │   │   ├── /modals
│   │   │   └── /selects
│   │   └── /modules
│   │
│   ├── /context               # Configuration and data context
│   │   ├── /config            # Environment-specific configuration
│   │   │   ├── development.js # Development environment settings
│   │   │   ├── index.js       # Config loader
│   │   │   └── production.js  # Production environment settings
│   │   ├── /data              # Data access layer
│   │   │   └── /data-user     # User-related database operations
│   │   │       ├── mutation.js # Functions for modifying user data
│   │   │       └── queries.js  # Functions for retrieving user data
│   │   └── /utils             # Utility functions
│   │       ├── emoteComposer.js
│   │       ├── errorHandler.js
│   │       └── generateId.js
│   │
│   ├── /events                # Discord event handlers
│   │   ├── interactionCreate.js
│   │   └── ready.js
│   │
│   └── /handlers              # System handlers
│       ├── loadCommands.js
│       ├── loadDataBase.js
│       ├── loadEvents.js
│       └── loadSlashCommand.js
│
├── .env.example              # Example environment variables template
├── .prettierrc               # Prettier code formatting configuration
├── .prettierignore           # Files to exclude from Prettier formatting
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

Copy the example environment file to create your own `.env` file:

```bash
cp .env.example .env
```

Edit the `.env` file with your sensitive information:

```
TOKEN = YOUR_DISCORD_BOT_TOKEN
DB_HOST = YOUR_DATABASE_HOST
DB_USER = YOUR_DATABASE_USER
DB_PASSWORD = YOUR_DATABASE_PASSWORD
DB_NAME = YOUR_DATABASE_NAME
```

> ℹ️ The database uses the `mysql2` library, so you can use either a _MySQL_ or _MariaDB_ database instance.<br>Please refer to [the documentation](https://sidorares.github.io/node-mysql2/docs/documentation) for details.

The configuration system now uses environment-specific settings:

- `src/context/config/production.js` - Main configuration used in production
- `src/context/config/development.js` - Override settings for development (optional)
- `src/context/config/index.js` - Loads the appropriate config based on NODE_ENV

Example configuration structure:

```js
// Example production.js or development.js
module.exports = {
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
    warning: "⚠️",
  },
  channels: {
    logs: "YOUR_CHANNEL_ID",
    errorLogs: "YOUR_CHANNEL_ID",
  },
},
```

### 4. Running the Bot

Start the bot in production mode:

```bash
node index.js
```

Or for development mode:

```bash
NODE_ENV=development node index.js
```

The bot will load the appropriate configuration based on the environment and be ready to accept commands.

## 💾 Database Layer

The project includes a structured database layer in the `src/context/data` directory:

### User Data Example

#### Queries
Query functions in `data-user/queries.js` are used to retrieve data:

```js
// Example query function
async function getUserById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows;
  } catch (error) {
    console.error("Error in 'getUserById':", error);
    throw error;
  }
}
```

#### Mutations
Mutation functions in `data-user/mutation.js` are used to modify data:

```js
// Example mutation function
async function insertUserQuery(userData) {
  try {
    const columns = Object.keys(userData);
    const placehorders = columns.map(() => '?').join(', ');
    const values = Object.values(userData);

    const query = `INSERT INTO users (${columns.join(', ')}) VALUES (${placehorders})`;
    const [result] = await db.query(query, values);
    return result;
  } catch (error) {
    console.error("Error in 'insertUserQuery':", error);
    throw error;
  }
}
```

---

## 📄 License

This project is licensed under the [MIT License](https://fr.wikipedia.org/wiki/Licence_MIT).
