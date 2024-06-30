const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  try {
    const userDetails = JSON.parse(event.body);

    // Create the email content with basic HTML and inline styles
    const emailContent = `
  <html>
  <head>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
      }
      .info {
        font-size: 14px;
        color: #666;
      }
      .info-item {
        margin-bottom: 8px;
      }
      .info-item strong {
        font-weight: bold;
        color: #333;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p class="title">Visitor Details</p>
      <div class="info">
        <div class="info-item"><strong>IP Address:</strong> ${userDetails.ip}</div>
        <div class="info-item"><strong>City:</strong> ${userDetails.city}</div>
        <div class="info-item"><strong>Region:</strong> ${userDetails.region}</div>
        <div class="info-item"><strong>Country:</strong> ${userDetails.country_name}</div>
        <div class="info-item"><strong>Postal Code:</strong> ${userDetails.postal}</div>
        <div class="info-item"><strong>User Agent:</strong> ${userDetails.userAgent}</div>
        <div class="info-item"><strong>Referrer:</strong> ${userDetails.referrer}</div>
        <div class="info-item"><strong>Date and Time:</strong> ${userDetails.dateTime}</div>
      </div>
    </div>
  </body>
  </html>
`;

    // Setup Nodemailer transporter using environment variables
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FROM_EMAIL, // Use environment variable for email address
        pass: process.env.EMAIL_PASS, // Use environment variable for email password
      },
    });

    // Email options
    let mailOptions = {
      from: process.env.FROM_EMAIL, // Use environment variable for email address
      to: process.env.TO_EMAIL, // Use environment variable for recipient email address
      subject: `From Portfolio: Someone Visited`,
      html: emailContent, // Use HTML content for the email body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: "Email sent successfully!",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Failed to send email: ${error.message}`,
    };
  }
};
