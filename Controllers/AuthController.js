const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../Models/Users');


const register = (req, res) =>{
    try{
        const {username, email, password} = req.body;

        res.status(200).json({
            message: 'User Created',
            success: true
        })

    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}


module.exports = register;