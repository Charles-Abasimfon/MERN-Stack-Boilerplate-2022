const express = require('express');
const router = express.Router();
const {
  getDemo,
  postDemo,
  putDemo,
  deleteDemo,
} = require('../controllers/demoController');

// DEMO ROUTES
router.route('/').get(getDemo).post(postDemo);
/* The chain above is the same thing as:
router.get('/', getDemo);
router.post('/', postDemo);
*/

router.route('/:id').put(putDemo).delete(deleteDemo);
/* The chain above is the same thing as:
router.put('/:id', putDemo);
router.delete('/:id', deleteDemo);
*/

module.exports = router;
