const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExmoSchema = new Schema({
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

module.exports = Exmo = mongoose.model('currency', ExmoSchema);