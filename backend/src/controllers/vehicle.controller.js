import Vehicle from '../models/vehicle.model.js';

const saveVehicle = async (req,res) => {
    try {
        const plateNumber = generatePlateNumber();
        const vehicle = new Vehicle({
            chasisNumber: req.body.chasisNumber,
            manufactureCompany: req.body.manufactureCompany,
            manufactureYear: req.body.manufactureYear,
            price: req.body.price,
            vehiclePlateNumber: plateNumber,
            owner: req.body.owner,
            modelName: req.body.modelName,
        });
        const savedVehicle = await vehicle.save();
        return res.status(201).json({
            success: true,
            message: 'Vehicle created successfully',
            data: savedVehicle
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error creating vehicle',
            error: err.message
        })
    }
}

//a function to generate random plate number of a vehicle
const generatePlateNumber = () => {
    let plateNumber = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    for (let i = 0; i < 3; i++) {
        plateNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    for (let i = 0; i < 3; i++) {
        plateNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return plateNumber;
}

const getAllVehicles = async (req,res) => {
    try {
        const vehicles = await Vehicle.find();
        return res.status(200).json({
            success: true,
            message: 'Vehicles retrieved successfully',
            data: vehicles
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving vehicles',
            error: err.message
        })
    }
}

const getAllVehiclesAndTheirOwners = async (req,res) => {
    try {
        const vehicles = await Vehicle.find({}).populate('owner');
        return res.status(200).json({
            success: true,
            message: 'Vehicles retrieved successfully',
            data: vehicles
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving vehicles',
            error: err.message
        })
    }
}

const getVehicle = async (req,res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Vehicle retrieved successfully',
            data: vehicle
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Error retrieving vehicle',
            error: err.message
        })
    }
}

export {
    saveVehicle,
    getAllVehicles,
    getAllVehiclesAndTheirOwners,
    getVehicle
}