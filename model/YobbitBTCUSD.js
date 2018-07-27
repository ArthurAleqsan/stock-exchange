const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YobbitBTCUSDSchema = new Schema({
        obj: {
            BTC_USD : Object,
        }
});

module.exports = YobbitBTCUSD = mongoose.model('yobbitBTCUSD', YobbitBTCUSDSchema);