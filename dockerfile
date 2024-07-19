FROM node:latest

WORKDIR /app

COPY package.json /app/
COPY server.js /app/
COPY index.html /app/
COPY calculator.js /app/

RUN npm install express

EXPOSE 3000

CMD ["node", "server.js"]
