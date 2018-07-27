const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BinanceBTCSchema = new Schema({
    obj: {
        BTC_USD : Object,
    },
});

module.exports = BinanceBTC = mongoose.model('binanceBTC', BinanceBTCSchema);