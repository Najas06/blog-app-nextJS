import { connectDB } from "@/lib/confiq/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const loadDB = async () => {
  await connectDB();
};
loadDB();

export async function POST(request) {
  try {
    const formData = await request.formData();
    const email = {
      email: `${formData.get("email")}`,
    };
    await EmailModel.create(email);
    console.log("Email Subscribed successfully");

    return NextResponse.json({
      success: true,
      message: "Email Subscribed successfully",
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Database error" });
  }
}

export async function GET(request){
    try {
        const emails = await EmailModel.find({});
        return NextResponse.json({emails,success:true})
    } catch (error) {
        return NextResponse.json({success:false,message:'Something went wrong'})
    }
}

export async function DELETE(request){
  const id = await request.nextUrl.searchParams.get('id')
  try {
    await EmailModel.findByIdAndDelete(id)
    return NextResponse.json({message:'Email deleted successfully',success:true})
  } catch (error) {
    return NextResponse.json({message:'Database error',success:false})
  }
}
