const express = require('express');
const Register = require('../models/registration.model.js')
const route = express.Router();
const {getUser, getusers, addUser, updateUser, deleteUser} = require('../controllers/register.controller.js');


route.get('/', getusers);
route.get('/:id', getUser);


route.post('/', addUser);

route.put('/:id', updateUser);

route.delete('/:id', deleteUser)

module.exports = route;