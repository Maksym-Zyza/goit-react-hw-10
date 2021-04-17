import { connect } from "react-redux";
import TodoList from "./TodoList";
import todosOperations from "../../redux/todos/todos-operations";
import todosSelectors from "../../redux/todos/todos-selectors";

const mapStateToProps = (state) => ({
  todos: todosSelectors.getVisibleTodos(state),
});

const mapDispatchToProps = {
  onDeleteTodo: todosOperations.deleteTodo,
  onToggleCompleted: todosOperations.toggleCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
