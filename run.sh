#!/bin/sh

cd resource-smoke-test

echo updating apt-get
sudo apt-get update

echo Intalling NPM
sudo apt-get install npm

echo npm install
npm install

echo running test
mocha smoke_test.js
