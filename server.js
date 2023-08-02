const express = require('express');
const app = express();

var KiteConnect = require("kiteconnect").KiteConnect;

var access_token;

var kc = new KiteConnect({
    api_key: "kc1cq4gsoq1poail",
    access_token: "oPzMApMNs0y8G5bC6vPjQhiIUlIrYGM9",
});

// https://kite.zerodha.com/connect/login?v=3&api_key=kc1cq4gsoq1poail

// kc.generateSession("9JUAZ0Pk9vhmEiV6c1h6mF4evgcT2u8m", "6r06i12su9qy26z5d6o97jdf5trgnh6l")
//   .then(function (response) {
//     console.log(response.access_token);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

app.get('/api/historyData', (req, res) => {
    kc.getHistoricalData(req.query.id, '15minute', '2023-01-24', '2023-08-01', false)
        .then(function (response) {
            res.send(response);
        }).catch(function (err) {
            console.log(err);
        });
});

app.get('/api/historyData/intraday', (req, res) => {
    kc.getHistoricalData(req.query.id, '15minute', '2023-08-01', '2023-08-02', false)
        .then(function (response) {
            res.send(response);
        }).catch(function (err) {
            console.log(err);
        });
});

app.get('/api/quotes', (req, res) => {
    kc.getQuote('136414212')
        .then(function (response) {
            res.send(response);
        }).catch(function (err) {
            // Something went wrong.
        });
});

app.get('/api/instruments', (req, res) => {
    kc.getInstruments(['NSE'])
        .then(function (response) {
            res.send(response);
        }).catch(function (err) {
            // Something went wrong.
        });
});

app.listen(5000);