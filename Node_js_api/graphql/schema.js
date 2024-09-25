const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type DepartureDateTime {
        date: String!
        time: String!
    }

    type ReturnDateTime {
        date: String!
        time: String!
    }

    type Travel {
        id: ID!
        title: String!
        firstName: String!
        lastName: String!
        birthDate: String!
        organizationName: String!
        email: String!
        phoneNumber: String!
        departureCountry: String!
        destinationCountry: String!
        departureDateTime: DepartureDateTime!
        returnDateTime: ReturnDateTime!
        classOfService: String!
        preferredHotel: String
        preferredAirline: String
        additionalInfo: String
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getAllTravels: [Travel!]!
        getTravelById(id: ID!): Travel
    }

    type Mutation {
        addTravelInfo(
            title: String!,
            firstName: String!,
            lastName: String!,
            birthDate: String!,
            organizationName: String!,
            email: String!,
            phoneNumber: String!,
            departureCountry: String!,
            destinationCountry: String!,
            departureDateTime: DepartureDateTimeInput!,
            returnDateTime: ReturnDateTimeInput!,
            classOfService: String!,
            preferredHotel: String,
            preferredAirline: String,
            additionalInfo: String
        ): Travel!
    }

    input DepartureDateTimeInput {
        date: String!
        time: String!
    }

    input ReturnDateTimeInput {
        date: String!
        time: String!
    }
`;

module.exports = typeDefs;
