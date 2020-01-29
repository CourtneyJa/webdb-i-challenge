const express = require("express");
const db = require("./data/dbConfig");
const router = express.Router();

//GET requests; first all then by ID
router.get("/", async (req, res) => {
  try {
    const data = await db.select("*").from("accounts");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ errorMessage: "failed to retrieve accounts" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const account = await db("accounts").where("id", id);
    res.status(200).json(account);
  } catch (err) {
    res
      .status(500)
      .json({ errorMessage: "failed to find an account with specified id" });
  }
});

//POST
router.post("/", async (req, res, next) => {
  try {
    const acctData = {
      name: req.body.name,
      budget: req.body.budget
    }
    const [id] = await db("accounts").insert(acctData);
    res.json(
      await db("accounts")
        .where("id", id)
        .first()
    );
  } catch (err) {
    res.status(500).json({ errorMessage: "failed to add new account" });
    next(err);
  }
});

//PUT
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const rowsUpdated = await db("accounts")
      .where({ id })
      .update(req.body);
    res.status(200).json({ updated: rowsUpdated });
  } catch (err) {
    res.status(500).json({ errorMessage: "failed to update the account" });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const rowsDeleted = await db("accounts")
      .where("id", req.params.id)
      .del();
    res.json({ deletedRecords: rowsDeleted });
  } catch (err) {
    res.status(500).json({ errorMessage: "failed to remove the account" });
  }
});

module.exports = router;
