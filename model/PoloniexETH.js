const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PoloniexETHSchema = new Schema({
    obj: {
        ETH_LTC : Object,
    }
});

module.exports = PoloniexETH = mongoose.model('poloniexETH', PoloniexETHSchema);