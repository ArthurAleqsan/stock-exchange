const express = require('express');
const router = express.Router();
const request = require('request');
const currencyObj = {
    'btc' : [],
    'ltc' : [],
    'eth' : [],
    'xrp' : [],
};
//Load Models
const Binance = require('./../model/Binance');
// const Cryptocompare = require('./../model/Cryptocompare');
// const Exmo = require('./../model/Exmo');
// const Poloniex = require('./../model/Poloniex');
// const Yobbit = require('./../model/Yobbit');



//Route  GET
//Desc get Bitcoin currency
// Access Public
router.get('/', (req, res) => {
            const currency = req.url.slice(1) ? req.url.slice(1):'btc';

            // exmoGeter(currency);
            yobbitGeterUsd(currency);
            // yobbitGeterRur(currency);
            // poloniexGeterLtc(currency);
            // binanceGeterUsdt(currency);
            // cryptocompareGeterUsd(currency);
            // cryptocompareGeterEur(currency);
            // cryptocompareGeterRub(currency);
            res.json(currencyObj.btc);
        });

//Route  GET
//Desc get ETH currency
// Access Public
router.get('/eth', (req, res) => {
    const currency = req.url.slice(1)? req.url.slice(1):'btc';

    exmoGeter(currency);
    // yobbitGeterUsd(currency);
    // yobbitGeterRur(currency);
    // poloniexGeterLtc(currency);
    // binanceGeterUsdt(currency);
    // cryptocompareGeterUsd(currency);
    // cryptocompareGeterEur(currency);
    // cryptocompareGeterRub(currency);
    res.json(currencyObj.eth);
});

//Route  GET
//Desc get XRP currency
// Access Public
router.get('/xrp', (req, res) => {
    const currency = req.url.slice(1)? req.url.slice(1):'btc';

    exmoGeter(currency);
    yobbitGeterUsd(currency);
    yobbitGeterRur(currency);
    poloniexGeterLtc(currency);
    binanceGeterUsdt(currency);
    cryptocompareGeterUsd(currency);
    cryptocompareGeterEur(currency);
    cryptocompareGeterRub(currency);
    res.json(currencyObj);
});

//Route  GET
//Desc get Litcoin currency
// Access Public
router.get('/ltc', (req, res) => {
    const currency = req.url.slice(1)? req.url.slice(1):'btc';

    exmoGeter(currency);
    yobbitGeterUsd(currency);
    yobbitGeterRur(currency);
    poloniexGeterLtc(currency);
    binanceGeterUsdt(currency);
    cryptocompareGeterUsd(currency);
    cryptocompareGeterEur(currency);
    cryptocompareGeterRub(currency);
    res.json(currencyObj);
});

async function exmoGeter (currency) {
    request({
            url: 'https://api.exmo.com/v1/ticker/',
            method: 'GET',
        },
        (err , resp, body) => {
            if(!err && resp.statusCode === 200) {
                const _usd = {name : 'exmo-'+currency+'_usd'};
                const _eur = {name : 'exmo-'+currency+'_eur'};
                const _rub = {name : 'exmo-'+currency+'_rub'};
                const pairInfo = JSON.parse(body);
                if(pairInfo[currency.toUpperCase()+'_USD']) {
                    _usd.currentBuyPrice = pairInfo[currency.toUpperCase()+'_USD'].buy_price ? pairInfo[currency.toUpperCase()+'_USD'].buy_price:'';
                    _usd.sellPrice = pairInfo[currency.toUpperCase()+'_USD'].sell_price?pairInfo[currency.toUpperCase()+'_USD'].sell_price:'';
                    currencyObj[currency].push(_usd);
                }
                if(pairInfo[currency.toUpperCase()+'_EUR']) {
                    _eur.currentBuyPrice = pairInfo[currency.toUpperCase()+'_EUR'].buy_price?pairInfo[currency.toUpperCase()+'_EUR'].buy_price:'';
                    _eur.sellPrice = pairInfo[currency.toUpperCase()+'_EUR'].sell_price?pairInfo[currency.toUpperCase()+'_EUR'].sell_price:'';
                    currencyObj[currency].push(_eur)
                }
                if(pairInfo[currency.toUpperCase()+'_RUB']) {
                    _rub.currentBuyPrice = pairInfo[currency.toUpperCase()+'_RUB'].buy_price?pairInfo[currency.toUpperCase()+'_RUB'].buy_price:'';
                    _rub.sellPrice = pairInfo[currency.toUpperCase()+'_RUB'].sell_price?pairInfo[currency.toUpperCase()+'_RUB'].sell_price:'';
                    currencyObj[currency].push(_rub);
                }

            }
        })
}
async function yobbitGeterUsd(currency) {
    request({
        url: 'https://yobit.net/api/3/ticker/'+currency+'_usd',
        method: 'GET',
    }, (err, resp, body) => {
        if(!err && resp.statusCode === 200) {
            const _usd = {name: 'yobit-'+currency+'_usd'};
            const pairInfo = JSON.parse(body);
            if(pairInfo[currency+'_usd']) {
                _usd.currentBuyPrice = pairInfo[currency+'_usd'].buy?pairInfo[currency+'_usd'].buy:'';
                _usd.sellPrice = pairInfo[currency+'_usd'].sell?pairInfo[currency+'_usd'].sell:'';
                currencyObj[currency].push(_usd);
            }

            // res.json(btc)
        } else{
            console.log(err)
        }
    })
}
async function yobbitGeterRur(currency) {
        request({
            url: 'https://yobit.net/api/3/ticker/'+currency+'_rur',
            method: 'GET',
        }, (err, resp, body) => {
            if(!err && resp.statusCode === 200) {
                const _rur = {name: 'yobit-'+currency+'-rur'};
                const pairInfo = JSON.parse(body);
                if(pairInfo[currency+'_rur']) {
                    _rur.currentBuyPrice = pairInfo[currency+'_rur'].buy? pairInfo[currency+'_rur'].buy:'';
                    _rur.sellPrice = pairInfo[currency+'_rur'].sell? pairInfo[currency+'_rur'].sell:'';
                    currencyObj[currency].push(_rur);
                }

                // res.json(btc)
            } else{
                console.log(err)
            }
        })

}
async function poloniexGeterLtc(currency) {
    request({
        url: 'https://poloniex.com/public?command=returnTicker',
        method: 'GET',
    }, (err, resp, body) => {
        if(!err && resp.statusCode === 200) {
            const _ltc = {name: 'poloniex-'+currency+'-ltc'};
            const pairInfo = JSON.parse(body);
            if(pairInfo[currency.toUpperCase() + '_LTC']) {
                _ltc.currentBuyPrice = pairInfo[currency.toUpperCase() + '_LTC'].highestBid?pairInfo[currency.toUpperCase() + '_LTC'].highestBid:'';
                _ltc.sellPrice = pairInfo[currency.toUpperCase() + '_LTC'].lowestAsk?pairInfo[currency.toUpperCase() + '_LTC'].lowestAsk:'';
                currencyObj[currency].push(_ltc);
            }

        } else{
            console.log(err)
        }
    })


}
async function binanceGeterUsdt(currency) {
        request({
            url: 'https://api.binance.com/api/v1/ticker/24hr?symbol='+currency.toUpperCase()+'USDT',
            method: 'GET'
        }, (err, resp, body) => {
            if(!err && resp.statusCode === 200) {
                const _usdt = {name: 'binance-'+currency+'_usdt'};
                const pairInfo = JSON.parse(body);
                _usdt.currentBuyPrice = pairInfo.bidPrice;
                currencyObj[currency].push(_usdt);
            }
            else{
                console.log(err)
            }
        }
    )
}
async function cryptocompareGeterUsd(currency) {
    request({
            url: 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+currency.toUpperCase()+'&tsyms=USD',
            method: 'GET',
        },
        (err , resp, body) => {
            if (!err && resp.statusCode === 200) {
                const _usd = {name: 'cryptocompare-'+currency+'_usd'};
                const pairInfo = JSON.parse(body);
                if(pairInfo.RAW[currency.toUpperCase()]) {
                    _usd.currentBuyPrice = pairInfo.RAW[currency.toUpperCase()].USD.PRICE ? pairInfo.RAW[currency.toUpperCase()].USD.PRICE : '';
                    _usd.sellPrice = _usd.currentBuyPrice;
                    currencyObj[currency].push(_usd);
                }

            } else{
                console.log(err)
            }
        })
    }
async function cryptocompareGeterEur(currency) {
    request({
            url: 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+currency.toUpperCase()+'&tsyms=EUR',
            method: 'GET',
        },
        (err , resp, body) => {
            if (!err && resp.statusCode === 200) {
                const _eur = {name: 'cryptocompare-'+currency+'_eur'};
                const pairInfo = JSON.parse(body);
                if(pairInfo.RAW[currency.toUpperCase()]) {
                    _eur.currentBuyPrice = pairInfo.RAW[currency.toUpperCase()].EUR.PRICE ? pairInfo.RAW[currency.toUpperCase()].EUR.PRICE : '';
                    _eur.sellPrice = _eur.currentBuyPrice;
                    currencyObj[currency].push(_eur);
                }

            } else{
                console.log(err)
            }
        })
    }
async function cryptocompareGeterRub(currency) {
    request({
            url: 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+currency.toUpperCase()+'&tsyms=RUB',
            method: 'GET',
        },
        (err , resp, body) => {
            if (!err && resp.statusCode === 200) {
                const _rub = {name: 'cryptocompare-'+currency+'_rub'};
                const pairInfo = JSON.parse(body);
                if(pairInfo.RAW[currency.toUpperCase()]) {
                    _rub.currentBuyPrice = pairInfo.RAW[currency.toUpperCase()].RUB.PRICE ? pairInfo.RAW[currency.toUpperCase()].RUB.PRICE : '';
                    _rub.sellPrice = _rub.currentBuyPrice;
                    currencyObj[currency].push(_rub);
                }

            } else{
                throw(err)
            }
        })
    }



module.exports = router;