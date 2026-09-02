import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { sendContactEmail } from './src/lib/mailer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'Ecoasesora API',
      timestamp: new Date().toISOString(),
    });
  });

  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Faltan campos obligatorios: nombre, email o teléfono' });
    }

    try {
      const result = await sendContactEmail({ name, email, phone, service, message });
      return res.json({
        success: true,
        leadId: result.leadId,
        message: 'Solicitud recibida correctamente. Te contactaremos en menos de 24 horas.',
      });
    } catch (err: any) {
      console.error('Error enviando email en server.ts:', err);
      return res.status(500).json({ success: false, error: 'No se pudo procesar la solicitud' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor de Ecoasesora activo en http://0.0.0.0:${PORT}`);
  });
}

startServer();
