const express = require('express');
const router = express.Router();

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController.js');

// All url start with '/api/goals'

// get
router.get('/', getGoals);

// create
router.post('/', setGoal);

// update
router.put('/:id', updateGoal);

// delete
router.delete('/:id', deleteGoal);

/* shortcut way
router.route('/').get(getGoals).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);
*/

module.exports = router;
