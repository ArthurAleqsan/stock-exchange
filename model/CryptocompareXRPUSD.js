const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareXRPUSDSchema = new Schema({
    obj: {
        XRP_USD: Object,
    }
});

module.exports = CryptocompareXRPUSD = mongoose.model('cryptocompareXRPUSD', CryptocompareXRPUSDSchema);