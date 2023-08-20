const { CustomAPIError } = require("../error/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something Went Wrong Please Try Again" });
};

module.exports = errorHandler;
