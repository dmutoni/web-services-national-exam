import Joi from 'joi';

const schema = Joi.object({
    names: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: {
            allow: ['com', 'net']
        }
    }).required(),
    phone: Joi.string().required(),
    national_id: Joi.string().required(),
    role: Joi.string().valid('Standard', 'Candidate', 'Admin').default('Admin')
})

const meterValidation = Joi.object({
    meterNumber: Joi.string().min(6).max(6).required(),
    money: Joi.number().required()
})
export {
    schema,
    meterValidation
};