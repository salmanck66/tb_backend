import Badge from "../models/Badge.js";
import connectDB from "../db/mongo.js";
import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {  // Use POST instead of GET
  await connectDB();

  const { storeId } = req.body;  // StoreId comes from the body now

  try {
    const badgeDoc = await Badge.findOne({ storeId });

    if (badgeDoc) {
      res.status(200).json({ success: true, selectedBadges: badgeDoc.selectedBadges });
    } else {
      res.status(404).json({ success: false, message: "No badges found for this store" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch badges", error });
  }
});

export default router;
