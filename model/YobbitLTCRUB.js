const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YobbitLTCRUBSchema = new Schema({
    obj: {
        LTC_RUB : Object,
    }
});

module.exports = YobbitLTCRUB = mongoose.model('yobbitLTCRUB', YobbitLTCRUBSchema);