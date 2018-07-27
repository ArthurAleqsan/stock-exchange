const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareXRPRUBSchema = new Schema({
    obj: {
        XRP_RUB: Object,
    }
});

module.exports = CryptocompareXRPRUB = mongoose.model('cryptocompareXRPRUB', CryptocompareXRPRUBSchema);