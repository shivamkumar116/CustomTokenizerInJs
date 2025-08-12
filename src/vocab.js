import { customTokenizer } from "./tokenizer.js";
import { generateRandomNumber } from "./util.js";
import { loadVocab, saveVocab, addToVocabIfMissing } from "./vocabStorage.js";
import trainingData from "./trainingData.js";

let vocab = loadVocab() || {};

function init() {
  if (!vocab || Object.keys(vocab).length === 0) {
    console.log("No vocab file found — training new vocab...");
    vocab = trainVocab(trainingData);
    saveVocab(vocab);
  } else {
    vocab = loadVocab();
    console.log("Loaded vocab from file.");
  }
}

export function trainVocab(tData) {
  tData.forEach((data) => {
    const words = customTokenizer(data);
    words.forEach((word) => {
      if (!(word in vocab)) {
        vocab[word] = generateRandomNumber(3, 6);
      }
    });
  });

  return vocab;
}

export function encode(text) {
  init();
  return customTokenizer(text).map((token) => {
    if (!(token in vocab)) {
      const randomNum = generateRandomNumber(3, 6);
      addToVocabIfMissing(token, randomNum);
      init();
    }
    return vocab[token];
  });
}

// Decode tokens
export function decode(tokenArray) {
  if (!vocab || Object.keys(vocab).length === 0) {
    console.log("Vocab is empty or null.Initializing...");
    init();
  }
  const reverseVocab = Object.fromEntries(
    Object.entries(vocab).map(([word, num]) => [num, word])
  );

  return tokenArray
    .map((num) => reverseVocab[num])
    .filter(Boolean)
    .join("");
}
