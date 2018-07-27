const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YobbitBTCRUBSchema = new Schema({
    obj: {
        BTC_RUB : Object,
    }
});

module.exports = YobbitBTCRUB = mongoose.model('yobbitBTCRUB', YobbitBTCRUBSchema);