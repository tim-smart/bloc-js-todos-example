import { Bloc } from "@bloc-js/bloc";
import { Todo } from "../models/Todo";

// Events
export interface AddTodo {
  type: "add todo";
  todo: Todo;
}
export interface RemoveTodo {
  type: "remove todo";
  todo: Todo;
}
export type TodosEvent = AddTodo | RemoveTodo;

export type TodosState = Array<Todo>;

export class TodosBloc extends Bloc<TodosEvent, TodosState> {
  constructor() {
    super([]);
  }

  public async *mapEventToState(event: TodosEvent) {
    if (event.type === "add todo") {
      yield* this.mapAddTodoToState(event);
    } else if (event.type === "remove todo") {
      yield this.currentState.filter(todo => todo.key !== event.todo.key);
    }
  }

  public async *mapAddTodoToState(event: AddTodo) {
    yield [...this.currentState, event.todo];
  }
}
