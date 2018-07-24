const express = require('express');
const router = express.Router();
const request = require('request');
const autobahn = require('autobahn');

//Route GET
//Desc get Bitcoin currency
// Access Public
router.get('/', (req, res) => {
    const btc = [];

    request({
        url: 'https://api.exmo.com/v1/ticker/',
        method: 'GET',
    },
        (err , resp, body) => {
            if(!err && resp.statusCode === 200) {
                const btc_usd = {name : 'exmo-btc_usd'};
                const btc_eur = {name : 'exmo-btc_eur'};
                const btc_rub = {name : 'exmo-btc_rub'};
                const pairInfo = JSON.parse(body);
                btc_usd.currentBuyPrice = pairInfo.BTC_USD.buy_price;
                btc_usd.sellPrice = pairInfo.BTC_USD.sell_price;
                btc_eur.currentBuyPrice = pairInfo.BTC_EUR.buy_price;
                btc_eur.sellPrice = pairInfo.BTC_EUR.sell_price;
                btc_rub.currentBuyPrice = pairInfo.BTC_RUB.buy_price;
                btc_rub.sellPrice = pairInfo.BTC_RUB.sell_price;
                btc.push(btc_usd,btc_eur,btc_rub);
                // res.json(btc);
            }

        })
        //get btc-usd currency
        .pipe(
            request({
                url: 'https://yobit.net/api/3/ticker/btc_usd',
                method: 'GET',
                }, (err, resp, body) => {
                const btc_usd = {name : 'yobit-btc_usd'};
                const pairInfo = JSON.parse(body);
                btc_usd.currentBuyPrice = pairInfo.btc_usd.buy;
                btc_usd.sellPrice = pairInfo.btc_usd.sell;
                btc.push(btc_usd);
                // res.json(btc)
            })
        )
        //get btc-rub currency
        .pipe(
            request({
                url: 'https://yobit.net/api/3/ticker/btc_rur',
                method: 'GET',
            }, (err, resp, body) => {
                const btc_rur = {name : 'yobit-btc-rur'};
                const pairInfo = JSON.parse(body);
                btc_rur.currentBuyPrice = pairInfo.btc_rur.buy;
                btc_rur.sellPrice = pairInfo.btc_rur.sell;
                btc.push(btc_rur);
                res.json(btc)
            })
        )
    //     .pipe(
    //        request({
    //            url: "wss://api.poloniex.com",
    //            method: 'GET'
    //        }), (err, resp, body) => {
    //             // function tickerEvent (args,kwargs) {
    //                         console.log(body);
    //                     // }
    // }
    //
    //     )




});
//Route GET
//Desc get Ethereum currency of https://exmo.com
// Access Public
router.get('/eth', (req, res) => {
    const eth = [];

    request({
        url: 'https://api.exmo.com/v1/ticker/',
        method: 'GET',
    },
        (err , resp, body) => {
            if(!err && resp.statusCode === 200) {
                const eth_usd = {};
                const eth_eur = {};
                const eth_rub = {};
                const pairInfo = JSON.parse(body);
                eth_usd.currentBuyPrice = pairInfo.ETH_USD.buy_price;
                eth_usd.selPrice = pairInfo.ETH_USD.sell_price;
                eth_eur.currentBuyPrice = pairInfo.ETH_EUR.buy_price;
                eth_eur.selPrice = pairInfo.ETH_EUR.sell_price;
                eth_rub.currentBuyPrice = pairInfo.ETH_RUB.buy_price;
                eth_rub.selPrice = pairInfo.ETH_RUB.sell_price;
                eth.push(eth_usd,eth_eur,eth_rub);
                res.json(eth);
            }
        });



});

//Route GET
//Desc get Ripple currency of https://exmo.com
// Access Public
router.get('/xrp', (req, res) => {
    const xrp = [];

    request({
        url: 'https://api.exmo.com/v1/ticker/',
        method: 'GET',
    },
        (err , resp, body) => {
            if(!err && resp.statusCode === 200) {
                const xrp_usd = {};
                // const xrp_eur = {};
                const xrp_rub = {};
                const pairInfo = JSON.parse(body);
                xrp_usd.currentBuyPrice = pairInfo.XRP_USD.buy_price;
                xrp_usd.selPrice = pairInfo.XRP_USD.sell_price;
                // xrp_eur.currentBuyPrice = pairInfo.XRP_EUR.buy_price;
                // xrp_eur.selPrice = pairInfo.XRP_EUR.sell_price;
                xrp_rub.currentBuyPrice = pairInfo.XRP_RUB.buy_price;
                xrp_rub.selPrice = pairInfo.XRP_RUB.sell_price;
                xrp.push(xrp_usd,xrp_rub);
                res.json(xrp);
            }
        });



});

//Route GET
//Desc get Litecoin currency of https://exmo.com
// Access Public
router.get('/ltc', (req, res) => {
    const ltc = [];

    request({
            url: 'https://api.exmo.com/v1/ticker/',
            method: 'GET',
        },
        (err , resp, body) => {
            if(!err && resp.statusCode === 200) {
                const ltc_usd = {};
                const ltc_eur = {};
                const ltc_rub = {};
                const pairInfo = JSON.parse(body);
                ltc_usd.currentBuyPrice = pairInfo.LTC_USD.buy_price;
                ltc_usd.selPrice = pairInfo.LTC_USD.sell_price;
                ltc_eur.currentBuyPrice = pairInfo.LTC_EUR.buy_price;
                ltc_eur.selPrice = pairInfo.LTC_EUR.sell_price;
                ltc_rub.currentBuyPrice = pairInfo.LTC_RUB.buy_price;
                ltc_rub.selPrice = pairInfo.LTC_RUB.sell_price;
                ltc.push(ltc_usd,ltc_eur,ltc_rub);
                res.json(ltc);
            }
        });



});


module.exports = router;