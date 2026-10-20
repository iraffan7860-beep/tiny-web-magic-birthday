import { useState } from "react";

import MemoryScrapbook from "./components/MemoryScrapbook";
import BirthdayQuiz from "./components/BirthdayQuiz";
import BirthdayCake from "./components/BirthdayCake";
import SecretLetter from "./components/SecretLetter";
import BirthdayPersonalizer from "./components/BirthdayPersonalizer";
import CelebrationEffect from "./components/CelebrationEffect";

function App() {
  const [surpriseOpened, setSurpriseOpened] = useState(false);
  const [celebrationTrigger, setCelebrationTrigger] = useState(0);

  function openSurprise() {
    setSurpriseOpened(true);
    setCelebrationTrigger((current) => current + 1);
  }

  return (
    <>
      <CelebrationEffect trigger={celebrationTrigger} />

      <main className="birthday-page">
        <section className="welcome-card">
          {!surpriseOpened ? (
            <div className="welcome-content">
              <p className="eyebrow">
                A LITTLE SOMETHING FOR YOU
              </p>

              <button
                className="gift-box"
                onClick={openSurprise}
                aria-label="Open birthday gift"
              >
                <span className="gift-emoji">🎁</span>
              </button>

              <h1>A Little Birthday Magic</h1>

              <p className="subtitle">
                A tiny gift, made just for you.
                Tap the present to discover your surprise!
              </p>

              <button className="open-button" onClick={openSurprise}>
                Open Your Surprise ♡
              </button>
            </div>
          ) : (
            <div className="reveal-content">
              <p className="eyebrow">
                TODAY IS ALL ABOUT YOU
              </p>

              <div className="celebration-emoji">
                🎉🎂🎈
              </div>

              <h1>Happy Birthday! ♡</h1>

              <p className="subtitle">
                May your day be filled with love, laughter,
                beautiful memories and little moments of magic.
              </p>

              <div className="birthday-message">
                You deserve all the happiness in the world!
              </div>

              <button
                className="open-button"
                onClick={() => setSurpriseOpened(false)}
              >
                Close Surprise ♡
              </button>

              <BirthdayPersonalizer />
              <MemoryScrapbook />
              <BirthdayQuiz />
              <BirthdayCake />
              <SecretLetter />
            </div>
          )}

          <p className="footer-note">
            Made with love by Tiny Web Magic
          </p>
        </section>
      </main>
    </>
  );
}

export default App;