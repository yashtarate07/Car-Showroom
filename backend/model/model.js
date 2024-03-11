const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String, required: true },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
