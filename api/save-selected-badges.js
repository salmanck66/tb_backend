import Badge from "../models/Badge.js";
import connectDB from "../db/mongo.js";
import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  await connectDB();

  const { storeId, badges } = req.body;

  try {
    let badgeDoc = await Badge.findOne({ storeId });

    if (badgeDoc) {
      badgeDoc.selectedBadges = badges;
      await badgeDoc.save();
    } else {
      badgeDoc = new Badge({ storeId, selectedBadges: badges });
      await badgeDoc.save();
    }

    res.status(200).json({ success: true, message: "Badges saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to save badges", error });
  }
});

export default router;
