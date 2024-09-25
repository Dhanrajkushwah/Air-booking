const express = require('express');
const router = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use('/api', router);

// MongoDB connection
const mongoUri = process.env.MONGODB_URI = 'mongodb+srv://Contas:nuouP4MyDhH0q3E4@cluster0.gkkofhc.mongodb.net/trevelbook';
if (!mongoUri) {
    console.error('MONGODB_URI environment variable is not set.');
    process.exit(1);
}

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, 
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});


const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}${server.graphqlPath}`);
    });
};

startServer().catch(err => {
    console.error('Error starting the server:', err);
});

module.exports = app;
