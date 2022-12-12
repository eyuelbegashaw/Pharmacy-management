import Transaction from "../models/transactionModel.js";

const createTransaction = async (req, res, next) => {
  try {
    const newTransaction = new Transaction(req.body);
    const createdTransaction = await newTransaction.save();
    return res.status(201).json(createdTransaction);
  } catch (error) {
    next(error);
  }
};

const getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({});
    if (transactions) return res.status(200).json(transactions);
    else return res.status(404).json({message: "No transaction found"});
  } catch (error) {
    next(error);
  }
};

const getTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (transaction) return res.status(200).json(transaction);
    else return res.status(404).json({message: "Transaction Not Found"});
  } catch (error) {
    next(error);
  }
};

const updateTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({message: "transaction Not Found"});
    }

    let filter = {_id: req.params.id};
    let updatedTransaction = await Transaction.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(201).json(updatedTransaction);
  } catch (error) {
    next(error);
  }
};

const deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (transaction) {
      await transaction.remove();
      return res.status(200).json({message: `Transaction ${req.params.id} removed`});
    } else {
      res.status(404);
      throw new Error("Transaction not found");
    }
  } catch (error) {
    next(error);
  }
};

export {getTransaction, getTransactions, createTransaction, updateTransaction, deleteTransaction};
