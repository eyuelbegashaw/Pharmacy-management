import Supplier from "../models/supplierModel.js";

const createSupplier = async (req, res, next) => {
  try {
    const newSupplier = new Supplier(req.body);
    const createdSupplier = await newSupplier.save();
    return res.status(201).json(createdSupplier);
  } catch (error) {
    next(error);
  }
};

const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await Supplier.find({});
    if (suppliers) return res.status(200).json(suppliers);
    else return res.status(404).json({message: "No supplier found"});
  } catch (error) {
    next(error);
  }
};

const getSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (supplier) return res.status(200).json(supplier);
    else return res.status(404).json({message: "Supplier Not Found"});
  } catch (error) {
    next(error);
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).json({message: "Supplier Not Found"});
    }

    let filter = {_id: req.params.id};
    let updatedSupplier = await Supplier.findOneAndUpdate(filter, req.body, {
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
    const supplier = await Supplier.findById(req.params.id);

    if (supplier) {
      await supplier.remove();
      return res.status(200).json({message: `Supplier ${req.params.id} removed`});
    } else {
      res.status(404);
      throw new Error("Supplier not found");
    }
  } catch (error) {
    next(error);
  }
};

export {getSuppliers, getSupplier, createSupplier, updateSupplier, deleteSupplier};
