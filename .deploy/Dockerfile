ARG ruby_version=2.7.3
ARG nginx_version=1.20.1

# Install Ruby, NGINX and Passenger
FROM jelastic/nginxruby:${nginx_version}-ruby-${ruby_version}

ARG node_version=16
ARG context=production
ARG bundle_without=development:test

# Install NodeJS, NPM and Yarn
RUN curl –sL https://rpm.nodesource.com/setup_${node_version}.x | bash -
RUN yum -y install nodejs
RUN curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo
RUN yum -y install yarn

# Set the context
ENV RAILS_ENV=${context}
RUN echo "rails_env ${context};" > /etc/nginx/ruby.env

# Clone the application
WORKDIR ${WEBROOT}
RUN rm -rf ROOT
RUN git clone https://github.com/doxa-tech/resj.git ROOT
WORKDIR ${WEBROOT}/ROOT
RUN git checkout ci/custom-docker

# Bundle the application
# logging  mode (-l) is need for rvm
ENV BUNDLE_WITHOUT=${bundle_without}
ENV BUNDLE_DEPLOYMENT=true
RUN /bin/bash -l -c bundle install
RUN /bin/bash -l -c bundle exec rake db:prepare
RUN /bin/bash -l -c bundle exec rake assets:precompile

WORKDIR /
