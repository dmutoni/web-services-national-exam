import mongoose from 'mongoose';
import { registerSchema } from 'swaggiffy';

mongoose.Promise = global.Promise;

const carOwnerSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    ownerNames: {
        type: String,
        required: true,
    },
    ownerNationalId: {
        type: String,
        required: true
    },
    ownerPhoneNumber: {
        type: Number,
        required: true
    },
    ownerAddress: {
        type: String,
        required: true
    },
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }]
});

const CarOwner = mongoose.model('CarOwner', carOwnerSchema);
registerSchema('CarOwner', carOwnerSchema, {orm: 'mongoose'});
export default CarOwner;