import * as React from "react";
import { Todo } from "../models/Todo";

export interface TodoItemProps {
  todo: Todo;
  onClick: (todo: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick }) => (
  <li onClick={() => onClick(todo)}>{todo.text}</li>
);
