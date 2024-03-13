const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const arrrayObjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}]

const userInput = { 
    personalInput: {
        streetAddress: '1231455',
        city: 'seoul',
        state: 'fl'
    },
    //preferences: arrayString
    preferences: arrrayObjects
}

const personalInfoSchema = Joi.object().keys({
    streetAddress: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required(),
});

//const preferencesSchema = Joi.array().items(Joi.string());
const preferencesSchema = Joi.array().items(Joi.object().keys({
    example: Joi.string().required()
}));

const schema = Joi.object().keys({
    personalInput: personalInfoSchema,
    preferences: preferencesSchema
});

const result = schema.validate(userInput)

if (result.error) {
    console.log(result.error)
} else {
    console.log(result)
}