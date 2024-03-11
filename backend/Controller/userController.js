const bcrypt = require("bcrypt");
const userModel = require("../model/model");

class UserController {
    async userRegister(req, res) {
        try {
            const { userName, email, password, confirmPassword } = req.body;

            // Check if user already exists
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ status: "failed", message: "User already exists" });
            }

            // Validate fields
            if (!userName || !email || !password || !confirmPassword) {
                return res.status(400).json({ status: "failed", message: "All fields are required" });
            }

            if (password !== confirmPassword) {
                return res.status(400).json({ status: "failed", message: "Password and confirm password should be the same" });
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password, salt);

            // Create new user
            const newUser = new userModel({ userName, email, password: hashPass });
            await newUser.save();

            res.status(200).json({ status: "success", message: "Registered successfully!" });
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ status: "error", message: "Internal server error" });
        }
    }
}

module.exports = new UserController();
