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
  host: smtp.gmail.com,      // ej: smtp.gmail.com o smtp.sendgrid.net
  port: Number(465) || 587,
  secure: false,                    // true si usás 465
  auth: {
    user: "info@trioptimo.com",
    pass: "cfdd glvq vvwt gvca",
  },
});

// Endpoint de salud (opcional)
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// ---------- ENDPOINT DEL FORMULARIO ----------
app.post("/api/contact", async (req, res) => {
  try {
    const data = req.body || {};

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

    await transporter.sendMail(mailOptions);

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error al enviar mail:", err);
    res.status(500).json({ ok: false, error: "No se pudo enviar el mail" });
  }
});

// ---------- SERVIR REACT (si todo está en el mismo servicio) ----------
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Asumiendo que tu build de React va a /build
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
