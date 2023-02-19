const express = require("express");
// get controller function
const { getCollectPointsInRadius, getCollectPoints, createCollectPoint, getCollectPoint, updateCollectPoint, deleteCollectPoint, collectPointQrUpload } = require("../controllers/collectPoints");

const router = express.Router();
const {protect , authorize} = require("../middlewares/auth")

const collectRouter = require('./collects')

const advancedResults = require('../middlewares/advancedResults');
const CollectPoint = require("../models/CollectPoint");

router.use('/:collectPointId/collects', collectRouter)

router.route("/radius/:zipcode/:distance").get(getCollectPointsInRadius);
router.route("/").get(advancedResults(CollectPoint, 'collects'),getCollectPoints).post(protect , authorize('partners', "admin"), createCollectPoint);
router.route("/:id").get(getCollectPoint).put(protect, authorize("staff") ,updateCollectPoint).delete( deleteCollectPoint);

router.route('/:id/qr').put(collectPointQrUpload)

module.exports = router;
