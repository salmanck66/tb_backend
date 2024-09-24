import Badge from '../models/Badge.js';

export default async function getBadges(req, res) {
  const { storeId } = req.body; // Accept storeId from body since we're using POST

  try {
    const badgeDoc = await Badge.findOne({ storeId });

    if (badgeDoc) {
      res.status(200).json({ success: true, selectedBadges: badgeDoc.selectedBadges });
    } else {
      res.status(404).json({ success: false, message: 'No badges found for this store' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch badges', error });
  }
}
