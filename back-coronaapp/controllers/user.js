'use strict'

const db = require('../models')

exports.getAllUsers = async () => {
  try {
    return await db.User.findAll()
  } catch (e) {
    return e
    // Further handle your error on the back-end
  }
}

// exports.post = async ctx => {
//   const msg = ctx.request.body;
//   try {
//     await db.Message.create({
//       author: msg.author,
//       content: msg.content
//     });
//     ctx.status = 200;
//   } catch (e) {
//     ctx.status = 500;
//     // Further handle your error on the back-end
//   }
// };
