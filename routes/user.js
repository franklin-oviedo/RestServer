const {Router} = require('express');
const userController = require('../controllers/userController');
const router = Router();
const controllerUsers = new userController()

//Get
router.get('/get', controllerUsers.usersGets);
//Post
router.post('/post', controllerUsers.usersPost)
//Put
router.put('/put/:id', controllerUsers.usersPut)
//Delete
router.delete('/delete/:id', controllerUsers.usersDelete)

module.exports = router;