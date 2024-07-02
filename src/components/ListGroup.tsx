import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;

  onItemSelected: (item: string) => void;
}

function ListGroup({ items, heading, onItemSelected }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            key={i}
            onClick={() => {
              setSelectedIndex(i);
              onItemSelected(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
