
const status = require("../config/status");
const travelModel = require("../models/travel.model");
exports.addTravelInfo = async (req, res) => {
    try {
        const travelInfo = {
            title: req.body.title,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            organizationName: req.body.organizationName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            departureCountry: req.body.departureCountry,
            destinationCountry: req.body.destinationCountry,
            departureDateTime: req.body.departureDateTime,
            returnDateTime: req.body.returnDateTime,
            classOfService: req.body.classOfService,
            preferredHotel: req.body.preferredHotel,
            preferredAirline: req.body.preferredAirline,
            additionalInfo: req.body.additionalInfo,
        };
        const newTravelInfo = new travelModel(travelInfo);
        await newTravelInfo.save();
        res.json({ success: true, status: status.OK, msg: 'Travel information added successfully.' });
    } catch (err) {
        console.log("Error:", err);
        return res.json({ success: false, status: status.INTERNAL_SERVER_ERROR, err: err, msg: 'Failed to add travel information.' });
    }
};

// Get all travel information
exports.listTravelInfo = async (req, res) => {
    try {
        const data = await travelModel.find({}).lean().exec();
        return res.json({ data: data, success: true, status: status.OK });
    } catch (err) {
        return res.json({ success: false, status: status.INTERNAL_SERVER_ERROR, err: err, msg: 'Failed to retrieve travel information.' });
    }
};


