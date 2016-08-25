#!/bin/bash

cd RNApp && npm install && react-native run-ios
cd ../MeteorApp && npm install && meteor --settings=settings.json