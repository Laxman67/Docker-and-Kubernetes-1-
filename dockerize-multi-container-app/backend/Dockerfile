FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app

EXPOSE 80

ENV MONGODB_CONTAINER_NAME=mongodb

CMD [ "npm", "start" ]
