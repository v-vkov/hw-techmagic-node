const mongoose = require('mongoose');
const Joi = require('joi');

const todoSchema = new mongoose.Schema({
    name: String,
    description: String,
    marked: Boolean,
});

todoSchema.methods.joiValidate = (obj) => {

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().optional().allow(null).max(200),
    marked: Joi.boolean().required()
  });
  return schema.validate(obj);
}

module.exports = mongoose.model('Todo', todoSchema);