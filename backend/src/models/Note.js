const mongoose = require('mongoose');

const {
    Schema,
    model
} = mongoose;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = model("Note", NoteSchema);