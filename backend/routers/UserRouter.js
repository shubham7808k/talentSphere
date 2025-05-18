const express = require('express');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const FeedbackModel = require('../models/FeedbackModel'); 
const AdminModel = require('../models/AdminModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new UserModel(req.body).save()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });

    // console.log(req.body.name);
    //res.send('user responde from add')
});

//getall
router.get('/getall', (req, res) => {
    UserModel.find()
    .then((result)=>{
        
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});
//getbyid
// : dentotes a parameter in the url
router.get('/getbyid/:id', (req, res) => {
    UserModel.findById(req.params.id)
    .then((result)=>{
        
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});

//getbyemail
router.get('/getbyemail/:email', (req, res) => {
    UserModel.find({email: req.params.email})
    .then((result)=>{
        
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});

//getbycity
router.get('/getbycity/:city', (req, res) => {
    UserModel.find({city: req.params.city})
    .then((result)=>{
        
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});



//delete
router.delete('/delete/:id', (req, res) => {
    UserModel.findByIdAndDelete(req.params.id)
    .then((result)=>{
        
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});


//update
router.put('/update/:id', (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
    .then((result)=>{
        
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});

router.post('/authenticate', (req, res) => {
    console.log(req.body);
    
    UserModel.findOne(req.body)
        .then((result) => {

            if (result) {
                // login success - generate token

                const { _id, name, email } = result;
                const payload = { _id, name, email };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1d' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({ token });
                        }
                    }
                )

            } else {
                //  login failed
                res.status(401).json({ message: 'Invalid credentials' });
            }

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

// Feedback submission route
router.post('/feedbacks', (req, res) => {
  const feedback = new FeedbackModel(req.body);

  feedback.save()
    .then((result) => {
      res.status(200).json({ message: 'Feedback submitted successfully!', result });
    })
    .catch((err) => {
      console.error('Error saving feedback:', err);
      res.status(500).json({ message: 'Failed to submit feedback', error: err });
    });
});

// Fetch all feedbacks route
router.get('/feedbacks', (req, res) => {
  FeedbackModel.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error('Error fetching feedbacks:', err);
      res.status(500).json({ message: 'Failed to fetch feedbacks', error: err });
    });
});

router.post('/admin/assign', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const newAdmin = new AdminModel({ email, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin assigned successfully' });
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate email error
      res.status(400).json({ message: 'Admin with this email already exists' });
    } else {
      console.error('Error assigning admin:', error);
      res.status(500).json({ message: 'Failed to assign admin', error });
    }
  }
});

router.get('/admin/getall', async (req, res) => {
  try {
    const admins = await AdminModel.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch admins', error });
  }
});

// Admin authentication route
router.post('/admin/authenticate', async (req, res) => {
    console.log(req.body);
    
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find admin by email and password
    const admin = await AdminModel.findOne({ email, password });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const { _id, email: adminEmail } = admin;
    const payload = { _id, email: adminEmail };

    jwt.sign(
      payload,
      process.env.JWT_SECRET, // Ensure JWT_SECRET is defined in your .env file
      { expiresIn: '1d' }, // Token expires in 1 day
      (err, token) => {
        if (err) {
          console.error('Error generating token:', err);
          return res.status(500).json({ message: 'Failed to generate token', error: err });
        }

        // Return the token
        res.status(200).json({ token });
      }
    );
  } catch (error) {
    console.error('Error authenticating admin:', error);
    res.status(500).json({ message: 'Failed to authenticate admin', error });
  }
});

router.post('/save-portfolio', async (req, res) => {
  console.log('Incoming request body:', req.body);

  const { portfolioData, selectedTemplate } = req.body;

  if (!portfolioData || !selectedTemplate) {
    return res.status(400).json({ message: 'Missing required fields: portfolioData or selectedTemplate' });
  }

  try {
    const newPortfolio = new Portfolio({
      ...portfolioData,
      template: selectedTemplate,
    });

    const savedPortfolio = await newPortfolio.save();
    res.status(201).json(savedPortfolio);
  } catch (error) {
    console.error('Error saving portfolio:', error);
    res.status(500).json({ message: 'Failed to save portfolio', error: error.message });
  }
});

router.get('/user-portfolio', async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user ID is available in the request
    const portfolio = await Portfolio.findOne({ userId });

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.status(200).json(portfolio);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ message: 'Failed to fetch portfolio' });
  }
});

module.exports = router;