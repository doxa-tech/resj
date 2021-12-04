# Deployment guide

This guide contains instruction to deploy the web application on a Jelastic Cloud.

## Application

The application is run in a docker container built using `.deploy/Dockerfile`.

The container is based on the customizable Phusion Passenger image. The image let us install a specific Ruby version, NodeJS and Yarn. It also uses Nginx as a reverse proxy. The image pulls the application code, bundles and resolves the Javascript dependencies (node, yarn and packages). Finally, one startup script runs the database migrations. Jelastic Cloud already provides services when running the image (`cron`, `sshd`, etc.) via `systemd`. Therefore, the cron service is disabled in the Passenger's image.

Build the container with: 
```
docker build --secret id=master_key,env=RAILS_MASTER_KEY . -t resj
```
The environment variable `RAILS_MASTER_KEY` must be set with corresponding value.

To run the container:
```
docker run -d -e RAILS_MASTER_KEY=secret resj 
```

On the Jelastic dashboard, simply load the custom image and set the following environment variables:
- RAILS_MASTER_KEY
- POSTGRES_HOST
- POSTGRES_PORT
- POSTGRES_USER
- POSTGRES_PASSWORD

## Database

TODO

## Load balancer

TODO

## Backup

TODO