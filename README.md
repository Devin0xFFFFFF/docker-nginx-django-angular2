docker exec -it dockernginx_nginx_1 bash

Currently run npm install in host

RUN apt-get update && apt-get install -y \
build-essential \
nodejs \
npm

RUN cd /usr/share/nginx/angular2/angular2_ts && \
npm install --production

/d/Files/Documents/Projects/Docker\ Nginx\ and\ Django/docker-nginx

Stop and remove all containers:
docker stop `docker ps -aq`
docker rm `docker ps -aq`

Docker Compose:
docker-compose build //build any Dockerfiles specified in docker-compose yml
docker-compose up -d //execute docker-compose yml file on daemon
docker-compose kill //kill nay containers executed from the docker-compose yml

Steps:

- Clone the repo
- Make sure node and npm are installed on your machine
- open static/angular2
- run npm install --production
- go back to project root
- run docker-compose build
- run docker-compose up -d