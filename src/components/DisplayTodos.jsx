import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { connect } from "react-redux";

const DisplayTodos = ({ todos }) => {

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
  return {todos: state.todoReducer};
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps) (DisplayTodos);
