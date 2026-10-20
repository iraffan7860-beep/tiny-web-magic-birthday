import { useState } from "react";

function SecretLetter() {
  const [letterOpened, setLetterOpened] = useState(false);

  return (
    <section className="secret-letter">
      <p className="eyebrow">A LITTLE NOTE JUST FOR YOU</p>

      <h2>A Secret Letter ♡</h2>

      <p className="letter-intro">
        Someone has a little something to tell you.
      </p>

      {!letterOpened ? (
        <button
          className="envelope-button"
          onClick={() => setLetterOpened(true)}
          aria-label="Open your secret birthday letter"
        >
          <span className="envelope">💌</span>
          <span className="envelope-hint">Tap to open your letter</span>
        </button>
      ) : (
        <div className="letter-paper">
          <span className="letter-decoration">🌷 ✨ 🌷</span>

          <h3>Dear Birthday Star,</h3>

          <p>
            Today is a reminder of how special you are.
            May your days be filled with kind people,
            little adventures, peaceful moments and
            beautiful surprises.
          </p>

          <p>
            Never forget that you deserve happiness,
            love and all the lovely things life has to offer.
          </p>

          <p className="letter-signature">
            With lots of love, ♡
          </p>

          <button
            className="open-button"
            onClick={() => setLetterOpened(false)}
          >
            Fold My Letter ♡
          </button>
        </div>
      )}
    </section>
  );
}

export default SecretLetter;
