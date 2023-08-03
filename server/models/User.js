const {Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 
            "Please enter a valid email"]
    },
    password: {
        type: String,
        required: true
    },
    bulletins: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Bulletin'
        }
    ],
    fridgeId: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = model('User', UserSchema);

module.exports = User;

