import * as React from "react";
import * as Filtered from "../bloc/FilteredTodosBloc";
import * as Todos from "../bloc/TodosBloc";

export const TodoFilter: React.FC = () => {
  const bloc = Filtered.useBloc();
  const state = Filtered.useState();

  const todosBloc = Todos.useBloc();
  const setFilter = React.useMemo(() => Filtered.setFilter(todosBloc), [
    todosBloc,
  ]);

  const toggle = React.useCallback(() => {
    const filter = state.filter === "none" ? "awesome" : "none";
    bloc.next(setFilter(filter));
  }, [bloc, state, setFilter]);

  return (
    <div>
      <p>
        Current filter: {state.filter}
        <br />
        <button type="button" onClick={toggle}>
          Toggle awesome filter
        </button>
      </p>
    </div>
  );
};
