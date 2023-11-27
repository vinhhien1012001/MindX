const express = require('express')
const router = express.Router();
const {getAllUsers, getUsersBy, createAnUser, createUsers} = require('../controllers/user.controller')

// CRUD
router.get('/all', getAllUsers)

router.post('/search', getUsersBy)

router.post('/createOne', createAnUser)

router.post('/createMany', createUsers)

// update by uname/fname/gender (uname)
router.put('/update/:uname', )

// delete by uname/fname/gender (uname)
router.delete('/delete/:uname', )

module.exports = router;