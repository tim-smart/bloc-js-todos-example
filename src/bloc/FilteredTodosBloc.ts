import { Bloc } from "@bloc-js/bloc";
import { map } from "rxjs/operators";
import { Todo } from "../models/Todo";
import { TodosBloc } from "./TodosBloc";

export type Filter = "none" | "awesome";

export interface FilteredTodosState {
  filter: Filter;
  todos: Array<Todo>;
}

export class FilteredTodosBloc extends Bloc<FilteredTodosState> {
  constructor(private todosBloc: TodosBloc) {
    super({ filter: "none", todos: todosBloc.value });
    this.consume(
      todosBloc.pipe(
        map(
          (todos): FilteredTodosState => ({
            ...this.value,
            todos: this.filterTodos(todos, this.value.filter),
          }),
        ),
      ),
    );
  }

  public setFilter(filter: Filter) {
    this.next({
      filter: filter,
      todos: this.filterTodos(this.todosBloc.value, filter),
    });
  }

  private filterTodos(todos: Array<Todo>, filter: Filter) {
    if (filter === "none") return todos;
    return todos.filter(todo => todo.text.toLowerCase().includes(filter));
  }
}
