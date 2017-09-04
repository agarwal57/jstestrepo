import express from 'express';
import http from 'http';
import HttpStatus from 'http-status-codes';
import { ClientError, ServerError, ClientErrorCodes, ServerErrorCodes } from './utils/errors';
const app = express();


//var myerror = new Clienterror(ClientStruct["MISSING_PARAMS"], 'username');
var myerror = new ClientError(ClientErrorCodes.MISSING_PARAM);
console.log(myerror);
console.log(myerror.getErrorForClient());

var myerror1 = new ServerError(ServerErrorCodes.DATABASE_ERROR);
console.log(myerror1);
console.log(myerror1.getErrorForClient());

app.get('/', (req, res) => {
  res.status(HttpStatus.BAD_REQUEST).send({'error': myerror.getErrorForClient()});
});

let date = new Date();
console.log(date + ' ' + date.getTime());


const server = http.createServer(app);
server.listen("1234", function() {
  console.log('Node is running on localhost:1234');
});
