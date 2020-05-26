//import getAllMovies from './controllers';
//import express from 'express';

const getAllMovies = require('./controllers');
const express = require('express');
const router = express.Router();


// We are making use of the express router. 
// What we’re saying here is when a client reaches localhost:3000/movies we want the getAllMovies function to run. 
router.get('/movies', getAllMovies);

console.log("Inside Routes File");
module.exports = router;
//export default router;

