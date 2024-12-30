import { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};
const App = () => {
  const [texts, setTexts] = useState({
    input: "",
    suggested: "",
  });
  const handleInputChange = (e) => {
    const text = e.target.value;
    setTexts((prev) => ({ ...prev, inputText: text }));

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setTexts((prev) => ({ ...prev, suggested: firstCorrection || "" }));
  };
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={texts.inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {texts.suggested && (
        <p>
          Did you mean: <strong>{texts.suggested}</strong>?
        </p>
      )}
    </div>
  );
};
export default App;
