const Rating = require('../models/rating');

/**
 * Returns all ratings in the database.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllRatings = async (req, res) => {
  let result;

  try {
    result = await Rating.find();
    res.status(200).json({valid: true, results: result});
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
};

/**
 * Returns response object with rating specified by ID.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getRatingById = async (req, res) => {
  const ratingId = req.params.id;
  let result;

  try {
    result = await Rating.findById(ratingId);
    res.status(200).json({valid: true, result});
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
};

/**
 * Creates new rating from request and return response object with status.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const addNewRating = async (req, res) => {

  const newRating = new Rating({
    value: 0,
    count: 0
  });
  let result;
  try {
    result = await newRating.save();
    res.status(201).json({valid: true, result});
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
};

/**
 * Takes a ID of existing rating document and computes the new value of rating and updated rating in database.
 * Returns a response object with status.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const editRating = async (req, res) => {
  const ratingID = req.params.id;
  const {
    value
  } = req.body;
  let updatedRating;

  try {
    updatedRating = await Rating.findById(ratingID);
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
  updatedRating.value = ((updatedRating.value * updatedRating.count) + value) / (updatedRating.count + 1);
  updatedRating.count += 1;

  try {
    let result = await updatedRating.save();
    res.status(200).json({valid: true, result});
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }

};

/**
 * Deletes rating document from database specified by ID.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteRating = async (req, res) => {
  let ratingId = req.params.id;
  let rating;

  try {
    rating = await Rating.findById(ratingId);
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }

  try {
    await rating.remove();
    res.status(200).
        json({valid: true, message: `Rating '${rating.value}' removed`});
  } catch (exception) {
    res.status(500).json({valid: false, exception});
  }
};

exports.getAllRatings = getAllRatings;
exports.getRatingById = getRatingById;
exports.addNewRating = addNewRating;
exports.editRating = editRating;
exports.deleteRating = deleteRating;
