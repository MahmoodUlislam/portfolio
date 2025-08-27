import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();
    const { name, email, subject, message } = requestData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Get environment variables
    const serviceId = process.env.GMAIL_SERVICE;
    const templateId = process.env.EMAIL_TEMPLATE;
    const publicKey = process.env.EMAILJS_API_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.error("EmailJS configuration missing");
      return NextResponse.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      );
    }

    // Call EmailJS REST API
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          accessToken: privateKey,
          template_params: {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: "Mahmood ul Islam",
          },
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      });
    } else {
      const errorText = await response.text();
      console.error("EmailJS API Error:", response.status, errorText);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send message. Please try again.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
