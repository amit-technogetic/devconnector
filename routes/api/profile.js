const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const {check, validationResult} = require('express-validator');

// @route  Get api/profile/me
// @desc   Get current users profile 
// acces   Private


router.get('/me',auth, async (req,res) => {
    try {
    const profile = await Profile.findOne({ user : req.user.id}).populate('user',['name','avatar']);
    if(!profile) 
    {
        return res.status(400).json({msg : "There is no profile for this user"});
    }
    res.json(profile);
    }catch(err) 
    {
console.error(err.message);
res.status(500).send('Server error');
    }
    
})


// @route  Get api/profile
// @desc   Create or update user profile
// acces   Private

router.post('/' , [auth, [check('status', 'Status is required').not().isEmpty(), check('skills', 'Skills is required').not().isEmpty()]] ,  async (req,res) => {

})

module.exports = router;
