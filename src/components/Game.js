import Cards from "./Cards";
import { useEffect, useState } from "react";

function Game(props) {
  const [database, setDatabase] = useState(null);
  const [loaded, setloaded] = useState(false);

  const getData = async () => {
    fetch(`https://jsonplaceholder.typicode.com/photos/`)
      .then(response => response.json())
      .then((data) => setDatabase(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=>{
    if(database) {
      setloaded(true);
      console.log(database);
    }
  },[database])

  return (
    <div className="game-container">
      {loaded ? <Cards database={database} win={props.increaseScore} loss={props.resetScore} /> : null}
    </div>
  );
}

export default Game;
