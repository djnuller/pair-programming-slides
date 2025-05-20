FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10

RUN npm install -g vite

COPY . .

CMD [ "npm", "run", "dev" ]