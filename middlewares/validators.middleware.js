const {body, validationResult} = require('express-validator');


const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
  

    const errorMessages = errors.array().map((err) => err.msg);

    const message = errorMessages.join(". ");

    return res.status(400).json({ status: "error", message });
  }

  next();
};



const createRegistrationsValidators = [
  body("entranceTime").notEmpty().withMessage("there is no entrance time"),
    checkResult,
];


module.exports = { createRegistrationsValidators };