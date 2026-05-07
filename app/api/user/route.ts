import { NextRequest, NextResponse } from "next/server";
import userModel from "./Model/userModel";
import connectDB from "@/lib/db";

export async function POST(req: NextRequest) {

  await connectDB("mongodb+srv://chandanmali21117_db_user:chandan21117@cluster0.hzefken.mongodb.net/portfolio");

  const body = await req.json();

  const firstname = body.firstname;
  const lastname = body.lastname;
  const email = body.email;
  const phone = body.phone;
  const message = body.message;

  const newUser = await userModel.create({
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    message: message,
  });

  return NextResponse.json({
    msg: "Thank you for your response",
    data: newUser,
  });
}
