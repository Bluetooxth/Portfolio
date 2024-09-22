import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const emailContent = `
      <div style = "font-size: 16px; color: #18181b;">Name: ${name}</div>
      <div style = "font-size: 16px; color: #18181b;">Email: ${email}</div>
      <div style = "font-size: 16px; color: #18181b;">Message: ${message}</div>
    `;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "priyannxhuu@gmail.com",
      subject: "Message from Portfolio",
      html: emailContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}