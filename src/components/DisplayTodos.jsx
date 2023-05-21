import React, { useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import DisplayCount from "./DisplayCount";

const DisplayTodos = () => {
  const [todos, setTodos] = useState([
    {
      title: "first title",
      description: "first description",
    },
    {
      title: "second title",
      description: "second description",
    },
    {
      title: "third title",
      description: "third description",
    },
  ]);
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadom-sm">
            <Card.Body>
              <h3>All Todos are here!</h3>
              <DisplayCount />
              <ListGroup>
                {todos.map((todo, index) => (
                  <ListGroup.Item>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayTodos;
