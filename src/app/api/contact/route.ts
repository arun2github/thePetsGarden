import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, petType, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'The Pets Garden <contact@thepetsgarden.com>', // You'll need to verify this domain
      to: ['sanjutiwarishw@gmail.com'], // The email where you want to receive inquiries
      subject: `New Inquiry from ${name} - The Pets Garden`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); padding: 20px;">
          <div style="background: white; border-radius: 16px; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #fbbf24, #f59e0b); border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                <span style="color: white; font-size: 24px; font-weight: bold;">T</span>
              </div>
              <h1 style="color: #1f2937; margin: 0; font-size: 28px; font-weight: bold;">The Pets Garden</h1>
              <p style="color: #6b7280; margin: 8px 0 0; font-size: 16px;">New Customer Inquiry</p>
            </div>

            <!-- Customer Details -->
            <div style="background: #f9fafb; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <h2 style="color: #1f2937; margin: 0 0 16px; font-size: 20px; font-weight: 600;">Customer Information</h2>
              
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; align-items: center;">
                  <span style="color: #fbbf24; margin-right: 8px;">👤</span>
                  <span style="color: #374151; font-weight: 500;">Name:</span>
                  <span style="color: #1f2937; margin-left: 8px; font-weight: 600;">${name}</span>
                </div>
                
                <div style="display: flex; align-items: center;">
                  <span style="color: #fbbf24; margin-right: 8px;">📧</span>
                  <span style="color: #374151; font-weight: 500;">Email:</span>
                  <a href="mailto:${email}" style="color: #2563eb; margin-left: 8px; font-weight: 600; text-decoration: none;">${email}</a>
                </div>
                
                <div style="display: flex; align-items: center;">
                  <span style="color: #fbbf24; margin-right: 8px;">📱</span>
                  <span style="color: #374151; font-weight: 500;">Phone:</span>
                  <a href="tel:${phone}" style="color: #2563eb; margin-left: 8px; font-weight: 600; text-decoration: none;">${phone}</a>
                </div>
                
                ${petType ? `
                <div style="display: flex; align-items: center;">
                  <span style="color: #fbbf24; margin-right: 8px;">🐾</span>
                  <span style="color: #374151; font-weight: 500;">Pet Type:</span>
                  <span style="color: #1f2937; margin-left: 8px; font-weight: 600;">${petType}</span>
                </div>
                ` : ''}
                
                ${service ? `
                <div style="display: flex; align-items: center;">
                  <span style="color: #fbbf24; margin-right: 8px;">🏥</span>
                  <span style="color: #374151; font-weight: 500;">Service:</span>
                  <span style="color: #1f2937; margin-left: 8px; font-weight: 600;">${service}</span>
                </div>
                ` : ''}
              </div>
            </div>

            <!-- Message -->
            <div style="background: #fef7e0; border-left: 4px solid #fbbf24; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <h3 style="color: #92400e; margin: 0 0 12px; font-size: 16px; font-weight: 600;">Message</h3>
              <p style="color: #78350f; margin: 0; line-height: 1.6; font-size: 15px;">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <!-- Quick Actions -->
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0 0 16px; font-size: 14px;">Quick Actions</p>
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <a href="mailto:${email}" style="background: #2563eb; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">Reply via Email</a>
                <a href="tel:${phone}" style="background: #059669; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">Call Now</a>
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="background: #25d366; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">WhatsApp</a>
              </div>
            </div>

            <!-- Footer -->
            <div style="text-align: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                This inquiry was submitted through The Pets Garden website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}