// more info at https://github.com/typicode/json-server

// see more details at https://github.com/typicode/json-server/issues/304

const now = Date.now();
const hour = 1000 * 60 * 60;

module.exports = (req, res, next) => {

  if (req.path === '/login' && req.method === 'POST') {
    res.status(200).json({
      token: "1234",
      settings: {
        id: 1,
        name: "Hello Test",
        email: "hellotest@gmail.com",
        lastLoginTime: now - 6 * hour
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
        "time": now - 5 * hour,
        "locationId": 125
      },
      {
        "id": 2,
        "entry": 5,
        "exit": 6,
        "time": now - 4 * hour,
        "locationId": 125
      },
      {
        "id": 3,
        "entry": 3,
        "exit": 5,
        "time": now - 3 * hour,
        "locationId": 125
      },
      {
        "id": 4,
        "entry": 6,
        "exit": 0,
        "time": now - 2 * hour,
        "locationId": 125
      },
      {
        "id": 5,
        "entry": 0,
        "exit": 4,
        "time": now - hour,
        "locationId": 125
      },
      {
        "id": 6,
        "entry": 3,
        "exit": 1,
        "time": now - 0.5 * hour,
        "locationId": 124
      }
    ]);
  } else {
    next()
  }
};

