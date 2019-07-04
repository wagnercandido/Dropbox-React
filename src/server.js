const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-ky2dx.mongodb.net/dropboxreact?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
    }
);

app.use(express.json()); //Utiliza o json como comunicação
app.use(express.urlencoded({ extended: true })); //Permite o envio de arquivos

app.use(require('./routes'));

app.listen(3333);