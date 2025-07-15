const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    ime: {
        type: String,
        required: false
    },
    prezime: {
        type: String,
        required: false
    },
    telefon: {
        type: String,
        required: true
    },
    mesto: {
        type: String,
        required: false
    },
    ulica: {
        type: String,
        required: false
    },
    vreme: {
        type: String,
        required: false
    },
    napomene: {
        type: String,
        required: false
    },
    klima: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('narudzbine', PostSchema); 