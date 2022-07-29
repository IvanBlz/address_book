const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = 3000;
        this.contactPath = '/api/contac';

        // Connect to data base
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Routes of my aplication
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // read and parseo to body
        this.app.use( express.json() );



    }

    routes() {
        this.app.use( this.contactPath, require('../routes/contact'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
