FROM node:18-alpine

WORKDIR /app

COPY . .

COPY data /data

COPY sql /sql

RUN npm install

EXPOSE 3000

CMD ["npm","start"]
