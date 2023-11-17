const getCurrent = async (req, res) => {
  const { _id, name, emai, phone } = req.user;

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
