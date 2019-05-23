FROM node:12

LABEL maintainer "nju33 nju33.ki@gmail.com"

WORKDIR /usr/src

COPY . .

RUN yarn && yarn link

ENTRYPOINT ["docker-svgr"]
