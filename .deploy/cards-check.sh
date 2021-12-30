#!/bin/bash

# This script should be placed in /etc/cron.daily to check the cards status
# every day and send an email to the card's owner accordingly.

set -e

setuser app bundle exec rake cards_update:check