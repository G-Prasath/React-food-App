const Register = require('../models/registration.model');

const getusers = async (req, res) => {
    try {
        const Users = await Register.find({});
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const User = await Register.findById(id)
        res.status(200).json(User)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addUser = async (req, res) => {
    try {
        const newUser = await Register.create(req.body)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
       const {id} = req.params;
       const updated = await Register.findByIdAndUpdate(id, req.body);
       if(!updated){
        return res.status(404).json({message: "User Not Found"})
       } 
       const updateUser = await Register.findById(id)
       res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteUser = await Register.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(404).json("User Not Found")
        }
        res.status(200).json("User Deleted Successfully")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getusers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}