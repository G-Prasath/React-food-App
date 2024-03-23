require('dotenv').config()
const express = require("express");
const DBConnector = require('./api/conn')
const userRoute = require('./routes/register.route.js')
const app = express();


/** Middleware */
app.use(express.json());
app.use(express.urlencoded({extended: false}))

/** New DB Connection */
const db = new DBConnector()

/** routes */
app.use('/api/register', userRoute);

/** Default Routes */
app.get('/', (req, res) => {
    res.send("HEllo won This Home Page")
})








db.connect().then(() => {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server Connected`);
        });
    } catch (error) {
        console.log(error);
    }
}).catch((error) => console.log(error))

