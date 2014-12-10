# Server installations
Install RVM and the latest ruby version
Install Nginx, Postgres
Install Imagemagick
Install Solr/Tomcat
# Sever permissions
Grant deployer user to write the config files and to execute the init scripts
    resj ALL=(ALL) NOPASSWD: /etc/init.d/tomcat7
    resj ALL=(ALL) NOPASSWD: /etc/init.d/nginx
    resj ALL=(ALL) NOPASSWD: /etc/init.d/unicorn_resj
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /etc/init.d/unicorn_resj
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /etc/nginx/sites-enabled/*
    resj ALL=(ALL) NOPASSWD: /bin/ln -* /* /usr/share/solr/example/solr/collection1/conf/*

# First deployment
run `cap stage deploy:setup_config` and then edit the files with the secrets