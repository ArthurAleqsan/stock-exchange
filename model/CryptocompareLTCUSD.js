const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareLTCUSDSchema = new Schema({
    obj: {
        LTC_USD: Object,
    }
});

module.exports = CryptocompareLTCUSD = mongoose.model('cryptocompareLTCUSD', CryptocompareLTCUSDSchema);