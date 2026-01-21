import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js';
import { 
    getAllContacts,
     getChatpartners,
      getMessagesByUserId,
       sendMessage 
    } from '../controller/message.controller.js';
import { arcjetProtection } from '../middleware/arcjet.middleware.js';
const router = express.Router()

router.use( arcjetProtection, protectRoute)

router.get('/contacts',protectRoute,getAllContacts);
router.get('/chats',protectRoute,getChatpartners)
router.get('/:id',protectRoute,getMessagesByUserId)
router.post('/send/:id',protectRoute,sendMessage)







export default router