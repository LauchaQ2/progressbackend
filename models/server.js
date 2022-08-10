const express = require('express')
var cors = require('cors');
const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            categories: '/api/categories',
            search: '/api/search',
            product: '/api/products',
            uploads: '/api/uploads',
            users: '/api/users'
        }

        this.connectDB();

        this.middlewares();

        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }



    //Middlewares
    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
            });
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }
    

    routes() {

        this.app.use(this.paths.auth, require('../routes/auth'))
        this.app.use(this.paths.search, require('../routes/search'))
        this.app.use(this.paths.categories, require('../routes/categories'))
        this.app.use(this.paths.product, require('../routes/products'))
        this.app.use(this.paths.uploads, require('../routes/uploads'))
        this.app.use(this.paths.users, require('../routes/users'))


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port)
        })
    }

}

module.exports = Server;