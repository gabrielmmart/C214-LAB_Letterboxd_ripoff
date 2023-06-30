const mongoose = require("mongoose");
const modelOptions = require("./model.options.js");

const FavoriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    mediaType: {
        type: String,
        enum: ["pc", "playstation", "xbox"],
        required: true
    },
    mediaId: {
        type: String,
        required: true
    },
    mediaTitle: {
        type: String,
        required: true
    },
    mediaPoster: {
        type: String,
        required: true
    },
    mediaRate: {
        type: Number,
        required: true
    }
}, modelOptions);

module.exports = mongoose.model("Favorite", FavoriteSchema);
