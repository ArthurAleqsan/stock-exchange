const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BinanceETHSchema = new Schema({
    obj: {
        ETH_USD : Object,
    },
});

module.exports = BinanceETH = mongoose.model('binanceETH', BinanceETHSchema);