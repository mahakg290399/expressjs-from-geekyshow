import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    // _id: { type: Number },
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    fees: { type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50 },
    hobbies: { type: Array },
    isactive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }
})


//compiling Schema
const studentModel = mongoose.model('student', studentSchema)

const createDoc = async ()=>{
    try {
        const studentDoc = new studentModel({
            name: "Disha Goyal",
            age: 26,
            fees: 6000.40,
            hobbies: ["Gardening", "Dancing"],
            isactive: true,
            comments: [{ value: 'She is married now' }]
        })
        
        const result = await studentDoc.save()
        console.log(result); 
    } catch (error) {
        console.log(error);
    }
}

export default createDoc
