const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YobbitSchema = new Schema({
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

module.exports = Yobbit = mongoose.model('currency', YobbitSchema);