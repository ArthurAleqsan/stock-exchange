const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BinanceSchema = new Schema({
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

module.exports = Binance = mongoose.model('currency', BinanceSchema);