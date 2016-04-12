#docker-nginx-django-angular2

###A repository to run an Angular 2 Typescript client app with a Django server back-end and an Nginx front-facing proxy server

####Project Contents:

This project consists of an [Angular 2 App](./angular2), a [Django Server](./django_server), and an [Nginx Proxy Server](./nginx). Each get their own Docker container to execute in, and have their own Dockerfile to create Docker images. There is also a Redis container included that is not currently used.  All containers are connected and run through Docker Compose.

####References:

 - [Django Development With Docker Compose and Machine](https://realpython.com/blog/python/django-development-with-docker-compose-and-machine/)
 - [Docker Compose File Reference](https://docs.docker.com/compose/compose-file/)
 - [Django Docker Hub](https://hub.docker.com/_/django/)
 - [Nginx Docker Hub](https://hub.docker.com/_/nginx/)
 - [Redis Docker Hub](https://hub.docker.com/_/redis/)

####Dependencies:

To run this project, you require:
- [Docker](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node and NPM](https://nodejs.org/en/download/)

Another option for Windows and Mac users is to install [Docker Toolbox](https://www.docker.com/products/docker-toolbox), an installer to quickly and easily install and setup a Docker environment on your computer. This will give you a lightweight Linux VM to execute Docker on. You can view the ip of this VM by calling 'docker-machine ip'.

####Running The Application Stack:

#####Setup:

Currently you need to run 'npm install --production' in  ./angular2 on your machine. Eventually this can be moved and run from the Dockerfile. **Make sure to include '--production'! Certain development dependencies will not copy correctly when being built into a Docker image. If you want to develop this project further, work on it in a different directory than your production one.**

Next run 'python manage.py migrate' in ./django_server. This will at some point be moved to a launch script.

This project assumes you will have some sort of remote database server (AWS RDS or equivalent), so you can perform migrations to it independently of running the containers.

#####Run:

From the project directory, run 'docker-compose build', and then 'docker-compose up -d'.

#####View:

To enter a container, run 'docker exec -it dockernginx_nginx_1 bash', where 'dockernginx_nginx_1' is the container name

#####Exit:

Running 'docker-compose kill' will safely kill all Docker project containers

####Modifying the Application Stack

#####Updating Nginx:

The nginx config files are located in [./nginx/conf](./nginx/conf). All files in this directory will be added to the main nginx file in the container.

#####Creating Migrations:

python manage.py makemigrations django_server_app

By running makemigrations, you’re telling Django that you’ve made some changes to your models (in this case, you’ve made new ones) and that you’d like the changes to be stored as a migration.

#####Viewing Migrations:

python manage.py sqlmigrate django_server_app 0001

The sqlmigrate command doesn’t actually run the migration on your database - it just prints it to the screen so that you can see what SQL Django thinks is required. 
It’s useful for checking what Django is going to do or if you have database administrators who require SQL scripts for changes.

#####Checking Migrations:

python manage.py check

Checks for any problems in your project without making migrations or touching the database.

#####Administration:

Default superuser: (python manage.py createsuperuser)
devin, admin@example.com, 111111


####Docker Notes:

Docker stop and remove all containers:
docker stop `docker ps -aq`
docker rm `docker ps -aq`

Docker Compose:
docker-compose build //build any Dockerfiles specified in docker-compose yml
docker-compose up -d //execute docker-compose yml file on daemon
docker-compose kill //kill any containers executed from the docker-compose yml

In docker-compose links does the same thing as depends_on, forcing containers to be created in order

####Possible Angular 2 Client Dockerfile Build Script:

RUN apt-get update && apt-get install -y \
build-essential \
nodejs \
npm

RUN cd /usr/share/nginx/angular2/angular2_ts && \
npm install --production
