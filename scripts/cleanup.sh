#!/bin/bash

read -p "Are you sure? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo 'About to delete "data" and "export". Waiting for 5 seconds...'
  sleep 5
  rm -rf 'data' 'export'
  echo 'Done'
fi
