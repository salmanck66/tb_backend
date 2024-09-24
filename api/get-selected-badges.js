import Badge from "../../models/Badge.js";
import connectDB from "../../db/mongo.js";

export default async function handler(req, res) {
  await connectDB();

  const { storeId } = req.query;

  if (req.method === "GET") {
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
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
