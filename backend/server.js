// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// ---------- ENDPOINT DEL FORMULARIO ----------
app.post("/api/contact", async (req, res) => {
  try {
    const data = req.body || {};
    console.log("📩 /api/contact body =>", req.body);

    const { nombre, email, subject, web, detalle } = data;

    // 🔐 Cargar API key de Resend desde variables de entorno
    const RESEND_API_KEY = "re_BCaqeSiV_4iGHayXMDrqLWJBDSNqCxjz4";
    const EMAIL_FROM = "info@trioptimo.com"|| "no-reply@trioptimo.com";
    const EMAIL_TO = "info@trioptimo.com";

    // ❗ Validación mínima
    if (!email || !detalle || !nombre) {
      return res.status(400).json({
        ok: false,
        error: "Faltan campos obligatorios",
      });
    }

    // ---------- FORMATO HTML DEL MAIL ----------
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: auto; padding: 20px; border-radius: 12px; background: #fafafa; border: 1px solid #eee;">
        <h2 style="color: #5F215E; margin-top: 0;">📬 Nuevo contacto desde TriOptimo</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Motivo:</strong> ${subject || "-"}</p>
        <p><strong>Web:</strong> ${web || "-"}</p>

        <p style="margin-top: 20px; font-weight: bold;">Detalle del mensaje:</p>
        <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
          ${detalle}
        </div>

        <p style="margin-top: 30px; font-size: 0.85rem; color: #999;">
          Recibiste este email desde el formulario de tu web.
        </p>
      </div>
    `;

    // ---------- ENVÍO DE MAIL CON RESEND (HTTPS, NO SMTP) ----------
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Web TriOptimo <${EMAIL_FROM}>`,
        to: [EMAIL_TO],
        reply_to: email,
        subject: `Nuevo contacto - ${nombre}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Error Resend:", response.status, errorText);
      return res.status(500).json({ ok: false, error: "Error enviando mail" });
    }

    console.log("✅ Email enviado vía Resend");
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("❌ Error al enviar mail:", err);
    res.status(500).json({ ok: false, error: "No se pudo enviar el mail" });
  }
});

// ---------- HEALTH CHECK ----------
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en puerto ${PORT}`);
});
