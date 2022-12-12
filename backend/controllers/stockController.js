import Stock from "../models/stockModel.js";

const createStock = async (req, res, next) => {
  try {
    const newStock = new Stock(req.body);
    const createdStock = await newStock.save();
    return res.status(201).json(createdStock);
  } catch (error) {
    next(error);
  }
};

const getStocks = async (req, res, next) => {
  try {
    const stocks = await Stock.find({});
    if (stocks) return res.status(200).json(stocks);
    else return res.status(404).json({message: "No stock found"});
  } catch (error) {
    next(error);
  }
};

const getStock = async (req, res, next) => {
  try {
    const stock = await Stock.findById(req.params.id);
    if (stock) return res.status(200).json(stock);
    else return res.status(404).json({message: "Stock Not Found"});
  } catch (error) {
    next(error);
  }
};

const updateStock = async (req, res, next) => {
  try {
    const stock = await Stock.findById(req.params.id);
    if (!stock) {
      return res.status(404).json({message: "Stock Not Found"});
    }

    let filter = {_id: req.params.id};
    let updatedStock = await Stock.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(201).json(updatedStock);
  } catch (error) {
    next(error);
  }
};

const deleteStock = async (req, res, next) => {
  try {
    const stock = await Stock.findById(req.params.id);

    if (stock) {
      await stock.remove();
      return res.status(200).json({message: `Stock ${req.params.id} removed`});
    } else {
      res.status(404);
      throw new Error("Stock not found");
    }
  } catch (error) {
    next(error);
  }
};

export {getStocks, getStock, createStock, updateStock, deleteStock};
