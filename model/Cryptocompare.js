const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareSchema = new Schema({
    name : {
        type : String
    },
    currentBuyPrice : {
        type: String
    },
    sellPrice : {
        type: String
    }
});

module.exports = Cryptocompare = mongoose.model('currency', CryptocompareSchema);