import mongoose from "mongoose";

const BadgeSchema = new mongoose.Schema({
  storeId: { type: String, required: true },
  selectedBadges: { type: [Number], required: true }, // Example array of badge IDs
});

const Badge = mongoose.model("Badge", BadgeSchema);

export default Badge;
