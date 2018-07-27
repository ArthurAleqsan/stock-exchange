const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YobbitXRPUSDSchema = new Schema({
    obj: {
        XRP_USD : Object,
    }
});

module.exports = YobbitXRPUSD = mongoose.model('yobbitXRPCUSD', YobbitXRPUSDSchema);