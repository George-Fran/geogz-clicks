const { Schema, model} = require('mongoose');

const imageSchema = new Schema({
    title: { type: 'string'},
    description: { type: 'string'},
    filename: { type: 'string'},
    path: { type: 'string'},
    originalname: { type: 'string'},
    mimetype: { type: 'string'},
    size: { type: 'number'},
    created_at: { type: Date, default: Date.now() }
});

module.exports = model('Image', imageSchema);