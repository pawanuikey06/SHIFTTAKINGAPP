const express = require("express");
const router = express.Router();
const Announcement = require("../models/Announcement");
const announcemetnEmail = require("../EmailService/attachements/Announcement");

// Post Announcement

router.post("/", async (req, res) => {
  try {
    const newAnnouncement = Announcement(req.body);
    await newAnnouncement.save();
    await announcemetnEmail(req.body.title, req.body.description);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Announcement
router.get("/", async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt });
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete

router.delete("/:id", async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.status(201).json("Announcement Deleted SuccessFully");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
