FROM node:16

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD [ "node", "server.js" ]
