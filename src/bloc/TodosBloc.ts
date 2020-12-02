import { Bloc, BlocAction } from "@bloc-js/bloc";
import { Todo } from "../models/Todo";
import { createHooks } from "@bloc-js/react-bloc";

export type TodosState = Array<Todo>;
export type TodoAction = BlocAction<TodosState>;

export const { getBloc, useBloc, useState } = createHooks<TodosState>(
  "todos",
  (_, i = []) => new TodosBloc(i),
);

export const add = (t: Todo): TodoAction => (b, next) => next([...b.value, t]);
export const remove = (t: Todo): TodoAction => (b, next) =>
  next(b.value.filter((todo) => todo.key !== t.key));

export class TodosBloc extends Bloc<TodosState> {}
