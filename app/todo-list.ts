import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoListUpdatedMessage} from './todo-list-updated-message';
import { inject } from 'aurelia-framework';
import {TodoStore} from './todo-store';
import {ITodo} from './models/todo';

@inject(EventAggregator, TodoStore)
export class TodoList {
    todos: ITodo[] = [];

    constructor(private _eventAggregator : EventAggregator, private _todoStore: TodoStore ) {
        console.log("hit ");
        _eventAggregator.subscribe(TodoListUpdatedMessage, todos => {
            this.todos = todos.todos;
             console.log(this.todos);
        });
        this._todoStore.loadTodos();
    }

    public RemoveTask(id:number) {
        this._todoStore.removeToDos(id);
    }
}