import { useState } from "react";

const memories = [
  {
    emoji: "🌷",
    title: "Little Things",
    message: "The smallest moments can become the sweetest memories."
  },
  {
    emoji: "🧸",
    title: "Happy Moments",
    message: "May your life always be filled with reasons to smile."
  },
  {
    emoji: "🌙",
    title: "A Little Wish",
    message: "May beautiful things find their way into your life."
  }
];

function MemoryScrapbook() {
  const [openedMemory, setOpenedMemory] = useState(null);

  return (
    <section className="scrapbook">
      <p className="eyebrow">A LITTLE BOOK OF MAGIC</p>

      <h2>Little Memories ♡</h2>

      <p className="scrapbook-intro">
        Tap a card to discover a little message.
      </p>

      <div className="memory-grid">
        {memories.map((memory, index) => (
          <button
            key={memory.title}
            className={`memory-card ${
              openedMemory === index ? "memory-open" : ""
            }`}
            onClick={() =>
              setOpenedMemory(
                openedMemory === index ? null : index
              )
            }
            aria-expanded={openedMemory === index}
          >
            <span className="memory-emoji">{memory.emoji}</span>

            <span className="memory-title">{memory.title}</span>

            {openedMemory === index && (
              <span className="memory-message">
                {memory.message}
              </span>
            )}

            <span className="memory-hint">
              {openedMemory === index ? "Close ♡" : "Tap to open"}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default MemoryScrapbook;