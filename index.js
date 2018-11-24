const functions = require('firebase-functions');
const { app } = require('scure-dialogflow');
const { data } = require('./app/data/data');

const appData = app(data['es']);

exports.fulfillment = functions.https.onRequest(appData);
