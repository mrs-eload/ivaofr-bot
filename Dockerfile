FROM node:15.14.0-alpine
RUN apk update
RUN apk add python
RUN apk add build-base
RUN apk add make

WORKDIR /app

COPY package.json .
COPY webpack.config.js .
COPY config/ config
COPY src/ src
COPY vendor/ vendor

RUN npm install --production

CMD [ "node", "server.js" ]