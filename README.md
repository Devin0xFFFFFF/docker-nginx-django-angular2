docker exec -it dockernginx_nginx_1 bash

Currently run npm install in  ./angular2 on host
Also run python manage.py migrate in ./django_server
python manage.py makemigrations django_server_app

By running makemigrations, you’re telling Django that you’ve made some changes to your models (in this case, you’ve made new ones) and that you’d like the changes to be stored as a migration.

python manage.py sqlmigrate django_server_app 0001

The sqlmigrate command doesn’t actually run the migration on your database - it just prints it to the screen so that you can see what SQL Django thinks is required. 
It’s useful for checking what Django is going to do or if you have database administrators who require SQL scripts for changes.

python manage.py check

Checks for any problems in your project without making migrations or touching the database.

Default superuser: (python manage.py createsuperuser)
devin, admin@example.com, 111111

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