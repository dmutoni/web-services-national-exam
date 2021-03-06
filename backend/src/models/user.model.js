import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { registerSchema } from 'swaggiffy';

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    names: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100
    },
    national_id: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        default: 'Admin',
        type: String,
        enum: ['Standard', 'Candidate', 'Admin']
    }
});

userSchema.methods.generateAuthToken = async function () {
    return await jwt.sign( {
        id: this._id,
        name: this.name,
        email: this.email,
        gender: this.gender,
        role: this.role,
    }, process.env.TOKEN_SECRET )
}
registerSchema('User', userSchema, {orm: 'mongoose'});
const User = mongoose.model('User', userSchema);

export default User;

