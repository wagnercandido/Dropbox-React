const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/boxes', BoxController.store);
routes.post('/files', multer(multerConfig).single('file'), FileController.store);

//Rota de teste
routes.get('/teste', (req, res) => { //req = requisição, que é tudo que é enviado pela aplicação
    return res.send('Hello World');
})

module.exports = routes;