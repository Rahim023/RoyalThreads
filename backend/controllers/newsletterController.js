import Newsletter from "../models/Newsletter.js";

export const subscribe = async (req, res) => {
  const { email } = req.body;
  await Newsletter.create({ email });
  res.json({ message: "Subscribed" });
};
