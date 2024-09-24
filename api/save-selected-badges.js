import Badge from '../models/Badge.js';

export default async function saveBadges(req, res) {
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

    res.status(200).json({ success: true, message: 'Badges saved successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save badges', error });
  }
}
