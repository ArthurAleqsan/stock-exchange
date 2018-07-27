const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareETHEURSchema = new Schema({
    obj: {
        ETH_EUR: Object,
    }
});

module.exports = CryptocompareETHEUR = mongoose.model('cryptocompareETHEUR', CryptocompareETHEURSchema);