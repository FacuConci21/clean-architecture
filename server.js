const express = require('express');
const socket = require('./socket');

const app = express();
const server = require('http').Server(app);

const router = require('./network/routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

socket.connect(server);
router(app);

app.use('/app', express.static('public'));

server.listen(3000, async () => {

    await require('./db');
    console.log(`server running on port 3000`);
});