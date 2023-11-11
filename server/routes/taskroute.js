const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

// create route
router.post('/createtask', taskController.createtask);

// update route
router.put('/updatetask', taskController.updatetask);

// delete route
router.delete('/deletetask', taskController.deletetask);

module.exports = router;
