#FROM node:16-alpine
FROM node:18.12.1-alpine3.17
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
ENTRYPOINT ["npm","run","serve"]
