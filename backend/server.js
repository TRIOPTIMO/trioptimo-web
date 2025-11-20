// server.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// ---------- CONFIGURAR TRANSPORT DE MAIL ----------
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",      // ej: smtp.gmail.com o smtp.sendgrid.net
  port: Number(465) || 587,
  secure: true,                    // true si usás 465
  auth: {
    user: "info@trioptimo.com",
    pass: "cfdd glvq vvwt gvca",
  },
});

// ---------- ENDPOINT DEL FORMULARIO ----------
app.post("/api/contact", async (req, res) => {
  try {
    const data = req.body || {};
    console.log("📩 /api/contact body =>", req.body);
    const {
      nombre,
      email,
      subject,
      web,
      detalle,
    } = data;

    // Mail que vas a recibir vos
    const mailOptions = {
      from: `"Web TriOptimo" <info@trioptimo.com>`,
      to: "info@trioptimo.com",//process.env.CONTACT_TO, // A dónde querés recibir los leads
      subject: `Nuevo contacto desde la web - ${nombre || "Sin nombre"}`,
      text: `
Nuevo contacto desde la web:

Nombre: ${nombre || "-"}
Email: ${email || "-"}
Motivo: ${subject || "-"}
Web: ${web || "-"}

Detalle:
${detalle || "-"}
      `.trim(),
    };

   const info = await transporter.sendMail(mailOptions);
    console.log("✅ Mail enviado, messageId:", info.messageId);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error al enviar mail:", err);
    res.status(500).json({ ok: false, error: "No se pudo enviar el mail" });
  }
});

// Opcional: endpoint para probar que el backend responde
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en puerto ${PORT}`);
});
