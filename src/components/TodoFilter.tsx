import * as React from "react";
import { BlocContext } from "../contexts/BlocContext";
import { useBlocState } from "@bloc-js/react-bloc";

export const TodoFilter: React.FC = () => {
  const filteredTodosBloc = React.useContext(BlocContext).filteredTodosBloc!;
  const state = useBlocState(filteredTodosBloc);

  function toggleFilter() {
    const filter = state.filter === "none" ? "awesome" : "none";
    filteredTodosBloc.setFilter(filter);
  }

  return (
    <div>
      <p>
        Current filter: {state.filter}
        <br />
        <button type="button" onClick={toggleFilter}>
          Toggle awesome filter
        </button>
      </p>
    </div>
  );
};
