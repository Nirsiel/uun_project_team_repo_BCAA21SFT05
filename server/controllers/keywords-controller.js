const Keyword = require('../models/keyword');

/**
 * Returns response object with all keywords in database.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllKeywords = async (req, res) => {
  let result;

  try {
    result = await Keyword.find().exec();
    res.status(200).json({valid: true, results: result});
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
};

/**
 * Returns response object with keywords specified in request body.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getKeywordsByIds = async (req, res) => {
  const keywordsIds = req.body.values;
  let results;
  try {
    results = await Promise.all(keywordsIds.map(async (id) => {
      return await Keyword.findById(id);
    }));
    //returning array with spread results, cause it won't make one on its own.
    res.status(203).json({
      valid: true,
      results: [...results],
    });
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
};

/**
 * Returns response object with keyword specified by ID.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getKeywordById = async (req, res) => {
  const keywordId = req.params.id;
  let result;

  try {
    result = await Keyword.findById(keywordId);
    res.status(200).json({valid: true, result});
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
};

/**
 * Creates new keyword from request and return response object with status.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const addNewKeyword = async (req, res) => {
  const createdKeyword = new Keyword({
    value: req.body.value,
  });
  let result;

  try {
    result = await createdKeyword.save();
    res.status(201).json({valid: true, result});
  } catch (exception) {
    console.log(exception);
    res.status(500).json({valid: false, exception});
  }
};

/**
 * Takes a ID of existing keyword document and its new version and updated recipe in database.
 * Returns a response object with status.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const editKeyword = async (req, res) => {
  const keywordId = req.params.id;
  const {value} = req.body;
  let updatedKeyword;

  try {
    updatedKeyword = await Keyword.findById(keywordId);
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
  updatedKeyword.value = value;
  try {
    let result = await updatedKeyword.save();
    res.status(200).json({valid: true, result: result});
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
};

/**
 * Deletes keyword document from database specified by ID.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteKeyword = async (req, res) => {
  let keywordId = req.params.id;
  let keyword;

  try {
    keyword = await Keyword.findById(keywordId);
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }

  try {
    await keyword.remove();
    res.status(200).
        json({valid: true, message: `keyword ${keyword.value} removed`});
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
};

exports.getAllKeywords = getAllKeywords;
exports.getKeywordsByIds = getKeywordsByIds;
exports.getKeywordById = getKeywordById;
exports.addNewKeyword = addNewKeyword;
exports.editKeyword = editKeyword;
exports.deleteKeyword = deleteKeyword;
