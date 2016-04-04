import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoListUpdatedMessage} from './todo-list-updated-message';
import { inject } from 'aurelia-framework';
import {TodoStore} from './todo-store';
import {ITodo} from './models/todo';
import {Validation, ValidationGroup} from 'aurelia-validation';

@inject(EventAggregator, TodoStore, Validation)
export class App {
    message: string = 'To Do List Implemented with Aurelia';
    currentTask: string = "";
    hasFocus: boolean = true;
    todos: ITodo[] = [];
    validation : ValidationGroup ;

    constructor(private _eventAggregator, private _todoStore: TodoStore, valiation: Validation) {
        _eventAggregator.subscribe(TodoListUpdatedMessage, todos => {
            this.todos = todos.todos;
        });
        this._todoStore.loadTodos();
        this.validation = valiation.on(this).ensure('currentTask').isNotEmpty().hasMaxLength(20);
    }
        
    public AddTask() {
        this.validation.validate()
            .then(() => {
                this._todoStore.addTodo(this.currentTask);
                this.currentTask = "";
                this.hasFocus = true;
            })
            .catch(() => {
                console.log("Validation error!")
            });
    }

    public RemoveTask(id:number) {
        this._todoStore.removeToDos(id);
    }
}