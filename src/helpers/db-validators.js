const Contact = require('../models/contact');

const esSearcValidate = async(phrase = '') => {
    if ( !phrase) {
        throw new Error(`The word ${ phrase } was not found at the BD`);
    }
}


const contactExistById = async( id ) => {

    // validate id
    const contactExist = await Contact.findById(id);
    if ( !contactExist ) {
        throw new Error(`Id: ${ id } Not found`);
    }
}



module.exports = {
    esSearcValidate,
    contactExistById,
}

