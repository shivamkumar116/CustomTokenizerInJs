import fs from "fs";

const VOCAB_FILE = "./data/vocab.json";

export function saveVocab(vocab) {
  fs.writeFileSync(VOCAB_FILE, JSON.stringify(vocab, null, 2), "utf-8");
}

export function loadVocab() {
  if (fs.existsSync(VOCAB_FILE)) {
    return JSON.parse(fs.readFileSync(VOCAB_FILE, "utf-8"));
  }
  return null; // File doesn't exist
}

// Add a token if it doesn't already exist in vocab
export function addToVocabIfMissing(token, value) {
  console.log("adding to vocabb");

  const vocab = loadVocab();
  if (!(token in vocab)) {
    vocab[token] = value;
    saveVocab(vocab);
    return true; // Added
  }
  return false; // Already exists
}
