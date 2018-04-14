// more info at https://github.com/typicode/json-server

// see more details at https://github.com/typicode/json-server/issues/304

module.exports = (req, res, next) => {
  if (req.path === '/login_fail') {
    res.status(400).json({
      message: "Invalid Email",
      code: 4003
    });
  } else {
    next()
  }
};

