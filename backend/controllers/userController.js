import user from "../models/userModel.js";

const createUser = async (req, res, next) => {
  try {
    const newUser = new user(req.body);
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await user.find({});
    if (users) return res.status(200).json(users);
    else return res.status(404).json({message: "No user found"});
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const userX = await user.findById(req.params.id);
    if (userX) return res.status(200).json(userX);
    else return res.status(404).json({message: "User Not Found"});
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    let filter = {_id: req.params.id};
    let updatedUser = await user.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(201).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userX = await user.findById(req.params.id);

    if (userX) {
      await userX.remove();
      return res.status(200).json({message: "User removed", _id: req.params.id});
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
};

export {getUser, getUsers, createUser, updateUser, deleteUser};
