const express = require('express');
const client = require('../database');

const User = require('../models/User')

const router = express.Router();

router.post('/register', async (req, res) => {

    try {
        console.log(req.body)
        const user = await User.insertOne(req.body)

        return res.send({ user });
        
    } catch (err) {

        return res.status(400).send({ error: 'Registration failed'});
    }
});

router.get('/register', async (req, res) => {

        try {
          await client.connect();
          const database = client.db("uploadexample");
          const users = database.collection("users");
          // Query for a movie that has the title 'The Room'
          const query = { name: "Daniel" };

          const user = await users.findOne(query);
          // since this method returns the matched document, not a cursor, print it directly
          return res.send(user);
        } catch (err) {

            return res.status(400).send({ error: 'GET failed'});
        }
})

module.exports = app => app.use('/auth', router);