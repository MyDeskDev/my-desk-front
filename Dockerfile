FROM node:16.15.0-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY .next/ ./
COPY public/ ./

CMD ["npm", "start"]
