import { useState } from "react";


function ListGroup() {
  const items = ["first", "second", "third", "fourth"];
  
  const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i ? 
                "list-group-item active" :
                "list-group-item"
            }
            key={i}
            onClick={() => setSelectedIndex(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
