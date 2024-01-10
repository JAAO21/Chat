const dotenv = require('dotenv');

//module dotenv
dotenv.config();
const PORT = process.env.PORT || 4550;

const MORGAN_LOG_LEVEL =  'dev';
module.exports = {PORT,MORGAN_LOG_LEVEL};