const { getPaginationFields } = require("../../helpers");
const { GroupModel } = require("../../models");
const { PER_PAGE } = require("../../constants");

const getList = async (req, res) => {
  const { page, skip, limit } = getPaginationFields(req);

  const { parentId = "" } = req.body;
  const userId = String(req.user._id);

  const result = await GroupModel.Group.aggregate([
    { $match: { userId, parentId } },
    { $sort: { name: 1 } },
    { $project: { createdAt: 0, updatedAt: 0 } },
    {
      $facet: {
        totalCount: [{ $count: "count" }],
        groups: [{ $skip: Number(skip) }, { $limit: Number(limit) }],
      },
    },
    {
      $project: {
        totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
        page: { $cond: { if: { $eq: [page, 1] }, then: 1, else: page } },
        perPage: {
          $cond: {
            if: { $eq: [limit, PER_PAGE] },
            then: PER_PAGE,
            else: limit,
          },
        },

        groups: 1,
      },
    },
  ]);

  res.json(result);
};

module.exports = {
  getList,
};
