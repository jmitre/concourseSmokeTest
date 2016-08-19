#!/bin/sh

cd resource-smoke-test

# echo updating apt-get
# sudo apt-get update
#
# echo Intalling NPM
# sudo apt-get install npm
# y

echo npm install
npm install

echo npm install -g mocha
npm install -g mocha

echo mocha smoke_test.js
mocha smoke_test.js
