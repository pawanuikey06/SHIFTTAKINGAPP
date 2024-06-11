const express = require("express");
const router = express.Router();
const Incidence = require("../models/Incidence");

// ADD INCIDENT
router.post("/", async (req, res) => {
  try {
    const newIncident = Incidence(req.body);
    const incident = await newIncident.save();
    res.status(201).json(incident);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET INCIDENT
router.get("/", async (req, res) => {
  try {
    const incidences = await Incidence.find().sort({ createdAt: -1 });
    res.status(200).json(incidences);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET AN Incident
router.get('/find/:id',async(req,res)=>{
    try {
        const incidence =await Incidence.fineById(req.params.id);
        res.status(200).json(incidence);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id',async(req,res)=>{
    try {
        await Incidence.findByIdAndDelete(req.params.id);
        res.status(201).jason("incident deleted SuccessFully");
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
