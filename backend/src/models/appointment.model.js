import mongoose from "mongoose";

const appointSchema = new mongoose.Schema(
    {
        patientid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        doctorid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "doctor",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        disease: {
            type: String,
            required: true,
        },
        address: {type: String, required: true},
        age: { type: Number, required: true },
        weight: { type: Number, required: true },
        phone: { type: String, required: true },
        date :{type: String, required: true },

        // TODO: in future also add time section here
    },
    { timestamps: true }
);

const Appoint = mongoose.model("appoint", appointSchema);

export default Appoint;
