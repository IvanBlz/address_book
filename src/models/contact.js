
const { Schema, model } = require('mongoose');

const ContactSchema = Schema({
    _id: {
        type: String,
        required: [true, 'Id is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    phone: {
        type: String,
        required: [true, 'phone is required'],
        unique: true
    },
    addressLines: {
        type: Array,
    }
});



ContactSchema.methods.toJSON = function() {
    const { __v, ...contact  } = this.toObject();
    return contact;
}

module.exports = model( 'Contact', ContactSchema );
