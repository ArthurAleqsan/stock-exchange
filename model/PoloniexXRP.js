const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PoloniexXRPSchema = new Schema({
    obj: {
        XRP_LTC : Object,
    }
});

module.exports = PoloniexXRP = mongoose.model('poloniexXRP', PoloniexXRPSchema);