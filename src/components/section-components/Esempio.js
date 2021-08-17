import React, { useState, useCallback } from "react";
import List from "./List";

export default function Esempio() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

  // useCallBack richiama questa funzione solo se il parametro al suo interno cambia del
  // usa per le funzioni grandi ( che richiedono tempo  tipo una chiamata api) che vuoi che vengano chiamate solo se necessario
  // questa funzione viene ricreata ogni volta come se fosse nuova
  // ogni volta che  scrivo un numero

  // evita di renderizzare una nuova volta tutto il componente List

  // useCallback esegue il codice al suo interno solo se alcuni parametri cambiano
  // Voglio chiamare la funzione getItem solo quando il numero cambia

  // useCallback fa in modo che la funzione venga richiamata solo nel caso in cui
  // il parametro [number] cambia

  // use Callback return a function

  // useMemo return a value

  const theme = {
    backgroundColor: dark ? "#3333" : "#FFFF",
    color: dark ? "#FFF" : "#3333",
  };

  return (
    <div style={theme} className="container center mt-4">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>

      <button
        onClick={() => setDark((prevDark) => !prevDark)}
        className="btn btn-primary mt-4"
      >
        {" "}
        Toggle theme
      </button>

      <List getItems={getItems}></List>
    </div>
  );
}
