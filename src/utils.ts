const jwt = require('jsonwebtoken')
const { faker } = require('@faker-js/faker')
const jwtSecret = 'aaw1vmv0e93no3F8jw1d10C'
export const generateMockedAuthentication = () => {
    console.log('generating token')
    const token = {
        username: faker.internet.email()
    }
    const id_token = jwt.sign(token, jwtSecret)
    const date = new Date()
    date.setDate(date.getDate()+31)
    return {
        id_token,
        access_token: faker.random.alphaNumeric(40).toUpperCase(),
        refresh_token: faker.random.alphaNumeric(40).toUpperCase(),
        expiration: date.toISOString(),
    }
}