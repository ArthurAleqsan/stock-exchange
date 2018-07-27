const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BinanceLTCSchema = new Schema({
    obj: {
        LTC_USD : Object,
    },
});

module.exports = BinanceLTC = mongoose.model('binanceLTC', BinanceLTCSchema);