import express from 'express';
import usersController from "../controller/usersController.js";

import logger from '../logger.js';

const router = express.Router();

// Users Routes
router.get("/", (req, res) => {
  logger.info("Accessed /users route");
  usersController.getUsers(req, res);
});

router.get("/name-code", (req, res) => {
  logger.info("Accessed /users route name-code");
  usersController.getUserByCodeName(req, res);
});

router.post("/", (req, res) => {
  logger.info("Accessed POST /users route");
  usersController.postUser(req, res);
});

router.put("/:id", (req, res) => {
  logger.info(`Accessed PUT /users/${req.params.id} route`);
//  updateUser(req, res);
});

router.delete("/:id", (req, res) => {
  logger.info(`Accessed DELETE /users/${req.params.id} route`);
  //deleteUser(req, res);
});

export default router;