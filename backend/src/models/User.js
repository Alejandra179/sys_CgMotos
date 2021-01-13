const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {
    Schema,
    model
} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin','propietario']
    }
}, {
    timestamps: true
})

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
    if (password) {
        return await bcrypt.compare(password, this.password)

    }
    return false;
}
module.exports = model('User', UserSchema);