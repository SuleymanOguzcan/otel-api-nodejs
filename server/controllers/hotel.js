const Hotel = require ('../models/Hotel.js')
const Room = require ('../models/Room.js')

const createHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.create(req.body)
        res.status(201).json(hotel)    
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const updateHotel = async (req, res, next) => {
    const {id} = req.params
    try {
        const hotel = await Hotel.findByIdAndUpdate(id, {$set : req.body}, {new: true});
        res.status(200).json(hotel)    
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const deleteHotel = async (req, res, next) => {
    const {id} = req.params
    try {
        await Hotel.findByIdAndDelete(id);
        res.status(200).json({message : "silme basarili.."})    
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const getSingleHotel = async (req, res, next) => {
    const {id} = req.params
    try {
       const hotel = await Hotel.findById(id);
        res.status(200).json(hotel)    
    } catch (error) {
        res.status(500).json({message: error})
    }
}


//https://youtu.be/bZIc5MK6nAg?t=2571
//buradan devam et!!!
// C:\Users\soguz\OneDrive\Masaüstü\otelappp\server> npm start