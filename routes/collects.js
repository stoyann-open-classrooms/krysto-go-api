const express = require("express");
// get controller function
const { getCollects, createCollect, getCollect, updateCollect } = require("../controllers/collects");
const router = express.Router({mergeParams: true})
const {protect , authorize} = require("../middlewares/auth")
const Collect = require('../models/Collect')
const advancedResults = require('../middlewares/advancedResults')







router.route("/").get(advancedResults(Collect, {
    path: "collectPoint",
    select: "waste",
}), getCollects).post(createCollect)
router.route("/:id").get(getCollect).put(updateCollect)

module.exports = router;
