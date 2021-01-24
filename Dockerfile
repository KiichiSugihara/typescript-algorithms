FROM node:12

WORKDIR /work
COPY ./work/package.json ./work/yarn.lock ./

RUN yarn install

COPY ./work .
