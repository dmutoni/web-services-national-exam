import CarOwner from '../models/carOwner.model.js';

const saveCarOwner = async (req,res) => {
    try {
        const carOwner = new CarOwner({
            ownerNames: req.body.ownerNames,
            ownerNationalId: req.body.ownerNationalId,
            ownerAddress: req.body.ownerAddress,
            ownerPhoneNumber: req.body.ownerPhoneNumber,
        });
        const savedCarOwner = await carOwner.save();
        return res.status(201).json({
            success: true,
            message: 'Car owner created successfully',
            data: savedCarOwner
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error creating car owner',
            error: err.message
        })
    }
}
const getAllCarOwners = async (req,res) => {
    try {
        const carOwners = await CarOwner.find();
        return res.status(200).json({
            success: true,
            message: 'Car owners retrieved successfully',
            data: carOwners
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving car owners',
            error: err.message
        })
    }
}

const getCarOwner = async (req,res) => {
    try {
        const carOwner = await CarOwner.findById(req.params.id);
        if (!carOwner) return res.status(404).json({
            message: 'Car owner not found',
            success: false
        });
        return res.status(200).json({
            success: true,
            message: 'Car owner retrieved successfully',
            data: carOwner
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving car owner',
            error: err.message
        })
    }
}
export {
    saveCarOwner,
    getAllCarOwners,
    getCarOwner
}