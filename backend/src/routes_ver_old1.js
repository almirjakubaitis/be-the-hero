const express = require('express');
const connection = require('./database/connection');
const crypto = require('crypto');

const routes = express.Router();


// routes.get('/ongs', async (request, response) => {
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs);

// });

routes.post('/ongs' , async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    //console.log(data);
    const id = crypto.randomBytes(4).toString("HEX");

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
});

module.exports = routes;