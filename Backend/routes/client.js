const express = require("express");
const router = express.Router();
const Client = require("../models/Client");


// ADD CLIENT
router.post("/", async (req, res) => {
  try {
    const newClient =  Client(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL CLIENTS

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE CLIENT
router.put("/:id", async (req, res) => {
  try {
    const updateClient = await Client.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updateClient);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete client

router.delete(":id", async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.status(200).json("Client is Deleted SuccessFully");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Find Client Using Id
router.get("/find/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
