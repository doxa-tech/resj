#!/bin/bash

# Disable conflicting services between the image and the Jelastic services
echo "Disabling Cron..."

systemctl disable --now cron
systemctl mask cron
