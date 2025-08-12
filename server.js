import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { decode, encode } from "./src/vocab.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Encode endpoint
app.post("/encode", (req, res) => {
  const { text } = req.body;
  console.log(text);
  const encoded = encode(text);
  res.json({ encoded });
});

// Decode endpoint
app.post("/decode", (req, res) => {
  const { text } = req.body;

  const tokens = text
    .split(",")
    .map((str) => str.trim())
    .map(Number)
    .filter((n) => !isNaN(n));
  const decoded = decode(tokens);
  res.json({ decoded });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
