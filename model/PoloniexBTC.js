const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PoloniexBTCSchema = new Schema({
        obj: {
            BTC_LTC : Object,
        }
});

module.exports = PoloniexBTC = mongoose.model('poloniexBTC', PoloniexBTCSchema);