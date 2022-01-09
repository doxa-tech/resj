# https://github.com/phusion/passenger-docker
# Phusion Passenger with Nginx, support for Ruby/NodeJS
FROM phusion/passenger-customizable:latest

ENV BUNDLE_WITHOUT=development:test
ENV BUNDLE_DEPLOYMENT=true
ENV RAILS_ENV=production

# Runtime variable that we find interesting to have
ARG site_version=0.0.0
ARG site_build_hash=xxx
ARG site_build_url=#
ARG site_build_time="1/1/1970 00:00"

ENV SITE_VERSION ${site_version}
ENV SITE_BUILD_HASH ${site_build_hash}
ENV SITE_BUILD_URL ${site_build_url}
ENV SITE_BUILD_TIME ${site_build_time}

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
RUN bash -lc 'rvm --default use ruby-2.7.5'

# Activate Nginx (and disable the systemd service)
RUN rm -f /etc/service/nginx/down
RUN rm /etc/systemd/system/multi-user.target.wants/nginx.service
# Load the configuration
RUN rm /etc/nginx/sites-enabled/default
ADD resj.conf /etc/nginx/sites-enabled/resj.conf

# Disable cron service because it is provided by Jelastic
RUN touch /etc/service/cron/down

# Disable syslog-ng in favor of rsyslog provided by Jelastic
RUN rm /etc/systemd/system/multi-user.target.wants/syslog-ng.service
RUN rm /etc/logrotate.d/syslog-ng

# Rails migrations are run on startup
COPY --chmod=0755 migrations.sh /etc/my_init.d/40_migrations.sh

# Clone the application
USER app
WORKDIR /home/app
RUN git clone https://github.com/doxa-tech/resj.git

# Prepare the application
WORKDIR /home/app/resj
RUN bundle install
RUN --mount=type=secret,id=master_key,uid=9999 RAILS_MASTER_KEY=$(cat /run/secrets/master_key) bundle exec rake assets:precompile

# run the cards update check daily
COPY --chmod=0755 cards-check.sh /etc/cron.daily/

USER root
# baseimage-docker's init process
CMD ["/sbin/my_init"]
