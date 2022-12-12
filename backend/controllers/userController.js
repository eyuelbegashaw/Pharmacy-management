import User from "../models/userModel.js";

const createUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (users) return res.status(200).json(users);
    else return res.status(404).json({message: "No user found"});
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) return res.status(200).json(user);
    else return res.status(404).json({message: "User Not Found"});
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({message: "User not Found"});
    }

    let filter = {_id: req.params.id};
    let updatedUser = await User.findOneAndUpdate(filter, req.body, {
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
    const user = await User.findById(req.params.id);

    if (user) {
      await user.remove();
      return res.status(200).json({message: `User ${req.params.id} removed`});
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
};

export {getUser, getUsers, createUser, updateUser, deleteUser};
