const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PoloniexSchema = new Schema({
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

module.exports = Poloniex = mongoose.model('currency', PoloniexSchema);