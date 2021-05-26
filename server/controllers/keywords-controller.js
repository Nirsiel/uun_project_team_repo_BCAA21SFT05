const Keyword = require("../models/keyword");

const getAllKeywords = async (req, res) => {
    let result;

    try{
        result = await Keyword.find().exec();
        res.status(200).json({ valid: true, result: result })
    }
    catch (exception){
        res.status(500).json({valid: false, exception})
    }
}

const getKeywordById = async (req, res) => {
    const keywordId = req.params.id;
    let result;

    try{
        result = await Keyword.findById(keywordId);
        res.status(200).json({valid: true, result});
    }
    catch (exception) {
        res.status(500).json({valid: false, exception})
    }
}

const addNewKeyword = async (req, res) => {
    const createdKeyword = new Keyword({
        value: req.body.value
    });
    let result;

    try{
        result = await createdKeyword.save();
        res.status(201).json({ valid: true, result });
    }
    catch (exception) {
        console.log(exception);
        res.status(500).json({ valid: false, exception });
    }
}

const editKeyword = async (req, res) => {
    const keywordId = req.params.id;
    const { value } = req.body;
    let updatedKeyword;

    try{
        updatedKeyword = await Keyword.findById(keywordId);
    }
    catch (exception) {
        res.status(500).json({valid: false, exception})
    }
    updatedKeyword.value = value;
    try{
        let result = await updatedKeyword.save();
        res.status(200).json({valid: true, result: result});
    }
    catch (exception){
        res.status(500).json({valid: false, exception})
    }
}

const deleteKeyword = async (req, res) => {
    let keywordId = req.params.id;
    let keyword;

    try{
        keyword = await Keyword.findById(keywordId);
    }
    catch (exception){
        res.status(500).json({valid: false, exception});
    }

    try{
        await keyword.remove();
        res.status(200).json({valid: true, message: `keyword ${keyword.value} removed`});
    }
    catch(exception){
        res.status(500).json({valid: false, exception});
    }
}

exports.getAllKeywords = getAllKeywords;
exports.getKeywordById = getKeywordById;
exports.addNewKeyword = addNewKeyword;
exports.editKeyword = editKeyword;
exports.deleteKeyword = deleteKeyword;