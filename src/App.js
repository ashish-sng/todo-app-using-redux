import "./App.css";
import { Container } from "react-bootstrap";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <Container >
      <AddTodo />
      <DisplayTodos />
    </Container>
  );
}

export default App;
