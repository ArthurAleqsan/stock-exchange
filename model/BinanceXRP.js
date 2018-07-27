const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BinanceXRPSchema = new Schema({
    obj: {
        XRP_USD : Object,
    },
});

module.exports = BinanceXRP = mongoose.model('binanceXRP', BinanceXRPSchema);