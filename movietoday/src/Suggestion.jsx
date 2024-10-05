const suggestion = [
  {
    name: "Jackpot!",
    image: "/jackpot.png",
  },
  { name: "The Fall Guy", image: "/fallguy-3.png" },
  { name: "Ghostbusters: Frozen Empire", image: "/ghost-2.png" },
  { name: "The Instigators", image: "/investigators-2.png" },
  { name: "Civil War", image: "/civilwar.png" },
  { name: "Furiosa: A Mad Max Saga", image: "/furiosa.png" },
];

function Suggestion() {
  return (
    <section className="suggestion">
      <h2>/Recently Released</h2>
      <div className="suggestion-grid">
        {suggestion.map((suggestion, index) => (
          <div key={index} className="suggestion-item">
            <img src={suggestion.image} alt={suggestion.name} />
            <p className="suggestion-name">{suggestion.name}</p>
          </div>
        ))}
      </div>
      <button className="btn-see-more">See more →</button>
    </section>
  );
}

export default Suggestion;
