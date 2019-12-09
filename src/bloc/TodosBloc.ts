import {Bloc} from '@bloc-js/bloc';
import {Todo} from '../models/Todo';

export type TodosState = Array<Todo>;

export class TodosBloc extends Bloc<TodosState> {
  public add(t: Todo) {
    this.next([...this.value, t])
  }

  public remove(t: Todo) {
    this.next(this.value.filter(todo => todo.key !== t.key));
  }
}
