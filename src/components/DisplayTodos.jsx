import React from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions/todo";

const DisplayTodos = ({ todos, deleteTodo }) => {
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
                  <ListGroup.Item key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                    <Button variant="danger" size="smalls" onClick={event => deleteTodo(todo.id)}>
                      Delete
                    </Button>
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

const mapStateToProps = (state) => {
  return { todos: state.todoReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
