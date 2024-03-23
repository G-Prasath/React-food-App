require('dotenv').config();
const mongoose = require('mongoose');

class DBConnector {
    constructor() {
        this.connection = null;
    }

    async connect() {
        try {
            const key = process.env.MONGODB_KEY;
            this.connection = await mongoose.connect(key);
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }

    async disconnect() {
        if (this.connection) {
            await mongoose.disconnect();
            console.log("MongoDB disconnected.");
        }
    }

    getConnection() {
        return this.connection;
    }
}

module.exports = DBConnector;

