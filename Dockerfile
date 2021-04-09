FROM node:15.14.0
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./src/", "./vendor/", "webpack.config.js", "./"]

RUN npm install --production

CMD [ "node", "server.js" ]