# Common build stage
FROM node:16.15.1-stretch as common-build-stage

RUN apt-get update

RUN apt-get install build-essential

RUN apt-get install python3

COPY . ./app

WORKDIR /app

RUN npm install

RUN rm -f .npmrc

RUN chmod -R 777 /root

EXPOSE 3000

# Development build stage
FROM common-build-stage as development-build-stage

RUN chown -R node:node /tmp

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
