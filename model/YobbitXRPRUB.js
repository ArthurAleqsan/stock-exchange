const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YobbitXRPRUBSchema = new Schema({
    obj: {
        XRP_RUB : Object,
    }
});

module.exports = YobbitXRPRUB = mongoose.model('yobbitXRPRUB', YobbitXRPRUBSchema);