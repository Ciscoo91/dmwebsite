require("dotenv").config()

const configData = {
  youtube_key: process.env.API_KEY,
  youtube_id: process.env.API_TOKEN,
  youtube_channel: process.env.YOUTUBE_ID,
  adminDatas: {
    username: process.env.user,
    password: process.env.password
  }
}

module.exports = configData;
