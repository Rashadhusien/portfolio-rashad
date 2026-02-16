import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // console.log(resend);
    // ✅ Get form data from frontend
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@rashadhussein.com>",
      to: ["rashadhusein440@gmail.com"],
      subject: "New Contact Message",
      react: EmailTemplate({ name, email, message }),
    });
    // console.log(data, error);

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Catch error:", error);
    return Response.json(
      { error: (error as Error).message || "Something went wrong" },
      { status: 500 },
    );
  }
}
