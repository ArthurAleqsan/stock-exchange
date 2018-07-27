const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExmoLTCSchema = new Schema({
    obj: {
        _USD : Object,
        _EUR : Object,
        _RUB : Object,
    },
});

module.exports = ExmoLTC = mongoose.model('exmoLTC', ExmoLTCSchema);