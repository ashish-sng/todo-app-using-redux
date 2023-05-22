import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { addTodo, addtodo } from "../redux/actions/todo";
import { connect } from "react-redux";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //add todo in store
    addTodo(todo);
    setTodo({
      title: "",
      description: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add Todo here!!</h3>
              <DisplayCount />
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter here..."
                    value={todo.title}
                    onChange={(event) =>
                      setTodo({ ...todo, title: event.target.value })
                    }
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    placeholder="Enter here..."
                    value={todo.description}
                    onChange={(event) =>
                      setTodo({ ...todo, description: event.target.value })
                    }
                  ></Form.Control>
                </Form.Group>
                <Container className="text-center mt-3">
                  <Button type="submit" variant="primary">
                    Add Todo
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
