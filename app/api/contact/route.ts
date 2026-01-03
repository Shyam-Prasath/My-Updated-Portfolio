import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Message",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>
<body style="
  margin: 0;
  padding: 0;
  background-color: #0b0f19;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Helvetica, Arial, sans-serif;
">

  <!-- Outer Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" style="
          max-width: 600px;
          background: linear-gradient(180deg, #111827 0%, #020617 100%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        ">

          <!-- Header -->
          <tr>
            <td style="
              padding: 28px 32px;
              background: linear-gradient(135deg, #4f46e5, #06b6d4);
            ">
              <h1 style="
                margin: 0;
                color: #ffffff;
                font-size: 22px;
                font-weight: 700;
                letter-spacing: 0.4px;
              ">
                New Contact Message
              </h1>
              <p style="
                margin: 6px 0 0;
                color: rgba(255,255,255,0.8);
                font-size: 14px;
              ">
                Someone reached out through your portfolio
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 32px;">

              <!-- Info Grid -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="
                      margin: 0;
                      font-size: 12px;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                      color: #94a3b8;
                    ">
                      Name
                    </p>
                    <p style="
                      margin: 6px 0 0;
                      font-size: 16px;
                      color: #e5e7eb;
                      font-weight: 600;
                    ">
                      ${name}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom: 24px;">
                    <p style="
                      margin: 0;
                      font-size: 12px;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                      color: #94a3b8;
                    ">
                      Email
                    </p>
                    <p style="
                      margin: 6px 0 0;
                      font-size: 16px;
                      color: #38bdf8;
                      font-weight: 500;
                    ">
                      ${email}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="
                height: 1px;
                background: linear-gradient(to right, transparent, #1e293b, transparent);
                margin: 24px 0;
              "></div>

              <!-- Message -->
              <p style="
                margin: 0 0 12px;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #94a3b8;
              ">
                Message
              </p>

              <div style="
                background: #020617;
                border: 1px solid #1e293b;
                border-radius: 12px;
                padding: 20px;
                color: #e5e7eb;
                font-size: 15px;
                line-height: 1.7;
              ">
                ${message.replace(/\n/g, "<br/>")}
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              padding: 24px 32px;
              background: #020617;
              text-align: center;
            ">
              <p style="
                margin: 0;
                font-size: 12px;
                color: #64748b;
              ">
                © ${new Date().getFullYear()} Shyam Prasath · Portfolio Contact
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`
,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { success: false, message: "Email failed to send" },
      { status: 500 }
    );
  }
}
