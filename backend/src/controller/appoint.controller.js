import Appoint from "../models/appointment.model.js";

// here we want to take the doctor id and patient id so that we should keep the track of 
// the appointment and doctor availability 

export const handleAppoint = async (req, res) =>  {
    try {
        // here you have to take two :  patient id, doctor id
        // take the doctor id from the route , and the patient id from the user(redux)
        
        const {id: doctorId} = req.params; 
        const patientId = req.user?.id;

        console.log("this is patient id", patientId);
        console.log("this is doctors id" , doctorId)

        const {name, disease, address, age, weight, phone , date} = req.body;
        if(!patientId) {
            return res.status(400).json({error: "User is not logged in"})
        }

        if(!name || !disease || !address || !age || !weight || !phone || !date) {
            return res.status(400).json({message: "All field are required"})
        }

        // finding the existing booking on same day using doctorid and date
        const existingBooking = await Appoint.findOne({doctorId, date});

        if(existingBooking) {
            return res.status(400).json({error: "Doctor is already booked at this Date try finding another one"})
        }

        // creating new appointment 
        const newAppoint = new Appoint({
            patientid: id,
            doctorid: doctorId,
            name,
            disease,
            address,
            age,
            weight,
            phone,
            date,
        })
        
        // saving the new appointment
        await newAppoint.save();

        // replace the below with res.status(200).json({message: "Appointment done successfully"})
        res.status(200).json({
            Appoint_id: newAppoint._id,
            doctorid: newAppoint.doctorid,
            patientid: newAppoint.patientid,
            name: newAppoint.name,
            address: newAppoint.address,
            date: newAppoint.date,
        })

    } catch (error) {
        console.log("Error in appoint controller");
        res.status(500).json({message: "Internal server error"})
    }
} 
