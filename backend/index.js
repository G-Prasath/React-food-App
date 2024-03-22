const express = require("express");
const mongoose = require('mongoose')
const dbConnection = require('./api/conn.js')
const app = express();


dbConnection().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server Connected`);
        })
    }catch(error){
        // console.log('Can not connect Server');
        console.error('Error:', error);
    }
}).catch(error => {
    console.log('Database connection Invalide ...!');
})