FROM node:6.13.0
WORKDIR /reviews

COPY package.json .
RUN npm install --quiet

COPY . .

