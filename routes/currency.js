const express = require('express');
const router = express.Router();
const request = require('request');

//Load ModelS
const CryptocompareBTCEUR = require('../model/CryptocompareBTCEUR');
const CryptocompareBTCUSD = require('../model/CryptocompareBTCUSD');
const CryptocompareBTCRUB = require('../model/CryptocompareBTCRUB');
const CryptocompareLTCUSD = require('../model/CryptocompareLTCUSD');
const CryptocompareLTCEUR = require('../model/CryptocompareLTCEUR');
const CryptocompareLTCRUB = require('../model/CryptocompareLTCRUB');
const CryptocompareETHUSD = require('../model/CryptocompareETHUSD');
const CryptocompareETHEUR = require('../model/CryptocompareETHEUR');
const CryptocompareETHRUB = require('../model/CryptocompareETHRUB');
const CryptocompareXRPUSD = require('../model/CryptocompareXRPUSD');
const CryptocompareXRPEUR = require('../model/CryptocompareXRPEUR');
const CryptocompareXRPRUB = require('../model/CryptocompareXRPRUB');
const ExmoBTC = require('../model/ExmoBTC');
const ExmoLTC = require('../model/ExmoLTC');
const ExmoXRP = require('../model/ExmoXRP');
const ExmoETH = require('../model/ExmoETH');
const BinanceBTC = require('../model/BinanceBTC');
const BinanceLTC = require('../model/BinanceLTC');
const BinanceXRP = require('../model/BinanceXRP');
const BinanceETH = require('../model/BinanceETH');
const PoloniexBTC = require('../model/PoloniexBTC');
const PoloniexXRP = require('../model/PoloniexXRP');
const PoloniexETH = require('../model/PoloniexETH');
const YobbitBTCUSD = require('../model/YobbitBTCUSD');
const YobbitBTCRUB = require('../model/YobbitBTCRUB');
const YobbitETHRUB = require('../model/YobbitETHRUB');
const YobbitETHUSD = require('../model/YobbitETHUSD');
const YobbitLTCUSD = require('../model/YobbitLTCUSD');
const YobbitLTCRUB = require('../model/YobbitLTCRUB');
const YobbitXRPRUB = require('../model/YobbitXRPRUB');
const YobbitXRPUSD = require('../model/YobbitXRPUSD');

//Route  GET
//Desc get Bitcoin currency
// Access Public
router.get('/', (req, res) => {
            const currency = req.url.slice(1) ? req.url.slice(1):'btc';

            exmoGeter(currency);
            yobbitGeterUsd(currency);
            yobbitGeterRur(currency);
            poloniexGeterLtc(currency);
            binanceGeterUsdt(currency);
            cryptocompareGeterUsd(currency);
            cryptocompareGeterEur(currency);
            cryptocompareGeterRub(currency);
});

//Route  GET
//Desc get ETH currency
// Access Public
router.get('/eth', (req, res) => {
    const currency = req.url.slice(1)? req.url.slice(1):'btc';

    exmoGeter(currency);
    yobbitGeterUsd(currency);
    yobbitGeterRur(currency);
    poloniexGeterLtc(currency);
    binanceGeterUsdt(currency);
    cryptocompareGeterUsd(currency);
    cryptocompareGeterEur(currency);
    cryptocompareGeterRub(currency);
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

                }
                if(pairInfo[currency.toUpperCase()+'_EUR']) {
                    _eur.currentBuyPrice = pairInfo[currency.toUpperCase()+'_EUR'].buy_price?pairInfo[currency.toUpperCase()+'_EUR'].buy_price:'';
                    _eur.sellPrice = pairInfo[currency.toUpperCase()+'_EUR'].sell_price?pairInfo[currency.toUpperCase()+'_EUR'].sell_price:'';
                }
                if(pairInfo[currency.toUpperCase()+'_RUB']) {
                    _rub.currentBuyPrice = pairInfo[currency.toUpperCase()+'_RUB'].buy_price?pairInfo[currency.toUpperCase()+'_RUB'].buy_price:'';
                    _rub.sellPrice = pairInfo[currency.toUpperCase()+'_RUB'].sell_price?pairInfo[currency.toUpperCase()+'_RUB'].sell_price:'';
                }

                switch (currency) {
                    case 'btc':
                        var exmo = new ExmoBTC({
                            obj: {
                                _USD: _usd,
                                _EUR: _eur,
                                _RUB: _rub,
                            }
                        });
                        break;
                    case 'eth':
                        var exmo = new ExmoETH({
                            obj: {
                                _USD: _usd,
                                _EUR: _eur,
                                _RUB: _rub,
                            }
                        });
                        break;
                    case 'xrp':
                        var exmo = new ExmoXRP({
                            obj: {
                                _USD: _usd,
                                _EUR: _eur,
                                _RUB: _rub,
                            }
                        });
                        break;
                    case 'ltc':
                        var exmo = new ExmoLTC({
                            obj: {
                                _USD: _usd,
                                _EUR: _eur,
                                _RUB: _rub,
                            }
                        });
                }

                exmo.save()
                    .then(res => console.log(res));
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
            }
            switch (currency) {
                case 'btc':
                    var yobbit = new YobbitBTCUSD({
                        obj: {
                            BTC_USD: _usd,
                        }
                    });
                    break;
                case 'eth':
                    var yobbit = new YobbitETHUSD({
                        obj: {
                            ETH_USD: _usd,
                        }
                    });
                    break;
                case 'xrp':
                    var yobbit = new YobbitXRPUSD({
                        obj: {
                            XRP_USD: _usd,
                        }
                    });
                    break;
                case 'ltc':
                    var yobbit = new YobbitLTCUSD({
                        obj: {
                            LTC_USD: _usd,
                        }
                    });
            }

            yobbit.save()
                .then(res => console.log(res));

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
                }
                switch (currency) {
                    case 'btc':
                        var yobbit = new YobbitBTCRUB({
                            obj: {
                                BTC_RUB: _rur,
                            }
                        });
                        break;
                    case 'eth':
                        var yobbit = new YobbitETHRUB({
                            obj: {
                                ETH_RUB: _rur,
                            }
                        });
                        break;
                    case 'xrp':
                        var yobbit = new YobbitXRPRUB({
                            obj: {
                                XRP_RUB: _rur,
                            }
                        });
                        break;
                    case 'ltc':
                        var yobbit = new YobbitLTCRUB({
                            obj: {
                                LTC_RUB: _rur,
                            }
                        });
                }

                yobbit.save()
                    .then(res => console.log(res));
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
                switch (currency) {
                    case 'btc':
                        var poloniex = new PoloniexBTC({
                            obj: {
                                BTC_LTC: _ltc,
                            }
                        });
                        break;
                    case 'eth':
                        var poloniex = new PoloniexETH({
                            obj: {
                                ETH_LTC: _ltc,
                            }
                        });
                        break;
                    case 'xrp':
                        var poloniex = new PoloniexXRP({
                            obj: {
                                XRP_LTC: _ltc,
                            }
                        });
                        break;
                    case 'ltc':
                        console.log('dont have LTC LTC pair')
                }

                poloniex.save()
                    .then(res => console.log(res));
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
                switch (currency) {
                    case 'btc':
                        var binance = new BinanceBTC({
                            obj: {
                                BTC_USD : _usdt,
                            },
                        });
                        break;
                    case 'eth':
                        var binance = new BinanceETH({
                            obj: {
                                ETH_USD : _usdt,
                            },
                        });
                        break;
                    case 'xrp':
                        var binance = new BinanceXRP({
                            obj: {
                                XRP_USD : _usdt,
                            },
                        });
                        break;
                    case 'ltc':
                        var binance = new BinanceLTC({
                            obj: {
                                LTC_USD : _usdt,
                            },
                        });
                        break;
                }

                binance.save()
                    .then(res => console.log(res));
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
                }
                switch (currency) {
                    case 'btc':
                        var cryptocompare = new CryptocompareBTCUSD({
                            obj: {
                                BTC_USD : _usd,
                            },
                        });
                        break;
                    case 'eth':
                        var cryptocompare = new CryptocompareETHUSD({
                            obj: {
                                ETH_USD : _usd,
                            },
                        });
                        break;
                    case 'xrp':
                        var cryptocompare = new CryptocompareXRPUSD({
                            obj: {
                                XRP_USD : _usd,
                            },
                        });
                        break;
                    case 'ltc':
                        var cryptocompare = new CryptocompareLTCUSD({
                            obj: {
                                LTC_USD : _usd,
                            },
                        });
                        break;
                }

                cryptocompare.save()
                    .then(res => console.log(res));
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
                }
                switch (currency) {
                    case 'btc':
                        var cryptocompare = new CryptocompareBTCEUR({
                            obj: {
                                BTC_EUR : _eur,
                            },
                        });
                        break;
                    case 'eth':
                        var cryptocompare = new CryptocompareETHEUR({
                            obj: {
                                ETH_EUR : _eur,
                            },
                        });
                        break;
                    case 'xrp':
                        var cryptocompare = new CryptocompareXRPEUR({
                            obj: {
                                XRP_EUR : _eur,
                            },
                        });
                        break;
                    case 'ltc':
                        var cryptocompare = new CryptocompareLTCEUR({
                            obj: {
                                LTC_EUR : _eur,
                            },
                        });
                        break;
                }

                cryptocompare.save()
                    .then(res => console.log(res));
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
                }
                switch (currency) {
                    case 'btc':
                        var cryptocompare = new CryptocompareBTCRUB({
                            obj: {
                                BTC_RUB : _rub,
                            },
                        });
                        break;
                    case 'eth':
                        var cryptocompare = new CryptocompareETHRUB({
                            obj: {
                                ETH_RUB : _rub,
                            },
                        });
                        break;
                    case 'xrp':
                        var cryptocompare = new CryptocompareXRPRUB({
                            obj: {
                                XRP_RUB : _rub,
                            },
                        });
                        break;
                    case 'ltc':
                        var cryptocompare = new CryptocompareLTCRUB({
                            obj: {
                                LTC_RUB : _rub,
                            },
                        });
                        break;
                }

                cryptocompare.save()
                    .then(res => console.log(res));
            } else{
                console.log(err)
            }

        })
    }



module.exports = router;