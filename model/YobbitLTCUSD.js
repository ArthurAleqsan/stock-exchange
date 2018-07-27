const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YobbitLTCUSDSchema = new Schema({
    obj: {
        LTC_USD : Object,
    }
});

module.exports = YobbitLTCUSD = mongoose.model('yobbitLTCUSD', YobbitLTCUSDSchema);