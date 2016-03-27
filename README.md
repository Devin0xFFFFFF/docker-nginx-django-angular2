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
docker-compose kill //kill any containers executed from the docker-compose yml

Interesting Notes:
 - In docker-compose links does the same thing as depends_on, forcing containers to be created in order

Steps:

- Clone the repo
- Make sure docker-compose and docker are installed on your machine
- Make sure node and npm are installed on your machine
- open static/angular2
- run npm install --production
- go back to project root
- run docker-compose build
- run docker-compose up -d

References:
 - Docker Compose File Reference: https://docs.docker.com/compose/compose-file/

 - Django Docker Hub: https://hub.docker.com/_/django/
 - Nginx Docker Hub: https://hub.docker.com/_/nginx/
 - Redis Docker Hub: https://hub.docker.com/_/redis/