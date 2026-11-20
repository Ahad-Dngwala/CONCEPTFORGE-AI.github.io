const assert = require("node:assert/strict");
const test = require("node:test");

const { chunkText } = require("../services/textChunker");

test("keeps a punctuation-free note", () => {
  const note = "Quick notes without punctuation";
  assert.deepEqual(chunkText(note), [note]);
});

test("keeps a final sentence without punctuation", () => {
  const text = "Mitosis divides a cell. Meiosis halves the chromosome count";
  const chunks = chunkText(text).map((chunk) => chunk.replace(/\s+/g, " "));
  assert.deepEqual(chunks, [text]);
});

test("does not emit an empty chunk before a long sentence", () => {
  const sentence = "sentence ".repeat(200) + "ends here.";
  assert.deepEqual(chunkText(sentence), [sentence]);
});

test("continues to keep ordinary punctuated sentences", () => {
  const text = "One complete fact. Another complete fact?";
  const chunks = chunkText(text).map((chunk) => chunk.replace(/\s+/g, " "));
  assert.deepEqual(chunks, [text]);
});
