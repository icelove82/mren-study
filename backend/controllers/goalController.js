const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  // error handler
  if (!req.body.text) {
    throw new Error('No data in - text');
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(201).json(goal);
});

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  // 1. get the target
  const goal = await Goal.findById(req.params.id);

  // 2. error check
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  // 3. update & return
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // means if no then create it
  });

  res.status(200).json(updatedGoal);
});

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  // 1. get the target
  const goal = await Goal.findById(req.params.id);

  // 2. error check
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  // 3. delete
  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
