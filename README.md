# IVAOFR Discord Bot
### Requirements
- NodeJS >=14.x
## Installation

### Environment variables (required)

| Variable | Value |
|---|---|
| NODE_ENV | `production|development` |
| BOT_TOKEN | `Bot authentication token provided by Discord`   |
| GUILD_ID | `Guild ID, server ID` |
| INVITE_CHANNEL | `Channel members will be invited to` |
| WEBSITE_DISCORD_API_URL | `Website API URL` |
| WEBSITE_DISCORD_API_TOKEN | `Website API token` |
| STORAGE | `Storage used to store Discord user data, only 'rest' value is supported for now` |
| PORT | `Port the Discord Bot should listen to. Default: 8081` |


### Dev installation

>**Never use IVAO Bot token OR IVAO Discord GUILD ID for development**

```bash
$ npm install
$ cp ./config/.env.example ./config/development/.env
$ npm run start
```

### Docker installation

```bash
$ npm install
$ 
```
