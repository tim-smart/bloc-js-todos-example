import * as React from "react";
import { TodoForm } from "./TodoForm";
import { TodoItems } from "./TodoItems";
import { TodoFilter } from "./TodoFilter";
import * as Todos from "../bloc/FilteredTodosBloc";

export const TodoList: React.FC = () => {
  const state = Todos.useState();

  return (
    <div className="todoListMain">
      <div className="header">
        <TodoForm />

        <TodoFilter />

        {state.todos.length === 0 ? (
          <p>No todos</p>
        ) : (
          <TodoItems todos={state.todos} />
        )}
      </div>
    </div>
  );
};
