const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  User  = require('../model/usermodel');

const UserController = {
  async signup(req, res) {
    
    try {
      const { firstName, lastName, email, password } = req.body;

      console.log(req.body);


      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const checkuser=await User.findOne({
        where: {
          email
        }
      });

      if(!checkuser){
        // Create a new user
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      res.status(201).json({ user });
      }
      else{
        res.send("user already exist")
      }
      

     
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });

      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = UserController;
