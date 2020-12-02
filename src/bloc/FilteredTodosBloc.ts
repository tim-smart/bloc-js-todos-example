import { Bloc, BlocAction } from "@bloc-js/bloc";
import { Todo } from "../models/Todo";
import { TodosBloc } from "./TodosBloc";
import { createHooks } from "@bloc-js/react-bloc";
import * as Todos from "./TodosBloc";

export type Filter = "none" | "awesome";

export interface FilteredTodosState {
  filter: Filter;
  todos: Array<Todo>;
}

// Hooks
export const { getBloc, useBloc, useState } = createHooks<FilteredTodosState>(
  "filteredTodos",
  (r) => {
    const todos = Todos.getBloc(r);
    return new FilteredTodosBloc(todos);
  },
);

// Helpers
function filterTodos(todos: Array<Todo>, filter: Filter) {
  if (filter === "none") return todos;
  return todos.filter((todo) => todo.text.toLowerCase().includes(filter));
}

// Actions
export type FilteredTodosAction = BlocAction<FilteredTodosState>;

export const setTodos = (todos: Todo[]): FilteredTodosAction => (b, next) =>
  next({
    ...b.value,
    todos: filterTodos(todos, b.value.filter),
  });

export const setFilter = (b: TodosBloc) => (
  filter: Filter,
): FilteredTodosAction => (_, next) =>
  next({
    filter,
    todos: filterTodos(b.value, filter),
  });

// Bloc
export class FilteredTodosBloc extends Bloc<FilteredTodosState> {
  constructor(public todosBloc: TodosBloc) {
    super({ filter: "none", todos: todosBloc.value });

    this.unsubscribeOnComplete(
      todosBloc.subscribe((todos) => {
        this.next(setTodos(todos));
      }),
    );
  }
}
