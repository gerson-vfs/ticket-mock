import jwt from 'jsonwebtoken'
import { faker } from '@faker-js/faker'
const jwtSecret = 'aaw1vmv0e93no3F8jw1d10C'

const generateToken = () => faker.random.alphaNumeric(40).toUpperCase()

export const generateMockedAuthentication = () => {
    const token = {
        username: faker.internet.email()
    }
    const id_token = jwt.sign(token, jwtSecret)
    const date = new Date()
    date.setDate(date.getDate()+31)
    return {
        id_token,
        access_token: generateToken(),
        refresh_token: generateToken(),
        expiration: date.toISOString(),
    }
}

export const generateTransactResponse = (amount: number) => {
    const shouldSucceed = isEven(amount)
    const meta = {
        status: shouldSucceed ? 'succeeded' : 'Failed',
        messages: [{code: 'ERROR_MESSAGE'}]
      }
      const data = {
        authorization_id: generateToken(), 
        capture_id: generateToken(), 
        captured_amount: amount,
        status: 'Transacted'
      }
      const token = generateToken()

      const error = {
          status: 400
      }
      return {response: {meta, data, token, error}, status: shouldSucceed ? 200 : 400}
}


export const generateRefundResponse = (amount: number) => {
    const meta = {
        status: 'succeeded',
      }
      const data = {
        refund_id: generateToken(), 
        refunded_amount: amount,
        status: 'Transacted'
      }
      const token = generateToken()

      const error = null
      return {meta, data, token, error}
}

export const isEven = (amount: number) => amount % 2 == 0