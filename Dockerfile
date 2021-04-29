FROM node:14.15.2-alpine3.10

RUN mkdir -p /app/frontend
WORKDIR /app/frontend


COPY package.json /app/frontend/

RUN npm install

COPY . /app/frontend/

CMD ["npm", "start"]