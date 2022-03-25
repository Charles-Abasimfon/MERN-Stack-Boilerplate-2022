const asyncHandler = require('express-async-handler');
//Importing Demo Model
const Demo = require('../models/demoModel');
// DEMO CONTROLLERS -- **REPLACE WITH REAL CONTROLLERS**

//@desc Get Demo
//@route GET /api/demo
//@access Public
const getDemo = asyncHandler(async (req, res) => {
  const demos = await Demo.find();
  res.status(200).json(demos);
});

//@desc Post Demo
//@route POST /api/demo
//@access Public
const postDemo = asyncHandler(async (req, res) => {
  // Just to show how to throw Error
  if (!req.body.text) {
    res.status(400);
    throw new Error('No demo text field in body object');
  }

  const demo = await Demo.create({
    text: req.body.text,
  });

  res.status(200).json(demo);
});

//@desc Put Demo
//@route PUT /api/demo/:id
//@access Public
const putDemo = asyncHandler(async (req, res) => {
  const demo = await Demo.findById(req.params.id);
  if (!demo) {
    res.status(400);
    throw new Error('Demo not found therefore can not update');
  }

  const updatedDemo = await Demo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedDemo);
});

//@desc Delete Demo
//@route DELETE /api/demo/:id
//@access Public
const deleteDemo = asyncHandler(async (req, res) => {
  const demo = await Demo.findById(req.params.id);
  if (!demo) {
    res.status(400);
    throw new Error('Demo not found therefore can not delete');
  }

  await demo.remove();
  res.status(200).json({ STATUS: 'DELETED', id: req.params.id });
});

module.exports = {
  getDemo,
  postDemo,
  putDemo,
  deleteDemo,
};
