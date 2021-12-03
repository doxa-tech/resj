# https://github.com/phusion/passenger-docker
# Phusion Passenger with Nginx, support for Ruby/NodeJS
FROM phusion/passenger-customizable:latest

ENV BUNDLE_WITHOUT=development:test
ENV BUNDLE_DEPLOYMENT=true
ENV RAILS_ENV=production
ENV HOME /home/app

# Update the system
RUN apt-get update && apt-get upgrade -y -o Dpkg::Options::="--force-confold"

# Enable NodeJS and Ruby
RUN /pd_build/ruby-2.7.*.sh
RUN /pd_build/nodejs.sh
RUN npm install -g yarn

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set the correct timezone
ENV TZ=Europe/Zurich
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Ruby 2.7.4
RUN bash -lc 'rvm --default use ruby-2.7.4'

# Disable Jelastic services
COPY --chmod=0755 jelastic.sh /etc/my_init.d/01_jelastic.sh
# Rails migrations are run on startup
COPY --chmod=0755 migrations.sh /etc/my_init.d/40_migrations.sh

# Activate Nginx
RUN rm -f /etc/service/nginx/down
# Load the configuration
RUN rm /etc/nginx/sites-enabled/default
ADD resj.conf /etc/nginx/sites-enabled/resj.conf

# Clone the application
USER app
WORKDIR /home/app
RUN git clone https://github.com/doxa-tech/resj.git

# Prepare the application
WORKDIR /home/app/resj
RUN git checkout ci/custom-docker-v2
RUN bundle install
RUN --mount=type=secret,id=master_key,uid=9999 RAILS_MASTER_KEY=$(cat /run/secrets/master_key) bundle exec rake assets:precompile

USER root
# baseimage-docker's init process
CMD ["/sbin/my_init"]