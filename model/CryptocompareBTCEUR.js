const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareBTCEURSchema = new Schema({
    obj: {
        BTC_EUR: Object,
    }
});

module.exports = CryptocompareBTCEUR = mongoose.model('cryptocompareBTCEUR', CryptocompareBTCEURSchema);