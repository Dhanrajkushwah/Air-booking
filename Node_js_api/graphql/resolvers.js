const travelModel = require('../models/travel.model');

const resolvers = {
    Query: {
        getAllTravels: async () => {
            try {
                return await travelModel.find({}).lean().exec();
            } catch (err) {
                throw new Error('Failed to retrieve travel information');
            }
        },
        getTravelById: async (parent, { id }) => {
            try {
                return await travelModel.findById(id).lean().exec();
            } catch (err) {
                throw new Error('Failed to retrieve travel information by ID');
            }
        },
    },
    Mutation: {
        addTravelInfo: async (parent, args) => {
            try {
                const newTravelInfo = new travelModel({
                    title: args.title,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    birthDate: args.birthDate,
                    organizationName: args.organizationName,
                    email: args.email,
                    phoneNumber: args.phoneNumber,
                    departureCountry: args.departureCountry,
                    destinationCountry: args.destinationCountry,
                    departureDateTime: {
                        date: args.departureDateTime.date,
                        time: args.departureDateTime.time,
                    },
                    returnDateTime: {
                        date: args.returnDateTime.date,
                        time: args.returnDateTime.time,
                    },
                    classOfService: args.classOfService,
                    preferredHotel: args.preferredHotel,
                    preferredAirline: args.preferredAirline,
                    additionalInfo: args.additionalInfo,
                });

                return await newTravelInfo.save();
            } catch (err) {
                throw new Error('Failed to add travel information');
            }
        },
    },
};

module.exports = resolvers;
