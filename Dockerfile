FROM node:17.2.0-alpine3.14 

WORKDIR /frontend

COPY ./package*.json /frontend

RUN npm install

COPY ./ /frontend

ENV NODE_ENV=production

RUN npm run build-css
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
