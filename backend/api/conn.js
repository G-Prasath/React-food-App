require('dotenv').config()
const mongoose = require('mongoose');

async function dbConnect() {
    const Key = process.env.MONGODB_KEY
    const db = await mongoose.connect(Key);
    return db
}

module.exports = dbConnect;

