import React, { useState, useEffect } from "react";

export default function List(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(props.getItems(5));
    console.log("updating items");

    // Il problema è che quando clicco Toggle theme fa il console log
    // rirenderizza il componente esempio
  }, [props.getItems]);
  return (
    <div className="mt-4">
      {items.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
