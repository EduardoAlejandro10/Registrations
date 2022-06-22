const express = require("express");


// Controllers
const {
  getAllRegistrations,
  createRegistration,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registrations.controller");


 const {createRegistrationsValidators} = require("../middlewares/validators.middleware");
const registrationsRouter = express.Router();

registrationsRouter.get("/", getAllRegistrations);

registrationsRouter.post("/", createRegistrationsValidators, createRegistration);

registrationsRouter.get("/:id", getRegistrationById);

registrationsRouter.patch("/:id", updateRegistration);

registrationsRouter.delete("/:id", deleteRegistration);

module.exports = { registrationsRouter };
