//Modules
const express = require('express');
const morgan = require('morgan');
const cors=require('cors')
const http=require('http')
const main=require('./main')

//functions and vars

const socketIo=require('./socket.io')
const {PORT,MORGAN_LOG_LEVEL}=require('./config')


//module express
const app = express()

const serverHttp=http.createServer(app);
//socket Io
socketIo(serverHttp)

//middlewares
//module morgan
app.use(morgan(MORGAN_LOG_LEVEL));

//module cors
app.use(cors())


main(serverHttp)
