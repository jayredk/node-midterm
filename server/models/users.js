const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const usersSchema = Schema(
  {
    name: {
      type: String,
      required: [true, '請輸入您的名字']
    },
    email: {
      type: String,
      required: [true, '請輸入您的 Email'],
      unique: true,
      lowercase: true,
      select: false
    },
    photo: String,
  }
)

const User = model('User', usersSchema);

module.exports = User
