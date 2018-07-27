const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareBTCRUBSchema = new Schema({
    obj: {
        BTC_RUB: Object,
    }
});

module.exports = CryptocompareBTCRUB = mongoose.model('cryptocompareBTCRUB', CryptocompareBTCRUBSchema);