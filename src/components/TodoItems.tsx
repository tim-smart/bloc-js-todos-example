import * as React from "react";
import { Todo } from "../models/Todo";
import { TodoItem } from "./TodoItem";
import * as Todos from "../bloc/TodosBloc";

export interface TodoItemsProps {
  todos: Array<Todo>;
}

export const TodoItems: React.FC<TodoItemsProps> = ({ todos }) => {
  const bloc = Todos.useBloc();

  const onClick = React.useCallback(
    (t: Todo) => {
      bloc.next(Todos.remove(t));
    },
    [bloc],
  );

  return (
    <ul className="theList">
      {todos.map((todo) => (
        <TodoItem key={todo.key} todo={todo} onClick={onClick} />
      ))}
    </ul>
  );
};
