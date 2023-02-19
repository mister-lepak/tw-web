export default function matrixifyText({ text, elementId }) {
  let interval = null;
  let iteration = 0;

  const LETTERS = "abcdefghijklmnopqrstuvwyz";

  clearInterval(interval);

  interval = setInterval(() => {
    document.getElementById(elementId).textContent = text
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return text[index];
        }
        return LETTERS[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= text.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}
