const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExmoBTCSchema = new Schema({
        obj: {
            _USD : Object,
            _EUR : Object,
            _RUB : Object,
        }
});

module.exports = ExmoBTC = mongoose.model('exmoBTC', ExmoBTCSchema);