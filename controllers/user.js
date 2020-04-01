'use strict';

const db = require('../models');

exports.getAllUsers = async () => {
  try {
    return await db.User.findAll();
  } catch (e) {
    return e;
  }
};
