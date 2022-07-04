const jwt = require('jsonwebtoken')

const jwtSecret = 'aaw1vmv0e93no3F8jw1d10C'
export const generateMockedAuthentication = () => {
    console.log('generating token')
    const token = {
        username: 'any_username@mail.com'
    }
    const id_token = jwt.sign(token, jwtSecret)
    return {
        id_token,
        access_token: 'any_id',
        refresh_token: 'any_id',
        username: 'any_id',
        expiration: new Date().toISOString(),
    }
}