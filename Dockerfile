FROM node:15.14.0-alpine
RUN apk update
RUN apk add python
RUN apk add build-base
RUN apk add make

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./config/", "./src/", "./vendor/", "webpack.config.js", "./"]
RUN npm install --production
RUN npm link discord.js

CMD [ "node", "server.js" ]