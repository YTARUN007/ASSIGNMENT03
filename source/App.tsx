import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  let items=[
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
];
const [alertVisible, setAlertVisibility] = useState(false);
const handleSelectItem=(item: string)=>{
  console.log(item);
}
  return (
    <div><ListGroup items={items} heading="cities" onSelectItem={handleSelectItem} />
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> My alert</Alert>}
    <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
)
}

export default App
