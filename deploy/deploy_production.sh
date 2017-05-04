#!/bin/sh
gem install jekyll
bundle exec jekyll build

scp -P 63622 -r _site/ shnapper@shnappy.com:/var/apps/danielwylie.me/
scp -P 51316 -r _site/ shnapper@shnappy.com:/var/apps/danielwylie.me/