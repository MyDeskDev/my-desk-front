FROM node:16.15.0-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY .next/ ./.next/
COPY public/ ./public/

RUN npm start
