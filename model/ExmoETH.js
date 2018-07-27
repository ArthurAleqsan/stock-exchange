const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExmoETHSchema = new Schema({
    obj: {
        _USD : Object,
        _EUR : Object,
        _RUB : Object,
    },
});

module.exports = ExmoETH = mongoose.model('exmoETH', ExmoETHSchema);