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
            background-color: #f4f4f4;
            color: #333;
          }
          .container {
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .title {
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }
          .info {
            margin-top: 10px;
            font-size: 13px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <p class="title">Visitor Details</p>
          <div class="info">
            <p><strong>IP Address:</strong> ${userDetails.ip}</p>
            <p><strong>City:</strong> ${userDetails.city}</p>
            <p><strong>Region:</strong> ${userDetails.region}</p>
            <p><strong>Country:</strong> ${userDetails.country_name}</p>
            <p><strong>Postal Code:</strong> ${userDetails.postal}</p>
            <p><strong>User Agent:</strong> ${userDetails.userAgent}</p>
            <p><strong>Referrer:</strong> ${userDetails.referrer}</p>
            <p><strong>Date and Time:</strong> ${userDetails.dateTime}</p>
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
