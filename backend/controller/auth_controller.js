const { PrismaClient } = require("@prisma/client");
const bcryptjs = require("bcryptjs");
const prisma = new PrismaClient();

module.exports.signup = async (req, res) => {
  try {
    console.log("here");
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: bcryptjs.hashSync(
          req.body.password,
          parseInt(process.env.ITERATIONS)
        ),
      },
    });
    delete user.password;
    return res.status(200).send({
      message: "User Creted Successfully",
      user: user,
    });
  } catch (err) {
    console.log("here1");
    throw new Error(err);
  }
};

module.exports.updateProfile = async (req, res) => {
  try {
    const profile = await prisma.profile.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        age: req.body.age,
        dob: req.body.dob,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
      },
    });
    return res.status(200).send({
      message: "profile updated successfully",
      profile: profile,
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      const isPasswordValid = bcryptjs.compareSync(
        req.body.password,
        user.password
      );
      if (isPasswordValid) {
        return res.status(200).send({
          message: "Successfully logged in",
        });
      }
      return res.status(500).send({
        message: "Invalid password",
      });
    }
    return res.status(404).send({
      message: "User not found",
    });
  } catch (err) {
    throw new Error(err);
  }
};
