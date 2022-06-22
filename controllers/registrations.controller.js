const { Register } = require("../models/registrations.model");

const getAllRegistrations = async (req, res) => {
  try {
    const registration = await Register.findAll();

    res.status(200).json({
      status: "success",
      registration,
    });
  } catch (err) {
    console.log(err);
  }
};

const createRegistration = async (req, res) => {
  try {
    const { entranceTime, exitTime } = req.body;

    const newRegistration = await Register.create({
      entranceTime: new Date(),
      exitTime: null,
    });

    res.status(201).json({
      status: "success",
      newRegistration,
    });
  } catch (err) {
    console.log(err);
  }
};

const getRegistrationById = async (req, res) => {
  const { id } = req.params;

  const registration = await Register.findOne({ where: { id } });

  if (!registration) {
    return res.status(404).json({
      status: "error",
      message: "Registration not found",
    });
  }

  res.status(200).json({
    status: "success",
    message: "Registration found",
    registration,
  });
};

const updateRegistration = async (req, res) => {
  const { id } = req.params;
  const { exitTime } = req.body;

  const registration = await Register.findOne({ where: { id } });

  if (!registration) {
    return res.status(404).json({
      status: "error",
      message: "Registration not found",
    });
  }
  if (registration.status === "working") {
    await registration.update({ exitTime, status: "out" });
    res.status(204).json({ status: "succes" });
  } else {
    return res.status(400).json({
      status: "error",
      message: "The Worker is already out",
    });
  }
}

  const  deleteRegistration = async (req, res) => {
    const { id } = req.params;

    const registration = await Register.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }

		if(registration.status === "working"){
			await registration.update({ status: "cancelled" }); 
			 res.status(204).json({ status: "success" });
		} else {
			return res.status(400).json({
				status: "error",
				message: "The Worker is already out",
			})
		}

  


};

module.exports = {
  getAllRegistrations,
  createRegistration,
  getRegistrationById,
  updateRegistration,
	deleteRegistration,
};
