import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactEmail } from '../src/lib/mailer.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }

  const { name, email, phone, service, message } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, error: 'Faltan campos obligatorios: nombre, email o teléfono' });
  }

  try {
    const result = await sendContactEmail({ name, email, phone, service, message });
    return res.status(200).json({
      success: true,
      leadId: result.leadId,
      message: 'Solicitud recibida correctamente. Te contactaremos en menos de 24 horas.',
    });
  } catch (err: any) {
    console.error('Error en api/contact.ts:', err);
    return res.status(500).json({ success: false, error: 'No se pudo procesar la solicitud' });
  }
}
