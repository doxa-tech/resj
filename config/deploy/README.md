# Server installations

## User

    adduser resj

    # visudo
    resj ALL=(ALL:ALL) ALL

## SSH

Copy public key to server

    cat ~/.ssh/id_rsa.pub | ssh user@123.45.56.78 "mkdir -p ~/.ssh && cat >>  ~/.ssh/authorized_keys"
    
In */etc/ssh/sshd_config* change the following fields 

    Port 44                     # change port connection
    PermitRootLogin no          # deny root login
    PasswordAuthentication no   # deny regular auth
    UsePAM no                   # deny PAM auth

After that restart ssh deamon with *reload ssh*

## Backup

Use and configure that [upload script](https://github.com/nkcr/Google-Cloud-Storage-Upload). Combine the script with aes encryption. For both provide a key file.

## Cron jobs

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

## Solr/Tomcat

### Install
  
    apt-get install default-jdk
    apt-get install ant
    apt-get install tomcat7 tomcat7-admin

    # download and move Solr in the right directory
    curl http://mirror.switch.ch/mirror/apache/dist/lucene/solr/4.10.2/solr-4.10.2.tgz | tar xz
    mv solr-4.10.2/ /usr/share/solr/

### Config

    # /etc/tomcat7/tomcat-users.xml
    <role rolename="manager-gui"/>
    <role rolename="admin-gui"/>
    <user username="tomcat" password="my_little_poney" roles="admin-gui,manager-gui"/>

    # Java libraries
    cp /usr/share/solr/example/lib/ext/* /usr/share/tomcat7/lib/

    # Logs
    cp /usr/share/solr/example/resources/log4j.properties /usr/share/tomcat7/lib
    vim /usr/share/tomcat7/lib/log4j.properties

Set `solr.log=` with `/var/log/solr` # /usr/share/tomcat7/lib/log4j.properties

    mkdir /var/log/solr
    chown tomcat7 /var/log/solr

    # /etc/logrotate.d/solr
    /var/log/solr/solr.log {
      copytruncate
      daily
      rotate 5
      compress
      missingok
      create 640 tomcat7
    }

    cp /usr/share/solr/example/webapps/solr.war /usr/share/solr/example/solr/solr.war

    # Solr config for Tomcat
    # /etc/tomcat7/Catalina/localhost/solr.xml
    <Context docBase="/usr/share/solr/example/solr/solr.war" debug="0" crossContext="true">
        <Environment name="solr/home" type="java.lang.String" value="/usr/share/solr/example/solr" override="true" />
    </Context>

    # Permissions
    chown -R tomcat7 /usr/share/solr/

    # Enable authentification for the solr app
    # /var/lib/tomcat7/webapps/solr/WEB-INF/web.xml
    <security-constraint>
      <web-resource-collection>
        <web-resource-name>Solr GUI Authentication</web-resource-name>
        <url-pattern>/*</url-pattern>
        <http-method>GET</http-method>
        <http-method>POST</http-method>
      </web-resource-collection>
      <auth-constraint>
        <role-name>solr-gui</role-name>
      </auth-constraint>

      <user-data-constraint>
        <transport-guarantee>NONE</transport-guarantee>
      </user-data-constraint>
    </security-constraint>

    <login-config>
      <auth-method>BASIC</auth-method>
    </login-config>

Add `solr-gui` in your user's roles # /etc/tomcat7/tomcat-users.xml

## Imagemagick

    apt-get install imagemagick

## RVM and Ruby

run the commands logged as the deployer user

    gpg --keyserver hkp://keys.gnupg.net --recv-keys D39DC0E3
    \curl -sSL https://get.rvm.io | bash -s stable --ruby

# Sever permissions
Grant deployer user to write the config files and to execute the init scripts
    
    # visudo
    resj ALL=(ALL) NOPASSWD: /etc/init.d/tomcat7
    resj ALL=(ALL) NOPASSWD: /etc/init.d/nginx
    resj ALL=(ALL) NOPASSWD: /etc/init.d/unicorn_resj
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /etc/init.d/unicorn_resj
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /etc/nginx/sites-enabled/*
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /usr/share/solr/example/solr/collection1/conf/*

# First deployment

first run `cap stage deploy:setup_config` and then edit the files with the secrets
then run `cap stage deploy`
