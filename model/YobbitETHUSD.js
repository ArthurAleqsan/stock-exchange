const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YobbitETHUSDSchema = new Schema({
    obj: {
        ETH_USD : Object,
    }
});

module.exports = YobbitETHUSD = mongoose.model('yobbitETHUSD', YobbitETHUSDSchema);