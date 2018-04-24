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
  } else if (/\/merchants\/(\d+)\/locations\/(\d+)\/entries/.test(req.path)) {
    res.status(200).json([
      {
        "id": 1,
        "entry": 4,
        "exit": 2,
        "time": 1523324003458,
        "locationId": 125
      },
      {
        "id": 2,
        "entry": 5,
        "exit": 6,
        "time": 1523324003558,
        "locationId": 125
      },
      {
        "id": 3,
        "entry": 3,
        "exit": 5,
        "time": 1523324004558,
        "locationId": 125
      },
      {
        "id": 4,
        "entry": 6,
        "exit": 0,
        "time": 1523324005558,
        "locationId": 125
      },
      {
        "id": 5,
        "entry": 0,
        "exit": 4,
        "time": 1523324006558,
        "locationId": 125
      }
    ]);
  } else {
    next()
  }
};

