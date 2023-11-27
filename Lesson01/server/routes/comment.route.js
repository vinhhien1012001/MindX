const express = require("express");
const router = express.Router();

const MOCK_COMMENTS = [
  {
    id: 1,
    user: "A",
    content: "Test",
  },
  {
    id: 2,
    user: "B",
    content: "Test 1",
  },
];

router.get("/", (req, res) => {
  return res.json(MOCK_COMMENTS);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const comment = MOCK_COMMENTS.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return res.status(404).json({ message: "Comment not found!" });
  }
  return res.status(200).json(comment);
});

router.post("/create", (req, res) => {
  return res.json("Create post");
});

router.put("/");

module.exports = router;
