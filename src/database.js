const mongoose = require('mongoose');

mongoose.connect('mongodb://root:secret@mongo:27017/admin')
.then( db => console.log('DB is conected to ', db.connection.host))
.catch(err => console.error(err));