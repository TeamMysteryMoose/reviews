FROM node:6.13.0
WORKDIR /app

COPY package.json .
RUN npm install --quiet

COPY . .

