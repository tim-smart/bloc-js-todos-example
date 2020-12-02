import * as React from "react";
import * as Todos from "../bloc/TodosBloc";

export const TodoForm: React.FC = () => {
  const bloc = Todos.useBloc();
  const [text, setText] = React.useState("");

  const submit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      bloc.next(Todos.add({ key: `${Date.now()}`, text }));
      setText("");
    },
    [bloc, text, setText],
  );

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
