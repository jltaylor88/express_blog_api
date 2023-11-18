const User = require("../models/users.model");

const AbstractAccessLayer = require("./abstractAccessLayer");

const usersAccessLayer = new AbstractAccessLayer(User);

module.exports = usersAccessLayer;
