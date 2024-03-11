const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')


app.use(express.json())
app.use(cors())
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/carShowroom', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a schema and model for your MongoDB documents
const todoSchema = new mongoose.Schema({
  username:String,
  email: String,
  password:String,
});

const Todo = mongoose.model('Users', todoSchema);

// Define API endpoints
app.get('/api/register', async (req, res) => {
  const {username ,email,password ,Confirmpassword} = req.body;
  console.log("server side")
});

// Other CRUD endpoints (POST, PUT, DELETE) can be defined similarly

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
