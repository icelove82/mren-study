const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController.js');
const { protect } = require('../middleware/authMiddleware');

// All url start with '/api/goals'

// get
router.get('/', protect, getGoals);

// create
router.post('/', protect, setGoal);

// update
router.put('/:id', protect, updateGoal);

// delete
router.delete('/:id', protect, deleteGoal);

/* shortcut way
router.route('/').get(getGoals).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);
*/

module.exports = router;
