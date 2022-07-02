const jwt = require('jsonwebtoken')

export const generateMockedAuthentication = () => {
    const token = {
        username: 'any_username'
    }
    const id_token = jwt.create(token)
    return {
        id_token,
        access_token: 'any_id',
        refresh_token: 'any_id',
        username: 'any_id',
        expiration: new Date().toISOString(),
    }
}