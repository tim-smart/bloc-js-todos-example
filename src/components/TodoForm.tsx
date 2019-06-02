import * as React from "react";
import { BlocContext } from "../contexts/BlocContext";

export const TodoForm: React.FC = () => {
  const todosBloc = React.useContext(BlocContext).todosBloc!;
  const [text, setText] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    todosBloc.dispatch({
      type: "add todo",
      todo: { key: `${Date.now()}`, text }
    });
    setText("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
