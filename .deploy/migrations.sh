#!/bin/bash

set -o errexit

if [[ -z "${RAILS_MASTER_KEY}" ]]; then
  echo "Set RAILS_MASTER_KEY before starting the application."
  exit 1
fi 

echo "Running migrations..."
su - app -c "cd /home/app/resj && RAILS_MASTER_KEY=$RAILS_MASTER_KEY RAILS_ENV=$RAILS_ENV bundle exec rake db:prepare"

exit 0