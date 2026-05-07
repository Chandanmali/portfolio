import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    message: String

})

const userModel = mongoose.models.client || mongoose.model("client", userSchema)

export default userModel;