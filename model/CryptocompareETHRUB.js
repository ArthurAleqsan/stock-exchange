const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareETHRUBSchema = new Schema({
    obj: {
        ETH_RUB: Object,
    }
});

module.exports = CryptocompareETHRUB = mongoose.model('cryptocompareETHRUB', CryptocompareETHRUBSchema);