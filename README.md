[![RSpec](https://github.com/doxa-tech/resj/actions/workflows/rspec.yml/badge.svg)](https://github.com/doxa-tech/resj/actions/workflows/rspec.yml)
[![Cucumber](https://github.com/doxa-tech/resj/actions/workflows/cucumber.yml/badge.svg)](https://github.com/doxa-tech/resj/actions/workflows/cucumber.yml)
[![Code Climate](https://codeclimate.com/github/JS-Tech/resj/badges/gpa.svg)](https://codeclimate.com/github/JS-Tech/resj)

Sources of website [https://reseaujeunesse.ch](https://reseaujeunesse.ch).

# Deploy

Deploy the latest version from master by creating a new release. An action will
automatically create and publish a new docker image and trigger a redeploy on
Jelastic. Note that during the redeploy the website will suffer a downtime of
~1m30. This could be fixed by using horizontal scaling, which is not worth the
extra cost.