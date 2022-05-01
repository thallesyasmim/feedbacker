FROM node:14.17.5-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@5.0.4 -g

CMD ["npm", "run", "serve"]