const router = require("express").Router();
const User = require("../models/User");

router.get("/online-users", async (req, res) => {
  try {
    const users = await User.find(); // すべてのユーザーを取得

    // オンラインユーザーをフィルタリング（ここでは仮にすべてのユーザーをオンラインとみなす）
    const onlineUsers = users;

    res.status(200).json(onlineUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


