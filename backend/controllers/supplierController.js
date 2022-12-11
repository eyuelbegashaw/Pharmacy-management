import supplier from "../models/supplierModel.js";

const createSupplier = async (req, res, next) => {
  try {
    const newSupplier = new supplier(req.body);
    const createdSupplier = await newSupplier.save();
    return res.status(201).json(createdSupplier);
  } catch (error) {
    next(error);
  }
};

const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await supplier.find({});
    if (suppliers) return res.status(200).json(suppliers);
    else return res.status(404).json({message: "No supplier found"});
  } catch (error) {
    next(error);
  }
};

const getSupplier = async (req, res, next) => {
  try {
    const supplierX = await supplier.findById(req.params.id);
    if (supplierX) return res.status(200).json(supplierX);
    else return res.status(404).json({message: "Supplier Not Found"});
  } catch (error) {
    next(error);
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    let filter = {_id: req.params.id};
    let updatedSupplier = await supplier.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(201).json(updatedSupplier);
  } catch (error) {
    next(error);
  }
};

const deleteSupplier = async (req, res, next) => {
  try {
    const supplierX = await supplier.findById(req.params.id);

    if (drugX) {
      await supplierX.remove();
      return res.status(200).json({message: "Supplier removed", _id: req.params.id});
    } else {
      res.status(404);
      throw new Error("Supplier not found");
    }
  } catch (error) {
    next(error);
  }
};

export {getSuppliers, getSupplier, createSupplier, updateSupplier, deleteSupplier};
