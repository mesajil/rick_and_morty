import { isEmail, isWithinLimit, containsNumbers } from './utils'
import { EMAIL_MAX_LENGTH, EMAIL_MIN_LENGTH, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '../constants'

export const validateEmail = (email) => (
    isEmail(email) &&
    isWithinLimit(email, EMAIL_MIN_LENGTH, EMAIL_MAX_LENGTH)
) 
export const validatePassword = (password) => (
    containsNumbers(password) &&
    isWithinLimit(password, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)
) 

