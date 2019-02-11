const supertest = require('supertest')
const { app, server } = require('../index.js')
const api = supertest(app)

test('country is returned as json', async () => {

    const response = await api
        .get('/country/finland')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
})


test('with incorrect name not found error message is returned', async () => {
    const response = await api
        .get('/country/asdfasdfasdfafsdfwe')
        .expect(200)
        expect(response.body).toEqual({'error': 'Not Found'})
})

test('superpowers returned as json', async () => {
    const response = await api
    .get('/superpowers')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(() => {
    server.close()
})