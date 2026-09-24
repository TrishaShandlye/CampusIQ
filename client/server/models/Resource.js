import mongoose from "mongoose";

const resourceSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true
      },

      subject: {
        type: String,
        required: true,
        trim: true
      },

      topic: {
        type: String,
        required: true,
        trim: true
      },

      type: {
        type: String,
        enum: [
          "Notes",
          "PYQ",
          "Questions"
        ],
        default: "Notes"
      },

      year: {
        type: String,
        default: "2026"
      },

      icon: {
        type: String,
        default: "📄"
      },

      fileUrl: {
        type: String,
        default: ""
      },

      fileName: {
        type: String,
        default: ""
      }

    },

    {
      timestamps: true
    }

  );

export default mongoose.model(
  "Resource",
  resourceSchema
);