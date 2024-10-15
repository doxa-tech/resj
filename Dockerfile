FROM ruby:3.1-alpine3.18

RUN apk add --update --no-cache bash build-base nodejs sqlite-dev tzdata postgresql-dev yarn

RUN gem install bundler:2.4.22

WORKDIR /usr/src/app

# COPY package.json yarn.lock ./
# COPY package.json ./
# RUN yarn install --check-files

COPY Gemfile* ./
RUN bundle install

COPY . .

ENV PATH=./bin:$PATH
CMD ["rails", "console"]