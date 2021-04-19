import dotenv from 'dotenv';
import express from 'express';
import http, {RequestOptions} from 'http';
import {start} from './start';

const expressService = express();

expressService.get('/', () => {
  console.log('PING SERVICE:', new Date());
});

expressService.listen(8081);

const reqOptions: RequestOptions = {
  host: '127.0.0.1',
  port: 8081,
  path: '/'
};

setInterval(() => {
  const req = http.request(reqOptions)
  req.end();
}, 180000)

dotenv.config()
start()
