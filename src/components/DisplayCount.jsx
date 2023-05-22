import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

const DisplayCount = ({ todos }) => {
  return (
    <Card className="shadow-sm border border-o">
      <Card.Body>
        <h4>No of Todos : {todos.length} </h4>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todoReducer };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCount);
