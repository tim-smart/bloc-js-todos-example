import { BlocRegistry, BlocRoot } from "@bloc-js/react-bloc";
import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";

export const registry = new BlocRegistry();

const App: React.FC = () => {
  return (
    <BlocRoot registry={registry}>
      <div className="App">
        <TodoList />
      </div>
    </BlocRoot>
  );
};

export default App;
