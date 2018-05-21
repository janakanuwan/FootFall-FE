// more info at https://github.com/typicode/json-server

// see more details at https://github.com/typicode/json-server/issues/304

const now = Date.now();
const hour = 1000 * 60 * 60;

const random = (max) => Math.floor(Math.random() * (max - + 1));

let entryId = 0;
const entry = (locationId) => {
  entryId++;
  return ({
    "id": entryId,
    "entry": random(10),
    "exit": random(10),
    "time": now - random(24*60)*hour,
    "locationId": locationId
  });
};

const entries = (locationId, count) => {
  let data = [];
  for(let i = 0; i< count; i++){
    data.push(entry(locationId));
  }

  return data;
};

module.exports = (req, res, next) => {

  if (req.path === '/login' && req.method === 'POST') {
    res.status(200).json({
      token: "1234",
      settings: {
        id: 1,
        name: "Hello Janaka",
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
    res.status(200).json(
      entries(124, 1000)
        .concat(entries(125, 600))
        .concat(entries(126, 500))
        .concat(entries(567, 400))
    );
  } else {
    next()
  }
};

