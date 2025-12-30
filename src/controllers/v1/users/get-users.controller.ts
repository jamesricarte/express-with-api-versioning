export const getUsers = (req = null, res: any) => {
  const users = [
    { name: "Andre", age: 21, gender: "male" },
    { name: "Michele", age: 23, gender: "female" },
    { name: "Anthony", age: 20, gender: "male" },
  ];

  res.send(users);
};
