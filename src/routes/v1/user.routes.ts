import express from "express";
import { createUser } from "../../controllers/users/create-user.controller";
import { getUsers } from "../../controllers/users/get-users.controller";
import { updateUser } from "../../controllers/users/update-user.controller";
import { deleteUser } from "../../controllers/users/delete-user.controller";

const router = express.Router();

router.post("/users", createUser);

router.get("/users", getUsers);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;
