FROM node:15.14.0-alpine
RUN apk update
RUN apk add python
RUN apk add build-base
RUN apk add make
RUN apk add git

WORKDIR /app

COPY .npmrc .
COPY package.json .
COPY webpack.config.js .
COPY config/ config
COPY src/ src



RUN npm install --production

CMD [ "node", "src/server.js" ]