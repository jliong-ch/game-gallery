import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];

  const itemSelectHandler = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onItemSelected={itemSelectHandler} />
    </div>
  );
}

export default App;
