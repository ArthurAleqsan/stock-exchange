const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareLTCEURSchema = new Schema({
    obj: {
        LTC_EUR: Object,
    }
});

module.exports = CryptocompareLTCEUR = mongoose.model('cryptocompareLTCEUR', CryptocompareLTCEURSchema);