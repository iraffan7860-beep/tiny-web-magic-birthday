import { useState } from "react";

const questions = [
  {
    question: "What makes a birthday extra special?",
    options: [
      "Sweet surprises 🎁",
      "Beautiful memories 📸",
      "Love from people 💗",
      "All of these ✨"
    ],
    answer: 3
  },
  {
    question: "Choose your birthday vibe!",
    options: [
      "Cute and cozy 🌷",
      "Full of adventure 🌈",
      "Cake and music 🎂",
      "A little bit of everything 💕"
    ],
    answer: 3
  },
  {
    question: "What should the new year bring you?",
    options: [
      "More happiness ☀️",
      "Beautiful opportunities 🌸",
      "Wonderful memories 🌙",
      "All the good things 💖"
    ],
    answer: 3
  }
];

function BirthdayQuiz() {
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length;

  function restartQuiz() {
    setAnswers({});
    setFinished(false);
  }

  return (
    <section className="birthday-quiz">
      <p className="eyebrow">A LITTLE BIRTHDAY GAME</p>

      <h2>Birthday Quiz ♡</h2>

      {!finished ? (
        <>
          <p className="quiz-intro">
            Pick your favourite answers and discover your result!
          </p>

          {questions.map((question, index) => (
            <div className="quiz-question" key={question.question}>
              <h3>{index + 1}. {question.question}</h3>

              <div className="quiz-options">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={option}
                    className={`quiz-option ${
                      answers[index] === optionIndex ? "selected" : ""
                    }`}
                    onClick={() =>
                      setAnswers({
                        ...answers,
                        [index]: optionIndex
                      })
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            className="open-button"
            disabled={Object.keys(answers).length !== questions.length}
            onClick={() => setFinished(true)}
          >
            Reveal My Result ♡
          </button>
        </>
      ) : (
        <div className="quiz-result">
          <div className="celebration-emoji">🎉💗✨</div>

          <h3>{score === 3 ? "Perfect Birthday Vibes!" : "You're Birthday Magic!"}</h3>

          <p>
            You matched {score} out of {questions.length} answers.
            May your birthday be full of beautiful moments!
          </p>

          <button className="open-button" onClick={restartQuiz}>
            Play Again ♡
          </button>
        </div>
      )}
    </section>
  );
}

export default BirthdayQuiz;