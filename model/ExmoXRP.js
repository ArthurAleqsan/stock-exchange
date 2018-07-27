const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExmoXRPSchema = new Schema({
    obj: {
        _USD : Object,
        _EUR : Object,
        _RUB : Object,
    },
});

module.exports = ExmoXRP = mongoose.model('exmoXRP', ExmoXRPSchema);