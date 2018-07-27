const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YobbitETHRUBSchema = new Schema({
    obj: {
        ETH_RUB : Object,
    }
});

module.exports = YobbitETHRUB = mongoose.model('yobbitETHRUB', YobbitETHRUBSchema);