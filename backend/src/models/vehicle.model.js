import mongoose from 'mongoose';
import { registerSchema, Schema } from 'swaggiffy';

mongoose.Promise = global.Promise;

const vehicleSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    chasisNumber: {
        type: String,
        required: true,
    },
    manufactureCompany: {
        type: String,
        required: true
    },
    manufactureYear: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    vehiclePlateNumber: {
        type: String,
        required: true
    },
    modelName: {
        type: String,
        required: true
    },
    owner: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "CarOwner"
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
registerSchema('Vehicle', vehicleSchema, {orm: 'mongoose'});
export default Vehicle;