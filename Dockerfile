FROM node:21.6.1
WORKDIR app
COPY . .
RUN npm install
EXPOSE 9090
CMD ["node", "node.js"]