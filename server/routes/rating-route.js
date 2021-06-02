const express = require('express');
const router = express.Router();

const {
  getAllRatings,
  getRatingById,
  addNewRating,
  editRating,
  deleteRating,
} = require('../controllers/rating-controller');

//getting all keywords
router.get('/', getAllRatings);

//getting id specific keyword
router.get('/:id', getRatingById);

//creating new keyword
router.post('/', addNewRating);

//editing existing keyword
router.patch('/:id', editRating);

//deleting existing keyword
router.delete('/:id', deleteRating);

module.exports = router;
