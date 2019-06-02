import { Bloc } from "@bloc-js/bloc";
import { Todo } from "../models/Todo";
import { TodosBloc } from "./TodosBloc";
import { Subscription } from "rxjs";

export type Filter = "none" | "awesome";

// Events
export interface UpdateTodos {
  type: "update todos";
  todos: Array<Todo>;
}
export interface UpdateFilter {
  type: "update filter";
  filter: Filter;
}
export type FilteredTodosEvent = UpdateTodos | UpdateFilter;

// State
export interface FilteredTodosState {
  filter: Filter;
  todos: Array<Todo>;
}

export class FilteredTodosBloc extends Bloc<
  FilteredTodosEvent,
  FilteredTodosState
> {
  constructor(todosBloc: TodosBloc) {
    super({
      filter: "none",
      todos: todosBloc.currentState
    });

    this.todosBloc = todosBloc;
    this.todosSubscription = todosBloc.state$.subscribe(todos => {
      this.dispatch({ type: "update todos", todos });
    });
  }

  private todosBloc: TodosBloc;
  private todosSubscription: Subscription;

  public dispose() {
    super.dispose();
    this.todosSubscription.unsubscribe();
  }

  public async *mapEventToState(event: FilteredTodosEvent) {
    if (event.type === "update todos") {
      yield {
        filter: this.currentState.filter,
        todos: this.filterTodos(event.todos, this.currentState.filter)
      };
    } else if (event.type === "update filter") {
      yield {
        filter: event.filter,
        todos: this.filterTodos(this.todosBloc.currentState, event.filter)
      };
    }
  }

  private filterTodos(todos: Array<Todo>, filter: Filter) {
    if (filter === "none") return todos;
    return todos.filter(todo => todo.text.toLowerCase().includes(filter));
  }
}
