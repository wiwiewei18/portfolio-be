import Joi from 'joi'

export const registerDTO = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})