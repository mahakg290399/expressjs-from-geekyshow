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

//retrieve all

const getAll = async () =>{
    const result = await studentModel.find()
    
    result.forEach(
        (item)=> console.log(
            item.name,
            item.age,
            item.fees.toString(),
            item.hobbies[0],
            item.hobbies[1],
            item.isactive,
            item.comments[0].value,
            "\nPublish"+ item.comments[0].publish,
            item.join
        )
    )
}

//get specific data
const getSpecificData = async ()=>{
    const result = await studentModel.find().select(['-name','-age']);

    console.log(result)
}
export {getAll, getSpecificData }