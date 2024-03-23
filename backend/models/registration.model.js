const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please Enter Your Name"]
        },
        email: {
            type: String,
            require: [true, "Please Enter Your Email"]
        },
        password: {
            type: String,
            require: [true, "Please Enter Your Password"]
        }
    },
    {
        timestamps: true
    }
)

const Registration = mongoose.model('Registration', RegisterSchema);
module.exports = Registration;