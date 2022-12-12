import Drug from "../models/drugModel.js";

const createDrug = async (req, res, next) => {
  try {
    const newDrug = new Drug(req.body);
    const createdDrug = await newDrug.save();
    return res.status(201).json(createdDrug);
  } catch (error) {
    next(error);
  }
};

const getDrugs = async (req, res, next) => {
  try {
    const drugs = await Drug.find({});
    if (drugs) return res.status(200).json(drugs);
    else return res.status(404).json({message: "No drug found"});
  } catch (error) {
    next(error);
  }
};

const getDrug = async (req, res, next) => {
  try {
    const drug = await Drug.findById(req.params.id);
    if (drug) return res.status(200).json(drug);
    else return res.status(404).json({message: "Drug Not Found"});
  } catch (error) {
    next(error);
  }
};

const updateDrug = async (req, res, next) => {
  try {
    const drug = await Drug.findById(req.params.id);
    if (!drug) {
      return res.status(404).json({message: "Drug Not Found"});
    }

    let filter = {_id: req.params.id};
    let updatedDrug = await Drug.findOneAndUpdate(filter, req.body, {
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
    const drug = await Drug.findById(req.params.id);

    if (drug) {
      await drug.remove();
      return res.status(200).json({message: `Drug ${req.params.id} removed`});
    } else {
      res.status(404);
      throw new Error("Drug not found");
    }
  } catch (error) {
    next(error);
  }
};

export {getDrugs, getDrug, createDrug, updateDrug, deleteDrug};
