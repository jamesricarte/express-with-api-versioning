export const updateUser = (req: any, res: any) => {
  const id = Number(req.params.id);

  if (!id || !Number.isInteger(id))
    return res.status(400).json({ success: false, error: "Id is missing!" });

  res
    .status(200)
    .json({ success: true, message: `Updated user ${id} successfully!` });
};
