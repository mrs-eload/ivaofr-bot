FROM node:16.14.12-alpine
RUN apk update
RUN apk add build-base
RUN apk add make

COPY package.json .
COPY tsconfig.json .
COPY tsconfig.build.json .
COPY config/ config
COPY src/ src

RUN npm install

RUN npm run ts:build

CMD [ "node", "dist/server.js" ]