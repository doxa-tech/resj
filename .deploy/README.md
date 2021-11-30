# Deployment guide

This guide contains instruction to deploy the web application on a Jelastic Cloud.

## Application

The application is run in a docker container built using `.deploy/Dockerfile`.

The container is based on a Jelastic image with Nginx and Phusion Passenger. The image pulls the application code, bundles and resolves the Javascript dependencies (node, yarn and packages). Finally, the startup script runs the migration and starts Nginx.

Build the container with: 
```
docker build --secret id=master_key,env=RAILS_MASTER_KEY . -t resj
```
The environment variable `RAILS_MASTER_KEY` must be set with corresponding value.

To run the container:
```
docker run -e RAILS_MASTER_KEY=secret resj 
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