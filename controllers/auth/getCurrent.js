const getCurrent = async (req, res) => {
  const { _id, name, email, phone } = req.user;

  res.json({
    user: {
      _id,
      name,
      email,
      phone,
    },
  });
};

module.exports = {
  getCurrent,
};
