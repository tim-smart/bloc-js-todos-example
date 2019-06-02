import * as React from "react";
import { BlocContext } from "../contexts/BlocContext";
import { useBlocState } from "@bloc-js/react-bloc";
import { TodoForm } from "./TodoForm";
import { TodoItems } from "./TodoItems";
import { TodoFilter } from "./TodoFilter";

export const TodoList: React.FC = () => {
  const filteredTodos = React.useContext(BlocContext).filteredTodosBloc!;
  const state = useBlocState(filteredTodos);

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
