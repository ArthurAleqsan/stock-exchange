const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareLTCRUBSchema = new Schema({
    obj: {
        LTC_RUB: Object,
    }
});

module.exports = CryptocompareLTCRUB = mongoose.model('cryptocompareLTCRUB', CryptocompareLTCRUBSchema);