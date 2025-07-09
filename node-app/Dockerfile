FROM node:18-alpine

WORKDIR /app

COPY . .

RUN rm -rf node_modules

RUN npm install --omit=dev

RUN apk add --no-cache bash

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

CMD ["/wait-for-it.sh", "db:3306", "--", "node", "./bin/www"]