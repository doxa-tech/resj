# Server installations

## User

    adduser resj
    # visudo
    resj ALL=(ALL:ALL) ALL

## Swap

    dd if=/dev/zero of=/swapfile bs=1024 count=256k
    mkswap /swapfile
    swapon /swapfile
    vim /etc/fstab
    /swapfile       none    swap    sw      0       0 
    echo 10 | sudo tee /proc/sys/vm/swappiness
    echo vm.swappiness = 10 | sudo tee -a /etc/sysctl.conf
    chown root:root /swapfile 
    chmod 0600 /swapfile

## Nginx

Install

    apt-get install nginx

Remove default

    rm /etc/nginx/sites-enabled/default

## Postgresql

Install

    apt-get install postgresql

Setup

    sudo -u postgres psql
    create role resj with createdb login password 'password'

  
## Solr/Tomcat

Install
  
    apt-get install default-jdk
    apt-get install ant
    apt-get install tomcat7 tomcat7-admin

    curl http://mirror.switch.ch/mirror/apache/dist/lucene/solr/4.10.2/solr-4.10.2.tgz | tar xz
    mv solr-4.10.2/ /usr/share/solr/

Config

    vim /etc/tomcat7/tomcat-users.xml
    <role rolename="manager-gui"/>
    <role rolename="admin-gui"/>
    <user username="tomcat" password="my_little_poney" roles="admin-gui,manager-gui"/>

    # Java libraries
    cp /usr/share/solr/example/lib/ext/* /usr/share/tomcat7/lib/

    # Logs
    cp /usr/share/solr/example/resources/log4j.properties /usr/share/tomcat7/lib
    vim /usr/share/tomcat7/lib/log4j.properties

Modify `solr.log=/var/log/solr` in log4j.properties

    mkdir /var/log/solr
    chown tomcat7 /var/log/solr
    vim /etc/logrotate.d/solr
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
    vim /etc/tomcat7/Catalina/localhost/solr.xml
    # Permissions
    chown -R tomcat7 /usr/share/solr/

    vim /var/lib/tomcat7/webapps/solr/WEB-INF/web.xml
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

Modify `roles="manager-gui,admin-gui,solr-gui"` in tomcat-users.xml
    

## RVM and Ruby (deployer user)

    gpg --keyserver hkp://keys.gnupg.net --recv-keys D39DC0E3
    \curl -sSL https://get.rvm.io | bash -s stable --ruby

    

Install Imagemagick

Install Solr/Tomcat
# Sever permissions
Grant deployer user to write the config files and to execute the init scripts
    
    # sudo visudo
    resj ALL=(ALL) NOPASSWD: /etc/init.d/tomcat7
    resj ALL=(ALL) NOPASSWD: /etc/init.d/nginx
    resj ALL=(ALL) NOPASSWD: /etc/init.d/unicorn_resj
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /etc/init.d/unicorn_resj
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /etc/nginx/sites-enabled/*
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /usr/share/solr/example/solr/collection1/conf/*

# First deployment
first run `cap stage deploy:setup_config` and then edit the files with the secrets
then run `cap stage deploy`