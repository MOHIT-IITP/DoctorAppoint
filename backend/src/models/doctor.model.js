import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        education: { type: String, required: true },
        gender: {
            type: String,
            enum: ["male", "female"],
            default: "male",
        },
        speciality: { type: String, required: true },
        fee: {type: Number, required: true}
    },
    { timestamps: true }
);

const Doctor = mongoose.model("doctor", doctorSchema);

export default Doctor;
