const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareXRPEURSchema = new Schema({
    obj: {
        XRP_EUR: Object,
    }
});

module.exports = CryptocompareXRPEUR = mongoose.model('cryptocompareXRPEUR', CryptocompareXRPEURSchema);