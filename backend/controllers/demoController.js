const asyncHandler = require('express-async-handler');

// DEMO CONTROLLERS

//@desc Get Demo
//@route GET /api/demo
//@access Public
const getDemo = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'This is just a demo get request',
  });
});

//@desc Post Demo
//@route POST /api/demo
//@access Public
const postDemo = asyncHandler(async (req, res) => {
  // Just to show how to throw Error
  if (!req.body.text) {
    res.status(400);
    throw new Error('No text field in body object');
  }

  res.status(200).json({
    message: 'This is just a demo post request',
  });
});

//@desc Put Demo
//@route PUT /api/demo/:id
//@access Public
const putDemo = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `This is just a demo put/update request for id : ${req.params.id}`,
  });
});

//@desc Delete Demo
//@route DELETE /api/demo/:id
//@access Public
const deleteDemo = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `This is just a demo delete request for id : ${req.params.id}`,
  });
});

module.exports = {
  getDemo,
  postDemo,
  putDemo,
  deleteDemo,
};
