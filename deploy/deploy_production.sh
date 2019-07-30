#!/bin/sh

bundle install --jobs=4 --retry=3 --path vendor/bundle

gem install jekyll

bundle exec jekyll build --config _config.yml

scp -o StrictHostKeyChecking=no -r _site/ shnapper@52.183.1.252:/var/apps/danielwylie.me/