FROM node:17

WORKDIR /workspace

RUN apt-get update
RUN apt-get install python -y

COPY package.json .
COPY package-lock.json .

RUN npm install