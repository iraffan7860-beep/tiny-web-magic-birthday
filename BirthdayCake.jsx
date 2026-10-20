import { useState } from "react";

function BirthdayCake() {
  const [wishMade, setWishMade] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);

  function makeWish() {
    setCandlesBlown(true);
    setWishMade(true);
  }

  return (
    <section className="birthday-cake">
      <p className="eyebrow">CLOSE YOUR EYES AND MAKE A WISH</p>

      <h2>Make a Wish ♡</h2>

      <p className="cake-intro">
        Your special moment is waiting. Ready to make a wish?
      </p>

      <div className={`cake-scene ${candlesBlown ? "cake-celebration" : ""}`}>
        <div className="cake-candles">
          {[0, 1, 2].map((candle) => (
            <button
              key={candle}
              className={`candle ${candlesBlown ? "candle-out" : ""}`}
              onClick={() => {
                setCandlesBlown(true);
                setWishMade(true);
              }}
              aria-label={`Blow out candle ${candle + 1}`}
            >
              <span className="flame">🔥</span>
              <span className="candle-stick" />
            </button>
          ))}
        </div>

        <div className="cake-top" />
        <div className="cake-middle" />
        <div className="cake-bottom" />
      </div>

      {!wishMade ? (
        <button className="open-button" onClick={makeWish}>
          Make My Wish ♡
        </button>
      ) : (
        <div className="wish-message">
          <span>✨💗✨</span>
          <h3>Your wish is on its way!</h3>
          <p>May this new year bring you countless reasons to smile.</p>

          <button
            className="open-button"
            onClick={() => {
              setCandlesBlown(false);
              setWishMade(false);
            }}
          >
            Wish Again ♡
          </button>
        </div>
      )}
    </section>
  );
}

export default BirthdayCake;