import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // Ensure the request is JSON
    if (request.headers.get('content-type') !== 'application/json') {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 400 }
      );
    }

    const formData = await request.json();
    const { 
      name, 
      email, 
      phone, 
      eventType, 
      eventDate, 
      message 
    } = formData;

    // Validate required fields
    if (!name || !email || !phone || !eventType || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, eventType, message)" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    if (!/^[\d\s\-\+\(\)]{10,}$/.test(phone.replace(/\D/g, ''))) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      },
    });

    const {CONTACT_RECIPIENT_EMAIL1} = process.env;

    // Format event types for better display
    const eventTypeLabels = {
      "wedding": "Wedding",
      "birthday": "Birthday",
      "engagement": "Engagement", 
      "reception": "Reception",
      "corporate": "Corporate Event",
      "other": "Other"
    };

    const formattedEventType = eventTypeLabels[eventType] || eventType;
    const formattedEventDate = eventDate ? new Date(eventDate).toLocaleDateString() : 'Not specified';

    // Email options with all form data
    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      replyTo: email,
      to: `${CONTACT_RECIPIENT_EMAIL1}`,
      subject: `New Event Inquiry from ${name} - ${formattedEventType}`,
      text: `
        Event Planning Inquiry
        ----------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Event Type: ${formattedEventType}
        Event Date: ${formattedEventDate}
        
        Message:
        ${message}
        
        ---
        Sent from V.I.P Function Planners Website Contact Form
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; color: #333;">
          <div style="background: linear-gradient(135deg, #d4af37, #b8941f); padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 24px;">🎉 New Event Inquiry</h2>
          </div>
          
          <div style="padding: 25px; background: #f9f9f9;">
            <h3 style="color: #d4af37; margin-top: 0;">Contact Information</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; width: 30%;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a>
                </td>
              </tr>
            </table>

            <h3 style="color: #d4af37;">Event Details</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; width: 30%;"><strong>Event Type:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formattedEventType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Event Date:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formattedEventDate}</td>
              </tr>
            </table>

            <h3 style="color: #d4af37;">Message Details</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #d4af37;">
              <p style="margin: 0; white-space: pre-line;">${message}</p>
            </div>
          </div>
          
          <div style="background: #2d3748; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This inquiry was submitted through the V.I.P Function Planners website contact form</p>
            <p style="margin: 5px 0 0 0;">
              <a href="tel:+918778304145" style="color: #d4af37; text-decoration: none;">+91 8778304145</a> • 
              <a href="mailto:shejinoantony@gmail.com" style="color: #d4af37; text-decoration: none;">shejinoantony@gmail.com</a>
            </p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your inquiry! We will contact you within 24 hours." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send your message. Please try again later.",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}