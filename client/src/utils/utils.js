


export const isEmail = (str) => (/\S+@\S+\.\S+/.test(str))
export const isAlphanumeric = (str) => (/^[A-Za-z0-9]*$/.test(str))
export const isWithinLimit = (str, minLength = 0, maxLength = 1000) => {
    const regex = new RegExp(`^.{${minLength},${maxLength}}$`);
    return regex.test(str)
}
export const containsNumbers = (str) => (/\d/.test(str));