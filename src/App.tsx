import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodosBloc } from "./bloc/TodosBloc";
import { BlocContext } from "./contexts/BlocContext";
import { FilteredTodosBloc } from "./bloc/FilteredTodosBloc";

const App: React.FC = () => {
  const todosBloc = new TodosBloc();
  const filteredTodosBloc = new FilteredTodosBloc(todosBloc);

  return (
    <BlocContext.Provider value={{ todosBloc, filteredTodosBloc }}>
      <div className="App">
        <TodoList />
      </div>
    </BlocContext.Provider>
  );
};

export default App;
