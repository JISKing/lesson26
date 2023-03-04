let user = {
  name: "Mike",
  surname: "Davis",
  age: "25",
};

Object.defineProperty(user, "userInfo", {
  get() {
    let userProperty = [];

    for (key in user) {
      userProperty.push(key + ": " + user[key]);
    }
    return userProperty;
  },
  enumerable: false,
});

console.log(user.userInfo);
