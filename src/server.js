const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

mongoose.connect('mongodb+srv://admin:admin@cluster0-ky2dx.mongodb.net/dropboxreact?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
    }
);

app.use((req, res, next) => {
    req.io = io;
    return next();
})

app.use(express.json()); //Utiliza o json como comunicação
app.use(express.urlencoded({ extended: true })); //Permite o envio de arquivos
app.use('/files', express.static(path.resolve(__dirname, '..', 't   mp')));

app.use(require('./routes'));

server.listen(process.env.PORT || 3333);