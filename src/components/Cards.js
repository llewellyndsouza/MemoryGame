import { useEffect, useState } from "react";

function Cards(props) {
  const { database, win, loss } = props;
  const [shuffle, setShuffle] = useState([]);
  let selectedCards = [];

  useEffect(() => {
    setShuffle([]);
    for (let i = 0; i < 6; i++) {
      const item = database[Math.floor(Math.random() * database.length)];
      //const item = database[i];
      setShuffle((old) => [...old, item]);
    }
  }, [win, loss]);

  const shuffleDeck = () => {
    // Supposed to shuffle the cards in shuffle
    console.log("correct");
  }

  const checking = (e) => {
    if(selectedCards.includes(e.currentTarget.id)) {
      selectedCards = [];
      loss();
    } else {
      selectedCards.push(e.currentTarget.id);
      shuffleDeck();
    }

    if(selectedCards.length === shuffle.length) win();
  };

  return (
    <div className="game-cards">
      {shuffle.map((card) => {
        return (
          <button key={card.id} className="card" id={card.id} onClick={checking}>
            <h3>{card.title}</h3>
            <img src={card.url} alt={card.title} />
          </button>
        );
      })}
    </div>
  );
}

export default Cards;
