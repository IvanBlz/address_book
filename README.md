# address_book
address book

Se realizo con docker compose para el manejo de mongodb local

$ sudo docker compose up --build

ejecutar este comando dentro de la carpeta para poder crear los contenedores de node js y mongodb.

si no se llega a crear la colleción entonces agregar la coleccion y los datos fakedatabase.json importando el archivo o insertando los documentos

la url para get y delete es http://localhost:4000/api/contac

mongodb:  mongodb://root:secret@localhost:27017/?authMechanism=DEFAULT
