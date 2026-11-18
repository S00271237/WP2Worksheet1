import request from "supertest";
import { app } from "../../src/app";



describe('GET /cars', () => {

    it('returns all cars', async () => {

        const response = await request(app)
            .get('/api/v1/cars')
            .set('x-api-key', 'blahblah');

        expect(response.status).toBe(200);

    });

    describe('POST /cars', () => {
        it('creates and returns a car', async () => {
            const response = await request(app)
                .post('/api/v1/cars')
                .set('x-api-key', 'blahblah')
                .send({
                    make: 'Renault',
                    model: 'hatchback',
                    year: 1972
                });

            expect(response.status).toBe(201);
            expect(response.body).toMatchObject({
                make: 'Renault',
                model: 'hatchback',
                year: 1972
            });
            expect(response.body._id).toBeDefined();
        });
    });

});
