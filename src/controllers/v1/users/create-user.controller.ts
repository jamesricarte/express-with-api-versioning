export const createUser = (req = null, res: any) => {
  res.status(201).json({ success: true, message: "Created new user!" });
};
