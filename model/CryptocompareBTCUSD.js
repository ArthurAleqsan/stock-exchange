const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareBTCUSDSchema = new Schema({
        obj: {
            BTC_USD: Object,
        }
});

module.exports = CryptocompareBTCUSD = mongoose.model('cryptocompareBTCUSD', CryptocompareBTCUSDSchema);