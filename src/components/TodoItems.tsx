import * as React from "react";
import { Todo } from "../models/Todo";
import { TodoItem } from "./TodoItem";
import { BlocContext } from "../contexts/BlocContext";

export interface TodoItemsProps {
  todos: Array<Todo>;
}

export const TodoItems: React.FC<TodoItemsProps> = ({ todos }) => {
  const todosBloc = React.useContext(BlocContext).todosBloc!;

  function onClick(todo: Todo) {
    todosBloc.dispatch({ type: "remove todo", todo });
  }

  return (
    <ul className="theList">
      {todos.map(todo => (
        <TodoItem key={todo.key} todo={todo} onClick={onClick} />
      ))}
    </ul>
  );
};
