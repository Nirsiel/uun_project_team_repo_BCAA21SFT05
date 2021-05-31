const express = require('express');
const router = express.Router();

//Controllers
const {
  getAllKeywords,
  getKeywordsByIds,
  getKeywordById,
  addNewKeyword,
  editKeyword,
  deleteKeyword,
} = require('../controllers/keywords-controller');

//routing

//getting all keywords
router.get('/', getAllKeywords);

//getting keywords by ids
router.post('/byIds', getKeywordsByIds);

//getting id specific keyword
router.get('/:id', getKeywordById);

//creating new keyword
router.post('/', addNewKeyword);

//editing existing keyword
router.patch('/:id', editKeyword);

//deleting existing keyword
router.delete('/:id', deleteKeyword);

module.exports = router;
