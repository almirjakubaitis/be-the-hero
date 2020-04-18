const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG' , () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be abble to create a new ONG', async () => {
        const response = await request(app)
        //.set('Authorization', 'e5284ff9')
        .post('/ongs')
        .send({
            name: "APAD",
            email: "contato@iphone.com",
            whatsapp: "4739534367",
            city: "Rio do Sul",
            uf: "SC"
        });

        //console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});