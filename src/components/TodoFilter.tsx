import * as React from "react";
import * as FT from "../bloc/FilteredTodosBloc";

export const TodoFilter: React.FC = () => {
  const bloc = FT.useBloc();
  const state = FT.useState();

  const toggle = React.useCallback(() => {
    const filter = state.filter === "none" ? "awesome" : "none";
    bloc.next(FT.setFilter(filter));
  }, [bloc, state]);

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
