const mongoose = require('mongoose');



const dbConnection = async() => {

    try {

        await mongoose.connect( 'mongodb://root:secret@mongo:27017/admin', {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
    
        console.log('Data Base online');

    } catch (error) {
        console.log(error);
        throw new Error('Error to initializar data base');
    }


}



module.exports = {
    dbConnection
}
