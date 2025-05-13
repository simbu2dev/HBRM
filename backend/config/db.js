const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

let db;

async function connectDB() {
    if (db) return db;

    const client = new MongoClient(uri);
    await client.connect();
    db = client.db(process.env.DB_NAME);
    return db;
}

module.exports = connectDB;
