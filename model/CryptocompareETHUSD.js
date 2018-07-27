const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptocompareETHUSDSchema = new Schema({
    obj: {
        ETH_USD: Object,
    }
});

module.exports = CryptocompareETHUSD = mongoose.model('cryptocompareETHUSD', CryptocompareETHUSDSchema);