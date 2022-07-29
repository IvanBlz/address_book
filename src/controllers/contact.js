const { response, request } = require('express');


const Contact = require('../models/contact');



const contactsGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0, phrase = "" } = req.query;
    var query = {name: { $regex: '.*' + phrase + '.*' } };

    const  contacts = await Contact.find(query)

    
    res.status(200).header('Content-Type', 'application/json').json(contacts);
}


const contactByIdGet = async(req = request, res = response) => {

    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.status(200).header('Content-Type', 'application/json').json(
        contact
    );

}

const contactDelete = async(req, res = response) => {

    const { id } = req.params;


    const contact = await Contact.findByIdAndDelete(id);

    res.status(204);
}




module.exports = {
    contactsGet,
    contactByIdGet,
    contactDelete,
}