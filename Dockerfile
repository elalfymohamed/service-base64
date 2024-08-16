FROM node:21

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 9090

CMD ["npm", "start"]
