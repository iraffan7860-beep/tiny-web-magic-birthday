import { useState } from "react";

function BirthdayPersonalizer() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanName = name.trim();

    if (cleanName) {
      setSavedName(cleanName);
    }
  }

  return (
    <section className="birthday-personalizer">
      <p className="eyebrow">MAKE IT PERSONAL</p>

      <h2>A Birthday Made for You ♡</h2>

      <p className="personalizer-intro">
        Add a name and see your special birthday greeting.
      </p>

      <form className="personalizer-form" onSubmit={handleSubmit}>
        <label htmlFor="birthday-name">Birthday person's name</label>

        <input
          id="birthday-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter a name..."
          maxLength={40}
          required
        />

        <button className="open-button" type="submit">
          Personalize My Wish ♡
        </button>
      </form>

      {savedName && (
        <div className="personalized-greeting" aria-live="polite">
          <span>🎂💗🎁</span>
          <h3>Happy Birthday, {savedName}!</h3>
          <p>
            This little corner of the internet is celebrating you.
            May your day be full of magic!
          </p>
        </div>
      )}
    </section>
  );
}

export default BirthdayPersonalizer;