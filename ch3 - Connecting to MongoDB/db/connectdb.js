import mongoose from "mongoose";


const connectDB = async (DATABSAE_URI) => {
  try {

    const DB_OPTIONS = {
      user:'Mahak',
      pass:'Goyal',
      dbName: 'MahakBlog',
      authSource: 'MahakBlog'
    }

    await mongoose.connect(DATABSAE_URI, DB_OPTIONS);
    console.log("Connected Successfully");

  } catch (err) {
    console.log("Error mila");
    console.log(err);
  }
};

export default connectDB;
