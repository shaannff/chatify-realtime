export const welcomeEmailTemplate = (fullName, clientUrl) => `
  <div style="font-family: 'Segoe UI', sans-serif; background-color: #f7f9fc; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      
      <div style="background-color: #3b82f6; color: white; text-align: center; padding: 25px;">
        <h1 style="margin: 0; font-size: 28px;">Welcome to <span style="color: #ffe600;">Chatify</span> 💬</h1>
      </div>

      <div style="padding: 25px;">
        <h2 style="color: #111;">Hello, ${fullName} 👋</h2>
        <p style="font-size: 16px; color: #333;">
          We're thrilled to have you join <strong>Chatify</strong> — your space to connect and communicate in real time.
        </p>

        <p style="margin-top: 20px; color: #555;">Here’s how to get started:</p>
        <ul style="color: #444; line-height: 1.7;">
          <li>🖼️ <strong>Add your profile picture</strong> — let people recognize you!</li>
          <li>👥 <strong>Find and add your contacts</strong> — connect with your friends instantly.</li>
          <li>💬 <strong>Start a conversation</strong> — jump right into chat rooms or private messages.</li>
        </ul>

        <div style="text-align: center; margin: 30px 0;">
          <a href="${clientUrl}/login"
             style="background-color: #3b82f6; color: white; padding: 12px 25px; border-radius: 6px; text-decoration: none; font-weight: bold;">
            Get Started
          </a>
        </div>

        <p style="font-size: 14px; color: #888; text-align: center;">
          Need help? Contact us anytime at 
          <a href="mailto:support@chatify.com" style="color: #3b82f6;">support@chatify.com</a>
        </p>
      </div>

      <div style="background-color: #f1f5f9; text-align: center; padding: 15px; font-size: 13px; color: #777;">
        © ${new Date().getFullYear()} Chatify Inc. All rights reserved.
      </div>

    </div>
  </div>
`;
