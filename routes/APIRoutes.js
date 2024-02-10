const express = require("express")
const router = express.Router()

const UserSchema = require('../schemas/user')

router.post("/user/signin", async (req, res) => {
    
    const { fname, lname, email, phone, password } = req.body;
    
    UserSchema.addUser(fname, lname, email, phone, password);

    return res.status(201).json({message: "User registered"});
})

router.post("/user/login", async (req, res) => {
    const { email, password } = req.body;
    
    const is_valid = UserSchema.checkPassword(email, password);
    return res.status(200).json({success: is_valid})
})

module.exports = router