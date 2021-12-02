#!/bin/bash

set -o errexit
set -o pipefail

if [[ -z "${RAILS_MASTER_KEY}" ]]; then
  echo "Set RAILS_MASTER_KEY before starting the application."
  exit 1
fi 

cd /home/app/resj
echo "Running migrations..."
/bin/bundle exec rake db:prepare
echo "Done"

exit 0