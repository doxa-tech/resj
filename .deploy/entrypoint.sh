#!/bin/bash

set -o errexit
set -o pipefail

if [[ -z "${RAILS_MASTER_KEY}" ]]; then
  echo "Set the RAILS_MASTER_KEY environment variable before starting the application."
else
  cd $WEBROOT/ROOT
  echo "Running migrations..."
  rake db:prepare
  echo "Done"

  /etc/rc.d/init.d/nginx start
  echo "Server started"
fi