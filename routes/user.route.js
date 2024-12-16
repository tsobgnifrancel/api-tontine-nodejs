import express from 'express';
import { userList, createUser, showUser, updateUser, login, toggleAccount } from '../controllers/user.ctrl.js';

const router = express.Router();


router.get('/userList', userList);
router.get('/userList/:id', showUser);

router.post('/addUser', createUser);
router.post('/login', login);

router.put('/updateUser/:id', updateUser)

router.patch('/toggleAccount/:id', toggleAccount)

export default router