const express = require('express');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const FeedbackModel = require('../models/FeedbackModel'); // Import the Feedback model

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

module.exports = router;