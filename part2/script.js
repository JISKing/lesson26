let dataBase = {
  dbName: "user",
  dbType: "MySQL",
};

let configurateDB = {
  token: "123",
  password: "567",
  user: "admin",
};

Object.freeze(dataBase);
Object.seal(configurateDB);