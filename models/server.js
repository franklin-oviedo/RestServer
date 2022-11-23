const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app =  express();
        //Middlewares
        this.middlewares();
        //Rutas
        this.routesPath = '/api/users';
        this.routes();

    }

    middlewares(){

        //Cors
        this.app.use(cors())
        //Lectura y Parseo del Body
        this.app.use(express.json())
        //Public Directory
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.routesPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(process.env.PORT_HOST, ()=> {
            console.log(`App Listen: http://localhost:${process.env.PORT_HOST}`)
        })
    }
}

module.exports = Server;