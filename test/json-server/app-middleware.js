// more info at https://github.com/typicode/json-server

// see more details at https://github.com/typicode/json-server/issues/304

module.exports = (req, res, next) => {
  if (req.path === '/login' && req.method === 'POST') {
    res.status(200).json({
      token: "1234",
      settings: {
        id: 1,
        name: "Hello Test",
        email: "hellotest@gmail.com",
        lastLoginTime: 1523324002458
      }
    });
  } else if (req.path === '/login') {
    res.status(400).json({
      message: "Invalid Email",
      code: 4003
    });
  } else {
    next()
  }
};

