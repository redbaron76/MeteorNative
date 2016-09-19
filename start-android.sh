#!/bin/bash

cd RNApp &&
npm install &&
react-native link react-native-device-info &&
react-native run-android

cd ../MeteorApp &&
npm install &&
meteor --settings=settings.json