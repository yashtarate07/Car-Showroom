const mongoose = require('mongoose');

const connectToDatabase = async (url) => {
    try {
        const dbOptions = {
            dbName: "carShowroom",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Remove the useCreateIndex option
            // useCreateIndex: true,
        };

        await mongoose.connect(url, dbOptions);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToDatabase;
