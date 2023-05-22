import {
    EMAIL_MAX_LENGTH,
    EMAIL_MIN_LENGTH,
    PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH
} from '../constants'

// Regular expressions

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
export const isEmail = (str) => (
    /\S+@\S+\.\S+/.test(str)
)

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
export const isAlphanumeric = (str) => (
    /^[A-Za-z0-9]*$/.test(str)
)

/**
 * 
 * @param {string} str 
 * @param {number} min 
 * @param {number} max 
 * @returns {boolean}
 */
export const isWithinLimit = (str, min, max) => {
    const regex = new RegExp(`^.{${min},${max}}$`);
    return regex.test(str)
}

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
export const containsNumbers = (str) => (
    /\d/.test(str)
);


// Form validations

/**
 * 
 * @param {string} email 
 * @returns {boolean}
 */
export const validateEmail = (email) => (
    isEmail(email) &&
    isWithinLimit(email, EMAIL_MIN_LENGTH, EMAIL_MAX_LENGTH)
)

/**
 * 
 * @param {string} password 
 * @returns {boolean}
 */
export const validatePassword = (password) => (
    containsNumbers(password) &&
    isWithinLimit(password, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)
)


