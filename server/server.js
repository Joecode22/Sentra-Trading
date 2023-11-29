//import express and initialize it
const express = require('express');
const app = express();

//Use Express middleware for parsing JSON and handling URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));