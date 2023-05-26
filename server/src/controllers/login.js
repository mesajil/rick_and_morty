const registeredUsers = require('../utils/users')



const validLogin = (req, res) => {
    try {
        const { email, password } = req.query;
        const registeredUser = registeredUsers.find(user => {
            return user.email == email && user.password == password
        })
        res.status(200).json({ access: (registeredUser ? true : false) })

    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = {
    validLogin,
}