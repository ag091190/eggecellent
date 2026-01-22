FROM node:24-alpine
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
EXPOSE 5000
CMD ["node","--env-file=.env","--watch","server.js"]