import * as React from "react";
import { TodosBloc } from "../bloc/TodosBloc";
import { FilteredTodosBloc } from "../bloc/FilteredTodosBloc";

export interface BlocContextValue {
  todosBloc?: TodosBloc;
  filteredTodosBloc?: FilteredTodosBloc;
}

export const BlocContext = React.createContext<BlocContextValue>({
  filteredTodosBloc: undefined,
  todosBloc: undefined
});
