import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoListUpdatedMessage} from './todo-list-updated-message';
import { inject } from 'aurelia-framework';
import {TodoStore} from './todo-store';
import {ITodo} from './models/todo';

@inject(EventAggregator, TodoStore)
export class App {
    message: string = 'To Do List Implemented with Aurelia';
    currentTask: string = "";
    hasFocus: boolean = true;
    todos: ITodo[] = [];
    colour: string = "black";
    private colours: string[] = [
        "red", "yellow", "pink", "green", "purple", "black"
    ];

    constructor(private _eventAggregator, private _todoStore: TodoStore) {
        _eventAggregator.subscribe(TodoListUpdatedMessage, todos => {
            this.todos = todos.todos;
        });
    }

    public Load() {
        this._todoStore.loadTodos();
    }
    
    public AddTask() {
        this._todoStore.addTodo(this.currentTask);
        this.currentTask = "";
        this.hasFocus = true;
        this.colour = this.colours[Math.floor((Math.random() * 6))];
    }

    public RemoveTask(id:number) {
        this._todoStore.removeToDos(id);
    }
}