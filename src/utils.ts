const jwt = require('jsonwebtoken')
const { faker } = require('@faker-js/faker')
const jwtSecret = 'aaw1vmv0e93no3F8jw1d10C'
export const generateMockedAuthentication = () => {
    console.log('generating token')
    const token = {
        username: 'any_username@mail.com'
    }
    const id_token = jwt.sign(token, jwtSecret)
    return {
        id_token,
        access_token: faker.random.alphaNumeric(40).toUpperCase(),
        refresh_token: faker.random.alphaNumeric(40).toUpperCase(),
        expiration: new Date().toISOString(),
    }
}