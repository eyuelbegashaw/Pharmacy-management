import drug from "../models/drugModel.js";

const createDrug = async (req, res, next) => {
  try {
    const newDrug = new drug(req.body);
    const createdDrug = await newDrug.save();
    return res.status(201).json(createdDrug);
  } catch (error) {
    next(error);
  }
};

const getDrugs = async (req, res, next) => {
  try {
    const drugs = await drug.find({});
    if (drugs) return res.status(200).json(drugs);
    else return res.status(404).json({message: "No drug found"});
  } catch (error) {
    next(error);
  }
};

const getDrug = async (req, res, next) => {
  try {
    const drugX = await drug.findById(req.params.id);
    if (drugX) return res.status(200).json(drugX);
    else return res.status(404).json({message: "Drug Not Found"});
  } catch (error) {
    next(error);
  }
};

const updateDrug = async (req, res, next) => {
  try {
    let filter = {_id: req.params.id};
    let updatedDrug = await drug.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(201).json(updatedDrug);
  } catch (error) {
    next(error);
  }
};

const deleteDrug = async (req, res, next) => {
  try {
    const drugX = await drug.findById(req.params.id);

    if (drugX) {
      await drugX.remove();
      return res.status(200).json({message: "Drug removed", _id: req.params.id});
    } else {
      res.status(404);
      throw new Error("Drug not found");
    }
  } catch (error) {
    next(error);
  }
};

export {getDrugs, getDrug, createDrug, updateDrug, deleteDrug};
