# Server installations

## User

    adduser resj

    # visudo
    resj ALL=(ALL:ALL) ALL

## Local and Date

To set the date

    sudo dpkg-reconfigure tzdata

If locales are not set and you got message *perl: warning: Setting locale failed.*

    sudo locale-gen fr_CH.UTF-8 # you can see your local with *locale*

## SSH

Copy public key to server

    cat ~/.ssh/id_rsa.pub | ssh user@123.45.56.78 "mkdir -p ~/.ssh && cat >>  ~/.ssh/authorized_keys"

In */etc/ssh/sshd_config* change the following fields

    Port 44                     # change port connection
    PermitRootLogin no          # deny root login
    PasswordAuthentication no   # deny regular auth
    UsePAM no                   # deny PAM auth

After that restart ssh deamon with *reload ssh*

Little sugar: make your terminal red under Mac

    function tabc() {
    NAME=$1; if [ -z "$NAME" ]; then NAME="Pro"; fi
    osascript -e "tell application \"Terminal\" to set current settings of front window to settings set \"$NAME\""
    }
    EDITOR='subl -w'
    alias sshresj="tabc SSH-Theme; ssh resj@146.185.183.84 -p 77; tabc"
    alias ssheebulle="tabc SSH-Theme; ssh eebulle@146.185.163.64 -p 77; tabc"

## Backup

Use and configure that [upload script](https://github.com/nkcr/Google-Cloud-Storage-Upload). Combine the script with aes encryption. For both provide a key file.

### Install aescrypt for backup encryption

Dowload sources from [AES website](https://www.aescrypt.com/download/) and do

    make
    sudo make install

### Restore

Hints : to copy with scp : "$ scp -r -P 44 user@12.34.56.78:folder ~/Desktop"

    sudo /etc/init.d/unicorn_resj stop

    sudo -u postgres psql
    # if there is alread a database
    > drop database resj_production;
    > create database resj_production owner resj;
    > \q

    sudo -u postgres psql resj_production < backup.txt
    sudo /etc/init.d/unicorn_resj restart


## Cron jobs (backup and daily rake task)

    #
    # Backup pgsql to google cloud
    #
    7 20 * * * resj python /home/resj/backup/script/upload_command.py "pg_dump resj_production | aescrypt -e -k /home/resj/backup/storage.key - " gs://backup-reseaujeunesse-ch/pgsql/$(date +\%Y-\%m-\%d-\%H\%M).sql.aes
    7  2 * * * resj python /home/resj/backup/script/upload_command.py "pg_dump resj_production | aescrypt -e -k /home/resj/backup/storage.key - " gs://backup-reseaujeunesse-ch/pgsql/$(date +\%Y-\%m-\%d-\%H\%M).sql.aes
    7  8 * * * resj python /home/resj/backup/script/upload_command.py "pg_dump resj_production | aescrypt -e -k /home/resj/backup/storage.key - " gs://backup-reseaujeunesse-ch/pgsql/$(date +\%Y-\%m-\%d-\%H\%M).sql.aes
    7 14 *  * * resj python /home/resj/backup/script/upload_command.py "pg_dump resj_production | aescrypt -e -k /home/resj/backup/storage.key - " gs://backup-reseaujeunesse-ch/pgsql/$(date +\%Y-\%m-\%d-\%H\%M).sql.aes
    #
    # Daily rake task
    #
    7 3     * * *  resj     cd /home/resj/apps/resj/current && bundle exec rake sessions:cleanup RAILS_ENV=production

## Swap

    dd if=/dev/zero of=/swapfile bs=1024 count=256k
    mkswap /swapfile
    swapon /swapfile

    # /etc/fstab
    /swapfile       none    swap    sw      0       0

    echo 10 | sudo tee /proc/sys/vm/swappiness
    echo vm.swappiness = 10 | sudo tee -a /etc/sysctl.conf
    chown root:root /swapfile
    chmod 0600 /swapfile

## Nginx

### Install

    apt-get install nginx

### Remove default

    rm /etc/nginx/sites-enabled/default

## Postgresql

### Install

    apt-get install postgresql libpq-dev

### Setup

    sudo -u postgres psql
    > create role resj with createdb login password 'password';
    > create database resj_production owner resj;

## Git

    apt-get install git

## Node.js

    apt-get install nodejs

## Elasticsearch

Visit the website to get the last instructions http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/setup-repositories.html

### Install

    wget -qO - https://packages.elasticsearch.org/GPG-KEY-elasticsearch | apt-key add -
    add-apt-repository "deb http://packages.elasticsearch.org/elasticsearch/1.4/debian stable main"
    apt-get update && apt-get install elasticsearch
    update-rc.d elasticsearch defaults 95 10

### Java

    apt-get install default-jre

### Config

Set the `ES_HEAP_SIZE` variable in the service init script with half of the memory available (e.g.: 512m)

Set `bootstrap.mlockall` in `/etc/elasticsearch/elasticsearch.yml` to `true`

## Imagemagick

    apt-get install imagemagick

## RVM and Ruby

run the commands logged as the deployer user

    # RVM & Ruby
    gpg --keyserver hkp://keys.gnupg.net --recv-keys D39DC0E3
    \curl -sSL https://get.rvm.io | bash -s stable --ruby

    # Bundler
    gem install bundler --no-ri --no-rdoc

# Capistrano

Install Capistrano, Puma and PG gems to deploy the app

    # Gemfile
    # Use Capistrano for deployment
    gem 'capistrano', '~> 3.4.0'

    gem 'capistrano-maintenance', github: 'capistrano/maintenance', require: false

    gem 'capistrano-server', github: 'JS-Tech/capistrano-server'

    # rails specific capistrano funcitons
    gem 'capistrano-rails'

    # integrate bundler with capistrano
    gem 'capistrano-bundler'

    # if you are using RVM
    gem 'capistrano-rvm'

Follow instructions from [capistrano](https://github.com/capistrano/capistrano) & [capistrano-server](https://github.com/JS-Tech/capistrano-server)

# Sever permissions
Grant deployer user to write the config files and to execute the init scripts

    # visudo
    resj ALL=(ALL) NOPASSWD: /etc/init.d/elasticsearch
    resj ALL=(ALL) NOPASSWD: /etc/init.d/nginx, /bin/ln -* /* /etc/nginx/sites-enabled/*
    resj ALL=(ALL) NOPASSWD: /sbin/start puma app=*, /sbin/stop puma app=*, /sbin/restart puma app=*, /sbin/status puma app=*
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /etc/init/puma.conf, /bin/ln -* /* /etc/init/puma-manager.conf, /bin/ln -* /* /home/resj/apps/*, /bin/ln -* /* /etc/puma.conf
    resj ALL=(ALL) NOPASSWD: /sbin/initctl reload-configuration

# First deployment

First run `cap stage server:setup` and then edit the files with the secrets

Finally run `cap stage deploy`
