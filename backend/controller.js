import UserModel from "./model.js";

const get = async (req, res) => {
  const name = "Emile";
  const user = await UserModel.findOne({ name });
  res.json({ success: true, message: user });
};

const add = async (req, res) => {
  const { name } = req.body;

  const user = await UserModel.create({ name });

  res.json({ success: true, message: "user add", user });
};

export { get, add };
