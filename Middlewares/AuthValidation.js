const Joi = require('joi');


const registerValidator = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(100).required(),
        email: Joi.string().min(5).email().required(),
        password: Joi.string().min(4).max(50).required(),
        role: Joi.string()
    })

    const { error } = schema.validate(req.body);

    if(error){
        return res.status(400)
                .json({message: 'Bad request', error});
    }

    next();
}

module.exports = registerValidator ;