import Appoint from "../models/appointment.model.js";

export const handleAppoint = async (req, res) =>  {
    try {
        const {id} = req.params;
        const {doctorid, name, disease, address, age, weight, phone , date} = req.body;
        if(!id) {
            return res.status(400).json({error: "User is not logged in"})
        }

        if(!name || !disease || !address || !age || !weight || !phone || !date) {
            return res.status(400).json({message: "All field are required"})
        }

        const existingBooking = await Appoint.findOne({doctorid, date});

        if(existingBooking) {
            return res.status(400).json({error: "Doctor is already booked at this Date try finding another one"})
        }

        const newAppoint = new Appoint({
            patientid: id,
            doctorid, 
            name,
            disease,
            address,
            age,
            weight,
            phone,
            date,
        })
        await newAppoint.save();
        res.status(200).json({
            Appoint_id: newAppoint._id,
            name: newAppoint.name,
            address: newAppoint.address,
            date: newAppoint.date,
        })

    } catch (error) {
        console.log("Error in appoint controller");
        res.status(500).json({message: "Internal server error"})
    }
} 
