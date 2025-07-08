FROM node:18-alpine

WORKDIR /app

COPY . .

RUN rm -rf node_modules

RUN npm install --omit=dev

CMD ["node", "./bin/www"]