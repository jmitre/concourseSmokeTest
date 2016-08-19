#!/bin/sh

cd resource-smoke-test
npm install
mocha smoke_test.js
