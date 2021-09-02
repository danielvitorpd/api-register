require("dotenv").config();

//mongoose.Promise = global.Promise;

const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URL
//const uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("uploadexample");
        const users = database.collection("users");
        // Query for a movie that has the title 'The Room'
        const query = { name: "Daniel" };

        const user = await users.findOne(query);
        // since this method returns the matched document, not a cursor, print it directly
        console.log(user);
      } finally {
        await client.close();
      }
}
run().catch(console.dir);

module.exports = client;