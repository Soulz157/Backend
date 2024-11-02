FROM node:18-alpine

WORKDIR /app


COPY package.json .
COPY ./src ./src
COPY package-lock.json .

RUN npm install
EXPOSE 8000

COPY . .

CMD [ "npm", "start" ]

