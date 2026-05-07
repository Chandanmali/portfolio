import mongoose from "mongoose"

const connectDB = async(url: any) => {
    return await mongoose.connect(
      url
    ).then(() => console.log("DB connected successfully")).catch(() => console.log("connection failed"))
}

export default connectDB