#!/bin/sh

cd resource-smoke-test
sudo apt-get install npm
npm install
mocha smoke_test.js
