FROM node:18.16.1

WORKDIR /app
COPY package*.json .

RUN npm i

COPY . .

CMD [ "node", "index.js" ]

EXPOSE 5000