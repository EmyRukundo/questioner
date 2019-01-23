// server.js
import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import ReflectionWithJsObject from './src/usingJSObject/controllers/Reflection';
import ReflectionWithDB from './src/usingDB/controller/Reflection';

dotenv.config();
const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

#####################
# Existing Code     #
#####################

app.listen(3000)
console.log('app running on port ', 3000);