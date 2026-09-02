import nodemailer from 'nodemailer';

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
}

export async function sendContactEmail(data: EmailData) {
  const smtpHost = process.env.SMTP_HOST || 'mail.ecoasesora.com';
  const smtpUser = process.env.SMTP_USER || 'info@ecoasesora.com';
  const smtpPass = process.env.SMTP_PASS || '';
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const recipients = (process.env.NOTIFICATION_EMAIL || 'info@ecoasesora.com').split(',');

  const leadId = `ECOA-${Math.floor(100000 + Math.random() * 900000)}`;

  if (!smtpPass) {
    console.warn('[mailer] SMTP_PASS no configurado; lead registrado sin envío de email.');
    return { success: false, leadId, error: 'SMTP no configurado' };
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 650px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #14532d; color: #ffffff; padding: 24px; text-align: center;">
        <h2 style="margin: 0; font-size: 22px; color: #4ade80;">NUEVA SOLICITUD DE PRESUPUESTO</h2>
        <p style="margin: 6px 0 0 0; font-size: 14px; color: #bbf7d0;">Ref: <strong>${leadId}</strong> | Ecoasesora</p>
      </div>
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 35%; background-color: #f8fafc;">Nombre:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc;">Email:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc;">Teléfono:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${data.phone}" style="color: #059669;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc;">Servicio:</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${data.service || 'No especificado'}</td>
          </tr>
          ${data.message ? `
          <tr>
            <td style="padding: 12px; font-weight: bold; background-color: #f8fafc; vertical-align: top;">Mensaje:</td>
            <td style="padding: 12px;">${data.message}</td>
          </tr>
          ` : ''}
        </table>
      </div>
      <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
        Notificación automática enviada desde <strong>ecoasesora.com</strong>.
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Ecoasesora Web" <${smtpUser}>`,
    to: recipients.join(', '),
    replyTo: data.email,
    subject: `Nueva solicitud de presupuesto - ${data.name} - Ref ${leadId}`,
    text: `Ref: ${leadId}\nNombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone}\nServicio: ${data.service || ''}\nMensaje: ${data.message || ''}`,
    html: htmlContent,
  };

  const ports = [465, 587, 25];
  for (const port of ports) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port,
        secure: port === 465,
        auth: { user: smtpUser, pass: smtpPass },
        tls: { rejectUnauthorized: false },
        connectionTimeout: 8000,
      });
      const info = await transporter.sendMail(mailOptions);
      console.log(`[SMTP OK ${port}] MessageId: ${info.messageId}`);
      return { success: true, leadId, messageId: info.messageId };
    } catch (err: any) {
      console.warn(`[SMTP ${port} falló] ${err.message}`);
    }
  }

  return { success: false, leadId, error: 'Todos los puertos SMTP fallaron' };
}
