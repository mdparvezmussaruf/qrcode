import express from "express";
import qr from "qr-image";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Handle JSON data
app.use(express.urlencoded({ extended: true })); // Handle form data
app.use(express.static("public")); // Serve static files

const qrCodesDir = path.join(process.cwd(), "qr_codes");

// Ensure the qr_codes directory exists
if (!fs.existsSync(qrCodesDir)) {
    fs.mkdirSync(qrCodesDir);
}

// Route to generate QR code
app.post("/generate", (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Text input is required" });
    }

    const qrCodePath = path.join(qrCodesDir, "qrcode.png");
    const qr_svg = qr.image(text, { type: "png" });
    const output = fs.createWriteStream(qrCodePath);

    qr_svg.pipe(output);

    output.on("finish", () => {
        res.json({ qrCodeUrl: "/qr_codes/qrcode.png" });
    });

    output.on("error", (err) => {
        console.error("Error generating QR code:", err);
        res.status(500).json({ error: "Failed to generate QR code" });
    });
});

// Serve generated QR codes
app.use("/qr_codes", express.static(qrCodesDir));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
